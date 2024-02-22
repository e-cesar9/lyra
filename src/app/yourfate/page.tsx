"use client"
import React from "react"
import Image from "next/image"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import Sidebar from "../sideBar"
import "./style.css"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"

gsap.registerPlugin(ScrollTrigger)

const DiaryPage = ({}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)
  const textRef = React.useRef(null)

  const endRef = React.useRef(null)

  // const splitText = React.useCallback(async () => {
  //   const {default: Splitting} = await import("splitting")
  //   if (textRef.current) {
  //     Splitting({target: textRef.current, by: "words"})
  //     var fx11Titles = textRef.current.querySelectorAll(
  //       ".content__title[data-effect16]",
  //     )}}, [textRef.current])
  //     // gsap.set(textRef.current, {opacity: 1})
  //   //   for (const title of fx11Titles) {
  //   //     gsap.fromTo(
  //   //       title,
  //   //       {
  //   //         filter: "blur(20px)",
  //   //       },
  //   //       {
  //   //         ease: "none",
  //   //         filter: "blur(0px)",
  //   //         scrollTrigger: {
  //   //           trigger: textRef.current,
  //   //           start: 'top bottom',
  //   //           end: 'top top',
  //   //           scrub: true,
  //   //           markers:true

  //   //         },
  //   //       },
  //   //     )
  //   //     const tit = title.querySelectorAll("span.word")
  //   //     gsap.fromTo(
  //   //       tit,
  //   //       {
  //   //         "will-change": "opacity",
  //   //         opacity: 0.1,
  //   //       },
  //   //       {
  //   //         ease: "none",
  //   //         opacity: 1,
  //   //         stagger: 0.05,
  //   //         scrollTrigger: {
  //   //           trigger: "#contact-main",
  //   //           start: 'top bottom-=20%',
  //   //           end: 'center top+=20%',
  //   //           scrub: true,
  //   //           markers:true
  //   //         },
  //   //       },
  //   //     )
  //   //   }
  //   // }},[textRef.current])

  //   React.useLayoutEffect(() => {
  //     splitText()
  //       const tit = textRef.current.querySelectorAll("span.word")
  //       gsap.fromTo(
  //         tit,
  //         {
  //           "will-change": "opacity",
  //           opacity: 0.1,
  //         },
  //         {
  //           ease: "none",
  //           opacity: 1,
  //           stagger: 0.05,
  //           scrollTrigger: {
  //             trigger: textRef.current,
  //             start: '#contact-main',
  //             end: '#heee',
  //             scrub: true,
  //             markers:true
  //           },
  //         },
  //       )

  //   }, [textRef.current])

  return (
    <>
      <Sidebar />
      <div className="w-full overflow-y-auto h-screen " id="contact-main">
        <div className="flex flex-col items-center w-full pt-32">
          <div ref={textRef} className="">
            <p className="content__title" data-effect16>
              At the Lyra Haruto Company, we stand at the forefront of a
              revolution, where the art of storytelling melds with the cutting
              edge of technology to create experiences that linger in the heart
              and mind long after the tale is told. Ours is a sanctuary for the
              dreamers, the thinkers, the innovators, and the creators who
              believe in the magic of narratives to alter the fabric of reality
              itself.
              <br />
              <br />
              Imagine being part of an odyssey where every project is a canvas
              awaiting your unique brushstroke, where your work does not just
              speak to the audience but sings to their souls, crafting moments
              of joy, reflection, and profound understanding. Here, your passion
              for the arts, your dedication to innovation, and your belief in
              the transformative power of stories will find not just recognition
              but a fervent echo in the hearts of like-minded individuals.
              <br />
              <br />
              The Lyra Haruto Company is not merely a workplace; it is a cradle
              of potential where freedom and creativity are the air we breathe,
              driven by the conviction that every story told is a step toward a
              brighter, more enlightened world. We cherish the rebels, the
              meticulous, the ones who gaze at the stars and dream of painting
              them. In our journey to illuminate the extraordinary in the
              ordinary, your voice is the melody we seek, your vision the light
              that guides us.
              <br />
              <br />
              Join us, and together, let us weave tales that transcend time,
              tales that remind us of the beauty of being uniquely human,
              embracing the full spectrum of emotions in our narratives. Let
              your journey with the Lyra Haruto Company be the legacy you choose
              to leave in the annals of storytelling, a testament to the power
              of dreams made manifest.
              <br />
              <br />
              Your path to changing the world through stories begins here. Be
              not just a part of history, but a creator of it. Welcome to the
              Lyra Haruto Company, where every story is a doorway to a new
              world.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center pt-12">
          {/* <p className="text-7xl py-8 bounty"> Bounty for Artist </p> */}
          <img src="ace.png" id="ace" className="pb-8" ref={endRef} />
        </div>
      </div>
    </>
  )
}

export default DiaryPage
