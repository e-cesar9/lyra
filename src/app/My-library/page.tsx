"use client"
import React from "react"
import ChatComponent from "../../components/chatComponent"
import RootLayout from "../layout"

const DiaryPage = ({}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)

  return (
    <RootLayout>
      <div
        ref={containerRef}
        id="yo"
        className="overflow-y-auto h-full p-4 rounded layout"
      >
        <ChatComponent inputRef={inputRef} containerRef={containerRef} />
      </div>
    </RootLayout>
  )
}

export default DiaryPage
