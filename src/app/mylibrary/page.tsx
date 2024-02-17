"use client"
import React from "react"
import "./style.css"
import Image from "next/image"
import InfiniteMenu from "./Infinite"
import Sidebar from "../sideBar"

const DiaryPage = ({}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)

  const menuRef = React.useRef()
  React.useEffect(() => {
    if (window.innerWidth > 760) {
      new InfiniteMenu(document.getElementById("menu"))
    }
  })

  return (
    <>
      <Sidebar />

      <div className="baseline"><span id="lyra">リラ はると</span> <span id="library">My Library</span></div>
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
          <a
            href="https://www.amazon.com/Incerto-Fooled-Randomness-Procrustes-Antifragile/dp/0399590455"
            target="__blank"
            className="menu__item-inner"
          >
            Nassim Taleb
            <Image
              src="/MyLibrary/taleb.webp"
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
              src="/MyLibrary/onliberty.webp"
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
              src="/MyLibrary/roadtoserfdom.webp"
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
          <a
            href="https://www.amazon.com/Picture-Dorian-Gray-Clydesdale-Classics-ebook/dp/B073QZRCM1/ref=sr_1_1?dchild=1&keywords=The+Picture+of+Dorian+Gray&qid=1592737417&sr=8-1&ref=daedalium.com"
            target="__blank"
            className="menu__item-inner"
          >
            Oscar Wilde
            <Image
              src="/MyLibrary/novels/doriangray.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            href="https://www.amazon.com/His-Dark-Materials-Trilogy-Spyglass/dp/B00849DWSQ/ref=pd_lpo_14_t_0/138-8131567-1576343?_encoding=UTF8&pd_rd_i=B00849DWSQ&pd_rd_r=f254a7ef-c7eb-4053-b40d-96a80f5dc19c&pd_rd_w=dh9mg&pd_rd_wg=kTWKA&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=51DX3RR5A49JN95BMC4D&psc=1&refRID=51DX3RR5A49JN95BMC4D&ref=daedalium.com"
            target="__blank"
            className="menu__item-inner"
          >
            Philip Pullman
            <Image
              src="/MyLibrary/novels/goldencompass.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            href="https://www.amazon.com/Swanns-Way-Search-Penguin-Classics/dp/0142437964/ref=sr_1_1?dchild=1&keywords=proust&qid=1592739843&sr=8-1&ref=daedalium.com"
            target="__blank"
            className="menu__item-inner"
          >
            Marcel Proust
            <Image
              src="/MyLibrary/novels/swannsway.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            href="https://www.amazon.com/Epic-Gilgamesh-Penguin-Classics/dp/0140449191/ref=sr_1_2?dchild=1&keywords=gilgamesh&qid=1592739904&sr=8-2&ref=daedalium.com"
            target="__blank"
            id="hello2"
            className="menu__item-inner"
          >
            The Epic of Gilgamesh
            <Image
              src="/MyLibrary/novels/gilgamesh.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            href="https://www.amazon.com/City-Vintage-International-Alessandro-Baricco-ebook/dp/B000XUDGC6/ref=sr_1_5?dchild=1&keywords=alessandro+baricco+city&qid=1592739972&sr=8-5&ref=daedalium.com"
            target="__blank"
            id="hello2"
            className="menu__item-inner"
          >
            Alessandro Baricco
            <Image
              src="/MyLibrary/novels/city.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            href="https://www.amazon.com/Anna-Karenina-Leo-Tolstoy/dp/0143035002/ref=sr_1_1?dchild=1&keywords=Anna+Karenina&qid=1592740296&sr=8-1&ref=daedalium.com"
            target="__blank"
            className="menu__item-inner"
          >
            Leo Tolstoy
            <Image
              src="/MyLibrary/novels/annakarenina.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            href="https://www.amazon.com/Gargantua-Pantagruel-Classics-Francois-Rabelais/dp/0140445501/ref=sr_1_1?dchild=1&keywords=rabelais&qid=1592740277&sr=8-1&ref=daedalium.com"
            target="__blank"
            className="menu__item-inner"
          >
            Rabelais
            <Image
              src="/MyLibrary/novels/gargantua.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            href="https://www.amazon.com/Mythology-Timeless-Heroes-Anniversary-Illustrated/dp/0316438529/ref=sr_1_1?dchild=1&keywords=mythology&qid=1592740348&sr=8-1&ref=daedalium.com"
            target="__blank"
            className="menu__item-inner"
          >
            Edith Hamilton
            <Image
              src="/MyLibrary/novels/timelesstalesofgod.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            href="https://www.amazon.com/Memoirs-Hadrian-Classics-Marguerite-Yourcenar/dp/0374529264/ref=sr_1_1?dchild=1&keywords=memory+of+hadrian&qid=1592740389&sr=8-1&ref=daedalium.com"
            target="__blank"
            className="menu__item-inner"
          >
            Marguerite Yourcenar
            <Image
              src="/MyLibrary/novels/memoirsofhadrian.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            href="https://www.amazon.com/Arabian-Nights-New-Deluxe/dp/0393331660/ref=sr_1_2?dchild=1&keywords=1001+nights&qid=1592740436&sr=8-2&ref=daedalium.com"
            target="__blank"
            className="menu__item-inner"
          >
            Scheherazade 😉
            <Image
              src="/MyLibrary/novels/1001nights.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            href="https://www.amazon.com/Iliad-Odyssey-Leather-bound-Classics-Homer/dp/1607102129/ref=sr_1_1?dchild=1&keywords=homer&qid=1592740503&s=books&sr=1-1&ref=daedalium.com"
            target="__blank"
            className="menu__item-inner"
          >
            Homer{" "}
            <Image
              src="/MyLibrary/novels/Illiadodyssey.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            href="https://www.amazon.com/Foundation-Isaac-Asimov-audiobook/dp/B003IF37TK/ref=sr_1_1?crid=2975M24FQERLH&dchild=1&keywords=foundation+asimov&qid=1592759501&s=books&sprefix=foundation+%2Cstripbooks-intl-ship%2C208&sr=1-1&ref=daedalium.com"
            target="__blank"
            className="menu__item-inner"
          >
            Isaac Asimov
            <Image
              src="/MyLibrary/novels/foundation.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            href="https://www.amazon.com/Man-Who-Sold-Moon-Orphans-ebook/dp/B00ELJZZ24/ref=sr_1_1?dchild=1&keywords=The+Man+Who+Sold+the+Moon&qid=1592759578&s=books&sr=1-1&ref=daedalium.com"
            target="__blank"
            className="menu__item-inner"
          >
            Robert Heinlein
            <Image
              src="/MyLibrary/novels/themanwhosoldthemoon.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            href="https://www.amazon.com/Collected-Fictions-Jorge-Luis-Borges/dp/0140286802/ref=sr_1_1?dchild=1&keywords=fictions&qid=1592759643&s=books&sr=1-1&ref=daedalium.com"
            target="__blank"
            className="menu__item-inner"
          >
            Borges
            <Image
              src="/MyLibrary/novels/collectedfictions.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            href="https://www.amazon.com/Masterpiece-Oxford-Worlds-Classics/dp/0199536910/ref=sr_1_1?dchild=1&keywords=zola&qid=1592760133&s=books&sr=1-1&ref=daedalium.com"
            target="__blank"
            className="menu__item-inner"
          >
            Zola
            <Image
              src="/MyLibrary/novels/zola.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a
            href="https://www.amazon.com/Father-Goriot-P%C3%A8re-Classic-Illustrated-ebook/dp/B00PSDX84E/ref=sr_1_1?dchild=1&keywords=balzac+rastignac&qid=1592760190&s=books&sr=1-1&ref=daedalium.com"
            target="__blank"
            className="menu__item-inner"
          >
            Balzac
            <Image
              src="/MyLibrary/novels/honoredebalzac.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>

        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Norbert Wiener
            <Image
              src="/MyLibrary/bio/wierner.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>

        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Simone de Beauvoir
            <Image
              src="/MyLibrary/bio/simonedebeauvoir.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>

        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Alberto Manguel
            <Image
              src="/MyLibrary/bio/mythical.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            A Beautiful Mind
            <Image
              src="/MyLibrary/bio/beautifullmind.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Alan Turing: The Enigma{" "}
            <Image
              src="/MyLibrary/bio/alanturning.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Alexander Hamilton{" "}
            <Image
              src="/MyLibrary/bio/hamilton.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Napoleon: A Life{" "}
            <Image
              src="/MyLibrary/bio/napoleon.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Steve Jobs
            <Image
              src="/MyLibrary/bio/jobs.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Leonardo da Vinci
            <Image
              src="/MyLibrary/bio/davinci.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Marie-Antoinette
            <Image
              src="/MyLibrary/bio/marieantoinette.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Magellan
            <Image
              src="/MyLibrary/bio/magellan.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Warren Buffett
            <Image
              src="/MyLibrary/bio/buffet.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            J.P Morgan
            <Image
              src="/MyLibrary/bio/jpmorgan.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Jack Welch
            <Image
              src="/MyLibrary/bio/jackwelch.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Jeff Bezos
            <Image
              src="/MyLibrary/bio/bezos.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Jack Ma
            <Image
              src="/MyLibrary/bio/jackma.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Creativity, Inc.
            <Image
              src="/MyLibrary/bio/pixar.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Jay-Z
            <Image
              src="/MyLibrary/bio/jay.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Richard Branson
            <Image
              src="/MyLibrary/bio/branson.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>

        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Novecento The Pianist
            <Image
              src="/MyLibrary/movies/novecento.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Remember The Titans
            <Image
              src="/MyLibrary/movies/remembertitans.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Beaumarchais l’Insolent
            <Image
              src="/MyLibrary/movies/beaumarchais.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Ratatouille
            <Image
              src="/MyLibrary/movies/ratatouille.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            M
            <Image
              src="/MyLibrary/movies/m.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            12 Angry Men
            <Image
              src="/MyLibrary/movies/12angry.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            The Godfather
            <Image
              src="/MyLibrary/movies/godfather.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Barry Lyndon
            <Image
              src="/MyLibrary/movies/barrylyndon.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            2001 The Space Odyssey
            <Image
              src="/MyLibrary/movies/2001space.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Gattaca
            <Image
              src="/MyLibrary/movies/gattaca.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Aladdin
            <Image
              src="/MyLibrary/movies/aladdin.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Amadeus
            <Image
              src="/MyLibrary/movies/amadeus.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            House of Flying Daggers
            <Image
              src="/MyLibrary/movies/flyingdaggers.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Gladiator
            <Image
              src="/MyLibrary/movies/gladiator.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Good Will Hunting
            <Image
              src="/MyLibrary/movies/willhunting.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Forrest Gump
            <Image
              src="/MyLibrary/movies/forest.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Dead Poets Society
            <Image
              src="/MyLibrary/movies/deadpoets.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Lawrence of Arabia
            <Image
              src="/MyLibrary/movies/lawrence.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            All the Marvel 😉{" "}
            <Image
              src="/MyLibrary/movies/marvel.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Any Terence Malek{" "}
            <Image
              src="/MyLibrary/movies/malek.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>

        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Jiro Dreams of Sushi{" "}
            <Image
              src="/MyLibrary/docs/jirodreams.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Behind the Curve{" "}
            <Image
              src="/MyLibrary/docs/behindthecurve.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Fyre Festival{" "}
            <Image
              src="/MyLibrary/docs/fyre.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Life, Animated{" "}
            <Image
              src="/MyLibrary/docs/animated.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            The times of Harvey Milk{" "}
            <Image
              src="/MyLibrary/docs/harveymilk.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Exit Through The Gift Shop{" "}
            <Image
              src="/MyLibrary/docs/exitthrough.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            Chef’s Table{" "}
            <Image
              src="/MyLibrary/docs/cheftable.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            The Final Year{" "}
            <Image
              src="/MyLibrary/docs/thefinalyear.webp"
              alt="ogien cover"
              width={256}
              height={256}
              className="hover-image"
            />
          </a>
        </div>
        <div className="menu__item">
          <a href="" target="__blank" className="menu__item-inner">
            I am not your Guru{" "}
            <Image
              src="/MyLibrary/docs/tonyrobbins.webp"
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
