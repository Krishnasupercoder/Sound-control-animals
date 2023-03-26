function start(){
    navigator.mediaDevices.getUserMedia();
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/yZXok-uMp/model.json",model_ready);
}
function model_ready() {
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        r= Math.floor(Math.random()*255)+1;
        g= Math.floor(Math.random()*255)+1;
        b= Math.floor(Math.random()*255)+1;
        document.getElementById("label").innerHTML="I can hear - "+results[0].label;
        
    
        document.getElementById("label").style.color="rgb("+r+","+b+","+g+")";
            
    
        img= document.getElementById("siu");
        
    
        if(results[0].label=="Barking"){
            img.src="dog.jfif";
        }
        else if(results[0].label=="meow"){
            img.src="cat.png";
        }
        else if(results[0].label=="moo"){
            img.src="cow.png";
        }
        else if(results[0].label=="roar"){
            img.src="lion.png";
            
        }
        else{
            img.src="ear.png"
        }
    }
    }