import * as THREE from "three";

// create function to resize the canvas whenever the screen changes
export function onWindowResize(camera: { aspect: number; updateProjectionMatrix: () => void; }, renderer: { setSize: (arg0: number, arg1: number) => void; }) {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// add a grid helper to the scene
export function gridHelper(scene: { add: (arg0: THREE.GridHelper) => void; }) {
  const helper = new THREE.GridHelper();
  scene.add(helper);
}

// add a axes helper to the scene
export function axesHelper(scene: { add: (arg0: THREE.AxesHelper) => void; }) {
  const axesHelper = new THREE.AxesHelper(5);
  axesHelper.setColors("red", "blue", "green"); //x, y ,z
  scene.add(axesHelper);
}
