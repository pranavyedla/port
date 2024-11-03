import React from 'react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input type="text" className="w-full p-3 bg-gray-900 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input type="email" className="w-full p-3 bg-gray-900 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea className="w-full p-3 bg-gray-900 rounded-lg h-32"></textarea>
            </div>
            <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}