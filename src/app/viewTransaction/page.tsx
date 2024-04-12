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
import { AssetTable, DeListTable, WhiteListButton } from "@/components/Assets"

import loadingStyles from "../../styles/loading.module.css"
import { Button } from "@mui/material"

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">view Transaction Page</h1>
    </div>
  )
}
