import '../../style.css';


// Our magic to beautiful umbrella animation lies here 

function Circle(props) {
  return (
        <div class="umbrella" onMouseEnter={props.changeName}>
            <img src={props.image} alt="contributers" id="pfp" className="img" onMouseEnter={props.toggler} onMouseLeave={props.toggler}></img>
            <input id='panel' type='checkbox' />
            <label class='panel' for='panel'></label>
            <div class="stick"></div>
        </div>
        
  );
}

export default Circle;

