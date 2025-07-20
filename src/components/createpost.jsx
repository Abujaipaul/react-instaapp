import { useState } from "react"

export default function Createpost({createOpen, toggleCreateClose, updatePost}){
     //states for both title and image
   const [title, setTitle] = useState("")
   const [image, setImage] = useState(null)

     // State for handling the error message
    const [error, setError] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault()
        
          // CHANGE 2: Check if an image file has been selected.
        if (!image) {
            setError("Image not selected!!")
            return // Stop the function if no image is selected
        }





        updatePost(title, image)

        setTitle("")
        setImage(null)
         setError("")
        toggleCreateClose()
    }
    

   if(createOpen === false){
        return null
    }


    return(
        <div id="createpost" className="modal">
                <div className="editcard">
                  <p>Create New Post</p>
                  <form action="#" className="createpost" onSubmit={handleSubmit}>
                    <div className="postimage"><label htmlFor="postimage">Image:</label>
                    <input type="file" id="postimage" accept="image/*"  onChange={(e) => setImage(e.target.files[0])} /></div>
                    <div className="postcaption">
                      <label htmlFor="caption">Title (2-50 characters):</label>
                      <input type="text" id="caption" value={title} onChange={(e) => setTitle(e.target.value)} required minLength="2" maxLength="50" />
                    </div>
                   <div className="error" style={{ display: error ? 'block' : 'none' }}>
                      <p>{error}</p>
                      
                    </div>
                  <div className="editbutton">
                   <button id="closebuttoncreate" className="closebutton" type="button" onClick={toggleCreateClose}>Close</button>
                   <button id="savebuttoncreate"  className="savebutton"  type="submit">Create</button>
                  </div>

                  </form>

                </div>
          </div>
    )
}