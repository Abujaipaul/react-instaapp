import { useState } from 'react'
import Editprofile from './components/editprofile'
import Footer from './components/footer'
import Header from './components/header'
import Top from './components/top'
import Createpost from './components/createpost'
import CardContainer from './components/cardcontainer'
import PreviewModal from './components/previewmodal'
//assets import
import image2 from "./assets/image 2.svg"
import pedro11 from "./assets/pexels-kassandre-pedro-8639743 1 (1).svg"
import pedro1 from "./assets/pexels-kassandre-pedro-8639743 1.svg"
import pedro12 from "./assets/pexels-kassandre-pedro-8639743 1 (2).svg"
import pedro13 from "./assets/pexels-kassandre-pedro-8639743 1 (3).svg"
import pedro14 from "./assets/pexels-kassandre-pedro-8639743 1 (4).svg"
import pedro15 from "./assets//pexels-kassandre-pedro-8639743 1 (5).svg"


//grid assets
const gridAssets = [
     { id: 1, image: pedro11, title: "Val Thorens" },
     { id: 2, image: pedro1, title: "Restaurant Terrace" },
     { id: 3, image: pedro12, title: "An Outdoor Cafe" }, 
     { id: 4, image: pedro13, title: "A very long bridge, over the forest..." },
     { id: 5, image: pedro14, title: "Tunnel with morning light" },
     { id: 6, image: pedro15, title: "Mountain house" }
];


function App(){
    //State for container post's 
      const [posts, setPosts] = useState(gridAssets)

    const updatePost = (title, image) => {
       const newPost = {
        id: Date.now(), 
        title: title,
        image: URL.createObjectURL(image),
      };

      setPosts([newPost, ...posts])
    }

    //useState and functions to manage editprofile forms
    const [profile, setProfile] = useState({
        name : "abujai paul",
        bio: "life is good",
        image: image2,
    })
  
    const updateProfile = ( name, bio, imageFile) => {
      //   setProfile(prevProfile => {
               // If a new image file is provided, create a URL for it to display.
             // Otherwise, keep the existing profile image.
      //    const newImage = imageFile ? URL.createObjectURL(imageFile) : prevProfile.image
        
         //  return{
         //  name : name,
         //   bio: bio,
         //   image: newImage,
         //   }
         // }

             //   })
             
             //OR

         setProfile(
            {
          name : name,
           bio: bio,
           image: URL.createObjectURL(imageFile),
           }
         )
          
  
    }

   //    // CHANGE 1: Update the function to accept an image file.
   //  const updateProfile = ( name, bio, imageFile) => {
   //      setProfile(prevProfile => {
   //       
   //          const newImage = imageFile ? URL.createObjectURL(imageFile) : prevProfile.image;

   //          return {
   //             name: name,
   //             bio: bio,
   //             image: newImage,
   //          };
   //      })
   //  }
  
  
    //useState memory and functions for the editprofile and createpost modals
     const [editOpen, seteditOpen] = useState(false)
     const [createOpen, setcreateOpen] = useState(false)
     //useState for modalpreview modal.
      const [imagePreview, setimagePreview] = useState(null)

      const openPreview = (imageFile) => setimagePreview(imageFile)
      const closePreview = () => setimagePreview(null)


      
     const toggleEditOpen = () => {
        seteditOpen(true)
     }
     const toggleEditClose = () => {
        seteditOpen(false)
     }
    
     const toggleCreateOpen = () => {
        setcreateOpen(true)
     }
      const toggleCreateClose = () => {
        setcreateOpen(false)
     }


     
    return(
        <div className="container">
           <Top />
           <Header toggleEditOpen={toggleEditOpen} toggleCreateOpen={toggleCreateOpen} profile={profile} 
            openPreview={openPreview}/>
           <Editprofile editOpen={editOpen} toggleEditClose={toggleEditClose} updateProfile={updateProfile}/>
           <Createpost createOpen={createOpen} toggleCreateClose={toggleCreateClose} updatePost={updatePost}/>
           <CardContainer gridAssets={posts} cardPreview={openPreview}/>
           <Footer />
           <PreviewModal  closePreview={closePreview} isOpen={!!imagePreview} previewImage={imagePreview} />
        </div>
    )
}





export default App
