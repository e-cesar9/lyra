"use client"
import React from "react"
import ChatComponent from "../components/chatComponent"

const IndexPage = ({}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)

  // React.useEffect(() => {
  //   inputRef.current.focus()
  // }, [history])

  return (
    <div
      ref={containerRef}
      id="yo"
      className="overflow-y-auto h-full p-4 rounded layout"
    >
      <ChatComponent inputRef={inputRef} containerRef={containerRef} />
    </div>
  )
}

export default IndexPage
