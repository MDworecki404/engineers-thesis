import L from 'leaflet'

const displayMap = () => {

    const map = L.map('map', {
        center: [51.35986770935379, 16.57109135732551],
        zoom: 12
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

}

export default displayMap