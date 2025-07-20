import { useState } from "react"


 function Editprofile({editOpen, toggleEditClose, updateProfile}){

    //useState and function to handle the update of the profile and props in it too.
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [imageFile, setimageFile] = useState(null)
   //useState for the error writeup...
   const [error, setError] = useState("") 

     const handleSubmit = (event) => {
         event.preventDefault()
         
         if(!imageFile){
          setError("please attach an image!!")
          return
         }


         updateProfile(name, bio, imageFile)
         

        setName("")
        setBio("")
        setimageFile(null)
        setError("")
        toggleEditClose()
     }

    if(editOpen === false){
        return null
    }
    

    return(
        <div id="editprofile" className="modal" role="dialog">
              <div className="editcard">
                <p>Edit Profile</p>
                <div className="editform">
                  <form action="#" id="editform" onSubmit={handleSubmit}>
                    <div className="editname">
                      <label htmlFor="name">Name (2-50 characters):</label>
                     <input type="text" id="editname" value={name} onChange={(e) => setName(e.target.value)} minLength="2" maxLength="50" required/>
                    </div>
                    <div className="editbio">
                      <label htmlFor="bio">Bio (10-150 characters):</label>
                      <textarea name="editbio" id="editbio" value={bio} onChange={(e) => setBio(e.target.value)} minLength="10" maxLength="150" required></textarea>
                    </div>
                    <div className="editimage">
                      <label htmlFor="image">Profile Picture:</label>
                      <input type="file" accept="image/*" id="editimage" 
                      onChange={(e) => setimageFile(e.target.files[0])} />
                    </div>
                    <div className="error" style={{display : error ? "block" : "none" }}>
                      <p>{error}</p>
                    </div>
                    <div className="editbutton">
                   <button id="closebuttonedit" className="closebutton" type="button" onClick={toggleEditClose}>Close</button>
                   <button id="savebuttonedit" className="savebutton" type="submit">Save</button>
                  </div>
                </form>
                  
                </div>
                
              </div>
          </div>
    )
}


export default Editprofile