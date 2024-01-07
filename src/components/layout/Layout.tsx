import React from "react"
import {useTheme} from "../../utils/themeProvider"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  const {theme} = useTheme()

  return (
    <div
      className="terminal relative flex h-full max-w-full flex-1 flex-col overflow-hidden"
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
      <div className="scanlines"></div>
      <div className="noise"></div>
    </div>
  )
}

export default Layout
