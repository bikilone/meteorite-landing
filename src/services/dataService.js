function DataService(data) {
  this.name = data.name || "N/A";
  this.id = data.id || "N/A";
  this.nametype = data.nametype || "N/A";
  this.recclass = data.recclass || "N/A";
  this.mass = Math.floor(data.mass) || "N/A";
  this.fall = data.fall || "N/A";
  this.year = data.year ? new Date(data.year).getFullYear().toString() : "N/A";

  this.latitude = data.geolocation ? data.geolocation.latitude : "N/A";
  this.longitude = data.geolocation ? data.geolocation.longitude : "N/A";
}

export default DataService;
