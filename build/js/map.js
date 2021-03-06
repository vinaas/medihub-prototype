(function($) {
    "use strict";

var map;

    var markerImg = "marker-green.png";

    // Custom options for map
    var options = {
            zoom : 14,
            mapTypeId : 'Styled',
            disableDefaultUI: true,
            mapTypeControlOptions : {
                mapTypeIds : [ 'Styled' ]
            }
        };
    var styles = [{
        stylers : [ {
            hue : "#cccccc"
        }, {
            saturation : -100
        }]
    }, {
        featureType : "road",
        elementType : "geometry",
        stylers : [ {
            lightness : 100
        }, {
            visibility : "simplified"
        }]
    }, {
        featureType : "road",
        elementType : "labels",
        stylers : [ {
            visibility : "on"
        }]
    }, {
        featureType: "poi",
        stylers: [ {
            visibility: "off"
        }]
    }];

    var newMarker = null;
    var markers = [];


    // json for properties markers on map
    var props = [{
        title : 'Nguyễn Văn An',
        link: 'detail.html',
        job: 'bác sĩ',
        image : 'http://nyulangone.org/images/doctors/f/fisher/1306860663/jason-c-fisher-thumb.jpg',
        type : ' CK Tai mũi họng',
        price : '$1,550,000',
        address : '102 Bùi viện, Q.1, TP.HCM',
        heart: '668',
        time: ["T2 - T6: 8h - 15h","T7 - CN: 8h- 17h "] ,
        position : {
            lat : 40.696047,
            lng : -73.997159
        },
        markerIcon : markerImg
    }, {
        title : 'Nguyễn Văn An',
        link: 'detail.html',
        job: 'bác sĩ',
        image : 'http://nyulangone.org/images/doctors/f/fisher/1306860663/jason-c-fisher-thumb.jpg',
        type : ' CK Tai mũi họng',
        price : '$1,550,000',
        address : '102 Bùi viện, Q.1, TP.HCM',
        heart: '668',
        time: ["T2 - T6: 8h - 15h","T7 - CN: 8h- 17h "] ,
        position : {
            lat : 40.688042,
            lng : -73.996472
        },
        markerIcon : markerImg
    }, {
        title : 'Nguyễn Văn An',
        link: 'detail.html',
        job: 'bác sĩ',
        image : 'http://nyulangone.org/images/doctors/f/fisher/1306860663/jason-c-fisher-thumb.jpg',
        type : ' CK Tai mũi họng',
        price : '$1,550,000',
        address : '102 Bùi viện, Q.1, TP.HCM',
        heart: '668',
        time: ["T2 - T6: 8h - 15h","T7 - CN: 8h- 17h "] ,
        position : {
            lat : 40.702620,
            lng : -73.989682
        },
        markerIcon : markerImg
    }, {
        title : 'Nguyễn Văn An',
        link: 'detail.html',
        job: 'bác sĩ',
        image : 'http://nyulangone.org/images/doctors/f/fisher/1306860663/jason-c-fisher-thumb.jpg',
        type : ' CK Tai mũi họng',
        price : '$1,550,000',
        address : '102 Bùi viện, Q.1, TP.HCM',
        heart: '668',
        time: ["T2 - T6: 8h - 15h","T7 - CN: 8h- 17h "] ,
        position : {
            lat : 40.694355,
            lng : -73.985229
        },
        markerIcon : markerImg
    }, {
        title : 'Nguyễn Văn An',
        link: 'detail.html',
        job: 'bác sĩ',
        image : 'http://nyulangone.org/images/doctors/f/fisher/1306860663/jason-c-fisher-thumb.jpg',
        type : ' CK Tai mũi họng',
        price : '$1,550,000',
        address : '102 Bùi viện, Q.1, TP.HCM',
        heart: '668',
        time: ["T2 - T6: 8h - 15h","T7 - CN: 8h- 17h "] ,
        position : {
            lat : 40.686838,
            lng : -73.990078
        },
        markerIcon : markerImg
    }, {
        title : 'Nguyễn Văn An',
        link: 'detail.html',
        job: 'bác sĩ',
        image : 'http://nyulangone.org/images/doctors/f/fisher/1306860663/jason-c-fisher-thumb.jpg',
        type : ' CK Tai mũi họng',
        price : '$1,550,000',
        address : '102 Bùi viện, Q.1, TP.HCM',
        heart: '668',
        time: ["T2 - T6: 8h - 15h","T7 - CN: 8h- 17h "] ,
        position : {
            lat : 40.703686,
            lng : -73.982910
        },
        markerIcon : markerImg
    }, {
        title : 'Nguyễn Văn An',
        link: 'detail.html',
        job: 'bác sĩ',
        image : 'http://nyulangone.org/images/doctors/f/fisher/1306860663/jason-c-fisher-thumb.jpg',
        type : ' CK Tai mũi họng',
        price : '$1,550,000',
        address : '102 Bùi viện, Q.1, TP.HCM',
        heart: '668',
        time: ["T2 - T6: 8h - 15h","T7 - CN: 8h- 17h "] ,
        position : {
            lat : 40.702189,
            lng : -73.995098
        },
        markerIcon : markerImg
    }, {
        title : 'Nguyễn Văn An',
        link: 'detail.html',
        job: 'bác sĩ',
        image : 'http://nyulangone.org/images/doctors/f/fisher/1306860663/jason-c-fisher-thumb.jpg',
        type : ' CK Tai mũi họng',
        price : '$1,550,000',
        address : '102 Bùi viện, Q.1, TP.HCM',
        heart: '668',
        time: ["T2 - T6: 8h - 15h","T7 - CN: 8h- 17h "] ,
        position : {
            lat : 40.687417,
            lng : -73.982653
        },
        markerIcon : markerImg
    }, {
        title : 'Nguyễn Văn An',
        link: 'detail.html',
        job: 'bác sĩ',
        image : 'http://nyulangone.org/images/doctors/f/fisher/1306860663/jason-c-fisher-thumb.jpg',
        type : ' CK Tai mũi họng',
        price : '$1,550,000',
        address : '102 Bùi viện, Q.1, TP.HCM',
        heart: '668',
        time: ["T2 - T6: 8h - 15h","T7 - CN: 8h- 17h "] ,
        position : {
            lat : 40.694120,
            lng : -73.974413
        },
        markerIcon : markerImg
    }, {
        title : 'Nguyễn Văn An',
        link: 'detail.html',
        job: 'bác sĩ',
        image : 'http://nyulangone.org/images/doctors/f/fisher/1306860663/jason-c-fisher-thumb.jpg',
        type : ' CK Tai mũi họng',
        price : '$1,550,000',
        address : '102 Bùi viện, Q.1, TP.HCM',
        heart: '668',
        time: ["T2 - T6: 8h - 15h","T7 - CN: 8h- 17h "] ,
        position : {
            lat : 40.682665,
            lng : -74.000934
        },
        markerIcon : markerImg
    }];

    // custom infowindow object
    var infobox = new InfoBox({
        disableAutoPan: false,
        maxWidth: 217,
        pixelOffset: new google.maps.Size(-106, 0),
        zIndex: null,
        boxStyle: {
            background: "url('images/infobox-bg.png') no-repeat",
            opacity: 1,
            width: "217px",
            height: "119px"
        },
        closeBoxMargin: "28px 26px 0px 0px",
        closeBoxURL: "",
        infoBoxClearance: new google.maps.Size(1, 1),
        pane: "floatPane",
        enableEventPropagation: false
    });

    // function that adds the markers on map
    var addMarkers = function(props, map) {
        $.each(props, function(i,prop) {
            var latlng = new google.maps.LatLng(prop.position.lat,prop.position.lng);
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                icon: new google.maps.MarkerImage( 
                    'images/' + prop.markerIcon,
                    null,
                    null,
                    null,
                    new google.maps.Size(23, 38)
                ),
                draggable: false,
                animation: google.maps.Animation.DROP,
            });
            var infoboxContent = '<div class="popupMap">' +

                                    '<div class="popupMap-col1">' +
                                        '<div class="popupMap-img"><img src="' + prop.image + '"></div>' +
                                        '<div class=""> <i class="fa fa-heart"></i> ' + prop.heart + '</div>' +
                                    '</div>' +

                                    '<div class="popupMap-col2">' +
                                    '<div class="popupMap-job">' + prop.job + '</div>' +
                                    '<div class="popupMap-title"><a href="' + prop.link + '"> ' + prop.title + '</a> </div>' +
                                    '<div class="popupMap-type">' + prop.type + '</div>' +
                                    '<div class="popupMap-address">' + prop.address + '</div>' +

                                        '<div class="popupMap-time">' + prop.time[0] + '</div>' +

                '<div class="popupMap-time">' + prop.time[1] + '</div>' +

                                    '<div class="clearfix"></div>' +
                                    '<div class="popupMap-close">' +
                                        '<a class="closeInfo">X</a>' +
                                    '</div>' +
                                 '</div>';

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infobox.setContent(infoboxContent);
                    infobox.open(map, marker);
                }
            })(marker, i));

            $(document).on('click', '.closeInfo', function() {
                infobox.open(null,null);
            });

            markers.push(marker);
        });
    }


    setTimeout(function() {
        $('body').removeClass('notransition');

        map = new google.maps.Map(document.getElementById('mapView'), options);
        var styledMapType = new google.maps.StyledMapType(styles, {
            name : 'Styled'
        });

        map.mapTypes.set('Styled', styledMapType);
        map.setCenter(new google.maps.LatLng(40.6984237,-73.9890044));
        map.setZoom(14);

        if ($('#address').length > 0) {
            newMarker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6984237,-73.9890044),
                map: map,
                icon: new google.maps.MarkerImage(
                    'images/marker-new.png',
                    null,
                    null,
                    // new google.maps.Point(0,0),
                    null,
                    new google.maps.Size(36, 36)
                ),
                draggable: true,
                animation: google.maps.Animation.DROP,
            });

            google.maps.event.addListener(newMarker, "mouseup", function(event) {
                var latitude = this.position.lat();
                var longitude = this.position.lng();
                $('#latitude').text(this.position.lat());
                $('#longitude').text(this.position.lng());
            });
        }

        addMarkers(props, map);
    }, 300);



    $('.haveMap .article').each(function(i) {
        $(this).on('mouseenter', function() {
                // google.maps.event.trigger(markers[i], 'click');
            markers[i].setAnimation(google.maps.Animation.BOUNCE);

        });
        $(this).on('mouseleave', function() {
            // infobox.open(null,null);
            markers[i].setAnimation(null);
        });
    });



})(jQuery);