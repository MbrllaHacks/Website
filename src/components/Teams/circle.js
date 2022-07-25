import '../../style.css';


function Circle(props) {
  return (
        <div class="umbrella" onclick="">
            <img src={props.image} id="pfp" className="img"></img>
            <p className='org-name' >{props.name} </p>
            <input id='panel' type='checkbox' />
            <label class='panel' for='panel'></label>
            <div class="stick"></div>
        </div>
        
  );
}

export default Circle;


