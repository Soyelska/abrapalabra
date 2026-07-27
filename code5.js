gdjs.A_9501Code = {};
gdjs.A_9501Code.localVariables = [];
gdjs.A_9501Code.idToCallbackMap = new Map();
gdjs.A_9501Code.GDBG_9595A_959501Objects1= [];
gdjs.A_9501Code.GDBG_9595A_959501Objects2= [];
gdjs.A_9501Code.GDVID_9595A_959501Objects1= [];
gdjs.A_9501Code.GDVID_9595A_959501Objects2= [];
gdjs.A_9501Code.GDMASK_9595SPRITEObjects1= [];
gdjs.A_9501Code.GDMASK_9595SPRITEObjects2= [];
gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1= [];
gdjs.A_9501Code.GDBOTON_9595RESTARTObjects2= [];
gdjs.A_9501Code.GDBOTON_9595NEXTObjects1= [];
gdjs.A_9501Code.GDBOTON_9595NEXTObjects2= [];
gdjs.A_9501Code.GDNextObjects1= [];
gdjs.A_9501Code.GDNextObjects2= [];


gdjs.A_9501Code.mapOfGDgdjs_9546A_95959501Code_9546GDVID_95959595A_9595959501Objects1Objects = Hashtable.newFrom({"VID_A_01": gdjs.A_9501Code.GDVID_9595A_959501Objects1});
gdjs.A_9501Code.mapOfGDgdjs_9546A_95959501Code_9546GDMASK_95959595SPRITEObjects1Objects = Hashtable.newFrom({"MASK_SPRITE": gdjs.A_9501Code.GDMASK_9595SPRITEObjects1});
gdjs.A_9501Code.mapOfGDgdjs_9546A_95959501Code_9546GDBOTON_95959595RESTARTObjects1Objects = Hashtable.newFrom({"BOTON_RESTART": gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1});
gdjs.A_9501Code.mapOfGDgdjs_9546A_95959501Code_9546GDBOTON_95959595NEXTObjects1Objects = Hashtable.newFrom({"BOTON_NEXT": gdjs.A_9501Code.GDBOTON_9595NEXTObjects1});
gdjs.A_9501Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BOTON_NEXT"), gdjs.A_9501Code.GDBOTON_9595NEXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOTON_RESTART"), gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1);
gdjs.copyArray(runtimeScene.getObjects("MASK_SPRITE"), gdjs.A_9501Code.GDMASK_9595SPRITEObjects1);
gdjs.copyArray(runtimeScene.getObjects("VID_A_01"), gdjs.A_9501Code.GDVID_9595A_959501Objects1);
{gdjs.evtsExt__SpriteMasking__Mask.func(runtimeScene, gdjs.A_9501Code.mapOfGDgdjs_9546A_95959501Code_9546GDVID_95959595A_9595959501Objects1Objects, gdjs.A_9501Code.mapOfGDgdjs_9546A_95959501Code_9546GDMASK_95959595SPRITEObjects1Objects, null);
}
{for(var i = 0, len = gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1.length ;i < len;++i) {
    gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.A_9501Code.GDBOTON_9595NEXTObjects1.length ;i < len;++i) {
    gdjs.A_9501Code.GDBOTON_9595NEXTObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.A_9501Code.GDVID_9595A_959501Objects1.length ;i < len;++i) {
    gdjs.A_9501Code.GDVID_9595A_959501Objects1[i].play();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("VID_A_01"), gdjs.A_9501Code.GDVID_9595A_959501Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.A_9501Code.GDVID_9595A_959501Objects1.length;i<l;++i) {
    if ( gdjs.A_9501Code.GDVID_9595A_959501Objects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.A_9501Code.GDVID_9595A_959501Objects1[k] = gdjs.A_9501Code.GDVID_9595A_959501Objects1[i];
        ++k;
    }
}
gdjs.A_9501Code.GDVID_9595A_959501Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BOTON_NEXT"), gdjs.A_9501Code.GDBOTON_9595NEXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOTON_RESTART"), gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1);
{for(var i = 0, len = gdjs.A_9501Code.GDBOTON_9595NEXTObjects1.length ;i < len;++i) {
    gdjs.A_9501Code.GDBOTON_9595NEXTObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1.length ;i < len;++i) {
    gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOTON_NEXT"), gdjs.A_9501Code.GDBOTON_9595NEXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("BOTON_RESTART"), gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1.length;i<l;++i) {
    if ( gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1[k] = gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1[i];
        ++k;
    }
}
gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.A_9501Code.GDBOTON_9595NEXTObjects1.length;i<l;++i) {
    if ( gdjs.A_9501Code.GDBOTON_9595NEXTObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.A_9501Code.GDBOTON_9595NEXTObjects1[k] = gdjs.A_9501Code.GDBOTON_9595NEXTObjects1[i];
        ++k;
    }
}
gdjs.A_9501Code.GDBOTON_9595NEXTObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12400356);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Disco 1/STUFF/MEDIA/SHARED.DXR RIP/2504.ogg", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOTON_RESTART"), gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1.length;i<l;++i) {
    if ( gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1[k] = gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1[i];
        ++k;
    }
}
gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.A_9501Code.mapOfGDgdjs_9546A_95959501Code_9546GDBOTON_95959595RESTARTObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1 */
gdjs.copyArray(runtimeScene.getObjects("VID_A_01"), gdjs.A_9501Code.GDVID_9595A_959501Objects1);
{for(var i = 0, len = gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1.length ;i < len;++i) {
    gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.A_9501Code.GDVID_9595A_959501Objects1.length ;i < len;++i) {
    gdjs.A_9501Code.GDVID_9595A_959501Objects1[i].play();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOTON_NEXT"), gdjs.A_9501Code.GDBOTON_9595NEXTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.A_9501Code.GDBOTON_9595NEXTObjects1.length;i<l;++i) {
    if ( gdjs.A_9501Code.GDBOTON_9595NEXTObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.A_9501Code.GDBOTON_9595NEXTObjects1[k] = gdjs.A_9501Code.GDBOTON_9595NEXTObjects1[i];
        ++k;
    }
}
gdjs.A_9501Code.GDBOTON_9595NEXTObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.A_9501Code.mapOfGDgdjs_9546A_95959501Code_9546GDBOTON_95959595NEXTObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12402444);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.A_9501Code.GDBOTON_9595NEXTObjects1 */
{for(var i = 0, len = gdjs.A_9501Code.GDBOTON_9595NEXTObjects1.length ;i < len;++i) {
    gdjs.A_9501Code.GDBOTON_9595NEXTObjects1[i].getBehavior("Animation").setAnimationName("BLINK");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Disco 1/STUFF/MEDIA/SHARED.DXR RIP/2544.ogg", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SceneTransition");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SceneTransition") > 2;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() - 1).getChild("ProgressID").setNumber(20);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Abrapalabra", "saveSlots", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "SceneTransition");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A_02", false);
}
}

}


};

