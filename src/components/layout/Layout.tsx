import React from "react"
import {useTheme} from "../../utils/themeProvider"
import ChatComponent from "../chatComponent"

interface Props {
  children: React.ReactNode
  onClick: () => void
}

const Layout: React.FC<Props> = ({children, onClick}) => {
  const {theme} = useTheme()

  return (
    <div
      className="terminal relative flex h-full max-w-full flex-1 flex-col overflow-hidden"
      onClick={onClick}
      style={{
        color: theme.foreground,
      }}
    >
      <main
        className="w-full h-full p-2"
        style={{
          background: theme.background,
        }}
      >
        {children}
      </main>
      <div className="flicker"></div>
      <div className="scanlines"></div>
      <div className="noise"></div>
    </div>
  )
}

export default Layout
