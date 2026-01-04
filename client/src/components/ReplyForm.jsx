import { useState } from 'react';

function ReplyForm({ issue, onClose, onSubmit }) {
    if (!issue) return null;

    const [replyText, setReplyText] = useState('');
    const [statusUpdate, setStatusUpdate] = useState(issue.status);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            id: issue.id,
            reply: replyText,
            status: statusUpdate,
            date: new Date().toISOString()
        });
        setReplyText('');
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md p-2 sm:p-4">
            <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 mx-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-5 md:p-6 text-white flex justify-between items-center">
                    <div>
                        <h2 className="text-lg md:text-xl font-bold tracking-tight">Reply to Grievance</h2>
                        <p className="text-gray-400 text-xs md:text-sm font-medium">Issue #{issue.id} • {issue.area}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5 md:space-y-6">
                    {/* Original Complaint Summary */}
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100/50">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-1 tracking-widest">Original Issue</p>
                        <p className="text-gray-700 text-sm italic font-medium leading-relaxed">"{issue.title}"</p>
                    </div>

                    {/* Status Selection */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1 tracking-wider">Update Status</label>
                        <div className="relative">
                            <select
                                value={statusUpdate}
                                onChange={(e) => setStatusUpdate(e.target.value)}
                                className="w-full p-3 md:p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/50 outline-none transition-all appearance-none font-semibold text-gray-700"
                            >
                                <option value="submitted">Submitted</option>
                                <option value="in-progress">In Progress</option>
                                <option value="reviewed">Reviewed</option>
                                <option value="resolved">Resolved</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Reply Textarea */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1 tracking-wider">Action / Response</label>
                        <textarea
                            required
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder="Type your response to the citizen..."
                            className="w-full h-32 md:h-40 p-4 md:p-5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/50 outline-none transition-all resize-none text-sm md:text-base font-medium placeholder:text-gray-400"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 order-2 sm:order-1 py-3.5 px-6 text-gray-600 font-bold rounded-2xl hover:bg-gray-100 transition-all text-sm uppercase tracking-widest"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 order-1 sm:order-2 py-3.5 px-6 bg-black text-white font-bold rounded-2xl hover:bg-gray-800 transition-all shadow-lg active:scale-95 text-sm uppercase tracking-widest"
                        >
                            Send Reply
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReplyForm;
