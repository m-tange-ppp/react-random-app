import Title from "./components/Title";
import Dice from "./components/Dice";

function App() {
    return (
        <div>
            <Title
                title={"Dice Roll"}
            />
            <Dice />
        </div>
    );
}

export default App;