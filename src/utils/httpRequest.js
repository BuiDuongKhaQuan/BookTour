import { Email } from '@mui/icons-material';
import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: true, // Bật gửi cookie kèm theo yêu cầu
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export const register = async (name, email, password) => {
    try {
        const response = await request.post('/users/register', {
            name,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const verify = async (email, otp) => {
    try {
        const response = await request.put('/users/verify', {
            otp,
            email,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const response = await request.post('/users/login', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const updateUser = async (id, data) => {
    try {
        const response = await request.put(`/users/${id}/edit`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const logout = async () => {
    try {
        const response = await request.post('users/logout');
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const uploadAvatar = async (formData) => {
    try {
        const response = await request.post('/users/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        throw new Error('Error uploading image: ' + error.message);
    }
};

export const getDestinations = async () => {
    try {
        const response = await request.get('/destinations/all');
        return response.data;
    } catch (error) {
        throw new Error('Error uploading image: ' + error.message);
    }
};
export const getDestinationsSize = async () => {
    try {
        const response = await request.get('/destinations/all-size');
        return response.data;
    } catch (error) {
        throw new Error('Error uploading image: ' + error.message);
    }
};
export const getDestinationsLimit = async (start, page) => {
    try {
        const response = await request.get(`/destinations?start=${start}&page=${page}`);
        return response.data;
    } catch (error) {
        throw new Error('Error uploading image: ' + error.message);
    }
};
export const getTours = async () => {
    try {
        const response = await request.get('/tours');
        return response.data;
    } catch (error) {
        throw new Error('Error uploading image: ' + error.message);
    }
};
export const findTourById = async (id) => {
    try {
        const response = await request.get(`/tours/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error uploading image: ' + error.message);
    }
};
export const getToursSize = async () => {
    try {
        const response = await request.get('/tours/all-size');
        return response.data;
    } catch (error) {
        throw new Error('Error uploading image: ' + error.message);
    }
};
export const getToursLimit = async (start, page) => {
    try {
        const response = await request.get(`/tours?start=${start}&page=${page}`);
        return response.data;
    } catch (error) {
        throw new Error('Error uploading image: ' + error.message);
    }
};
export const updateTour = async (id, data) => {
    try {
        const response = await request.post(`/tours/${id}/edit`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const book = async (data) => {
    try {
        const response = await request.post('/book', data);
        return response.data;
    } catch (error) {
        throw new Error('Error uploading image: ' + error.message);
    }
};
export const getWattingTour = async () => {
    try {
        const response = await request.get('/book/watting');
        return response.data;
    } catch (error) {
        throw new Error('Error uploading image: ' + error.message);
    }
};
export const getCompletedTour = async () => {
    try {
        const response = await request.get('/book/completed');
        return response.data;
    } catch (error) {
        throw new Error('Error uploading image: ' + error.message);
    }
};
export const paypalOrder = async (tourId, price) => {
    try {
        const data = {
            cart: [
                {
                    id: tourId,
                    quantity: '1',
                },
            ],
            price,
        };

        const response = await request.post('/paypal/orders', data);

        return response.data;
    } catch (error) {
        throw new Error('Error creating PayPal order: ' + error.message);
    }
};
export const paypalCapture = async (orderID) => {
    try {
        const response = await request.post(`/paypal/orders/${orderID}/capture`);
        return response.data;
    } catch (error) {
        throw new Error('Error uploading image: ' + error.message);
    }
};
export const paypalSendMail = async (orderData, email, tourBookedId) => {
    try {
        const response = await request.post('/paypal/orders/sendMail', { orderData, email, tourBookedId });

        return response.data;
    } catch (error) {
        throw new Error('Error creating PayPal order: ' + error.message);
    }
};
export default request;
