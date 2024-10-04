import { createRoot } from "react-dom/client";
import App from "./app";
import "./allstyle.css"

const myRoot = createRoot(document.getElementById('root'));
myRoot.render(<App />)