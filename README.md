# Personal Web Page – GMT 458 Assignment 1

**Live site:** https://candagdeviren.github.io

Personal web page built with HTML, CSS, OpenLayers and Leaflet, hosted on GitHub Pages.

## Pages
- **About** (`index.html`) – 
- **Projects** (`projects.html`) – 
- **Maps** (`maps.html`) – 
## Technologies
HTML, CSS, JavaScript, OpenLayers 10.2.1, Leaflet 1.9.4, OpenStreetMap tiles, GitHub Pages

## CSS Features
- **Animation:** [fadeInUp keyframes, hover zoom — kendi cümlenle]
- **Table with images:** [projects tablosu]

## Issue 1 – Overlapping markers (zoom threshold)
- **Leaflet:** [layerGroup + zoomend event, threshold = 8]
- **OpenLayers:** [vector layer minZoom: 8, exclusive olduğu farkı]
- **Alternative:** [marker clustering]

## Issue 2 – Earth repeating when zoomed out
- **Leaflet:** [noWrap, maxBounds, maxBoundsViscosity, minZoom]
- **OpenLayers:** [wrapX: false, view extent, minZoom]

## AI Usage

I used AI (Claude) as a step-by-step guide throughout almost every stage of this
project, from setting up GitHub to solving the map issues. Since this was my first
time building a website, AI helped me understand not only what to write, but also
why each part works the way it does.

### What I learned
**General**
- How to plan and structure a website: separating pages, keeping CSS and JavaScript
  in their own files, and using a shared stylesheet across all pages
- Working in a clean and organised way: consistent lowercase file names, folder
  structure, and committing changes regularly with meaningful messages
- The basics of web design: layout, colour choices, spacing and readability
- The foundations of building and publishing a website with Git, GitHub Desktop
  and GitHub Pages

**HTML & CSS**
- Basic HTML structure (`head`, `nav`, `main`, `footer`) and linking pages together
- Basic CSS: flexbox navigation, centring content, styling tables
- Creating animations with `@keyframes` and hover effects with `transition`
- Using `object-fit` to display images without distortion

**Troubleshooting**
- Browsers cannot display HEIC images, so they must be converted to JPG
- GitHub Pages is case-sensitive, unlike macOS, so file names must match exactly
- Using the browser console to find JavaScript errors

**Web mapping**
- Loading OpenLayers and Leaflet from a CDN
- OpenLayers uses `[lon, lat]` order while Leaflet uses `[lat, lon]`
- Converting coordinates to Web Mercator with `ol.proj.fromLonLat`
- Showing markers only above a zoom threshold (`layerGroup` + `zoomend` in Leaflet,
  layer `minZoom` in OpenLayers)
- Preventing the world from repeating (`noWrap` and `maxBounds` in Leaflet,
  `wrapX: false` and view `extent` in OpenLayers)

**Estimated total AI usage:** [10 hours]

<!--
**candagdeviren/candagdeviren** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
