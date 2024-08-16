
function DisplayResult(props) {
    const ROLLS = [1, 2, 3, 4, 5, 6];

    const countResult = ROLLS.map(roll => (
        props.results.filter(result => result === roll).length
    ));

    return (
        <ul className="flex justify-around flex-wrap">
            {countResult.map((count, result) => (
                <li key={result + 1}
                    className="bg-black text-white h-8 flex justify-center items-center rounded-md w-1/3"><span className="font-bold">{result + 1}</span> : {count}個 </li>
            ))}
        </ul>
    );
}

export default DisplayResult;