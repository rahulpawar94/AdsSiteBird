
window.onload = function(){
    document.getElementById('close2').onclick = function(){
        this.parentNode.parentNode.parentNode
        .removeChild(this.parentNode.parentNode);
        return false;
    };

    document.getElementById('close1').onclick = function(){
        this.parentNode.parentNode.parentNode
        .removeChild(this.parentNode.parentNode);
        return false;
    };
    document.getElementById('close3').onclick = function(){
        document.getElementById('side-bannerleftID').style.display = "none";
         return false;
    };
    document.getElementById('close4').onclick = function(){
        document.getElementById('side-bannerrightID').style.display = "none";
         return false;
    };
};