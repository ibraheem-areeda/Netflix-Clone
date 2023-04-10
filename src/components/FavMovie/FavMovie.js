import Card from 'react-bootstrap/Card'
import './FavMovie.css';
import Button from "react-bootstrap/Button"
import { useState } from 'react';



export default function FavMovie(props) {

    
    const [isActive, setIsActive] = useState(false);
  
    const updatehandler = () => {
      setIsActive(!isActive);
    }

  

    


   




    console.log(props.singleMovie);
    return (
        <div className='alldiv'>
         
            <Card className="movieCard" >
            <Card.Img src={`https://image.tmdb.org/t/p/w185${props.singleMovie.poster_path}`} alt={props.singleMovie.title} />
                
                <Card.ImgOverlay className={isActive ? 'updatecss' : "overlayfav"}>
                    <Card.Title >{`${props.singleMovie.title}`}</Card.Title>
                    <Card.Text  >
                        <p>MY COMMENT:</p>
                        <p>{`${props.singleMovie.comment}`}</p>
                    </Card.Text>
                </Card.ImgOverlay>
                
            </Card>
            <div className="underbutton">
            <Button className='unbt'  >Delete</Button> <Button className='unbt' onClick={updatehandler} >Update</Button>
            </div>

        




        </div>

       


    )







}