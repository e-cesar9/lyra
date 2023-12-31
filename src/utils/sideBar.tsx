/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, {useEffect, useRef, useState} from "react"
import {Fragment} from "react"
import {Menu, Transition} from "@headlessui/react"
import Image from "next/image"
import {Item} from "./effect/BtnEffect"
import "./effect/BtnEffect.css"
import Link from "next/link"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

function Example() {
  const hoverRef = useRef(null)
  useEffect(() => {
    if (hoverRef.current) {
      new Item(hoverRef.current)
    }
  }, [])
  return (
    <Menu
      as="div"
      className="absolute w-9/10 mx-auto mt-3 left-0 right-0 inline-block text-left"
    >
      <div className="item">
        <Menu.Button className="inline-flex w-full rounded-md justify-center gap-x-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-white-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <a className="img" ref={hoverRef}>
            <div className="grid__item-img-deco"></div>
            <p className="want">Want more ? </p>
          </a>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="fond absolute right-0 dark bottom-full z-10 mb-2 w-full origin-bottom-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({active}) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm",
                  )}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({active}) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm",
                  )}
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

type Link = {
  originalText: string
  emoji: string
  ref: React.RefObject<HTMLParagraphElement>
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
}

function Sidebar() {
  const linksData = [
    {originalText: "#Me", emoji: "😜"},
    {originalText: "My Craft", emoji: "🤖"},
    {originalText: "My Diary", emoji: "👩‍🦳"},
    {originalText: "My Library", emoji: "👾"},
    {originalText: "Your Fate", emoji: "🦄"},
    {originalText: "Don't Be Shy", emoji: "😉"},
  ]

  // Create a ref and a state for each link
  const links: Link[] = linksData.map((linkData) => {
    const ref = useRef<HTMLParagraphElement>(null)
    const [text, setText] = useState(linkData.originalText)
    return {...linkData, ref, text, setText}
  })

  const handleMouseOverRef = useRef(null)

  useEffect(() => {
    handleMouseOverRef.current = (e) => {
      const link = links.find((l) => l.ref.current === e.currentTarget)
      if (link) {
        const textLength = link.text.length
        link.setText(getRandomString(textLength))
        setTimeout(() => link.setText(getRandomString(textLength)), 100)
        setTimeout(() => link.setText(getRandomString(textLength)), 200)
        setTimeout(() => link.setText(link.originalText), 400)
      }
    }

    links.forEach((link) => {
      const linkElement = link.ref.current
      if (linkElement) {
        linkElement.addEventListener("mouseover", handleMouseOverRef.current)
      }
    })

    return () => {
      links.forEach((link) => {
        const linkElement = link.ref.current
        if (linkElement) {
          linkElement.removeEventListener(
            "mouseover",
            handleMouseOverRef.current,
          )
        }
      })
    }
  }, [links])

  function getRandomString(length: number) {
    let result = ""
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }

  return (
    <div
      className="sidebar dark flex-shrink-0 overflow-x-hidden overflow-y-auto bg-black"
      id="sidebar"
    >
      <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
        <nav className="flex h-full w-full flex-col pb-3.5 justify-between">
          <div className="relative px-2 pt-2 text-s font-medium text-ellipsis break-all bg-white dark:bg-black text-gizmo-gray-600">
            <div>
              <Image
                src="/Logo.png"
                className="Lyra px-2"
                alt=""
                width={194}
                height={218}
              />
            </div>

            <div
              className="relative pb-2 pt-3 px-2 text-s font-medium text-ellipsis break-all bg-white dark:bg-black text-gizmo-gray-600 break-words text-justify"
              id="paragraphe"
            >
              As AI-born storytellers, The Lyra Haruto Company craft tales that
              reshape reality. Our stories live vividly in the imagination.
              We&apos;re actively looking for singularities.
            </div>
          </div>

          <div className="py-3 mb-6">
            {links.map((link, index) => (
              <div key={index} className="group relative active:opacity-90">
                <Link
                  href="/Me"
                  className="flex items-center gap-2 rounded-lg p-2"
                >
                  <div
                    ref={link.ref}
                    className="relative grow overflow-hidden whitespace-nowrap"
                  >
                    <p className="linkT">{link.text}</p>
                    <div className="absolute bottom-0 right-0 top-0 w-8 bg-gradient-to-l to-transparent from-token-surface-primary group-hover:from-token-surface-primary dark:from-black">
                      {link.emoji}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <Example />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
