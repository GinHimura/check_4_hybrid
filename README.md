# Projeto CP4 - Checkmaps

O projeto **Projeto CP4 - Checkmaps** é um aplicativo para Android desenvolvido em React Native que utiliza o Google Maps para exibir um mapa interativo com marcadores de lugares próximos. O aplicativo requer permissões de localização e acesso à internet para funcionar corretamente. A seguir, você encontrará instruções sobre como configurar e utilizar o aplicativo.

## Configuração

Antes de iniciar, é necessário realizar algumas configurações no código para que o aplicativo funcione corretamente.

### AndroidManifest.xml

1. Abra o arquivo `AndroidManifest.xml` localizado em `android/app/src/main/AndroidManifest.xml`.
2. Substitua `YOUR_GOOGLE_API_KEY` pela sua chave de API do Google Maps na seguinte linha:

```xml
<meta-data
  android:name="com.google.android.geo.API_KEY"
  android:value="YOUR_GOOGLE_API_KEY"/>
```

Certifique-se de que as permissões de localização estão configuradas corretamente:

```xml
	<uses-permission android:name="android.permission.INTERNET" />
	<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
	<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
	<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />

```

### Componente Mapa (Mapa.js)

1. Abra o arquivo `Mapa.js` localizado em `src/Mapa.js`.
2. Substitua `YOUR_GOOGLE_MAPS_API_KEY` pela sua chave de API do Google Maps na seguinte linha:

```javascript
	const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
```

## Como Usar

Siga as instruções abaixo para executar o aplicativo e visualizar o mapa com os marcadores de lugares próximos.

1. Certifique-se de que você possui o ambiente de desenvolvimento React Native configurado em sua máquina.
2. Clone o repositório do projeto
3. Navegue até o diretório do projeto
4. Instale as dependências do projeto
5. Execute o aplicativo no dispositivo Android ou emulador
6. O aplicativo será instalado e executado no dispositivo ou emulador Android. Você verá um mapa interativo exibindo marcadores de lugares próximos.

## Observações

Certifique-se de que sua chave de API do Google Maps esteja configurada corretamente e que as permissões necessárias estejam definidas no arquivo `AndroidManifest.xml`.
O aplicativo "Projeto CP4 - Checkmaps" foi desenvolvido como parte do projeto CP4 e tem como objetivo demonstrar o uso do Google Maps e da API de locais próximos em um aplicativo React Native.
Se você encontrar problemas durante a configuração ou uso do aplicativo, consulte a documentação do React Native e do Google Maps para obter ajuda adicional.
Este projeto é apenas para fins educacionais e de demonstração. Certifique-se de estar em conformidade com os termos de uso do Google Maps ao utilizar suas APIs.





