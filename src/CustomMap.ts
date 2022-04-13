// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    },
    markerContent(): string;
    color: string;
}

export class CustomMap {
    public googleMap: google.maps.Map;

    constructor(div: string) {
        this.googleMap = new google.maps.Map(document.getElementById(div), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        }); 
    };

    addMarker(mappable: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        })
    }

    // addInfoWindow(marker: google.maps.Marker) {
    //     const contentString =
    //     '<div id="content">' +
    //     '<div id="siteNotice">' +
    //     "</div>" +
    //     '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    //     '<div id="bodyContent">' +
    //     "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    //     "sandstone rock formation in the southern part of the " +
    //     "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    //     "south west of the nearest large town, Alice Springs; 450&#160;km " +
    //     "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    //     "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    //     "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    //     "Aboriginal people of the area. It has many springs, waterholes, " +
    //     "rock caves and ancient paintings. Uluru is listed as a World " +
    //     "Heritage Site.</p>" +
    //     '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    //     "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    //     "(last visited June 22, 2009).</p>" +
    //     "</div>" +
    //     "</div>";

    //     const infowindow = new google.maps.InfoWindow({
    //         content: contentString,
    //       });

    //     marker.addListener("click", () => {
    //         infowindow.open({
    //             anchor: marker,
    //             map: this.googleMap,
    //             shouldFocus: false,
    //         });
    //     });
    // }
}