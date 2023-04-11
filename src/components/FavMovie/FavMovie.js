import { useState , useRef } from 'react';
import Card from 'react-bootstrap/Card'
import './FavMovie.css';
import Button from "react-bootstrap/Button"



export default function FavMovie(props) {


    const [isActive, setIsActive] = useState(false);

    const updatehandler = () => {
        setIsActive(!isActive);
    }

    async function handleDelete(id){
        let url =`${process.env.REACT_APP_API_SERVER_URL}/DELETE/${id}`;
        console.log(9999,url);
      

        let response = await fetch(url,{

            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
           
        })
        props.onTriggerEffect();

        console.log(8888,response);
        console.log(7777,response.status);




        // if(response.status === 204){
            
        //     alert("successfully deleted !!")
            
        // }
    }

    
    const commentRef = useRef();

    function submitHandler(e){
      
      let comment = commentRef.current.value;
  
      console.log("user comment is : ",comment);
  
      let editedMovie={...props.singleMovie, comment}
      console.log(editedMovie);
      console.log(editedMovie.id);
      // props.commentHandler(newMovie);
      
       handleEdit(editedMovie)
        // addToFavHandler(newMovie);
    
    }

   
    async function handleEdit(editedMovie){
        let url =`${process.env.REACT_APP_API_SERVER_URL}/UPDATE/${editedMovie.id}`;
        let data={
            title: editedMovie.title,
            release_date: editedMovie.release_date,
            poster_path : editedMovie.poster_path,
            comment : editedMovie.comment
          }
          console.log(6666,url);
          
        let response = await fetch(url,{
            

            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        console.log(123123,data);
        props.onTriggerEffect();

        console.log(8888,response);
        console.log(7777,response.status);




        // if(response.status === 204){
            
        //     alert("successfully deleted !!")
            
        // }
    }


     



  
    return (
        <div className='alldiv'>

            <Card className="movieCard" >
                <Card.Img src={`https://image.tmdb.org/t/p/w185${props.singleMovie.poster_path}`} alt={props.singleMovie.title} />

                <Card.ImgOverlay className={isActive ? 'updatecss' : "overlayfav"}>
                    <Card.Title >{`${props.singleMovie.title}`}</Card.Title>
                    <Card.Text  >
                        
                        {isActive ?
                            <div ><h6>COMMENT:</h6>
                                <textarea ref={commentRef} className='textarea'>{props.singleMovie.comment}</textarea>
                                <Button className='unbt' onClick={submitHandler}  >SUBMIT</Button>
                            </div>
                            : <div >
                                <h6>COMMENT:</h6>
                                <p>{`${props.singleMovie.comment}`}</p>
                                
                            </div>}
                    </Card.Text>
                </Card.ImgOverlay>

            </Card>
            <div className="underbutton">
                <Button className='unbt' onClick={()=>handleDelete(props.singleMovie.id)}  >Delete</Button> <Button className='unbt' onClick={updatehandler} >Update</Button>
            </div>






        </div>




    )
    
    
    
}

