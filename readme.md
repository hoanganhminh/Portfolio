# 3D Interactive Portfolio Engine

A high-performance, responsive portfolio web application engineered with **React 19**, **Three.js WebGL**, **Custom GLSL Shaders**, **Tailwind CSS v4**, and **Lenis momentum scrolling**.

Designed with a modern cybernetic aesthetic, physical glassmorphism, hardware-accelerated animations, and zero-layout-thrashing architecture.

---

## Architectural Highlights

### 1. WebGL Custom Shader Cyber Core
- **3D Noise Displacement**: Vertex displacement driven by Stefan Gustavson's classic 3D Perlin noise algorithm executing directly on the GPU.
- **Fresnel Glow & View-Angle Illumination**: Dynamic rim-lighting and scanline shaders reacting to camera vectors and viewport dynamics.
- **Continuous Parallax Drift**: Mathematical scroll-progress interpolation that drives the 3D core's position smoothly down the viewport as the user navigates through the page, maintaining 60–120 FPS.
- **Wireframe Geometric Shell**: Outer icosahedron cage with additive blending and dark/light dynamic color synchronisation.

### 2. Procedural Point-Star Diffraction Constellation
- **Needle Diffraction Spikes**: Custom point fragment shader calculating horizontal and vertical diffraction rays alongside diamond core flares.
- **Natural Twinkling**: Independent frequency and phase shifts per star calculated via random vertex attributes without CPU intervention.
- **Additive Blending**: Multi-pass additive composite without depth-buffer write blocking (`depthWrite: false`) for crisp galactic rendering.

### 3. Kinetic Physics & Smooth Scrolling
- **Lenis Smooth Scroll Engine**: Inertial momentum wheel and touch interpolation with custom cubic easing curves.
- **Asynchronous Scrollspy**: IntersectionObserver-based active section detection that decouples scroll listeners from DOM style queries, eliminating layout thrashing.
- **Magnetic macOS Floating Dock**: Spring-physics magnification (`useSpring`, `useTransform`) with dynamic brand-color ambient hover highlights.

### 4. Interactive Orbital Ecosystem & Bento Grid
- **Concentric Circular Orbits**: Trigonometric circular paths for continuous orbiting technology nodes around a central runtime engine.
- **Balanced Full-Width Layout**: Modular cards structured around an architectural grid with glassmorphism overlays and custom SVG brand vectors.

---

## Technology Stack

| Domain | Technology | Version / Specification |
| :--- | :--- | :--- |
| **Runtime & Core** | React | 19.x |
| **Language** | TypeScript | 5.x / Strict Mode |
| **Build Engine** | Vite | 8.x |
| **3D Rendering** | Three.js | WebGL 2.0 / GLSL Shaders |
| **Styling & Design System** | Tailwind CSS | v4.x (Vite Native Plugin) |
| **Physics & Animations** | Framer Motion & Lenis | Hardware-accelerated GPU pipelines |
| **Linter & Code Quality** | Oxlint & TypeScript Compiler | Production strict checks |
| **Deployment Target** | Vercel | Single-Page Application (SPA) |

---

## Project Structure

```text
├── public/
│   ├── assets/              # Static raster assets & media
│   └── favicon.svg          # Vector favicon
├── src/
│   ├── components/
│   │   ├── canvas/          # WebGL Three.js canvas & custom GLSL shaders
│   │   │   ├── shaders.ts   # Vertex and fragment shader programs
│   │   │   └── ThreeCanvas.tsx
│   │   ├── icons/           # Official SVG brand icon components
│   │   ├── magicui/         # Interactive UI primitives (Dock, Cards, Confetti)
│   │   └── sections/        # Modular page sections
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── BentoSkillsSection.tsx
│   │       ├── CertificatesSection.tsx
│   │       ├── ExperienceSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── ContactSection.tsx
│   │       └── Navbar.tsx
│   ├── hooks/               # Custom hooks (Lenis, Theme, Viewport)
│   ├── App.tsx              # Application root orchestrator
│   ├── index.css            # Tailwind CSS entrypoint
│   └── main.tsx             # DOM mounting
├── vercel.json              # Vercel SPA build & routing configuration
├── vite.config.ts           # Vite bundler configuration
└── package.json             # Project dependencies and build scripts
```

---

## Performance Optimizations

1. **GPU Vertex Overhead Reduction**:
   - Central icosahedron subdivision was tuned to balance visual fidelity with vertex transformation cost, reducing unnecessary vertex shader cycles.
2. **Dynamic DPI Clamp**:
   - Viewport device pixel ratio is clamped to a maximum of `1.5` on high-density displays (such as Retina and 4K panels), preventing fill-rate bottlenecks.
3. **Decoupled Render Loop**:
   - Three.js animation cycle executes via `requestAnimationFrame` with internal clock delta tracking, independent of React component re-render trees.
4. **Zero Layout Thrashing**:
   - Navigation links and active indicators rely on `IntersectionObserver` thresholds instead of synchronous `getBoundingClientRect()` calls inside scroll event handlers.

---

## Getting Started

### Prerequisites
- Node.js (v18.0.0 or later recommended)
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/hoanganhminh/Portfolio.git

# Navigate into the project root
cd Portfolio

# Install dependencies
npm install
```

### Development
```bash
# Start local development server with Hot Module Replacement
npm run dev
```

### Production Build
```bash
# Type check and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

The application is configured for deployment on **Vercel** with automatic SPA rewrites:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Pushing commits to the `main` branch will automatically trigger builds on connected Vercel environments.

---

## License

This project is open-source and available under the [MIT License](LICENSE).
