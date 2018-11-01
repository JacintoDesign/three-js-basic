"use strict";

import { Component } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jacinto-design-threejs-basic';
}

var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.2, 3000);

var scene = new THREE.Scene();

var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light1);

var geometry = new THREE.TorusKnotGeometry(100, 30, 100, 100);
var material = new THREE.MeshLambertMaterial({color: 0xF33333});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, -2000);

scene.add(mesh);

requestAnimationFrame(render);

function render() {
  mesh.rotation.x += 0.05;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

renderer.render(scene, camera);