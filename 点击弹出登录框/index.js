function $(param){
        if(arguments[1] == true){
            return document.querySelectorAll(param);
        }else{
            return document.querySelector(param);
        }
}
function ani(){
    $(".popOut").className = "popOut ani";
}
$("button").onclick = function(){
    $(".popOut").style.display = "block";
    ani();
    $(".popOutBg").style.display = "block";
};
$(".popOut > span").onclick = function(){
    $(".popOut").style.display = "none";
    $(".popOutBg").style.display = "none";
};
$(".popOutBg").onclick = function(){
    $(".popOut").style.display = "none";
    $(".popOutBg").style.display = "none";
};