# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # NOVA Cafe

  NOVA is a warm, editorial cafe and restaurant website built around seasonal
  cooking, intimate dining, and unhurried evenings. The interface uses cinematic
  food and interior photography, Playfair Display typography, and a cream,
  charcoal, and copper visual palette.

  ## Features

  - Full-screen hero with responsive navigation and reservation CTAs
  - About NOVA story section
  - INR-priced seasonal menu preview
  - Responsive gallery using ten NOVA photography assets
  - Gallery starts with three images and expands to the full collection
  - Reservation form with local confirmation state
  - Contact and opening-hours footer
  - Responsive layouts for mobile, tablet, and desktop
  - Reduced-motion support for users who prefer less animation

  ## Tech Stack

  - React 19
  - TypeScript
  - Vite
  - Tailwind CSS 4
  - ESLint

  ## Project Structure

  ```text
  src/
    assets/
      images/       Restaurant and gallery photography
      logo/         NOVA wordmark
    components/
      Navbar.tsx    Responsive navigation and booking CTA
    sections/
      Hero.tsx
      About.tsx
      Menu.tsx
      Gallery.tsx
      Reservation.tsx
      Footer.tsx
    App.tsx         Page composition
    index.css       Theme tokens, typography, and shared utilities
  ```

  ## Getting Started

  Requirements: Node.js 20 or newer and npm.

  ```bash
  npm install
  npm run dev
  ```

  The development server will print the local URL, usually
  `http://localhost:5173`.

  ## Available Commands

  ```bash
  npm run dev       # Start the Vite development server
  npm run lint      # Run ESLint
  npm run build     # Type-check and create a production build
  npm run preview   # Preview the production build locally
  ```

  ## Reservation Behavior

  The reservation form currently demonstrates the user flow locally. Submitting
  the form displays a confirmation state in the browser, but it does not send a
  real booking request. A reservation provider or backend can be connected later.

  ## Deployment

  This is a standard Vite application and can be deployed to Vercel with the
  Vercel CLI:

  ```bash
  vercel --prod
  ```

  The production build output is generated in `dist/` and is ignored by Git.
