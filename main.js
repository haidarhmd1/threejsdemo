import "./style.css";

import * as THREE from "three";

// create a scene with a webGL renderer and a camera
const scene = new THREE.Scene();

// create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// create a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 200);

// add a grid helper to the scene
const helper = new THREE.GridHelper();
helper.rotation.x = Math.PI / 2;
scene.add(helper);

// create an object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

// create function to resize the canvas whenever the screen changes
window.addEventListener("resize", onWindowResize);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// add the "game loop" function -> should be a recursive function hold by requestAnimationFrame
function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

// Call the animate function
animate();
