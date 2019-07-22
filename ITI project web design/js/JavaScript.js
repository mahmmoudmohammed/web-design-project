var currentImage = 0;
var timerID;
var imageArray = new Array(3);
    imageArray[0] = "images/012.jpg";
    imageArray[1] = "images/main2.jpg";
    imageArray[2] = "images/main.jpg";
    imageArray[3] = "images/job%201.jpg";
    imageArray[4] = "images/job%202.jpg";
    imageArray[5] = "images/job%203.jpg";
function flip() 
{
        currentImage++;
        if (currentImage == 6)
            currentImage = 0;
        document.images[1].src = imageArray[currentImage];
        document.images[2].src = imageArray[currentImage];
        document.images[3].src = imageArray[currentImage];
     
}
function swap() 
{
        currentImage++;
        if (currentImage == 6)
            currentImage = 0;
       document.images[4].src = imageArray[currentImage];
        document.images[5].src = imageArray[currentImage];
        document.images[6].src = imageArray[currentImage];
}
function change()
 {
     timerID = setInterval("swap()",1500);
 }

function changee()
 {
 timerID = setInterval("flip()",1500);
 }
window.onload=change();
window.onload=changee();