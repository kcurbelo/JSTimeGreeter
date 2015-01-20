
var today = new Date();
var hourNow = today.getHours();
var greeting; 

if(hourNow >= 17) {
	greeting = "Good evening!";
	document.body.style.backgroundImage = "url('evening.jpg')";// must have quotes!...why? 
}
else if(hourNow >= 12) {
	greeting = "Good Afternoon!";
	document.body.style.backgroundImage = "url('afternoon.jpg')"
}
else if(hourNow >= 0) {
	greeting = "Good Morning!";
  document.body.style.backgroundImage = "url('morning.jpg')"
}
else 
  greeting = "Welcome!"

document.write("<h2>" + greeting + "</h2)")

// Want to add:
// - A time display
// - Random quote selector
// Why doesnt it work when I put it into a function?

