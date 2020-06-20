var fs = require('fs');

var listanombres=
[{"nombre":"1 - CAÑARI ROBLES MARIBEL MILAGROS"},
{"nombre":"2 - VIDAL LOSTAUNAU SOCORRO DEL PILAR"},
{"nombre":"3 - PEREZ GOMEZ CHRISTIAN MARIO"},
{"nombre":"4 - ALVARADO VEINTEMILLA ALAN JUAN"},
{"nombre":"5 - VARGAS PÉREZ CHRISTIAN"},
{"nombre":"6 - SOTO LUIS MARCO ARMANDO"},
{"nombre":"7 - CORRALES VIZCARRA"},
{"nombre":"8 - PALACIOS NOVOA JUAN CARLOS"},
{"nombre":"9 - PANTOJA VIDAL CARLOS GUSTAVO"},
{"nombre":"10 - RAMIREZ MERCADO ISRAEL ALFREDO"},
{"nombre":"11 - ROSPINGLIOSI GUTIERREZ JUAN"},
{"nombre":"12 - BARRAZA CASCOS JEOVANY ELIZABETH"},
{"nombre":"13 - SAENZ SOLANO RICARDO MARTIN"},
{"nombre":"14 - SOTO SOLANO MARIA ESFILIA"},
{"nombre":"15 - GONZALES BARBADILLO MARIA ELVIRA "},
{"nombre":"16 - FLORES DEL CARPIO PABLO ALBERTO"},
{"nombre":"17 - MARTINEZ FLORES ITALA JESSENIA"}]


for (var i = 1; i <= 17; i++) {
    fs.rename( `Section_${i}.docx`,listanombres[(i-1)].nombre.trim()+'.docx', function(err) {
        if (err) throw err;
        console.log('File Renamed.');
    });
}