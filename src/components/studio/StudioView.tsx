import React, { useState, useMemo, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { StudioSeriesItem, StudioEpisodeItem } from '../../data/studio';
import { useStudioSeries } from '../../hooks/useContent';
import { 
  Play, 
  X, 
  SkipBack, 
  SkipForward, 
  PictureInPicture, 
  ArrowRight, 
  ArrowDown, 
  Sparkles,
  ListVideo
} from 'lucide-react';

export const StudioView: React.FC = () => {
  const studioSeries = useStudioSeries();
  const [selectedSeries, setSelectedSeries] = useState<StudioSeriesItem | null>(null);
  const [activeEpisodeIdx, setActiveEpisodeIdx] = useState<number>(0);
  const [miniPlayer, setMiniPlayer] = useState<{ series: StudioSeriesItem; episode: StudioEpisodeItem } | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const activeEpisodeRef = useRef<HTMLDivElement>(null);

  // Auto-scroll active episode into view when switching episodes in large playlists
  useEffect(() => {
    if (selectedSeries && activeEpisodeRef.current) {
      activeEpisodeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeEpisodeIdx, selectedSeries]);

  // Pick the flagship featured series (Series III: Decoupling Monoliths, or first series)
  const featuredSeries = useMemo(() => {
    return studioSeries.find((s) => s.id === 'decoupling-monoliths') || studioSeries[0];
  }, [studioSeries]);

  const categories = [
    { key: 'all', label: `All Series Playlists (${studioSeries.length})` },
    { key: 'architecture', label: 'Architecture Breakdowns' },
    { key: 'narratives', label: '3D Narratives & MercyVerse' },
    { key: 'teardowns', label: 'Technical Teardowns & Rust' },
    { key: 'philosophy', label: 'Systems Philosophy & Craft' },
  ];

  const filteredSeries = useMemo(() => {
    if (activeCategory === 'all') return studioSeries;
    return studioSeries.filter((s) => {
      const cat = s.category.toLowerCase();
      const label = s.categoryLabel.toLowerCase();
      if (activeCategory === 'architecture') return cat.includes('architecture') || label.includes('architecture');
      if (activeCategory === 'narratives') return cat.includes('3d') || label.includes('narratives') || cat.includes('essay');
      if (activeCategory === 'teardowns') return cat.includes('teardown') || label.includes('teardown');
      if (activeCategory === 'philosophy') return cat.includes('philosophy') || label.includes('philosophy');
      return true;
    });
  }, [studioSeries, activeCategory]);

  const visibleSeries = filteredSeries.slice(0, visibleCount);

  const openSeriesModal = (series: StudioSeriesItem, episodeIndex: number = 0) => {
    setSelectedSeries(series);
    setActiveEpisodeIdx(episodeIndex);
  };

  const currentEpisode = selectedSeries?.episodes[activeEpisodeIdx];

  const handlePrev = () => {
    if (!selectedSeries) return;
    setActiveEpisodeIdx((prev) => (prev > 0 ? prev - 1 : selectedSeries.episodes.length - 1));
  };

  const handleNext = () => {
    if (!selectedSeries) return;
    setActiveEpisodeIdx((prev) => (prev < selectedSeries.episodes.length - 1 ? prev + 1 : 0));
  };

  const dockToMiniPlayer = () => {
    if (!selectedSeries || !currentEpisode) return;
    setMiniPlayer({ series: selectedSeries, episode: currentEpisode });
    setSelectedSeries(null);
  };

  return (
    <section className="view-enter pt-10 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto space-y-12 transition-all duration-300">
        {/* Studio Masthead */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b t-border-subtle pb-6 sm:pb-8">
          <div>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] t-accent-warm block mb-2 font-semibold">
              STUDIO &amp; BROADCAST ARCHIVE
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight t-text-primary">
              Visual Essays &amp; <span className="italic t-accent-editorial">Studio Breakdowns</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base t-text-secondary leading-relaxed max-w-3xl text-pretty mt-2.5 font-light">
              28+ Visual Essays &middot; 8 Technical Teardowns &middot; 3D Narratives &middot; Systems Architecture. Stream deep architectural breakdowns and distributed systems philosophies directly inside our privacy-enhanced player.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/@MercyVerse-all1000lifetimes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full inner-panel border border-white/10 hover:border-precious-gold text-xs font-mono text-precious-gold transition-all inline-flex items-center gap-1.5"
            >
              <span>MercyVerse ↗</span>
            </a>
            <a
              href="https://www.youtube.com/@TryphenEmurugatLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full inner-panel border border-white/10 hover:border-precious-gold text-xs font-mono text-precious-gold transition-all inline-flex items-center gap-1.5"
            >
              <span>Labs Channel ↗</span>
            </a>
          </div>
        </div>

        {/* TIER 1: FEATURED TOP VIDEO SPOTLIGHT (MARQUEE PLAYER) */}
        {featuredSeries && (
          <div className="rounded-[2.25rem] border t-border-subtle overflow-hidden glass-card shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Cinematic Thumbnail Stage (Span 7) */}
              <div 
                className={`lg:col-span-7 aspect-video lg:aspect-auto w-full relative bg-gradient-to-tr ${featuredSeries.gradient} flex items-center justify-center p-6 sm:p-12 cursor-pointer group`}
                onClick={() => openSeriesModal(featuredSeries, 0)}
              >
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-black/70 text-precious-gold border border-precious-gold/30 font-bold backdrop-blur-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured Spotlight</span>
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-black/60 text-white border border-white/10 font-bold backdrop-blur-md">
                    {featuredSeries.seriesNumber}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="font-mono text-[10px] px-3 py-1 rounded-full bg-black/70 text-precious-gold border border-precious-gold/30 font-bold backdrop-blur-md flex items-center gap-1.5">
                    <ListVideo className="w-3.5 h-3.5" />
                    <span>Playlist &middot; {featuredSeries.totalEpisodes} Episodes</span>
                  </span>
                </div>

                {/* Big Luminous Play Button */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/70 border-2 border-precious-gold flex items-center justify-center group-hover:scale-110 group-hover:bg-precious-gold group-hover:text-black text-precious-gold transition-all shadow-2xl backdrop-blur-md">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/80">
                  <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md">
                    Total Duration: {featuredSeries.duration}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-precious-gold">
                    Click to Stream &rarr;
                  </span>
                </div>
              </div>

              {/* Right Series Metadata & Episode Tracklist (Span 5) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold">
                      {featuredSeries.categoryLabel}
                    </span>
                    <span className="font-mono text-[11px] t-text-muted">
                      Full Series Masterclass
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl t-text-primary font-normal leading-tight">
                    {featuredSeries.title}
                  </h2>

                  <p className="text-xs sm:text-sm t-text-secondary leading-relaxed font-light">
                    {featuredSeries.description}
                  </p>

                  {/* Episode Quick-Picker */}
                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] t-text-muted block font-semibold">
                      Included Episodes in this Playlist:
                    </span>
                    <div className="space-y-1.5">
                      {featuredSeries.episodes.slice(0, 3).map((ep, idx) => (
                        <div
                          key={ep.episodeNumber}
                          onClick={() => openSeriesModal(featuredSeries, idx)}
                          role="button"
                          tabIndex={0}
                          className="p-2.5 rounded-xl inner-panel border border-white/5 hover:border-precious-gold flex items-center justify-between text-xs transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-2.5 truncate mr-2">
                            <span className="font-mono text-[10px] text-precious-gold font-bold w-4 shrink-0">
                              0{ep.episodeNumber}
                            </span>
                            <span className="t-text-primary group-hover:text-precious-gold truncate">
                              {ep.title}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] t-text-muted shrink-0">
                            {ep.duration}
                          </span>
                        </div>
                      ))}
                      {featuredSeries.episodes.length > 3 && (
                        <div
                          onClick={() => openSeriesModal(featuredSeries, 3)}
                          role="button"
                          tabIndex={0}
                          className="p-2 text-center rounded-xl inner-panel border border-dashed border-white/10 hover:border-precious-gold text-[11px] font-mono text-precious-gold cursor-pointer transition-colors"
                        >
                          +{featuredSeries.episodes.length - 3} more episodes in playlist &rarr;
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t t-border-subtle flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openSeriesModal(featuredSeries, 0)}
                    className="px-6 py-3 rounded-full btn-luminous text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Series Breakdown</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => openSeriesModal(featuredSeries, 0)}
                    className="px-5 py-3 rounded-full btn-ghost-twilight text-xs font-mono"
                  >
                    View All {featuredSeries.totalEpisodes} Episodes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TIER 2: CATEGORY & PLAYLIST FILTER TABS */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl t-text-primary font-normal">
                Curated Series Playlists
              </h3>
              <p className="text-xs sm:text-sm t-text-secondary font-light">
                Pick a series playlist to explore multi-episode breakdowns, chapter navigation, and architectural post-mortems.
              </p>
            </div>

            <span className="font-mono text-xs t-accent-warm font-semibold shrink-0">
              Showing {visibleSeries.length} of {filteredSeries.length} Playlists
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1">
            {categories.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => {
                  setActiveCategory(c.key);
                  setVisibleCount(6);
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                  activeCategory === c.key
                    ? 'btn-luminous !text-[#1A0822] font-bold shadow-md'
                    : 'btn-ghost-twilight t-text-primary'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* TIER 3: PLAYLISTS-FIRST CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleSeries.map((series) => (
            <article
              key={series.id}
              onClick={() => openSeriesModal(series, 0)}
              tabIndex={0}
              role="button"
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between cursor-pointer group focus:outline-none focus:ring-2 focus:ring-fae-fruit transition-all hover:scale-[1.01]"
            >
              {/* Thumbnail / Gradient Stage with Layered Stack Effect */}
              <div className={`aspect-video w-full relative bg-gradient-to-tr ${series.gradient} flex items-center justify-center p-4`}>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/60 text-white border border-white/10 backdrop-blur-sm">
                    {series.seriesNumber}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="font-mono text-[9px] px-2.5 py-0.5 rounded-full bg-black/60 text-precious-gold border border-white/10 backdrop-blur-sm flex items-center gap-1">
                    <ListVideo className="w-3 h-3" />
                    <span>{series.totalEpisodes} Episodes</span>
                  </span>
                </div>

                <div className="w-12 h-12 rounded-full bg-black/60 border border-precious-gold/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-precious-gold group-hover:text-black text-precious-gold transition-all shadow-xl">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>

                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/70">
                  <span>{series.categoryLabel}</span>
                  <span>{series.duration}</span>
                </div>
              </div>

              {/* Card Meta & Playlist Tracklist Preview */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold t-text-primary group-hover:t-accent-editorial transition-colors mb-2">
                    {series.title}
                  </h3>
                  <p className="text-xs sm:text-sm t-text-secondary leading-relaxed line-clamp-2 mb-4 font-light">
                    {series.description}
                  </p>

                  {/* Episode Peek Chips */}
                  <div className="space-y-1.5 mb-4">
                    {series.episodes.slice(0, 2).map((ep) => (
                      <div key={ep.episodeNumber} className="flex items-center justify-between text-[11px] font-mono inner-panel p-1.5 px-2.5 rounded-lg border border-white/5">
                        <span className="truncate mr-2 t-text-secondary">
                          0{ep.episodeNumber}. {ep.title}
                        </span>
                        <span className="t-text-muted shrink-0">{ep.duration}</span>
                      </div>
                    ))}
                    {series.episodes.length > 2 && (
                      <span className="font-mono text-[10px] text-precious-gold pl-1 block">
                        +{series.episodes.length - 2} more episode in playlist
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t t-border-subtle flex items-center justify-between text-xs font-mono text-precious-gold gap-2">
                  <span className="whitespace-nowrap flex items-center gap-1 group-hover:underline">
                    <span>Open Series Playlist</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] t-text-muted truncate">{series.duration}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* TIER 4: PROGRESSIVE "LOAD MORE" CONTROLLER */}
        <div className="pt-8 border-t t-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 t-text-muted">
            <span className="w-2 h-2 rounded-full bg-precious-gold animate-pulse" />
            <span>Studio Stream Protocol: Zero-Ad, Privacy-Hardened Embedded Player</span>
          </div>

          <div className="flex items-center gap-3">
            {filteredSeries.length > visibleCount ? (
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-6 py-3 rounded-full btn-luminous text-xs font-mono font-semibold flex items-center gap-2 shadow-lg transition-all"
              >
                <span>Load More Series Playlists ({visibleCount} of {filteredSeries.length})</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            ) : (
              <span className="font-mono text-xs t-accent-warm font-semibold px-4 py-2 rounded-full inner-panel border t-border-subtle">
                &bull; All {filteredSeries.length} Master Series Playlists Loaded &bull;
              </span>
            )}
          </div>
        </div>

        {/* CINEMATIC VIDEO & PLAYLIST MODAL PLAYER */}
        {selectedSeries &&
          currentEpisode &&
          createPortal(
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
              onClick={() => setSelectedSeries(null)}
            >
              <div
                className="glass-card rounded-[2rem] w-full max-w-5xl max-h-[92vh] overflow-y-auto border t-border-subtle p-5 sm:p-8 space-y-6 relative shadow-2xl"
                role="dialog"
                aria-modal="true"
                aria-labelledby="video-player-title"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 border-b t-border-subtle pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="px-2.5 py-0.5 rounded-full theme-badge text-precious-gold font-bold">
                        {selectedSeries.seriesNumber}
                      </span>
                      <span className="t-accent-warm">{selectedSeries.categoryLabel}</span>
                      <span className="t-text-muted">&middot;</span>
                      <span className="t-text-muted">Episode {currentEpisode.episodeNumber} of {selectedSeries.totalEpisodes}</span>
                    </div>
                    <h2 id="video-player-title" className="font-serif text-2xl sm:text-3xl t-text-primary font-normal">
                      {currentEpisode.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={dockToMiniPlayer}
                      className="p-2.5 rounded-full inner-panel hover:text-precious-gold transition-colors text-xs font-mono flex items-center gap-1.5"
                      title="Dock to PiP Mini-Player"
                    >
                      <PictureInPicture className="w-4 h-4" />
                      <span className="hidden sm:inline">Mini-Player</span>
                    </button>
                    <button
                      onClick={() => setSelectedSeries(null)}
                      className="p-2.5 rounded-full inner-panel hover:t-accent-editorial transition-colors"
                      aria-label="Close Player"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* 16:9 Responsive Privacy-Hardened Embedded Player */}
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl relative">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${currentEpisode.youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={currentEpisode.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Player Navigation & Playlist Selector */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Synopsis & Chapter Timestamps (Span 7) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="space-y-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold block">
                        Episode Synopsis
                      </span>
                      <p className="text-sm t-text-secondary leading-relaxed font-light">
                        {currentEpisode.synopsis}
                      </p>
                    </div>

                    {/* Chapters List */}
                    {selectedSeries.chapters && selectedSeries.chapters.length > 0 && (
                      <div className="p-4 rounded-2xl inner-panel border t-border-subtle space-y-2.5">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-precious-gold font-bold block">
                          Architectural Chapters &amp; Timestamps
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                          {selectedSeries.chapters.map((ch) => (
                            <div key={ch.time} className="flex items-center gap-2 t-text-secondary">
                              <span className="text-precious-gold font-bold">{ch.time}</span>
                              <span className="truncate">{ch.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: Full Playlist Tracklist (Span 5) */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-1.5 border-b t-border-subtle">
                        <div className="flex items-center gap-2">
                          <ListVideo className="w-4 h-4 text-precious-gold shrink-0" />
                          <span className="font-mono text-xs uppercase tracking-wider text-precious-gold font-bold">
                            Playlist Queue ({selectedSeries.totalEpisodes})
                          </span>
                        </div>
                        <span className="font-mono text-[10.5px] px-2 py-0.5 rounded-full theme-badge text-precious-gold font-bold">
                          {activeEpisodeIdx + 1} of {selectedSeries.totalEpisodes} &middot; {selectedSeries.duration}
                        </span>
                      </div>

                      <div className="space-y-2 max-h-60 sm:max-h-72 lg:max-h-[380px] overflow-y-auto pr-1.5 custom-scrollbar">
                        {selectedSeries.episodes.map((ep, idx) => (
                          <div
                            key={ep.episodeNumber}
                            ref={activeEpisodeIdx === idx ? activeEpisodeRef : null}
                            onClick={() => setActiveEpisodeIdx(idx)}
                            role="button"
                            tabIndex={0}
                            className={`p-3 rounded-xl border flex items-center justify-between text-xs cursor-pointer transition-all ${
                              activeEpisodeIdx === idx
                                ? 'bg-precious-gold/15 border-precious-gold text-precious-gold font-semibold shadow-md ring-1 ring-precious-gold/30'
                                : 'inner-panel border-white/5 hover:border-precious-gold/40 t-text-secondary hover:t-text-primary'
                            }`}
                          >
                            <div className="flex items-center gap-2.5 truncate mr-2">
                              {activeEpisodeIdx === idx ? (
                                <span className="w-5 h-5 rounded-full bg-precious-gold text-black flex items-center justify-center shrink-0 shadow-sm">
                                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                                </span>
                              ) : (
                                <span className="font-mono text-xs t-text-muted w-5 shrink-0 text-center font-medium">
                                  {idx + 1}.
                                </span>
                              )}
                              <span className="truncate">{ep.title}</span>
                            </div>
                            <span className="font-mono text-[10px] shrink-0 opacity-80">{ep.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Player Step Buttons */}
                    <div className="pt-2 flex items-center justify-between gap-2 border-t t-border-subtle">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="btn-ghost-twilight px-4 py-2.5 rounded-full text-xs font-mono flex items-center gap-1.5 flex-1 justify-center transition-all"
                      >
                        <SkipBack className="w-3.5 h-3.5" />
                        <span>Prev Episode</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn-luminous px-4 py-2.5 rounded-full text-xs font-mono font-semibold flex items-center gap-1.5 flex-1 justify-center transition-all"
                      >
                        <span>Next Episode</span>
                        <SkipForward className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )}

        {/* PIP MINI-PLAYER DOCKED OVERLAY */}
        {miniPlayer && (
          <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 rounded-2xl glass-card border border-precious-gold/50 shadow-2xl overflow-hidden p-3 space-y-2 animate-slideUp">
            <div className="flex items-center justify-between gap-2 border-b t-border-subtle pb-2">
              <span className="font-mono text-[10px] text-precious-gold uppercase tracking-wider font-bold truncate">
                PiP &middot; {miniPlayer.episode.title}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSeries(miniPlayer.series);
                    setMiniPlayer(null);
                  }}
                  className="p-1 rounded text-xs font-mono text-precious-gold hover:underline"
                >
                  Expand
                </button>
                <button
                  type="button"
                  onClick={() => setMiniPlayer(null)}
                  className="p-1 rounded hover:t-accent-editorial transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${miniPlayer.episode.youtubeVideoId}?autoplay=1&rel=0`}
                title={miniPlayer.episode.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
