import "../style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gridHelper, onWindowResize, axesHelper } from "./utils";
import { Cube, Plane } from "./Geometry";

let scene: THREE.Scene, renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera, controls: OrbitControls;
const cube = new Cube();
const plane = new Plane();
const plane_2 = new Plane();

/* INIT */
export function init(): any {
  // create a scene with a webGL renderer and a camera
  scene = new THREE.Scene();

  // create renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
  
  //Create a DirectionalLight and turn on shadows for the light
  const light = new THREE.DirectionalLight( 0xffffff, 5 );
  light.position.set( 2, 10, -25 ); //default; light shining from top
  light.castShadow = true; // default false
  scene.add( light );

  document.body.appendChild(renderer.domElement);

  // create a camera
  camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    1,
    3000
  );
  camera.position.set(0, 2.5, 10);

  // Orbit controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  gridHelper(scene);
  axesHelper(scene);

  cube.addCube({ scene });
  cube.getCube().position.set(0, 1, 0);
  plane.addPlane({ scene });
  plane_2.addPlane({ scene });
  plane_2.getPlane().position.set(0, 0, 15);
}
/* END INIT */

// add the "game loop" function -> should be a recursive function hold by requestAnimationFrame
export function animate(): any {
  requestAnimationFrame(animate);
  
  // cube.getCube().rotation.x += 0.01;

  // plane.getPlane().position.z += 0.01
  // if(plane.getPlane().position.z - plane_2.getPlane().position.z >= -10) {
  //   plane.getPlane().remove()
  // }
  renderer.render(scene, camera);
}

window.addEventListener("resize", () => onWindowResize(camera, renderer));
