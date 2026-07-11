import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://fan-fast.onrender.com/api',
});

export const fetchEvents = () => api.get('/events');
export const fetchGallery = () => api.get('/gallery');
export const fetchFaq = () => api.get('/faq');
export const submitContact = (payload) => api.post('/contact', payload);

export default api;
