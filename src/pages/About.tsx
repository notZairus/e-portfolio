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



function EducationCard({ school, title, year }: { school: string; title: string; year: string }) {
  return (
    <>
      <div className="w-full">
        <div className=" flex-1 relative">
          <div className="w-4 aspect-square absolute top-1/2 -left-[25px] -translate-y-1/2 rounded-full bg-primary" />
          <div className="w-1 bg-primary/80 h-full absolute top-1/2 -left-5 -translate-y-1/2 " />

          <div className="py-2 w-full">
            <div className="bg-primary/10 p-4 rounded-lg w-full">
              <h4 className="font-medium">{ school }</h4>
              <p className="text-sm text-muted-foreground">{title} | {year}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



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
                  <div className="border-b-2 pb-4">
                    <h2 className="text-[32px] md:text-4xl font-semibold mb-4">Hello, I'm <br /> <span className="text-primary font-bold">Jienelle N. Bautista</span></h2>
                    <p className="text-muted-foreground leading-relaxed">
                      My name is Jienelle N. Bautista, but you can simply call me Jie. I was born on September 14, 2005, and I’m now in my second year pursuing a Bachelor of Science in Computer Science at Norzagaray College. Currently, I’m exploring the world of programming by studying the basics of various languages, including C++, Java, C#, and VB.NET. I find it fascinating to understand how code works and how it can be used to create meaningful and practical projects. As I continue my studies, I’m motivated to keep improving my skills and deepen my understanding of technology and software development.
                    </p>
                  </div>

                  

                  <div className="">
                    <h3 className="text-2xl font-semibold mb-3">Education</h3>
                    <div className="">
                      {
                        [
                          { school: "Norzagaray College", title: "Pursuing Bachelor of Science in Computer Science", year: "2024 - Present" },
                          { school: "Norzagaray National High School", title: "Graduated Senior High School | STEM Strand", year: "2024" },
                          { school: "Norzagaray National High School", title: "Graduated Junior High School", year: "2022" },
                        ].map((edu, index) => (
                          <EducationCard
                            key={index}
                            school={edu.school}
                            title={edu.title}
                            year={edu.year}
                          />
                        ))  
                      }
                      


                      {/* <div className="bg-primary/10 p-4 rounded-lg">
                        <h4 className="font-medium">Norzagaray National High School</h4>
                        <p className="text-sm text-muted-foreground">Graduated Junior High School | 2021</p>
                      </div> */}

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