gdjs.Boot_95Credito_952Code = {};
gdjs.Boot_95Credito_952Code.localVariables = [];
gdjs.Boot_95Credito_952Code.idToCallbackMap = new Map();
gdjs.Boot_95Credito_952Code.GDVID_9595AbrapalabraCredObjects1= [];
gdjs.Boot_95Credito_952Code.GDVID_9595AbrapalabraCredObjects2= [];
gdjs.Boot_95Credito_952Code.GDBOTON_9595RESTARTObjects1= [];
gdjs.Boot_95Credito_952Code.GDBOTON_9595RESTARTObjects2= [];
gdjs.Boot_95Credito_952Code.GDBOTON_9595NEXTObjects1= [];
gdjs.Boot_95Credito_952Code.GDBOTON_9595NEXTObjects2= [];
gdjs.Boot_95Credito_952Code.GDNextObjects1= [];
gdjs.Boot_95Credito_952Code.GDNextObjects2= [];


gdjs.Boot_95Credito_952Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Boot_95Credito_952Code.GDNextObjects1);
gdjs.copyArray(runtimeScene.getObjects("VID_AbrapalabraCred"), gdjs.Boot_95Credito_952Code.GDVID_9595AbrapalabraCredObjects1);
{for(var i = 0, len = gdjs.Boot_95Credito_952Code.GDVID_9595AbrapalabraCredObjects1.length ;i < len;++i) {
    gdjs.Boot_95Credito_952Code.GDVID_9595AbrapalabraCredObjects1[i].play();
}
}
{for(var i = 0, len = gdjs.Boot_95Credito_952Code.GDNextObjects1.length ;i < len;++i) {
    gdjs.Boot_95Credito_952Code.GDNextObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("VID_AbrapalabraCred"), gdjs.Boot_95Credito_952Code.GDVID_9595AbrapalabraCredObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Boot_95Credito_952Code.GDVID_9595AbrapalabraCredObjects1.length;i<l;++i) {
    if ( gdjs.Boot_95Credito_952Code.GDVID_9595AbrapalabraCredObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Boot_95Credito_952Code.GDVID_9595AbrapalabraCredObjects1[k] = gdjs.Boot_95Credito_952Code.GDVID_9595AbrapalabraCredObjects1[i];
        ++k;
    }
}
gdjs.Boot_95Credito_952Code.GDVID_9595AbrapalabraCredObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Boot_95Credito_952Code.GDNextObjects1);
{for(var i = 0, len = gdjs.Boot_95Credito_952Code.GDNextObjects1.length ;i < len;++i) {
    gdjs.Boot_95Credito_952Code.GDNextObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Boot_95Credito_952Code.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Boot_95Credito_952Code.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.Boot_95Credito_952Code.GDNextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Boot_95Credito_952Code.GDNextObjects1[k] = gdjs.Boot_95Credito_952Code.GDNextObjects1[i];
        ++k;
    }
}
gdjs.Boot_95Credito_952Code.GDNextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11010868);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu_Mascotas", false);
}
}

}


};

gdjs.Boot_95Credito_952Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Boot_95Credito_952Code.GDVID_9595AbrapalabraCredObjects1.length = 0;
gdjs.Boot_95Credito_952Code.GDVID_9595AbrapalabraCredObjects2.length = 0;
gdjs.Boot_95Credito_952Code.GDBOTON_9595RESTARTObjects1.length = 0;
gdjs.Boot_95Credito_952Code.GDBOTON_9595RESTARTObjects2.length = 0;
gdjs.Boot_95Credito_952Code.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.Boot_95Credito_952Code.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.Boot_95Credito_952Code.GDNextObjects1.length = 0;
gdjs.Boot_95Credito_952Code.GDNextObjects2.length = 0;

gdjs.Boot_95Credito_952Code.eventsList0(runtimeScene);
gdjs.Boot_95Credito_952Code.GDVID_9595AbrapalabraCredObjects1.length = 0;
gdjs.Boot_95Credito_952Code.GDVID_9595AbrapalabraCredObjects2.length = 0;
gdjs.Boot_95Credito_952Code.GDBOTON_9595RESTARTObjects1.length = 0;
gdjs.Boot_95Credito_952Code.GDBOTON_9595RESTARTObjects2.length = 0;
gdjs.Boot_95Credito_952Code.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.Boot_95Credito_952Code.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.Boot_95Credito_952Code.GDNextObjects1.length = 0;
gdjs.Boot_95Credito_952Code.GDNextObjects2.length = 0;


return;

}

gdjs['Boot_95Credito_952Code'] = gdjs.Boot_95Credito_952Code;
