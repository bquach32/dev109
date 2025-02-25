function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
var sunsetHotel = new Hotel('Sunset', 86, 10);

  document.getElementById("hotel1").innerHTML = 
  quayHotel.name + " rooms: " + quayHotel.checkAvailability();
  
  document.getElementById("hotel2").innerHTML = 
  parkHotel.name + " rooms: " + parkHotel.checkAvailability();
  
  document.getElementById("hotel3").innerHTML = 
  sunsetHotel.name + " rooms: " + sunsetHotel.checkAvailability();
