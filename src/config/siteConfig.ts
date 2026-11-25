/**
 * Centralized Site, Brand & Social Network Configuration
 * 
 * Edit your handles, URLs, and contact channels here in ONE place.
 * Any updates here automatically propagate across the entire application
 * (Header, Footer, Commission calculator, WhatsApp CTAs, and Vanity redirects).
 */

export const SITE_CONFIG = {
  name: 'Tryphen Emurugat',
  atelier: 'Savannah Atelier',
  tagline: 'Software Built Right the First Time.',
  location: 'Nairobi · 1.2921° S 36.8219° E',
  
  contact: {
    whatsapp: {
      numberFormatted: '+254 710 720 949',
      numberRaw: '254710720949',
      defaultMessage: 'Hello Tryphen, I am inquiring about systems architecture commissioning.',
      getUrl: () => `https://wa.me/254710720949?text=${encodeURIComponent('Hello Tryphen, I am inquiring about systems architecture commissioning.')}`,
    },
    email: 'atelier@tryphenemurugat.com',
  },

  socials: {
    instagram: {
      handle: '@_.mercz',
      username: '_.mercz',
      displayName: 'Eng. Tryphen Emurugat',
      url: 'https://instagram.com/_.mercz',
      label: 'Instagram',
    },
    x: {
      handle: '@Mercy_Em_t',
      username: 'Mercy_Em_t',
      url: 'https://x.com/Mercy_Em_t',
      label: 'X',
    },
    github: {
      handle: '@Mercy-Em-t',
      username: 'Mercy-Em-t',
      url: 'https://github.com/Mercy-Em-t',
      label: 'GitHub',
    },
    youtubeMercyVerse: {
      handle: '@MercyVerse-all1000lifetimes',
      username: 'MercyVerse-all1000lifetimes',
      url: 'https://www.youtube.com/@MercyVerse-all1000lifetimes',
      label: 'The MercyVerse',
    },
    youtubeLabs: {
      handle: '@TryphenEmurrugatLabs',
      username: 'TryphenEmurrugatLabs',
      url: 'https://www.youtube.com/@TryphenEmurrugatLabs',
      label: 'Emurugat Labs',
    },
  },
} as const;
