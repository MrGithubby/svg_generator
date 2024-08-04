# SVG Shape Generator

## Description

This Node.js application allows users to create SVG files with customizable shapes (Circle, Triangle, Square) and text. Users can specify the shape, shape color, text, and text color through a command-line interface. The application generates an SVG file based on the user's input.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Examples](#examples)
- [License](#license)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/svg-shape-generator.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd svg-shape-generator
    ```

3. **Install the necessary dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Run the application:**

    ```bash
    node index.js
    ```

2. **Follow the prompts to create your SVG:**

    - Enter a name for the SVG file.
    - Specify the text (up to three characters) to display on the shape.
    - Choose a color for the shape (can be a color name or a hexadecimal value).
    - Choose a color for the text.
    - Select the shape (Circle, Triangle, Square).

3. **View the generated SVG file:**

    The SVG file will be saved in the `./examples/` directory with the name you provided, formatted in lowercase without spaces.

## Features

- **Customizable Shapes**: Choose between Circle, Triangle, and Square shapes.
- **Color Options**: Enter any valid CSS color or hexadecimal code for both the shape and text colors.
- **Text Display**: Display up to three characters of text centered on the shape.
- **Automated File Generation**: The application automatically generates an SVG file based on your input.

## Examples

Here’s an example of what the generated SVG file might look like:

- **Input:**
    - Name: `MyShape`
    - Text: `SVG`
    - Shape: `Circle`
    - Shape Color: `#3498db`
    - Text Color: `#ffffff`

- **Output:**
    - A file named `myshape.svg` will be generated in the `./examples/` directory.

## License

This project is licensed under the MIT License.

---

### Additional Notes

- **Dependencies:**
  - `inquirer`: For interactive command-line prompts.
  - `colors` and `chalk`: For styling console output (though it appears only one might be needed).
  - `fs`: Node's built-in file system module for writing files.
  
- **Editing the README:**
  - Replace placeholder text like `your-username` with your actual GitHub username.
  - Include any additional information that might be relevant, such as contributing guidelines, advanced configuration options, or more detailed examples.