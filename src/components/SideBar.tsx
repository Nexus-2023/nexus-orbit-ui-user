import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  TwitterIcon,
  LanguageIcon,
  ExpandMoreIcon,
} from "../../public/Icons/icons"

import { usePathname } from "next/navigation"

export const SideBar = () => {
  const pathname = usePathname()
  console.log("patname", pathname)

  return (
    <div className="bg-primary text-white relative  font-semibold   min-w-full  w-64  h-[100vh] min-h-full flex-col flex   items-center">
      <div className="p-8">
        <Link href={"/"}>
          <Image
            src="/Images/nexusLogo1.png"
            alt="logo"
            width={100}
            height={100}
            className="-ml-2 mt-5"
          />
        </Link>
      </div>

      <div className="space-y-6  flex flex-col mt-8 ">
        <Link href={"/"}>
          <h1
            className={`text-md px-4 py-2 ${
              pathname === "/"
                ? "text-primary bg-white"
                : "hover:text-primary hover:bg-white"
            } ease-in-out duration-300 rounded-md`}
          >
            {" "}
            Change Limits
          </h1>
        </Link>

        <Link href={"/whitelist"}>
          <h1
            className={`text-md px-4 py-2 ${
              pathname === "/whitelist"
                ? "text-primary bg-white"
                : "hover:text-primary hover:bg-white"
            } ease-in-out duration-300 rounded-md`}
          >
            {" "}
            Whitelist/Delist
          </h1>
        </Link>
      </div>

      <div className="space-x-4  flex  absolute  bottom-10 left-16 ">
        <div className="hover:scale-125  ease-in-out duration-300">
          <Link href={"https://twitter.com/_Nexus_Network"} target="_blank">
            <TwitterIcon sx={{ fontSize: 30 }} />
          </Link>
        </div>

        <div className="hover:scale-125 scal ease-in-out duration-300">
          <Link href={"https://nexusnetwork.co.in/"} target="_blank">
            <LanguageIcon sx={{ fontSize: 30 }} />
          </Link>
        </div>
      </div>
    </div>
  )
}
