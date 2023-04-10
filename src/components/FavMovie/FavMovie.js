import Card from 'react-bootstrap/Card'
import './FavMovie.css';
import Button from "react-bootstrap/Button"



export default function FavMovie(props) {

    

    function updatehandler() {
       
    //     $(Card.ImgOverlay).removeClass('selected');
    // $(this).addClass('selected');

    }
    

    







    console.log(props.singleMovie);
    return (
        <div className='alldiv'>
         
            <Card className="movieCard" >
            <Card.Img src={`https://image.tmdb.org/t/p/w185${props.singleMovie.poster_path}`} alt={props.singleMovie.title} />
                
                <Card.ImgOverlay className='overlayfav'>
                    <Card.Title >{`${props.singleMovie.title}`}</Card.Title>
                    <Card.Text  >
                        <p>MY COMMENT:</p>
                        <p>{`${props.singleMovie.comment}`}</p>
                    </Card.Text>
                </Card.ImgOverlay>
                
            </Card>
            <div className="underbutton">
            <Button className='unbt'  >Delete</Button> <Button className='unbt target' onClick={updatehandler} >Update</Button>
            </div>

        




        </div>

       


    )







}