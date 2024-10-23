const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Company</h2>
          <p className="mb-4">
            We provide the best services for your business. Contact us for more information and inquiries.
          </p>
          <p>123 Business Avenue, City</p>
          <p>Email: contact@company.com</p>
        </div>

        {/* Navigation Links Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:text-gray-400">Home</a>
            </li>
            <li className="mb-2">
              <a href="/services" className="hover:text-gray-400">Services</a>
            </li>
            <li className="mb-2">
              <a href="/about" className="hover:text-gray-400">About Us</a>
            </li>
            <li className="mb-2">
              <a href="/blog" className="hover:text-gray-400">Blog</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-gray-400">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="hover:text-gray-400">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center">
        <p className="text-gray-500">© 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
