Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camara=document.getElementById("camara");

Webcam.attach('#camara');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML='<img id="imagen_capturada" src="'+data_uri+'">';
    });
}