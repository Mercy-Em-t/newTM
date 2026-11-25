import React, { createContext, useContext, useEffect, useState } from 'react';

interface SidebarContextType {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  setCollapsed: (collapsed: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('savannah_sidebar_collapsed');
      return saved === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('savannah_sidebar_collapsed', String(isCollapsed));
    } catch {
      // ignore
    }
  }, [isCollapsed]);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  const setCollapsed = (val: boolean) => {
    setIsCollapsed(val);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleCollapse, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
