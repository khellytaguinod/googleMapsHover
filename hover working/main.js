function initMap() {
	// let schools = [
	// 	{lat: 16.037623, lng: 120.332137}, //ednas
	// 	{lat: 16.040096, lng: 120.339856}, //dwad
	// 	{lat: 16.0325682, lng: 120.3310891} //dominican
	// ];

	let schools = {lat: 16.037623, lng: 120.332137}

	let map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: {lat: 16.0432998, lng: 120.3333124}
	});

	let contentString = `
	<div id="content">
		<div id="siteNotice"></div>
		<h1 id="firstHeading" class="firstHeading">Ednas School</h1>
		<div id="bodyContent">
			<p><b>Ednas School</b>, as an institution in a democracy, is concerned with creating learning opportunities that permit and encourage person to realize his or her fullest potential. This encompasses the complete formation of the entire man by the progressive and harmonious development of his moral, spiritual, intellectual, social aesthetic, and physical faculties.
		</div>
	</div>
	`;

	let infowindow = new google.maps.InfoWindow({
	  content: contentString
	});

	let marker = new google.maps.Marker({
		position: schools,
		map: map
	});
	marker.addListener('click', () => {
		infowindow.open(map, marker);
	});
	marker.addListener('hover', () => {
		infowindow.open(map, marker);
	});
}


// var contentString = '<div id="content">'+
//     '<div id="siteNotice">'+
//     '</div>'+
//     '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
//     '<div id="bodyContent">'+
//     '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
//     'sandstone rock formation in the southern part of the '+
//     'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
//     'south west of the nearest large town, Alice Springs; 450&#160;km '+
//     '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
//     'features of the Uluru - Kata Tjuta National Park. Uluru is '+
//     'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
//     'Aboriginal people of the area. It has many springs, waterholes, '+
//     'rock caves and ancient paintings. Uluru is listed as a World '+
//     'Heritage Site.</p>'+
//     '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
//     'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
//     '(last visited June 22, 2009).</p>'+
//     '</div>'+
//     '</div>';

// var infowindow = new google.maps.InfoWindow({
//   content: contentString
// });

// var marker = new google.maps.Marker({
//           position: uluru,
//           map: map,
//           title: 'Uluru (Ayers Rock)'
//         });
//         marker.addListener('click', function() {
//           infowindow.open(map, marker);
//         });