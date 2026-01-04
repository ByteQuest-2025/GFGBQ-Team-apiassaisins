import { useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    // Mock data - In production, this would come from an API
    const [complaints] = useState([
        {
            id: 1,
            title: "Water Supply Issue",
            description: "No water supply in my area for the past 3 days",
            status: "in-progress",
            inputType: "text",
            priority: "high",
            date: "2026-01-01",
            category: "Water"
        },
        {
            id: 2,
            title: "Street Light Not Working",
            description: "Street light near park has been broken for a week",
            status: "submitted",
            inputType: "voice",
            priority: "medium",
            date: "2026-01-02",
            category: "Infrastructure"
        },
        {
            id: 3,
            title: "Garbage Collection Delay",
            description: "Garbage has not been collected for 5 days",
            status: "reviewed",
            inputType: "text",
            priority: "high",
            date: "2025-12-28",
            category: "Sanitation"
        },
        {
            id: 4,
            title: "Road Pothole",
            description: "Large pothole on main road causing accidents",
            status: "resolved",
            inputType: "voice",
            priority: "high",
            date: "2025-12-25",
            category: "Roads"
        },
        {
            id: 5,
            title: "Park Maintenance",
            description: "Park equipment needs repair and maintenance",
            status: "in-progress",
            inputType: "text",
            priority: "low",
            date: "2025-12-30",
            category: "Parks"
        },
        {
            id: 6,
            title: "Noise Pollution",
            description: "Construction noise during late night hours",
            status: "submitted",
            inputType: "voice",
            priority: "medium",
            date: "2026-01-03",
            category: "Environment"
        }
    ]);

    // Calculate statistics
    const totalComplaints = complaints.length;
    const statusCounts = {
        submitted: complaints.filter(c => c.status === 'submitted').length,
        inProgress: complaints.filter(c => c.status === 'in-progress').length,
        reviewed: complaints.filter(c => c.status === 'reviewed').length,
        resolved: complaints.filter(c => c.status === 'resolved').length
    };

    // Get status badge styling
    const getStatusBadge = (status) => {
        const styles = {
            'submitted': 'bg-blue-100 text-blue-800 border-blue-300',
            'in-progress': 'bg-yellow-100 text-yellow-800 border-yellow-300',
            'reviewed': 'bg-purple-100 text-purple-800 border-purple-300',
            'resolved': 'bg-green-100 text-green-800 border-green-300'
        };
        const labels = {
            'submitted': 'Submitted',
            'in-progress': 'In Progress',
            'reviewed': 'Reviewed',
            'resolved': 'Resolved'
        };
        return (
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${styles[status]}`}>
                {labels[status]}
            </span>
        );
    };

    // Get priority badge styling
    const getPriorityBadge = (priority) => {
        const styles = {
            'high': 'bg-red-100 text-red-800 border-red-300',
            'medium': 'bg-orange-100 text-orange-800 border-orange-300',
            'low': 'bg-gray-100 text-gray-800 border-gray-300'
        };
        const icons = {
            'high': '🔴',
            'medium': '🟡',
            'low': '⚪'
        };
        return (
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${styles[priority]}`}>
                {icons[priority]} {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
            </span>
        );
    };

    // Get input type badge
    const getInputTypeBadge = (type) => {
        const styles = {
            'text': 'bg-indigo-100 text-indigo-800 border-indigo-300',
            'voice': 'bg-pink-100 text-pink-800 border-pink-300'
        };
        const icons = {
            'text': '✍️',
            'voice': '🎤'
        };
        return (
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${styles[type]}`}>
                {icons[type]} {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6 md:mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">My Complaints Dashboard</h1>
                        <p className="text-sm md:text-base text-gray-600">Track and manage all your submitted complaints</p>
                    </div>
                    <Link className='w-full sm:w-auto bg-black text-white px-7 py-3 rounded-xl hover:bg-gray-900 transition flex items-center justify-center gap-2 shadow-lg active:scale-95' to='/complaint'>
                        <span className='text-xl font-bold'>+</span> New Complaint
                    </Link>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-8">
                    {/* Total Complaints */}
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 rounded-xl shadow-lg flex justify-between items-center sm:col-span-2 lg:col-span-1">
                        <div>
                            <p className="text-gray-700 text-xs font-semibold uppercase tracking-wider">Total</p>
                            <p className="text-3xl md:text-4xl text-black mt-1">{totalComplaints}</p>
                        </div>
                        <div className="text-4xl opacity-20"></div>
                    </div>

                    {/* Submitted */}
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-blue-100 flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase">Submitted</p>
                            <p className="text-2xl md:text-3xl font-black text-blue-600 mt-1">{statusCounts.submitted}</p>
                        </div>
                        <div className=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAA/FBMVEX///8zMzN91j4aof//pyH/cA3/MTF31DGz5pXl9tsAnv/T6f8Al/+Uzf//oAD/8uX/0Jf/pA4mJib/cSr/fCsuLi53d3dVVVX/JCT/2tr/fn4mMzMmLTQ0LiYwKjMmMDR3WC8tVXf/HBwfpv93MjJ3RSvZ8sr/79z/XQD/lZVuu///39IAAAAaGhpKaTafn5/v7+88PDza2tqP215LS0urq6uQkJDx+uzM7rl1xjwRERFkZGSEhIT/6uGr44mG2UuZ3m276KBr0Q6k4X4vNio8STS+vr6q1v/p9P+93///s0b/vp//x6z/t7f/7u7/Skp4SUl3ZlNSZHdeb1Qn8lCMAAAD0UlEQVR4nO3b+XOTQBQH8JCqNK3aFgVaj6hV6xWEEEgqpKaHxrOe////Iixhlz1IcAby0Hnf37Jlhs+8fewuadvpwGbSO347O50AKwpJPKczXde7+ltoSppJ7+hsdH6eeEhagOqdXYxmuSdDHQNykgbaHOnnHIjkCM7Um3VlDwmcqTNSi7rdESDqogSlbwKiJiWl0gFbqlSlw66datUIeEFXqfQLWJNSpZ9BoxQq2D4vUQH3OYn77g2PmkGLEpPTf8+p4Ps8MWlan6sV6BEhMxlakqRWrK/0HrQp0kj6Nut26KUzq5OmmYFPn0HolsrrZA69Dj3IAC+dtE5DP/24qBVsn7uDYp3SEBXo0inUKQ2plQ5pyusUeIXR5DULsKUUdUozOQbsKHWdYEPrpPmrL15TWl2nYXtMIdapUrBO1RLm54KArQWTIz7rNqVnX7FOvZnwhrXm81ToyHXqbEqvfWs9DtM6acV+gkXROvF7MChKXSdYVEmdQFGh4rlrEuXG1ry6STqrNIHyho5pGPbycxH/LtU4yrPJvmEY0yXbRqg++zaF8oaL+yUst4wVSu9SjaK8ODclcWx1a4XLz751o1idsrtGseK2y+tUPyqmNcjn0BxLpvwas+RZqBflBYv7GbbBWFHIm1bUqWYU7SfH8kKNzaNTnMMV/VQ3itXJSj+OGcscWLmA1al8HasRxeo0zQb82GFzqGXLQ4U61YlarJnp3NGxue2wOTTn1epUI0qqUzbqmmwOjbjkO4ymUKxOU+EHYzaHpmjafsnnQ62oUlMnbS22PPD99HFjS8inGlGqfipkHjhFE5277esbfLZu1IdaYUrnsNBa7LlrEkVNhjx3efxpZEo93iBqZZ2yzMnOYxT3u+ZQhb1lxZXucDDgzqONoZY9d9K1Pr88NYVSr5kV0xRKqNPOMy47ECixn3Y+7/HZBUAFwlqwu3eFz82ltWoCJT93LUCJdWoBSrU+QaOEs287UJZqHQdG5edafm8BRk0N1X4HjMq+yRH3FmCUnxxCzEjc76Ab3Y8D2xUHoVHJoiB/FQCPUgRR/yfq5BWXkzagvjwX8rUFqFtXhdxGFKIQhShEIQpRiEIUoiqhDl7wuWwB6tv3QyGX8KiDw2t89u+0ALWPKEQhClGIQhSiEIUoRCEKUYhqGWrrMZ+Nv0d5YyvPEzE/yPDPh2Kyy59KIcPxIzG/yPjv12Lojcfi74ityMhzVwoZviclu/yBlGz8vhQy3JdCbxyJf/hn83/YChLTRhSiEIUoRCEKUeD5N1DFf7yEihELKD+ALxX9x40/d84aanHIWI8AAAAASUVORK5CYII=" width='50' height='50' /></div>
                    </div>

                    {/* In Progress */}
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-yellow-100 flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase">In Progress</p>
                            <p className="text-2xl md:text-3xl font-black text-yellow-600 mt-1">{statusCounts.inProgress}</p>
                        </div>
                        <div className="text-3xl text-orange-600"><i className="fa-regular fa-clock" /></div>
                    </div>

                    {/* Reviewed */}
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-purple-100 flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase">Reviewed</p>
                            <p className="text-2xl md:text-3xl font-black text-purple-600 mt-1">{statusCounts.reviewed}</p>
                        </div>
                        <div className=""><img src="data:image/png;base64,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" width="60" height="60" /></div>
                    </div>

                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-green-100 flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase">Resolved</p>
                            <p className="text-2xl md:text-3xl font-black text-green-600 mt-1">{statusCounts.resolved}</p>
                        </div>
                        <div className=""><img src="data:image/jpeg;base64,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" width='60' height='60' /></div>
                    </div>
                </div>

                {/* Complaints List Section */}
                <div className="mb-6 space-y-2">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">All Complaints</h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {complaints.map((complaint) => (
                        <div
                            key={complaint.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300 transform hover:scale-[1.02]"
                        >
                            {/* Card Header */}
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-b border-gray-200">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-gray-800 flex-1">{complaint.title}</h3>
                                    <span className="text-xs text-gray-500 ml-2">#{complaint.id}</span>
                                </div>
                                <p className="text-xs text-gray-500">
                                    📅 {new Date(complaint.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>

                            {/* Card Body */}
                            <div className="p-4">
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{complaint.description}</p>

                                {/* Category */}
                                <div className="mb-3">
                                    <span className="text-xs text-gray-500">Category: </span>
                                    <span className="text-sm font-semibold text-gray-700">{complaint.category}</span>
                                </div>

                                {/* Badges */}
                                <div className="space-y-2">
                                    {/* Status */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-500 w-16">Status:</span>
                                        {getStatusBadge(complaint.status)}
                                    </div>

                                    {/* Priority */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-500 w-16">Priority:</span>
                                        {getPriorityBadge(complaint.priority)}
                                    </div>

                                    {/* Input Type */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-500 w-16">Type:</span>
                                        {getInputTypeBadge(complaint.inputType)}
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                                <button className="w-full text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                                    View Details →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State (if no complaints) */}
                {complaints.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">📭</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No Complaints Yet</h3>
                        <p className="text-gray-600">You haven't submitted any complaints yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
