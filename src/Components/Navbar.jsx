import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function Navbar() {
  const threeRef = useRef(null);
  let renderer, scene, camera, cylinder, controls;

  useEffect(() => {
    // GSAP Animations
    let tl = gsap.timeline();
    tl.to(".name", { y: -82, duration: 1, ease: "power4" })
      .to(".menu", { y: -160, duration: 1, ease: "power4" })

      .to(".title", { y: -20, duration: 1, opacity: 1, ease: "power4" })
      .to(".btn", { duration: 1, opacity: 1, ease: "power4" });

    // Three.js Setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    if (threeRef.current) threeRef.current.appendChild(renderer.domElement);

    // Create Cylinder Geometry
    const geometry = new THREE.CylinderGeometry(1.7, 1.7, 3, 60, 60, true);

    // Apply Placeholder Material
    const material = new THREE.MeshStandardMaterial({
      color: 0x888888,
      side: THREE.DoubleSide,
    });

    cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);

    // Load Texture Asynchronously
    const loader = new THREE.TextureLoader();
    loader.load("Untitled design (2).png", (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.repeat.set(1 / 0.5, 1);

      cylinder.material.map = texture;
      cylinder.material.needsUpdate = true;
    });

    cylinder.position.y = 0.3;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 10);
    pointLight.position.set(2, 2, 5);
    scene.add(pointLight);

    // Orbit Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (cylinder) cylinder.rotation.y += 0.004;
      renderer.render(scene, camera);
    };
    animate();

    // Resize Handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      if (cylinder) {
        cylinder.geometry.dispose();
        cylinder.material.dispose();
      }
      if (threeRef.current) threeRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="w-screen bg-black h-screen relative">
      <div
        ref={threeRef}
        className="absolute top-10 left-0 w-full h-full z-0 cylinder"
      ></div>

      <div className="z-10 flex justify-between items-center p-10 overflow-hidden">
        <h1 className="text-3xl text-white font-[one] name relative top-20">
          Jayraj Araj
        </h1>
        <div className="flex items-center gap-2 pr-7">
          <span className="h-3 w-3 rounded-md bg-white block mt-1"></span>
          <h2 className="text-2xl text-white font-[one] menu relative top-40">
            Menu
          </h2>
        </div>
      </div>

      <div className="py-10 relative top-[63%] z-10 flex justify-center items-center flex-col">
        <h1 className="capitalize text-3xl text-white font-[one] text-center title mt-7 opacity-0">
          Hii I am Jayraj, Great to have you here
        </h1>
        <button className="bg-white font-[one] text-black rounded-xl p-2 btn opacity-0">
          Let's Get Connected
        </button>
      </div>
    </div>
  );
}

export default Navbar;
