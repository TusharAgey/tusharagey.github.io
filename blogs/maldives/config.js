const images = 
[
["baby-shark-2.jpeg","", ""],
["baby-shark.jpeg", "", ""],
["beautiful-sea.jpeg", "", ""],
["blue-water.jpeg", "", ""],
["bye-cbh.JPG", "", ""],
["cbh-landskape.jpeg", "", ""],
["cbh-landskape1.jpeg", "", ""],
["cbh-landskape2.jpeg", "", ""],
["cbh-spa.jpg", "", ""],
["cbh_eve_beach.jpeg", "", ""],
["cbh_morning.jpeg", "", ""],
["cloud.jpeg", "", ""],
["day.jpeg", "", ""],
["evening-maafushi.jpeg", "", ""],
["fishes.jpeg", "", ""],
["found-nemo.jpeg", "", ""],
["going-back.jpeg", "", ""],
["going-back2.jpeg", "", ""],
["is-this-real.jpeg", "", ""],
["landskape.jpg", "", ""],
["mesmerizing_eve.JPG", "", ""],
["mesmerizing_eve_2.JPG", "", ""],
["mesmerizing_eve_3.JPG", "", ""],
["more-blue-water.jpeg", "", ""],
["more-fishes.jpeg", "", ""],
["morning-at-maafushi-1.jpeg", "", ""],
["morning-at-maafushi.jpeg", "", ""],
["morning.jpeg", "", ""],
["much-more-blue-water.jpeg", "", ""],
["orion.jpeg", "", ""],
["parasailing.jpeg", "", ""],
["ride-in-male.jpeg", "", ""],
["sandbank.jpeg", "", ""],
["sea-of-fish.jpeg", "", ""],
["shell-by-the-sea.jpeg", "", ""],
["shell-crab.JPG", "", ""],
["starbucks-at-airport.jpeg", "", ""],
["stay.jpeg", "", ""],
["sun.jpeg", "", ""],
["sunny-beach-day.jpeg", "", ""],
["towards-male.jpeg", "", ""],
["wallpaper-worthy.jpeg", "", ""],
["water-villa.jpeg", "", ""],
["water_villa_background.jpeg", "", ""],
["water_villa_evening.jpeg", "", ""],
["where-we-stayed.jpeg", "", ""],
["woah-car.jpeg", "", ""]
];

const imgConfig = images.map(img => {
	return {
		image: img[0],
		header: img[1],
		text: img[2]
	};
});