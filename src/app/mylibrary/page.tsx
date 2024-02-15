"use client"
import React from "react"
import ChatComponent from "../../components/chatComponent"
import RootLayout from "../layout"
import "./style.css"
import Image from "next/image"
import InfiniteMenu from "./Infinite"
import Sidebar from "../sideBar"

const DiaryPage = ({}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)

  const menuRef = React.useRef()
  React.useEffect(() => {
    new InfiniteMenu(document.getElementById("menu"))
  })

  return (
    <>
      <Sidebar />

      <nav id="menu" className="menu" ref={menuRef}>
        <div className="menu__item">
          <a
            target="__blank"
            href="http://amzn.to/2voXfgW?ref=daedalium.com"
            className="menu__item-inner"
          >
            Bertrand Russel
            <Image
              src="/MyLibrary/russel.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a target="__blank" className="menu__item-inner">
            Nassim Taleb
            <Image
              src="/MyLibrary/ogien.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            target="__blank"
            href="http://amzn.to/2vpg1oE?ref=daedalium.com"
            className="menu__item-inner"
          >
            Marcus Aurelius
            <Image
              src="/MyLibrary/marcaurele.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            target="__blank"
            href="http://sacred-texts.com/cla/ari/index.htm?ref=daedalium.com"
            className="menu__item-inner"
          >
            Aristote
            <Image
              src="/MyLibrary/aristote.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            target="__blank"
            href="http://amzn.to/2voUlsu?ref=daedalium.com"
            className="menu__item-inner"
          >
            Emmanuel Kant
            <Image
              src="/MyLibrary/kant.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            target="__blank"
            href="http://amzn.to/2hLodMC?ref=daedalium.com"
            className="menu__item-inner"
          >
            Niccolò Machiavelli
            <Image
              src="/MyLibrary/machiavel.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            target="__blank"
            href="http://amzn.to/2vHr1QF?ref=daedalium.com"
            className="menu__item-inner"
          >
            David Hume
            <Image
              src="/MyLibrary/hume.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            target="__blank"
            href="http://amzn.to/2vp5CJD?ref=daedalium.com"
            className="menu__item-inner"
          >
            Mulla Sadra
            <Image
              src="/MyLibrary/mullasadra.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            target="__blank"
            href="https://www.amazon.com/Etienne-Boetie/dp/1610161238/ref=sr_1_1?dchild=1&keywords=de+la+boetie&qid=1592736495&sr=8-1&ref=daedalium.com"
            className="menu__item-inner"
          >
            de La Boetie
            <Image
              src="/MyLibrary/delaboetie.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            target="__blank"
            href="https://www.amazon.com/Cybernetics-Second-Control-Communication-Machine/dp/1614275025/ref=sr_1_1?dchild=1&keywords=norbert+wiener&qid=1592736541&sr=8-1&ref=daedalium.com"
            className="menu__item-inner"
          >
            Norbert Wiener
            <Image
              src="/MyLibrary/wiener.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            target="__blank"
            href="https://www.amazon.com/Philosophical-Investigations-Ludwig-Wittgenstein/dp/1405159286/ref=sr_1_1?crid=3GQ8OIUBGBVIY&dchild=1&keywords=wittgenstein&qid=1592736604&sprefix=wittgen%2Caps%2C212&sr=8-1&ref=daedalium.com"
            className="menu__item-inner"
          >
            Ludwig Wittgenstein
            <Image
              src="/MyLibrary/wittgenstein.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            target="__blank"
            href="https://www.amazon.com/Liberty-John-Stuart-Mill-ebook/dp/B004UJ8LVM/ref=sr_1_3?crid=2T5FMNDDWMKU5&dchild=1&keywords=on+liberty+by+john+stuart+mill&qid=1592736665&sprefix=on+liberty%2Caps%2C200&sr=8-3&ref=daedalium.com"
            id="hello1"
            className="menu__item-inner"
          >
            John Stuart Mills
            <Image
              src="/MyLibrary/ogien.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            target="__blank"
            href="https://www.amazon.com/Road-Serfdom-Documents-Definitive-Collected/dp/0226320553/ref=sr_1_1?dchild=1&keywords=hayek&qid=1592736796&sr=8-1&ref=daedalium.com"
            className="menu__item-inner"
          >
            Friedrich Von Hayek
            <Image
              src="/MyLibrary/ogien.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            target="__blank"
            href="https://www.amazon.com/Structure-Scientific-Revolutions-50th-Anniversary/dp/0226458121/ref=sr_1_1?dchild=1&keywords=thomas+khun&qid=1592736960&sr=8-1&ref=daedalium.com"
            className="menu__item-inner"
          >
            Thomas Khun
            <Image
              src="/MyLibrary/khun.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            target="__blank"
            href="https://www.amazon.com/Open-Society-Its-Enemies-One/dp/B082BF4JXF/ref=sr_1_1?dchild=1&keywords=karl+popper&qid=1592737018&sr=8-1&ref=daedalium.com"
            className="menu__item-inner"
          >
            Karl Popper
            <Image
              src="/MyLibrary/popper.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            target="__blank"
            href="https://www.amazon.com/gp/product/B00UCC69D8/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i0?ref=daedalium.com"
            className="menu__item-inner"
          >
            Ruwen Ogien
            <Image
              src="/MyLibrary/ogien.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a target="__blank" className="menu__item-inner">
            Whenever Whatever
            <Image
              src="/MyLibrary/ogien.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a target="__blank" className="menu__item-inner">
            Feathers of Babel
            <Image
              src="/MyLibrary/ogien.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a target="__blank" className="menu__item-inner">
            Golden Freckles
            <Image
              src="/MyLibrary/ogien.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a target="__blank" id="hello2" className="menu__item-inner">
            Schizophrenia House
          </a>
        </div>
        <div className="menu__item">
          <a target="__blank" className="menu__item-inner">
            Foundation Fabrics
            <Image
              src="/MyLibrary/ogien.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a target="__blank" className="menu__item-inner">
            Whenever Whatever
            <Image
              src="/MyLibrary/ogien.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a target="__blank" className="menu__item-inner">
            Feathers of Babel
            <Image
              src="/MyLibrary/ogien.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a target="__blank" className="menu__item-inner">
            Golden Freckles
            <Image
              src="/MyLibrary/ogien.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
      </nav>
    </>
  )
}

export default DiaryPage
