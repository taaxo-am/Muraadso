import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Return from "./pages/information/Return";
import Payment from "./pages/information/Payment";

function App() {
    return (
        <Router>
            <Payment />
        </Router>
    );
}

export default App;

