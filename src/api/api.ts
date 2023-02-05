import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a99718f7-23ff-4c8c-aaa8-bda50310d20d',
    }
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
}

export const authApi = {
    me: () => {
        return  instance.get(`auth/me`)
    }
}

export const profileApi = {
       getProfile (userId: string)  {
        return instance.get(`profile/` + userId)
    },
    getStatus (userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus (status: string) {
        return instance.put(`profile/status/`,{status})
    },
}


