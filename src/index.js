import "./styles.css";
import { greeting } from "./greeting.js";
import odinImage from "./odin.jpg";

console.log(greeting)

const image = document.createElement("img");
image.src = odinImage

document.body.appendChild(image)