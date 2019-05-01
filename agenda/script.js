// This is the javascript file for overview.html
alert('hello, world!');

import "OpenLayers.js";

map = new OpenLayers.Map("demoMap");
map.addLayer(new OpenLayers.Layer.OSM());
map.zoomToMaxExtent();

function get_coordinates(){
    const coords = {
        day_1: {
            lat: 43.163141,
            long: -1.23811 
        },
        day_2: {
            lat: 43.0169504,
            long: -1.3035514
        },
        day_3: {
            lat: 42.9011096,
            long: -1.5429509
        },
        day_4: {
            lat: 42.812526,
            long: -1.6457745
        },
        day_5: {
            lat: 42.812526,
            long: -1.6457745
        },
        day_6: {
            lat: 42.6723037,
            long: -1.8135943
        },
        day_7: {
            lat: 42.6570846,
            long: -2.0386075
        },
        day_8: {
            lat: 42.504076,
            long: -2.2679632
        },
        day_9: {
            lat: 42.4627195,
            long: -2.4449852
        },
        day_10: {
            lat: 42.4167413,
            long: -2.7294624
        },
        day_11: {
            lat: 42.4369439,
            long: -2.9550619
        },
        day_12: {
            lat: 42.41956769999,
            long: -3.1917747
        },
        day_13: {
            lat: 42.3700787,
            long: -3.4795035
        },
        day_14: {
            lat: 42.3439925,
            long: -3.696906
        },
        day_15: {
            lat: 42.3439925,
            long: -3.696906
        },
        day_16: {
            lat: 42.3122534,
            long: -4.044638
        },
        day_17: {
            lat: 42.2594039,
            long: -4.3468794
        },
        day_18: {
            lat: 42.3307302,
            long: -4.6140481
        },
        day_19: {
            lat: 40.8378518,
            long: -5.541386
        },
        day_20: {
            lat: 42.4231911, 
            long: -5.219490299999
        },
        day_21: {
            lat: 42.5669462,
            long: -5.495956
        },
        day_22: {
            lat: 42.4833413,
            long: -5.7293239
        },
        day_23: {
            lat: 42.4833413,
            long: -5.7293239
        },
        day_24: {
            lat: 42.4549303,
            long: -6.053251100000001
        },
        day_25: {
            lat: 42.491686,
            long: -6.342881299999999
        },
        day_26: {
            lat: 42.5499958,
            long: -6.598259000000001
        },
        day_27: {
            lat: 42.6083936,
            long: -6.8085542
        },
        day_28: {
            lat: 42.7078162,
            long: -7.043627
        },
        day_29: {
            lat: 42.7634462,
            long: -7.2113605
        },
        day_30: {
            lat: 42.7642842,
            long: -7.4536742
        },
        day_31: {
            lat: 42.82497559999999,
            long: -7.695852199999999
        },
        day_32: {
            lat: 42.9128344,
            long: -8.024700500000002
        },
        day_33: {
            lat: 42.9045519,
            long: -8.3625168
        },
        day_34: {
            lat: 42.8782132,
            long: -8.5448445
        }
    }
    return coords;
}
