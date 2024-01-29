// import {preloadImages} from "./utils"
// import Lenis from "@studio-freight/lenis"
// import {gsap} from "gsap"
// import {ScrollTrigger} from "gsap/ScrollTrigger"
// gsap.registerPlugin(ScrollTrigger)

// if (typeof document !== "undefined") {
//   const gridItems = [...document.querySelectorAll(".grid > .grid__item")]

//   gridItems.forEach((item) => {
//     const image = item.querySelector(".grid__item-img")
//     // console.log(item)
//     // console.log(image)

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: item,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         },
//       })
//       .set(image, {
//         transformOrigin: `${gsap.utils.random(0, 1) > 0.5 ? 0 : 100}% 100%`,
//       })
//       .to(image, {
//         ease: "none",
//         scale: 0,
//       })
//   })
//   // })
// }
