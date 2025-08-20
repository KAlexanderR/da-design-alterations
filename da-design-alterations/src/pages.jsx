import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DADesignAlterations() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-wide mb-2">DA Design & Alterations</h1>
        <p className="text-lg text-gray-600">Your trusted boutique service for garment alterations & repairs</p>
        <p className="text-sm text-gray-500 mt-1">Based in Westminster, WA 6061</p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Hemming</li>
              <li>Repairing holes, rips & tears</li>
              <li>Taking garments in or resizing</li>
              <li>Altering sleeves, necklines & pockets</li>
              <li>Adding or removing garment elements</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
            <p className="text-gray-700 mb-2">
              Pricing varies depending on the type, size, and complexity of the alteration.
              Each garment is assessed individually to account for:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Preparation & measurements</li>
              <li>Cutting & sewing</li>
              <li>Fabric type & garment condition</li>
            </ul>
            <p className="mt-4 text-sm italic">Contact us for a personalised quote.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/images/gallery1.jpg" alt="Garment 1" className="w-full rounded-xl shadow" />
          <img src="/images/gallery2.jpg" alt="Garment 2" className="w-full rounded-xl shadow" />
          <img src="/images/gallery3.jpg" alt="Garment 3" className="w-full rounded-xl shadow" />
          <img src="/images/gallery4.jpg" alt="Garment 4" className="w-full rounded-xl shadow" />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-6">Book a Consultation</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-xl" required />
          <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-xl" required />
          <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-xl" required />
          <textarea placeholder="Tell us about the garment or service you need" className="w-full p-3 border rounded-xl h-32" required></textarea>
          <Button className="w-full">Submit Booking Request</Button>
        </form>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-2">Get in touch to book a consultation or ask any questions:</p>
        <p className="font-medium">Email: <a href="mailto:info@dadesignalterations.com" className="text-blue-600 underline">info@dadesignalterations.com</a></p>
        <p className="font-medium">Phone: <a href="tel:+61000000000" className="text-blue-600 underline">(61) 0000 0000</a></p>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} DA Design & Alterations. All rights reserved.
      </footer>
    </div>
  );
}
