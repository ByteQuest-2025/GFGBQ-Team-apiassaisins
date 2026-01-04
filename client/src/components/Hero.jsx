import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            if (card) {
                setTimeout(() => {
                    card.style.animation = `slideInFromRight 0.6s ease-out forwards`;
                }, index * 200);
            }
        });
    }, []);

    return (
        <div className="min-h-screen  md:h-screen flex flex-col md:flex-row justify-center md:justify-between items-center px-5 md:px-10 py-10 md:py-0 bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Left Section - Hero Text */}
            <div className=" flex mb-40 gap-4 md:gap-5 flex-col max-w-xl text-center md:text-left ">
                <h1 className="text-3xl md:text-5xl font-semibold text-gray-900">
                    AI-Powered Grievance Redressal <br /> for Smart Governance
                </h1>
                <p className="text-gray-600 text-base md:text-xl">
                    Automatically prioritize, classify, and resolve citizen complaints faster
                </p>
                <Link to='/complaint' className="text-center text-white bg-black hover:bg-gray-900 transition-colors p-3 rounded-lg w-full md:w-[200px] font-medium shadow-md mx-auto md:mx-0">
                    File a Complaint
                </Link>
            </div>

            <div className="hidden md:block relative w-[500px] h-[400px]">
                <div
                    ref={(el) => (cardsRef.current[0] = el)}
                    className="card-container absolute top-0 left-0 opacity-0"
                    style={{ transform: 'translateX(100px) rotate(-5deg)' }}
                >
                    <div className="bg-white rounded-xl shadow-md p-5 w-[320px] border border-gray-200">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-lg font-semibold text-gray-800">Complaint Submitted</h3>
                            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                                Received
                            </span>
                        </div>

                        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                            "Water leakage near Government Hospital"
                        </p>

                        <div className="flex justify-between text-xs text-gray-500">
                            <span>📍 Ward 12</span>
                            <span>🕐 2 minutes ago</span>
                        </div>
                    </div>
                </div>

                <div
                    ref={(el) => (cardsRef.current[1] = el)}
                    className="card-container absolute top-16 left-20 opacity-0"
                    style={{ transform: 'translateX(100px) rotate(2deg)' }}
                >
                    <div className="bg-white rounded-xl shadow-lg p-6 w-[360px] border-2 border-blue-100">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-gray-900">AI Analysis</h3>
                            <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full font-medium shadow-sm">
                                AI Processed
                            </span>
                        </div>

                        {/* Structured Data Rows */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">📂</span>
                                <span className="text-sm text-gray-600 font-medium w-24">Category</span>
                                <span className="text-sm text-gray-900 font-semibold">Water Supply</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-lg">🔴</span>
                                <span className="text-sm text-gray-600 font-medium w-24">Priority</span>
                                <span className="text-sm font-bold text-red-600 bg-red-50 px-2 py-1 rounded">High</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-lg">⚠️</span>
                                <span className="text-sm text-gray-600 font-medium w-24">Severity</span>
                                <span className="text-sm text-gray-900 font-semibold">Public Health Risk</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-lg">🏛️</span>
                                <span className="text-sm text-gray-600 font-medium w-24">Department</span>
                                <span className="text-sm text-gray-900 font-semibold">Municipal Corp.</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* CSS Animation */}
            <style>{`
                @keyframes slideInFromRight {
                    0% {
                        transform: translateX(100px) rotate(var(--rotation, 0deg));
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0) rotate(var(--rotation, 0deg));
                        opacity: 1;
                    }
                }

                .card-container:nth-child(1) {
                    --rotation: -5deg;
                }

                .card-container:nth-child(2) {
                    --rotation: 2deg;
                }

                .card-container:nth-child(3) {
                    --rotation: 4deg;
                }
            `}</style>
        </div>
    );
}

export default Hero;
