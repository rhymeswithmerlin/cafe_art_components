import React from "react";
import { TextInput, EspressoMachine } from "../lib";
import "./App.scss";

const App = () => (
    <div>
    <header>

        <h1>Cafe Component Library</h1>
    </header>
    <main>
        <ul>
            <li className="component-container">
                <h2>TextInput</h2>
                <code>Usage: &lt;TextInput&gt;&lt;/TextInput&gt;</code>

                <TextInput label="Email Address" placeholder="name@example.com" />
            </li>
            <li className="component-container">
                <h2>Espresso Machines</h2>
                <code>Usage: &lt;EspressoMachine&gt;&lt;/EspressoMachine&gt;</code>
                <div className="component-wrapper">  
                <EspressoMachine color="#3dcd59"></EspressoMachine>
                <EspressoMachine color="teal" size="400px"></EspressoMachine>

                </div> 
            </li>

        </ul>
    </main>
    </div>
)

export default App;