gdjs.Menu_95MAPACode = {};
gdjs.Menu_95MAPACode.localVariables = [];
gdjs.Menu_95MAPACode.idToCallbackMap = new Map();
gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1= [];
gdjs.Menu_95MAPACode.GDBG_9595MapaObjects2= [];
gdjs.Menu_95MAPACode.GDTinyRedButtonObjects1= [];
gdjs.Menu_95MAPACode.GDTinyRedButtonObjects2= [];
gdjs.Menu_95MAPACode.GDBOTON_9595RESTARTObjects1= [];
gdjs.Menu_95MAPACode.GDBOTON_9595RESTARTObjects2= [];
gdjs.Menu_95MAPACode.GDBOTON_9595NEXTObjects1= [];
gdjs.Menu_95MAPACode.GDBOTON_9595NEXTObjects2= [];
gdjs.Menu_95MAPACode.GDNextObjects1= [];
gdjs.Menu_95MAPACode.GDNextObjects2= [];


gdjs.Menu_95MAPACode.mapOfGDgdjs_9546Menu_959595MAPACode_9546GDBG_95959595MapaObjects1Objects = Hashtable.newFrom({"BG_Mapa": gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1});
gdjs.Menu_95MAPACode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Disco 1/OJO2000/SHARED.DXR/2855.ogg", true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG_Mapa"), gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Menu_95MAPACode.mapOfGDgdjs_9546Menu_959595MAPACode_9546GDBG_95959595MapaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1.length === 0 ) ? 0 :gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1[0].getPointX("")));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG_Mapa"), gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1);
{for(var i = 0, len = gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1.length ;i < len;++i) {
    gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1[i].setX(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + (gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG_Mapa"), gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1.length;i<l;++i) {
    if ( gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1[i].getX() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1[k] = gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1[i];
        ++k;
    }
}
gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1 */
{for(var i = 0, len = gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1.length ;i < len;++i) {
    gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1[i].setX(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG_Mapa"), gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1.length;i<l;++i) {
    if ( gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1[i].getX() < -1280 ) {
        isConditionTrue_0 = true;
        gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1[k] = gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1[i];
        ++k;
    }
}
gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1 */
{for(var i = 0, len = gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1.length ;i < len;++i) {
    gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1[i].setX(-1280);
}
}
}

}


};

gdjs.Menu_95MAPACode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1.length = 0;
gdjs.Menu_95MAPACode.GDBG_9595MapaObjects2.length = 0;
gdjs.Menu_95MAPACode.GDTinyRedButtonObjects1.length = 0;
gdjs.Menu_95MAPACode.GDTinyRedButtonObjects2.length = 0;
gdjs.Menu_95MAPACode.GDBOTON_9595RESTARTObjects1.length = 0;
gdjs.Menu_95MAPACode.GDBOTON_9595RESTARTObjects2.length = 0;
gdjs.Menu_95MAPACode.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.Menu_95MAPACode.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.Menu_95MAPACode.GDNextObjects1.length = 0;
gdjs.Menu_95MAPACode.GDNextObjects2.length = 0;

gdjs.Menu_95MAPACode.eventsList0(runtimeScene);
gdjs.Menu_95MAPACode.GDBG_9595MapaObjects1.length = 0;
gdjs.Menu_95MAPACode.GDBG_9595MapaObjects2.length = 0;
gdjs.Menu_95MAPACode.GDTinyRedButtonObjects1.length = 0;
gdjs.Menu_95MAPACode.GDTinyRedButtonObjects2.length = 0;
gdjs.Menu_95MAPACode.GDBOTON_9595RESTARTObjects1.length = 0;
gdjs.Menu_95MAPACode.GDBOTON_9595RESTARTObjects2.length = 0;
gdjs.Menu_95MAPACode.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.Menu_95MAPACode.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.Menu_95MAPACode.GDNextObjects1.length = 0;
gdjs.Menu_95MAPACode.GDNextObjects2.length = 0;


return;

}

gdjs['Menu_95MAPACode'] = gdjs.Menu_95MAPACode;
