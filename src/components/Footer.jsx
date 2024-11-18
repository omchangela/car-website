import React from "react";

// Importing assets
import googlePlay from "../assets/gplay.png";
import appStore from "../assets/aplay.png";

const Footer = () => {
  const majorCities = [
    "Kolkata", "Mumbai", "Delhi", "Hyderabad", "Pune",
    "Karachi", "Lahore", "Islamabad", "Rawalpindi",
    "Multan", "Peshawar"
  ];

  const companyLinks = [
    { name: "About Us", href: "/aboutus" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Delivery Policy", href: "/delivery-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Payment Terms", href: "/payment-terms" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Terms of Use", href: "/terms-of-use" },
    { name: "Cancellation Policy", href: "/cancellation-policy" },
    { name: "FAQs", href: "/faqs" },
    { name: "Process", href: "/process" },
    { name: "Join as a Vendor", href: "/join-as-vendor" },
    { name: "Advertise With Us", href: "/advertise-with-us" },
  ];

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {/* About Section */}
          <div className="px-4 sm:px-0">
            <h4 className="text-white text-lg font-semibold mb-4">CIAO</h4>
            <p className="text-sm">
              Book appointments with the best Doctors and Specialists such as
              Gynecologists, Skin Specialists, Child Specialists, Surgeons, etc.
              Avail test services such as MRI, CT scan, Ultrasound, X-Ray, etc.
              and Online Doctor Video Consultations all across Pakistan
              conveniently.
            </p>
            <h4 className="text-white text-lg font-semibold mb-4 mt-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white hover:text-blue-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Major Cities - Column 1 */}
          <div className="px-4 sm:px-0">
            <h4 className="text-white text-lg font-semibold mb-4">
              Major Cities
            </h4>
            <ul className="space-y-2">
              {majorCities.slice(0, Math.ceil(majorCities.length / 2)).map((city, index) => (
                <li key={index} className="text-sm hover:text-blue-500">
                  <a href="#">{city}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Major Cities - Column 2 */}
          <div className="px-4 sm:px-0">
            <h4 className="text-white text-lg font-semibold mb-4">
              Major Cities
            </h4>
            <ul className="space-y-2">
              {majorCities.slice(Math.ceil(majorCities.length / 2)).map((city, index) => (
                <li key={index} className="text-sm hover:text-blue-500">
                  <a href="#">{city}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="px-4 sm:px-0">
            <h4 className="text-white text-lg font-semibold mb-4">Support</h4>
            <p className="text-sm">
              24/7 customer support. Secure online payments.
            </p>
            <div className="mt-4 flex gap-2 justify-center sm:justify-start">
              <img
                src={googlePlay}
                alt="Google Play"
                className="w-24 h-auto"
              />
              <img
                src={appStore}
                alt="App Store"
                className="w-24 h-auto"
              />
            </div>
          </div>
        </div>

        <div className="text-center text-white text-sm">
          © 2024 Lead Gen Advertisements. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
