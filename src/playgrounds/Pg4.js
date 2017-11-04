import React, { Component } from 'react';
import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols'

class Playground extends Component {

  componentDidMount() {
    myScript()
  }



  render() {
    return (
      <div id="playground-04">
      </div>
    );
  }
}

export default Playground;



const myScript = () => {
  var scene = new THREE.Scene();

  scene.background = new THREE.Color(0xf0f0f0);

  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  var renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  let pg4 = document.getElementById('playground-04')
  pg4.appendChild(renderer.domElement);


  // light
  // var light = new THREE.DirectionalLight(0xffffff, 1, 100);
  var light = new THREE.PointLight(0xffffff, 1);
  light.position.set(0, 0, 1);
  light.castShadow = true;
  scene.add(light);

  let envLight = new THREE.AmbientLight(0xf0f0f0,1)
  envLight.position.set(0,10,0)
  scene.add(envLight)


  //Create a helper for the shadow camera (optional)
  var helper = new THREE.CameraHelper(light.shadow.camera);
  scene.add(helper);


  var geometry = new THREE.BoxGeometry(1, 1, 1);
  geometry = new THREE.SphereGeometry(1,30,30)
  var material = new THREE.MeshStandardMaterial({ color: 0x333366, flatShading: false });
  var cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true; //default is false
  scene.add(cube);


  let planeGeometry = new THREE.PlaneGeometry(10,10,10,10)
  let planeMaterial = new THREE.MeshStandardMaterial({ color: 0x333366});
  planeGeometry.translate(0,0,-1)
  let plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.receiveShadow = true;
  // scene.add(plane)
  var cube2 = new THREE.Mesh(geometry, material);
  scene.add(cube2)
  cube2.position.x = 10


  var controls = new OrbitControls(camera, renderer.domElement)
  controls.autoRotate = true;
  controls.enableDamping = true;



  camera.position.z = 4;

  var animate = function (t) {
    // console.log(Math.sin(t/1000)*10)
    // cube.rotation.x += 0.1;
    // cube.rotation.y += 0.1;

    // light.position.x = -Math.cos(t ** 1 / 1000) * 5
    // light.position.z = Math.sin(t ** 1 / 1000) * 20

    cube.position.x = Math.cos(t ** 1 / 500) * 2 - 5
    cube.position.y = Math.sin(t ** 1 / 500) * 2

    cube2.position.x = Math.cos(t ** 1 / 500) * 5 + 5
    cube2.position.y = Math.sin(t ** 1 / 500) * 5

    renderer.render(scene, camera);

    requestAnimationFrame(animate)

  };

  // cube.rotation.x += 1;
  // cube.rotation.y += 1;
  light.position.x = 10
  renderer.render(scene, camera);
  animate();
}


const example = () => {
  var scene = new THREE.Scene();

  //Create a WebGLRenderer and turn on shadows in the renderer
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

  let pg4 = document.getElementById('playground-04')
  pg4.appendChild(renderer.domElement);


  //Create a PointLight and turn on shadows for the light
  var light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(0, 10, 0);
  light.castShadow = true;            // default false
  scene.add(light);

  //Set up shadow properties for the light
  light.shadow.mapSize.width = 512;  // default
  light.shadow.mapSize.height = 512; // default
  light.shadow.camera.near = 0.5;       // default
  light.shadow.camera.far = 500      // default

  //Create a sphere that cast shadows (but does not receive them)
  var sphereGeometry = new THREE.SphereBufferGeometry(5, 32, 32);
  var sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.castShadow = true; //default is false
  sphere.receiveShadow = false; //default
  scene.add(sphere);

  //Create a plane that receives shadows (but does not cast them)
  var planeGeometry = new THREE.PlaneBufferGeometry(20, 20, 32, 32);
  var planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;
  scene.add(plane);

  //Create a helper for the shadow camera (optional)
  var helper = new THREE.CameraHelper(light.shadow.camera);
  scene.add(helper);



  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  // var camera = new THREE.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 1, 1000);
  scene.add(camera);


  //Create a helper for the shadow camera (optional)
  var helper = new THREE.CameraHelper(light.shadow.camera);
  scene.add(helper);


  camera.position.z = 4;
  var controls = new OrbitControls(camera, renderer.domElement)


  var animate = function (t) {
    console.log('x')
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.1;
    // cube.rotation.y += 0.1;

    light.translateX =
    renderer.render(scene, camera);
  };

  requestAnimationFrame(animate);

}
