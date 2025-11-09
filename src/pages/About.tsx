import DomeGallery from "@/components/DomeGallery.tsx";
import { SiFacebook, SiInstagram } from 'react-icons/si';
import {
  Card
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"

const techLogos = [
  { node: <SiFacebook />, title: "Facebook", href: "https://www.facebook.com/jienelle.bautista.2024" },
  { node: <SiInstagram />, title: "Instagram", href: "https://www.instagram.com/_itsxjie/" },
];



export default function About() {
  return (
    <>
        <section className="w-full">
            <div className="w-4/5 min-h-20 mx-auto py-8">

              <h1 className="text-5xl font-bold">About Me <span className="-ml-2 leading-0 text-primary text-[100px] font-bold">.</span></h1>
              <Separator className="my-4 mb-8" />

              <div className="flex flex-col md:flex-row gap-8 ">
                <div className="space-y-6 flex-2">
                  
                  <div className="shadow-lg hover:shadow-2xl hover:scale-110 hover:shadow-primary/50 transition-all duration-300 w-full aspect-square rounded-full overflow-hidden">
                    <DomeGallery />
                  </div>
                  <div className="flex gap-4">
                    {techLogos.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-primary transition-colors"
                      >
                        {social.node}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 md:p-4 rounded-lg flex-3">
                  <div className="border-b-2 md:pb-4">
                    <h2 className="text-4xl font-semibold mb-4">Hello, I'm <br /> <span className="text-primary font-bold">Jienelle N. Bautista</span></h2>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm a passionate web developer with expertise in modern web technologies.
                      My journey in tech started [your story here]. I love creating elegant
                      solutions to complex problems and bringing ideas to life through code.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Skills</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <h4 className="font-medium">Frontend</h4>
                        <p className="text-sm text-muted-foreground">React, TypeScript, TailwindCSS</p>
                      </div>
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <h4 className="font-medium">Backend</h4>
                        <p className="text-sm text-muted-foreground">Node.js, Express, MongoDB</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Education</h3>
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <h4 className="font-medium">[Your University]</h4>
                      <p className="text-sm text-muted-foreground">Bachelor's in [Your Degree] (20XX-20XX)</p>
                    </div>
                  </div>
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