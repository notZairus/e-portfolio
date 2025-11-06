import Lanyard from "@/components/lanyard/Lanyard.jsx";
import TextType from "@/components/TextType.tsx";
import Particles from "@/components/Particles.tsx";


export default function Home() {
  return (
    <>
        <div className="absolute top-0 w-full h-screen">
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


        <section className="w-full bg-transparent">
            <div className="w-4/5 flex min-h-20 mx-auto items-center gap-12">
                <div className="text-left flex-3 pb-8">
                    <p className="text-2xl mb-2">Hello, I am</p>
                    <TextType 
                        className="text-primary-foreground text-5xl tracking-tighter font-bold mb-4" 
                        text={["Jienelle N. Bautista"]}
                        loop={true}
                        typingSpeed={50}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                    <p className="text-xl tracking-wide">
                    Computer Science student and auditor of ICONS — exploring tech, design, and creative projects.
                    </p>
                </div>  
                
    
                <div className="flex-2">
                    <div className="-mt-32">
                        <Lanyard position={[0, 0, 12]}  />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
