let BASE_URL = process.env.BASE_URL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:3500'
} else {
    BASE_URL = 'https://api.lijovijayan.dev'
}

export const ENV = {
    api: {
        data: '/api/v1/data'
    }
}
