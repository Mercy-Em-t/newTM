import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { SidebarProvider, useSidebar } from './context/SidebarContext';
import { ToastProvider } from './context/ToastContext';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import { AmbientBackground } from './components/layout/AmbientBackground';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { Footer } from './components/layout/Footer';
import { HomeView } from './components/home/HomeView';
import { WorkView } from './components/work/WorkView';
import { StudioView } from './components/studio/StudioView';
import { PublicationsView } from './components/publications/PublicationsView';
import { CatalogView } from './components/catalog/CatalogView';
import { CommissionView } from './components/commission/CommissionView';
import { AboutView } from './components/about/AboutView';
import { LibraryView } from './components/library/LibraryView';
import { LabsView } from './components/labs/LabsView';
import { PortalView } from './components/portal/PortalView';
import { CmsView } from './components/cms/CmsView';
import { CommandPalette } from './components/shared/CommandPalette';

const MainLayout: React.FC = () => {
  const { currentRoute } = useNavigation();
  const { isCollapsed, toggleCollapse } = useSidebar();
  const [cmdKOpen, setCmdKOpen] = useState(false);

  // Synchronize document.title with active SPA route
  useDocumentTitle(currentRoute);

  // Global keydown listeners for ⌘K / Ctrl+K, '/', and '[' / Ctrl+B sidebar toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      const isInput =
        activeTag === 'input' ||
        activeTag === 'textarea' ||
        (document.activeElement as HTMLElement)?.isContentEditable;

      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setCmdKOpen((prev) => !prev);
      } else if (e.key === '/' && !isInput && !cmdKOpen) {
        e.preventDefault();
        setCmdKOpen(true);
      } else if ((e.key === '[' || ((e.metaKey || e.ctrlKey) && (e.key === 'b' || e.key === 'B'))) && !isInput) {
        e.preventDefault();
        toggleCollapse();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cmdKOpen, toggleCollapse]);

  return (
    <div className="font-sans antialiased selection:bg-fae-fruit selection:text-white relative min-h-screen flex flex-col overflow-x-clip w-full">
      {/* Ambient Twilight Nebula & Architectural Blueprint Background (index.html lines 686-695) */}
      <AmbientBackground />

      {/* Desktop Architectural Sidebar Navigation (index.html lines 697-878) */}
      <Sidebar onOpenCmdK={() => setCmdKOpen(true)} />

      {/* Dynamic Content Layout: smoothly transitions left offset with sidebar collapse */}
      <div className={`flex-1 flex flex-col min-w-0 transition-[padding-left] duration-300 ease-in-out ${isCollapsed ? 'xl:pl-20' : 'xl:pl-72'}`}>
        {/* Top Executive Navbar Strip & Mobile Header */}
        <TopBar onOpenCmdK={() => setCmdKOpen(true)} />

        {/* View Engine */}
        <main id="appView" className="flex-1">
          {currentRoute === 'home' && <HomeView />}
          {currentRoute === 'work' && <WorkView />}
          {currentRoute === 'studio' && <StudioView />}
          {currentRoute === 'publications' && <PublicationsView />}
          {currentRoute === 'catalog' && <CatalogView />}
          {currentRoute === 'commission' && <CommissionView />}
          {currentRoute === 'about' && <AboutView />}
          {currentRoute === 'library' && <LibraryView />}
          {currentRoute === 'labs' && <LabsView />}
          {currentRoute === 'portal' && <PortalView />}
          {currentRoute === 'cms' && <CmsView />}
        </main>

        {/* Site Footer */}
        <Footer />
      </div>

      {/* Command Palette Modal (⌘K) */}
      <CommandPalette isOpen={cmdKOpen} onClose={() => setCmdKOpen(false)} />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <SidebarProvider>
          <ToastProvider>
            <MainLayout />
          </ToastProvider>
        </SidebarProvider>
      </NavigationProvider>
    </ThemeProvider>
  );
}
