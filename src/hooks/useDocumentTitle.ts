import { useEffect } from 'react';
import type { RouteKey } from '../context/NavigationContext';

const ROUTE_TITLES: Record<RouteKey, string> = {
  home: 'Tryphen Emurugat — Savannah Atelier & Systems Architecture',
  work: 'Flagship Architecture Work — Savannah Atelier',
  studio: 'Studio & Broadcast Archive — The MercyVerse',
  publications: 'Monographs & Architectural Papers — Tryphen Emurugat',
  catalog: 'Solution Catalog & Interventions — Savannah Atelier',
  commission: 'Commissioning Protocol — Retain Systems Architecture',
  about: 'Practice & Manifesto — Savannah Atelier Nairobi',
  library: 'Personal Antilibrary (21 Volumes) — Tryphen Emurugat',
  labs: 'Emurugat Labs & Proving Ground — R&D Sandboxes',
  portal: 'Client Staging Portal — Savannah Atelier',
  cms: 'Editorial CMS Suite — Savannah Atelier',
};

export function useDocumentTitle(currentRoute: RouteKey) {
  useEffect(() => {
    const title = ROUTE_TITLES[currentRoute] || 'Tryphen Emurugat — Savannah Atelier';
    document.title = title;
  }, [currentRoute]);
}
