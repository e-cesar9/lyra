"use client"
import React from "react"
import Sidebar from "../sideBar"
import "./style.css"
import gsap from "gsap"

const DiaryPage = ({}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)

  const gifData = [
    "/hello.gif",
    "hello1.gif",
    "hello2.gif",
    "hello3.gif",
    "hello4.gif",
    "hello5.gif",
    "hello7.gif",
  ]

  const [selectedGif, setSelectedGif] = React.useState<string>("")

  // Function to select a random GIF
  const getRandomGif = () => {
    const randomIndex = Math.floor(Math.random() * gifData.length)
    return gifData[randomIndex]
  }

  // Set an initial GIF when the component mounts
  React.useEffect(() => {
    setSelectedGif(getRandomGif())
  }, [])

  const shyRef = React.useRef<HTMLDivElement>(null)
  const gifshyRef = React.useRef<HTMLImageElement>(null)

  React.useEffect(() => {
    const shyElement = shyRef.current
    const gifshyElement = gifshyRef.current

    const hoverInAnimation = () => {
      gsap.to(gifshyElement, {
        width: "150px",
        clipPath: "inset(0%)",
        duration: 0.5,
      })
    }

    const hoverOutAnimation = () => {
      gsap.to(gifshyElement, {
        width: "0px",
        clipPath: "inset(0% 0% 0% 100%)",
        duration: 0.5,
      })
    }

    shyElement?.addEventListener("mouseenter", hoverInAnimation)
    shyElement?.addEventListener("mouseleave", hoverOutAnimation)

    return () => {
      shyElement?.removeEventListener("mouseenter", hoverInAnimation)
      shyElement?.removeEventListener("mouseleave", hoverOutAnimation)
    }
  }, [])

  return (
    <>
      <Sidebar />
      <div className="w-full overflow-y-auto" id="contact-main">
        <div className="flex flex-col w-full h-screen">
          <div className="flex flex-col justify-center align-middle items-center h-screen w-full mt-4">
            <a>SAY HI</a>

            <div className="py-16">
              <div className="text-8xl max-[760px]:text-6xl text-center uppercase relative overflow-hidden">
                <div className="revealText"> No need </div>
              </div>

              <div
                ref={shyRef}
                id="shy"
                className="text-8xl max-[760px]:text-6xl text-center uppercase relative overflow-hidden"
              ><div className="revealText">
                to be
                <img ref={gifshyRef} id="shygif" src="shy.gif" /> shy.
              </div>
              </div>
            </div>

            <a>Let’s talk</a>
          </div>
          <div
            className="flex flex-row px-12 pb-6 justify-between"
            id="header-text"
          >
            {" "}
            <div className="uppercase flex items-end">
              waiting to hear from you
            </div>{" "}
            <div className="uppercase ">
              Social
              <br />
              <div className="flex flex-row justify-between">
                <a
                  className="btnContact"
                  href="https://www.instagram.com/lyra.haruto/"
                >
                  IG
                </a>
                <br />
                <a href="" className="btnContact">
                  LK
                </a>
                <br />
                <a
                  href="https://twitter.com/lyraharuto/"
                  className="btnContact"
                >
                  Twitter
                </a>
              </div>
            </div>{" "}
            <div className="uppercase flex items-end">
              Contacts
              <br />
              iam@thelyraharuto.com
            </div>{" "}
            <div className="uppercase flex items-end">
              Location <br /> 4, Privet Drive, Little Whinging, Surrey{" "}
            </div>{" "}
          </div>
        </div>
        <div
          className="flex flex-col h-screen overflow-x-hidden overflow-y-hidden "
          id="form-section"
        >
          <div className="text-7xl max-[760px]:text-4xl py-4" id="stripe">
            <div id="stripeAnim">
              {" "}
              <span>
                {" "}
                SAY HI <span>😊</span>
              </span>
              <span>
                {" "}
                SAY HI <span>😊</span>
              </span>
              <span>
                {" "}
                SAY HI <span>😊</span>
              </span>
              <span>
                {" "}
                SAY HI <span>😊</span>
              </span>
              <span>
                {" "}
                SAY HI <span>😊</span>
              </span>{" "}
              <span>
                {" "}
                SAY HI <span>😊</span>
              </span>
              <span>
                {" "}
                SAY HI <span>😊</span>
              </span>{" "}
              <span>
                {" "}
                SAY HI <span>😊</span>
              </span>
            </div>
          </div>{" "}
          <br />
          <div className="flex h-screen">
            <div className="w-2/5 flex items-end">
              <img id="gifForm" src={selectedGif} />
            </div>{" "}
            <div className="w-3/5 pl-4">
              <div className="text-7xl max-[760px]:text-5xl uppercase font-bold pt-8">
                Hello
              </div>
              <div className="text-7xl max-[760px]:text-5xl uppercase font-light pb-8">
                Lyra Haruto
              </div>

              <form action="" target="_self" className="">
                <div>
                  <div>
                    <label htmlFor="NAME">I’m </label>
                    <input type="text" value="" name="NAME" id="NAME" />
                    <span id="mce-NAME-HELPERTEXT"></span>
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">Here is my email</label>
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      id="mce-EMAIL"
                      required
                    />
                    <span
                      id="mce-EMAIL-HELPERTEXT"
                      className="helper_text"
                    ></span>
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-FROM">I heard about Lyra Haruto </label>
                    <select name="FROM" className="" id="mce-FROM">
                      <option value=""></option>
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="TikTok">TikTok</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Word of mouth">Word of mouth</option>
                      <option value="Other">Other</option>
                    </select>
                    <span
                      id="mce-FROM-HELPERTEXT"
                      className="helper_text"
                    ></span>
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-SERVICE">I need you service for </label>
                    <input
                      type="text"
                      value=""
                      name="SERVICE"
                      className=""
                      id="mce-SERVICE"
                    />
                    <span
                      id="mce-SERVICE-HELPERTEXT"
                      className="helper_text"
                    ></span>
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-PROJECT">Here is my project </label>
                    <div
                      className="text-box-form"
                      role="textbox"
                      aria-label="project description"
                    ></div>
                    <input
                      type="text"
                      value=""
                      name="PROJECT"
                      className=""
                      id="mce-PROJECT"
                    />
                    <span
                      id="mce-PROJECT-HELPERTEXT"
                      className="helper_text"
                    ></span>
                  </div>
                  <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response"></div>
                    <div className="response" id="mce-success-response"></div>
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot">
                      <input
                        type="submit"
                        value="Submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-col w-full h-screen" id="tapeScreen">
          <div className="flex flex-col justify-center align-middle items-center h-screen w-full  -mt-8">
            <a>Click on the screen</a>

            <div className="py-16">
              <div className="text-7xl max-[760px]:text-5xl text-center uppercase">
                Let’s
              </div>

              <div className="text-7xl max-[760px]:text-5xl text-center uppercase">
                Talk
              </div>
            </div>

            <a>Let’s talk</a>
          </div>
        </div>
        <div className="flex flex-col w-full" id="footer-contact">
          <div
            className="flex flex-row px-12 pb-6 pt-6 justify-between"
            id="footer-text"
          >
            {" "}
            <div className="uppercase">
              SAY HI : <br />
              <span className=""> iam@thelyraharuto.com</span>
            </div>{" "}
            <div className="uppercase"></div>{" "}
            <div className="uppercase">
              made with love by
              <br /> Lyra Haruto
            </div>{" "}
            <div className="uppercase">
              <a href="https://www.instagram.com/lyra.haruto/">Instagram</a>
              <br /> <a href=""> Linkedin</a>
              <br /> <a href="https://twitter.com/lyraharuto/">Twitter</a>{" "}
            </div>{" "}
          </div>
          <div className="flex flex-col justify-end align-end h-screen w-full -mt-8">
            <div className="py-8">
              <div className="text-7xl text-center uppercase">
                LYRA HARUTO - リラ はると{" "}
                <span>
                  <img src="lyrawalk2.gif" alt="" id="lyrawalk" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DiaryPage
