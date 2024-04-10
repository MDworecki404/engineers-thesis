import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer'
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol'

export const routeL_K_M_D_T = new FeatureLayer({
    title: 'Trasa Lubiąż-Krzydlina Mała-Dębno-Tarchlice',
    url: 'https://services8.arcgis.com/iYnaMU42ccE9SMGk/arcgis/rest/services/lubiazkrzydlina_maladebnotarchlice/FeatureServer/0',
    renderer: new SimpleRenderer({
        symbol: new SimpleLineSymbol({
            color: '#6a93e4',
            width: '3px',
            style: 'dash',
            cap: 'round'
        })
    }),
    popupTemplate: {
        title: '<b>{Name}</b>',
        content: 'Długość trasy: 60.73km <br><u><a href="{link}">LINK DO TRASY</a></u>',
    }
})
//routeL_K_M_D_T.effect = 'bloom(2, 1px, 0)'
routeL_K_M_D_T.visible = false

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
        content: 'Długość trasy: 14.26km <br><u><a href="{link}">LINK DO TRASY</a></u>',
    }
})
//routeS_W_W.effect = 'bloom(3, 1px, 0)'
routeS_W_W.visible = false

export const routeT_P_D_W = new FeatureLayer({
    title: 'Trasa przez dworzec Wołów',
    url: 'https://services8.arcgis.com/iYnaMU42ccE9SMGk/arcgis/rest/services/trasa_przez_dworzec_wolow/FeatureServer/0',
    renderer: new SimpleRenderer({
        symbol: new SimpleLineSymbol({
            color: '#a8323c',
            width: '3px',
            style: 'dash',
            cap: 'round'
        })
    }),
    popupTemplate: {
        title: '<b>{Name}</b>',
        content: 'Długość trasy: 47.63km <br><u><a href="{link}">LINK DO TRASY</a></u>',
    }
})
//routeT_P_D_W.effect = 'bloom(3, 1px, 0)'
routeT_P_D_W.visible = false

export const route123109 = new FeatureLayer({
    title: 'Trasa rowerowa nr 123109',
    url: 'https://services8.arcgis.com/iYnaMU42ccE9SMGk/arcgis/rest/services/trasa_rowerowa_123109/FeatureServer/0',
    renderer: new SimpleRenderer({
        symbol: new SimpleLineSymbol({
            color: '#6d32a8',
            width: '3px',
            style: 'dash',
            cap: 'round'
        })
    }),
    popupTemplate: {
        title: '<b>{Name}</b>',
        content: 'Długość trasy: 40.97km <br><u><a href="{link}">LINK DO TRASY</a></u>',
    }
})
//route123109.effect = 'bloom(3, 1px, 0)'
route123109.visible = false

export const routeU_W = new FeatureLayer({
    title: 'Uroczysko wrzosy',
    url: 'https://services8.arcgis.com/iYnaMU42ccE9SMGk/arcgis/rest/services/uroczysko_wrzosy/FeatureServer/0',
    renderer: new SimpleRenderer({
        symbol: new SimpleLineSymbol({
            color: '#d642a5',
            width: '3px',
            style: 'dash',
            cap: 'round'
        })
    }),
    popupTemplate: {
        title: '<b>{Name}</b>',
        content: 'Długość trasy: 22.51km <br><u><a href="{link}">LINK DO TRASY</a></u>',
    }
})
//routeU_W.effect = 'bloom(3, 1px, 0)'
routeU_W.visible = false