gdjs.A_9502Code = {};
gdjs.A_9502Code.localVariables = [];
gdjs.A_9502Code.idToCallbackMap = new Map();
gdjs.A_9502Code.GDBG_9595A_959502Objects1= [];
gdjs.A_9502Code.GDBG_9595A_959502Objects2= [];
gdjs.A_9502Code.GDNewSpriteObjects1= [];
gdjs.A_9502Code.GDNewSpriteObjects2= [];
gdjs.A_9502Code.GDBOTON_9595RESTARTObjects1= [];
gdjs.A_9502Code.GDBOTON_9595RESTARTObjects2= [];
gdjs.A_9502Code.GDBOTON_9595NEXTObjects1= [];
gdjs.A_9502Code.GDBOTON_9595NEXTObjects2= [];
gdjs.A_9502Code.GDNextObjects1= [];
gdjs.A_9502Code.GDNextObjects2= [];


gdjs.A_9502Code.mapOfGDgdjs_9546A_95959502Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.A_9502Code.GDNewSpriteObjects1});
gdjs.A_9502Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.A_9502Code.GDNewSpriteObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Disco 1/OJO2000/UNIDAD01/L1_AUDIO/POEM.ogg", 1, false, 100, 1);
}
{for(var i = 0, len = gdjs.A_9502Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.A_9502Code.GDNewSpriteObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 1);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10110164);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.A_9502Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.A_9502Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.A_9502Code.GDNewSpriteObjects1[i].hide(false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Disco 1/STUFF/MEDIA/SHARED.DXR RIP/2502.ogg", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.A_9502Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.A_9502Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.A_9502Code.GDNewSpriteObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.A_9502Code.GDNewSpriteObjects1[k] = gdjs.A_9502Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.A_9502Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.A_9502Code.mapOfGDgdjs_9546A_95959502Code_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu_MAPA", false);
}
}

}


};

gdjs.A_9502Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.A_9502Code.GDBG_9595A_959502Objects1.length = 0;
gdjs.A_9502Code.GDBG_9595A_959502Objects2.length = 0;
gdjs.A_9502Code.GDNewSpriteObjects1.length = 0;
gdjs.A_9502Code.GDNewSpriteObjects2.length = 0;
gdjs.A_9502Code.GDBOTON_9595RESTARTObjects1.length = 0;
gdjs.A_9502Code.GDBOTON_9595RESTARTObjects2.length = 0;
gdjs.A_9502Code.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.A_9502Code.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.A_9502Code.GDNextObjects1.length = 0;
gdjs.A_9502Code.GDNextObjects2.length = 0;

gdjs.A_9502Code.eventsList0(runtimeScene);
gdjs.A_9502Code.GDBG_9595A_959502Objects1.length = 0;
gdjs.A_9502Code.GDBG_9595A_959502Objects2.length = 0;
gdjs.A_9502Code.GDNewSpriteObjects1.length = 0;
gdjs.A_9502Code.GDNewSpriteObjects2.length = 0;
gdjs.A_9502Code.GDBOTON_9595RESTARTObjects1.length = 0;
gdjs.A_9502Code.GDBOTON_9595RESTARTObjects2.length = 0;
gdjs.A_9502Code.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.A_9502Code.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.A_9502Code.GDNextObjects1.length = 0;
gdjs.A_9502Code.GDNextObjects2.length = 0;


return;

}

gdjs['A_9502Code'] = gdjs.A_9502Code;
