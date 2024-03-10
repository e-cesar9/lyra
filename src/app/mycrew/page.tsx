"use client"
import React from "react"
import Sidebar from "../sideBar"
import Image from "next/image"
import "./style.css"
import PageTransition from "@/src/utils/effect/PageTransition"
import * as THREE from "three"

const TeamPage = ({}) => {
  const [isActive, setIsActive] = React.useState(false)
  const [isActive1, setIsActive1] = React.useState(false)
  const [isActive2, setIsActive2] = React.useState(false)
  const [isActive3, setIsActive3] = React.useState(false)
  const [isActive4, setIsActive4] = React.useState(false)
  const [isActive5, setIsActive5] = React.useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }
  const handleClick1 = () => {
    setIsActive1(!isActive1)
  }
  const handleClick2 = () => {
    setIsActive2(!isActive2)
  }
  const handleClick3 = () => {
    setIsActive3(!isActive3)
  }
  const handleClick4 = () => {
    setIsActive4(!isActive4)
  }
  const handleClick5 = () => {
    setIsActive5(!isActive5)
  }

  React.useLayoutEffect(() => {
    const canvas = document.querySelector("canvas.webglLyra")

    let scene = new THREE.Scene()

    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    camera.position.z = 8

    const vertexShader = `
varying vec2 vUv;
uniform float uTime;

void main() {
  vUv = uv;

  vec3 transformed = position;
  transformed.z += cos(position.z + position.x + uTime*.5);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}`
    const fragmentShader = `varying vec2 vUv;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
  float time = uTime;

  vec2 uv = vUv;
  vec2 repeat = vec2(6.0, 12.0);
  uv.x += cos(uv.y + time*0.1) * 0.15;

  uv = fract(uv * repeat + vec2(0.0, time));
  
  vec4 color = texture2D(uTexture, uv);
  
  gl_FragColor = color;
}`

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    })
    renderer.setSize(1400, 1200)

    // document.body.appendChild( renderer.domElement );

    let forme = new THREE.Group()
    let geometry = new THREE.TorusGeometry(3, 1, 100, 100)

    const texture = new THREE.TextureLoader().load(
      "./lyrashade.png",
      (texture) => {
        texture.minFilter = THREE.NearestFilter
      },
    )

    let material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: {value: 0},
        uTexture: {value: texture},
      },
      transparent: true,
      // side: THREE.DoubleSide,
    })

    forme.add(new THREE.Mesh(geometry, material))
    scene.add(forme)

    camera.position.z = 8

    let clock = new THREE.Clock()

    function render() {
      material.uniforms.uTime.value = clock.getElapsedTime()

      renderer.render(scene, camera)
    }

    function animate() {
      requestAnimationFrame(animate)
      forme.rotation.x = Math.PI * -0.25
      // forme.rotation.y += 0.005;
      render()
    }

    animate()
  })

  return (
    <>
      <Sidebar />
      <div className="w-full h-full overflow-y-scroll overflow-x-hidden main">
        <div className="mainTeam flex text-6xl max-[760px]:text-4xl items-center justify-between w-full relative h-screen overflow-x-hidden">
          <p className="ml-36 max-[760px]:ml-6 max-[760px]:pb-16 pb-20 leading-[80px] max-[760px]:leading-[64px]">
            From Tokyo to Los Angeles,
            <br />
            We come from all
            <br />
            over the world.
          </p>
        </div>
        <canvas className="webglLyra"></canvas>

        <div className="teamContent flex flex-row justify-center  max-[760px]:justify-end max-[760px]:ml-6 w-full relative h-screen -mt-16">
          <div className="team__brand min-[1550px]:-ml-16">
            <span className="team__title">Brand Director</span>
            <Image
              src="/vicki-final1.jpg"
              className="team__picture"
              alt="Brand logo from Lyra Haruto"
              width={600}
              height={800}
              priority={true}
            />
            <span>1</span>
          </div>
          <div className="w-1/3 flex flex-col justify-end pl-3 ml-[-3rem] team__text">
            <p className="text-5xl mb-9 leading-[4rem] team__name">
              Lyra <br /> Haruto
            </p>
            <span className="border w-[100px] h-[100px] rounded-full mb-4 btnClick">
              <button className="w-full h-full p-9 " onClick={handleClick}>
                {" "}
                <div className={`plusminus ${isActive ? "active" : ""}`}></div>
              </button>
            </span>

            <p
              className={`${
                isActive ? "opacity-100 ml-20" : "opacity-0 ml-4"
              } w-30 team__bio  pb-4`}
            >
              Optio Urna s.d.a Sit-mi in v nisi-nativo AC minori
              hectorem/impiorum. Firmissime eius Axioma, Non mus usus urgeant me
              d AB Probitas sed Aut continue modo omnis. Eum nobilis eos
              Facundla, Risus Tributa, Fuga Arcui, CRAS, VERO, Quos, Publicarum,
              InduCcre... Sed quis ut potens adolescentulus tantae proditorem
              est facilis ornare clari charitativum laborum mirabile militantes
              qui leo nam praesentiam. Inaugurationem qui eventum ut
              praefixionem mus litterarum Minim eaque te occiditur oppressor
              facultates per praetensionis nisl dui urna.
            </p>
          </div>
        </div>

        <div className="teamContent flex flex-row justify-end pr-40 max-[760px]:justify-end mt-48 max-[1080px]:mt-16 max-[1080px]:pr-6 w-full relative h-screen">
          <div className="w-1/3 flex flex-col justify-end items-end team__text_right pr-3 mr-[-3rem] z-10">
            <p className="text-5xl mb-9 leading-[4rem] team__name text-right ">
              Lyra <br /> Haruto
            </p>
            <span className="border w-[100px] h-[100px] rounded-full mb-4 btnClick">
              <button className="w-full h-full p-9 " onClick={handleClick1}>
                {" "}
                <div className={`plusminus ${isActive1 ? "active" : ""}`}></div>
              </button>
            </span>

            <p
              className={`${
                isActive1 ? "opacity-100 mr-20" : "opacity-0 mr-4"
              } w-30 team__bio  pb-4 text-right  max-[760px]:mr-0`}
            >
              Optio Urna s.d.a Sit-mi in v nisi-nativo AC minori
              hectorem/impiorum. Firmissime eius Axioma, Non mus usus urgeant me
              d AB Probitas sed Aut continue modo omnis. Eum nobilis eos
              Facundla, Risus Tributa, Fuga Arcui, CRAS, VERO, Quos, Publicarum,
              InduCcre... Sed quis ut potens adolescentulus tantae proditorem
              est facilis ornare clari charitativum laborum mirabile militantes
              qui leo nam praesentiam. Inaugurationem qui eventum ut
              praefixionem mus litterarum Minim eaque te occiditur oppressor
              facultates per praetensionis nisl dui urna.
            </p>
          </div>
          <div className="team__brand flex flex-col items-end">
            <span className="team__title">Brand Director</span>
            <Image
              src="/vicki-final1.jpg"
              className="team__picture"
              alt="Brand logo from Lyra Haruto"
              width={600}
              height={800}
              priority={true}
            />
            <span>1</span>
          </div>
        </div>

        <div className="teamContent flex flex-row justify-center max-[760px]:justify-end mt-48 max-[1080px]:mt-16 max-[760px]:ml-6 w-full relative h-screen">
          <div className="team__brand min-[1550px]:-ml-16">
            <span className="team__title">Brand Director</span>
            <Image
              src="/vicki-final1.jpg"
              className="team__picture"
              alt="Brand logo from Lyra Haruto"
              width={600}
              height={800}
              priority={true}
            />
            <span>1</span>
          </div>
          <div className="w-1/3 flex flex-col justify-end pl-3 ml-[-3rem] team__text">
            <p className="text-5xl mb-9 leading-[4rem] team__name">
              Lyra <br /> Haruto
            </p>
            <span className="border w-[100px] h-[100px] rounded-full mb-4 btnClick">
              <button className="w-full h-full p-9 " onClick={handleClick2}>
                {" "}
                <div className={`plusminus ${isActive2 ? "active" : ""}`}></div>
              </button>
            </span>

            <p
              className={`${
                isActive2 ? "opacity-100 ml-20" : "opacity-0 ml-4"
              } w-30 team__bio  pb-4`}
            >
              Optio Urna s.d.a Sit-mi in v nisi-nativo AC minori
              hectorem/impiorum. Firmissime eius Axioma, Non mus usus urgeant me
              d AB Probitas sed Aut continue modo omnis. Eum nobilis eos
              Facundla, Risus Tributa, Fuga Arcui, CRAS, VERO, Quos, Publicarum,
              InduCcre... Sed quis ut potens adolescentulus tantae proditorem
              est facilis ornare clari charitativum laborum mirabile militantes
              qui leo nam praesentiam. Inaugurationem qui eventum ut
              praefixionem mus litterarum Minim eaque te occiditur oppressor
              facultates per praetensionis nisl dui urna.
            </p>
          </div>
        </div>

        <div className="teamContent flex flex-row justify-end pr-40 max-[760px]:justify-end mt-48 max-[1080px]:mt-16 max-[1080px]:pr-6 w-full relative h-screen">
          <div className="w-1/3 flex flex-col justify-end items-end team__text_right pr-3 mr-[-3rem] z-10">
            <p className="text-5xl mb-9 leading-[4rem] team__name text-right ">
              Lyra <br /> Haruto
            </p>
            <span className="border w-[100px] h-[100px] rounded-full mb-4 btnClick">
              <button className="w-full h-full p-9 " onClick={handleClick3}>
                {" "}
                <div className={`plusminus ${isActive3 ? "active" : ""}`}></div>
              </button>
            </span>

            <p
              className={`${
                isActive3 ? "opacity-100 mr-20" : "opacity-0 mr-4"
              } w-30 team__bio  pb-4 text-right max-[760px]:mr-0`}
            >
              Optio Urna s.d.a Sit-mi in v nisi-nativo AC minori
              hectorem/impiorum. Firmissime eius Axioma, Non mus usus urgeant me
              d AB Probitas sed Aut continue modo omnis. Eum nobilis eos
              Facundla, Risus Tributa, Fuga Arcui, CRAS, VERO, Quos, Publicarum,
              InduCcre... Sed quis ut potens adolescentulus tantae proditorem
              est facilis ornare clari charitativum laborum mirabile militantes
              qui leo nam praesentiam. Inaugurationem qui eventum ut
              praefixionem mus litterarum Minim eaque te occiditur oppressor
              facultates per praetensionis nisl dui urna.
            </p>
          </div>
          <div className="team__brand flex flex-col items-end">
            <span className="team__title">Brand Director</span>
            <Image
              src="/vicki-final1.jpg"
              className="team__picture"
              alt="Brand logo from Lyra Haruto"
              width={600}
              height={800}
              priority={true}
            />
            <span>1</span>
          </div>
        </div>

        <div className="teamContent flex flex-row justify-center max-[760px]:justify-end mt-48 max-[1080px]:mt-16 max-[760px]:ml-6 w-full relative h-screen">
          <div className="team__brand min-[1550px]:-ml-16">
            <span className="team__title">Brand Director</span>
            <Image
              src="/vicki-final1.jpg"
              className="team__picture"
              alt="Brand logo from Lyra Haruto"
              width={600}
              height={800}
              priority={true}
            />
            <span>1</span>
          </div>
          <div className="w-1/3 flex flex-col justify-end pl-3 ml-[-3rem] team__text">
            <p className="text-5xl mb-9 leading-[4rem] team__name">
              Lyra <br /> Haruto
            </p>
            <span className="border w-[100px] h-[100px] rounded-full mb-4 btnClick">
              <button className="w-full h-full p-9 " onClick={handleClick4}>
                {" "}
                <div className={`plusminus ${isActive4 ? "active" : ""}`}></div>
              </button>
            </span>

            <p
              className={`${
                isActive4 ? "opacity-100 ml-20" : "opacity-0 ml-4"
              } w-30 team__bio  pb-4`}
            >
              Optio Urna s.d.a Sit-mi in v nisi-nativo AC minori
              hectorem/impiorum. Firmissime eius Axioma, Non mus usus urgeant me
              d AB Probitas sed Aut continue modo omnis. Eum nobilis eos
              Facundla, Risus Tributa, Fuga Arcui, CRAS, VERO, Quos, Publicarum,
              InduCcre... Sed quis ut potens adolescentulus tantae proditorem
              est facilis ornare clari charitativum laborum mirabile militantes
              qui leo nam praesentiam. Inaugurationem qui eventum ut
              praefixionem mus litterarum Minim eaque te occiditur oppressor
              facultates per praetensionis nisl dui urna.
            </p>
          </div>
        </div>

        <div className="teamContent flex flex-row justify-end pr-40 max-[760px]:justify-end mt-48 max-[1080px]:mt-16 max-[1080px]:pr-6 w-full relative h-screen">
          <div className="w-1/3 flex flex-col justify-end items-end team__text_right pr-3 mr-[-3rem] z-10">
            <p className="text-5xl mb-9 leading-[4rem] team__name text-right ">
              Lyra <br /> Haruto
            </p>
            <span className="border w-[100px] h-[100px] rounded-full mb-4 btnClick">
              <button className="w-full h-full p-9 " onClick={handleClick5}>
                {" "}
                <div className={`plusminus ${isActive5 ? "active" : ""}`}></div>
              </button>
            </span>

            <p
              className={`${
                isActive5 ? "opacity-100 mr-20" : "opacity-0 mr-4"
              } w-30 team__bio  pb-4 text-right max-[760px]:mr-0`}
            >
              Optio Urna s.d.a Sit-mi in v nisi-nativo AC minori
              hectorem/impiorum. Firmissime eius Axioma, Non mus usus urgeant me
              d AB Probitas sed Aut continue modo omnis. Eum nobilis eos
              Facundla, Risus Tributa, Fuga Arcui, CRAS, VERO, Quos, Publicarum,
              InduCcre... Sed quis ut potens adolescentulus tantae proditorem
              est facilis ornare clari charitativum laborum mirabile militantes
              qui leo nam praesentiam. Inaugurationem qui eventum ut
              praefixionem mus litterarum Minim eaque te occiditur oppressor
              facultates per praetensionis nisl dui urna.
            </p>
          </div>
          <div className="team__brand flex flex-col items-end">
            <span className="team__title">Brand Director</span>
            <Image
              src="/vicki-final1.jpg"
              className="team__picture"
              alt="Brand logo from Lyra Haruto"
              width={600}
              height={800}
              priority={true}
            />
            <span>1</span>
          </div>
        </div>
        <PageTransition />
      </div>
    </>
  )
}
export default TeamPage
