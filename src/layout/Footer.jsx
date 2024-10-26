import { Menu } from "@headlessui/react";
import {
  HomeIcon,
  InformationCircleIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white">Travel Blog</h2>
          <p className="mt-3">
            Explore. Dream. Discover. Your next adventure awaits!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-around md:justify-start md:space-x-8">
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <HomeIcon className="w-5 h-5 text-gray-400" />
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <InformationCircleIcon className="w-5 h-5 text-gray-400" />
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <GlobeAltIcon className="w-5 h-5 text-gray-400" />
              <a href="#destinations" className="hover:text-white">
                Destinations
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <ChatBubbleLeftRightIcon className="w-5 h-5 text-gray-400" />
              <a href="#testimonials" className="hover:text-white">
                Testimonials
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <QuestionMarkCircleIcon className="w-5 h-5 text-gray-400" />
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-white">
              <GlobeAltIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <InformationCircleIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <ChatBubbleLeftRightIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <QuestionMarkCircleIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        <p>© {new Date().getFullYear()} Travel Blog. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
