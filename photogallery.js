function upDate(previewPic){
  /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
  //to show alt of image on hoverover
  document.getElementById('image').innerHTML=previewPic.alt;
  //to show preview  image on hoverover
  document.getElementById('image').style.backgroundImage="url('"+previewPic.src+"')";
  //to change background-color  on hoverover
  document.getElementById('image').style.backgroundColor="#008000";
	}

	function unDo(){
    /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		
    //to show previous content on mouseover.
 document.getElementById('image').innerHTML="Hover over an image below to display here";
document.getElementById('image').style.backgroundImage="url('')";
 document.getElementById('image').style.backgroundColor="#8e68ff";
	}