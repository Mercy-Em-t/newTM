import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import type { AntilibraryBook } from '../../data/antilibrary';
import { useLibraryBooks } from '../../hooks/useContent';
import { Search, X, BookOpen, Quote, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export const LibraryView: React.FC = () => {
  const { navigate } = useNavigation();
  const allBooks = useLibraryBooks();
  const [selectedBook, setSelectedBook] = useState<AntilibraryBook | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { key: 'all', label: `All Volumes (${allBooks.length})` },
    { key: 'philosophy', label: 'Philosophy & Psychology' },
    { key: 'literature', label: '19th-Century Literature' },
    { key: 'engineering', label: 'Systems & Engineering' },
  ];

  const popularTopics = [
    'Invariants',
    'Concurrency',
    'Nietzsche',
    'Brooks’s Law',
    'Gall’s Law',
    'Architecture',
    'Dostoevsky',
    '3NF Schemas',
    'Tesla',
  ];

  const filteredBooks = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allBooks.filter((b) => {
      const matchesCat = categoryFilter === 'all' || b.category === categoryFilter;
      if (!matchesCat) return false;
      if (!q) return true;

      const inTitle = b.title.toLowerCase().includes(q);
      const inAuthor = b.author.toLowerCase().includes(q);
      const inMarginalia = b.marginalia.toLowerCase().includes(q);
      const inThesis = b.architecturalThesis.toLowerCase().includes(q);
      const inNotes = b.savannahNotes.toLowerCase().includes(q);
      const inPassages = b.recommendedPassages.some((p) => p.toLowerCase().includes(q));

      return inTitle || inAuthor || inMarginalia || inThesis || inNotes || inPassages;
    });
  }, [allBooks, categoryFilter, searchQuery]);

  return (
    <section className="view-enter pt-8 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto space-y-6 sm:space-y-7 transition-all duration-300">
        {/* Header Masthead */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 border-b t-border-subtle pb-5 sm:pb-6">
          <div>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] t-accent-warm block mb-1.5 font-semibold">
              INTELLECTUAL PROVENANCE
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight t-text-primary leading-tight">
              Personal <span className="italic t-accent-editorial">Antilibrary</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base t-text-secondary max-w-3xl text-pretty mt-2 leading-relaxed font-light">
              Works of classical philosophy, 19th-century literature, and systems engineering—paired with personal marginalia, architectural theses, and field notes that shape how we reason and architect.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="font-mono text-xs px-4 py-2 rounded-full theme-badge t-accent-warm font-semibold">
              {allBooks.length} Curated Volumes · Click Any Card to Read
            </span>
          </div>
        </div>

        {/* Sticky Search & Filter Controls */}
        <div 
          className="sticky top-16 xl:top-14 z-20 glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-5 space-y-3.5 shadow-2xl backdrop-blur-2xl border t-border-subtle transition-all duration-200"
          style={{ background: 'var(--nav-bg)' }}
        >
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-lavender-rose/60">
                <Search className="w-4 h-4 text-precious-gold" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search volumes by title, author, or keyword (e.g. Invariants, Concurrency, Nietzsche, Brooks)..."
                className="theme-input w-full pl-11 pr-10 py-2.5 sm:py-3 rounded-full text-xs font-mono transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-lavender-rose/70 hover:text-precious-gold font-mono text-base font-bold"
                  title="Clear search"
                >
                  &times;
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="shrink-0 flex items-center justify-between md:justify-end gap-3 px-2">
              <span className="font-mono text-xs t-accent-warm font-semibold">
                Showing {filteredBooks.length} of {allBooks.length} volumes
              </span>
            </div>
          </div>

          {/* Popular Topic Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[11px] font-mono">
            <span className="t-accent-warm font-semibold mr-1 flex items-center gap-1">
              <Tag className="w-3 h-3 text-precious-gold" />
              Popular Topics:
            </span>
            {popularTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setSearchQuery(topic)}
                className="px-2.5 py-0.5 sm:py-1 rounded-full inner-panel border t-border-subtle hover:border-precious-gold transition-colors text-precious-gold"
              >
                #{topic}
              </button>
            ))}
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pt-0.5 pb-0.5" role="group" aria-label="Filter Antilibrary">
            {categories.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setCategoryFilter(c.key)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                  categoryFilter === c.key ? 'btn-luminous !text-[#1A0822] font-bold shadow-md' : 'btn-ghost-twilight t-text-primary'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Volumes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <article
              key={book.id}
              onClick={() => setSelectedBook(book)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedBook(book);
                }
              }}
              className="glass-card rounded-3xl p-7 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 hover:border-precious-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fae-fruit"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] t-accent-warm">
                    {book.categoryLabel}
                  </span>
                  <span className="font-mono text-[10px] text-precious-gold bg-precious-gold/10 px-2 py-0.5 rounded-full border border-precious-gold/30">
                    {book.year || 'Classic'}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl t-text-primary group-hover:t-accent-editorial transition-colors mt-1 leading-snug font-normal">
                  {book.title}
                </h2>
                <p className="text-xs font-mono t-accent-editorial mt-1 mb-5 font-semibold">
                  &mdash; {book.author}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t t-border-subtle">
                <p className="text-xs sm:text-sm italic t-text-secondary leading-relaxed line-clamp-4 font-light">
                  &ldquo;{book.marginalia}&rdquo;
                </p>

                <div className="flex items-center justify-between text-xs font-mono t-accent-warm pt-2 group-hover:text-precious-gold transition-colors">
                  <span className="flex items-center gap-1.5 font-medium">
                    <BookOpen className="w-3.5 h-3.5 text-precious-gold" />
                    <span>Read Monograph</span>
                  </span>
                  <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Book Monograph Reader Modal */}
      {selectedBook &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-5 md:p-6"
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-surface relative w-full max-w-4xl lg:max-w-5xl h-[92vh] max-h-[92vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl border t-border-subtle my-auto">
              {/* Sticky Header */}
              <header
                className="sticky top-0 z-30 shrink-0 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-3 border-b t-border-subtle"
                style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(24px)' }}
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <span className="hidden sm:inline-flex font-mono text-[9.5px] uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full theme-badge shrink-0">
                    ANTILIBRARY
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-serif text-sm sm:text-base font-medium t-text-primary truncate">
                      {selectedBook.title}
                    </span>
                    <span className="font-mono text-[10px] t-accent-warm truncate">
                      By {selectedBook.author} · {selectedBook.year}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedBook(null)}
                  className="p-2 sm:p-2.5 rounded-full inner-panel t-text-primary hover:border-fae-fruit hover:text-fae-fruit transition-all shrink-0"
                  aria-label="Close Book"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </header>

              {/* Scrollable Reader Body */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-8 md:p-10 space-y-8 luxury-scrollbar">
                {/* Header Masthead */}
                <div className="border-b t-border-subtle pb-6 space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full theme-badge inline-block font-semibold">
                    {selectedBook.categoryLabel}
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold t-text-primary leading-tight">
                    {selectedBook.title}
                  </h1>
                  <p className="font-mono text-sm t-accent-editorial">
                    {selectedBook.author} &middot; First published {selectedBook.year}
                  </p>
                </div>

                {/* Marginalia Callout */}
                <div className="glass-card rounded-2xl p-6 sm:p-7 border-l-4 border-l-precious-gold space-y-2">
                  <div className="flex items-center gap-2 text-precious-gold font-mono text-xs uppercase tracking-wider font-bold">
                    <Quote className="w-4 h-4" />
                    <span>Personal Marginalia</span>
                  </div>
                  <p className="font-serif italic text-base sm:text-lg t-text-primary leading-relaxed">
                    &ldquo;{selectedBook.marginalia}&rdquo;
                  </p>
                </div>

                {/* Architectural Thesis */}
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-semibold t-text-primary flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-fae-fruit" />
                    <span>Architectural Thesis & Systemic Application</span>
                  </h3>
                  <p className="text-sm sm:text-base t-text-secondary leading-relaxed font-light">
                    {selectedBook.architecturalThesis}
                  </p>
                </div>

                {/* Key Excerpts */}
                {selectedBook.keyExcerpts && selectedBook.keyExcerpts.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-semibold t-text-primary">
                      Key Excerpts & Commentary
                    </h3>
                    <div className="space-y-4">
                      {selectedBook.keyExcerpts.map((excerpt, idx) => (
                        <div key={idx} className="inner-panel rounded-2xl p-5 border t-border-subtle space-y-2.5">
                          <h4 className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold">
                            {excerpt.heading}
                          </h4>
                          <blockquote className="border-l-2 border-white/20 pl-4 py-1 italic text-xs sm:text-sm t-text-primary leading-relaxed">
                            &ldquo;{excerpt.quote}&rdquo;
                          </blockquote>
                          <p className="text-[11px] font-mono t-text-muted">
                            {excerpt.citation}
                          </p>
                          <p className="text-xs sm:text-sm t-text-secondary leading-relaxed pt-1 font-light">
                            <strong>Atelier Commentary:</strong> {excerpt.commentary}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Savannah Notes Rule */}
                {selectedBook.savannahNotes && (
                  <div className="p-5 rounded-2xl bg-black/40 border border-fae-fruit/30 space-y-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-fae-fruit font-bold block">
                      Savannah Atelier Engineering Directive
                    </span>
                    <p className="font-mono text-xs t-text-primary leading-relaxed">
                      {selectedBook.savannahNotes}
                    </p>
                  </div>
                )}

                {/* Recommended Passages */}
                {selectedBook.recommendedPassages && selectedBook.recommendedPassages.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold block">
                      Recommended Passages
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-xs font-mono t-text-secondary">
                      {selectedBook.recommendedPassages.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sticky Footer */}
              <footer
                className="sticky bottom-0 z-30 shrink-0 px-4 sm:px-8 py-3.5 border-t t-border-subtle flex items-center justify-between gap-3"
                style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(24px)' }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setSelectedBook(null);
                    navigate('commission');
                  }}
                  className="px-5 py-2.5 rounded-full btn-luminous text-xs font-mono uppercase tracking-wider font-semibold inline-flex items-center gap-2"
                >
                  <span>Commission Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedBook(null)}
                  className="px-4 py-2 rounded-full inner-panel border t-border-subtle hover:border-precious-gold text-xs font-mono t-text-secondary hover:t-text-primary transition-colors"
                >
                  Close Reader
                </button>
              </footer>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
