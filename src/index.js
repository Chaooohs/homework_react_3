import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// ReactDOM.render(<App />, document.querySelector(".one"));

const root = ReactDOM.createRoot(document.querySelector(".one"))
root.render(<App />)