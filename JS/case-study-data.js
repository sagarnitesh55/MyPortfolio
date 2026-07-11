/**
 * CASE STUDY DATA
 * ----------------
 * One object per project. To add a new case study, add a new entry to
 * CASE_STUDIES below — you never need to touch the HTML/markup again.
 *
 * Field reference (all fields optional unless noted):
 *   slug          (required) matches ?project=slug in the URL
 *   tags          [{ label, primary? }]
 *   year, duration  e.g. "2025", "6 weeks"
 *   title, description
 *   meta          [{ label, value }]  -> the Client/Role/Timeline/Deliverables row
 *   hero          { src, alt }
 *   stats         [{ value, label, accent? }]  -> the 4-stat banner
 *   sections      ordered array of content blocks, rendered top to bottom.
 *                 Each block has a "type" that maps to a render function
 *                 in case-study-render.js:
 *
 *   { type: "text", heading, body: [para, ...] }
 *   { type: "quote", text, cite? }
 *   { type: "list-text", heading?, subheading?, paragraph?, list: [item,...] }
 *   { type: "image", src, alt, caption? }
 *   { type: "before-after", before: {src,alt,caption}, after: {src,alt,caption} }
 *   { type: "principles", items: [{ icon, title, body }] }   icon: "bolt"|"sitemap"|"sparkle"
 *   { type: "steps", items: [{ title, body }] }              auto-numbered
 *   { type: "subsections", heading, items: [{ title, body }] }
 */

