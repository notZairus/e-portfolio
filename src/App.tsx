import React from 'react'
import Header from "@/components/Header.js";
import Home from "@/pages/Home.tsx";
import About from "@/pages/About.tsx";
import { Route } from "wouter";


function App(): React.ReactNode {
  return (
    <>
        <div className=" min-h-screen w-full">
          <Header />

          <main className="pt-20 relative">
          
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
          
          </main>
        </div>
    </>
  )
}

export default App