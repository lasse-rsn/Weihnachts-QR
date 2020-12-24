var  maxSnowflake  =  100 ;
var  content  =  [ "\ u2744" ,  "\ u2745" ,  "\ u2746" ] ;

function snow() {
    for(let i = 0; i < maxSnowflake; i++){
        let snowflakewrapper = document.createElement("div");
        snowflakewrapper.classList.add("snow-wrapper");

        let snowFlake = document.createElement("div");
        snowFlake.classList.add("snow-flake")

        let snowFlakeSymbolnumber = math.floor(Math.random() * content.length);
        let snowFlakeSymbol = document.createTextNode(
            content[snowFlakeSymbolnumber]
        );

        snowFlake.appendChild(snowFlakeSymbol);

        let fontSize = math.floor(Math.random() *24 + 5);
        snowFlake.style.fontSize = fontSize + "px";

        let horizontal = Math.floor(Math.random() * 100);
        snowflakewrapper.style.left = horizontal + "%";

        snowflakewrapper.style.top = "-55px";

        let duration = Math.floor(Math.random() + 10 + 5);
        snowFlake.style.animationDuration = 40 - fontSize + "s";
        snowflakewrapperstyle.animationDuration = 40 - fontSize + "s";

        let delay = Math.floor(Math.random() * 15);
        snowFlake.style.animationDelay = delay + "s";
        snowflakewrapper.style.animationDelay = delay + "s";

        snowflakewrapper.appendChild(snowFlake);
        document.body.appendChild(snowflakewrapper);    
    }
}

snow();
