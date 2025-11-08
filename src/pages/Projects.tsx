import { Separator } from "@/components/ui/separator";
import TiltedCard from "@/components/TiltedCard";


export default function About() {
  return (
    <>
        <section className="w-full">
            <div className="w-4/5 min-h-20 mx-auto py-8">

              <h1 className="text-5xl font-bold">My Projects</h1>
              <Separator className="my-4 mb-8" />

              <div className="min-h-20 w-full flex flex-col gap-12">
                <div className="w-10/12 mx-auto flex flex-col md:flex-row items-between gap-4 items-center border-b pb-8">
                  <div className="flex-1">
                    <TiltedCard
                      imageSrc="/project1.jpeg"
                      altText="Project 1: Library Management System"
                      captionText="Project 1: Library Management System"
                      containerHeight="300px"
                      containerWidth="300px"
                      imageHeight="300px"
                      imageWidth="300px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={true}
                      overlayContent={
                        <p className="tilted-card-demo-text bg-primary   p-2 rounded-md text-white">
                          Library Management System
                        </p>
                      }
                    />
                  </div>

                  <div className="flex-2 h-min">
                    <div className="md:px-6 text-white">
                      <h2 className="text-2xl font-semibold mb-2">Library Management System</h2>
                      <p className="mb-4 text-sm leading-relaxed">
                      A desktop application built with VB.NET WinForms to manage library operations: cataloging books, managing members, and handling lending/returns with overdue tracking and notifications.
                      </p>

                      <ul className="mb-4 space-y-2 text-sm">
                      <li><strong>Key features:</strong> Advanced search & filters, borrow/return workflow, reservations, overdue reports, and role-based access control.</li>
                      <li><strong>My role:</strong> Lead developer — designed the data model, implemented business logic, and built the WinForms UI.</li>
                      <li><strong>Tech stack:</strong> C#.NET, Windows Forms, MySQL</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="w-10/12 mx-auto flex flex-col md:flex-row items-between gap-4 items-center  border-b pb-8">
                  <div className="flex-1">
                    <TiltedCard
                      imageSrc="jir/project2.jpeg"
                      altText="Project 2: Grilled Chicken"
                      captionText="Project 2: Grilled Chicken"
                      containerHeight="300px"
                      containerWidth="300px"
                      imageHeight="300px"
                      imageWidth="300px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={true}
                      overlayContent={
                        <p className="tilted-card-demo-text bg-primary   p-2 rounded-md text-white">
                          Grilled Chicken
                        </p>
                      }
                    />
                  </div>

                  <div className="flex-2 h-min">
                    <div className="md:px-6 text-white">
                        <h2 className="text-2xl font-semibold mb-2">Grilled Chicken Ordering System</h2>
                        <p className="mb-4 text-sm leading-relaxed">
                        A web-based ordering platform for a grilled chicken restaurant that lets customers browse the menu, customize items, place orders with online payments, and track order status in real time. Includes an admin/kitchen dashboard for order management, inventory updates, and promotions.
                        </p>

                        <ul className="mb-4 space-y-2 text-sm">
                        <li><strong>Key features:</strong> Menu browsing with item customization, cart & checkout, secure Stripe payments, real-time order updates (kitchen notifications & customer tracking), order history, discounts & promos, and basic inventory management.</li>
                        <li><strong>My role:</strong> Full‑stack developer — designed the UI/UX, implemented frontend components and responsive layouts, built REST APIs, integrated payment processing and real-time order notifications, and deployed the app.</li>
                        <li><strong>Tech stack:</strong> VB.NET, Windows Forms</li>
                        </ul>
                    </div>
                  </div>
                </div>

                <div className="w-10/12 mx-auto flex flex-col md:flex-row items-between gap-4 items-center  border-b pb-8">
                  <div className="flex-1">
                    <TiltedCard
                      imageSrc="/project3.jpeg"
                      altText="Project 3: The Best Bakery"
                      captionText="Project 3: The Best Bakery"
                      containerHeight="300px"
                      containerWidth="300px"
                      imageHeight="300px"
                      imageWidth="300px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={true}
                      overlayContent={
                        <p className="tilted-card-demo-text bg-primary   p-2 rounded-md text-white">
                          The Best Bakery
                        </p>
                      }
                    />
                  </div>

                  <div className="flex-2 h-min">
                    <div className="md:px-6 text-white">
                      <h2 className="text-2xl font-semibold mb-2">The Best Bakery</h2>
                      <p className="mb-4 text-sm leading-relaxed">
                      A console application simulating a bakery ordering system that allows customers to browse available baked goods, place orders, and calculate totals. Features a simple text-based interface for menu navigation and order processing.
                      </p>

                      <ul className="mb-4 space-y-2 text-sm">
                      <li><strong>Key features:</strong> Product catalog display, order quantity selection, price calculation, basic inventory tracking, and order summary generation.</li>
                      <li><strong>My role:</strong> Developer — implemented the console interface, business logic for order processing, and basic data persistence.</li> 
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </section>
    </>
  )
}
