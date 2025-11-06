import LogoLoop from "@/components/LogoLoop";
import PixelTransition from "@/components/PixelTransition.tsx";
import { SiFacebook, SiInstagram } from 'react-icons/si';
import {
  Card
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


const socials = [
  {
    link: '#',
    name: '#',
    icon: '#'
  },
  {
    link: '#',
    name: '#',
    icon: '#'
  },
  {
    link: '#',
    name: '#',
    icon: '#'
  },
  {
    link: '#',
    name: '#',
    icon: '#'
  },
]

const techLogos = [
  { node: <SiFacebook />, title: "Facebook", href: "https://www.facebook.com/jienelle.bautista.2024" },
  { node: <SiInstagram />, title: "Instagram", href: "https://www.instagram.com/_itsxjie/" },
];



export default function Contact() {
  return (
    <>
        <section className="w-full">
            <div className="w-4/5 min-h-20 mx-auto py-8">
              <h1 className="text-5xl font-bold ">Contact</h1>
              <div className="rounded-xl w-full mt-8 overflow-hidden ">
                <div>
                  <LogoLoop
                    logos={techLogos}
                    speed={60}
                    direction="left"
                    logoHeight={60}
                    gap={60}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Social Media Links"
                  />
                </div>
              </div>

              <div className=" flex flex-col md:flex-row mt-8 gap-8">
                <div className="flex-1">
                  <div>
                    <PixelTransition
                      firstContent={
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                          alt="default pixel transition content, a cat!"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      }
                      secondContent={
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "#111"
                          }}
                        >
                          <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
                        </div>
                      }
                      gridSize={12}
                      pixelColor='#ffffff'
                      once={false}
                      animationStepDuration={0.4}
                      className="custom-pixel-card w-full"
                    />
                  </div>
                </div>
                <div className="flex-2 flex items-center justify-center md:border-l-2 border-t-2 md:border-t-0">
                  
                </div>
              </div>
            </div>
        </section>
    </>
  )
}




export function CardDemo() {
  return (
    <Card className="w-full h-full">

    </Card>
  )
}