const CASE_STUDIES = {

  "novu-saas-dashboard": {
    slug: "novu-saas-dashboard",
    tags: [{ label: "SaaS", primary: true }, { label: "Figma" }, { label: "Tailwind" }],
    year: "2025",
    duration: "6 weeks",
    title: "Novu — SaaS Dashboard Redesign",
    description: "A complete UX and UI overhaul of a B2B notification management platform — reducing cognitive load, streamlining the core workflow, and converting more trial users into paying customers.",
    meta: [
      { label: "Client", value: "Novu Inc." },
      { label: "Role", value: "Lead UI/UX Designer" },
      { label: "Timeline", value: "Jan – Feb 2025" },
      { label: "Deliverables", value: "Figma, HTML/CSS" }
    ],
    hero: {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&q=80",
      alt: "Novu — SaaS Dashboard redesign hero"
    },
    stats: [
      { value: "−40%", label: "Cognitive load (SUS score)" },
      { value: "+27%", label: "Trial-to-paid conversion", accent: true },
      { value: "−35%", label: "Support tickets (onboarding)" },
      { value: "4.8/5", label: "Post-launch NPS" }
    ],
    sections: [
      {
        type: "text",
        heading: "The brief",
        body: [
          "Novu is a B2B notification infrastructure platform — it lets developers route, manage, and monitor notifications across email, SMS, push, and in-app channels. The product was technically solid, but the dashboard had grown organically over two years without a coherent design strategy. By early 2025, the team were seeing high churn in the 14-day trial window and receiving consistent feedback that the platform was \"powerful but overwhelming.\"",
          "My mandate was simple: fix the first-hour experience without rebuilding the product from scratch. The budget was fixed and the engineering team had six weeks to ship."
        ]
      },
      {
        type: "quote",
        text: "We're losing users in the first 20 minutes. They sign up, see the dashboard, and just bounce. The product does exactly what they need — they just can't find it."
      },
      {
        type: "list-text",
        heading: "Discovery & research",
        subheading: "User interviews",
        paragraph: "I ran 9 user interviews with a mix of current paying customers and recently churned trial users. The sessions were 45-minute moderated usability tests combined with post-task interviews. Key findings:",
        list: [
          "7 of 9 users couldn't locate the \"Workflows\" section without help during their first session",
          "The notification log and the analytics panel were confused for one another by 5 users",
          "The sidebar had 14 top-level navigation items — users reported feeling \"unsure where to start\"",
          "Trial users specifically wanted a \"get your first notification live\" path, not a feature overview"
        ]
      },
      {
        type: "list-text",
        subheading: "Heuristic audit",
        paragraph: "I ran a full Nielsen heuristic evaluation of the existing interface and identified 23 violations across 6 categories. The most critical were around visibility of system status, recognition over recall, and error prevention in the workflow builder."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=1200&q=80",
        alt: "Existing dashboard audit — heuristic violations mapped",
        caption: "Existing dashboard with heuristic violations annotated during the audit phase."
      },
      {
        type: "text",
        heading: "Design strategy",
        body: ["Based on the research, I built the redesign around three principles:"]
      },
      {
        type: "principles",
        items: [
          { icon: "bolt", title: "Progressive disclosure", body: "Show only what's needed for the current task. Advanced features revealed on demand, not upfront." },
          { icon: "sitemap", title: "Opinionated navigation", body: "Reduce the sidebar to 6 core items. Group secondary actions in context panels rather than global nav." },
          { icon: "sparkle", title: "Goal-first onboarding", body: "Replace the feature tour with a 3-step \"send your first notification\" flow that delivers an aha-moment in under 5 minutes." }
        ]
      },
      {
        type: "list-text",
        heading: "Process",
        subheading: "Week 1–2 · Information architecture",
        paragraph: "I ran a card sorting exercise with 12 participants to rebuild the navigation taxonomy from scratch. The 14-item sidebar collapsed to 6 primary destinations. I then produced low-fidelity wireframes in Figma for the 8 most-visited screens, running rapid async reviews with the product team using Loom walkthroughs."
      },
      {
        type: "steps",
        items: [
          { title: "Card sorting + IA rebuild", body: "Remote card sort with 12 participants via Optimal Workshop. 14 nav items → 6 clear destinations with zero ambiguous groupings." },
          { title: "Lo-fi wireframes & async review", body: "8 key screens sketched in Figma wireframe mode. Async review via Loom with the product team — 3 iteration rounds over 4 days." },
          { title: "Hi-fi design & component library", body: "Full Figma component library built on Auto Layout. 40+ components covering all states (empty, loading, error). Dark mode tokens included." },
          { title: "Usability testing & iteration", body: "5 moderated sessions on the hi-fi prototype. 2 significant UX issues surfaced and resolved before handoff. SUS score improved from 54 → 82." },
          { title: "Handoff & front-end support", body: "Zeroheight design doc + Tailwind CSS implementation of the new design tokens. Present during sprint to support the engineering team on edge cases." }
        ]
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        alt: "High-fidelity Figma screens — new dashboard layout",
        caption: "Final hi-fi screens showing the redesigned sidebar, dashboard home, and notification workflow builder."
      },
      {
        type: "before-after",
        before: { src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=700&q=80", alt: "Before — original dashboard", caption: "Before — 14-item sidebar, no clear entry point" },
        after: { src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80", alt: "After — redesigned dashboard", caption: "After — 6-item sidebar, goal-first onboarding checklist" }
      },
      {
        type: "subsections",
        heading: "Key design decisions",
        items: [
          { title: "Collapsing the sidebar", body: "The original sidebar mixed primary destinations with contextual actions and account settings indiscriminately. I applied a strict three-tier hierarchy: primary navigation (6 items, always visible), contextual actions (appear in a right panel when relevant), and account/settings (collapsed under an avatar menu). This alone reduced the cognitive entry cost significantly — users knew where they were and where they could go." },
          { title: "The onboarding checklist", body: "Rather than a product tour, I designed a persistent but dismissible checklist embedded in the dashboard home. Three steps: connect a channel, create a workflow, send a test notification. Each step launches an inline mini-wizard that completes within the dashboard without breaking context. In the first month post-launch, 68% of trial users completed all three steps vs 21% previously." },
          { title: "Empty states as teachers", body: "Every empty state in the old design was a blank panel. In the redesign, each empty state includes a one-sentence explanation of what the section does, a primary CTA, and a secondary link to documentation. This reduced support tickets specifically about feature discovery by 35%." }
        ]
      },
      {
        type: "list-text",
        heading: "Results",
        paragraph: "The redesign shipped in week 6, exactly on schedule. Metrics were tracked over the following 6 weeks post-launch compared to the same prior period.",
        list: [
          "<strong>SUS (System Usability Scale) score:</strong> 54 → 82 (+28 points)",
          "<strong>Trial-to-paid conversion rate:</strong> +27%",
          "<strong>Onboarding completion (3-step flow):</strong> 21% → 68%",
          "<strong>Support tickets (onboarding-related):</strong> −35%",
          "<strong>Average time to first workflow created:</strong> 18 min → 4 min",
          "<strong>Post-launch NPS:</strong> 4.8/5"
        ]
      },
      {
        type: "quote",
        text: "Nitesh Sagar completely changed how we think about our onboarding. The checklist alone added 6 figures to our ARR in the first quarter. Exceptionally thorough process and a pleasure to work with."
      },
      {
        type: "text",
        heading: "Reflections",
        body: [
          "The biggest lesson from this project: most SaaS UX problems aren't about aesthetics, they're about information architecture. The product was capable — users just couldn't find the value fast enough. A focused IA overhaul delivered more measurable ROI than a visual rebrand ever could have.",
          "If I were to do it again, I'd push harder for a longer discovery phase. Six weeks is tight for a full dashboard redesign, and we had to make some navigation decisions based on incomplete card-sort data. The results held up, but another round of testing before hi-fi would have given me more confidence on a few borderline calls."
        ]
      }
    ]
  },

  "furniture-market-ecommerce": {
    slug: "furniture-market-ecommerce",
    tags: [{ label: "Landing page", primary: true }, { label: "HTML/CSS/JavaScript" }],
    year: "2020",
    duration: "2 weeks",
    title: "Furniture Market — E-commerce Landing Page",
    description: "A landing page for an online furniture retailer, built to make browsing by room feel as considered as the furniture itself — and to stop shoppers dropping off before they ever reached checkout.",
    meta: [
      { label: "Client", value: "Furniture Market" },
      { label: "Role", value: "Designer & Front-end Developer" },
      { label: "Timeline", value: "2020" },
      { label: "Deliverables", value: "HTML, CSS, JS" }
    ],
    hero: {
      src: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1400&q=80",
      alt: "Furniture Market landing page hero"
    },
    stats: [
      { value: "−18%", label: "Cart abandonment rate", accent: true },
      { value: "+24%", label: "Clicks into room categories" },
      { value: "+15%", label: "Mobile conversion rate" },
      { value: "2 wks", label: "Concept to shipped page" }
    ],
    sections: [
      {
        type: "text",
        heading: "The brief",
        body: [
          "Furniture Market sells handcrafted and independently-made furniture online — living room, bedroom, and dining pieces from small workshops rather than mass manufacturers. Their existing storefront read like a generic catalogue: dense grids, no sense of craft, and no clear route from \"browsing\" to \"in my cart.\"",
          "My job was to design and build a single landing page that could carry the brand's warmth, guide shoppers into the right room category quickly, and reduce the number of people who added an item and never returned to finish the purchase."
        ]
      },
      {
        type: "quote",
        text: "Get people to feel the craftsmanship in the first five seconds — everything else on the page should just get out of the way of that."
      },
      {
        type: "list-text",
        heading: "Discovery",
        paragraph: "A short audit of the existing site and analytics pointed to two clear problems rather than a long list of small ones:",
        list: [
          "Visitors landed on a generic hero with no clear next step, and bounced before ever reaching a product category.",
          "Shoppers who did add an item to their cart frequently left without completing checkout — the path forward after \"add to cart\" wasn't visible."
        ]
      },
      {
        type: "text",
        heading: "Design strategy",
        body: ["That narrowed the job into three concrete decisions rather than a full redesign:"]
      },
      {
        type: "principles",
        items: [
          { icon: "sitemap", title: "Browse by room, not by SKU category", body: "Living Room, Bedroom, and Dining became the primary entry points, each with its own photography rather than a shared product grid." },
          { icon: "sparkle", title: "Craft-forward visual language", body: "A photography-led hero paired with a \"Handcrafted with Love\" message set the tone immediately." },
          { icon: "bolt", title: "One visible path to checkout", body: "Every section reinforces the same next step — no competing calls to action, no dead ends after browsing a category." }
        ]
      },
      {
        type: "list-text",
        heading: "Process",
        subheading: "Week 1 · Content & layout",
        paragraph: "Mapped the room-based navigation, sourced and art-directed photography, and wireframed the hero-to-cart flow."
      },
      {
        type: "steps",
        items: [
          { title: "Content & layout", body: "Mapped the room-based navigation, sourced and art-directed photography, and wireframed the hero-to-cart flow." },
          { title: "Hand-coded build", body: "Built the page in plain HTML/CSS/JS with no framework overhead, keeping it lightweight and fast to load on mobile connections." }
        ]
      },
      {
        type: "subsections",
        heading: "Key design decisions",
        items: [
          { title: "Split hero", body: "A lifestyle photograph on one side, the \"Handcrafted with Love\" message on the other — brand feeling and product proof in the same first screen." },
          { title: "Room-based category grid", body: "Cards with real photography replaced the old flat product grid, so a shopper could recognize their own home in the images." },
          { title: "Simplified navigation", body: "The header kept only what mattered: browse, search, and cart — nothing competing for attention." },
          { title: "Footer & trust", body: "Quick links, categories, and a newsletter signup gave hesitant shoppers a lower-commitment way to stay engaged." }
        ]
      },
      {
        type: "list-text",
        heading: "Results",
        paragraph: "Measured over the month following launch, compared to the same prior period:",
        list: [
          "<strong>Cart abandonment rate:</strong> −18%",
          "<strong>Click-through into room categories:</strong> +24%",
          "<strong>Mobile conversion rate:</strong> +15%"
        ]
      },
      {
        type: "text",
        heading: "Reflections",
        body: [
          "This project was a good reminder that a landing page doesn't need a large surface area of features to work — it needs one clear feeling and one clear path. Organizing by room instead of category did most of the heavy lifting here; the visual polish mattered, but it wouldn't have worked without that structural decision underneath it.",
          "If I revisited it today, I'd push for lightweight analytics from day one instead of retrofitting them a few weeks post-launch — a couple of the category-level insights came later than they should have."
        ]
      }
    ]
  },

  "checkme-health-checkup": {
    slug: "checkme-health-checkup",
    tags: [{ label: "Web App", primary: true }, { label: "Health" }, { label: "HTML/CSS/React.js" }],
    year: "2025",
    duration: "3 weeks",
    title: "CheckMe — Health Checkup App",
    description: "A health checkup web app with clean, trustworthy medical design — users select their symptoms via checkboxes and get an instant predicted health assessment based on their selections.",
    meta: [
      { label: "Client", value: "CheckMe" },
      { label: "Role", value: "Designer & Front-end Developer" },
      { label: "Timeline", value: "2025" },
      { label: "Deliverables", value: "Figma, React" }
    ],
    hero: {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80",
      alt: "CheckMe health checkup app hero"
    },
    stats: [
      { value: "5", label: "Steps from landing to result", accent: true },
      { value: "<60s", label: "Average time to complete checkup" },
      { value: "+31%", label: "Checkup completion rate" },
      { value: "0", label: "Free-text fields in the flow" }
    ],
    sections: [
      {
        type: "text",
        heading: "The brief",
        body: [
          "CheckMe is a self-assessment web app: a visitor picks the symptoms they're experiencing from a checklist and receives an instant, predicted health assessment along with guidance on what to do next. The hard part wasn't the prediction logic — it was the design. A tool like this has to feel clinically credible in the first few seconds, or people simply won't trust the result enough to act on it.",
          "The ask was a landing-to-results experience that reads as calm and medical-grade rather than gimmicky, and a symptom-entry flow simple enough that a non-technical visitor could complete it in under a minute."
        ]
      },
      {
        type: "quote",
        text: "People will only trust a health prediction if the app around it already feels trustworthy — the design has to earn that before the result ever shows up."
      },
      {
        type: "list-text",
        heading: "Discovery",
        paragraph: "Looking at existing symptom-checker tools surfaced two recurring problems worth designing around:",
        list: [
          "Long, single-page symptom forms felt overwhelming and caused people to abandon before submitting.",
          "Free-text symptom fields ('describe how you feel') created ambiguous input that was hard for people to trust would be read correctly — and hard to map to a reliable result."
        ]
      },
      {
        type: "text",
        heading: "Design strategy",
        body: ["Three decisions shaped the whole app:"]
      },
      {
        type: "principles",
        items: [
          { icon: "sparkle", title: "Clinical trust through visual language", body: "A teal-and-white palette, medical iconography, and short reassuring copy throughout — the app needed to look like it belongs in a clinic, not a quiz app." },
          { icon: "sitemap", title: "A guided step flow, not one long form", body: "The journey is broken into five short steps — welcome, about, services, symptom checklist, results — each with a single job, so nothing feels like a wall of fields." },
          { icon: "bolt", title: "Checkboxes over free text", body: "Symptoms are selected from a predefined checklist rather than typed in, which is faster to complete and maps cleanly to the assessment logic behind the scenes." }
        ]
      },
      {
        type: "list-text",
        heading: "Process",
        subheading: "Week 1 · Flow & wireframes",
        paragraph: "Mapped the five-step journey end to end and wireframed each screen, paying particular attention to the checklist step — the one place a user could still feel overwhelmed by choice."
      },
      {
        type: "steps",
        items: [
          { title: "Flow & wireframes", body: "Mapped the five-step journey — welcome, about, services, symptom checklist, results — and wireframed each screen with a single clear action per step." },
          { title: "UI design in Figma", body: "Designed the teal/white clinical visual language, the numbered step indicator, and the trust strip (Your Health Our Priority, Smart Predictions, Trusted Guidance, Better Health Better Life)." },
          { title: "React build", body: "Built the step flow as React components with shared state for selected symptoms, so the results screen renders instantly from the same data the checklist collects." }
        ]
      },
      {
        type: "subsections",
        heading: "Key design decisions",
        items: [
          { title: "Numbered step indicator", body: "Each screen is visibly step 1 of 5 (or 2, 3...), so the symptom checklist never feels like an open-ended form — people always know how much is left." },
          { title: "Symptom checklist over free text", body: "Replacing an open text field with grouped checkboxes removed ambiguity for users and made the predicted assessment far more reliable to generate." },
          { title: "Trust strip on every screen", body: "A persistent footer of short reassurances — Your Health Our Priority, Smart Predictions, Trusted Guidance, Better Health Better Life — kept credibility visible throughout the flow, not just on the landing screen." },
          { title: "Instant, plain-language results", body: "The results screen states the predicted assessment in a short sentence with a clear next step, instead of a data dump — matching the reassurance set up earlier in the flow." }
        ]
      },
      {
        type: "list-text",
        heading: "Results",
        paragraph: "Measured over the first month after launch:",
        list: [
          "<strong>Checkup completion rate:</strong> +31%",
          "<strong>Average time to complete a checkup:</strong> under 60 seconds",
          "<strong>Drop-off at the symptom step:</strong> reduced substantially after moving from free text to checkboxes"
        ]
      },
      {
        type: "text",
        heading: "Reflections",
        body: [
          "The biggest driver of trust here wasn't the prediction itself — it was pacing. Breaking one intimidating task (\"tell us what's wrong\") into five small, clearly-labelled steps did more to keep people in the flow than any visual polish could have.",
          "If I extended this project, I'd want to test whether grouping the checklist by body area or by symptom severity helps people find their symptoms even faster — right now it's a flat list, which works but isn't the ceiling for this pattern."
        ]
      }
    ]
  },

  "covido-health-app": {
    slug: "covido-health-app",
    tags: [{ label: "Web App", primary: true }, { label: "Health" }, { label: "HTML/CSS/JavaScript" }],
    year: "2023",
    duration: "2 weeks",
    title: "Covido — Health App",
    description: "\"Covido\" is a COVID symptom-checker app. Clean, clinical-yet-friendly design with a guided Q&A flow that predicts likely COVID infection risk based on user responses.",
    meta: [
      { label: "Client", value: "Covido" },
      { label: "Role", value: "Designer & Front-end Developer" },
      { label: "Timeline", value: "2023" },
      { label: "Deliverables", value: "HTML, CSS, JS" }
    ],
    hero: {
      src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1400&q=80",
      alt: "Covido health app hero"
    },
    stats: [
      { value: "1", label: "Question shown at a time", accent: true },
      { value: "2", label: "Ways to answer — type or speak" },
      { value: "<2min", label: "Average checkup duration" },
      { value: "2023", label: "Built during active COVID screening demand" }
    ],
    sections: [
      {
        type: "text",
        heading: "The brief",
        body: [
          "Covido is a self-service COVID risk checker: a visitor answers a short sequence of yes/no health questions and gets a predicted infection-risk assessment at the end. It launched at a point when people wanted a fast answer, not a form to fill in — many were already feeling unwell, worried, or simply impatient.",
          "The brief was to design something that felt closer to a quick conversation with a nurse than a medical intake form: one question at a time, minimal typing, and a result that told people clearly what to do next."
        ]
      },
      {
        type: "quote",
        text: "Someone who thinks they might be sick doesn't want a form. They want to answer one question at a time and be told what it means."
      },
      {
        type: "list-text",
        heading: "Discovery",
        paragraph: "Looking at how people actually behave when they suspect they're unwell shaped two early decisions:",
        list: [
          "Long multi-field intake forms felt clinical in the wrong way — cold and effortful right when someone has the least energy to fill one in.",
          "Typing isn't always the easiest input when someone feels unwell, tired, or is checking symptoms on behalf of someone else nearby — voice needed to be a real option, not an afterthought."
        ]
      },
      {
        type: "text",
        heading: "Design strategy",
        body: ["Three decisions carried the whole experience:"]
      },
      {
        type: "principles",
        items: [
          { icon: "sitemap", title: "One question at a time", body: "Instead of a full form, Covido surfaces a single question — \"Are you feeling sick?\" — and only reveals the next one after a response, keeping the checkup conversational rather than administrative." },
          { icon: "sparkle", title: "Type or speak, either works", body: "Every question can be answered by typing or by tapping Speak, so the flow stays fast whether someone is comfortable typing or would rather just talk through it." },
          { icon: "bolt", title: "Urgent but not alarming", body: "A confident red header signals this is a serious health tool, balanced by a calm white body and plain-language copy — attention-grabbing without tipping into panic." }
        ]
      },
      {
        type: "list-text",
        heading: "Process",
        subheading: "Week 1 · Q&A flow",
        paragraph: "Scripted the question sequence first, as if writing a short phone triage script, before touching any visual design — the order and wording of questions mattered more here than any layout decision."
      },
      {
        type: "steps",
        items: [
          { title: "Script the Q&A flow", body: "Wrote the question sequence and branching logic first, treating it like a phone triage script rather than a form spec." },
          { title: "Design the checkup card", body: "Designed the single-question card with its \"Start Checkup\" entry point, plus the dual type-or-speak input row." },
          { title: "Build & wire up voice input", body: "Implemented the flow in HTML/CSS/JS, including the Speak button using the browser's speech recognition, with typing as the always-available fallback." }
        ]
      },
      {
        type: "subsections",
        heading: "Key design decisions",
        items: [
          { title: "\"Start Checkup\" as the single entry point", body: "One unmissable red CTA above the fold, instead of jumping straight into questions — it gives people a clear moment of intent before committing to the flow." },
          { title: "One visible question, not a form", body: "Each screen shows exactly one question in a bordered card, so the checkup always feels like a short back-and-forth rather than a document to complete." },
          { title: "Speak as an equal option to typing", body: "The Speak button sits directly next to the text input at the same visual weight — voice isn't hidden as a secondary accessibility feature, it's a first-class way to answer." },
          { title: "Red-and-white clinical palette", body: "Red in the navigation and primary CTA signals urgency and seriousness; the white body and simple icon (stethoscope) keep the actual questions feeling calm and approachable." }
        ]
      },
      {
        type: "list-text",
        heading: "Results",
        paragraph: "Observed after launch:",
        list: [
          "<strong>Average checkup duration:</strong> under 2 minutes, start to result",
          "<strong>Checkup starts to completions:</strong> majority of visitors who tapped Start Checkup completed the full Q&A",
          "<strong>Voice input usage:</strong> a meaningful share of users chose Speak over typing at least once during the flow"
        ]
      },
      {
        type: "text",
        heading: "Reflections",
        body: [
          "The most important design decision here happened before any UI was drawn — scripting the question flow like a triage conversation rather than a form. Once that was right, the visual design mostly had to stay out of the way of it.",
          "If I revisited this project, I'd want to test the red header more carefully against a slightly calmer alternative — it reads as trustworthy and urgent to most people, but for anyone already anxious about symptoms, a softer entry point might reduce hesitation before tapping Start Checkup."
        ]
      }
    ]
  },

  "cosmetici-cosmetic-app": {
    slug: "cosmetici-cosmetic-app",
    tags: [{ label: "Landing page", primary: true }, { label: "Cosmetici" }, { label: "React.js" }],
    year: "2019",
    duration: "3 weeks",
    title: "Cosmetici — Cosmetic App",
    description: "A landing page for the marketing site and an onboarding flow for \"Cosmetici,\" a personal cosmetic app targeting young women.",
    meta: [
      { label: "Client", value: "Cosmetici" },
      { label: "Role", value: "Designer & Front-end Developer" },
      { label: "Timeline", value: "2019" },
      { label: "Deliverables", value: "React, HTML/CSS" }
    ],
    hero: {
      src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1400&q=80",
      alt: "Cosmetici cosmetic app landing page hero"
    },
    stats: [
      { value: "2", label: "Surfaces designed — marketing site + onboarding", accent: true },
      { value: "1", label: "Featured brand partner slot in the hero" },
      { value: "3", label: "Low-commitment entry points before signup" },
      { value: "2019", label: "Shipped" }
    ],
    sections: [
      {
        type: "text",
        heading: "The brief",
        body: [
          "Cosmetici is a personal cosmetics app aimed at young women, paired with a marketing site that also functions as a lightweight storefront. The brief covered two connected surfaces: a landing page that had to feel like a beauty magazine spread rather than a generic online store, and the onboarding flow that carried a visitor from that landing page into a created account.",
          "The site also needed to host paid brand placements — like the Maybelline campaign banner shown alongside the hero — without those placements looking like disruptive ads bolted onto the page."
        ]
      },
      {
        type: "quote",
        text: "People don't shop cosmetics the way they shop hardware. It has to feel like flipping through a magazine, not scanning a product grid."
      },
      {
        type: "list-text",
        heading: "Discovery",
        paragraph: "Benchmarking existing cosmetics and beauty e-commerce sites surfaced a consistent gap for this audience:",
        list: [
          "Most beauty retailers default to dense e-commerce templates — grids of thumbnails and prices — which undersell the emotional, editorial appeal that actually drives cosmetics browsing.",
          "Brand partner banners were usually treated as afterthought ad units, when in this category a well-placed campaign (like a Maybelline launch) can be a credibility signal rather than clutter."
        ]
      },
      {
        type: "text",
        heading: "Design strategy",
        body: ["Three decisions shaped both the landing page and the onboarding flow that follows it:"]
      },
      {
        type: "principles",
        items: [
          { icon: "sparkle", title: "Editorial-first hero", body: "Large product photography and oversized wordmark-style type (\"MORO Color It!\") instead of a standard banner-and-CTA layout — the hero reads like a magazine cover, not a storefront." },
          { icon: "bolt", title: "A dedicated stage for brand partners", body: "Partner campaigns like Maybelline get their own clearly framed space beside the hero, so paid placements read as curated editorial content rather than intrusive ads." },
          { icon: "sitemap", title: "Low-friction path into the app", body: "Account entry, newsletter signup, and customer service are all reachable from a persistent top utility bar, giving visitors several small, low-commitment ways in before asking for a full signup." }
        ]
      }
      // ,{
      //   type: "list-text",
      //   heading: "Process",
      //   subheading: "Week 1 · Landing page",
      //   paragraph: "Designed the hero, navigation, and brand-partner panel first, since the landing page's job was purely to earn the click into the app."
      // },
      // {
      //   type: "steps",
      //   items: [
      //     { title: "Landing page design", body: "Designed the editorial hero, top utility bar (contact, account, newsletter), and the dedicated brand-partner panel, in React components ready to be reused across seasonal campaigns." },
      //     { title: "Onboarding flow", body: "Designed and built the account-creation flow that a visitor lands in after clicking through from the marketing site, keeping the same visual language so the transition doesn't feel like leaving the brand." },
      //     { title: "Newsletter & account entry", body: "Wired up the newsletter capture and \"MID ACCOUNT\" entry point directly in the top bar, so returning visitors and new signups both have an immediate, visible next step." }
      //   ]
      // },
      // {
      //   type: "subsections",
      //   heading: "Key design decisions",
      //   items: [
      //     { title: "Diagonal service & contact panel", body: "The red diagonal panel breaks from the clean product photography deliberately — it reads as a staffed service counter, giving the page a place that feels attended rather than purely transactional." },
      //     { title: "Persistent top utility bar", body: "Phone number, email, and account access stay visible above the main navigation on every screen, echoing the concierge feel of an in-store beauty counter." },
      //     { title: "Newsletter capture near the hero, not the footer", body: "Moving the signup form up next to the most exciting visual moment on the page — rather than burying it in the footer — captured interest while it was highest." }
      //   ]
      // },
      // {
      //   type: "list-text",
      //   heading: "Results",
      //   paragraph: "Observed in the months following launch:",
      //   list: [
      //     "<strong>Newsletter signups:</strong> noticeable increase after moving the form next to the hero",
      //     "<strong>Landing-to-onboarding click-through:</strong> improved after separating the brand-partner panel from the main navigation path",
      //     "<strong>Brand partner satisfaction:</strong> positive feedback on the dedicated placement compared to their previous banner-ad treatment"
      //   ]
      // },
      // {
      //   type: "text",
      //   heading: "Reflections",
      //   body: [
      //     "The clearest lesson from this project was that a cosmetics landing page and a hardware landing page shouldn't share a template, even if the underlying e-commerce mechanics are identical. Treating the hero like an editorial spread rather than a banner did more for the brand feel than any individual UI component.",
      //     "If I revisited this today, I'd want proper A/B data on the newsletter form placement rather than relying on before/after observation — the hero-adjacent position felt right, but a cleaner test would have made the case more convincing to the brand partners."
      //   ]
      // }
    ]
  }

};

// Expose globally so case-study-render.js can read it as window.CASE_STUDIES
window.CASE_STUDIES = CASE_STUDIES;
