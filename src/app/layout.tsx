"use client"
import React, {useEffect, useState} from "react"
import {Layout} from "../components/layout"
import "../styles/global.css"
import {ShellProvider} from "../utils/shellProvider"
import {ThemeProvider} from "../utils/themeProvider"
import {ConfirmProvider} from "../components/context/ConfirmContext"
import Sidebar from "./sideBar"
import {SpeedInsights} from "@vercel/speed-insights/next"

const RootLayout = ({children}: {children: React.ReactNode}) => {
  type GlobalProps = {
    children: React.ReactNode
  }

  const Global = (props: GlobalProps) => {
    return (
      <div className="relative z-0 flex h-full w-full overflow-hidden overflow-y-scroll">
        {props.children}
      </div>
    )
  }

  return (
    <html lang="en">
      <title>Lyra Haruto | Home</title>
      <body suppressHydrationWarning={true}>
        <Global>
          <ThemeProvider>
            <ShellProvider>
              <ConfirmProvider>{children}</ConfirmProvider>
            </ShellProvider>
          </ThemeProvider>
        </Global>
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
