function initMap() {
	var warsaw = {lat: 52.229852, lng: 21.011723};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: warsaw
	});

	var marker = new google.maps.Marker({
		position: warsaw,
		map: map
	});
}