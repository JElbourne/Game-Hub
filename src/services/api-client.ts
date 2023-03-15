import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '52e39eb5f86c40c7952b679b5db47fbc'
    }
})
