import  api from './api.service';

const getAll = async () => {
    try {
        const response = await api.get('/hotel-services');
        return response.data;
    } catch (error) {
        console.log('Error:', error);
    }
};

const getById = async (id: string) => {
    try {
        const response: any = await api.get(`/hotel-services/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error:', error);
    }
};

const search = async (filter: any) => {
    try {
        const response: any = await api.get('/hotel-services/search', { params: filter });
        return response.data;
    } catch (error) {
        console.log('Error:', error);
    }
}

const create = async (data: any) => {
    try {
        const response: any = await api.post('/hotel-services', data);
        return response.data;
    } catch (error) {
        console.log('Error:', error);
    }
}

const update = async (id: string, data: any) => {
    try {
        const response: any = await api.put(`/hotel-services/${id}`, data);
        return response.data;
    } catch (error) {
        console.log('Error:', error);
    }
}

const remove = async (id: string) => {
    try {
        const response: any = await api.delete<boolean>(`/hotel-services/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error:', error);
    }
}

export const AmenityService = {
    getAll,
    getById,
    search,
    create,
    update,
    remove
}