import {useEffect} from "react"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const useSplitTextAnimation = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const splitText = async () => {
      if (ref.current) {
        const {default: Splitting} = await import("splitting")
        Splitting({target: ref.current})

        const fx16Titles = ref.current.querySelectorAll(
          ".content__title[data-effect16]",
        )

        fx16Titles.forEach((title) => {
          gsap.fromTo(
            title,
            {transformOrigin: "0% 50%", rotate: 0},
            {
              ease: "none",
              rotate: 0,
              scrollTrigger: {
                trigger: title,
                start: "top bottom",
                end: "top top",
                scrub: true,
              },
            },
          )

          const words = title.querySelectorAll("span.word")
          gsap.fromTo(
            words,
            {"will-change": "opacity", opacity: 0.1},
            {
              ease: "none",
              opacity: 1,
              stagger: 0.05,
              scrollTrigger: {
                trigger: ref.current,
                start: "top bottom-=40%",
                end: "bottom+=20% top+=40%",
                scrub: true,
              },
            },
          )
        })
      }
    }

    splitText()
  }, [ref.current]) // Dependency array ensures effect runs only when the ref changes
}

export default useSplitTextAnimation
