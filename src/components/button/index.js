function Button({ text, color }) {
  
  function onButtonClick() {
    alert('x')
  }

  return (
    <button className="my-button" onClick={() => onButtonClick()} style={{ backgroundColor: color }}>
      {text}
    </button>
  )
}

export default Button;