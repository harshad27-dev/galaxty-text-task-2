import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center text-4xl text-white mt-20">Contact Me</div>
      <div className="">
        <form action="">
            <div className="flex flex-col items-center mt-10">
                <input 
                type="text" 
                placeholder="Your Name" 
                className="p-3 mb-4 w-80 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input 
                type="email" 
                placeholder="Your Email" 
                className="p-3 mb-4 w-80 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea 
                placeholder="Your Message" 
                className="p-3 mb-4 w-80 h-32 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
                <button 
                type="submit" 
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl mb-5"
                >
                Send Message
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
