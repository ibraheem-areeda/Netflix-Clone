import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../ModalMovie/ModalMovie.css'
import  {useState , useRef } from 'react';


export default function ModalMovie(props) {
    const [short, setshort] = useState(true);

    

    
    const handleshort = () => setshort(!short);
    

    const commentRef = useRef();

    function submitHandler(e){
      
      let comment = commentRef.current.value;
  
      console.log("user comment is : ",comment);
  
      let newMovie={...props.singleMovie, comment}
      console.log(newMovie);
      
      // props.commentHandler(newMovie);
      
        
        addToFavHandler(newMovie);
    
    }


    async function addToFavHandler(newMovie){
      
    
      let url ="https://movies-p3rs.onrender.com/addmovie";
      
      let data={
        title: newMovie.title,
        release_date: newMovie.release_date,
        poster_path : newMovie.poster_path,
        comment : newMovie.comment
      }
     
    
      const response = await fetch (url,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    
      const receivedData = await response.json();
      console.log(1111,receivedData)
    
      if (response.status ===201){
        alert("successfully added to database")
      }
    }


   
  
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
          <textarea className='textarea' ref={commentRef} rows={5} placeholder='write your comment here ...'></textarea>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={submitHandler} >
            add to the favorite
            </Button>
          </Modal.Footer>
        </Modal>
      </>


    )
  }
  

