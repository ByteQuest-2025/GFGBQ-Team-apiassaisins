import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ComplaintMap from '../components/ComplaintMap';
import ReplyForm from '../components/ReplyForm';
import { complaintService } from '../services/api';

function InfrastructureDepartmentDashboard() {
    const [grievances, setGrievances] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchGrievances = async () => {
            try {
                const data = await complaintService.getAllComplaints();
                // Map backend data to frontend format
                const mappedData = data.map(g => ({
                    id: g.id,
                    title: g.description,
                    area: g.location || 'Unknown',
                    category: g.category || 'General',
                    priority: (g.severity || 'medium').toLowerCase(),
                    status: (g.status || 'submitted').toLowerCase(),
                    date: g.createdAt || new Date().toISOString()
                }));

                setGrievances(mappedData);
            } catch (error) {
                console.error('Error fetching grievances:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGrievances();
    }, []);

    // Calculate statistics

    // Priority distribution for pie chart
    const priorityData = [
        { name: 'High', value: grievances.filter(g => g.priority === 'high').length, color: '#EF4444' },
        { name: 'Medium', value: grievances.filter(g => g.priority === 'medium').length, color: '#F59E0B' },
        { name: 'Low', value: grievances.filter(g => g.priority === 'low').length, color: '#9CA3AF' }
    ];

    // Category distribution for bar chart
    const categoryData = [
        { category: 'Roads', count: grievances.filter(g => g.category === 'Roads').length },
        { category: 'Streetlights', count: grievances.filter(g => g.category === 'Streetlights').length },
        { category: 'Buildings', count: grievances.filter(g => g.category === 'Buildings').length },
        { category: 'Drainage', count: grievances.filter(g => g.category === 'Drainage').length },
        { category: 'Parks', count: grievances.filter(g => g.category === 'Parks').length }
    ].sort((a, b) => b.count - a.count);

    // Area-wise priority analysis for map
    const areaData = [
        { area: 'North Zone', highPriority: grievances.filter(g => g.area === 'North Zone' && g.priority === 'high').length, total: grievances.filter(g => g.area === 'North Zone').length },
        { area: 'East Zone', highPriority: grievances.filter(g => g.area === 'East Zone' && g.priority === 'high').length, total: grievances.filter(g => g.area === 'East Zone').length },
        { area: 'South Zone', highPriority: grievances.filter(g => g.area === 'South Zone' && g.priority === 'high').length, total: grievances.filter(g => g.area === 'South Zone').length },
        { area: 'West Zone', highPriority: grievances.filter(g => g.area === 'West Zone' && g.priority === 'high').length, total: grievances.filter(g => g.area === 'West Zone').length },
        { area: 'Central Zone', highPriority: grievances.filter(g => g.area === 'Central Zone' && g.priority === 'high').length, total: grievances.filter(g => g.area === 'Central Zone').length }
    ].sort((a, b) => b.highPriority - a.highPriority);

    const [selectedGrievance, setSelectedGrievance] = useState(null);

    // Calculate statistics
    const totalGrievances = grievances.length;
    const criticalIssues = grievances.filter(g => g.priority === 'high').slice(0, 6);

    // Get color based on priority count
    const getAreaColor = (count) => {
        if (count >= 3) return '#EF4444'; // Red - High
        if (count >= 2) return '#F59E0B'; // Orange - Medium
        if (count >= 1) return '#FCD34D'; // Yellow - Low-Medium
        return '#10B981'; // Green - Safe
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6 md:mb-8 text-center md:text-left">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">🏗️ Infrastructure Department Dashboard</h1>
                    <p className="text-sm md:text-base text-gray-600">Monitor and analyze infrastructure-related grievances</p>
                </div>

                {/* Total Grievances Card */}
                <div className="mb-6 md:mb-8 max-w-sm mx-auto md:mx-0">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-orange-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-orange-600 text-sm md:text-lg font-semibold uppercase tracking-wider">Total Grievances</p>
                                <p className="text-4xl md:text-6xl text-red-700 font-black mt-2">{totalGrievances}</p>
                                <p className="text-orange-400 text-xs md:text-sm mt-1 font-medium italic">Public Works Division</p>
                            </div>
                            <div className="text-5xl md:text-6xl opacity-20">🏗️</div>
                        </div>
                    </div>
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                    {/* Priority Pie Chart */}
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span>📊</span> Priority Distribution
                        </h2>
                        <div className="h-[250px] md:h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={priorityData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                                        outerRadius="80%"
                                        dataKey="value"
                                    >
                                        {priorityData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Category Bar Chart */}
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span>📈</span> Grievances by Category
                        </h2>
                        <div className="h-[250px] md:h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={categoryData} layout="vertical" margin={{ left: 20, right: 20 }}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="category" type="category" width={100} fontSize={12} />
                                    <Tooltip />
                                    <Bar dataKey="count" fill="#F97316" radius={[0, 4, 4, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Critical Issues and Map Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
                    {/* Recent Critical Issues */}
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span>🚨</span> Recent Critical Issues
                        </h2>
                        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {criticalIssues.map((issue) => (
                                <div key={issue.id} className="p-4 bg-red-50/50 border-l-4 border-red-500 rounded-r-lg hover:bg-red-50 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-gray-800 text-sm leading-tight">{issue.title}</h3>
                                        <span className="shrink-0 text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">HIGH</span>
                                    </div>
                                    <div className="flex flex-wrap gap-3 text-[11px] text-gray-500 mb-3">
                                        <span className="flex items-center gap-1">📍 {issue.area}</span>
                                        <span className="flex items-center gap-1">📅 {new Date(issue.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Link className='text-blue-600 text-xs font-semibold hover:underline decoration-2 underline-offset-4 tracking-tight'>VIEW DETAILS</Link>
                                        <button
                                            onClick={() => setSelectedGrievance(issue)}
                                            className="bg-black text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-gray-800 transition transform active:scale-95 shadow-md"
                                        >
                                            REPLY
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span>🗺️</span> Geographic Distribution
                        </h2>
                        <p className="text-xs text-gray-500 mb-4 leading-relaxed italic">Interactive map showing real-time distribution of reported infrastructure projects.</p>

                        <div className="h-[300px] md:h-[350px] relative rounded-xl overflow-hidden border border-gray-100 shadow-inner">
                            <ComplaintMap areaData={areaData} />
                        </div>

                        {/* Map Legend */}
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg flex flex-wrap gap-4 items-center justify-center text-[10px] md:text-xs">
                            <div className="flex items-center gap-1.5 font-medium text-gray-600">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div> Critical
                            </div>
                            <div className="flex items-center gap-1.5 font-medium text-gray-600">
                                <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div> High
                            </div>
                            <div className="flex items-center gap-1.5 font-medium text-gray-600">
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div> Medium
                            </div>
                            <div className="flex items-center gap-1.5 font-medium text-gray-600">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div> Safe
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
            `}} />

            {/* Common Reply Form Modal */}
            {selectedGrievance && (
                <ReplyForm
                    issue={selectedGrievance}
                    onClose={() => setSelectedGrievance(null)}
                    onSubmit={(data) => {
                        console.log('Reply submitted:', data);
                        alert(`Reply sent for Issue #${data.id}`);
                        setSelectedGrievance(null);
                    }}
                />
            )}
        </div>
    );
}

export default InfrastructureDepartmentDashboard;
