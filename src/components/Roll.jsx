import { useEffect } from "react";

function Roll(props) {
    useEffect(() => {
        const interval = setInterval(() => {
            props.setResults(Array.from({ length: props.results.length }, () => Math.floor(Math.random() * 6 + 1)));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <button onClick={() => props.setIsRolling(false)}
            className="inline-flex h-12 items-center justify-center rounded-md bg-red-500 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95 w-44">ストップ！！
        </button>
    );
}

export default Roll;