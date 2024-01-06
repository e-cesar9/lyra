import React from "react"
import {useShell} from "../utils/shellProvider"
import {useTheme} from "../utils/themeProvider"
import config from "../../config.json"
import ChatComponent from "../components/chatComponent"

const IndexPage = ({}) => {
  const {history} = useShell()
  const {theme} = useTheme()

  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    inputRef.current.focus()
  }, [history])

  return (
    <>
      <div
        className="overflow-hidden h-full rounded layout"
        style={{
          padding: config.border ? 16 : 8,
        }}
      >
        <div ref={containerRef} id="yo" className="overflow-y-auto h-full">
          <ChatComponent inputRef={inputRef} containerRef={containerRef} />
        </div>
      </div>
    </>
  )
}

export default IndexPage
