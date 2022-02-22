function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MVMnASMke/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error;
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255)+1;
        random_number_g = Math.floor(Math.random() * 255)+1;
        random_number_b = Math.floor(Math.random() * 255)+1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img1 = document.getElementById('dog');
        img2 = document.getElementById('cat');
        img3 = document.getElementById('bird');
        img4 = document.getElementById('bunny');

        if(results[0].label == "Dog") {
            img1.src = 'waggydogtailgif.gif';
            img2.src = 'cutecatpng.png';
            img3.src = 'Cutebirdpng.png';
            img4.src = 'Bunnypng.png';
        } else if (results[0].label == "Cat") {
            img1.src = 'waggydogtailpng.png';
            img2.src = 'cutecatdancegif.gif';
            img3.src = 'Cutebirdpng.png';
            img4.src = 'Bunnypng.png';
        } else if (results[0].label == "Bird") {
            img1.src = 'waggydogtailpng.png';
            img2.src = 'cutecatpng.png';
            img3.src = 'Cutebirdgif.gif';
            img4.src = 'Bunnypng.png';
        }else if (results[0].label == "Rabbit"){
            img1.src = 'waggydogtailpng.png';
            img2.src = 'cutecatpng.png';
            img3.src = 'Cutebirdpng.png';
            img4.src = 'Bunnygif.gif';
        }
    }
}