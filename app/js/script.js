var map;
function initMap() {
	 map = new google.maps.Map(document.getElementById('map'), {
			// При создании объекта карты необходимо указать его свойства
			// center - определяем точку на которой карта будет центрироваться
			center: {lat: 50.026278, lng: 36.216890},
			// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
			zoom: 17,
			styles: [
			  {
				"elementType": "labels.text",
				"stylers": [
				  { "visibility": "simplified" },
				  { "color": "#ffffff" }
				]
			  },{
				"elementType": "geometry.fill",
				"stylers": [
				  { "color": "#808080" }
				]
			  },{
				"elementType": "geometry.stroke",
				"stylers": [
				  { "color": "#fdfdfd" }
				]
			  },{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
				  { "color": "#5d5c5d" }
				]
			  },{
				"featureType": "water",
				"elementType": "geometry.fill",
				"stylers": [
				  { "color": "#1a6da9" }
				]
			  },{
				"featureType": "landscape.man_made",
				"elementType": "geometry.fill",
				"stylers": [
				  { "color": "#808080" },
				  { "saturation": 6 },
				  { "lightness": -56 },
				  { "hue": "#1100ff" }
				]
			  },{
			  }
			]
		});
	// Создаем маркер на карте
	var marker = new google.maps.Marker({
		// Определяем позицию маркера
		position: {lat: 50.026278, lng: 36.216890},
		// Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
		map: map,
		// Пишем название маркера - появится если навести на него курсор и немного подождать
		title: 'Our main office вулиця Отакара Яроша, 18, Харків, Харківська область, Украина'
	});
	
	// Создаем наполнение для информационного окна
	var contentString = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">Name of company</h1>'+
	'<div id="bodyContent">'+
	'<p>Наша компания самая лушая в продаже спорт. товаров и спортивного оборудования' +
	'в Украине и один из самых больших поставщиков в этой области</p>'+
	'<p><b>Веб-сайт:</b> <a href="http://www.bolshoi.ru/" target="_blank">bolshoi.ru</a>'+
	'</p>'+
	'</div>'+
	'</div>';
	
	// Создаем информационное окно
	var infowindow = new google.maps.InfoWindow({
		 content: contentString,
		 maxWidth: 400
	});
	
	// Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
	marker.addListener('click', function() {
		 infowindow.open(map, marker);
	});
};


