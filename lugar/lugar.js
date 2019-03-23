const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUri = encodeURI(dir);

    const instance = axios.create({

        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUri}`,
        headers: { 'X-RapidAPI-Key': '96cb164954msh79871bb179fbcf2p1c3e39jsn9ffcd67a8565' }
    });


    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para la dirección ${dir}`);
    }

    const data = resp.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}