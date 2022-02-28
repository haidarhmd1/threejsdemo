import * as THREE from "three";

// create function to resize the canvas whenever the screen changes
export function onWindowResize(camera, renderer) {
  console.log(1);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// add a grid helper to the scene
export function gridHelper(scene) {
  const helper = new THREE.GridHelper();
  scene.add(helper);

  const axesHelper = new THREE.AxesHelper(5);
  axesHelper.setColors("red", "blue", "green"); //x, y ,z
  scene.add(axesHelper);
}
