"use client"

import Header from "@/components/Header"
import {CountProvider } from "@/contexts/CountContext"
import { useState } from "react"

const Home = () => {
  
  
  return (
    <main className="container mx-auto">
      <CountProvider>
        <Header />
      </CountProvider>
   
    </main>
  )
}

export default Home