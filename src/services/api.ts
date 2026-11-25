/**
 * Savannah Atelier API Client
 * 
 * Provides type-safe communication with the headless backend service (:3050).
 * Implements the Defensive Resilient Adapter pattern: if the backend is booting
 * or offline, it gracefully falls back to embedded seed manifests with zero layout shift.
 */

import { PORTFOLIO_PROJECTS, type Project } from '../data/projects';
import { CATALOG_SERVICES, CATALOG_PRODUCTS, type CatalogService, type CatalogProduct } from '../data/catalog';
import { PUBLICATIONS, type Publication } from '../data/publications';
import { STUDIO_SERIES, type StudioSeriesItem } from '../data/studio';
import { ANTILIBRARY_BOOKS, type AntilibraryBook } from '../data/antilibrary';

const API_BASE = '/api/v1';
const REQUEST_TIMEOUT_MS = 3500;

async function fetchWithTimeout(url: string, options: RequestInit = {}): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    });
    clearTimeout(id);
    return response;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  count?: number;
  source: 'network' | 'seed-fallback';
  error?: string;
}

export interface InquiryPayload {
  clientName: string;
  email: string;
  phone?: string;
  scope: string;
  budgetCurrency?: 'KES' | 'USD';
  timeline?: string;
  architectureNotes?: string;
}

export interface InquiryResult {
  success: boolean;
  inquiryId?: string;
  message: string;
  issues?: Array<{ field: string; message: string }>;
}

export const atelierApi = {
  /**
   * Health and telemetry probe.
   */
  async checkHealth(): Promise<{ status: string; service?: string; uptimeSeconds?: number } | null> {
    try {
      const res = await fetchWithTimeout(`${API_BASE}/health`);
      if (res.ok) return await res.json();
      return null;
    } catch {
      return null;
    }
  },

  /**
   * Retrieve portfolio projects with fallback.
   */
  async getProjects(options?: { category?: string; featuredOnly?: boolean }): Promise<ApiResponse<Project[]>> {
    try {
      const params = new URLSearchParams();
      if (options?.category && options.category !== 'all') params.set('category', options.category);
      if (options?.featuredOnly) params.set('featured', 'true');

      const url = `${API_BASE}/projects${params.toString() ? `?${params.toString()}` : ''}`;
      const res = await fetchWithTimeout(url);
      if (res.ok) {
        const json = await res.json();
        return { success: true, data: json.data, count: json.count, source: 'network' };
      }
    } catch (e) {
      console.info('[Savannah Atelier] Backend offline; serving local project manifests.');
    }

    // Graceful offline fallback
    let fallback = [...PORTFOLIO_PROJECTS];
    if (options?.featuredOnly) fallback = fallback.filter((p) => p.featured);
    if (options?.category && options.category !== 'all') fallback = fallback.filter((p) => p.category === options.category);

    return { success: true, data: fallback, count: fallback.length, source: 'seed-fallback' };
  },

  /**
   * Retrieve standalone catalog services.
   */
  async getCatalogServices(): Promise<ApiResponse<CatalogService[]>> {
    try {
      const res = await fetchWithTimeout(`${API_BASE}/catalog/services`);
      if (res.ok) {
        const json = await res.json();
        return { success: true, data: json.data, count: json.count, source: 'network' };
      }
    } catch {
      console.info('[Savannah Atelier] Serving catalog services from seed manifest.');
    }
    return { success: true, data: CATALOG_SERVICES, count: CATALOG_SERVICES.length, source: 'seed-fallback' };
  },

  /**
   * Retrieve catalog products and IP.
   */
  async getCatalogProducts(): Promise<ApiResponse<CatalogProduct[]>> {
    try {
      const res = await fetchWithTimeout(`${API_BASE}/catalog/products`);
      if (res.ok) {
        const json = await res.json();
        return { success: true, data: json.data, count: json.count, source: 'network' };
      }
    } catch {
      console.info('[Savannah Atelier] Serving catalog products from seed manifest.');
    }
    return { success: true, data: CATALOG_PRODUCTS, count: CATALOG_PRODUCTS.length, source: 'seed-fallback' };
  },

  /**
   * Retrieve publications.
   */
  async getPublications(category?: string): Promise<ApiResponse<Publication[]>> {
    try {
      const params = category && category !== 'all' ? `?category=${encodeURIComponent(category)}` : '';
      const res = await fetchWithTimeout(`${API_BASE}/publications${params}`);
      if (res.ok) {
        const json = await res.json();
        return { success: true, data: json.data, count: json.count, source: 'network' };
      }
    } catch {
      console.info('[Savannah Atelier] Serving publications from seed manifest.');
    }
    let fallback = [...PUBLICATIONS];
    if (category && category !== 'all') {
      fallback = fallback.filter((p) => p.category.toLowerCase().includes(category.toLowerCase()));
    }
    return { success: true, data: fallback, count: fallback.length, source: 'seed-fallback' };
  },

  /**
   * Retrieve studio series.
   */
  async getStudioSeries(category?: string): Promise<ApiResponse<StudioSeriesItem[]>> {
    try {
      const params = category && category !== 'all' ? `?category=${encodeURIComponent(category)}` : '';
      const res = await fetchWithTimeout(`${API_BASE}/studio${params}`);
      if (res.ok) {
        const json = await res.json();
        return { success: true, data: json.data, count: json.count, source: 'network' };
      }
    } catch {
      console.info('[Savannah Atelier] Serving studio series from seed manifest.');
    }
    let fallback = [...STUDIO_SERIES];
    if (category && category !== 'all') fallback = fallback.filter((s) => s.category === category);
    return { success: true, data: fallback, count: fallback.length, source: 'seed-fallback' };
  },

  /**
   * Retrieve antilibrary volumes.
   */
  async getLibraryBooks(options?: { category?: string; query?: string }): Promise<ApiResponse<AntilibraryBook[]>> {
    try {
      const params = new URLSearchParams();
      if (options?.category && options.category !== 'all') params.set('category', options.category);
      if (options?.query) params.set('q', options.query);

      const url = `${API_BASE}/library${params.toString() ? `?${params.toString()}` : ''}`;
      const res = await fetchWithTimeout(url);
      if (res.ok) {
        const json = await res.json();
        return { success: true, data: json.data, count: json.count, source: 'network' };
      }
    } catch {
      console.info('[Savannah Atelier] Serving antilibrary from seed manifest.');
    }

    let fallback = [...ANTILIBRARY_BOOKS];
    if (options?.category && options.category !== 'all') {
      fallback = fallback.filter((b) => b.category === options.category);
    }
    if (options?.query) {
      const q = options.query.toLowerCase().trim();
      fallback = fallback.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.architecturalThesis.toLowerCase().includes(q)
      );
    }
    return { success: true, data: fallback, count: fallback.length, source: 'seed-fallback' };
  },

  /**
   * Submit commission inquiry to backend ledger.
   */
  async submitInquiry(payload: InquiryPayload): Promise<InquiryResult> {
    try {
      const res = await fetchWithTimeout(`${API_BASE}/inquiries`, {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.status === 201) {
        return {
          success: true,
          inquiryId: data.inquiryId,
          message: data.message || 'Commission inquiry registered.'
        };
      }
      return {
        success: false,
        message: data.error || 'Failed to submit inquiry',
        issues: data.issues
      };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network connection failure.';
      return {
        success: false,
        message: `Offline mode: ${msg}`
      };
    }
  }
};
