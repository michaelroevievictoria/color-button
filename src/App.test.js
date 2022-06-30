import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
    render(<App />);
    // find an element with a role of button and text of 'Change to blue'
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });

    //click button
    fireEvent.click(colorButton);

    //expect the background color to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

    //expect the button text to be 'Change to red'
    expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
    render(<App />);

    // check that the button starts out enabled
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    expect(colorButton).toBeEnabled();
    // check that the checkbox starts out unchecked

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
});

test("Checkbox disabled button on the first click and enabled on second click", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    const checkbox = screen.getByRole("checkbox", { name: "Disabled button" });

    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(colorButton);
    expect(checkbox).toBeEnabled();
});

test("Disabled button has gray background and reverts to red", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: "Disabled button" });
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    //disabled button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

    //re-ebable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("Clicked disabled button has gray background and reverts to blue", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: "Disabled button" });
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    // change button to blue
    fireEvent.click(colorButton);

    //disable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

    //re-ebable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

// test('button has correct initial text', () => {

// });

// test("button turns blue when clicked", () => {
//   render(<App />);
//   // find an element with a role of button and text of 'Change to blue'
//   const colorButton = screen.getByRole("button", { name: "Change to blue" });
//   expect(colorButton).toHaveStyle({ backgroundColor: "red" });
// });
