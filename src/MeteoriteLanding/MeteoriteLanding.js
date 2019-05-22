import React from "react";
import DataService from "../services/dataService";

export default function MeteoriteLanding(props) {
  const {
    name,
    id,
    nametype,
    recclass,
    mass,
    fall,
    year,
    longitude,
    latitude
  } = new DataService(props.info);

  return (
    <tr>
      <td>{name}</td>
      <td>{id}</td>
      <td>{nametype}</td>
      <td>{recclass}</td>
      <td>{mass}</td>
      <td>{fall}</td>
      <td>{year}</td>
      <td>{latitude}</td>
      <td>{longitude} </td>
    </tr>
  );
}
