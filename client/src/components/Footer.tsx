import { Link } from "wouter";
import { SocialLinks } from "./ui/animated-icons";

// Helper function to handle direct navigation
const handleNavigation = (path: string) => {
  window.location.href = path;
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
      </div>
      
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 mb-16">
            {/* Product Column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Product</h3>
              <ul className="space-y-4">
                <li>
                  <button onClick={() => handleNavigation('/#features')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    Features
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/subscribe')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    Pricing
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/integrations')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    Integrations
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/api')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    API
                  </button>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <button onClick={() => handleNavigation('/about')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/careers')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    Careers
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/contact')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
              <ul className="space-y-4">
                <li>
                  <button onClick={() => handleNavigation('/help-center')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    Help Center
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/tutorials')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    Tutorials
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/community')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    Community
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <button onClick={() => handleNavigation('/blog')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    Blog
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/case-studies')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    Case Studies
                  </button>
                </li>
              </ul>
            </div>

            {/* Trust Column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Trust</h3>
              <ul className="space-y-4">
                <li>
                  <button onClick={() => handleNavigation('/trial')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    14-day free trial
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/cancel-anytime')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    Cancel anytime
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/data-protection')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    Data protection & privacy
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/setup-migration')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    Free setup & migration
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/expert-support')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    24/7 expert support
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/bank-security')} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
                    Bank-level security
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons Section */}
          <div className="border-t border-gray-800 pt-12 mb-8">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-8">
                Get Our App & Follow Us
              </h4>
              <div className="flex justify-center">
                <SocialLinks className="animate-fade-in-up stagger-1" />
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/80 text-sm">
                © 2025 BusinessFlow Pro. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 ease-out relative group">
                  <span className="relative z-10">Privacy Policy</span>
                  <span className="absolute inset-0 bg-blue-500/20 rounded px-2 py-1 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-2 -my-1"></span>
                </a>
                <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 ease-out relative group">
                  <span className="relative z-10">Terms of Service</span>
                  <span className="absolute inset-0 bg-blue-500/20 rounded px-2 py-1 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-2 -my-1"></span>
                </a>
                <a href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 ease-out relative group">
                  <span className="relative z-10">Cookie Policy</span>
                  <span className="absolute inset-0 bg-blue-500/20 rounded px-2 py-1 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -mx-2 -my-1"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;