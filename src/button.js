function Button() {
    // define the handleClick function here
    const handleClick = () => {
        console.log("Button clicked!");
    };

    return (
        <button onClick={handleClick}>
            click me
        </button>
    );

}

function practice() {
    const handleDivClick = () => {
        console.log("Div clicked!");
      };
    
      const handleButtonClick = (e) => {
        e.stopPropagation(); // This stops the click event from propagating to the div
        console.log("Button clicked!");
      };
    
      return (
        <div onClick = {handleDivClick}>
          <button onClick={handleButtonClick}>Click Me</button>
        </div>
      );
}

export default Button;