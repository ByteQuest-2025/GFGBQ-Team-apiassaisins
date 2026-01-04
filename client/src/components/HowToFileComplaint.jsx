function HowToFileComplaint() {
    return (
        <div className="px-5 md:px-10 py-12 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                        How to File a Complaint
                    </h2>
                    <p className="text-base md:text-xl text-gray-600">
                        Follow these simple steps to submit your grievance
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-green-200"></div>

                    {/* Step 1 */}
                    <div className="relative mb-10 md:mb-16">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <div className="flex-1 md:text-right w-full">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 md:p-8 shadow-md">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                                        1. Register or Login
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                        Create an account or log in to your existing account.
                                        You'll need a valid email address and phone number for verification.
                                    </p>
                                </div>
                            </div>
                            <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg">
                                    1
                                </div>
                            </div>
                            <div className="flex-1 hidden md:block"></div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative mb-10 md:mb-16">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <div className="flex-1 hidden md:block"></div>
                            <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg">
                                    2
                                </div>
                            </div>
                            <div className="flex-1 md:text-left w-full">
                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 md:p-8 shadow-md">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                                        2. Describe Your Issue
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                        Provide details about your complaint including location,
                                        category, and a clear description. You can also attach photos or documents.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative mb-10 md:mb-16">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <div className="flex-1 md:text-right w-full">
                                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-5 md:p-8 shadow-md">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                                        3. AI Analysis
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                        Our AI system automatically analyzes your complaint,
                                        categorizes it, assigns priority, and routes it to the appropriate department.
                                    </p>
                                </div>
                            </div>
                            <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg">
                                    3
                                </div>
                            </div>
                            <div className="flex-1 hidden md:block"></div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative mb-10 md:mb-16">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <div className="flex-1 hidden md:block"></div>
                            <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg">
                                    4
                                </div>
                            </div>
                            <div className="flex-1 md:text-left w-full">
                                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 md:p-8 shadow-md">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                                        4. Track Progress
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                        Receive a unique tracking ID and monitor your complaint status in real-time.
                                        Get notifications at every step until resolution.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default HowToFileComplaint;
