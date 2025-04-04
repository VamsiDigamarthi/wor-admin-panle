// const GOOGLE_MAPS_APIKEY = "AIzaSyAvJUZ3vsynRkQhXSdZL-BIFo26bXH-Al8"; // Replace with your API Key

import React, { FC, useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { activeOrder } from "../slice/activeOrderSlice";

const GOOGLE_MAPS_APIKEY = "AIzaSyAvJUZ3vsynRkQhXSdZL-BIFo26bXH-Al8"; // Replace with your API Key

const containerStyle = {
  width: "100%",
  height: "500px",
};

type GoogleMapComponentType = {
  orders: activeOrder[];
  trackingData: {
    orderId: string;
    coordinates: { lat: number; lng: number };
  }[];
};

const GoogleMapComponent: FC<GoogleMapComponentType> = ({
  orders,
  trackingData,
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_APIKEY,
  });

  const [directionsList, setDirectionsList] = useState<any[]>([]);
  const [colors, setColors] = useState<{ polyline: string; marker: string }[]>(
    []
  );

  useEffect(() => {
    if (!isLoaded || orders.length === 0) return;

    const directionsService = new window.google.maps.DirectionsService();
    const fetchDirections = async () => {
      const newDirectionsList = [];
      const newColors = [];

      for (const order of orders) {
        const origin = {
          lat: order.pickup.coordinates[1],
          lng: order.pickup.coordinates[0],
        };
        const destination = {
          lat: order.drop.coordinates[1],
          lng: order.drop.coordinates[0],
        };

        console.log("origin", origin, "destination", destination);

        try {
          const result = await new Promise((resolve, reject) => {
            directionsService.route(
              {
                origin,
                destination,
                travelMode: window.google.maps.TravelMode.DRIVING,
              },
              (response, status) => {
                if (status === "OK") resolve(response);
                else reject(status);
              }
            );
          });

          // console.log("result", result);
          newDirectionsList.push(result);

          // Generate color shades
          const baseColor = Math.floor(Math.random() * 16777215).toString(16);
          const polylineColor = `#${baseColor}99`; // Light shade
          const markerColor = `#${baseColor}`; // Darker shade

          newColors.push({ polyline: polylineColor, marker: markerColor });
        } catch (error) {
          console.error("Error fetching directions:", error);
        }
      }

      setDirectionsList(newDirectionsList);
      setColors(newColors);
    };

    fetchDirections();
  }, [isLoaded, orders]);

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} zoom={12}>
      {orders.map((order, index) => {
        return (
          <React.Fragment key={order._id}>
            <Marker
              position={{
                lat: order.pickup.coordinates[0],
                lng: order.pickup.coordinates[1],
              }}
              label="Start-Point"
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: colors[index]?.marker || "#FF0000",
                fillOpacity: 1,
                strokeWeight: 1,
                strokeColor: "#000",
              }}
            />
            <Marker
              position={{
                lat: order.captainCoor[0],
                lng: order.captainCoor[1],
              }}
              label="Pickup-Point"
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: colors[index]?.marker || "#FF0000",
                fillOpacity: 1,
                strokeWeight: 1,
                strokeColor: "#000",
              }}
            />
            <Marker
              position={{
                lat: order.drop.coordinates[0],
                lng: order.drop.coordinates[1],
              }}
              label="End-Point"
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: colors[index]?.marker || "#FF0000",
                fillOpacity: 1,
                strokeWeight: 1,
                strokeColor: "#000",
              }}
            />
          </React.Fragment>
        );
      })}

      {trackingData?.map((eachPerson, index) => {
        const markerColor = colors[index]?.marker || "#FF0000";
        return (
          <Marker
            key={index}
            position={eachPerson?.coordinates}
            label="🚗"
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              scale: 10,
              fillColor: markerColor,
              fillOpacity: 1,
              strokeWeight: 1,
              strokeColor: "#000",
            }}
            animation={google.maps.Animation.DROP}
          />
        );
      })}

      {directionsList.map((directions, index) => {
        return (
          <DirectionsRenderer
            key={index}
            directions={directions}
            options={{
              polylineOptions: {
                strokeColor: colors[index]?.polyline || "#0000FF",
                strokeOpacity: 0.8,
                strokeWeight: 6,
              },
            }}
          />
        );
      })}
    </GoogleMap>
  );
};

export default GoogleMapComponent;
