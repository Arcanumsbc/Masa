import {map as createMap, tileLayer as createTitleLayers, icon as createIcon, marker as createMarker} from '../../vendor/leaflet';

const initContactsMap = () => {
  if (document.querySelector('#map')) {
    document.querySelector('#map').querySelector('picture').remove();

    const coordinate = [55.028820, 82.928150];
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const markerText = `
<p style="width: 230px" >г. Новосибирск, ул. Щетинкина 68, культурный центр «Бейт Менахем»</p>
<p>Номер телефона: <a href="tel:896387687676">8 963 876 876 76</a></p>
`;

    const map = createMap('map', {
      center: coordinate,
      zoom: 16,
      scrollWheelZoom: false,
    });

    const icon = createIcon({
      iconUrl: './img/svg/map-pin.svg',
      iconSize: [29, 40],
    });

    createTitleLayers(url).addTo(map);
    createMarker(coordinate, {icon}).bindPopup(markerText).addTo(map);
  }
};

export {initContactsMap};
