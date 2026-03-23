function Star({className}) {

    return (
        <span className={`star ${className || ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 71">
                <path fill="#FFFFFF" d="m35.791 0 3.711 24.902L65.088 4.688l.781.83-20.166 25.586 24.903 3.71v1.075l-24.708 3.808L65.87 65.186l-.781.83L39.698 45.8l-3.81 24.805h-1.122L31.104 45.8 5.37 66.016l-.684-.83 20.118-25.684L0 35.791v-.976l24.56-3.81L4.689 5.519l.683-.83 25.537 20.117L34.668 0z"></path>
            </svg>
        </span>
    );
}

export default Star;

