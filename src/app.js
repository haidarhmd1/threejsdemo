import "../style.css";

import * as THREE from "three";

// Set consts
const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const TWO_PI = Math.PI / 2;

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
helper.rotation.x = TWO_PI;
scene.add(helper);

// create an object
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
// const cube = new THREE.Mesh(geometry, material);

// scene.add(cube);

const dir = new THREE.Vector3(1, 2, 0);

//normalize the direction vector (convert to vector of length 1)
dir.normalize();

const origin = new THREE.Vector3(0, 0, 0);
const length = 1;
const hex = 0xffff00;

const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
scene.add(arrowHelper);

// create function to resize the canvas whenever the screen changes
window.addEventListener("resize", onWindowResize);
function onWindowResize() {
  camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
  camera.updateProjectionMatrix();
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
}

// add the "game loop" function -> should be a recursive function hold by requestAnimationFrame
function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

// Call the animate function
animate();
