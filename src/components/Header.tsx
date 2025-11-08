import React from "react";
import { Link } from "wouter";


const items = [
  {label: 'Home', href: '/'},
  {label: 'About', href: '/about'},
  {label: 'Projects', href: '/projects'},
  {label: 'Contact', href: '/contact'},
]



export default function Header(): React.ReactNode {
  return (
    <>
      <div className="w-full border z-50 fixed bg-white/80">
        <div className="w-4/5 h-20 flex mx-auto items-center justify-between">
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
    </>
  )
}
