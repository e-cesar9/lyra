"use client"
import {useChat} from "ai/react"
import React, {useEffect, useState} from "react"
import {commandExists} from "./../utils/commandExists"
import {useShell} from "./../utils/shellProvider"
import {handleTabCompletion} from "./../utils/tabCompletion"
import {useTheme} from "./../utils/themeProvider"
import {Ps1} from "./ps1"
import {History} from "./history"

export const ChatComponent = ({inputRef, containerRef}) => {
  // Vercel AI SDK (ai package) useChat()

  const {
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading,
    messages,
  } = useChat()
  // console.log(messages);

  // console.log(input)

  const {theme} = useTheme()
  const [value, setValue] = useState("")
  const {
    setCommand,
    history,
    lastCommandIndex,
    setHistory,
    setLastCommandIndex,
    clearHistory,
  } = useShell()

  useEffect(() => {
    containerRef.current.scrollTo(0, containerRef.current.scrollHeight)
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

    if (event.key === "Tab") {
      event.preventDefault()

      handleTabCompletion(value, setValue)
    }

    if (event.key === "Enter" || event.code === "13") {
      event.preventDefault()

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
  const mixedHistory = [
    ...history,
    ...messages.map((m) => ({
      command: m.role === "user" ? m.content : "",
      output: m.content,
    })),
  ]

  return (
    <div>
      <History history={history} messages={messages} />

      <form className="" onSubmit={handleSubmit}>
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
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !commandExists(value)) {
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
    </div>
  )
}
export default ChatComponent
