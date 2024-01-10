import React, {useEffect, useRef} from "react"
import {useTheme} from "../../utils/themeProvider"
import {Overlay} from "./overlay"
import {motion} from "framer-motion"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  const overlayRef = useRef(null)
  const {theme} = useTheme()
  let isAnimating = false

  useEffect(() => {
    const overlayEl = overlayRef.current
    if (!overlayEl) return

    const overlay = new Overlay(overlayEl, {
      rows: 7,
      columns: 13,
    })

    overlay.show({
      // Duration for each cell animation
      duration: 0.3,
      // Ease for each cell animation
      ease: "power1.inOut",
      // Stagger object
      stagger: {
        grid: [overlay.options.rows, overlay.options.columns],
        from: "end",
        each: 0.035,
      },
    })
    // show content
    // intro.classList.add('intro--closed');
    // contentElements[position].classList.add('content--open');

    // Now hide the overlay
    overlay.hide({
      // Duration for each cell animation
      duration: 0.3,
      // Ease for each cell animation
      ease: "power3",
      // Stagger object
      stagger: {
        grid: [overlay.options.rows, overlay.options.columns],
        from: "end",
        each: 0.035,
      },
    })
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
        transition={{duration: 1}}
        exit={{opacity: 1}}
        className="overlay"
        ref={overlayRef}
      ></motion.div>
    </div>
  )
}

export default Layout
