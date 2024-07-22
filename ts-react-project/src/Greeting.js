"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// Composant fonctionnel avec des props typées
const Greeting = ({ name }) => {
    return <div>Bonjour, {name}!</div>;
};
exports.default = Greeting;
