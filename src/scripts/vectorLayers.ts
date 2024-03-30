import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer'
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol'


const parkAreaRenderer = new SimpleRenderer({
    symbol: new SimpleFillSymbol({
        color: 'rgba(0,0,0,0)',
        outline: {
            color: '#4c81cd',
            width: 1
        }
        
    })
})
export const parkArea = new FeatureLayer({
    title: 'Obszar parku',
    url: 'https://services8.arcgis.com/iYnaMU42ccE9SMGk/arcgis/rest/services/obszar_parku/FeatureServer/0',
    renderer: parkAreaRenderer
})
parkArea.effect = 'bloom(2.5, 0.5px, 0.1)'

