import * as THREE from "three";

export class Cube {
  type = 'Cube';

  geometry: THREE.BoxGeometry;
  material: THREE.MeshBasicMaterial;
  cube: any

  constructor() { };

  addCube({ scene }: { scene: { add: (arg0: any) => void; };}): void {
    this.geometry = new THREE.BoxGeometry();
    this.material = new THREE.MeshPhongMaterial({ color: 0x00ffff });
    this.cube = new THREE.Mesh(this.geometry, this.material);
    scene.add(this.cube);
  }

  getCube(): any {
    return this.cube;
  }
}

export class Plane {
  type = "Plane"

  geometry: THREE.PlaneGeometry;
  material: THREE.MeshBasicMaterial;
  plane: any;

  constructor() { };

  addPlane({ scene }: { scene: { add: (arg0: any) => void; };}): void {
    this.geometry = new THREE.PlaneGeometry(10,10);
    this.material = new THREE.MeshPhongMaterial( {color: 0x0ff000, side: THREE.DoubleSide} );
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.plane.rotation.x = Math.PI / 2;
    scene.add(this.plane);
  }

  getPlane(): any {
    return this.plane;
  }

}