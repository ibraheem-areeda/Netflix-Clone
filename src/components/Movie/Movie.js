import Card from 'react-bootstrap/Card'
import './Movie.css';
import ModalMovie from '../ModalMovie/ModalMovie'
import Button from "react-bootstrap/Button"
import  {useState} from 'react';


export default function Movie(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(props.singleMovie);
    return (
        <>
         
            <Card className="movieCard" >
                <Card.Img src={`https://image.tmdb.org/t/p/w185${props.singleMovie.poster_path}`} alt={props.singleMovie.title} />
                <Card.ImgOverlay className='overlay'>
                    <Card.Title >{`${props.singleMovie.title}`}</Card.Title>
                    <Card.Text  >
                        <p>Add to Favorites</p>
                        <Button  onClick={handleShow}>Favorites</Button>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>


            <ModalMovie show={show} handleClose={handleClose} singleMovie={props.singleMovie}/>




        </>

       


    )







}