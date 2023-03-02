const axios = require('../api.request');

const getRepoList = params => {
    return axios.request({
        url: 'https://api.github.com/users/dawn-ylcode/repos',
        params,
        method: 'get'
    })
}

module.exports = {
    getRepoList
}