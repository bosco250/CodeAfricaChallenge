const imageDivs = document.querySelectorAll('.images');
imageDivs.forEach(function(imageDiv) {
  const knowMoreDiv = imageDiv.querySelector('.knowMoreDiv');
  imageDiv.addEventListener('mouseover', function() {
    knowMoreDiv.style.display = 'block';
    const image = imageDiv.querySelector('img');
    const description = imageDiv.querySelector('.Description');
    const country = imageDiv.querySelector('.country');

    image.style.width = '100%';
    image.style.height = '100vh';
    description.style.top = '410px';
    description.style.left = '34px';
    country.style.top = '490px';
    country.style.left = '34px';
  });
  imageDiv.addEventListener('mouseout', function() {
    knowMoreDiv.style.display = 'none';
    const image = imageDiv.querySelector('img');
    const description = imageDiv.querySelector('.Description');
    const country = imageDiv.querySelector('.country');

    description.style.top = '440px';

    description.style.left = '34px';
    country.style.top = '520px';
    country.style.left = '34px';
  });

});


var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function showImage(pic){
    fullImgBox.style.display = "flex";
    fullImg.src=pic;

}
function closeImage(){
    fullImgBox.style.display = "none";


}

fullImg.addEventListener("mouseover", function() {
    fullImgBox.style.cursor = "pointer";
});

fullImg.addEventListener("mouseout", function() {
    fullImgBox.style.cursor = "default";
});