gdjs.A_9501Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.A_9501Code.GDBG_9595A_959501Objects1.length = 0;
gdjs.A_9501Code.GDBG_9595A_959501Objects2.length = 0;
gdjs.A_9501Code.GDVID_9595A_959501Objects1.length = 0;
gdjs.A_9501Code.GDVID_9595A_959501Objects2.length = 0;
gdjs.A_9501Code.GDMASK_9595SPRITEObjects1.length = 0;
gdjs.A_9501Code.GDMASK_9595SPRITEObjects2.length = 0;
gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1.length = 0;
gdjs.A_9501Code.GDBOTON_9595RESTARTObjects2.length = 0;
gdjs.A_9501Code.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.A_9501Code.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.A_9501Code.GDNextObjects1.length = 0;
gdjs.A_9501Code.GDNextObjects2.length = 0;

gdjs.A_9501Code.eventsList0(runtimeScene);
gdjs.A_9501Code.GDBG_9595A_959501Objects1.length = 0;
gdjs.A_9501Code.GDBG_9595A_959501Objects2.length = 0;
gdjs.A_9501Code.GDVID_9595A_959501Objects1.length = 0;
gdjs.A_9501Code.GDVID_9595A_959501Objects2.length = 0;
gdjs.A_9501Code.GDMASK_9595SPRITEObjects1.length = 0;
gdjs.A_9501Code.GDMASK_9595SPRITEObjects2.length = 0;
gdjs.A_9501Code.GDBOTON_9595RESTARTObjects1.length = 0;
gdjs.A_9501Code.GDBOTON_9595RESTARTObjects2.length = 0;
gdjs.A_9501Code.GDBOTON_9595NEXTObjects1.length = 0;
gdjs.A_9501Code.GDBOTON_9595NEXTObjects2.length = 0;
gdjs.A_9501Code.GDNextObjects1.length = 0;
gdjs.A_9501Code.GDNextObjects2.length = 0;


return;

}

gdjs['A_9501Code'] = gdjs.A_9501Code;
