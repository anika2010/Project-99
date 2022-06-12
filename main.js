var speech_recognition=window.webkitSpeechRecognition;
var recognition=new speech_recognition();

function start(){
    document.getElementById("selfie").innerHTML="";
    recognition.start();
}
 recognition.onresult=function(event){
     console.log(event);
     var Content=event.results[0][0].transcript;
     document.getElementById("selfie").innerHTML=Content;
     if(Content=="selfie"){
         speech();
     }
     
 }
 function speech(){
    var synth = window.speechSynthesis;
     speak_data = "Taking you Selfie in 5 seconds"; 
     var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
      Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();   
    },5000);   
 }

 