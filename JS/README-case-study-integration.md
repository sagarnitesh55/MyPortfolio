# Making the case study section dynamic

Two new files do all the work:

- **case-study-data.js** — one object per project (Novu's data is already in there, plus Furniture Market from earlier). Add a new case study by adding a new entry here — no HTML editing required.
- **case-study-render.js** — reads `?project=<slug>` from the URL, looks up that project in the data file, and builds the exact same markup/classes your static `<article>` already used (`prose-cs`, `photo-frame`, `stat-card`, `step-badge`, `reveal`, etc.).

## What to change in your existing case-study.html

Everything **outside** the `<article>` — your `<head>`, Tailwind config, nav, and footer — stays exactly as it is. Only the `<article>...</article>` block gets replaced:

```html
<!-- Replace the entire <article>...</article> block with this: -->
<main id="case-study-root"></main>

<!-- Add these two script tags, right before </body> -->
<script src="case-study-data.js"></script>
<script src="case-study-render.js"></script>
```

## Linking to a case study

Your project cards now link with a query parameter instead of a separate file per project:

```html
<a href="case-study.html?project=novu-saas-dashboard">View project →</a>
<a href="case-study.html?project=furniture-market-ecommerce">View project →</a>
```

## Adding a new case study later

1. Open `case-study-data.js`.
2. Copy one of the existing entries (e.g. `"furniture-market-ecommerce": { ... }`).
3. Give it a new key (this becomes the `?project=` slug) and fill in the fields — see the comment block at the top of the file for what each `section.type` renders as.
4. Link to it: `case-study.html?project=your-new-slug`.

## One thing to reconnect

If your site currently re-triggers scroll-reveal animations (the `.reveal` / `d1` / `d2` classes) via an `IntersectionObserver` set up on `DOMContentLoaded`, that observer won't see the new content because it's injected *after* that event fires. Call your existing init function again after render — the renderer already fires a custom event you can hook into:

```html
<script>
  document.addEventListener("case-study:rendered", () => {
    initRevealAnimations(); // replace with whatever your existing init function is called
  });
</script>
```

If you don't have a separate init function and the reveal logic just runs inline on load, let me know how it's wired up and I'll fold the re-trigger directly into `case-study-render.js`.
