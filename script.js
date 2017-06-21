// JavaScript File
// JavaScript File
$( document ).ready(function() {
$("#hiking").hide();
    $("#lang").click(function(){

        $("#langChangeh1").html("Bienvenido al citio de Chinnell");
        $("#langChangeh3").html("Aqui se encuentra oportunidades de escalar, acampar, y dar caminatas cerca de la ciudad de Nuevo York!")
        $("#lang").html("Change the text to English");
        $("#showPics").html("Por ejemplo...");
        
    });
    
    $("#showPic").click(function(){
        $("#hiking").show();
    });

});