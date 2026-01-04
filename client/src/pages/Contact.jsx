function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="px-10 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Have questions? We're here to help and answer any questions you might have.
                    </p>
                </div>
            </div>

            {/* Contact Content */}
            <div className="px-10 py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors shadow-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Cards */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">📧</div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                                    <p className="text-gray-600">support@aura.gov.in</p>
                                    <p className="text-gray-600">info@aura.gov.in</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">📞</div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                                    <p className="text-gray-600">Toll Free: 1800-XXX-XXXX</p>
                                    <p className="text-gray-600">Office: +91 11 XXXX XXXX</p>
                                    <p className="text-sm text-gray-500 mt-2">Mon-Fri: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">📍</div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
                                    <p className="text-gray-600">
                                        Ministry of Electronics and IT<br />
                                        Electronics Niketan, 6 CGO Complex<br />
                                        Lodhi Road, New Delhi - 110003
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">💬</div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Social Media</h3>
                                    <div className="flex gap-4 mt-3">
                                        <a href="#" className="text-2xl hover:scale-110 transition-transform">🐦</a>
                                        <a href="#" className="text-2xl hover:scale-110 transition-transform">📘</a>
                                        <a href="#" className="text-2xl hover:scale-110 transition-transform">📸</a>
                                        <a href="#" className="text-2xl hover:scale-110 transition-transform">💼</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="px-10 py-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        <details className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition">
                            <summary className="font-semibold text-gray-900 text-lg">
                                How long does it take to resolve a complaint?
                            </summary>
                            <p className="mt-3 text-gray-600">
                                Resolution time varies based on the complexity and priority of the complaint.
                                High-priority issues are typically addressed within 24-48 hours, while standard
                                complaints are resolved within 7-10 business days.
                            </p>
                        </details>

                        <details className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition">
                            <summary className="font-semibold text-gray-900 text-lg">
                                Can I track my complaint status?
                            </summary>
                            <p className="mt-3 text-gray-600">
                                Yes! Once you file a complaint, you'll receive a unique tracking ID. You can use
                                this ID to check the real-time status of your complaint on our platform.
                            </p>
                        </details>

                        <details className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition">
                            <summary className="font-semibold text-gray-900 text-lg">
                                Is my personal information secure?
                            </summary>
                            <p className="mt-3 text-gray-600">
                                Absolutely. We use enterprise-grade encryption and follow strict data protection
                                protocols to ensure your personal information remains secure and confidential.
                            </p>
                        </details>

                        <details className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition">
                            <summary className="font-semibold text-gray-900 text-lg">
                                What types of complaints can I file?
                            </summary>
                            <p className="mt-3 text-gray-600">
                                You can file complaints related to public services, infrastructure issues,
                                sanitation, water supply, electricity, road maintenance, and various other
                                civic amenities managed by government departments.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
