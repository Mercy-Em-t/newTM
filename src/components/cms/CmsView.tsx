import React, { useState } from 'react';
import { 
  Download, 
  Upload, 
  RotateCcw, 
  Plus, 
  Search, 
  Trash2, 
  Edit3, 
  Copy
} from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { PUBLICATIONS } from '../../data/publications';
import { STUDIO_SERIES } from '../../data/studio';
import { ANTILIBRARY_BOOKS } from '../../data/antilibrary';
import { PORTFOLIO_PROJECTS } from '../../data/projects';

export const CmsView: React.FC = () => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<'publications' | 'studio' | 'library' | 'projects'>('publications');
  const [searchQuery, setSearchQuery] = useState('');

  const handleExport = () => {
    const backup = {
      publications: PUBLICATIONS,
      studio: STUDIO_SERIES,
      library: ANTILIBRARY_BOOKS,
      projects: PORTFOLIO_PROJECTS,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `savannah-atelier-manifest-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Manifest exported successfully.', 'success');
  };

  return (
    <section className="view-enter py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Executive CMS Top Header (indexA.html lines 6744-6777) */}
        <div className="glass-card rounded-[2rem] p-8 sm:p-10 relative overflow-hidden border border-opal/35">
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[110px] pointer-events-none"
            style={{ background: 'var(--aura-crimson)' }}
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-precious-gold animate-pulse"></span>
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-precious-gold font-semibold">
                  Savannah Atelier &middot; Editorial Console
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-light t-text-primary leading-tight">
                Content Management <span className="italic t-accent-editorial">Suite</span>
              </h1>
              <p className="text-xs sm:text-sm t-text-secondary leading-relaxed font-light">
                Centralized lifecycle management across Technical Publications, Studio Video Breakdowns, Personal Antilibrary Volumes, and Client Case Studies.
              </p>
            </div>

            {/* Action Bar: Export, Import, Reset */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => showToast('Manifest upload ready.')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full btn-ghost-twilight text-xs font-mono"
                title="Restore content from a JSON manifest"
              >
                <Upload className="w-3.5 h-3.5 text-cyan-400" />
                <span>Import JSON</span>
              </button>
              <button
                type="button"
                onClick={handleExport}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full btn-ghost-twilight text-xs font-mono"
                title="Export full site content to JSON backup"
              >
                <Download className="w-3.5 h-3.5 text-precious-gold" />
                <span>Export Backup</span>
              </button>
              <button
                type="button"
                onClick={() => showToast('Baseline confirmed.')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full btn-ghost-twilight text-xs font-mono text-rose-400 hover:text-rose-300"
                title="Reset to factory baseline"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>

        {/* Channel Metric Cards (4 Pillars) (indexA.html lines 6780-6816) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => setActiveTab('publications')}
            className={`p-5 rounded-2xl glass-card cursor-pointer border t-border-subtle hover:border-precious-gold transition-all group ${
              activeTab === 'publications' ? 'ring-2 ring-fae-fruit' : ''
            }`}
          >
            <span className="font-mono text-[10px] uppercase tracking-wider t-accent-warm block mb-1">Channel 01</span>
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-xl sm:text-2xl t-text-primary group-hover:t-accent-editorial transition-colors">
                Publications
              </h3>
              <span className="font-mono text-sm font-bold text-precious-gold">{PUBLICATIONS.length}</span>
            </div>
            <p className="text-[11px] t-text-secondary mt-1">Monographs &amp; Papers</p>
          </div>

          <div
            onClick={() => setActiveTab('studio')}
            className={`p-5 rounded-2xl glass-card cursor-pointer border t-border-subtle hover:border-precious-gold transition-all group ${
              activeTab === 'studio' ? 'ring-2 ring-fae-fruit' : ''
            }`}
          >
            <span className="font-mono text-[10px] uppercase tracking-wider t-accent-warm block mb-1">Channel 02</span>
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-xl sm:text-2xl t-text-primary group-hover:t-accent-editorial transition-colors">
                Studio Video
              </h3>
              <span className="font-mono text-sm font-bold text-precious-gold">{STUDIO_SERIES.length}</span>
            </div>
            <p className="text-[11px] t-text-secondary mt-1">Breakdowns &amp; Essays</p>
          </div>

          <div
            onClick={() => setActiveTab('library')}
            className={`p-5 rounded-2xl glass-card cursor-pointer border t-border-subtle hover:border-precious-gold transition-all group ${
              activeTab === 'library' ? 'ring-2 ring-fae-fruit' : ''
            }`}
          >
            <span className="font-mono text-[10px] uppercase tracking-wider t-accent-warm block mb-1">Channel 03</span>
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-xl sm:text-2xl t-text-primary group-hover:t-accent-editorial transition-colors">
                Antilibrary
              </h3>
              <span className="font-mono text-sm font-bold text-precious-gold">{ANTILIBRARY_BOOKS.length}</span>
            </div>
            <p className="text-[11px] t-text-secondary mt-1">Volumes &amp; Marginalia</p>
          </div>

          <div
            onClick={() => setActiveTab('projects')}
            className={`p-5 rounded-2xl glass-card cursor-pointer border t-border-subtle hover:border-precious-gold transition-all group ${
              activeTab === 'projects' ? 'ring-2 ring-fae-fruit' : ''
            }`}
          >
            <span className="font-mono text-[10px] uppercase tracking-wider t-accent-warm block mb-1">Channel 04</span>
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-xl sm:text-2xl t-text-primary group-hover:t-accent-editorial transition-colors">
                Case Studies
              </h3>
              <span className="font-mono text-sm font-bold text-precious-gold">{PORTFOLIO_PROJECTS.length}</span>
            </div>
            <p className="text-[11px] t-text-secondary mt-1">Client Architectures</p>
          </div>
        </div>

        {/* Toolbar: Search & Create */}
        <div className="glass-card rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-precious-gold" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${activeTab}...`}
              className="theme-input w-full pl-10 pr-4 py-2.5 rounded-full text-xs font-mono"
            />
          </div>
          <button
            type="button"
            onClick={() => showToast(`Creating new ${activeTab.slice(0, -1)} draft...`)}
            className="px-5 py-2.5 rounded-full btn-luminous text-xs font-mono uppercase tracking-wider font-semibold inline-flex items-center gap-1.5 shrink-0 shadow-md"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create New Entry</span>
          </button>
        </div>

        {/* Channel Records List */}
        <div className="space-y-3">
          {activeTab === 'publications' &&
            PUBLICATIONS.filter((p) => !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase())).map((pub) => (
              <div key={pub.id} className="p-4 sm:p-5 rounded-2xl glass-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md inner-panel text-precious-gold">
                      {pub.category}
                    </span>
                    <span className="font-mono text-xs t-text-muted">{pub.readTime}</span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold t-text-primary truncate">{pub.title}</h4>
                  <p className="text-xs font-mono t-text-muted truncate">{pub.ref} &middot; {pub.date}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button type="button" onClick={() => showToast(`Editing: ${pub.title}`)} className="p-2 rounded-xl inner-panel hover:border-precious-gold text-precious-gold">
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button type="button" onClick={() => showToast(`Duplicated: ${pub.title}`)} className="p-2 rounded-xl inner-panel hover:border-white/30 text-lavender-rose/80">
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  <button type="button" onClick={() => showToast(`Archive request logged.`)} className="p-2 rounded-xl inner-panel hover:border-rose-400 text-rose-400">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

          {activeTab === 'studio' &&
            STUDIO_SERIES.filter((s) => !searchQuery || s.title.toLowerCase().includes(searchQuery.toLowerCase())).map((series) => (
              <div key={series.id} className="p-4 sm:p-5 rounded-2xl glass-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md inner-panel text-precious-gold">
                      {series.seriesNumber}
                    </span>
                    <span className="font-mono text-xs t-text-muted">{series.episodes.length} Episodes</span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold t-text-primary truncate">{series.title}</h4>
                  <p className="text-xs font-mono t-text-muted truncate">{series.tag} &middot; {series.duration}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button type="button" onClick={() => showToast(`Editing: ${series.title}`)} className="p-2 rounded-xl inner-panel hover:border-precious-gold text-precious-gold">
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button type="button" onClick={() => showToast(`Duplicated: ${series.title}`)} className="p-2 rounded-xl inner-panel hover:border-white/30 text-lavender-rose/80">
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

          {activeTab === 'library' &&
            ANTILIBRARY_BOOKS.filter((b) => !searchQuery || b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.author.toLowerCase().includes(searchQuery.toLowerCase())).map((book) => (
              <div key={book.id} className="p-4 sm:p-5 rounded-2xl glass-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md inner-panel text-precious-gold">
                      {book.categoryLabel}
                    </span>
                    <span className="font-mono text-xs t-text-muted">{book.year}</span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold t-text-primary truncate">{book.title}</h4>
                  <p className="text-xs font-mono t-text-muted truncate">By {book.author}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button type="button" onClick={() => showToast(`Editing: ${book.title}`)} className="p-2 rounded-xl inner-panel hover:border-precious-gold text-precious-gold">
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button type="button" onClick={() => showToast(`Duplicated: ${book.title}`)} className="p-2 rounded-xl inner-panel hover:border-white/30 text-lavender-rose/80">
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

          {activeTab === 'projects' &&
            PORTFOLIO_PROJECTS.filter((p) => !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase())).map((proj) => (
              <div key={proj.id} className="p-4 sm:p-5 rounded-2xl glass-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md inner-panel text-precious-gold">
                      {proj.categoryLabel}
                    </span>
                    <span className="font-mono text-xs t-text-muted">{proj.stack.slice(0, 3).join(', ')}</span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold t-text-primary truncate">{proj.title}</h4>
                  <p className="text-xs font-mono t-text-muted truncate">{proj.subtitle}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button type="button" onClick={() => showToast(`Editing: ${proj.title}`)} className="p-2 rounded-xl inner-panel hover:border-precious-gold text-precious-gold">
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button type="button" onClick={() => showToast(`Duplicated: ${proj.title}`)} className="p-2 rounded-xl inner-panel hover:border-white/30 text-lavender-rose/80">
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
