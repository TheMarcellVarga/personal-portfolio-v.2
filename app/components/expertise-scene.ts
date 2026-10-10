import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

export type ExpertiseKind = "ux" | "frontend" | "ai";
export interface ExpertiseScene {
  resize: (width: number, height: number) => void;
  setActive: (active: boolean) => void;
  setReducedMotion: (reduced: boolean) => void;
  setProgress: (progress: number) => void;
  dispose: () => void;
}

export function createExpertiseScene(
  canvas: HTMLCanvasElement,
  kind: ExpertiseKind,
  reducedMotion: boolean,
  onRender: () => void,
): ExpertiseScene {
  const context = canvas.getContext("webgl2", { alpha: true, antialias: true, powerPreference: "low-power" });
  if (!context) throw new Error("WebGL unavailable");
  const renderer = new THREE.WebGLRenderer({ canvas, context, alpha: true, antialias: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-3, 3, 1.5, -1.5, 0.1, 30);
  camera.position.set(0, 1.2, 8);
  camera.lookAt(0, 0, 0);
  scene.add(new THREE.HemisphereLight(0xfffaf0, 0xa9b9c3, 2.5));
  const key = new THREE.DirectionalLight(0xffffff, 4);
  key.position.set(-3, 5, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xffd7b6, 1.7);
  rim.position.set(4, 1, -2);
  scene.add(rim);

  const styles = getComputedStyle(canvas);
  const color = (token: string, fallback: string) => new THREE.Color(styles.getPropertyValue(token).trim() || fallback);
  const accentColor = color("--title-accent", "#b64a2b");
  const inkColor = color("--color-custom-blue", "#111b28");
  const paperColor = color("--page-background", "#f3ede5");
  const blueColor = color("--color-custom-teal", "#4ccfff");
  const clay = new THREE.MeshStandardMaterial({ color: accentColor, roughness: 0.34, metalness: 0.15 });
  const ink = new THREE.MeshStandardMaterial({ color: inkColor, roughness: 0.36, metalness: 0.22 });
  const cream = new THREE.MeshStandardMaterial({ color: paperColor, roughness: 0.5, metalness: 0.02 });
  const blue = new THREE.MeshStandardMaterial({ color: blueColor, roughness: 0.38, metalness: 0.1 });
  const root = new THREE.Group();
  scene.add(root);

  function box(parent: THREE.Group, w: number, h: number, d: number, material: THREE.Material, x = 0, y = 0, z = 0) {
    const mesh = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, Math.min(w, h, d) * 0.22), material);
    mesh.position.set(x, y, z);
    parent.add(mesh);
    return mesh;
  }

  const tiles: THREE.Group[] = [];
  const routes: THREE.Line[] = [];
  const bars: THREE.Mesh[] = [];
  let core: THREE.Mesh | undefined;
  let orbit: THREE.Mesh | undefined;
  let signal: THREE.Mesh | undefined;
  let backPanel: THREE.Mesh | undefined;
  let reviewMark: THREE.Group | undefined;
  let connection: THREE.Mesh<THREE.TubeGeometry> | undefined;

  if (kind === "ux") {
    for (let i = 0; i < 4; i++) {
      const tile = new THREE.Group();
      box(tile, 0.88, 0.65, 0.18, i === 0 ? ink : cream);
      box(tile, 0.14, 0.1, 0.035, clay, -0.25, 0.14, 0.11);
      box(tile, 0.44, 0.035, 0.025, i === 0 ? cream : ink, 0.05, 0.14, 0.11);
      box(tile, 0.55, 0.035, 0.025, blue, 0, -0.02, 0.11);
      box(tile, 0.35, 0.035, 0.025, i === 0 ? blue : ink, -0.1, -0.16, 0.11);
      tile.rotation.z = [0.04, -0.08, 0.06, -0.04][i];
      tiles.push(tile);
      root.add(tile);
    }
    for (let i = 0; i < 3; i++) {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(17 * 3), 3));
      const route = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: accentColor }));
      route.frustumCulled = false;
      routes.push(route);
      root.add(route);
    }
  } else if (kind === "frontend") {
    const back = box(root, 3.7, 1.85, 0.15, blue, -0.16, 0.15, -0.25);
    back.rotation.z = 0.08;
    backPanel = back;
    box(root, 3.7, 1.85, 0.16, cream);
    box(root, 0.65, 1.57, 0.035, ink, -1.4, 0, 0.11);
    for (let i = 0; i < 3; i++) box(root, 0.3, 0.045, 0.03, i === 0 ? clay : blue, -1.4, 0.5 - i * 0.22, 0.14);
    box(root, 1.05, 0.06, 0.035, ink, -0.4, 0.62, 0.12);
    box(root, 0.3, 0.12, 0.035, clay, 1.4, 0.62, 0.12);
    for (let i = 0; i < 3; i++) box(root, 2.35, 0.012, 0.02, blue, 0.35, -0.6 + i * 0.4, 0.105);
    for (let i = 0; i < 5; i++) {
      const bar = box(root, 0.28, 1, 0.16, i % 2 === 0 ? clay : ink, -0.56 + i * 0.44, 0, 0.2);
      bars.push(bar);
    }
  } else {
    const documents = new THREE.Group();
    documents.position.set(-1.6, 0, 0);
    const back = box(documents, 0.9, 1.08, 0.12, blue, -0.12, 0.09, -0.14);
    back.rotation.z = 0.1;
    box(documents, 0.9, 1.08, 0.12, cream);
    for (let i = 0; i < 4; i++) box(documents, i === 3 ? 0.32 : 0.55, 0.045, 0.025, i === 0 ? clay : ink, i === 3 ? -0.1 : 0, 0.3 - i * 0.19, 0.08);
    root.add(documents);
    core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.57, 0), clay);
    core.rotation.set(0.4, 0.2, 0.1);
    root.add(core);
    orbit = new THREE.Mesh(new THREE.TorusGeometry(0.83, 0.012, 6, 64), ink);
    orbit.rotation.set(0.4, 0.5, -0.2);
    root.add(orbit);
    const review = new THREE.Group();
    review.position.x = 1.6;
    box(review, 0.8, 0.8, 0.15, cream);
    box(review, 0.45, 0.035, 0.025, blue, 0, 0.18, 0.1);
    box(review, 0.45, 0.035, 0.025, blue, 0, -0.18, 0.1);
    const checkmark = new THREE.Group();
    const left = box(checkmark, 0.24, 0.055, 0.04, ink, -0.11, -0.06, 0.12);
    left.rotation.z = -0.72;
    const right = box(checkmark, 0.4, 0.055, 0.04, ink, 0.08, 0, 0.12);
    right.rotation.z = 0.78;
    reviewMark = checkmark;
    review.add(checkmark);
    root.add(review);
    const path = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.14, 0, 0), new THREE.Vector3(-0.6, -0.12, 0.2),
      new THREE.Vector3(0, -0.12, 0.3), new THREE.Vector3(0.8, -0.12, 0.2), new THREE.Vector3(1.16, 0, 0),
    ]);
    connection = new THREE.Mesh(new THREE.TubeGeometry(path, 32, 0.013, 6, false), ink);
    root.add(connection);
    signal = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 8), blue);
    root.add(signal);
  }

  let reduceMotion = reducedMotion;
  let progress = 0;
  let active = false;
  let frame: number | null = null;
  let reportedReady = false;
  let needsRender = true;
  let lastPaint = 0;
  let lastTick: number | null = null;
  let ambientSeconds = 0;

  // Scroll controls assembly; a small independent drift keeps each sculpture alive.
  function render() {
    if (renderer.getContext().isContextLost()) return;
    const phase = reduceMotion ? 1 : THREE.MathUtils.smoothstep(progress, 0.05, 0.85);
    const time = ambientSeconds;
    const drift = reduceMotion ? 0 : 1;
    const offset = kind === "ux" ? 0 : kind === "frontend" ? 1.7 : 3.2;
    root.position.y = Math.sin(time * 0.6 + offset) * 0.035 * drift;
    root.rotation.set(
      THREE.MathUtils.lerp(0.18, -0.08, phase) + Math.sin(time * 0.45 + offset) * 0.012 * drift,
      THREE.MathUtils.lerp(0.48, -0.16, phase) + Math.sin(time * 0.35 + offset) * 0.02 * drift,
      THREE.MathUtils.lerp(-0.09, -0.035, phase) + Math.sin(time * 0.5 + offset) * 0.007 * drift,
    );

    if (kind === "ux") {
      const loose = [[-1.65, 0], [-0.55, 0.65], [0.55, -0.65], [1.65, 0]];
      tiles.forEach((tile, i) => {
        tile.position.set(loose[i][0], loose[i][1] * (1 - phase) + Math.sin(time * 0.65 + i * 0.9) * 0.04 * drift, 0);
        tile.rotation.z = [0.22, -0.18, 0.16, -0.14][i] * (1 - phase);
      });
      routes.forEach((route, i) => {
        const start = tiles[i].position;
        const end = tiles[i + 1].position;
        const attribute = route.geometry.getAttribute("position");
        for (let j = 0; j <= 16; j++) {
          const t = j / 16;
          attribute.setXYZ(j, THREE.MathUtils.lerp(start.x, end.x, t), THREE.MathUtils.lerp(start.y, end.y, t), -0.12 + Math.sin(t * Math.PI) * 0.15);
        }
        attribute.needsUpdate = true;
      });
    } else if (kind === "frontend") {
      if (backPanel) {
        backPanel.position.set(-0.16 - (1 - phase) * 0.5, 0.15 + (1 - phase) * 0.4, -0.25 - (1 - phase) * 0.5);
        backPanel.rotation.z = 0.08 + (1 - phase) * 0.12;
      }
      const heights = [0.3, 0.47, 0.6, 0.82, 1.02];
      bars.forEach((bar, i) => {
        const growth = THREE.MathUtils.smoothstep(phase, i * 0.08, 0.65 + i * 0.08);
        bar.scale.y = THREE.MathUtils.lerp(0.06, heights[i], growth);
        bar.position.y = -0.59 + bar.scale.y / 2;
        bar.position.z = 0.2 + (1 - growth) * 0.25;
      });
    } else {
      if (core) {
        core.rotation.y = 0.2 + phase * Math.PI * 1.2 + time * 0.06 * drift;
        core.rotation.x = 0.4 + Math.sin(time * 0.4) * 0.03 * drift;
      }
      if (orbit) orbit.rotation.z = -0.2 + Math.sin(time * 0.3) * 0.04 * drift;
      if (connection) {
        const count = connection.geometry.index?.count ?? 0;
        connection.geometry.setDrawRange(0, Math.floor(count * phase / 6) * 6);
      }
      if (reviewMark) reviewMark.scale.setScalar(THREE.MathUtils.lerp(0.01, 1, THREE.MathUtils.smoothstep(phase, 0.6, 0.95)));
      if (signal) {
        signal.position.set(THREE.MathUtils.lerp(-1.14, 1.16, phase), -0.1, 0.27);
        signal.visible = phase < 0.95;
      }
    }
    renderer.render(scene, camera);
    if (!reportedReady) {
      reportedReady = true;
      onRender();
    }
  }

  // Ambient motion runs at 30fps only while visible; scroll updates can render sooner.
  const requestRender = () => {
    if (!active || frame !== null) return;
    frame = requestAnimationFrame((timestamp) => {
      frame = null;
      if (!active || renderer.getContext().isContextLost()) return;
      if (needsRender || timestamp - lastPaint >= 1000 / 30) {
        if (!reduceMotion && lastTick !== null) {
          ambientSeconds += Math.min((timestamp - lastTick) / 1000, 0.1);
        }
        lastTick = timestamp;
        lastPaint = timestamp;
        needsRender = false;
        render();
      }
      if (!reduceMotion) requestRender();
    });
  };
  const invalidate = () => {
    needsRender = true;
    requestRender();
  };
  const contextRestored = () => {
    reportedReady = false;
    lastTick = null;
    invalidate();
  };
  canvas.addEventListener("webglcontextrestored", contextRestored);

  return {
    resize(width, height) {
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      const aspect = width / height;
      const spanY = Math.max(2.8, 5 / aspect);
      camera.left = -spanY * aspect / 2;
      camera.right = spanY * aspect / 2;
      camera.top = spanY / 2;
      camera.bottom = -spanY / 2;
      camera.updateProjectionMatrix();
      invalidate();
    },
    setActive(value) {
      if (active !== value) lastTick = null;
      active = value;
      if (!active && frame !== null) {
        cancelAnimationFrame(frame);
        frame = null;
      }
      invalidate();
    },
    setReducedMotion(value) {
      reduceMotion = value;
      lastTick = null;
      invalidate();
    },
    setProgress(value) {
      progress = THREE.MathUtils.clamp(value, 0, 1);
      if (!reduceMotion) invalidate();
    },
    dispose() {
      if (frame !== null) cancelAnimationFrame(frame);
      canvas.removeEventListener("webglcontextrestored", contextRestored);
      const geometries = new Set<THREE.BufferGeometry>();
      const materials = new Set<THREE.Material>([clay, ink, cream, blue]);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line) {
          geometries.add(object.geometry);
          const list = Array.isArray(object.material) ? object.material : [object.material];
          list.forEach(material => materials.add(material));
        }
      });
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
      renderer.dispose();
      renderer.forceContextLoss();
    },
  };
}
