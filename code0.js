gdjs.Boot_95WebCode = {};
gdjs.Boot_95WebCode.localVariables = [];
gdjs.Boot_95WebCode.idToCallbackMap = new Map();
gdjs.Boot_95WebCode.GDDisc_9595ImageObjects1= [];
gdjs.Boot_95WebCode.GDDisc_9595ImageObjects2= [];
gdjs.Boot_95WebCode.GDClickObjects1= [];
gdjs.Boot_95WebCode.GDClickObjects2= [];
gdjs.Boot_95WebCode.GDBOTON_9595RESTARTObjects1= [];
gdjs.Boot_95WebCode.GDBOTON_9595RESTARTObjects2= [];
gdjs.Boot_95WebCode.GDBOTON_9595NEXTObjects1= [];
gdjs.Boot_95WebCode.GDBOTON_9595NEXTObjects2= [];
gdjs.Boot_95WebCode.GDNextObjects1= [];
gdjs.Boot_95WebCode.GDNextObjects2= [];


gdjs.Boot_95WebCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Disco 1/STUFF/MEDIA/IN_AUDIO/BGCARGA.ogg", true, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Boot_Credito_1", false);
}
}

}


};

gdjs.Boot_95WebCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Boot_95WebCode.GDDisc_9595ImageObjects1.length = 0;
gdjs.Boot_95WebCode.GDDisc_9595ImageObjects2.length = 0;
gdjs.Boot_95WebCode.GDClickObjects1.length = 0;
gdjs.Boot_95WebCode.GDClickObjects2.length = 0;
gdjs.Boot_95WebCode.GDBOTON_9595RESTARTObjects1.length = 0;
gdjs.Boot_95WebCode.GDBOTON_9595RESTARTObjects2.length = 0;
gdjs.Boot_95WebCode.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.Boot_95WebCode.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.Boot_95WebCode.GDNextObjects1.length = 0;
gdjs.Boot_95WebCode.GDNextObjects2.length = 0;

gdjs.Boot_95WebCode.eventsList0(runtimeScene);
gdjs.Boot_95WebCode.GDDisc_9595ImageObjects1.length = 0;
gdjs.Boot_95WebCode.GDDisc_9595ImageObjects2.length = 0;
gdjs.Boot_95WebCode.GDClickObjects1.length = 0;
gdjs.Boot_95WebCode.GDClickObjects2.length = 0;
gdjs.Boot_95WebCode.GDBOTON_9595RESTARTObjects1.length = 0;
gdjs.Boot_95WebCode.GDBOTON_9595RESTARTObjects2.length = 0;
gdjs.Boot_95WebCode.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.Boot_95WebCode.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.Boot_95WebCode.GDNextObjects1.length = 0;
gdjs.Boot_95WebCode.GDNextObjects2.length = 0;


return;

}

gdjs['Boot_95WebCode'] = gdjs.Boot_95WebCode;
