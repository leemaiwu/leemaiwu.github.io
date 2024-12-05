import React, { FormEvent, useState } from 'react';

import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I'll be in touch shortly.\nHave a wonderful day! 😊");
    
    // Submit the form
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    });
    
    // Reset form data
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-montserrat font-light text-center mb-12">Let's Connect</h2>
        
        <form 
          className="space-y-10"
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfKpCzAJoQ1WJo887jkWqpivP47RjvStkxY4lhogJSWKvU9NQ/formResponse" 
          method="POST" 
          target="hidden_iframe"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="entry.1584091510"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
                className="w-[calc(100%+35px)] px-4 py-2 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder:text-gray-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="entry.1198874606"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                required
                className="w-[calc(100%+35px)] px-4 py-2 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder:text-gray-400"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="entry.708557384"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Your message here..."
              required
              className="w-[calc(100%+35px)] px-4 py-2 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder:text-gray-400"
            ></textarea>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white text-lg rounded-md hover:bg-gray-700 transition-colors"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </div>
        </form>
        
        <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
      </div>
    </section>
  );
};

export default Contact;