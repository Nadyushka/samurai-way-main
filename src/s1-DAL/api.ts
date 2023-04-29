import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'dd3c66bc-c7e8-44a0-a861-e9ed3c285b89',
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
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileApi = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    },
    changePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: profileType) {
        debugger
        return instance.put(`profile`, profile)
    }
}

export const securityApi = {
    getCaptchaUrl: () => {
        return instance.get<{ url: string }>(`security/get-captcha-url`)
    },
}

export const pageApi = {
    getNews: (keyWord: string, category: string) => {
        return axios.get<pageResponseType>(`https://newsdata.io/api/1/news?apikey=pub_20826af33ee2e650c66e1981af460f4cb42db&q=${keyWord}&category=${category}&language=en`, {
            withCredentials: false,
        })
    },
    nextPageNews: (keyWord: string, nextPageId: string) => {
        return axios.get<pageResponseType>(`https://newsdata.io/api/1/news?apikey=pub_20826af33ee2e650c66e1981af460f4cb42db&q=${keyWord}&page=${nextPageId}&language=en`)
    },
    prevPageNews: (keyWord: string, prevPageId: string) => {
        return axios.get<pageResponseType>(`https://newsdata.io/api/1/news?apikey=pub_20826af33ee2e650c66e1981af460f4cb42db&q=${keyWord}&page=${prevPageId}&language=en`)
    },
}

export type pageResponseType = {
    status: '',
    totalResults: number,
    results: newsType[],
    nextPage: string,
}

export type newsType = {
    'title': string | null,
    'link': string | null,
    'keywords': Array<string>,
    'creator': Array<string>,
    'video_url': null | string,
    'description': string | null,
    'content': string | null,
    pubDate: string | null,
    image_url: string | null,
    source_id: '',
    category: Array<string>,
    country: Array<string>,
    language: ''
}

export type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}

