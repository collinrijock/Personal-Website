import React from "react";
import { useEffect } from "react";
import "./App.scss";

import logo from "./img/logo.svg";
import arrow from "./img/Arrow 1.svg";
import header from "./img/header.svg";
import techicons from "./img/frontendtech.svg"
import phones from "./img/phones.png"
import pipes from "./img/pipes.png"

import * as THREE from "three";
import * as noise from "./perlin.js";

function App() {
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    // default bg canvas color //
    renderer.setClearColor(0xffffff);
    //  use device aspect ratio //
    renderer.setPixelRatio(window.devicePixelRatio);
    // set size of canvas within window //
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      4,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const sphere_geometry = new THREE.SphereGeometry(1, 100, 100);
    const material = new THREE.MeshNormalMaterial();

    const sphere = new THREE.Mesh(sphere_geometry, material);
    scene.add(sphere);

    const update = function () {
      // change '0.003' for more aggressive animation
      const time = performance.now() * 0.0005;
      //console.log(time)

      //go through vertices here and reposition them

      // change 'k' value for more spikes
      const k = 3;
      for (let i = 0; i < sphere_geometry.vertices.length; i++) {
        const p = sphere_geometry.vertices[i];
        p.normalize().multiplyScalar(
          1 + 0.3 * noise.perlin3(p.x * k + time, p.y * k, p.z * k)
        );
      }
      sphere.geometry.computeVertexNormals();
      sphere_geometry.normalsNeedUpdate = true;
      sphere_geometry.verticesNeedUpdate = true;
    };

    function animate() {
      update();
      /* render scene and camera */
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  });

  return (
    <div className="App">
      <canvas id="canvas" />
      <div id="filter-layer"></div>
      <nav>
        <div style={{'flexDirection' : 'row', width: '100%', display: 'flex'}}>
          <img id="logo" src={logo}></img>
          <a href="mailto:collinrijock@gmail.com" id="contact">Contact<img src={arrow} /></a>
        </div>
        
        <div id="buttons-cont">
          <a href="https://github.com/collinrijock" id="github">Github</a>
          <a href="https://linkedin.com/in/collin-rijock/" id="linkedin">LinkedIn</a>
          <a href="./resume.pdf" target="blank" id="resume">Resume</a>
          <a href="mailto:collinrijock@gmail.com" id="contact">Contact<img src={arrow} /></a>
        </div>
      </nav>
      <div id="content">
        <div id="card-cont">
          <div id="frontend">
            <img id="header" src={header}></img>
            <div id="main">
              <h1>Making<br />
                Modern<br />
                Apps.</h1>
              <img src={techicons}></img>
              <img id="phones" src={phones}></img>
            </div>
          </div>
          <div id="ml">
            <h1>Deep Learning <br />
              Engineering <br />
              Research</h1>
            <img src={pipes}></img>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
