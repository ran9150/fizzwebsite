import React, { useState } from 'react';
import { ShoppingBag, X, Star } from 'lucide-react';

const menuItems = [
  { id: 1, name: "The Original Crunch", price: "$12.99", desc: "Our signature crispy beef patty with secret sauce." },
  { id: 2, name: "Double Trouble", price: "$15.99", desc: "Two crunchy patties, double cheese, double joy." },
  { id: 3, name: "Spicy Jalapeño Crunch", price: "$13.99", desc: "Kick it up a notch with fresh jalapeños." }
];

export default function App() {
  const [showOrder, setShowOrder] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <nav className="p-6 flex justify-between items-center bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-orange-600">Eddie's Crunchy Burgers</h1>
        <button onClick={() => setShowOrder(true)} className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition">Order Now</button>
      </nav>

      <header className="py-20 px-6 text-center bg-stone-900 text-white">
        <h2 className="text-5xl font-extrabold mb-4">The Crunchiest Burgers in Town</h2>
        <p className="text-xl text-stone-400 mb-8">Fresh ingredients, secret recipes, and that perfect crunch.</p>
      </header>

      <main className="max-w-4xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold mb-10 text-center">Our Menu</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map(item => (
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-md border border-stone-100">
              <h4 className="text-xl font-bold mb-2">{item.name}</h4>
              <p className="text-stone-600 mb-4 text-sm">{item.desc}</p>
              <p className="font-bold text-orange-600">{item.price}</p>
            </div>
          ))}
        </div>
      </main>

      {showOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6">
          <div className="bg-white p-8 rounded-2xl max-w-sm w-full relative">
            <button onClick={() => setShowOrder(false)} className="absolute top-4 right-4"><X /></button>
            <h3 className="text-2xl font-bold mb-4">Place Your Order</h3>
            <input className="w-full p-3 border rounded-lg mb-4" placeholder="Your Name" />
            <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold">Confirm Order</button>
          </div>
        </div>
      )}
    </div>
  );
}