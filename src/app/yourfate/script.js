import * as THREE from "three"

/**
 * Base
 */

// Canvas
if (typeof window !== "undefined" && typeof document !== "undefined") {
  const canvas = document.querySelector("canvas.webgl")
  const scroller = [...document.querySelectorAll(".slider__scroll")]
  const scrollerEncod = [...document.querySelectorAll(".encoded .slide")]

  function genString(length) {
    let result = ""
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%!&@"
    const charactersLength = characters.length
    let counter = 0
    while (counter < length) {
      if (Math.random() > 0.95) {
        result +=
          "<strong>" +
          characters.charAt(Math.floor(Math.random() * charactersLength)) +
          "</strong>"
      } else {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength),
        )
      }
      result += " "
      counter += 1
    }
    return result
  }

  function genStringDom() {
    scrollerEncod.forEach((slide, index) => {
      let string = genString(1200)
      slide.innerHTML = string
    })
  }

  //   console.log(scrollerEncod)

  // Scene
  const scene = new THREE.Scene()

  /**
   * Textures
   */

  /**
   * Test mesh
   */

  function range(start, end) {
    let r = Math.random()
    return r * (end - start) + start
  }

  let geometry = new THREE.BufferGeometry()
  let number = 3000
  let position = new Float32Array(number * 3)
  let sizesPart = new Float32Array(number)
  let velocity = new Float32Array(number)
  let distance = new Float32Array(number)

  for (let i = 0; i < number; i++) {
    let i3 = i * 3
    position[i3] = 0
    position[i3 + 1] = Math.random() - 0.5 + 0.5 * (Math.random() - 0.5)

    position[i3 + 2] = 0

    sizesPart[i] = range(1, 3)
    velocity[i] = range(0.1, 1)
    distance[i] = range(0.1, 1)
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(position, 3))
  geometry.setAttribute("aSize", new THREE.BufferAttribute(sizesPart, 1))
  geometry.setAttribute("aVelocity", new THREE.BufferAttribute(velocity, 1))
  geometry.setAttribute("aDistance", new THREE.BufferAttribute(distance, 1))

  //   console.log(geometry)

  // Material
  const material = new THREE.ShaderMaterial({
    vertexShader: `uniform float time;
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform sampler2D texture1;
    attribute float aDistance;
    attribute float aVelocity;
    attribute float aSize;
    varying float traveled;
    float PI = 3.141592653589793238;
    void main(){
        vUv = uv;
        vec3 pos = position;
        pos.x = mod(.2*aVelocity*time, aDistance);
    
        traveled = pos.x;
        pos.x*=.3;
    
        vec4 mvPosition = modelViewMatrix * vec4(pos,1.);
        gl_PointSize = aSize * (1.8 / - mvPosition.z);
        gl_Position = projectionMatrix * mvPosition; 
    }
    `,
    fragmentShader: `uniform float time;
    uniform float progress;
    uniform sampler2D texture1;
    uniform vec4 resolution;
    varying vec2 vUv;
    varying vec3 vPosition;
    varying float traveled;
    float PI = 3.141592653589793238;
    void main(){
        if(length(gl_PointCoord.xy - vec2(.5)) > .3) discard;
        float alpha = 1. - traveled;
    gl_FragColor = vec4(1.,1.,1.,.4*alpha);
    }`,
    side: THREE.DoubleSide,
    transparent: true,
    blending: THREE.AdditiveBlending,

    uniforms: {
      time: {value: 0},
      resolution: {value: new THREE.Vector4()},
    },
  })

  const points = new THREE.Points(geometry, material)
  scene.add(points)

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = 440

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100,
  )
  camera.position.set(0, 0, 0.3)
  scene.add(camera)

  // Controls
  //   const controls = new OrbitControls(camera, canvas)
  //   controls.enableDamping = true

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
  })
  renderer.setSize(sizes.width, 440)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  let tempPos
  let curPos
  function checkIfActive() {
    let half = window.innerWidth // a adapter avec le canvas (-250px)
    // console.log(half);
    let slideWidth = 300 //depend on affiche size
    let slideGap = 200 //gap flex
    let whole = slideWidth + slideGap

    tempPos = xAxis + whole
    curPos = (tempPos % whole) + 50

    // console.log(tempPos);

    var center = true
    // var center = !(curPos > slideWidth);
    // if(curPos>tempPos){ center = false}
    // center = true

    // console.log(curPos);
    // if(curPos >400 || curPos < 200){
    //     center=true
    // }else{
    //     center = false
    // }
    return center
  }

  let separator = document.getElementsByClassName("separator")
  /**
   * Animate
   */
  const clock = new THREE.Clock()
  let xAxis = -2 * (300 + 200)
  let frame = 0
  const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update material
    material.uniforms.time.value = elapsedTime

    frame += 1
    if (frame % 30 == 0) {
      genStringDom()
    }

    if (checkIfActive()) {
      canvas.style.opacity = 1
    } else {
      canvas.style.opacity = 0
    }

    // Update controls
    // controls.update()
    xAxis += 0.5
    if (xAxis > 0) {
      xAxis = -2 * (300 + 200)
    }
    scroller.forEach((scroller, index) => {
      scroller.style.transform = `translateX(${xAxis}px`
    })
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
  }

  tick()
}
