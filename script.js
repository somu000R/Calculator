let buttonPad=document.getElementsByClassName("buttonPad")[0];
let h4=document.querySelector("h4");
let operator=["+","-","÷","×","%"];
buttonPad.addEventListener("click",(event)=>{
    // console.dir(event.target);
    // console.log(event.target.classList[0]);
    if(event.target.classList[0]=="button"||event.target.tagName=="P"){
        let inp=event.target.innerText;
        // console.log(inp);
        if(inp == "=" || inp == "C" || inp == "←"){
            // console.log(inp);
            if(inp=="C"){
                h4.innerText="";
            }
            else if(inp=="←"){
                back();
            }
            else if(inp == "="){
                let rawVal=h4.innerText;
                rawVal=rawVal.replace(/×/g,"*").replace(/÷/g,"/");
                rawVal=output(rawVal).toString();
                let finalVal=rawVal;
                if(rawVal.length>10){
                    finalVal=rawVal.slice(0,11);
                }
                h4.innerText=finalVal;
            }
        }
        else{
            h4.innerText=h4.innerText+inp;

        }
        if(h4.innerText.length>10){
            let str=h4.innerText;
            let str2=str.slice(0,10);
            h4.innerText=str2;
        }
    }
    function output(val){
        return new Function(`return ${val}`)();
    }
    function back(){
        let str=h4.innerText;
        let str2=str.slice(0,str.length-1);
        h4.innerText=str2;
    }

})