import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer'
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol'

export const routeL_K_M_D_T = new FeatureLayer({
    title: 'Trasa Lubiąż-Krzydlina Mała-Dębno-Tarchlice',
    url: 'https://services8.arcgis.com/iYnaMU42ccE9SMGk/arcgis/rest/services/lubiazkrzydlina_maladebnotarchlice/FeatureServer/0',
    renderer: new SimpleRenderer({
        symbol: new SimpleLineSymbol({
            color: '#6adce4',
            width: '3px',
            style: 'dash',
            cap: 'round'
        })
    }),
    popupTemplate: {
        title: '<b>{Name}</b>',
        content: 'Długość trasy: {dlugosc} <br><u><a href="{link}">LINK DO TRASY</a></u>',
    }
})
routeL_K_M_D_T.effect = 'bloom(1, 1px, 0)'

export const routeS_W_W = new FeatureLayer({
    title: 'Szlaki wokół Wołowa',
    url: 'https://services8.arcgis.com/iYnaMU42ccE9SMGk/arcgis/rest/services/szlaki_wokol_wolowa/FeatureServer/0',
    renderer: new SimpleRenderer({
        symbol: new SimpleLineSymbol({
            color: '#acc734',
            width: '3px',
            style: 'dash',
            cap: 'round'
        })
    }),
    popupTemplate: {
        title: '<b>{Name}</b>',
        content: 'Długość trasy: {dlugosc} <br><u><a href="{link}">LINK DO TRASY</a></u>',
    }
})
routeS_W_W.effect = 'bloom(3, 1px, 0)'