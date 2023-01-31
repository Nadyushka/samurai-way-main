import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})

export const usersApi = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(resolve => resolve.data)
    },
    follow: (userId: number) => {
        return instance.post(`follow/${userId}`)
    },
    unFollow: (userId: number) => {
        return instance.delete(`follow/${userId}`)
    },
    getProfile: (userId: string) => {
       return instance.get(`profile/` + userId)
    },
}

export const authApi = {
    me: () => {
        return  instance.get(`auth/me`)
    }
}


