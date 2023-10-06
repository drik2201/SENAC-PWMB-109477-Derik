function logando(){
    let logim= document.getElementById("nome").value
    {
        window.alert(`seja bem vindo ${logim}}`)
        window.location.assign("longin.html");
    }
}
var claro = true
function darkMode(){
    claro = !claro
    if(claro == true){
        document.getElementById("mainT").style.backgroundColor = "#FFEFD5"
    }else{
    document.getElementById("mainT").style.backgroundColor = "black"
    }
}
