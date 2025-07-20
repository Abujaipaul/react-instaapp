// import image2 from "../assets/image 2.svg"
import group2 from "../assets/Group 2.svg"


function Header({toggleEditOpen, toggleCreateOpen, profile, openPreview}){


    const handleProfilePreview = () => {
        openPreview(profile.image)
    }

    return(
         <div className="header">
            <div className="header_img">
                <img src={profile.image} onClick={handleProfilePreview} alt="" id="insertEditImage" />
            </div>
            <div className="header_text">
                <h1 id="insertEditName">{profile.name}</h1>
                <p id="insertEditBio">{profile.bio}</p>
                <div className="button_box">
                  <button id="button" onClick={toggleCreateOpen}><span>+ </span>New Post</button>
                </div>
                <p id="edit" className="editprofilebtn" onClick={toggleEditOpen}><img src={group2} alt="pencil" />Edit Profile</p>
            </div>
        </div>
    )
}


export default Header