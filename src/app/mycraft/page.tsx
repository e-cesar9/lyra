"use client"
import React from "react"
import ChatComponent from "../../components/chatComponent"
import {useConfirmContext} from "../../components/context/ConfirmContext"
import Layout from "../../components/layout/Layout"
import Sidebar from "../sideBar"
import "./style.css"

const CraftPage = ({}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)
  const {showConfirmation, setShowConfirmation} = useConfirmContext()

  const handleConfirmationResponse = (confirm) => {
    setShowConfirmation(false) // Hide confirmation dialog in all cases

    if (confirm === true) {
      window.location.reload()
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

  var comming = `
     ::::::::   ::::::::  ::::    ::::  ::::::::::: ::::    :::  ::::::::        ::::::::   ::::::::   ::::::::  ::::    ::: 
    :+:    :+: :+:    :+: +:+:+: :+:+:+     :+:     :+:+:   :+: :+:    :+:      :+:    :+: :+:    :+: :+:    :+: :+:+:   :+: 
    +:+        +:+    +:+ +:+ +:+:+ +:+     +:+     :+:+:+  +:+ +:+             +:+        +:+    +:+ +:+    +:+ :+:+:+  +:+ 
    +#+        +#+    +:+ +#+  +:+  +#+     +#+     +#+ +:+ +#+ :#:             +#++:++#++ +#+    +:+ +#+    +:+ +#+ +:+ +#+ 
    +#+        +#+    +#+ +#+       +#+     +#+     +#+  +#+#+# +#+   +#+#             +#+ +#+    +#+ +#+    +#+ +#+  +#+#+# 
    #+#    #+# #+#    #+# #+#       #+#     #+#     #+#   #+#+# #+#    #+#      #+#    #+# #+#    #+# #+#    #+# #+#   #+#+# 
     ########   ########  ###       ### ########### ###    ####  ########        ########   ########   ########  ###    ####... `

  var com = `
 ____ ____ _  _ _ _  _ ____ 
 |    |  | |\\/| | |\\ | | __ 
 |___ |__| |  | | | \\| |__] 
                            `

  var soon = `
    ____ ____ ____ _  _ 
    [__  |  | |  | |\\ | 
    ___] |__| |__| | \\| 
                        `

  var coming = `
    _______  _____  _______ _____ __   _  ______      _______  _____   _____  __   _
    |       |     | |  |  |   |   | \\  | |  ____      |______ |     | |     | | \\  |
    |_____  |_____| |  |  | __|__ |  \\_| |_____|      ______| |_____| |_____| |  \\_|
                                                                                    `

  return (
    <>
      <Sidebar />
      <Layout>
        <div className="flex justify-center align-middle items-center h-full w-full whitespace-pre -mt-8 lyratitle desk">
          {coming}{" "}
        </div>
        <div className="flex justify-center align-middle items-center h-full w-full whitespace-pre -mt-8 lyratitle mob">
          {com}
          {soon}{" "}
        </div>
      </Layout>
    </>
  )
}

export default CraftPage
