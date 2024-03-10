"use client"
import React from "react"
import ChatComponent from "../components/chatComponent"
import useContain from "../components/context/context"
import Sidebar from "./sideBar"
import {Layout} from "../components/layout"
import * as dat from "dat.gui"

const IndexPage = ({}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)
  useContain(containerRef)

  const screenRef = React.useRef(null)

  React.useEffect(() => {}, [])

  return (
    <>
      <Sidebar />
      <Layout>
        <div
          ref={containerRef}
          id="yo"
          className="overflow-y-auto h-full p-4 rounded layout"
        >
          <ChatComponent inputRef={inputRef} containerRef={containerRef} />
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
