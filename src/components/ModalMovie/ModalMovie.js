import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../ModalMovie/ModalMovie.css'
import  {useState} from 'react';


export default function ModalMovie(props) {
    const [short, setshort] = useState(true);

    
    const handleshort = () => setshort(!short);


   
  
    return (
      <>
       
  
        <Modal className='modal' show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='modalTitle'><h3 >{props.singleMovie.title}</h3></Modal.Title>
          </Modal.Header>
          <Modal.Body className='body'>
          <img className='imgeModal' src={`https://image.tmdb.org/t/p/w185${props.singleMovie.poster_path}`} alt='movie' />
          <div id='modalText'>
            <div className='seeMore'>
          <p className='ptag'>{short?props.singleMovie.overview.substring(0, 99)+" ...":props.singleMovie.overview}</p>
          <button className='button' onClick={handleshort}>{short?<p>see more</p>:<p>see less</p>}</button>
          </div>
          <textarea className='textarea' rows={5} placeholder='write your comment here ...'></textarea>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.handleClose}>
            add to the favorite
            </Button>
          </Modal.Footer>
        </Modal>
      </>


    );
  }
  



