const address = document.getElementById("address");
const ipLocation = document.getElementById("location")
const name = document.getElementById("name")
const isp = document.getElementById("isp")
const searchButton = document.getElementById("button-addon2")
const ipInput = document.getElementById("input")


const LEAFLET_ACCESS_TOKEN = "pk.eyJ1IjoiYnJ5YW50b21vcmVnaWUiLCJhIjoiY2wwc2t6dzQwMDRpYzNwcGJ3dmJsaDZibiJ9.8LglKcpSz-wl_7mwu0Fq5Q"
const GEO_API_KEY = "at_ivdTE5CD6XzvRP9DPtmhArm2oWvEH"

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${LEAFLET_ACCESS_TOKEN}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: LEAFLET_ACCESS_TOKEN
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);


function getIpInformation() {

    fetch(`https://geo.ipify.org/api/v2/country?apiKey=${GEO_API_KEY}&ipAddress=208.65.153.251`)
    .then(response => response.json())
    .then(data => {
        address.textContent = data.ip
        ipLocation.textContent = data.location.region
        name.textContent = data.as.name
        isp.textContent = data.isp
    })

}

searchButton.addEventListener("click", getIpInformation)


