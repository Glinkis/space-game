import * as PIXI from "pixi.js"
import "./styles.css"

const app = new PIXI.Application({
  resizeTo: window,
})

document.body.appendChild(app.view)
