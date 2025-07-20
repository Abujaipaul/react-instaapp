




export default function PreviewModal({closePreview, isOpen, previewImage}){

     if(isOpen === false){
       return null;
     }
    

     const imageTouch = (event) => event.stopPropagation() 


    return(
      <div className="modalpreview" onClick={closePreview}>
        <div className="modalpreviewimage">
           
          <img alt="imagemodal" id="modal-img" src={previewImage} class="previewimage" onClick={imageTouch} />
        </div> 
      </div> 
    )
}


