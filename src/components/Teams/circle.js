import '../../style.css';

function Circle(props) {
  return (
        <div class="umbrella">
            <img src={props.image} id="pfp" className="img"></img>
            <input id='panel' type='checkbox' />
            <label class='panel' for='panel'></label>
            <div class="stick"></div>
        </div>
        
  );
}

export default Circle;


