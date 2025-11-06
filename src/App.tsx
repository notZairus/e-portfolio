import React from 'react'
import Header from "@/components/Header.js";
import Home from "@/pages/Home.tsx";
import About from "@/pages/About.tsx";
import Contact from "@/pages/Contact.tsx";
import { Route } from "wouter";
import ClickSpark from "@/components/ClickSpark";


function App(): React.ReactNode {
  return (
    <>
        <div className=" min-h-screen w-full">
          <Header />
          <ClickSpark
            sparkColor='#1195b7'
            sparkSize={16}
            sparkRadius={32}
            sparkCount={16}
            duration={600}
          >
            <main className="pt-20 relative">
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </main>
          </ClickSpark>
        </div>
    </>
  )
}

export default App