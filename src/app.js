import "../style.css";
import * as THREE from "three";
import { gridHelper, onWindowResize } from "./utils";
import { Geometry } from "./Geometry";

let scene, renderer, camera;

/* INIT */
export function init() {
  // create a scene with a webGL renderer and a camera
  scene = new THREE.Scene();

  // create renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // create a camera
  camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    1,
    3000
  );
  camera.position.set(0, 2.5, 10);

  gridHelper(scene);
  Geometry(scene);
}
/* END INIT */

// add the "game loop" function -> should be a recursive function hold by requestAnimationFrame
export function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

window.addEventListener("resize", () => onWindowResize(camera, renderer));
