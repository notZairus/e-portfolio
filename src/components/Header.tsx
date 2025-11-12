import React from "react";
import { Link } from "wouter";
import BubbleMenu from "@/components/BubbleMenu.tsx"
import { SiInstagram } from 'react-icons/si';



const items = [
  {
    label: 'Home',
    href: '/',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'About',
    href: '/about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'Projects',
    href: '/projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'Contact',
    href: '/contact',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];



export default function Header(): React.ReactNode {
  return (
    <>
      <div className="w-full border z-50 fixed bg-white/80 hidden md:block">
        <div className="w-4/5 h-20 md:flex mx-auto items-center justify-between ">
          <div>
            <h1 className="font-bold text-3xl text-primary-foreground">JNB</h1>
          </div>
          <div>
            <nav className="flex gap-8 items-center">
              { items.map((item) => (
                <Link href={item.href}>{item.label}</Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <BubbleMenu 
          logo={<SiInstagram />}
          items={items}
        />
      </div>
    </>
  )
}
