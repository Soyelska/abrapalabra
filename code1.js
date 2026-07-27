gdjs.Boot_95Credito_951Code = {};
gdjs.Boot_95Credito_951Code.localVariables = [];
gdjs.Boot_95Credito_951Code.idToCallbackMap = new Map();
gdjs.Boot_95Credito_951Code.GDVID_9595UnlimitedCreditosObjects1= [];
gdjs.Boot_95Credito_951Code.GDVID_9595UnlimitedCreditosObjects2= [];
gdjs.Boot_95Credito_951Code.GDBOTON_9595RESTARTObjects1= [];
gdjs.Boot_95Credito_951Code.GDBOTON_9595RESTARTObjects2= [];
gdjs.Boot_95Credito_951Code.GDBOTON_9595NEXTObjects1= [];
gdjs.Boot_95Credito_951Code.GDBOTON_9595NEXTObjects2= [];
gdjs.Boot_95Credito_951Code.GDNextObjects1= [];
gdjs.Boot_95Credito_951Code.GDNextObjects2= [];


gdjs.Boot_95Credito_951Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Boot_95Credito_951Code.GDNextObjects1);
gdjs.copyArray(runtimeScene.getObjects("VID_UnlimitedCreditos"), gdjs.Boot_95Credito_951Code.GDVID_9595UnlimitedCreditosObjects1);
{for(var i = 0, len = gdjs.Boot_95Credito_951Code.GDVID_9595UnlimitedCreditosObjects1.length ;i < len;++i) {
    gdjs.Boot_95Credito_951Code.GDVID_9595UnlimitedCreditosObjects1[i].play();
}
}
{gdjs.evtTools.storage.readStringFromJSONFile("Abrapalabra", "saveSlots", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}
{for(var i = 0, len = gdjs.Boot_95Credito_951Code.GDNextObjects1.length ;i < len;++i) {
    gdjs.Boot_95Credito_951Code.GDNextObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Abrapalabra", "saveSlots");
if (isConditionTrue_0) {
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("VID_UnlimitedCreditos"), gdjs.Boot_95Credito_951Code.GDVID_9595UnlimitedCreditosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Boot_95Credito_951Code.GDVID_9595UnlimitedCreditosObjects1.length;i<l;++i) {
    if ( gdjs.Boot_95Credito_951Code.GDVID_9595UnlimitedCreditosObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Boot_95Credito_951Code.GDVID_9595UnlimitedCreditosObjects1[k] = gdjs.Boot_95Credito_951Code.GDVID_9595UnlimitedCreditosObjects1[i];
        ++k;
    }
}
gdjs.Boot_95Credito_951Code.GDVID_9595UnlimitedCreditosObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Boot_95Credito_951Code.GDNextObjects1);
{for(var i = 0, len = gdjs.Boot_95Credito_951Code.GDNextObjects1.length ;i < len;++i) {
    gdjs.Boot_95Credito_951Code.GDNextObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.Boot_95Credito_951Code.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Boot_95Credito_951Code.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.Boot_95Credito_951Code.GDNextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Boot_95Credito_951Code.GDNextObjects1[k] = gdjs.Boot_95Credito_951Code.GDNextObjects1[i];
        ++k;
    }
}
gdjs.Boot_95Credito_951Code.GDNextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8450148);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Boot_Credito_2", false);
}
}

}


};

gdjs.Boot_95Credito_951Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Boot_95Credito_951Code.GDVID_9595UnlimitedCreditosObjects1.length = 0;
gdjs.Boot_95Credito_951Code.GDVID_9595UnlimitedCreditosObjects2.length = 0;
gdjs.Boot_95Credito_951Code.GDBOTON_9595RESTARTObjects1.length = 0;
gdjs.Boot_95Credito_951Code.GDBOTON_9595RESTARTObjects2.length = 0;
gdjs.Boot_95Credito_951Code.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.Boot_95Credito_951Code.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.Boot_95Credito_951Code.GDNextObjects1.length = 0;
gdjs.Boot_95Credito_951Code.GDNextObjects2.length = 0;

gdjs.Boot_95Credito_951Code.eventsList0(runtimeScene);
gdjs.Boot_95Credito_951Code.GDVID_9595UnlimitedCreditosObjects1.length = 0;
gdjs.Boot_95Credito_951Code.GDVID_9595UnlimitedCreditosObjects2.length = 0;
gdjs.Boot_95Credito_951Code.GDBOTON_9595RESTARTObjects1.length = 0;
gdjs.Boot_95Credito_951Code.GDBOTON_9595RESTARTObjects2.length = 0;
gdjs.Boot_95Credito_951Code.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.Boot_95Credito_951Code.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.Boot_95Credito_951Code.GDNextObjects1.length = 0;
gdjs.Boot_95Credito_951Code.GDNextObjects2.length = 0;


return;

}

gdjs['Boot_95Credito_951Code'] = gdjs.Boot_95Credito_951Code;
