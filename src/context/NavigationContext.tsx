import React, { createContext, useContext, useEffect, useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export type RouteKey = 'home' | 'work' | 'studio' | 'publications' | 'catalog' | 'commission' | 'about' | 'library' | 'labs' | 'portal' | 'cms';

interface NavigationContextType {
  currentRoute: RouteKey;
  navigate: (route: RouteKey) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const routeMap: Record<string, RouteKey> = {
  '': 'home',
  '/': 'home',
  'home': 'home',
  'work': 'work',
  'projects': 'work',
  'studio': 'studio',
  'publications': 'publications',
  'papers': 'publications',
  'catalog': 'catalog',
  'commission': 'commission',
  'about': 'about',
  'practice': 'about',
  'library': 'library',
  'books': 'library',
  'antilibrary': 'library',
  'labs': 'labs',
  'sandbox': 'labs',
  'portal': 'portal',
  'staging': 'portal',
  'cms': 'cms',
  'admin': 'cms',
};

const getRouteFromLocation = (): RouteKey => {
  // 1. If someone visits with an old hash link (e.g. #/work or #work), respect it
  const hash = window.location.hash || '';
  if (hash) {
    const cleanHash = hash.replace(/^#\/?/, '').split('?')[0].replace(/\/+$/, '').toLowerCase();
    if (cleanHash && routeMap[cleanHash]) {
      return routeMap[cleanHash];
    }
  }

  // 2. Standard clean pathname (e.g. /work, /studio, /)
  const path = window.location.pathname || '/';
  const cleanPath = path.split('?')[0].replace(/^\/+/, '').replace(/\/+$/, '').toLowerCase();

  // 3. Social Vanity Redirects (e.g. /instagram -> opens your active IG handle from siteConfig)
  if (cleanPath === 'instagram') {
    window.location.replace(SITE_CONFIG.socials.instagram.url);
    return 'home';
  }
  if (cleanPath === 'whatsapp') {
    window.location.replace(SITE_CONFIG.contact.whatsapp.getUrl());
    return 'home';
  }
  if (cleanPath === 'github') {
    window.location.replace(SITE_CONFIG.socials.github.url);
    return 'home';
  }
  if (cleanPath === 'x' || cleanPath === 'twitter') {
    window.location.replace(SITE_CONFIG.socials.x.url);
    return 'home';
  }
  if (cleanPath === 'youtube') {
    window.location.replace(SITE_CONFIG.socials.youtubeMercyVerse.url);
    return 'home';
  }

  return routeMap[cleanPath] || 'home';
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<RouteKey>(getRouteFromLocation);

  useEffect(() => {
    const handleLocationChange = () => {
      const newRoute = getRouteFromLocation();
      setCurrentRoute(newRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // If initial load contained a hash like '#/work', cleanly upgrade it to '/work'
    const hash = window.location.hash || '';
    if (hash && hash.startsWith('#')) {
      const cleanHash = hash.replace(/^#\/?/, '').split('?')[0].replace(/\/+$/, '').toLowerCase();
      const mapped = routeMap[cleanHash] || 'home';
      const target = mapped === 'home' ? '/' : `/${mapped}`;
      window.history.replaceState(null, '', target);
    }

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (route: RouteKey) => {
    setCurrentRoute(route);
    const targetPath = route === 'home' ? '/' : `/${route}`;
    if (window.location.pathname !== targetPath || window.location.hash) {
      window.history.pushState(null, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error('useNavigation must be used within NavigationProvider');
  return context;
};
