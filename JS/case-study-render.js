/**
 * CASE STUDY RENDERER
 * -------------------
 * Reads ?project=slug from the URL, looks it up in CASE_STUDIES
 * (case-study-data.js, load that file first), and injects the
 * full <article> markup into #case-study-root.
 *
 * Usage in your page:
 *   <main id="case-study-root"></main>
 *   <script src="case-study-data.js"></script>
 *   <script src="case-study-render.js"></script>
 *
 * Link to a case study with: case-study.html?project=novu-saas-dashboard
 */

const ICONS = {
  bolt: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />`,
  sitemap: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />`,
  sparkle: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />`
};

function icon(name) {
  return `<svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">${ICONS[name] || ICONS.bolt}</svg>`;
}

function escapeAttr(str) {
  return String(str).replace(/"/g, "&quot;");
}

/* ---- section renderers, one per data "type" ---- */

const sectionRenderers = {

  text(section) {
    const heading = section.heading ? `<h2>${section.heading}</h2>` : "";
    const body = (section.body || []).map(p => `<p>${p}</p>`).join("\n");
    return `<div class="max-w-3xl mx-auto px-6 pb-4 prose-cs">${heading}${body}</div>`;
  },

  quote(section) {
    const cite = section.cite ? `<cite class="block mt-2 text-sm not-italic text-zinc-400">— ${section.cite}</cite>` : "";
    return `<div class="max-w-3xl mx-auto px-6 pb-4 prose-cs">
      <blockquote><p>"${section.text}"</p>${cite}</blockquote>
    </div>`;
  },

  "list-text"(section) {
    const heading = section.heading ? `<h2>${section.heading}</h2>` : "";
    const subheading = section.subheading ? `<h3>${section.subheading}</h3>` : "";
    const paragraph = section.paragraph ? `<p>${section.paragraph}</p>` : "";
    const list = section.list
      ? `<ul>${section.list.map(item => `<li>${item}</li>`).join("\n")}</ul>`
      : "";
    return `<div class="max-w-3xl mx-auto px-6 pb-4 prose-cs">${heading}${subheading}${paragraph}${list}</div>`;
  },

  image(section) {
    const caption = section.caption ? `<p class="img-caption">${section.caption}</p>` : "";
    return `<div class="max-w-5xl mx-auto px-6 mb-4">
      <div class="reveal photo-frame w-full h-56 md:h-80 rounded-2xl">
        <img src="${section.src}" alt="${escapeAttr(section.alt || "")}" loading="lazy" />
      </div>
      ${caption}
    </div>`;
  },

  "before-after"(section) {
    const col = (img) => `<div>
      <div class="photo-frame w-full h-52 rounded-2xl">
        <img src="${img.src}" alt="${escapeAttr(img.alt || "")}" loading="lazy" />
      </div>
      <p class="img-caption mt-2">${img.caption || ""}</p>
    </div>`;
    return `<div class="max-w-5xl mx-auto px-6 mb-12">
      <div class="reveal grid md:grid-cols-2 gap-4">
        ${col(section.before)}
        ${col(section.after)}
      </div>
    </div>`;
  },

  principles(section) {
    const cards = section.items.map(item => `
      <div class="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800">
        <div class="w-10 h-10 bg-orange-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center mb-4">
          ${icon(item.icon)}
        </div>
        <h3 class="font-display font-bold text-zinc-900 dark:text-white mb-2" style="font-size:1rem;margin:0 0 .5rem;color:inherit;">${item.title}</h3>
        <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed" style="margin:0;color:inherit;">${item.body}</p>
      </div>`).join("\n");
    return `<div class="max-w-5xl mx-auto px-6 mb-12">
      <div class="reveal grid md:grid-cols-3 gap-5">${cards}</div>
    </div>`;
  },

  steps(section) {
    const rows = section.items.map((step, i) => `
      <div class="flex gap-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800">
        <div class="step-badge shrink-0 mt-0.5">${i + 1}</div>
        <div>
          <p class="font-display font-bold text-zinc-900 dark:text-white mb-1">${step.title}</p>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">${step.body}</p>
        </div>
      </div>`).join("\n");
    return `<div class="max-w-4xl mx-auto px-6 mb-12">
      <div class="reveal space-y-4">${rows}</div>
    </div>`;
  },

  subsections(section) {
    const heading = section.heading ? `<h2>${section.heading}</h2>` : "";
    const body = section.items.map(sub => `<h3>${sub.title}</h3><p>${sub.body}</p>`).join("\n");
    return `<div class="max-w-3xl mx-auto px-6 pb-4 prose-cs">${heading}${body}</div>`;
  }

};

/* ---- top-level page pieces ---- */

function renderTags(tags) {
  return tags.map(tag => {
    if (tag.primary) {
      return `<span class="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">${tag.label}</span>`;
    }
    return `<span class="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-full">${tag.label}</span>`;
  }).join("\n");
}

function renderMetaGrid(meta) {
  return meta.map(m => `
    <div>
      <p class="text-xs text-zinc-400 uppercase tracking-widest mb-1">${m.label}</p>
      <p class="font-medium text-zinc-900 dark:text-white text-sm">${m.value}</p>
    </div>`).join("\n");
}

function renderStats(stats) {
  return stats.map(s => `
    <div class="stat-card bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-5 pl-6">
      <p class="font-display font-bold text-3xl ${s.accent ? "text-accent" : "text-zinc-900 dark:text-white"}">${s.value}</p>
      <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">${s.label}</p>
    </div>`).join("\n");
}

function renderCaseStudy(project) {
  const sections = (project.sections || [])
    .map(section => {
      const renderer = sectionRenderers[section.type];
      if (!renderer) {
        console.warn(`Unknown case study section type: "${section.type}"`);
        return "";
      }
      return renderer(section);
    })
    .join("\n");

  return `
    <header class="pt-32 pb-10 max-w-4xl mx-auto px-6">
      <a href="projects.html" class="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to projects
      </a>

      <div class="flex flex-wrap items-center gap-3 mb-6">
        ${renderTags(project.tags)}
        <span class="text-xs text-zinc-400 ml-1">${project.year}${project.duration ? " · " + project.duration : ""}</span>
      </div>

      <h1 class="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-white leading-tight mb-6">
        ${project.title}
      </h1>

      <p class="reveal d1 text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl">
        ${project.description}
      </p>

      <div class="reveal d2 grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-b border-zinc-100 dark:border-zinc-900">
        ${renderMetaGrid(project.meta || [])}
      </div>
    </header>

    <div class="max-w-6xl mx-auto px-6 mb-16">
      <div class="reveal photo-frame w-full h-72 md:h-[480px] rounded-3xl">
        <img src="${project.hero.src}" alt="${escapeAttr(project.hero.alt || "")}" loading="eager" />
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-6 mb-16">
      <div class="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
        ${renderStats(project.stats || [])}
      </div>
    </div>

    ${sections}

    <div class="max-w-3xl mx-auto px-6 pb-16 prose-cs">
      <hr />
      <p><em>Interested in a similar engagement? <a href="index.html#contact">Get in touch</a> — I'm available for new projects from Q2 2025.</em></p>
    </div>
  `;
}

/* ---- boot: read ?project= and inject into #case-study-root ---- */

function initCaseStudy() {
  const root = document.getElementById("case-study-root");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project");
  const project = slug && window.CASE_STUDIES ? window.CASE_STUDIES[slug] : null;

  if (!project) {
    root.innerHTML = `
      <div class="max-w-2xl mx-auto px-6 pt-32 pb-16 text-center">
        <h1 class="font-display font-bold text-3xl mb-4">Project not found</h1>
        <p class="text-zinc-500 dark:text-zinc-400 mb-6">We couldn't find a case study for "${slug || ""}".</p>
        <a href="projects.html" class="text-accent hover:underline">← Back to projects</a>
      </div>`;
    return;
  }

  document.title = `${project.title} — Case Study`;
  root.innerHTML = renderCaseStudy(project);

  // Re-run your site's existing scroll-reveal / IntersectionObserver init here
  // if it's normally wired up on DOMContentLoaded, e.g.: initRevealAnimations();
  document.dispatchEvent(new CustomEvent("case-study:rendered", { detail: { slug } }));
}

document.addEventListener("DOMContentLoaded", initCaseStudy);
