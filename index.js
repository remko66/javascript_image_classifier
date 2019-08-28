let net;

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);
  document.getElementById("res").innerHTML=result[0]['className']
  console.log(result);
}

function previewFile(){
  var preview = document.querySelector('img'); //selects the query named img
  var file    = document.querySelector('input[type=file]').files[0]; //sames as here
  var reader  = new FileReader();

  reader.onloadend = function () {
      preview.src = reader.result;
  }

  if (file) {
      reader.readAsDataURL(file); //reads the data as a URL
      document.querySelector('img').style.visibility = "visible";
      app()
  } else {
      preview.src = "";
  }
}
document.querySelector('img').style.visibility = "hidden";
 //calls the function named previewFile()
