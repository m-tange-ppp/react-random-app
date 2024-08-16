import Title from "./Title";
import Dice from "./Dice";
import Roll from "./Roll";
import { useState } from "react";

function Box() {
    const [isRolling, setIsRolling] = useState(false);
    const [results, setResults] = useState([1]);

    function addDice() {
        if (!isRolling) {
            setResults([...results, 1]);
        }
    }

    function removeDice() {
        if (!isRolling) {
            setResults(results.slice(0, -1));
        }
    }

    return (
        <div>
            <Title
                title={"Dice Roll"}
            />

            <div className="flex flex-wrap justify-center items-start gap-[2.5%]">
                {results.map((_, index) =>
                    <div key={index}
                        className="w-[30%] mb-[2.5%] max-w-60 aspect-square last:mb-20"
                    >
                        <Dice
                            isRolling={isRolling}
                            setIsRolling={setIsRolling}
                            results={results}
                            index={index}
                        />
                    </div>
                )}
            </div>

            <div className="flex justify-center fixed bottom-4 w-full opacity-80">
                <div className="text-center">
                    <button onClick={removeDice}
                        className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95">-</button>
                </div>
                <div className="text-center mx-4">
                    {isRolling ?
                        <Roll
                            isRolling={isRolling}
                            setIsRolling={setIsRolling}
                            results={results}
                            setResults={setResults}
                        /> :
                        <button onClick={() => setIsRolling(true)}
                            className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95">ダイスロール！！</button>}
                </div>
                <div className="text-center">
                    <button onClick={addDice}
                        className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95">+</button>
                </div>
            </div >
        </div>

    );
}

export default Box;