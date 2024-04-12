"use client"

import Image from "next/image"
import { StyledButton1, StyledButton2 } from "@/components/button"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import anime from "animejs/lib/anime.es.js"
import CssTextField from "@/components/TextField"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"

import { connectNexus } from "@/utils/connectContract"
import { useRouter, useParams } from "next/navigation"
import { AssetTable } from "@/components/Assets"

import loadingStyles from "../styles/loading.module.css"

export default function Home() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount()

  const whitelisted = [
    "0x8a770B7700f941Bb2E6Dd023AD3B22c2c41C5901",
    "0xE4Cb6F91Cf8748F3FD0c9D281157b276DD437609",
  ]

  const isWhitelisted = address !== undefined && whitelisted.includes(address)
  console.log("isWhitelisted", isWhitelisted)

  // const elementsRef = useRef<any[]>([])

  // const elementsWalletRef = useRef<any[]>([])

  // const elementsWalletRef2 = useRef<any[]>([])

  // const elementsRef = useRef<
  //   Array<HTMLHeadingElement | HTMLDivElement | null | undefined>
  // >([])
  // const elementsWalletRef = useRef<
  //   Array<HTMLHeadingElement | HTMLDivElement | null | undefined>
  // >([])
  // const elementsWalletRef2 = useRef<
  //   Array<HTMLHeadingElement | HTMLDivElement | null | undefined>
  // >([])

  const elementsRef = useRef<Array<HTMLElement | null>>([])
  const elementsWalletRef = useRef<Array<HTMLElement | null>>([])
  const elementsWalletRef2 = useRef<Array<HTMLElement | null>>([])

  console.log("Admin address ", address)

  useEffect(() => {
    if (
      elementsWalletRef.current &&
      elementsWalletRef.current.length > 0 &&
      elementsWalletRef
    ) {
      const targets = elementsWalletRef.current.filter(element => element)
      anime.timeline({ loop: false }).add({
        targets: targets,
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(250, { easing: "easeOutSine" }),
      })
    }
  }, [isConnected])

  useEffect(() => {
    if (
      elementsWalletRef2.current &&
      elementsWalletRef2.current.length > 0 &&
      elementsWalletRef2
    ) {
      const targets = elementsWalletRef2.current.filter(element => element)
      anime.timeline({ loop: false }).add({
        targets: targets,
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(250, { easing: "easeOutSine" }),
      })
    }
  }, [isConnected])

  useEffect(() => {
    if (elementsRef.current) {
      const targets = elementsRef.current.filter(element => element)
      anime.timeline({ loop: false }).add({
        targets: targets,
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: anime.stagger(250, { easing: "easeOutSine" }),
      })
    }
  }, [])

  return (
    <div className="  flex flex-col   justify-start   min-h-[80vh]  w-[75vw] container m-16">
      {/* display ui when wallet is not connected */}
      {isConnected === false ? (
        <>
          <div className="  flex flex-col w-full items-center justify-center mt-12">
            <h1
              className="text-[2.5rem] font-black  "
              // @ts-ignore
              ref={el => (elementsRef.current[0] = el)}
            >
              Admin Page{" "}
            </h1>
            <h1
              className="text-lg font-light mt-4 "
              // @ts-ignore
              ref={el => (elementsRef.current[1] = el)}
            >
              connect your wallet to get started{" "}
            </h1>

            <div
              // @ts-ignore
              ref={el => (elementsRef.current[2] = el)}
            >
              <Image
                src={"/Images/MetamaskLogo.svg"}
                width={200}
                height={200}
                alt="metamask logo"
                className="mt-8 mb-8"
              />
            </div>

            <div
              // @ts-ignore
              ref={el => (elementsRef.current[3] = el)}
            >
              <ConnectButton />
            </div>
          </div>
        </>
      ) : (
        <>
          {isConnecting && (
            <>
              <div className=" w-[82vw] flex h-[100vh] flex-col  justify-center items-center">
                <div>
                  {" "}
                  <div className={loadingStyles.loader}>
                    <div className={loadingStyles.loader__bar}></div>
                    <div className={loadingStyles.loader__bar}></div>
                    <div className={loadingStyles.loader__bar}></div>
                    <div className={loadingStyles.loader__bar}></div>
                    <div className={loadingStyles.loader__bar}></div>
                    <div className={loadingStyles.loader__ball}></div>
                  </div>
                </div>

                <div className="text-3xl text-black mt-3">Loading</div>
              </div>
            </>
          )}
          <>
            <div className=" absolute top-5 right-5 ">
              <ConnectButton />
            </div>

            <div className="flex flex-col  space-y-4 mt-8">
              <h1 className="text-7xl  text-black font-semibold">
                Bridging Assets
              </h1>

              <h1 className="text-lg  text-gray-500 font-medium">
                ETH associated assets in native bridge
              </h1>
            </div>

            <AssetTable />
          </>
          {/* {isWhitelisted ? (
            <>
              <div className=" absolute top-5 right-5 ">
                <ConnectButton />
              </div>

              <div className="flex flex-col  space-y-4 mt-8">
                <h1 className="text-7xl  text-black font-semibold">
                  Bridging Assets
                </h1>

                <h1 className="text-lg  text-gray-500 font-medium">
                  ETH associated assets in native bridge
                </h1>
              </div>

              <AssetTable />
            </>
          ) : (
            <>
              <div className=" absolute top-5 right-5 ">
                <ConnectButton />
              </div>
              <div className="flex justify-center mt-16 ">
                <h1 className="text-4xl font-semibold ">Not Admin</h1>
              </div>
            </>
          )} */}
        </>
      )}
    </div>
  )
}
