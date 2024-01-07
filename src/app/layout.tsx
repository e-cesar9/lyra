"use client"
import React, {useEffect, useState} from "react"
import {Layout} from "../components/layout"
import "../styles/global.css"
import {ShellProvider} from "../utils/shellProvider"
import {ThemeProvider} from "../utils/themeProvider"
import Sidebar from "../utils/sideBar"
import {SpeedInsights} from "@vercel/speed-insights/next"

const RootLayout = ({children}: {children: React.ReactNode}) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false)

  useEffect(() => {
    localStorage.setItem("visitedAt", new Date().toString())
  }, [])

  type GlobalProps = {
    children: React.ReactNode
  }

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible)
  }

  const Global = (props: GlobalProps) => {
    return (
      <div className="relative z-0 flex h-full w-full overflow-hidden">
        {props.children}
      </div>
    )
  }

  const MobileSidebarToggle = ({onClick}) => (
    <div className={`bar ${isSidebarVisible ? "h-20" : "h-11"}`}>
      <button
        onClick={onClick}
        className="mobile-sidebar-toggle mobile-toggle absolute left-0 -ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50 dark:hover:text-white"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-md"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  )

  return (
    <html lang="en">
      <title>Lyra Haruto | Home</title>
      <body>
        <Global>
          <ThemeProvider>
            <ShellProvider>
              <MobileSidebarToggle onClick={toggleSidebar} />
              {!isSidebarVisible && <Sidebar />}

              <Layout>{children}</Layout>
            </ShellProvider>
          </ThemeProvider>
        </Global>
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
