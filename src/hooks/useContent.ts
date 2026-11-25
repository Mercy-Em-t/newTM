import { useState, useEffect, useMemo } from 'react';
import { PORTFOLIO_PROJECTS, type Project } from '../data/projects';
import { PUBLICATIONS, type Publication } from '../data/publications';
import { STUDIO_SERIES, type StudioSeriesItem } from '../data/studio';
import { ANTILIBRARY_BOOKS, type AntilibraryBook } from '../data/antilibrary';
import { PROTOCOL_STEPS, type ProtocolStep } from '../data/protocol';
import { CATALOG_SERVICES, CATALOG_PRODUCTS, type CatalogService, type CatalogProduct } from '../data/catalog';
import { atelierApi, type InquiryPayload, type InquiryResult } from '../services/api';

/**
 * Hook to retrieve portfolio projects with optional filtering and live backend sync.
 */
export function useProjects(options?: { featuredOnly?: boolean; category?: string }): Project[] {
  const [projects, setProjects] = useState<Project[]>(() => {
    let list = [...PORTFOLIO_PROJECTS];
    if (options?.featuredOnly) list = list.filter((p) => p.featured);
    if (options?.category && options.category !== 'all') list = list.filter((p) => p.category === options.category);
    return list;
  });

  useEffect(() => {
    let isMounted = true;
    atelierApi.getProjects(options).then((res) => {
      if (isMounted && res.data) {
        setProjects(res.data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [options?.featuredOnly, options?.category]);

  return projects;
}

/**
 * Hook to look up a single project by ID.
 */
export function useProjectById(id: string | null): Project | undefined {
  return useMemo(() => {
    if (!id) return undefined;
    return PORTFOLIO_PROJECTS.find((p) => p.id === id);
  }, [id]);
}

/**
 * Hook to retrieve publications with optional category filtering and live backend sync.
 */
export function usePublications(category?: string): Publication[] {
  const [pubs, setPubs] = useState<Publication[]>(() => {
    if (!category || category === 'all') return PUBLICATIONS;
    return PUBLICATIONS.filter((p) => p.category.toLowerCase().includes(category.toLowerCase()));
  });

  useEffect(() => {
    let isMounted = true;
    atelierApi.getPublications(category).then((res) => {
      if (isMounted && res.data) {
        setPubs(res.data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [category]);

  return pubs;
}

/**
 * Hook to retrieve studio visual essays & episodes with live backend sync.
 */
export function useStudioSeries(category?: string): StudioSeriesItem[] {
  const [series, setSeries] = useState<StudioSeriesItem[]>(() => {
    if (!category || category === 'all') return STUDIO_SERIES;
    return STUDIO_SERIES.filter((s) => s.category === category);
  });

  useEffect(() => {
    let isMounted = true;
    atelierApi.getStudioSeries(category).then((res) => {
      if (isMounted && res.data) {
        setSeries(res.data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [category]);

  return series;
}

/**
 * Hook to retrieve antilibrary volumes with live backend sync.
 */
export function useLibraryBooks(options?: { category?: string; query?: string }): AntilibraryBook[] {
  const [books, setBooks] = useState<AntilibraryBook[]>(() => {
    let list = [...ANTILIBRARY_BOOKS];
    if (options?.category && options.category !== 'all') {
      list = list.filter((b) => b.category === options.category);
    }
    if (options?.query) {
      const q = options.query.toLowerCase().trim();
      list = list.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.architecturalThesis.toLowerCase().includes(q)
      );
    }
    return list;
  });

  useEffect(() => {
    let isMounted = true;
    atelierApi.getLibraryBooks(options).then((res) => {
      if (isMounted && res.data) {
        setBooks(res.data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [options?.category, options?.query]);

  return books;
}

/**
 * Hook to retrieve commissioning protocol steps.
 */
export function useProtocolSteps(): ProtocolStep[] {
  return PROTOCOL_STEPS;
}

/**
 * Hook to retrieve standalone engineering services with live backend sync.
 */
export function useCatalogServices(): CatalogService[] {
  const [services, setServices] = useState<CatalogService[]>(CATALOG_SERVICES);

  useEffect(() => {
    let isMounted = true;
    atelierApi.getCatalogServices().then((res) => {
      if (isMounted && res.data) {
        setServices(res.data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return services;
}

/**
 * Hook to retrieve pre-built products and labs IP with live backend sync.
 */
export function useCatalogProducts(): CatalogProduct[] {
  const [products, setProducts] = useState<CatalogProduct[]>(CATALOG_PRODUCTS);

  useEffect(() => {
    let isMounted = true;
    atelierApi.getCatalogProducts().then((res) => {
      if (isMounted && res.data) {
        setProducts(res.data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return products;
}

/**
 * Hook for live backend gateway telemetry.
 */
export function useBackendTelemetry() {
  const [status, setStatus] = useState<'checking' | 'connected' | 'offline'>('checking');
  const [uptime, setUptime] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    atelierApi.checkHealth().then((res) => {
      if (isMounted) {
        if (res && res.status === 'online') {
          setStatus('connected');
          setUptime(res.uptimeSeconds ?? 0);
        } else {
          setStatus('offline');
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return { status, uptime };
}

/**
 * Hook for submitting inquiries/commissions to the backend.
 */
export function useCommissionInquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<InquiryResult | null>(null);

  const submit = async (payload: InquiryPayload) => {
    setIsSubmitting(true);
    try {
      const res = await atelierApi.submitInquiry(payload);
      setResult(res);
      return res;
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => setResult(null);

  return { submit, isSubmitting, result, reset };
}
