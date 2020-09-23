import data from './data.json'

const API = {
    getData: (page = 1, count = 10) => {
        return count === 0 ? data : data.slice((page-1)*count, page*count)
    }
}

export default API
window.API = API
