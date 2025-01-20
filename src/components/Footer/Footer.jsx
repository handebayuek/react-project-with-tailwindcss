import React from "react";
import { FaTwitter, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

const allnewpath = "../../image/allnew.png";

function Footer() {
  return (
    <footer>
      <div className="mt-10 flex w-full flex-col bg-navbarColor p-6">
        {/* Footer Content Wrapper */}
        <div className="flex flex-wrap items-center justify-around leading-7">
          {/* About Us */}
          <div className="w-full text-center sm:w-auto">
            <h5 className="font-bold">About Us</h5>
            <ul className="font-bold">
              <li>
                <a href="">BotaniPure Mission</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="w-full text-center sm:w-auto">
            <h5 className="font-bold">Follow Us</h5>
            <ul className="flex justify-center space-x-4">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={24} color="#1DA1F2" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} color="#e95950" />
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={24} color="#EE1D51" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} color="#0A66C2" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full text-center sm:w-auto">
            <h5 className="font-bold">Contact Us</h5>
            <p>📞 +1-234-567-890</p>
            <p>✉️ info@company.com</p>
          </div>

          {/* Customer Service */}
          <div className="w-full text-center sm:w-auto">
            <h5 className="font-bold">Customer Service</h5>
            <ul>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Shipping & Returns</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Customer Account */}
          <div className="w-full text-center sm:w-auto">
            <h5 className="font-bold">Customer Account</h5>
            <ul>
              <li>
                <a href="">My Account</a>
              </li>
              <li>
                <a href="">Order History</a>
              </li>
              <li>
                <a href="">Wishlist</a>
              </li>
            </ul>
          </div>
          {/* Subscription Section */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div>
              <p className="text-center">
                Do you want to be informed about all the campaigns?
              </p>
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 rounded-l-lg border border-gray-300 px-4 py-2 outline-none"
              />
              <button className="rounded-r-lg bg-rouselColor px-4 py-2 text-white hover:bg-darkGreenColor">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
