import "../Styles/Button.css"

function Button(props) {
  return (
    <div className="btn">
      <p>{props.buttonName}</p>
    </div>
  );
}

export default Button;