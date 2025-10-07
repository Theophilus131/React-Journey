
function Picture() {

   const imageUrl = "./src/assets/react.svg"; // Correct path to the image file

   return (
    
       <img src={imageUrl} alt="react" style={{ width: '200px', height: '200px' }} />
  
   );

}

export default Picture;