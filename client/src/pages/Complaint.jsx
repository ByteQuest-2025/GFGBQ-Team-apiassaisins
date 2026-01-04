import { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { complaintService } from '../services/api';

function Complaint() {
    const [inputMethod, setInputMethod] = useState('text'); // 'text' or 'voice'
    const [textInput, setTextInput] = useState('');
    const [uploadedImages, setUploadedImages] = useState([]);
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState(null);
    const [recordingTime, setRecordingTime] = useState(0);

    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const timerRef = useRef(null);
    const fileInputRef = useRef(null);

    // Start recording
    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                const url = URL.createObjectURL(audioBlob);
                setAudioURL(url);

                // Stop all tracks
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorder.start();
            setIsRecording(true);
            setRecordingTime(0);

            // Start timer
            timerRef.current = setInterval(() => {
                setRecordingTime(prev => prev + 1);
            }, 1000);
        } catch (error) {
            console.error('Error accessing microphone:', error);
            alert('Unable to access microphone. Please check permissions.');
        }
    };

    // Stop recording
    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            clearInterval(timerRef.current);
        }
    };

    // Download recorded audio
    const downloadAudio = () => {
        if (audioURL) {
            const a = document.createElement('a');
            a.href = audioURL;
            a.download = `complaint-recording-${Date.now()}.webm`;
            a.click();
        }
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setUploadedImages(prev => [...prev, ...imageUrls]);
    };

    // Remove image
    const removeImage = (index) => {
        setUploadedImages(prev => prev.filter((_, i) => i !== index));
    };

    // Format time for recording
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const [isLoading, setIsLoading] = useState(false);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const complaintData = {
            description: textInput,
            Location: "Unknown", // Can be enhanced later
            category: "General", // Will be classified by AI
            severity: "Medium"    // Default severity
        };

        try {
            await complaintService.submitComplaint(complaintData);
            alert('Complaint submitted successfully!');
            setTextInput('');
            setUploadedImages([]);
            setAudioURL(null);
        } catch (error) {
            console.error('Error submitting complaint:', error);
            alert('Failed to submit complaint. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <aside className="sticky top-25 mt-20 left-0 shadow-xl h-70 flex flex-col justify-center w-80 p-6 m-6 rounded-2xl border bg-white bg-clip-padding backdrop-blur-md bg-opacity-90">
                <NavLink className={({ isActive }) =>
                    isActive ? '' : 'text-gray-700'
                } to='/'>Home</NavLink><br /><br />
                <NavLink to='/complaint' className={({ isActive }) =>
                    isActive ? 'text-xl tex-blue-500' : 'text-gray-700'
                } >New Complaint</NavLink><br /><br />
                <NavLink to='/dashboard' className={({ isActive }) =>
                    isActive ? 'text-xl text-blue-500' : "text-gray-700"
                }>Dashboard</NavLink>
            </aside >

            <div className="flex-1 p-10">
                <h1 className="text-4xl font-bold mb-8 ">
                    File a New Complaint
                </h1>

                <form onSubmit={handleSubmit} className="max-w-3xl">
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Choose Input Method</h2>
                        <div className="flex gap-5">
                            <button
                                type="button"
                                onClick={() => setInputMethod('text')}
                                className={`border flex-1 py-4 px-6 rounded-xl font-medium transition-all duration-300 ${inputMethod === 'text'
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg scale-105'
                                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
                                    }`}
                            >
                                <span className="text-2xl mb-2 block">Type Your Problem</span>

                            </button>
                            <button
                                type="button"
                                onClick={() => setInputMethod('voice')}
                                className={`flex-1 py-4 px-6 rounded-xl border font-medium transition-all duration-300 ${inputMethod === 'voice'
                                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300'
                                    }`}
                            >
                                <span className="text-2xl mb-2 block">🎤</span>
                                Explain Orally
                            </button>
                        </div>
                    </div>

                    {inputMethod === 'text' && (
                        <div className="mb-8 animate-fadeIn">
                            <label className="block text-lg font-semibold mb-3 text-gray-800">
                                Describe Your Problem
                            </label>
                            <textarea
                                value={textInput}
                                onChange={(e) => setTextInput(e.target.value)}
                                placeholder="Please explain your issue in detail..."
                                className="w-full h-48 p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                                required={inputMethod === 'text'}
                            />
                        </div>
                    )}

                    {inputMethod === 'voice' && (
                        <div className="mb-8 animate-fadeIn">
                            <label className="block text-lg font-semibold mb-3 text-gray-800">
                                Record Your Problem
                            </label>
                            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
                                <div className="flex flex-col items-center gap-6">
                                    {/* Recording Button */}
                                    <button
                                        type="button"
                                        onClick={isRecording ? stopRecording : startRecording}
                                        className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl transition-all duration-300 ${isRecording
                                            ? 'bg-red-500 hover:bg-red-600 animate-pulse shadow-lg shadow-red-300'
                                            : 'bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-lg'
                                            }`}
                                    >
                                        {isRecording ? '⏹️' : '🎤'}
                                    </button>

                                    {/* Recording Status */}
                                    <div className="text-center">
                                        {isRecording ? (
                                            <div>
                                                <p className="text-red-600 font-semibold text-lg">Recording...</p>
                                                <p className="text-gray-600 text-2xl font-mono mt-2">{formatTime(recordingTime)}</p>
                                            </div>
                                        ) : audioURL ? (
                                            <div className="space-y-4">
                                                <p className="text-green-600 font-semibold">✓ Recording Complete</p>
                                                <audio src={audioURL} controls className="mx-auto" />
                                                <button
                                                    type="button"
                                                    onClick={downloadAudio}
                                                    className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md"
                                                >
                                                    💾 Download Recording
                                                </button>
                                            </div>
                                        ) : (
                                            <p className="text-gray-500">Click the microphone to start recording</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Image Upload Section */}
                    <div className="mb-8">
                        <label className="block text-lg font-semibold mb-3 text-gray-800">
                            Upload Supporting Images (Optional)
                        </label>
                        <div className="space-y-4">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                accept="image/*"
                                multiple
                                className="hidden"
                            />
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full py-4 px-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all text-gray-600 hover:text-blue-600 font-medium"
                            >
                                <span className="text-2xl mr-2">📸</span>
                                Click to Upload Images
                            </button>

                            {/* Image Preview */}
                            {uploadedImages.length > 0 && (
                                <div className="grid grid-cols-3 gap-4">
                                    {uploadedImages.map((url, index) => (
                                        <div key={index} className="relative group">
                                            <img
                                                src={url}
                                                alt={`Upload ${index + 1}`}
                                                className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(index)}
                                                className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 px-8 bg-black text-white text-lg font-semibold rounded-xl hover:bg-gray-900 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </>
                        ) : (
                            'Submit Complaint'
                        )}
                    </button>
                </form>
            </div>
        </div >
    );
}

export default Complaint;