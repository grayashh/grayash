import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import SplineLoader from "@splinetool/loader";
import { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      5,
      100000
    );
    camera.position.set(511.65, -363.87, 1020.29);
    camera.quaternion.setFromEuler(new THREE.Euler(0.36, 0.44, -0.16));

    // scene
    const scene = new THREE.Scene();

    // spline scene
    const loader = new SplineLoader();
    loader.load(
      "https://prod.spline.design/3ioTEE5tnYDlyNJV/scene.splinecode",
      (splineScene) => {
        scene.add(splineScene);
      }
    );

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    document.body.appendChild(renderer.domElement);

    // scene settings
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    scene.background = new THREE.Color("#ffe8dc");
    renderer.setClearAlpha(0);

    // orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.125;

    window.addEventListener("resize", onWindowResize);
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate(time) {
      controls.update();
      renderer.render(scene, camera);
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current?.appendChild(renderer.domElement);
    return () => canvasRef.current?.removeChild(renderer.domElement);
  }, []);

  return <div ref={canvasRef} />;
};

export default Background;
