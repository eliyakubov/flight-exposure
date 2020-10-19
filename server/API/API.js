require('dotenv').config()
const axios = require('axios')

module.exports = {
    async makePostRequest(path, data) {
        const res = await axios
            .post('http://127.0.0.1:5000' + path, data)
            .catch(error => console.log('error: ', error))
    }
}
