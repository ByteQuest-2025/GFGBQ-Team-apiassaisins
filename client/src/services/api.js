import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const complaintService = {
    submitComplaint: async (complaintData) => {
        const response = await api.post('/complaint', complaintData);
        return response.data;
    },
    getAllComplaints: async () => {
        const response = await api.get('/complaint/all');
        return response.data;
    },
    filterComplaints: async (params) => {
        const response = await api.get('/complaint/filter', { params });
        return response.data;
    },
    updateStatus: async (id, status) => {
        const response = await api.put(`/complaint/${id}/status`, null, {
            params: { status },
        });
        return response.data;
    },
};

export default api;
