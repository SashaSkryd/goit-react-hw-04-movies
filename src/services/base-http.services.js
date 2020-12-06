import axios from 'axios'

const KEY = '6a7678c71795cb2e35589b03882658b0'

export function fetchPost () {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
    return axios.get(url).then(res => {
        return res.data;
    })
}

export function fetchMovie(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
    return axios.get(url).then(res => {
        return res.data
    })
}

export function fetchCast(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
    return axios.get(url).then(res => {
        return res.data;
    })
}

export function fetchReviews(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    return axios.get(url).then(res => {
        return res.data;
    })
}

export function fetchQuery(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    return axios.get(url).then(res => {
        return res.data;
    })
}
// KEYv4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTc2NzhjNzE3OTVjYjJlMzU1ODliMDM4ODI2NThiMCIsInN1YiI6IjVmYzc5MzA0MjFjNGNhMDAzZjIwZTdiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5tLvT6w8Dmw1RgSGaWNAc_XpKILMCJjsNewdc5RZOMU'

// KEYv3 = '6a7678c71795cb2e35589b03882658b0'