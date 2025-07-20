import {useState} from 'react'

function Card({post, cardPreview}){

    //state for like button
     const [isLiked, setisLiked] = useState(false)

    //  const handleLike = () => {
    //     if(isLiked === false){
    //         setisLiked(true)
    //     }else if(isLiked === true){
    //         setisLiked(false)
    //     }
    //  }
    //  OR
      const handleLike = () => {
       setisLiked(!isLiked)
     }


       return(
        <div className="gridcard">
             <img src={post.image} alt={post.title} onClick={() => cardPreview(post.image)} className="gridimg"/>
           <div className="little_box">
              <p>{post.title}</p>
              <i onClick={handleLike} className=
              {isLiked ? "fas fa-heart text-red-500 text-1l" : "far fa-heart text-red-400 text-1l" }></i>
           </div>
        </div>
      )
}

  

function CardContainer({gridAssets, cardPreview}){
   
     return (
        <div className="cards_container">
            {gridAssets.map((post) => {
               return (
                <Card key={post.id} post={post} cardPreview={cardPreview}/>
               )
                // {console.log(post)}
            })
            }
        </div>
      )
}


export default CardContainer