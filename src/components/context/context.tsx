import {useEffect, RefObject} from "react"

const useContain = (containerRef: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const pixel = document.createElement("div")
    pixel.setAttribute("id", "logic")
    pixel.style.width = "1px"
    pixel.style.height = "1px"
    pixel.style.backgroundColor = "transparent"
    pixel.style.position = "absolute"
    pixel.style.top = Math.random() * 1000 + "px"
    pixel.style.left = Math.random() * 1000 + "px"

    containerRef.current?.appendChild(pixel)

    pixel.addEventListener("mouseover", () => {})

    return () => {
      // Cleanup
      pixel.removeEventListener("mouseover", () => {})
      if (containerRef.current && containerRef.current.contains(pixel)) {
        containerRef.current.removeChild(pixel)
      }
    }
  }, [containerRef])
}

export default useContain
