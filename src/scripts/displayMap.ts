import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import esriConfig from '@arcgis/core/config'
//import Polygon from '@arcgis/core/geometry/Polygon'
import Compass from '@arcgis/core/widgets/Compass'
import { parkArea } from './vectorLayers'
import { route123109, routeL_K_M_D_T, routeS_W_W, routeT_P_D_W, routeU_W } from './bikeRoutes'
import LayerList from '@arcgis/core/widgets/LayerList'
import GroupLayer from '@arcgis/core/layers/GroupLayer'
import ScaleBar from '@arcgis/core/widgets/ScaleBar'
import Locate from '@arcgis/core/widgets/Locate'


esriConfig.apiKey = `${import.meta.env.VITE_ESRI_API_KEY}`


const displayMap = () => {

    const map = new Map({
        basemap: 'arcgis/midcentury'
    })
    
    const view = new MapView({
        map: map,
        container: 'map',
        zoom: 11,
        constraints: {
        minZoom: 11,
        maxZoom: 17,
        },
        center: [16.57109135732551, 51.35986770935379]
    })
    //const viewArea = new Polygon({
    //    rings: [
    //        [
    //        [16.440900, 51.440431],
    //        [16.652645, 51.440431],
    //        [16.652645, 51.257039],
    //        [16.440900, 51.257039],
    //        [16.440900, 51.440431]
    //        ]
    //    ],
    //})
    //view.constraints.geometry = viewArea

    const compass = new Compass({
        view: view,
    })
    view.ui.add(compass, 'top-left')

    const locate  = new Locate({
        view: view,
        

        goToOverride: function(view, options) {
            options.target.scale = view.zoom;
            return view.goTo(options.target);
        }
    });
    view.ui.add(locate, "top-left");

    const loadFeature = async () => {
        map.add(parkArea)
        map.add(routeL_K_M_D_T)
        map.add(routeS_W_W)
        map.add(routeT_P_D_W)
        map.add(route123109)
        map.add(routeU_W)
        await 'loaded'
    }
    loadFeature()

    let layerList = new LayerList({
        view: view,
        //listItemCreatedFunction: (event) => {
        //    const item = event.item;
        //    if (item.layer.type != "group") {
        //      // don't show legend twice
        //      item.panel = {
        //        content: "legend",
        //        open: true,
        //      };
        //    }
        //}
      });
      // Adds widget below other elements in the top left corner of the view
      view.ui.add(layerList, {
        position: "top-right"
      });
      
    const groupLayerRoutes = new GroupLayer({
        title: "Trasy rowerowe",
        layers: [routeL_K_M_D_T, routeS_W_W, routeT_P_D_W, route123109, routeU_W]
    })
    const layersGroup = new GroupLayer({
        title: 'Warstwy',
        layers: [groupLayerRoutes, parkArea]
    })
    //map.add(groupLayerRoutes)
    map.add(layersGroup)
    const scaleBar = new ScaleBar({
        view: view,
        style: 'ruler',
    })
    view.ui.add(scaleBar, {
        position: "bottom-right"
    })
    
}

export default displayMap