"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface CupItem {
  group: THREE.Group;
  baseY: number;
  phase: number;
  speed: number;
}

interface AcupointOrbit {
  mesh: THREE.Mesh;
  radius: number;
  speed: number;
  offset: number;
  tiltX: number;
  tiltY: number;
  tiltZ: number;
}

export function HeroSculpture3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 520;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.1, 8.2);

    // Studio Lighting (Obsidian, Glass & Liquid Gold)
    const ambientLight = new THREE.AmbientLight(0xf5dfc4, 0.65);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xf5dfc4, 3.2);
    keyLight.position.set(4.5, 6, 6.5);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xd4a373, 24, 24);
    rimLight.position.set(-4.5, 2.5, 4);
    scene.add(rimLight);

    const emeraldFill = new THREE.PointLight(0x1f6f58, 12, 20);
    emeraldFill.position.set(3.5, -3.5, 3);
    scene.add(emeraldFill);

    const backHighlight = new THREE.DirectionalLight(0xffffff, 1.4);
    backHighlight.position.set(-3, -4, -4);
    scene.add(backHighlight);

    const sculpture = new THREE.Group();
    scene.add(sculpture);

    // Materials
    const liquidGoldMat = new THREE.MeshStandardMaterial({
      color: 0xe8c79b,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x3b2710,
      emissiveIntensity: 0.25,
    });

    const brushedGoldMat = new THREE.MeshStandardMaterial({
      color: 0xd4a373,
      metalness: 0.92,
      roughness: 0.22,
    });

    const glassCupMat = new THREE.MeshPhysicalMaterial({
      color: 0xebf3f0,
      metalness: 0.04,
      roughness: 0.06,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      reflectivity: 1.0,
      transparent: true,
      opacity: 0.26,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const glassRimMat = new THREE.MeshPhysicalMaterial({
      color: 0xf5dfc4,
      metalness: 0.15,
      roughness: 0.08,
      clearcoat: 1.0,
      transparent: true,
      opacity: 0.55,
    });

    const goldArcMat = new THREE.MeshStandardMaterial({
      color: 0xf0d5b0,
      metalness: 0.9,
      roughness: 0.18,
      emissive: 0x8f6738,
      emissiveIntensity: 0.55,
    });

    const emeraldArcMat = new THREE.MeshStandardMaterial({
      color: 0x358f74,
      metalness: 0.75,
      roughness: 0.25,
      emissive: 0x164a3b,
      emissiveIntensity: 0.65,
    });

    const acupointMat = new THREE.MeshStandardMaterial({
      color: 0xf7e3c6,
      metalness: 0.7,
      roughness: 0.15,
      emissive: 0xd4a373,
      emissiveIntensity: 1.1,
    });

    // Helper: Create Therapeutic Glass Cupping Dome (Ventosa 3D)
    const cupPoints: THREE.Vector2[] = [
      new THREE.Vector2(0.58, 0.0),
      new THREE.Vector2(0.62, 0.04),
      new THREE.Vector2(0.59, 0.14),
      new THREE.Vector2(0.56, 0.42),
      new THREE.Vector2(0.49, 0.68),
      new THREE.Vector2(0.35, 0.88),
      new THREE.Vector2(0.18, 0.98),
      new THREE.Vector2(0.14, 1.04),
    ];
    const cupLatheGeo = new THREE.LatheGeometry(cupPoints, 56);
    const cupLipGeo = new THREE.TorusGeometry(0.6, 0.036, 20, 64);
    const cupCapGeo = new THREE.CylinderGeometry(0.15, 0.17, 0.14, 32);
    const cupRingGeo = new THREE.TorusGeometry(0.16, 0.02, 16, 32);

    const createCuppingDome = (scale: number): THREE.Group => {
      const g = new THREE.Group();

      const bell = new THREE.Mesh(cupLatheGeo, glassCupMat);
      bell.position.y = -0.5;
      g.add(bell);

      const lip = new THREE.Mesh(cupLipGeo, glassRimMat);
      lip.rotation.x = Math.PI / 2;
      lip.position.y = -0.49;
      g.add(lip);

      const cap = new THREE.Mesh(cupCapGeo, liquidGoldMat);
      cap.position.y = 0.59;
      g.add(cap);

      const collar = new THREE.Mesh(cupRingGeo, brushedGoldMat);
      collar.rotation.x = Math.PI / 2;
      collar.position.y = 0.52;
      g.add(collar);

      g.scale.setScalar(scale);
      return g;
    };

    const cups: CupItem[] = [];
    const cupConfigs = [
      { pos: [-0.45, 0.35, 0.35], rot: [0.35, 0.2, -0.28], scale: 1.08, phase: 0, speed: 0.85 },
      { pos: [1.15, -0.65, 0.65], rot: [-0.25, -0.35, 0.42], scale: 0.78, phase: 2.1, speed: 1.0 },
      { pos: [-1.35, -0.85, -0.45], rot: [0.48, 0.3, 0.32], scale: 0.65, phase: 4.0, speed: 0.75 },
    ];

    cupConfigs.forEach((cfg) => {
      const cup = createCuppingDome(cfg.scale);
      cup.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      cup.rotation.set(cfg.rot[0], cfg.rot[1], cfg.rot[2]);
      sculpture.add(cup);
      cups.push({
        group: cup,
        baseY: cfg.pos[1],
        phase: cfg.phase,
        speed: cfg.speed,
      });
    });

    // Helper: Create Polished Gold Acupuncture Needle with Spiral Coiled Handle
    const needleShaftGeo = new THREE.CylinderGeometry(0.007, 0.002, 1.35, 14);
    const needleHandleGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.42, 16);
    const needleSpiralGeo = new THREE.TorusGeometry(0.024, 0.0045, 10, 24);
    const needleTipCapGeo = new THREE.SphereGeometry(0.022, 16, 16);

    const createNeedle = (scale = 1): THREE.Group => {
      const g = new THREE.Group();

      const shaft = new THREE.Mesh(needleShaftGeo, liquidGoldMat);
      shaft.position.y = -0.22;
      g.add(shaft);

      const handle = new THREE.Mesh(needleHandleGeo, brushedGoldMat);
      handle.position.y = 0.66;
      g.add(handle);

      for (let i = 0; i < 8; i++) {
        const spiral = new THREE.Mesh(needleSpiralGeo, liquidGoldMat);
        spiral.rotation.x = Math.PI / 2;
        spiral.position.y = 0.49 + i * 0.048;
        g.add(spiral);
      }

      const endCap = new THREE.Mesh(needleTipCapGeo, liquidGoldMat);
      endCap.position.y = 0.88;
      g.add(endCap);

      g.scale.setScalar(scale);
      return g;
    };

    const needlesGroup = new THREE.Group();
    sculpture.add(needlesGroup);

    const needleConfigs = [
      { pos: [1.35, 1.05, 0.25], rot: [0.25, 0.1, -0.78], scale: 0.92 },
      { pos: [-1.55, 0.95, 0.4], rot: [-0.2, 0.3, 0.85], scale: 0.85 },
      { pos: [0.35, 1.55, -0.4], rot: [0.55, -0.2, -0.32], scale: 0.82 },
      { pos: [1.65, 0.15, -0.6], rot: [-0.35, 0.4, -1.15], scale: 0.78 },
      { pos: [-0.35, -1.5, 0.55], rot: [0.4, -0.15, 0.52], scale: 0.86 },
    ];

    needleConfigs.forEach((cfg) => {
      const needle = createNeedle(cfg.scale);
      needle.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      needle.rotation.set(cfg.rot[0], cfg.rot[1], cfg.rot[2]);
      needlesGroup.add(needle);
    });

    // Ultra-Thin Luminous Meridian Arcs & Traveling Acupoints
    const arcConfigs = [
      { radius: 2.15, tube: 0.011, mat: goldArcMat, rot: [0.52, 0.38, 0.15] },
      { radius: 1.78, tube: 0.009, mat: emeraldArcMat, rot: [-0.68, 0.75, 0.35] },
      { radius: 2.45, tube: 0.008, mat: goldArcMat, rot: [1.08, -0.35, 0.48] },
    ];

    const arcs: THREE.Mesh[] = [];
    const acupoints: AcupointOrbit[] = [];
    const acupointGeo = new THREE.SphereGeometry(0.055, 24, 24);

    arcConfigs.forEach((cfg, idx) => {
      const arc = new THREE.Mesh(
        new THREE.TorusGeometry(cfg.radius, cfg.tube, 16, 160),
        cfg.mat
      );
      arc.rotation.set(cfg.rot[0], cfg.rot[1], cfg.rot[2]);
      sculpture.add(arc);
      arcs.push(arc);

      // Add 2 glowing acupoints per meridian arc
      for (let j = 0; j < 2; j++) {
        const pt = new THREE.Mesh(acupointGeo, acupointMat);
        sculpture.add(pt);
        acupoints.push({
          mesh: pt,
          radius: cfg.radius,
          speed: (0.35 + idx * 0.12) * (j === 0 ? 1 : -0.85),
          offset: j * Math.PI + idx * 1.1,
          tiltX: cfg.rot[0],
          tiltY: cfg.rot[1],
          tiltZ: cfg.rot[2],
        });
      }
    });

    const target = { x: 0, y: 0, scroll: 0 };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      target.x = (e.clientX / window.innerWidth - 0.5) * 0.65;
      target.y = (e.clientY / window.innerHeight - 0.5) * 0.45;
    };

    const handleScroll = () => {
      target.scroll = window.scrollY * 0.0012;
    };

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 540;
      const h = container.clientHeight || 520;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    let rafId = 0;
    const clock = new THREE.Clock();
    const euler = new THREE.Euler();
    const posVec = new THREE.Vector3();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        cups.forEach((c) => {
          c.group.position.y =
            c.baseY + Math.sin(elapsed * c.speed + c.phase) * 0.12;
          c.group.rotation.y += 0.003;
        });

        needlesGroup.rotation.y = elapsed * 0.12;
        needlesGroup.rotation.z = Math.sin(elapsed * 0.35) * 0.06;

        arcs.forEach((arc, idx) => {
          arc.rotation.z += 0.0015 * (idx % 2 === 0 ? 1 : -1);
        });

        acupoints.forEach((ap) => {
          const angle = elapsed * ap.speed + ap.offset;
          posVec.set(
            Math.cos(angle) * ap.radius,
            Math.sin(angle) * ap.radius,
            0
          );
          euler.set(ap.tiltX, ap.tiltY, ap.tiltZ);
          posVec.applyEuler(euler);
          ap.mesh.position.copy(posVec);
        });

        sculpture.rotation.y +=
          (target.x + target.scroll - sculpture.rotation.y) * 0.045;
        sculpture.rotation.x += (-target.y - sculpture.rotation.x) * 0.045;
      }

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      sculpture.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
        }
      });
      liquidGoldMat.dispose();
      brushedGoldMat.dispose();
      glassCupMat.dispose();
      glassRimMat.dispose();
      goldArcMat.dispose();
      emeraldArcMat.dispose();
      acupointMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative h-[380px] w-full sm:h-[460px] lg:h-[520px]"
    />
  );
}
