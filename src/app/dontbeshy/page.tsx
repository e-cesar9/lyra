"use client"
import React from "react"
import Sidebar from "../sideBar"
import "./style.css"

const DiaryPage = ({}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)

  return (
    <>
      <Sidebar />
      <div className="flex flex-col w-full h-full" id="contact-main">
        <div className="flex flex-col justify-center align-middle items-center h-full w-full whitespace-pre -mt-8">
          <a>SAY HI</a>

          <div className="py-16">
            <div className="text-7xl text-center uppercase">No need</div>

            <div className="text-7xl text-center uppercase">to be shy.</div>
          </div>

          <a>Let’s talk</a>
        </div>
        <div className="flex flex-row px-12 pb-6 justify-between">
          {" "}
          <div className="uppercase">hello</div>{" "}
          <div className="uppercase">Social</div>{" "}
          <div className="uppercase">Contacts</div>{" "}
          <div className="uppercase">Location</div>{" "}
        </div>
      </div>
    </>
  )
}

export default DiaryPage
