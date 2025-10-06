import "../../styles/exercise/HazePolish.css"

function HazePolish({ descr, index }){
    return(
        <div className="haze-ctn">
            <div className="sign-svg">
                <div className="number">
                    {index}
                </div>
            </div>

            <div className="haze-in">
                <div className="haze-title">
                    POLSKI TEKST
                </div>

                <div className="haze-descr">
                    {descr}
                </div>
                
            </div>



        </div>
    )
};

export default HazePolish;