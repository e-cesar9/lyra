"use client"
import React from "react"
import Image from "next/image"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import Sidebar from "../sideBar"
import "./style.css"
import "./script.js"

gsap.registerPlugin(ScrollTrigger)

const DiaryPage = ({}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)
  const textRef = React.useRef(null)

  const endRef = React.useRef(null)

  return (
    <>
      <Sidebar />
      <div
        className="w-full overflow-y-auto h-screen relative"
        id="contact-main"
      >
        <div className="slider_odin">
          <div className="separator"></div>
          <div className="containerS">
            <div className="slider">
              <div className="slider__scroller">
                <div className="slide">
                  <img src="ace.png" alt="" />
                </div>

                <div className="slide">
                  <img src="ace.png" alt="" />
                </div>

                <div className="slide">
                  <img src="ace.png" alt="" />
                </div>

                <div className="slide">
                  <img src="ace.png" alt="" />
                </div>

                <div className="slide">
                  <img src="ace.png" alt="" />
                </div>

                <div className="slide">
                  <img src="ace.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="containerS encoded">
            <div className="slider">
              <div className="slider__scroller">
                <div className="slide"></div>

                <div className="slide"></div>

                <div className="slide"></div>

                <div className="slide"></div>

                <div className="slide"></div>

                <div className="slide"></div>
              </div>
            </div>
          </div>
        </div>
        <canvas className="webgl"></canvas>

        <div className="flex flex-col items-center w-full">
        <div className="text-6xl max-[760px]:text-6xl text-center uppercase relative overflow-hidden mt-48 mb-24">
                <div className="revealText"> Your Fate </div>
              </div>
          <div
            ref={textRef}
            className="flex flex-row px-6 pb-6 justify-between text-2xl"
          >
            <p className="text_block px-2">
              At the Lyra Haruto Company, we stand at the forefront of a
              revolution, where the art of storytelling melds with the cutting
              edge of technology to create experiences that linger in the heart
              and mind long after the tale is told. Ours is a sanctuary for the
              dreamers, the thinkers, the innovators, and the creators who
              believe in the magic of narratives to alter the fabric of reality
              itself.
            </p>
            <p className="text_block px-2">
              Imagine being part of an odyssey where every project is a canvas
              awaiting your unique brushstroke, where your work does not just
              speak to the audience but sings to their souls, crafting moments
              of joy, reflection, and profound understanding. Here, your passion
              for the arts, your dedication to innovation, and your belief in
              the transformative power of stories will find not just recognition
              but a fervent echo in the hearts of like-minded individuals.
            </p>
            <p className="text_block px-2">
              The Lyra Haruto Company is not merely a workplace; it is a cradle
              of potential where freedom and creativity are the air we breathe,
              driven by the conviction that every story told is a step toward a
              brighter, more enlightened world. We cherish the rebels, the
              meticulous, the ones who gaze at the stars and dream of painting
              them. In our journey to illuminate the extraordinary in the
              ordinary, your voice is the melody we seek, your vision the light
              that guides us.
            </p>

            <p className="text_block px-2">
              Join us, and together, let us weave tales that transcend time,
              tales that remind us of the beauty of being uniquely human,
              embracing the full spectrum of emotions in our narratives. Let
              your journey with the Lyra Haruto Company be the legacy you choose
              to leave in the annals of storytelling, a testament to the power
              of dreams made manifest.
            </p>
          </div>
          <p className="text_block px-8 pt-6 text-2xl">
            Your path to changing the world through stories begins here. Be not
            just a part of history, but a creator of it. Welcome to the Lyra
            Haruto Company, where every story is a doorway to a new world.
          </p>
        </div>
      </div>
    </>
  )
}

export default DiaryPage
