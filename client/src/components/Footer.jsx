import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="px-5 md:px-10 py-8 md:py-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-white text-lg md:text-xl font-bold mb-3 md:mb-4">AURA</h3>
                        <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                            AI-Powered Unified Redressal Application for Smart Governance.
                            Making citizen services faster, smarter, and more transparent.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="hover:text-white transition">🐦</a>
                            <a href="#" className="hover:text-white transition">📘</a>
                            <a href="#" className="hover:text-white transition">📸</a>
                            <a href="#" className="hover:text-white transition">💼</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/" className="hover:text-white transition">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-white transition">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-white transition">Contact</Link>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">Track Complaint</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">FAQs</a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-white transition">File a Complaint</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">Water Supply Issues</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">Road Maintenance</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">Sanitation</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">Electricity</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <span>📧</span>
                                <span>support@aura.gov.in</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>📞</span>
                                <span>1800-XXX-XXXX</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>📍</span>
                                <span>New Delhi, India</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>🕐</span>
                                <span>Mon-Fri: 9 AM - 6 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 px-5 md:px-10 py-4 md:py-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm">
                    <p className="text-center md:text-left">© 2026 AURA. All rights reserved. Government of India.</p>
                    <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                        <a href="#" className="hover:text-white transition">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
