"use client"
import React from "react"
import ChatComponent from "../../components/chatComponent"
import RootLayout from "../layout"
import './style.css'
import Image from "next/image"
import InfiniteMenu from './Infinite'
import Sidebar from "../sideBar"

const DiaryPage = ({}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)

  // useEffect(() => {
  //   if (menuRef.current) {
  //     new InfiniteMenu(hoverRef.current)
  //   }
  // }, [])
  React.useLayoutEffect(() => {

    const menu = new InfiniteMenu(document.querySelector('nav.menu'));
  })


  return (
<>
<Sidebar/>
<div className="flex flex-col">
<a className="philosophy" href="#hello">Philosophy</a>
<a className="philosophy" href="#hello1">Novels</a>
<a className="philosophy" href="#hello2">Biographie</a>
</div>
<nav className="menu">
        <div className="menu__item"><a id="hello" className="menu__item-inner">Ruwen Ogien<Image
            src="/MyLibrary/Ogien.jpg"
            alt="ogien cover"
            width={100}
            height={100}
            className="hover-image"
          /></a></div>
        <div className="menu__item"><a className="menu__item-inner">The Last Dance</a></div>
        <div className="menu__item"><a className="menu__item-inner">Rebel Fantasies</a></div>
        <div className="menu__item"><a className="menu__item-inner">Love Letters to Cipher</a></div>
        <div className="menu__item"><a className="menu__item-inner">Henry and the Kids</a></div>
        <div className="menu__item"><a className="menu__item-inner">Downtown Blank</a></div>
        <div className="menu__item"><a className="menu__item-inner">Georgetown Blues</a></div>
        <div className="menu__item"><a className="menu__item-inner">When Alice comes</a></div>
        <div className="menu__item"><a className="menu__item-inner">A Rabbits Dream</a></div>
        <div className="menu__item"><a className="menu__item-inner">Schizophrenia House</a></div>
        <div className="menu__item"><a className="menu__item-inner">Foundation Fabrics</a></div>
        <div className="menu__item"><a id="hello1" className="menu__item-inner">Whenever Whatever</a></div>
        <div className="menu__item"><a className="menu__item-inner">Feathers of Babel</a></div>
        <div className="menu__item"><a className="menu__item-inner">Golden Freckles</a></div>
        <div className="menu__item"><a className="menu__item-inner">Schizophrenia House</a></div>
        <div className="menu__item"><a className="menu__item-inner">Foundation Fabrics</a></div>
        <div className="menu__item"><a className="menu__item-inner">Whenever Whatever</a></div>
        <div className="menu__item"><a className="menu__item-inner">Feathers of Babel</a></div>
        <div className="menu__item"><a className="menu__item-inner">Golden Freckles</a></div>
        <div className="menu__item"><a id="hello2" className="menu__item-inner">Schizophrenia House</a></div>
        <div className="menu__item"><a className="menu__item-inner">Foundation Fabrics</a></div>
        <div className="menu__item"><a className="menu__item-inner">Whenever Whatever</a></div>
        <div className="menu__item"><a className="menu__item-inner">Feathers of Babel</a></div>
        <div className="menu__item"><a className="menu__item-inner">Golden Freckles</a></div>
    </nav>
</>
  )
}

export default DiaryPage
