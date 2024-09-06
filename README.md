# Context API Mini Project

This is a mini project demonstrating the use of Context API in a React application.

## Features

* Uses Context API for state management
* Built with React and JavaScript
* Styled with Tailwind CSS
* Includes a basic layout with Header, Body, and Footer components

## Getting Started

1. Clone the repository: `git clone https://github.com/parthgupta49/ContextAPI-MiniProject.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## File Structure

* `src/`: Source code for the application
	+ `Context/`: Context API implementation
	+ `components/`: Reusable React components
	+ `index.js`: Entry point for the application
	+ `index.css`: Global styles for the application
* `tailwind.config.js`: Configuration file for Tailwind CSS
* `.gitignore`: Files and directories to ignore in the Git repository
* `.npmrc`: npm configuration file
* `.postcssrc`: PostCSS configuration file

## Key Concepts

### 1. Context
A centralized store of data that can be accessed by any component in the application.

### 2. Provider
A component that provides the context values to all components.

### 3. Consumer
A component that accesses the context values using the `useContext` hook.

### 4. `useContext`
A hook that takes the context object as an argument and returns the context values.

### Implementation Details

#### `AppContext.js`
Here, we create the context using the `createContext()` function, which returns an object with two properties: `Provider` and `Consumer`. We define an `AppProvider` component that wraps the application and provides the context values to all components. The `AppProvider` component uses the `useState` hook to manage the state of the application, including `data`, `loading`, `totalPages`, and `currentPage`. It also defines a `fetchData` function to retrieve data from the API.

#### `index.js`
In this file, we wrap the entire application with the `AppProvider` component, making the context values available to all components.

#### `Body.js` and `Footer.js`
In these components, we use the `useContext` hook to access the context values provided by the `AppProvider` component. We retrieve the `fetchData`, `data`, `loading`, `currentPage`, and `totalPages` values from the context and use them to render the UI. The `useContext` hook allows us to access the context values and use them to fetch data, display loading indicators, and render pagination controls.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request.