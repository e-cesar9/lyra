"use client"
import React from "react"
import Sidebar from "../sideBar"
import "./style.css"

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

  return (
    <>
      <Sidebar />
      <div className="w-full overflow-y-auto" id="contact-main">
        <div className="flex flex-col w-full h-screen">
          <div className="flex flex-col justify-center align-middle items-center h-screen w-full -mt-8">
            <a>SAY HI</a>

            <div className="py-16">
              <div className="text-7xl text-center uppercase">No need</div>

              <div className="text-7xl text-center uppercase">to be shy.</div>
            </div>

            <a>Let’s talk</a>
          </div>
          <div className="flex flex-row px-12 pb-6 justify-between">
            {" "}
            <div className="uppercase">hello</div>{" "}
            <div className="uppercase">Social</div>{" "}
            <div className="uppercase">Contacts</div>{" "}
            <div className="uppercase">Location</div>{" "}
          </div>
        </div>
        <div className="flex flex-col h-screen " id="form-section">
          <div className="text-7xl py-4" id="stripe">
            {" "}
            SAY HI <span>😊</span> SAY HI <span>😊</span> SAY HI <span>😊</span>{" "}
            SAY HI <span>😊</span>{" "}
          </div>{" "}
          <br />
          <div className="flex h-screen">
            <div className="w-2/5 flex items-end">
              <img src={selectedGif} />
            </div>{" "}
            <div className="w-3/5 pl-4">
              <div className="text-7xl uppercase font-bold pt-8">Hello</div>
              <div className="text-7xl uppercase font-light pb-8">
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
                  <div aria-hidden="true">
                    <input type="text" value="" />
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
        <div className="flex flex-col w-full h-screen">
          <div className="flex flex-col justify-center align-middle items-center h-screen w-full  -mt-8">
            <a>Click on the screen</a>

            <div className="py-16">
              <div className="text-7xl text-center uppercase">Let’s</div>

              <div className="text-7xl text-center uppercase">Talk</div>
            </div>

            <a>Let’s talk</a>
          </div>
        </div>
        <div className="flex flex-col w-full" id="footer-contact">
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
