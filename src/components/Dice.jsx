function Dice(props) {
    function displayRoll(result) {
        switch (result) {
            case 1:
                return <div className="w-1/3 h-1/3 bg-red-500 rounded-full"></div>;
            case 2:
                return (
                    <div className="grid grid-cols-3 grid-rows-3 gap-[5%] w-full h-full">
                        <div className="col-start-1 row-start-1 w-full h-full bg-black rounded-full"></div>
                        <div className="col-start-3 row-start-3 w-full h-full bg-black rounded-full"></div>
                    </div>
                );
            case 3:
                return (
                    <div className="grid grid-cols-3 grid-rows-3 gap-[5%] w-full h-full">
                        <div className="col-start-1 row-start-1 w-full h-full bg-black rounded-full"></div>
                        <div className="col-start-2 row-start-2 w-full h-full bg-black rounded-full"></div>
                        <div className="col-start-3 row-start-3 w-full h-full bg-black rounded-full"></div>
                    </div>
                );
            case 4:
                return (
                    <div className="grid grid-cols-3 grid-rows-3 gap-[5%] w-full h-full">
                        <div className="col-start-1 row-start-1 w-full h-full bg-black rounded-full"></div>
                        <div className="col-start-1 row-start-3 w-full h-full bg-black rounded-full"></div>
                        <div className="col-start-3 row-start-1 w-full h-full bg-black rounded-full"></div>
                        <div className="col-start-3 row-start-3 w-full h-full bg-black rounded-full"></div>
                    </div>
                );
            case 5:
                return (
                    <div className="grid grid-cols-3 grid-rows-3 gap-[5%] w-full h-full">
                        <div className="col-start-1 row-start-1 w-full h-full bg-black rounded-full"></div>
                        <div className="col-start-1 row-start-3 w-full h-full bg-black rounded-full"></div>
                        <div className="col-start-2 row-start-2 w-full h-full bg-black rounded-full"></div>
                        <div className="col-start-3 row-start-1 w-full h-full bg-black rounded-full"></div>
                        <div className="col-start-3 row-start-3 w-full h-full bg-black rounded-full"></div>
                    </div>
                );
            case 6:
                return (
                    <div className="grid grid-cols-3 grid-rows-3 gap-[5%] w-full h-full">
                        <div className="col-start-1 row-start-1 w-full h-full bg-black rounded-full"></div>
                        <div className="col-start-1 row-start-2 w-full h-full bg-black rounded-full"></div>
                        <div className="col-start-1 row-start-3 w-full h-full bg-black rounded-full"></div>
                        <div className="col-start-3 row-start-1 w-full h-full bg-black rounded-full"></div>
                        <div className="col-start-3 row-start-2 w-full h-full bg-black rounded-full"></div>
                        <div className="col-start-3 row-start-3 w-full h-full bg-black rounded-full"></div>
                    </div>
                );
            default:
                return <p></p>;
        }
    }

    return (
        <div className="flex justify-center items-center aspect-square border-solid border-neutral-500 border-4 rounded-[20%] p-[5%]">
            {displayRoll(props.results[props.index])}
        </div>
    );
}

export default Dice;
