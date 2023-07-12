


const Button = ({ toggleLogIn }) => {

    const handleClick = () => {
        toggleLogIn();
    }

    return (
        
    <button onClick={handleClick}>press me!</button>
        
    )
}

export default Button