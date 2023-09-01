import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function Mapa() {
  // Estado para armazenar os marcadores no mapa
  const [markers, setMarkers] = useState([]);
  
  // Estado para armazenar a região do mapa
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Chave de API para acesso aos serviços do Google Maps
  const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

  // Função assíncrona para buscar lugares próximos usando a API do Google Places
  const fetchPlaces = async () => {
    const location = `${region.latitude},${region.longitude}`;
    const radius = 200;

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&key=${API_KEY}`
    );

    const data = await response.json(); // Converte a resposta em formato JSON

    // Se houver resultados, atualiza o estado dos marcadores
    if (data.results) {
      setMarkers(data.results);
    }
  };

  // Efeito que é executado quando a região do mapa muda
  useEffect(() => {
    fetchPlaces();
  }, [region]);

  // Componente de mapa e marcadores
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MapView
        showsMyLocationButton={true}
        showsUserLocation={true}
        style={{ width: '100%', height: '100%' }}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            title={marker.name}
            description={marker.vicinity}
            coordinate={{
              latitude: marker.geometry.location.lat,
              longitude: marker.geometry.location.lng,
            }}
          />
        ))}
      </MapView>
    </View>
  );
}

export default Mapa;
