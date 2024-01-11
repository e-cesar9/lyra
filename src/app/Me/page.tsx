"use client"
import React from "react"
import ChatComponent from "../../components/chatComponent"
import RootLayout from "../layout"

const DiaryPage = ({}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)

  return (
    <div
      ref={containerRef}
      id="yo"
      className="overflow-y-auto h-full p-4 rounded layout"
    >
      <h1>Welcome</h1>
    </div>
  )
}

export default DiaryPage
