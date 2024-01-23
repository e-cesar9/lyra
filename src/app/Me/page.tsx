"use client"
import React, {useEffect, useState} from "react"
import "./style.css"
// import "./index"
import Image from "next/image"
import ChatComponent from "../../components/chatComponent"
import RootLayout from "../layout"

const DiaryPage: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)
  // const hoverRef = useRef(null)
  // useEffect(() => {
  //   if (hoverRef.current) {
  //     new Item(hoverRef.current)
  //   }
  // }, [])

  return (
    <>
      <div
        ref={containerRef}
        id="yo"
        className="overflow-y-auto h-full p-4 rounded layout"
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          {/* <img
            src="/AnIncredibleLife/LYH_1940_concept01_V004-min.jpg"
            className="text-center photo"
            alt="Brand logo from Lyra Haruto"
          /> */}
        </div>
        <div className="pt-8 text-center">
          <h1>An Incredible Life</h1>
          <h2>Lyra Haruto in her own words</h2>
        </div>
        <div className="py-20 mx-80">
          <p>
            There’s lots of ways to be, as a person. And some people express
            their deep appreciation in different ways. But one of the ways that
            I believe people express their appreciation to the rest of humanity
            is to make something wonderful and put it out there. And you never
            meet the people. You never shake their hands. You never hear their
            story or tell yours. But somehow, in the act of making something
            with a great deal of care and love, something’s transmitted there.
            And it’s a way of expressing to the rest of our species our deep
            appreciation. So we need to be true to who we are and remember
            what’s really important to us. —Steve, 2007
          </p>
        </div>

        <div className="content">
          <div className="grid">
            <div className="grid__item1" id="it">
              <div
                className="grid__item1-img"
                style={{
                  backgroundImage:
                    "url('/AnIncredibleLife/LYH_1940_concept01_V004-min.jpg')",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="content">
          <h2 className="content__title" data-splitting data-effect7>
            <span className="font-3">Unfolding</span>
            <span className="font-4">Elegantly</span>
            <span className="font-7">Naturally</span>
          </h2>
        </div>
        <div className="content">
          <p>
            An old grave hidden away at the foot of a deserted hill, Overrun
            with rank weeds growing unchecked year after year; There is no one
            left to tend the tomb, And only an occasional woodcutter passes by.
            Once I was his pupil, a youth with shaggy hair, Learning deeply from
            him by the Narrow River.
          </p>
        </div>

        <div className="py-20 mx-80">
          <p>
            There’s lots of ways to be, as a person. And some people express
            their deep appreciation in different ways. But one of the ways that
            I believe people express their appreciation to the rest of humanity
            is to make something wonderful and put it out there. And you never
            meet the people. You never shake their hands. You never hear their
            story or tell yours. But somehow, in the act of making something
            with a great deal of care and love, something’s transmitted there.
            And it’s a way of expressing to the rest of our species our deep
            appreciation. So we need to be true to who we are and remember
            what’s really important to us. —Steve, 2007
          </p>
        </div>

        <div className="py-20 mx-80">
          <p>
            There’s lots of ways to be, as a person. And some people express
            their deep appreciation in different ways. But one of the ways that
            I believe people express their appreciation to the rest of humanity
            is to make something wonderful and put it out there. And you never
            meet the people. You never shake their hands. You never hear their
            story or tell yours. But somehow, in the act of making something
            with a great deal of care and love, something’s transmitted there.
            And it’s a way of expressing to the rest of our species our deep
            appreciation. So we need to be true to who we are and remember
            what’s really important to us. —Steve, 2007
          </p>
        </div>
      </div>
    </>
  )
}

export default DiaryPage
