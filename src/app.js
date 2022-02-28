import "../style.css";

import * as THREE from "three";

// Set consts
const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;

/* INIT */
// create a scene with a webGL renderer and a camera
const scene = new THREE.Scene();

// create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
document.body.appendChild(renderer.domElement);

// create a camera
const camera = new THREE.PerspectiveCamera(
  55,
  SCREEN_WIDTH / SCREEN_HEIGHT,
  1,
  3000
);
camera.position.set(0, 2.5, 10);

// add a grid helper to the scene
const helper = new THREE.GridHelper();
scene.add(helper);

// create an object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// create function to resize the canvas whenever the screen changes
window.addEventListener("resize", onWindowResize);
function onWindowResize() {
  camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
  camera.updateProjectionMatrix();
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
}

/* END INIT */

// add the "game loop" function -> should be a recursive function hold by requestAnimationFrame
function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

// Call the animate function
animate();
