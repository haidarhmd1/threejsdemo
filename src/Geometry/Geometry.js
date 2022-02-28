import * as THREE from "three";

export function Geometry(scene) {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);
}
