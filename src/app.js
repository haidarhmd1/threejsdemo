import "../style.css";

import * as THREE from "three";

/* INIT */
// create a scene with a webGL renderer and a camera
const scene = new THREE.Scene();

// create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// create a camera
const camera = new THREE.PerspectiveCamera(
  55,
  window.innerWidth / window.innerHeight,
  1,
  3000
);
camera.position.set(0, 2.5, 10);

// add a grid helper to the scene
const helper = new THREE.GridHelper();
scene.add(helper);

const axesHelper = new THREE.AxesHelper(5);
axesHelper.setColors("red", "blue", "green"); //x, y ,z
scene.add(axesHelper);
/* END INIT */

/* Add objects init */
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
/* END Add objects init */

// add the "game loop" function -> should be a recursive function hold by requestAnimationFrame
function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

// create function to resize the canvas whenever the screen changes
window.addEventListener("resize", onWindowResize);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Call the animate function
animate();
