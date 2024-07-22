"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Greeting_1 = __importDefault(require("./Greeting"));
const Counter_1 = __importDefault(require("./Counter"));
// Point d'entrée de l'application
react_dom_1.default.render(<react_1.default.StrictMode>
    <Greeting_1.default name="John Doe"/>
    <Counter_1.default />
  </react_1.default.StrictMode>, document.getElementById('root'));
