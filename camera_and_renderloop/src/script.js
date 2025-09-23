import * as THREE from 'three';

// initialize the scene
const scene = new THREE.Scene()

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)
scene.add(cubeMesh)

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  75, // fov: camera frustum vertical field of view, usually 30-80
  window.innerWidth / window.innerHeight, // aspect
  0.1, // near: the point where the camera starts to render objects
  30 // far: the point where the camera stops rendering objects
  )
camera.position.z = 5

// initialize the renderer
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)