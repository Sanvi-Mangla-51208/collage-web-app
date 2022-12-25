var speech_recognition= window.webkitSpeechRecognition;
var recognition= new speech_recognition();

function start(){
    recognition.start();
}
recognition.onresult= function(event){
    console.log(event);
    content= event.results[0][0].transcript;
    console.log(content);
    if(content == "take my selfie"){
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);

    setTimeout(function(){
      img_id="selfie1";
      take_snapshot();
      speak_data= "Taking your selfie in next 10 seconds";
      var utter_this = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utter_this);
    },5000
    );

    setTimeout(function(){
        img_id="selfie2";
        take_snapshot();
        speak_data= "Taking your selfie in next 10 seconds";
        var utter_this = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter_this);
      },5000
      );

      setTimeout(function(){
        img_id="selfie3";
        take_snapshot();
        speak_data= "Taking your selfie in next 10 seconds";
        var utter_this = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter_this);
      },5000
      );
  
}

Webcam.set({
    height:360,
    width:250,
    image_format:'png',
    png_quality:90,
    
});

camera=document.getElementById("camera");


function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function(data_uri){
    if (img_id=="selfie1"){
        document.getElementById(result1).innerHTML='img_id="selfie1" src="'+data_uri+ '"/>';
    }

    if (img_id=="selfie2"){
        document.getElementById(result2).innerHTML='img_id="selfie2" src="'+data_uri+ '"/>';
    }

    if (img_id=="selfie3"){
        document.getElementById(result3).innerHTML='img_id="selfie3" src="'+data_uri+ '"/>';
    }
    });
}

function save(){
    link=document.getElementById("link");
    image =document.getElementById("selfie_image").src;
    link.href= image;
    link.click();
}



