function Playbutton() {

    function clickButton() {
        console.log('play');
    }
    return (
        <>
            <button className="play-btn" onClick={clickButton}>play</button>
        </>
    )
}


export default Playbutton;