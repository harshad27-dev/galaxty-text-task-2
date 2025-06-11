import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <hr />
      <div className="flex justify-center text-white text-1xl">
        <p className="mt-2">Galaxy Tech solution @2025  </p>
        <div>
            <div className="flex gap-4 ml-5">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-200">
                <FaFacebook size={24} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-200">
                <FaTwitter size={24} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-200">
                <FaLinkedin size={24} />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-200">
                <FaGithub size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-200">
                <FaInstagram size={24} />
                </a>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
