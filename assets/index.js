const ACCESS_TOKEN = "pk.eyJ1IjoiYnJ5YW50b21vcmVnaWUiLCJhIjoiY2wwc2t6dzQwMDRpYzNwcGJ3dmJsaDZibiJ9.8LglKcpSz-wl_7mwu0Fq5Q"

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${ACCESS_TOKEN}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: ACCESS_TOKEN
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

