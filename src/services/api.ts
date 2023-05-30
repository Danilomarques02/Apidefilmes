import axios from 'axios'

export const api = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:"ec33387d54e71e38f17f08afbff463c8",
        language:"pt-BR",
        include_adult: false,
    },
})