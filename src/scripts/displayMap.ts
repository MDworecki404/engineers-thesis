import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import esriConfig from '@arcgis/core/config'
import Polygon from '@arcgis/core/geometry/Polygon'
import Compass from '@arcgis/core/widgets/Compass'
import { parkArea } from './vectorLayers'
import LayerList from '@arcgis/core/widgets/LayerList'
import GroupLayer from '@arcgis/core/layers/GroupLayer'
import ScaleBar from '@arcgis/core/widgets/ScaleBar'


esriConfig.apiKey = `${import.meta.env.VITE_ESRI_API_KEY}`

const displayMap = () => {
    const map = new Map({
        basemap: 'arcgis/imagery',
    })
    const view = new MapView({
        map: map,
        container: 'map',
        zoom: 12,
        constraints: {
        minZoom: 12,
        maxZoom: 17,
        },
        center: [16.57109135732551, 51.35986770935379]
    })
    const viewArea = new Polygon({
        rings: [
            [
            [16.440900, 51.440431],
            [16.652645, 51.440431],
            [16.652645, 51.297039],
            [16.440900, 51.297039],
            [16.440900, 51.440431]
            ]
        ],
    })
    view.constraints.geometry = viewArea

    const compass = new Compass({
        view: view,
    })
    view.ui.add(compass, 'top-left')

    const loadFeature = async () => {
        map.add(parkArea)
        await 'loaded'
    }
    loadFeature()

    let layerList = new LayerList({
        view: view
      });
      // Adds widget below other elements in the top left corner of the view
      view.ui.add(layerList, {
        position: "top-right"
      });
      
      const groupLayer1 = new GroupLayer({
        title: "My GroupLayer1",
        layers: [parkArea]
    })
    map.add(groupLayer1)
    const scaleBar = new ScaleBar({
        view: view,
        style: 'ruler',
    })
    view.ui.add(scaleBar, {
        position: "bottom-right"
    })
    
}

export default displayMap
