const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=43c58f29f2e4bda70468d3517fe086ac`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}