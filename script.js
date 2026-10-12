const config = {
  github: 'https://github.com/LexusDev69',
  linkedin: 'https://www.linkedin.com/in/rudolf-mateo-203248428/',
  facebook: '',
  instagram: '',
  email: 'your.email@example.com',
  resume: 'assets/resume/resume.pdf',
  resumeLabel: 'To be updated',
};

const socialConfig = [
  {
    key: 'github',
    label: 'GitHub',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.12 3.29 9.46 7.86 10.98.58.1.79-.25.79-.56v-2.19c-3.2.7-3.87-1.38-3.87-1.38-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.72 1.27 3.39.97.11-.75.4-1.27.73-1.56-2.56-.29-5.27-1.28-5.27-5.7 0-1.26.45-2.29 1.2-3.09-.12-.29-.52-1.47.12-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.64 1.58.24 2.76.12 3.05.75.8 1.2 1.83 1.2 3.09 0 4.43-2.72 5.4-5.31 5.68.42.36.79 1.08.79 2.17v3.22c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5A1.8 1.8 0 1 1 6.94 5a1.8 1.8 0 0 1 0 3.5ZM5.25 9.88h3.38V18H5.25V9.88Zm5.61 0h3.24v1.13h.05c.45-.86 1.56-1.76 3.2-1.76 3.43 0 4.06 2.25 4.06 5.18V18h-3.38v-7.95h-3.38V18h-3.38V9.88Z"/></svg>',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8h2.5l.5-3h-3V7.5c0-.86.3-1.5 1.6-1.5H17V3.2c-.4-.1-1.7-.2-3.1-.2-3 0-5 1.8-5 5.2V11H6.5v3h2.4v8h4.6Z"/></svg>',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm4.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/></svg>',
  },
];

const getSocialHref = (key) => {
  const mapping = {
    github: config.github,
    linkedin: config.linkedin,
    facebook: config.facebook,
    instagram: config.instagram,
  };
  return mapping[key] || '';
};

const updateYear = () => {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
};

const renderSocialLinks = () => {
  const heroContainer = document.getElementById('hero-socials');
  const footerContainer = document.getElementById('footer-socials');

  const validLinks = socialConfig.filter((item) => {
    const href = getSocialHref(item.key);
    return href && href.trim() !== '';
  });

  if (heroContainer) {
    heroContainer.innerHTML = validLinks
      .map(
        (item) => `
          <a class="social-link" href="${getSocialHref(item.key)}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}">
            ${item.icon}
          </a>
        `
      )
      .join('');
  }

  if (footerContainer) {
    footerContainer.innerHTML = validLinks
      .map(
        (item) => `
          <a href="${getSocialHref(item.key)}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}">
            ${item.icon}
          </a>
        `
      )
      .join('');
  }

  document.querySelectorAll('[data-link]').forEach((link) => {
    const key = link.dataset.link;
    const item = socialConfig.find((entry) => entry.key === key);
    const href = getSocialHref(key);

    if (!item || !href || href.trim() === '') {
      if (link.tagName === 'A') {
        link.setAttribute('aria-disabled', 'true');
        link.classList.add('disabled-link');
        link.href = '#';
      }
      return;
    }

    link.href = href;
    link.textContent = item.label;
    link.classList.remove('disabled-link');
    link.setAttribute('aria-disabled', 'false');
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
};

const toggleTheme = () => {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme');
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme);

  const toggle = document.querySelector('.theme-toggle-icon');
  if (toggle) {
    toggle.textContent = nextTheme === 'light' ? '☀️' : '🌙';
  }
};

const applyStoredTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initialTheme = savedTheme || (prefersLight ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', initialTheme);

  const toggle = document.querySelector('.theme-toggle-icon');
  if (toggle) {
    toggle.textContent = initialTheme === 'light' ? '☀️' : '🌙';
  }
};

const initializeNav = () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navPanel = document.querySelector('.nav-panel');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (!navToggle || !navPanel) return;

  navToggle.addEventListener('click', () => {
    const isOpen = navPanel.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navPanel.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
};

const initTypedText = () => {
  const typedText = document.querySelector('.typed-text');
  if (!typedText) return;

  const roles = ['Web Developer', 'Software Developer', 'IT Student'];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentRole = roles[roleIndex];
    const visibleText = currentRole.slice(0, charIndex);
    typedText.innerHTML = `${visibleText}<span class="type-cursor"></span>`;

    if (!isDeleting && charIndex < currentRole.length) {
      charIndex += 1;
      setTimeout(type, 120);
      return;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(type, 1300);
      return;
    }

    if (isDeleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(type, 70);
      return;
    }

    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 180);
  };

  type();
};

const setupResume = () => {
  const dateNode = document.getElementById('resume-date');
  if (dateNode) {
    dateNode.textContent = config.resumeLabel;
  }

  const resumeLinks = document.querySelectorAll('a[href="assets/resume/resume.pdf"]');
  resumeLinks.forEach((link) => {
    link.href = config.resume;
  });
};

const setupCopyEmail = () => {
  const button = document.getElementById('copy-email');
  if (!button) return;

  const email = config.email;
  const emailPreview = document.querySelector('.email-preview');

  if (emailPreview) {
    emailPreview.textContent = email;
  }

  const mailLink = document.querySelector('a[data-link="email"]');
  if (mailLink) {
    mailLink.href = `mailto:${email}`;
    mailLink.textContent = email;
  }

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = 'Copy Email';
      }, 1400);
    } catch (error) {
      button.textContent = 'Copy failed';
      setTimeout(() => {
        button.textContent = 'Copy Email';
      }, 1800);
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  applyStoredTheme();
  renderSocialLinks();
  setupResume();
  setupCopyEmail();
  initializeNav();
  initTypedText();
  updateYear();

  const themeButton = document.querySelector('.theme-toggle');
  if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
  }
});
