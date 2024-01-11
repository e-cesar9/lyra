import React, {useEffect, useRef} from "react"
import {useTheme} from "../../utils/themeProvider"
import {Overlay} from "./overlay"
import {motion} from "framer-motion"
import gsap from "gsap"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  const {theme} = useTheme()

  const rows = 10
  const columns = 20
  const grid = [rows, columns]
  const boxes = []

  // Create boxes for the grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      boxes.push(
        <div
          className="box"
          style={{
            backgroundColor: theme.foreground,
          }}
          key={`${row}-${col}`}
        ></div>,
      )
    }
  }

  // Animation function
  const animateBoxes = (from, axis, ease) => {
    const tl = gsap.timeline({})
    tl.to(".box", {
      duration: 0.8,
      scale: 0,
      opacity: 0,
      // x:40,
      y: 20,
      // yoyo: true,
      // repeat: 1,
      ease: "power1.inOut",
      stagger: {
        amount: 1,
        grid: [10, 20],
        axis: axis,
        ease: ease,
        from: from,
      },
    })
  }

  useEffect(() => {
    animateBoxes(200, null, "power3.inOut")
  }, [])

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
      <motion.div
        initial={{opacity: 1}}
        animate={{opacity: 0}}
        transition={{duration: 1.2}}
        exit={{opacity: 1}}
        className="overlay"
      >
        {boxes}
      </motion.div>
    </div>
  )
}

export default Layout
