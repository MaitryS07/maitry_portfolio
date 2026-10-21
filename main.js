/**
 * ============================================================
 *  MAITRY SANTOSHWAR — PORTFOLIO MAIN SCRIPT
 *  Handles: content rendering, navigation, scroll effects,
 *           animations, lightbox, accessibility, reduced-motion
 * ============================================================
 */

(function () {
  'use strict';

  /* ── Reduced-motion preference ───────────────────────── */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Grab PORTFOLIO from content.js ─────────────────── */
  const P = window.PORTFOLIO;
  if (!P) { console.error('content.js not loaded before main.js'); return; }

  /* ─────────────────────────────────────────────────────── *
   *  1. POPULATE CONTENT FROM content.js
   * ─────────────────────────────────────────────────────── */

  function populateAll() {
    populateNav();
    populateHero();
    populateAbout();
    populateSkills();
    populateTools();
    populateProjects();
    populateTimeline();
    populateInterests();
    populateContact();
    populateFooter();
  }

  /* Nav logo */
  function populateNav() {
    const names = document.querySelectorAll('#navLogoName, #footerLogoName');
    names.forEach(el => { el.textContent = P.personal.firstName; });
  }

  /* Hero section */
  function populateHero() {
    const nameEl    = document.getElementById('heroName');
    const taglineEl = document.getElementById('heroTagline');
    const introEl   = document.getElementById('heroIntro');
    const resumeEl  = document.getElementById('heroResume');
    const githubEl  = document.getElementById('heroGithub');
    const linkedinEl= document.getElementById('heroLinkedin');

    if (nameEl) {
      // Split name for orange accent on last name
      const [first, ...rest] = P.personal.name.split(' ');
      nameEl.innerHTML = `${first} <span class="accent">${rest.join(' ')}</span>`;
    }
    if (taglineEl)  taglineEl.textContent = P.personal.tagline;
    if (introEl)    introEl.textContent   = P.personal.intro[0] + ' ' + P.personal.intro[1];
    if (resumeEl)   resumeEl.href         = P.personal.resumePath;
    if (githubEl)   { githubEl.href = P.personal.github; if (!P.personal.github) githubEl.style.display = 'none'; }
    if (linkedinEl) { linkedinEl.href = P.personal.linkedin; if (!P.personal.linkedin) linkedinEl.style.display = 'none'; }

    // Hero video
    initHeroVideo();
  }

  /* About section */
  function populateAbout() {
    // Paragraphs
    const paraWrap = document.getElementById('aboutParagraphs');
    if (paraWrap) {
      paraWrap.innerHTML = P.about.map(p => `<p>${p}</p>`).join('');
    }

    // Fact cards
    const factsWrap = document.getElementById('aboutFacts');
    if (factsWrap) {
      factsWrap.innerHTML = P.factCards.map(f => `
        <div class="fact-card reveal-up">
          <span class="fact-card__emoji">${f.emoji}</span>
          <div class="fact-card__body">
            <span class="fact-card__label">${f.label}</span>
            <span class="fact-card__value">${f.value}</span>
            <span class="fact-card__sub">${f.sub}</span>
          </div>
        </div>
      `).join('');
    }

    // Hobbies chips
    const hobbiesWrap = document.getElementById('aboutHobbies');
    if (hobbiesWrap) {
      hobbiesWrap.innerHTML = P.hobbies
        .map(h => `<span class="hobby-chip">${h}</span>`)
        .join('');
    }
  }

  /* Skills section */
  function populateSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    const iconMap = {
      code:     '&lt;/&gt;',
      globe:    '🌐',
      brain:    '🧠',
      database: '🗄️',
      tools:    '🛠️',
      cpu:      '💻'
    };
    const iconClass = { code:'icon-code', globe:'icon-globe', brain:'icon-brain', database:'icon-database', tools:'icon-tools', cpu:'icon-cpu' };

    grid.innerHTML = P.skills.map((s, i) => `
      <div class="skill-card reveal-up" style="transition-delay: ${i * 80}ms">
        <div class="skill-card__icon ${iconClass[s.icon] || ''}">${iconMap[s.icon] || '⚙️'}</div>
        <h3 class="skill-card__title">${s.category}</h3>
        <div class="skill-tags">
          ${s.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  /* Tools section */
  function populateTools() {
    const grid = document.getElementById('toolsGrid');
    if (!grid) return;

    grid.innerHTML = P.tools.map((t, i) => `
      <div class="tool-badge reveal-up" style="transition-delay: ${i * 50}ms" aria-label="${t.label}">
        <div class="tool-badge__circle">${t.abbr}</div>
        <span class="tool-badge__label">${t.label}</span>
      </div>
    `).join('');
  }

  /* Projects section */
  function populateProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = P.projects.map((proj, i) => {
      const statusClass = {
        'Completed':   'project-status--completed',
        'In Progress': 'project-status--in-progress',
        'Prototype':   'project-status--prototype'
      }[proj.status] || 'project-status--prototype';

      const imgSection = proj.image
        ? `<img class="project-card__img" src="${proj.image}" alt="Screenshot of ${proj.name}" loading="lazy" />`
        : `<div class="project-card__placeholder">
             <span class="project-card__placeholder-emoji">${proj.emoji}</span>
             <span class="project-card__placeholder-text">${proj.name}</span>
           </div>`;

      const ghBtn   = proj.github ? `<a href="${proj.github}" class="btn btn--ghost" target="_blank" rel="noopener noreferrer">View Code ↗</a>` : '';
      const demoBtn = proj.demo   ? `<a href="${proj.demo}"   class="btn btn--primary" target="_blank" rel="noopener noreferrer">Explore ↗</a>` : '';

      return `
        <article class="project-card reveal-up" style="transition-delay: ${i * 120}ms" data-project-id="${proj.id}">
          <div class="project-card__img-wrap" role="button" tabindex="0"
               aria-label="View larger image for ${proj.name}"
               data-img="${proj.image || ''}"
               data-caption="${escHtml(proj.caption)}">
            <div class="project-tape project-tape--tl" aria-hidden="true"></div>
            <div class="project-tape project-tape--tr" aria-hidden="true"></div>
            <span class="project-status ${statusClass}" aria-label="Status: ${proj.status}">${proj.status}</span>
            ${imgSection}
          </div>
          <div class="project-card__body">
            <span class="project-card__emoji">${proj.emoji}</span>
            <h3 class="project-card__name">${proj.name}</h3>
            <p class="project-card__period">${proj.period}</p>
            <p class="project-card__problem">"${proj.problem}"</p>
            <p class="project-card__desc">${proj.description}</p>
            <span class="project-card__contrib-label">My Contribution</span>
            <p class="project-card__contrib">${proj.contribution}</p>
            <div class="project-card__tech">
              ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <p class="project-card__caption">${proj.caption}</p>
            <div class="project-card__actions">
              ${ghBtn}${demoBtn}
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Wire lightbox triggers
    document.querySelectorAll('.project-card__img-wrap').forEach(wrap => {
      wrap.addEventListener('click', () => openLightbox(wrap));
      wrap.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(wrap); } });
    });
  }

  /* Experience timeline */
  function populateTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;

    timeline.innerHTML = P.experience.map((item, i) => `
      <div class="timeline-item reveal-up" style="transition-delay: ${i * 100}ms">
        ${i % 2 === 0
          ? `<div class="timeline-card timeline-card--${item.type}">
               <p class="timeline-card__type">${item.type}</p>
               <h3 class="timeline-card__title">${item.title}</h3>
               <p class="timeline-card__org">${item.org} · ${item.location}</p>
               <p class="timeline-card__period">${item.period}</p>
               <p class="timeline-card__desc">${item.description}</p>
               <div class="timeline-card__tags">${item.tags.map(t => `<span class="timeline-tag">${t}</span>`).join('')}</div>
             </div>
             <div class="timeline-dot" aria-hidden="true">${i + 1}</div>
             <div class="timeline-empty"></div>`
          : `<div class="timeline-empty"></div>
             <div class="timeline-dot" aria-hidden="true">${i + 1}</div>
             <div class="timeline-card timeline-card--${item.type}">
               <p class="timeline-card__type">${item.type}</p>
               <h3 class="timeline-card__title">${item.title}</h3>
               <p class="timeline-card__org">${item.org} · ${item.location}</p>
               <p class="timeline-card__period">${item.period}</p>
               <p class="timeline-card__desc">${item.description}</p>
               <div class="timeline-card__tags">${item.tags.map(t => `<span class="timeline-tag">${t}</span>`).join('')}</div>
             </div>`
        }
      </div>
    `).join('');
  }

  /* Interests section */
  function populateInterests() {
    const grid = document.getElementById('interestsGrid');
    if (grid) {
      grid.innerHTML = P.interests.map((item, i) => `
        <div class="interest-card reveal-up" style="transition-delay: ${i * 80}ms">
          <span class="interest-card__icon">${item.icon}</span>
          <div class="interest-card__body">
            <h3 class="interest-card__title">${item.title}</h3>
            <p class="interest-card__desc">${item.description}</p>
          </div>
        </div>
      `).join('');
    }

    const hobbies = document.getElementById('interestsHobbies');
    if (hobbies) {
      hobbies.innerHTML = P.hobbies.map(h => `<span class="hobby-chip">${h}</span>`).join('');
    }
  }

  /* Contact section */
  function populateContact() {
    const wrap = document.getElementById('contactLinks');
    if (!wrap) return;

    const contactItems = [
      {
        icon: '✉️',
        label: 'Email',
        value: P.personal.email,
        href: `mailto:${P.personal.email}`,
        external: false
      },
      {
        icon: '💼',
        label: 'LinkedIn',
        value: P.personal.linkedin.replace('https://www.', '').replace('https://', ''),
        href: P.personal.linkedin,
        external: true
      },
      {
        icon: '🐙',
        label: 'GitHub',
        value: P.personal.github.replace('https://', ''),
        href: P.personal.github,
        external: true
      },
      {
        icon: '📍',
        label: 'Location',
        value: P.personal.location,
        href: null
      }
    ];

    wrap.innerHTML = `
      ${contactItems.map(item => item.href
        ? `<a href="${item.href}" class="contact-item" ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
             <span class="contact-item__icon">${item.icon}</span>
             <div class="contact-item__body">
               <span class="contact-item__label">${item.label}</span>
               <span class="contact-item__value">${item.value}</span>
             </div>
           </a>`
        : `<div class="contact-item">
             <span class="contact-item__icon">${item.icon}</span>
             <div class="contact-item__body">
               <span class="contact-item__label">${item.label}</span>
               <span class="contact-item__value">${item.value}</span>
             </div>
           </div>`
      ).join('')}
      <div class="contact__actions">
        <a href="${P.personal.resumePath}" class="btn btn--primary" download>Download Resume ↓</a>
        <a href="mailto:${P.personal.email}?subject=Let's Connect — Portfolio" class="btn btn--outline" target="_blank" rel="noopener noreferrer">Start a Conversation →</a>
      </div>
    `;
  }

  /* Footer */
  function populateFooter() {
    const social = document.getElementById('footerSocial');
    if (social) {
      social.innerHTML = `
        <a href="${P.personal.github}" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
        </a>
        <a href="${P.personal.linkedin}" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="mailto:${P.personal.email}" class="footer__social-link" aria-label="Email">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
      `;
    }

    const copy = document.getElementById('footerCopy');
    if (copy) copy.textContent = `© ${new Date().getFullYear()} ${P.personal.name}. Made with curiosity.`;
  }

  /* ─────────────────────────────────────────────────────── *
   *  2. HERO VIDEO
   * ─────────────────────────────────────────────────────── */
  function initHeroVideo() {
    const video = document.getElementById('heroVideo');
    if (!video) return;

    // ── 1. While playing: suppress the float/breathe animation so the
    //       video doesn't judder. Resume float after it ends.
    video.addEventListener('play', () => {
      video.classList.add('playing');
    });

    // ── 2. Play ONCE, then freeze on the last frame (don't loop).
    video.addEventListener('ended', () => {
      video.pause();
      // currentTime stays at the end → last frame remains visible.
      // Restore the gentle float animation now that the video is static.
      video.classList.remove('playing');
    }, { once: true });

    // ── 3. Attempt autoplay immediately.
    //       The HTML already has the `autoplay` attribute, which handles
    //       most browsers. The JS call below is an additional safeguard
    //       for browsers that honour the attribute but delay execution.
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(err => {
        // Autoplay was blocked (e.g. strict policy without prior user gesture).
        // Register a one-time handler: play on the first user interaction.
        console.info('[hero video] Autoplay blocked, waiting for user gesture.', err.message);

        function playOnInteraction() {
          video.play().catch(() => {});
          ['click', 'touchstart', 'keydown', 'scroll'].forEach(evt =>
            document.removeEventListener(evt, playOnInteraction)
          );
        }

        ['click', 'touchstart', 'keydown', 'scroll'].forEach(evt =>
          document.addEventListener(evt, playOnInteraction, { once: true, passive: true })
        );
      });
    }

    // ── 4. Pause/resume only based on page visibility (tab switching),
    //       NOT on scroll position — the video lives in the hero and
    //       should play from start to finish without interruption.
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        video.pause();
      } else if (video.paused && !video.ended) {
        video.play().catch(() => {});
      }
    });
  }

  /* ─────────────────────────────────────────────────────── *
   *  3. SCROLL PROGRESS BAR
   * ─────────────────────────────────────────────────────── */
  function initScrollProgress() {
    const bar    = document.getElementById('scrollBar');
    const pencil = document.querySelector('.scroll-progress__pencil');
    const prog   = document.getElementById('scrollProgress');
    if (!bar) return;

    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;

      bar.style.width = pct + '%';
      if (pencil) pencil.style.left = pct + '%';
      if (prog)   prog.setAttribute('aria-valuenow', Math.round(pct));
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ─────────────────────────────────────────────────────── *
   *  4. NAVBAR
   * ─────────────────────────────────────────────────────── */
  function initNavbar() {
    const navbar  = document.getElementById('navbar');
    if (!navbar) return;

    // Scrolled state
    function updateNavbar() {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const NAV_H = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;

    function updateActiveLink() {
      let current = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - NAV_H - 50;
        if (window.scrollY >= top) current = sec.id;
      });
      navLinks.forEach(link => {
        const href = link.getAttribute('href').replace('#', '');
        link.classList.toggle('active', href === current);
      });
    }
    window.addEventListener('scroll', updateActiveLink, { passive: true });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - NAV_H;
          window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
          closeMobileMenu();
        }
      });
    });
  }

  /* ─────────────────────────────────────────────────────── *
   *  5. MOBILE MENU
   * ─────────────────────────────────────────────────────── */
  const burger      = document.getElementById('navBurger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const closeBtn    = document.getElementById('mobileMenuClose');
  const overlay     = document.getElementById('mobileOverlay');
  let focusTrap     = null;

  function openMobileMenu() {
    mobileMenu.hidden = false;
    overlay.style.display = 'block';
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
    trapFocus(mobileMenu);
  }

  function closeMobileMenu() {
    mobileMenu.hidden = true;
    overlay.style.display = 'none';
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (focusTrap) { document.removeEventListener('keydown', focusTrap); focusTrap = null; }
    burger.focus();
  }

  function trapFocus(element) {
    const focusable = element.querySelectorAll('button, a, input, [tabindex="0"]');
    const first = focusable[0], last = focusable[focusable.length - 1];
    focusTrap = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
        else            { if (document.activeElement === last)  { e.preventDefault(); first.focus(); } }
      }
      if (e.key === 'Escape') closeMobileMenu();
    };
    document.addEventListener('keydown', focusTrap);
  }

  if (burger)    burger.addEventListener('click', openMobileMenu);
  if (closeBtn)  closeBtn.addEventListener('click', closeMobileMenu);
  if (overlay)   overlay.addEventListener('click', closeMobileMenu);

  /* ─────────────────────────────────────────────────────── *
   *  6. SCROLL REVEAL (IntersectionObserver)
   * ─────────────────────────────────────────────────────── */
  function initScrollReveal() {
    if (prefersReduced) {
      // Reveal all immediately
      document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => el.classList.add('revealed'));
      return;
    }

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    // Initial elements
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => io.observe(el));

    // Observe newly added elements (dynamic content)
    const mutObs = new MutationObserver(mutations => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node.nodeType !== 1) return;
          const targets = node.classList && (node.classList.contains('reveal-up') || node.classList.contains('reveal-left') || node.classList.contains('reveal-right'))
            ? [node]
            : [...node.querySelectorAll('.reveal-up, .reveal-left, .reveal-right')];
          targets.forEach(t => io.observe(t));
        });
      });
    });
    mutObs.observe(document.body, { childList: true, subtree: true });
  }

  /* ─────────────────────────────────────────────────────── *
   *  7. SQUIGGLE UNDERLINES
   * ─────────────────────────────────────────────────────── */
  function initSquiggles() {
    if (prefersReduced) {
      document.querySelectorAll('.squiggle-path').forEach(p => p.classList.add('drawn'));
      return;
    }

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.squiggle-path').forEach(path => path.classList.add('drawn'));
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section-header').forEach(el => io.observe(el));
  }

  /* ─────────────────────────────────────────────────────── *
   *  8. LIGHTBOX
   * ─────────────────────────────────────────────────────── */
  const lightbox       = document.getElementById('lightbox');
  const lightboxImg    = document.getElementById('lightboxImg');
  const lightboxCap    = document.getElementById('lightboxCaption');
  const lightboxClose  = document.getElementById('lightboxClose');
  const lightboxBg     = document.getElementById('lightboxBackdrop');

  function openLightbox(wrap) {
    const imgSrc = wrap.dataset.img;
    const caption = wrap.dataset.caption || '';

    // Only open if there's an actual image
    if (!imgSrc) {
      // No image — nothing to show
      return;
    }

    lightboxImg.src = imgSrc;
    lightboxImg.alt = caption || 'Project screenshot';
    lightboxCap.textContent = caption;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();

    document.addEventListener('keydown', handleLightboxKey);
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    lightboxImg.src = '';
    document.removeEventListener('keydown', handleLightboxKey);
  }

  function handleLightboxKey(e) {
    if (e.key === 'Escape') closeLightbox();
  }

  if (lightboxClose)  lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBg)     lightboxBg.addEventListener('click', closeLightbox);

  /* ─────────────────────────────────────────────────────── *
   *  9. BACK TO TOP
   * ─────────────────────────────────────────────────────── */
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    function updateBtn() {
      btn.classList.toggle('visible', window.scrollY > 400);
    }
    window.addEventListener('scroll', updateBtn, { passive: true });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  }

  /* ─────────────────────────────────────────────────────── *
   *  10. DIVIDER PLANE ANIMATION
   * ─────────────────────────────────────────────────────── */
  function initDividerPlanes() {
    if (prefersReduced) return;
    const planes = document.querySelectorAll('.divider-plane');
    planes.forEach((plane, i) => {
      plane.style.animationDelay = `${i * 0.4}s`;
    });
  }

  /* ─────────────────────────────────────────────────────── *
   *  UTILITY: HTML escape
   * ─────────────────────────────────────────────────────── */
  function escHtml(str) {
    if (!str) return '';
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ─────────────────────────────────────────────────────── *
   *  INIT
   * ─────────────────────────────────────────────────────── */
  function init() {
    populateAll();     // Render content first
    initNavbar();
    initScrollProgress();
    initScrollReveal();
    initSquiggles();
    initBackToTop();
    initDividerPlanes();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
