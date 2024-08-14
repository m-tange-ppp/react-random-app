import { useEffect, useState } from "react";
import Roll from "./Roll";

function Dice() {
    const [result, setResult] = useState(1);
    const [isRolling, setIsRolling] = useState(false);

    function displayRoll(result) {
        switch (result) {
            case 1:
                return <div className="w-20 h-20 bg-red-500 rounded-full"></div>
            case 2:
                return <div className="grid grid-cols-3 grid-rows-3 gap-2 ">
                    <div className="col-start-1 row-start-1 w-16 h-16 bg-black rounded-full"></div>
                    <div className="col-start-3 row-start-3 w-16 h-16 bg-black rounded-full"></div>
                </div>
            case 3:
                return <div className="grid grid-cols-3 grid-rows-3 gap-2 ">
                    <div className="col-start-1 row-start-1 w-16 h-16 bg-black rounded-full"></div>
                    <div className="col-start-2 row-start-2 w-16 h-16 bg-black rounded-full"></div>
                    <div className="col-start-3 row-start-3 w-16 h-16 bg-black rounded-full"></div>
                </div>
            case 4:
                return <div className="grid grid-cols-3 grid-rows-3 gap-2 ">
                    <div className="col-start-1 row-start-1 w-16 h-16 bg-black rounded-full"></div>
                    <div className="col-start-1 row-start-3 w-16 h-16 bg-black rounded-full"></div>
                    <div className="col-start-3 row-start-1 w-16 h-16 bg-black rounded-full"></div>
                    <div className="col-start-3 row-start-3 w-16 h-16 bg-black rounded-full"></div>
                </div>
            case 5:
                return <div className="grid grid-cols-3 grid-rows-3 gap-2 ">
                    <div className="col-start-1 row-start-1 w-16 h-16 bg-black rounded-full"></div>
                    <div className="col-start-1 row-start-3 w-16 h-16 bg-black rounded-full"></div>
                    <div className="col-start-2 row-start-2 w-16 h-16 bg-black rounded-full"></div>
                    <div className="col-start-3 row-start-1 w-16 h-16 bg-black rounded-full"></div>
                    <div className="col-start-3 row-start-3 w-16 h-16 bg-black rounded-full"></div>
                </div>
            case 6:
                return <div className="grid grid-cols-3 grid-rows-3 gap-2 ">
                    <div className="col-start-1 row-start-1 w-16 h-16 bg-black rounded-full"></div>
                    <div className="col-start-1 row-start-2 w-16 h-16 bg-black rounded-full"></div>
                    <div className="col-start-1 row-start-3 w-16 h-16 bg-black rounded-full"></div>
                    <div className="col-start-3 row-start-1 w-16 h-16 bg-black rounded-full"></div>
                    <div className="col-start-3 row-start-2 w-16 h-16 bg-black rounded-full"></div>
                    <div className="col-start-3 row-start-3 w-16 h-16 bg-black rounded-full"></div>
                </div>
            default:
                return <p></p>
        }
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="flex justify-center items-center w-64 h-64 border-solid border-neutral-500 border-4 rounded-3xl box-content">
                    {displayRoll(result)}
                </div>
            </div>
            <div className="text-center m-4">
                {isRolling ?
                    <Roll
                        setResult={setResult}
                        isRolling={isRolling}
                        setIsRolling={setIsRolling}
                    /> :
                    <button onClick={() => setIsRolling(true)}
                        className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95 w-40">ダイスロール！！</button>}
            </div>
        </div>
    );
}

export default Dice;