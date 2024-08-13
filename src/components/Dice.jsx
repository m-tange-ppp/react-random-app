import { useState } from "react";

function Dice(props) {
    const [roll, setRoll] = useState(1);

    function randomOneToSix() {
        setRoll(Math.floor(Math.random() * 6 + 1));
    }

    function displayRoll(roll) {
        switch (roll) {
            case 1:
                return <p>1</p>
            case 2:
                return <p>2</p>
            case 3:
                return <p>3</p>
            case 4:
                return <p>4</p>
            case 5:
                return <p>5</p>
            case 6:
                return <p>6</p>
            default:
                return <p></p>
        }
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="flex justify-center items-center w-60 h-60 border-solid border-black border-4 p-8">
                </div>
                {displayRoll()}
            </div>
            <div>
                <button onClick={randomOneToSix}>
                    ダイスロール！！
                </button>
            </div>
        </div>
    );
}

export default Dice;