# Snuffy Rhino Productions — Website

A multi-page marketing site for Snuffy Rhino Productions' iOS apps and books, built with
Bootstrap 5 + HTML5, styled after Apple.com's visual language (generous
whitespace, large type, restrained color, subtle scroll reveals).

The site is fully static — plain HTML, CSS, JS, and assets with relative links. There is no
build step, server-side code, or runtime data fetching, so it runs unchanged on GitHub Pages,
Netlify, Cloudflare Pages, or any static host.

## Structure

```
snuffyrhino_website/
├── index.html        Homepage — hero, app grid, book strip, contact CTA
├── apps.html          Detail sections for Manuscan, Ragion, Ingredient Getter, Writers Wellspring
├── books.html         All 4 books with Amazon links
├── about.html         Bio / story page
├── contact.html       Contact form (opens mailto: in default email app)
├── privacy.html       Privacy policy
├── 404.html           Custom not-found page (served automatically by GitHub Pages)
├── partials/
│   ├── nav.html        Reference copy of the nav markup
│   └── footer.html     Reference copy of the footer markup
├── css/style.css       All custom styles + design tokens (CSS variables at the top)
├── js/main.js          Scroll reveal, active-nav highlighting, mobile nav close, mailto form
├── images/
│   ├── apps/           Real app icons for Manuscan, Ragion, Ingredient Getter, Writers Wellspring
│   ├── books/          Real book covers for all 4 titles
│   └── icons/          Favicon + navbar logo
└── videos/             Compressed demo reel used by apps.html and about.html
```

The nav and footer are inlined in each page so the site works on any static host without
JavaScript fetches. Files in `partials/` are kept as reference copies when editing markup.

## Running locally

No build step. Serve the folder:

```
cd snuffyrhino_website
npx http-server -p 4001 -a 127.0.0.1
```

Then visit http://127.0.0.1:4001. (`http-server` supports HTTP range requests, which Safari
needs for video seeking.)

## Deploying to GitHub Pages

The live site is served from the public **`mr2magic/mr2magic.github.io`** repository at:

**https://mr2magic.github.io/**

GitHub Pages builds that repository's `main` branch directly from the root — no Actions
workflow or build step. To publish:

1. Copy the deployable site files into a checkout of `mr2magic.github.io`.
2. Commit and push to `main`.
3. GitHub Pages rebuilds automatically; the new version is usually live within a minute.

Only the public site files are pushed there (`*.html`, `css/`, `js/`, `images/`, `videos/`,
`.nojekyll`, and this README). Internal project folders such as `deft/`, `vbrief/`, `Docs/`,
and `deploy.sh` stay in the private source repository and are not published.

### Notes for GitHub Pages

- All internal links and asset paths are relative, so the site works from the domain root.
- `.nojekyll` is included so GitHub Pages serves files as-is rather than running Jekyll.
- `404.html` is used automatically for unknown paths. Its `<base href="/">` keeps relative
  links working from nested URLs; update it if the site moves to a subpath.
- The contact form uses `mailto:` and needs no backend.
- `videos/ManuscanDemoReel.mp4` is a compressed 1080p web encode (5.6 MB). The original 4K
  source is kept locally as `videos/ManuscanDemoReel-4k.mp4` and ignored by Git.

## Dependencies

Bootstrap 5.3.3 is loaded via CDN (jsdelivr) in every page — no npm install needed.
