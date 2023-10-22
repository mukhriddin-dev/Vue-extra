import api from '../axios';


const useProdutsApi = {
    getAll: () => api.get('/products'),
    getOneItem:  (id)=> api.get(`/products/${id}`)
}


export default useProdutsApi;