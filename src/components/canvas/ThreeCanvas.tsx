import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { cyberVertexShader, cyberFragmentShader } from './shaders';

interface ThreeCanvasProps {
  isDark: boolean;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ isDark }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const wireframeMeshRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const isDarkRef = useRef(isDark);
  isDarkRef.current = isDark;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    // 2. Renderer setup (Optimized pixel ratio to eliminate GPU fillrate lag)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 3. Custom Shader Material for Cyber Core
    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColor1: { value: new THREE.Color(isDark ? 0x00f2fe : 0x0284c7) },
      uColor2: { value: new THREE.Color(isDark ? 0x9d4edd : 0x6366f1) },
      uColor3: { value: new THREE.Color(isDark ? 0xf72585 : 0x38bdf8) },
      uDarkMode: { value: isDark ? 1.0 : 0.0 },
      uGlobalOpacity: { value: 1.0 },
    };

    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader: cyberVertexShader,
      fragmentShader: cyberFragmentShader,
      uniforms,
      transparent: true,
      wireframe: false,
      side: THREE.DoubleSide,
    });
    materialRef.current = shaderMaterial;

    // 4. Central Geometry (Optimized subdivision from 32 to 4 to cut 75% GPU vertex noise overhead)
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 4);
    const coreMesh = new THREE.Mesh(coreGeometry, shaderMaterial);
    coreMesh.position.set(1.5, 0.2, 0);
    scene.add(coreMesh);
    meshRef.current = coreMesh;

    // Wireframe outer sphere (Optimized subdivision to 3)
    const wireframeGeo = new THREE.IcosahedronGeometry(1.9, 3);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x38bdf8 : 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.22 : 0.15,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    wireframeMesh.position.copy(coreMesh.position);
    scene.add(wireframeMesh);
    wireframeMeshRef.current = wireframeMesh;

    // 5. 3D Stars - Crisp 4-Pointed Cross Stars (✦) with Natural Twinkle (NOT blurry snowflakes/mold!)
    const particleCount = 150;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const randoms = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
      // Varied star sizes: majority pinpoint stars, some prominent brilliant stars
      scales[i] = Math.random() < 0.25 ? Math.random() * 1.5 + 2.0 : Math.random() * 1.0 + 0.8;
      randoms[i] = Math.random();
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
    particleGeo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));

    const starPointVertexShader = `
      attribute float scale;
      attribute float aRandom;
      uniform float uTime;
      varying float vTwinkle;

      void main() {
        // Natural independent star flickering
        float twinkle = sin(uTime * 2.2 + aRandom * 6.28318) * 0.35 + 0.65;
        vTwinkle = twinkle;

        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = scale * (150.0 / -mvPosition.z) * (0.75 + 0.35 * twinkle);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const starPointFragmentShader = `
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vTwinkle;

      void main() {
        vec2 uv = gl_PointCoord - vec2(0.5);
        float dist = length(uv);

        // 1. Brilliant diamond central core
        float core = max(0.0, 1.0 - dist * 4.5);
        core = pow(core, 3.5);

        // 2. Crisp 4-pointed cross star diffraction spikes (horizontal & vertical starlight needles)
        float rayX = max(0.0, 1.0 - abs(uv.x) * 2.0) * max(0.0, 1.0 - abs(uv.y) * 24.0);
        float rayY = max(0.0, 1.0 - abs(uv.y) * 2.0) * max(0.0, 1.0 - abs(uv.x) * 24.0);
        float spikes = (rayX + rayY);

        // 3. Diamond halo flare
        float diamond = max(0.0, 1.0 - (abs(uv.x) + abs(uv.y)) * 3.2);
        diamond = pow(diamond, 2.5);

        // Total star luminosity (✦)
        float star = core * 2.5 + diamond * 0.7 + spikes * 1.8;

        if (star < 0.02) discard;

        // Center is sparkling diamond white, flares take the ambient cosmic color
        vec3 starColor = mix(uColor, vec3(1.0, 1.0, 1.0), clamp(core * 1.8, 0.0, 1.0));
        float alpha = clamp(star * uOpacity * vTwinkle, 0.0, 1.0);

        gl_FragColor = vec4(starColor, alpha);
      }
    `;

    const starUniforms = {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(isDark ? 0x7dd3fc : 0x0284c7) },
      uOpacity: { value: isDark ? 0.9 : 0.65 },
    };

    const particleMat = new THREE.ShaderMaterial({
      vertexShader: starPointVertexShader,
      fragmentShader: starPointFragmentShader,
      uniforms: starUniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 6. Interactive Mouse & Scroll tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = window.scrollY;

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      
      if (w < 768) {
        coreMesh.position.set(0, 0.5, -1);
      } else {
        coreMesh.position.set(1.6, 0.2, 0);
      }
      wireframeMesh.position.copy(coreMesh.position);
    };

    onResize();

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // 7. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Sinks slowly across the entire page height:
      // Only sinks completely when user scrolls all the way to the bottom!
      const docHeight = document.documentElement.scrollHeight || 7500;
      const maxScroll = Math.max(1, docHeight - window.innerHeight);
      const scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));
      const targetY = 0.2 + Math.sin(elapsedTime * 0.8) * 0.1 - scrollProgress * 4.6;

      // Keep sphere 100% fully visible and vibrant throughout the entire page - NO fading out!
      coreMesh.visible = true;
      wireframeMesh.visible = true;

      if (shaderMaterial) {
        shaderMaterial.uniforms.uTime.value = elapsedTime;
        shaderMaterial.uniforms.uMouse.value.set(mouse.x, mouse.y);
        shaderMaterial.uniforms.uGlobalOpacity.value = 1.0;
      }

      if (coreMesh) {
        coreMesh.rotation.y = elapsedTime * 0.25 + mouse.x * 0.5;
        coreMesh.rotation.x = elapsedTime * 0.15 + mouse.y * 0.3;
        coreMesh.position.y = targetY;
      }

      if (wireframeMesh) {
        wireframeMesh.rotation.y = -elapsedTime * 0.2 + mouse.x * 0.3;
        wireframeMesh.rotation.z = elapsedTime * 0.1;
        wireframeMesh.position.y = targetY;
        const currentIsDark = isDarkRef.current;
        (wireframeMesh.material as THREE.MeshBasicMaterial).opacity = currentIsDark ? 0.22 : 0.15;
      }

      // Star constellation animation: subtle ambient rotation & shimmering twinkle
      if (particles) {
        particles.rotation.y = elapsedTime * 0.02 + mouse.x * 0.08;
        particles.rotation.x = mouse.y * 0.05;
        particleMat.uniforms.uTime.value = elapsedTime;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      coreGeometry.dispose();
      wireframeGeo.dispose();
      particleGeo.dispose();
      shaderMaterial.dispose();
      wireframeMat.dispose();
      particleMat.dispose();
    };
  }, []);

  // Sync dark/light theme dynamically to uniforms & particles
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uDarkMode.value = isDark ? 1.0 : 0.0;
      materialRef.current.uniforms.uColor1.value.set(isDark ? 0x00f2fe : 0x0284c7);
      materialRef.current.uniforms.uColor2.value.set(isDark ? 0x9d4edd : 0x6366f1);
      materialRef.current.uniforms.uColor3.value.set(isDark ? 0xf72585 : 0x38bdf8);
    }
    if (wireframeMeshRef.current) {
      const mat = wireframeMeshRef.current.material as THREE.MeshBasicMaterial;
      mat.color.set(isDark ? 0x38bdf8 : 0x0ea5e9);
      mat.opacity = isDark ? 0.22 : 0.15;
    }
    if (particlesRef.current) {
      const pMat = particlesRef.current.material as THREE.ShaderMaterial;
      pMat.uniforms.uColor.value.set(isDark ? 0x7dd3fc : 0x0284c7);
      pMat.uniforms.uOpacity.value = isDark ? 0.9 : 0.65;
    }
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden will-change-transform"
      style={{ transform: 'translateZ(0)' }}
      aria-hidden="true"
    />
  );
};
