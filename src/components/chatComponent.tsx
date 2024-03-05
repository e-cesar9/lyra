"use client"
import {useChat} from "ai/react"
import React, {useEffect, useState} from "react"
import {commandExists} from "./../utils/commandExists"
import {useShell} from "./../utils/shellProvider"
import {useTheme} from "./../utils/themeProvider"
import {Ps1} from "./ps1"
import {History} from "./history"
import ThreeCanvas from "./ps1/nes"

export const ChatComponent = ({inputRef, containerRef}) => {
  // Vercel AI SDK (ai package) useChat()

  const {input, setInput, handleInputChange, handleSubmit, messages} = useChat()

  const {theme} = useTheme()
  const [value, setValue] = useState("")
  const [showCanvas, setShowCanvas] = useState(false)
  var [lastKeyCode, setLastKeyCode] = useState(null)
  const {
    setCommand,
    history,
    lastCommandIndex,
    setHistory,
    setLastCommandIndex,
    clearHistory,
  } = useShell()

  const onClickAnywhere = () => {
    if (inputRef.current && window.innerWidth >= 1280) {
      inputRef.current.focus()
    }
  }

  useEffect(() => {
    // containerRef.current.scrollTo(0, containerRef.current.scrollHeight)
    inputRef.current.focus()
    // inputRef.current.scrollTo(0, inputRef.current.scrollHeight)

    // if (inputRef.current && window.innerWidth >= 1280) {
    //   setTimeout(() => {
    //     containerRef.current.scrollTo(0, containerRef.current.scrollHeight)
    //     inputRef.current.scrollTo(0, inputRef.current.scrollHeight)
    //     inputRef.current.focus()
    //   }, 15500)
    // }
  }, [messages, history])

  const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    const commands: string[] = history
      .map(({command}) => command)
      .filter((value: string) => value)

    if (event.key === "c" && event.ctrlKey) {
      event.preventDefault()

      setValue("")
      setHistory("")
      setLastCommandIndex(0)
    }

    if (event.key === "l" && event.ctrlKey) {
      event.preventDefault()
      clearHistory()
    }

    if (event.key === "Enter" || event.code === "13" || event.code === "76") {
      if (lastKeyCode === 452 || lastKeyCode === 884) {
        setShowCanvas(true)
        setTimeout(() => {
          setShowCanvas(false)
        }, 10000)
      }
      event.preventDefault()
      setLastKeyCode(0)
      setLastCommandIndex(0)
      setCommand(value)

      setValue("")
    }

    if (event.key === "ArrowUp") {
      event.preventDefault()

      if (!commands.length) {
        return
      }

      const index: number = lastCommandIndex + 1

      if (index <= commands.length) {
        setLastCommandIndex(index)
        setValue(commands[commands.length - index])
      }
    }

    if (event.key === "ArrowDown") {
      event.preventDefault()

      if (!commands.length) {
        return
      }

      const index: number = lastCommandIndex - 1

      if (index > 0) {
        setLastCommandIndex(index)
        setValue(commands[commands.length - index])
      } else {
        setLastCommandIndex(0)
        setValue("")
      }
    }
  }

  return (
    <div onClick={onClickAnywhere}>
      <History history={history} messages={messages} />

      <form className="" onSubmit={handleSubmit} id="form">
        <Ps1 />
        <input
          ref={inputRef}
          id="prompt"
          type="text"
          className="focus:outline-none flex-grow"
          aria-label="prompt"
          style={{
            backgroundColor: theme.background,
            color:
              commandExists(value) || value === "" ? theme.green : theme.red,
          }}
          value={input || value}
          onChange={(event) => {
            setValue(event.target.value)
            handleInputChange(event)
          }}
          placeholder="Talk to Lyra Haruto or type “help” if you are lost …"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          onKeyDown={(e) => {
            setLastKeyCode((lastKeyCode += e.keyCode))
            if (
              e.key === "Enter" &&
              !commandExists(value) &&
              lastKeyCode !== 452
            ) {
              handleSubmit
              setValue("")
            } else {
              onSubmit(e)
              if (e.key === "Enter") {
                setValue("")
                setInput("")
              }
            }
          }}
        />
      </form>
      <div id="smf" className="flex justify-center">
        {showCanvas && <ThreeCanvas />}
      </div>
    </div>
  )
}
export default ChatComponent
