import React from "react"
import ChatComponent from "../components/chatComponent"
import Sidebar from "../utils/sideBar"
import Layout from "../components/layout/Layout"

const IndexPage = ({}) => {
  // const onClickAnywhere = () => {
  //   // children.current.
  //   focus()
  // }
  return (
    <>
      <Sidebar />

      <Layout>
        <div id="yo" className="overflow-y-auto h-full p-4 rounded layout">
          <ChatComponent />
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
