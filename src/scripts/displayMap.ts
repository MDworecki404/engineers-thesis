import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import esriConfig from '@arcgis/core/config'
import Polygon from '@arcgis/core/geometry/Polygon'
import Compass from '@arcgis/core/widgets/Compass'
import { parkArea } from './vectorLayers'
import { routeL_K_M_D_T, routeS_W_W } from './bikeRoutes'
import LayerList from '@arcgis/core/widgets/LayerList'
import GroupLayer from '@arcgis/core/layers/GroupLayer'
import ScaleBar from '@arcgis/core/widgets/ScaleBar'


esriConfig.apiKey = `${import.meta.env.VITE_ESRI_API_KEY}`


const displayMap = () => {

    const map = new Map({
        basemap: 'osm/hybrid',
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
        map.add(routeL_K_M_D_T)
        map.add(routeS_W_W)
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
      
    const groupLayerRoutes = new GroupLayer({
        title: "Trasy rowerowe",
        layers: [routeL_K_M_D_T, routeS_W_W]
    })
    map.add(groupLayerRoutes)
    const scaleBar = new ScaleBar({
        view: view,
        style: 'ruler',
    })
    view.ui.add(scaleBar, {
        position: "bottom-right"
    })
    
}

export default displayMap