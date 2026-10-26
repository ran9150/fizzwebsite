import React from 'react';
import menuData from '../data/menu.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="p-6 bg-white shadow-sm flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">Eddie's Crunchy Burgers</h1>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">Order Now</button>
      </nav>
      
      <header className="py-20 text-center bg-red-50">
        <h2 className="text-5xl font-extrabold mb-4">Crunchy, Juicy, Perfection.</h2>
        <p className="text-xl text-gray-600">The best burgers in town, delivered to your door.</p>
      </header>

      <main className="max-w-5xl mx-auto py-12 px-6">
        <h3 className="text-3xl font-bold mb-8">Our Menu</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {menuData.burgers.map((burger) => (
            <div key={burger.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h4 className="text-xl font-bold">{burger.name}</h4>
              <p className="text-gray-600 my-2">{burger.desc}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-red-600">{burger.price}</span>
                <button className="border border-red-600 text-red-600 px-4 py-1 rounded hover:bg-red-600 hover:text-white transition">Add</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}