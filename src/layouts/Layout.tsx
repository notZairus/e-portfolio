import React from 'react'
import Header from "@/components/Header.js";
import Particles from "@/components/Particles.tsx";
  
function Layout({ children = <div> </div> }: { children: React.ReactNode }): React.ReactNode {
  return (
    <>
        <div className=" min-h-screen w-full">
          <Header />

          <main className="pt-8 relative">
            <div className="absolute w-full h-full -z-20">
               <Particles
                  particleColors={['#1195b7', '#1c86ac']}
                  particleCount={200}
                  particleSpread={10}
                  speed={0.1}
                  particleBaseSize={150}
                  moveParticlesOnHover={false}
                  alphaParticles={false}
                  disableRotation={false}
                />
            </div>
            { children }
          </main>
        </div>
    </>
  )
}

export default Layout