import axios from "axios";

const apiPorta = "5063";

//apiLocal ela recebe o endereco da api
const ApiLocal = `http://localhost:${apiPorta}/api/`;

const api = axios.create({
    baseURL: ApiLocal
});

export default api;