"use client"
import React from "react"
import ChatComponent from "../../components/chatComponent"
import RootLayout from "../layout"
import Image from "next/image"

const DiaryPage = ({}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)

  return (
    <div
      ref={containerRef}
      id="yo"
      className="overflow-y-auto h-full p-4 rounded layout"
    >
      <table className="jobs">
        <tr>
          <td className="">
            <Image src="/ed.png" alt="" width={194} height={218} />
          </td>
          <td className="system">
            <h1>Lead Art Director</h1>
            <h2>Send a status email in the evening</h2>
            <p>
              Physical space is often conceived in three linear dimensions,
              although modern physicists usually con
            </p>
            <p>
              Reason your way from basic angle properties to a universal truth
              of triangles.
            </p>
            <p>
              Trace the borders of your understanding by exploring the paths
              around shapes.
            </p>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default DiaryPage
