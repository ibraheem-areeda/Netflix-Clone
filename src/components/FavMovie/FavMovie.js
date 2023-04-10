import { useState , useEffect} from 'react';
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

        console.log(8888,response);
        
        if(response.status === 204){
            FavMovie();
            alert("successfully deleted !!")
            
        }
    }



     



    useEffect(()=>{
        FavMovie();

        // console.log(favRecipes)

    },[])

    
    return (
        <div className='alldiv'>

            <Card className="movieCard" >
                <Card.Img src={`https://image.tmdb.org/t/p/w185${props.singleMovie.poster_path}`} alt={props.singleMovie.title} />

                <Card.ImgOverlay className={isActive ? 'updatecss' : "overlayfav"}>
                    <Card.Title >{`${props.singleMovie.title}`}</Card.Title>
                    <Card.Text  >
                        
                        {isActive ?
                            <div ><h6>COMMENT:</h6>
                                <textarea className='textarea'>{props.singleMovie.comment}</textarea>
                                <Button className='unbt'   >SUBMIT</Button>
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