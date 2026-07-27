gdjs.A_9502Code = {};
gdjs.A_9502Code.localVariables = [];
gdjs.A_9502Code.idToCallbackMap = new Map();
gdjs.A_9502Code.GDBG_9595A_959502Objects1= [];
gdjs.A_9502Code.GDBG_9595A_959502Objects2= [];
gdjs.A_9502Code.GDTinyRedButtonObjects1= [];
gdjs.A_9502Code.GDTinyRedButtonObjects2= [];
gdjs.A_9502Code.GDBOTON_9595RESTARTObjects1= [];
gdjs.A_9502Code.GDBOTON_9595RESTARTObjects2= [];
gdjs.A_9502Code.GDBOTON_9595NEXTObjects1= [];
gdjs.A_9502Code.GDBOTON_9595NEXTObjects2= [];
gdjs.A_9502Code.GDNextObjects1= [];
gdjs.A_9502Code.GDNextObjects2= [];


gdjs.A_9502Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TinyRedButton"), gdjs.A_9502Code.GDTinyRedButtonObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Disco 1/OJO2000/UNIDAD01/L1_AUDIO/POEM.ogg", 1, false, 100, 1);
}
{for(var i = 0, len = gdjs.A_9502Code.GDTinyRedButtonObjects1.length ;i < len;++i) {
    gdjs.A_9502Code.GDTinyRedButtonObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 1);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TinyRedButton"), gdjs.A_9502Code.GDTinyRedButtonObjects1);
{for(var i = 0, len = gdjs.A_9502Code.GDTinyRedButtonObjects1.length ;i < len;++i) {
    gdjs.A_9502Code.GDTinyRedButtonObjects1[i].hide(false);
}
}
}

}


};

gdjs.A_9502Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.A_9502Code.GDBG_9595A_959502Objects1.length = 0;
gdjs.A_9502Code.GDBG_9595A_959502Objects2.length = 0;
gdjs.A_9502Code.GDTinyRedButtonObjects1.length = 0;
gdjs.A_9502Code.GDTinyRedButtonObjects2.length = 0;
gdjs.A_9502Code.GDBOTON_9595RESTARTObjects1.length = 0;
gdjs.A_9502Code.GDBOTON_9595RESTARTObjects2.length = 0;
gdjs.A_9502Code.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.A_9502Code.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.A_9502Code.GDNextObjects1.length = 0;
gdjs.A_9502Code.GDNextObjects2.length = 0;

gdjs.A_9502Code.eventsList0(runtimeScene);
gdjs.A_9502Code.GDBG_9595A_959502Objects1.length = 0;
gdjs.A_9502Code.GDBG_9595A_959502Objects2.length = 0;
gdjs.A_9502Code.GDTinyRedButtonObjects1.length = 0;
gdjs.A_9502Code.GDTinyRedButtonObjects2.length = 0;
gdjs.A_9502Code.GDBOTON_9595RESTARTObjects1.length = 0;
gdjs.A_9502Code.GDBOTON_9595RESTARTObjects2.length = 0;
gdjs.A_9502Code.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.A_9502Code.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.A_9502Code.GDNextObjects1.length = 0;
gdjs.A_9502Code.GDNextObjects2.length = 0;


return;

}

gdjs['A_9502Code'] = gdjs.A_9502Code;
