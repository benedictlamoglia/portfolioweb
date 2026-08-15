/* ==============================================================
   RENDER ENGINE
   You shouldn't need to edit this file — update data.js instead.
============================================================== */

(function(){
  document.body.classList.add("is-loading");

  const data = PORTFOLIO_DATA;

  /* ---------- Sidebar file tree (built from section list) ---------- */
  const sections = [
    { id: "about",      label: "about",      icon: "•" },
    { id: "skills",     label: "skills",     icon: "•" },
    { id: "projects",   label: "projects",   icon: "•" },
    { id: "experience", label: "experience", icon: "•" },
    { id: "contact",    label: "contact",    icon: "•" }
  ];

  const filetree = document.getElementById("filetree");
  sections.forEach(sec => {
    const a = document.createElement("a");
    a.href = `#${sec.id}`;
    a.className = "filetree-link";
    a.dataset.section = sec.id;
    a.innerHTML = `<span class="fname-icon">${sec.icon}</span><span>${sec.label}</span>`;
    filetree.appendChild(a);
  });

  document.getElementById("nav-name").textContent = `${data.profile.name.toLowerCase()}/`;

  /* ---------- About ---------- */
  document.getElementById("profile-name").textContent = data.profile.name;
  document.getElementById("profile-role").textContent = data.profile.role;
  document.getElementById("profile-tagline").textContent = data.profile.tagline;
  document.getElementById("profile-bio").textContent = data.profile.bio;

  function renderSocials(container, socials){
    container.innerHTML = "";
    socials.forEach(s => {
      const a = document.createElement("a");
      a.href = s.url;
      a.className = "social-link";
      a.textContent = s.label;
      a.target = s.url.startsWith("http") ? "_blank" : "_self";
      a.rel = "noopener";
      container.appendChild(a);
    });
  }
  renderSocials(document.getElementById("profile-socials"), data.profile.socials);
  renderSocials(document.getElementById("contact-socials"), data.profile.socials);

  /* ---------- Skills ---------- */
  const skillsGrid = document.getElementById("skills-grid");
  data.skills.forEach(group => {
    const el = document.createElement("div");
    el.className = "skill-group";
    el.innerHTML = `
      <div class="skill-group-title">${group.category}</div>
      <div class="skill-tags">
        ${group.items.map(i => `<span class="skill-tag">${i}</span>`).join("")}
      </div>`;
    skillsGrid.appendChild(el);
  });

  /* ---------- Projects ---------- */
  const projectList = document.getElementById("project-list");
  data.projects.forEach(p => {
    const el = document.createElement("div");
    el.className = "project-item";
    el.innerHTML = `
      <div class="project-head">
        <span class="project-title">${p.title}</span>
        ${p.status ? `<span class="project-status">${p.status}</span>` : ""}
      </div>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">
        ${(p.tags || []).map(t => `<span class="project-tag">${t}</span>`).join("")}
      </div>
      <div class="project-links">
        ${(p.links || []).map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} →</a>`).join("")}
      </div>`;
    projectList.appendChild(el);
  });

  /* ---------- Experience ---------- */
  const timeline = document.getElementById("timeline");
  data.experience.forEach(e => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.innerHTML = `
      <div class="timeline-period">${e.period}</div>
      <div>
        <div class="timeline-title">${e.title}</div>
        <div class="timeline-org">${e.org}</div>
        <p class="timeline-desc">${e.description}</p>
      </div>`;
    timeline.appendChild(el);
  });

  /* ---------- Contact ---------- */
  document.getElementById("contact-text").textContent = data.contact.text;

  /* ---------- Active-section highlighting on scroll ---------- */
  const links = Array.from(document.querySelectorAll(".filetree-link"));
  const panes = sections.map(s => document.getElementById(s.id));

  const statusLine = document.getElementById("status-line");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const id = entry.target.id;
        links.forEach(l => l.classList.toggle("active", l.dataset.section === id));
        statusLine.textContent = `// viewing ${id}`;
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  panes.forEach(p => p && observer.observe(p));

  // Set initial active state
  if (links[0]) links[0].classList.add("active");

  /* ---------- Loader ---------- */
  const loader = document.getElementById("loader");
  const loaderBarFill = document.getElementById("loader-bar-fill");
  const MIN_DISPLAY_MS = 1200;
  const start = Date.now();

  // Kick the progress bar to full right away; CSS transition animates it.
  requestAnimationFrame(() => {
    if (loaderBarFill) loaderBarFill.style.width = "100%";
  });

  window.addEventListener("load", () => {
    const elapsed = Date.now() - start;
    const wait = Math.max(0, MIN_DISPLAY_MS - elapsed);
    setTimeout(() => {
      loader.classList.add("loader-hidden");
      document.body.classList.remove("is-loading");
      setTimeout(() => loader.remove(), 600);
    }, wait);
  });
})();