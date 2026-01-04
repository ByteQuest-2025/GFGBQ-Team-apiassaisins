function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="px-5 md:px-10 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                        About AURA
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        AI-Powered Unified Redressal Application for Smart Governance
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="px-10 py-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        AURA is revolutionizing the way citizens interact with government services.
                        We leverage cutting-edge artificial intelligence to automatically prioritize,
                        classify, and route citizen complaints to the appropriate departments,
                        ensuring faster resolution and improved accountability.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our platform bridges the gap between citizens and government, making
                        governance more transparent, efficient, and responsive to public needs.
                    </p>
                </div>
            </div>

            {/* Features Section */}
            <div className="px-5 md:px-10 py-10 md:py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
                        Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">🤖</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                AI-Powered Classification
                            </h3>
                            <p className="text-gray-600">
                                Automatically categorize and prioritize complaints using
                                advanced machine learning algorithms.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Instant Routing
                            </h3>
                            <p className="text-gray-600">
                                Smart routing ensures complaints reach the right department
                                in seconds, not days.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Real-time Tracking
                            </h3>
                            <p className="text-gray-600">
                                Track your complaint status in real-time with complete
                                transparency and accountability.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">🌐</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Multi-language Support
                            </h3>
                            <p className="text-gray-600">
                                File complaints in your preferred language for better
                                accessibility and inclusivity.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Secure & Private
                            </h3>
                            <p className="text-gray-600">
                                Your data is protected with enterprise-grade security
                                and privacy measures.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Mobile Friendly
                            </h3>
                            <p className="text-gray-600">
                                Access AURA from any device - desktop, tablet, or mobile
                                for convenience on the go.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact Section */}
            <div className="px-5 md:px-10 py-10 md:py-16 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                        Our Impact
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                            <p className="text-gray-700 font-medium">Complaints Resolved</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
                            <p className="text-gray-700 font-medium">Faster Resolution Time</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                            <p className="text-gray-700 font-medium">Citizen Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
