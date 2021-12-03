room = document.querySelector("#room-code");
allCodes = {}

if(room.innerHTML == "A"){
    allCodes["padlock1"] = 324;
    allCodes["padlock2"] = 5840;
    allCodes["padlock3"] = 9246;
    allCodes["padlock4"] = 0217;

    allCodes["sunMoon"] = "XHOY";
    
    allCodes["puzzle"] = "RXT9AWY4";
    allCodes["bibleText"] = "RHVD"
    allCodes["bomb"] = 3712;
    allCodes["combined-bomb"] = 7847;
}else if (room.innerHTML == "B"){
    
    allCodes["padlock1"] = 972;
    allCodes["padlock2"] = 9133;
    allCodes["padlock3"] = 7356;
    allCodes["padlock4"] = 6604;

    allCodes["sunMoon"] = "XHOY";
    
    allCodes["puzzle"] = "SBY5QPEH";
    allCodes["bibleText"] = "DMGN";
    allCodes["bomb"] = 3712;
    allCodes["combined-bomb"] = 7847;
}

mainCodeElement= document.querySelector("#main-code-input");
latestShownElement = mainCodeElement;
function DefuseBomb(){
    console.log("Defusing bomb");
    codeElement = document.querySelector("#bomb-code-input");
    if(codeElement.value == "123456"){
        console.log("CODE CORRECT");
    }
}

function EnterCode(){
    console.log("Entering code");
    codeElement = document.querySelector("#main-code-input");
    if(codeElement.value == allCodes["sunMoon"]){
        latestShownElement = document.querySelector(".display-lock-code");
        document.querySelector("#lock-code").innerHTML = allCodes["padlock2"];
        latestShownElement.style.display = "block";
        return;
    }

    if(codeElement.value == allCodes["bibleText"]){
        latestShownElement = document.querySelector(".display-lock-code");
        document.querySelector("#lock-code").innerHTML = allCodes["padlock3"];
        latestShownElement.style.display = "block";
        return;
    }

    if(codeElement.value == allCodes["puzzle"]){
        latestShownElement = document.querySelector(".animal-sounds");
        //document.querySelector("#lock-code").innerHTML = allCodes["padlock3"];
        latestShownElement.style.display = "block";
        return;
    }

    if(codeElement.value == allCodes["combined-bomb"]){
        latestShownElement = document.querySelector(".success");
        //document.querySelector("#lock-code").innerHTML = allCodes["padlock3"];
        latestShownElement.style.display = "block";
        return;
    }

    
}

function Back(){
    latestShownElement.style.display = "none";
    mainCodeElement.style.display = "block";
}

function Play(){

}