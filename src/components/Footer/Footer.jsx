
import { FaTwitter, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";



function Footer() {
  return (
    <footer className="w-full mt-auto bg-navbarColor text-textColor p-6">
      <div className="flex flex-col ">
        {/* Footer İçeriği */}
        <div className="flex flex-wrap flex-col sm:flex-row items-center justify-between gap-6 text-center">
          {/* About Us */}
          <div className="w-full sm:w-auto">
            <h5 className="font-bold">About Us</h5>
            <ul className="font-bold ">
              <li><a href="">BotaniPure Mission</a></li>
              <li><a href="">Careers</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="w-full sm:w-auto">
            <h5 className="font-bold">Follow Us</h5>
            <ul className="flex justify-center space-x-4">
              <li><FaTwitter size={24} color="#1DA1F2" /></li>
              <li><FaInstagram size={24} color="#e95950" /></li>
              <li><FaTiktok size={24} color="#EE1D51" /></li>
              <li><FaLinkedin size={24} color="#0A66C2" /></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full sm:w-auto">
            <h5 className="font-bold">Contact Us</h5>
            <p className="text-white">📞 +1-234-567-890</p>
            <p className="text-white">✉️ info@company.com</p>
          </div>

          {/* Customer Service */}
          <div className="w-full sm:w-auto">
            <h5 className="font-bold">Customer Service</h5>
            <ul className="text-white">
              <li><a href="">FAQ</a></li>
              <li><a href="">Shipping & Returns</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Account */}
          <div className="w-full sm:w-auto">
            <h5 className="font-bold">Customer Account</h5>
            <ul className="text-white">
              <li><a href="">My Account</a></li>
              <li><a href="">Order History</a></li>
              <li><a href="">Wishlist</a></li>
            </ul>
          </div>

          {/* Subscription Section */}
          <div className="w-full sm:w-auto flex flex-col items-center">
            <p className="text-center font-semibold">
              Do you want to be informed about all the campaigns?
            </p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-48 sm:w-auto rounded-l-lg border border-gray-300 px-4 py-2 outline-none"
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

