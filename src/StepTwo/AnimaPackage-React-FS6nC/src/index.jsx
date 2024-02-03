import React from "react";
import ReactDOMClient from "react-dom/client";
import { Step } from "./screens/Step";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Step />);
