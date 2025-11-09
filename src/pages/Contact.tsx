import LogoLoop from "@/components/LogoLoop";
import PixelTransition from "@/components/PixelTransition.tsx";
import { SiFacebook, SiInstagram } from 'react-icons/si';
import {
  Card
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


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

              <h1 className="text-5xl font-bold">Contact Me <span className="-ml-2 leading-0 text-primary text-[100px] font-bold">.</span></h1>
              <Separator className="my-4" />

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
                          src="/formal.jpeg"
                          alt="default pixel transition content, a cat!"
                          className=" object-cover"
                        />
                      }
                      secondContent={
                        <div
                          className="w-full h-full grid place-items-center bg-primary"
                        >
                          <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>
                            Contact Me!
                          </p>
                        </div>
                      }
                      gridSize={12}
                      pixelColor='#ffffff'
                      once={false}
                      animationStepDuration={0.4}
                      className="custom-pixel-card w-full hover:shadow-xl hover:shadow-primary/30 transition"
                    />
                  </div>
                </div>
                <div className="flex-2 flex items-start justify-center md:border-l-2 border-t-2 md:border-t-0">
                  <Card className="w-full ml-0 md:ml-8 p-4 md:p-8 hover:shadow-xl hover:shadow-primary/30 transition">
                      <form
                        className="space-y-4 "
                        onSubmit={(e) => {
                          e.preventDefault();
                          const fd = new FormData(e.currentTarget as HTMLFormElement);
                          const name = fd.get("name")?.toString() ?? "";
                          const email = fd.get("email")?.toString() ?? "";
                          const message = fd.get("message")?.toString() ?? "";
                          const subject = encodeURIComponent("Contact from Portfolio");
                          const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
                          // replace with your target email
                          window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
                        }}
                      >
                        <div>
                          <Label htmlFor="name" className="text-md">Name</Label>
                          <Input id="name" name="name" placeholder="Your name" required />
                        </div>

                        <div>
                          <Label htmlFor="email" className="text-md">Email</Label>
                          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                        </div>

                        <div>
                          <Label htmlFor="message" className="text-md">Message</Label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            className="w-full mt-1 rounded-md border border-input px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Write your message..."
                          />
                        </div>

                        <div className="flex justify-end">
                          <Button
                            type="submit"
                            size="lg"
                            className="text-white hover:scale-105 cursor-pointer"
                          > 
                            Send Message
                          </Button>
                        </div>
                      </form>
                  </Card>
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