"use client"
import React from "react"
import ChatComponent from "../../components/chatComponent"
import {useConfirmContext} from "../../components/context/ConfirmContext"

const DiaryPage = ({}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)
  const {showConfirmation, setShowConfirmation} = useConfirmContext()

  const handleConfirmationResponse = (confirm) => {
    setShowConfirmation(false) // Hide confirmation dialog in all cases

    if (confirm === true) {
    }
  }

  const ShowConfirm = ({handleConfirmationResponse}) => (
    <div className="confirmation-dialog fixed z-1 bg-white">
      <p className="pb-4">Everything not saved will be lost.</p>
      <div className="flex justify-around">
        <button onClick={() => handleConfirmationResponse(true)}>Yes</button>
        <button onClick={() => handleConfirmationResponse(false)}>Yes</button>
      </div>
    </div>
  )

  return (
    <>
      {showConfirmation && (
        <ShowConfirm handleConfirmationResponse={handleConfirmationResponse} />
      )}
      <div
        ref={containerRef}
        id="yo"
        className="overflow-y-auto h-full p-4 rounded layout"
      >
        <ChatComponent inputRef={inputRef} containerRef={containerRef} />
      </div>
    </>
  )
}

export default DiaryPage
