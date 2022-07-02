import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
    const [buttonColor, setButtonColor] = useState("red");
    const [disabled, setDisabled] = useState(false);
    const newButtonColor = buttonColor === "red" ? "blue" : "red";

    return (
        <div>
            <button
                onClick={() => setButtonColor(newButtonColor)}
                style={{ backgroundColor: disabled ? "gray" : buttonColor }}
                disabled={disabled}
            >
                Change to {newButtonColor}
            </button>
            <br />
            <input
                type="checkbox"
                id="disabled-button-checkbox"
                defaultChecked={disabled}
                aria-checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
            />
            <label htmlFor="disabled-button-checkbox"> Disabled button </label>
        </div>
    );
}

export default App;
