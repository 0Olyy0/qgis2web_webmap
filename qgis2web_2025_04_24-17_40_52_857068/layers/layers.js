var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_YandexSatellite_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_2, 
                style: style_building_2,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });
var format_highway__3 = new ol.format.GeoJSON();
var features_highway__3 = format_highway__3.readFeatures(json_highway__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway__3.addFeatures(features_highway__3);
var lyr_highway__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway__3, 
                style: style_highway__3,
                popuplayertitle: 'highway — _',
                interactive: true,
                title: '<img src="styles/legend/highway__3.png" /> highway — _'
            });
var format_lab1_4 = new ol.format.GeoJSON();
var features_lab1_4 = format_lab1_4.readFeatures(json_lab1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_4.addFeatures(features_lab1_4);
var lyr_lab1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_4, 
                style: style_lab1_4,
                popuplayertitle: 'lab 1',
                interactive: true,
                title: '<img src="styles/legend/lab1_4.png" /> lab 1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_YandexSatellite_1.setVisible(true);lyr_building_2.setVisible(true);lyr_highway__3.setVisible(true);lyr_lab1_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_YandexSatellite_1,lyr_building_2,lyr_highway__3,lyr_lab1_4];
lyr_building_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tourism': 'tourism', 'religion': 'religion', 'denomination': 'denomination', 'healthcare': 'healthcare', 'addr:postcode': 'addr:postcode', 'office': 'office', 'government': 'government', 'official_name': 'official_name', 'amenity': 'amenity', 'name': 'name', 'man_made': 'man_made', 'type': 'type', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_highway__3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'service': 'service', 'construction': 'construction', 'layer': 'layer', 'bridge': 'bridge', 'surface': 'surface', 'old_ref': 'old_ref', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'ref': 'ref', 'tracktype': 'tracktype', 'name:etymology:wikidata': 'name:etymology:wikidata', 'oneway': 'oneway', 'name': 'name', });
lyr_lab1_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'tourism': 'TextEdit', 'religion': 'TextEdit', 'denomination': 'TextEdit', 'healthcare': 'TextEdit', 'addr:postcode': 'TextEdit', 'office': 'TextEdit', 'government': 'TextEdit', 'official_name': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'man_made': 'TextEdit', 'type': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': 'TextEdit', });
lyr_highway__3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'service': '', 'construction': '', 'layer': '', 'bridge': '', 'surface': '', 'old_ref': '', 'maxspeed': '', 'lanes': '', 'ref': '', 'tracktype': '', 'name:etymology:wikidata': '', 'oneway': '', 'name': '', });
lyr_lab1_4.set('fieldImages', {'fid': '', 'name': 'TextEdit', });
lyr_building_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'tourism': 'no label', 'religion': 'no label', 'denomination': 'no label', 'healthcare': 'no label', 'addr:postcode': 'no label', 'office': 'no label', 'government': 'no label', 'official_name': 'no label', 'amenity': 'no label', 'name': 'no label', 'man_made': 'no label', 'type': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_highway__3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'service': 'no label', 'construction': 'no label', 'layer': 'no label', 'bridge': 'no label', 'surface': 'no label', 'old_ref': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'ref': 'no label', 'tracktype': 'no label', 'name:etymology:wikidata': 'no label', 'oneway': 'no label', 'name': 'no label', });
lyr_lab1_4.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_lab1_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});