$(document).ready(function () {
  //Initializing the Map
  let tileUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  let mapTiles = L.tileLayer(tileUrl),
    magnifiedTiles = L.tileLayer(tileUrl);
  let marker;
  let magnifyingGlass;
  let mymap = L.map("mainmap", {
    popupMovable: true,
    popupMovableZoomMode: "relative",
    closePopupOnClick: false,
    GamepadController: true,
    visualClick: true,
    loadingControl: true,
    fullscreenControl: true,
    fullscreenControlOptions: {
      // optional
      title: "Show me the fullscreen !",
      titleCancel: "Exit fullscreen mode",
    },
    visualClickMode: "touch",
    visualClickEvents: "click contextmenu",
    visualClickPane: "shadowPane",
    center: [40.18, -104.83],
    zoom: 300,
    zoomControl: true,
    dragging: true,
    minZoom: 10,
    measureControl: true,
    layers: [mapTiles],
  });

  L.control.ruler({ position: "topleft" }).addTo(mymap);
  let ctlStyle = L.control.styleEditor({ position: "topleft" }).addTo(mymap);

  var drawnItems = new L.FeatureGroup();
  mymap.addLayer(drawnItems);
  var drawControl = new L.Control.Draw({
    draw: {
      circle: false,
    },
    edit: {
      featureGroup: drawnItems,
    },
  });
  mymap.on("draw:created", function (e) {
    console.log(e);
    drawnItems.addLayer(e.layer);
    //alert(JSON.stringify(e.layer.toGeoJSON()));
  });
  mymap.addControl(drawControl);
  //Initialize the geocoder
  var options = {
    bounds: true,
    position: "topright",
    expanded: true,
  };

  L.control
    .geocoder("pk.7d5d517396f5c01fb20402e6edf4a993", options)
    .addTo(mymap);
  new L.HistoryControl({ position: "topright" }).addTo(mymap);
  new L.basemapsSwitcher(
    [
      {
        layer: L.tileLayer(
          "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }
        ).addTo(mymap), //DEFAULT MAP
        icon: "/img/img1.PNG",
        name: "OSM Topo",
      },
      {
        layer: L.tileLayer(
          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }
        ).addTo(mymap), //DEFAULT MAP
        icon: "/img/img2.PNG",
        name: "ESRI Street",
      },
      {
        layer: L.tileLayer(
          "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }
        ).addTo(mymap), //DEFAULT MAP
        icon: "/img/img3.PNG",
        name: "Dark",
      },
      {
        layer: L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
          attribution:
            'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        }),
        icon: "/img/img4.PNG",
        name: "OSM Topo",
      },
      {
        layer: L.tileLayer(
          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          {
            attribution:
              "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
          }
        ),
        icon: "/img/img5.PNG",
        name: "ESRI Satelite",
      },
    ],
    { position: "bottomright" }
  ).addTo(mymap);

  L.Control.boxzoom({ position: "topleft" }).addTo(mymap);
  L.control
    .scale({ position: "bottomleft", maxWidth: 200, imperial: false })
    .addTo(mymap);
  let ZoomSlider = L.control.zoomslider().addTo(mymap);
  let mousePosition = L.control.mousePosition().addTo(mymap);
  let hash = new L.Hash(mymap);

  $("#Dhan27-child").hide();
  $("#Dhan32-child").hide();
  $("#NewMar-child").hide();
  $("#SciLab-child").hide();
  $("#Dhan10-child").hide();
  $("#MalMor-child").hide();
  $("#ADRoad-child").hide();
  $("#GZPoint-child").hide();
  $("#GuMazar-child").hide();
  $("#EngRoad-child").hide();
  $("#BPark1-child").hide();
  $("#BPark2-child").hide();
  $("#BPark3-child").hide();
  $("#EdCollege-child").hide();
  $("#Dhan67-child").hide();
  $("#Bangshal-child").hide();
  $("#Polashi-child").hide();
  $("#BMotor-child").hide();
  $("#MinRoad-child").hide();
  $("#KMosque-child").hide();
  $("#MBhaban-child").hide();
  $("#KChattor-child").hide();
  $("#CurHall-child").hide();
  $("#BSignal-child").hide();
  $("#Katabon-child").hide();
  $("#Fokirapul-child").hide();
  $("#GSquare-child").hide();
  $("#ICRoad-child").hide();
  $("#Rajarbagh-child").hide();
  $("#Shahbagh-child").hide();
  $("#PanthapathGR-child").hide();
  $("#Topkhana-child").hide();
  $("#PJMazar-child").hide();
  $("#BNagar-child").hide();
  $("#SChottor-child").hide();
  $("#NRoad-child").hide();
  $("#KRStation-child").hide();
  $("#ZRRoad-child").hide();
  $("#Mouchak-child").hide();
  $("#MRCrossing-child").hide();
  $("#Shantinagar-child").hide();
  $("#RPHospital-child").hide();
  $("#Ittefaq-child").hide();
  $("#DBangla-child").hide();
  $("#Nilkhet-child").hide();
  $("#BRoad-child").hide();
  $("#RThana-child").hide();
  $("#Jigatola-child").hide();
  $("#ISHospital-child").hide();
  $("#Shankar-child").hide();
  $("#TCRoad-child").hide();
  $("#Arambagh-child").hide();
  $("#Kathalbagan-child").hide();
  $("#JBank-child").hide();
  $("#MChow-child").hide();

  //Create Marker For Dhanmondi 27
  $("#Dhan27").click(function () {
    let location = [23.756367389430853, 90.37523557023057];
    let x = document.getElementById("Dhan27-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Dhanmondi 32
  $("#Dhan32").click(function () {
    let location = [23.75131, 90.37819];
    let x = document.getElementById("Dhan32-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For New Market
  $("#NewMar").click(function () {
    let location = [23.73236, 90.38515];
    let x = document.getElementById("NewMar-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Scienclab
  $("#SciLab").click(function () {
    let location = [23.73873, 90.38352];
    let x = document.getElementById("SciLab-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Dhanmondi 10
  $("#Dhan10").click(function () {
    let location = [23.74756, 90.38033];
    let x = document.getElementById("Dhan10-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Malibag Mor
  $("#MalMor").click(function () {
    let location = [23.74989, 90.41281];
    let x = document.getElementById("MalMor-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Atish Deepankar Road
  $("#ADRoad").click(function () {
    let location = [23.72498, 90.42874];
    let x = document.getElementById("ADRoad-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Gulistan Zero Point
  $("#GZPoint").click(function () {
    let location = [23.72767, 90.41057];
    let x = document.getElementById("GZPoint-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Gulapshah Mazar
  $("#GuMazar").click(function () {
    let location = [23.72489, 90.41072];
    let x = document.getElementById("GuMazar-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For English Road (Raishaheb Bazar)
  $("#EngRoad").click(function () {
    let location = [23.71369, 90.41155];
    let x = document.getElementById("EngRoad-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Bahdursha Park (01)
  $("#BPark1").click(function () {
    let location = [23.70879, 90.41258];
    let x = document.getElementById("BPark1-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Bahdursha Park (02)
  $("#BPark2").click(function () {
    let location = [23.70946, 90.41271];
    let x = document.getElementById("BPark2-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Bahdursha Park (03)
  $("#BPark3").click(function () {
    let location = [23.70979, 90.41203];
    let x = document.getElementById("BPark3-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Azimpur (Eden College)
  $("#EdCollege").click(function () {
    let location = [23.72689, 90.38638];
    let x = document.getElementById("EdCollege-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Dhanmondi -6,7
  $("#Dhan67").click(function () {
    let location = [23.74466, 90.38207];
    let x = document.getElementById("Dhan67-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Bangshal
  $("#Bangshal").click(function () {
    let location = [23.71753, 90.40869];
    let x = document.getElementById("Bangshal-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Polashi Intersection
  $("#Polashi").click(function () {
    let location = [23.72741, 90.38961];
    let x = document.getElementById("Polashi-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For New Eskaton Road (Bangla Motor)
  $("#BMotor").click(function () {
    let location = [23.74589, 90.39467];
    let x = document.getElementById("BMotor-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Minto Road (Hotel Sheraton)
  $("#MinRoad").click(function () {
    let location = [23.74139, 90.39599];
    let x = document.getElementById("MinRoad-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Kakrail Mosque
  $("#KMosque").click(function () {
    let location = [23.73757, 90.40524];
    let x = document.getElementById("KMosque-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Motsho Bhaban
  $("#MBhaban").click(function () {
    let location = [23.73363, 90.40367];
    let x = document.getElementById("MBhaban-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Kadam Chattor
  $("#KChattor").click(function () {
    let location = [23.72989, 90.40516];
    let x = document.getElementById("KChattor-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Curzon Hall
  $("#CurHall").click(function () {
    let location = [23.72802, 90.40033];
    let x = document.getElementById("CurHall-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Bata Signal
  $("#BSignal").click(function () {
    let location = [23.73906, 90.38862];
    let x = document.getElementById("BSignal-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Bata Signal
  $("#BSignal").click(function () {
    let location = [23.73906, 90.38862];
    let x = document.getElementById("BSignal-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Katabon
  $("#Katabon").click(function () {
    let location = [23.73879, 90.39098];
    let x = document.getElementById("Katabon-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Fokirapul
  $("#Fokirapul").click(function () {
    let location = [23.73154, 90.41517];
    let x = document.getElementById("Fokirapul-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Gulistan Square
  $("#GSquare").click(function () {
    let location = [23.72483, 90.41193];
    let x = document.getElementById("GSquare-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Kakrail (Inner Circular Road)
  $("#ICRoad").click(function () {
    let location = [23.73744, 90.40888];
    let x = document.getElementById("ICRoad-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Rajarbagh
  $("#Rajarbagh").click(function () {
    let location = [23.73744, 90.40888];
    let x = document.getElementById("Rajarbagh-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Shahbagh
  $("#Shahbagh").click(function () {
    let location = [23.73812, 90.39592];
    let x = document.getElementById("Shahbagh-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Panthapath, Green Road
  $("#PanthapathGR").click(function () {
    let location = [23.74984, 90.39329];
    let x = document.getElementById("PanthapathGR-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Topkhana
  $("#Topkhana").click(function () {
    let location = [23.73013, 90.41009];
    let x = document.getElementById("Topkhana-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Pir Jangi Mazar
  $("#PJMazar").click(function () {
    let location = [23.73722, 90.41839];
    let x = document.getElementById("PJMazar-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Bijoy Nagar
  $("#BNagar").click(function () {
    let location = [23.73391, 90.41023];
    let x = document.getElementById("BNagar-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Sapla Chottor
  $("#SChottor").click(function () {
    let location = [23.72653, 90.42164];
    let x = document.getElementById("SChottor-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Dholaikhal (Nababpur Road)
  $("#NRoad").click(function () {
    let location = [23.72653, 90.42164];
    let x = document.getElementById("NRoad-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Kamalapur Railway Station
  $("#KRStation").click(function () {
    let location = [23.73239, 90.42526];
    let x = document.getElementById("KRStation-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Zahir Raihan Road
  $("#ZRRoad").click(function () {
    let location = [23.72575, 90.39188];
    let x = document.getElementById("ZRRoad-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Mouchak
  $("#Mouchak").click(function () {
    let location = [23.74575, 90.41228];
    let x = document.getElementById("Mouchak-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Malibag Rail Crossing
  $("#MRCrossing").click(function () {
    let location = [23.74962, 90.41265];
    let x = document.getElementById("MRCrossing-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Shantinagar
  $("#Shantinagar").click(function () {
    let location = [23.74156, 90.41189];
    let x = document.getElementById("Shantinagar-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Rajarbagh Police Hospital
  $("#RPHospital").click(function () {
    let location = [23.73724, 90.4184];
    let x = document.getElementById("RPHospital-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Ittefaq
  $("#Ittefaq").click(function () {
    let location = [23.72155, 90.42042];
    let x = document.getElementById("Ittefaq-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Daynik Bangla
  $("#DBangla").click(function () {
    let location = [23.73019, 90.41518];
    let x = document.getElementById("DBangla-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Nilkhet
  $("#Nilkhet").click(function () {
    let location = [23.728, 90.40033];
    let x = document.getElementById("Nilkhet-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Baily Road
  $("#BRoad").click(function () {
    let location = [23.74172, 90.40578];
    let x = document.getElementById("BRoad-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Ramna Thana
  $("#RThana").click(function () {
    let location = [23.74001, 90.40569];
    let x = document.getElementById("RThana-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Jigatola
  $("#Jigatola").click(function () {
    let location = [23.73911, 90.37345];
    let x = document.getElementById("Jigatola-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Ibn Sina Hospital, Dhanmondi-15
  $("#ISHospital").click(function () {
    let location = [23.75077, 90.36828];
    let x = document.getElementById("ISHospital-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Satmasjid Road (Shankar), Dhanmondi-27
  $("#Shankar").click(function () {
    let location = [23.75172, 90.36764];
    let x = document.getElementById("Shankar-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Toyenbee Circular Road
  $("#TCRoad").click(function () {
    let location = [23.73153, 90.42089];
    let x = document.getElementById("TCRoad-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Arambagh
  $("#Arambagh").click(function () {
    let location = [23.72859, 90.42199];
    let x = document.getElementById("Arambagh-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Kathalbagan
  $("#Kathalbagan").click(function () {
    let location = [23.75106, 90.38714];
    let x = document.getElementById("Kathalbagan-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Janata Bank
  $("#JBank").click(function () {
    let location = [23.72776, 90.41576];
    let x = document.getElementById("JBank-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });
  //Create Marker For Malibagh Chowdhuripara
  $("#MChow").click(function () {
    let location = [23.75453, 90.41555];
    let x = document.getElementById("MChow-child");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    createMarker(location);
  });

  mymap.on("locationerror", function (e) {
    console.log(e);
    alert("Location was not found");
  });
  //Functions
  function createMarker(location) {
    if (marker) {
      marker.remove();
    }
    let pulsingIcon = L.icon.pulse({ iconSize: [30, 30], color: "steelblue" });
    marker = L.marker(location, { icon: pulsingIcon }).addTo(mymap);
    L.marker(location)
      .addTo(mymap)
      .bindPopup("<h5>Locaion Image</h5><img src='img/D27.jpg' width='300px'>");
    mymap.setView(location, 18);
  }

  //Keypress

  mymap.on("keypress", function (e) {
    if (e.originalEvent.key == "l") {
      mymap.locate();
    }
  });
  mymap.on("locationfound", function (e) {
    if (marker) {
      marker.remove();
    }
    let pulsingIcon = L.icon.pulse({ iconSize: [20, 20], color: "red" });
    marker = L.marker(e.latlng, { icon: pulsingIcon }).addTo(mymap);
    mymap.setView(e.latlng, 14);
  });
  mymap.on("locationerror", function (e) {
    alert("Location was not found");
  });

  mymap.on("keypress", function (e) {
    if (e.originalEvent.key == "m") {
      magnifyingGlass = L.magnifyingGlass({
        layers: [magnifiedTiles],
      }).addTo(mymap);
    } else if (e.originalEvent.key == "x") {
      magnifyingGlass.remove();
    }
  });
});
