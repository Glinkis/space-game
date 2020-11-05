import * as PIXI from "pixi.js"
import { Viewport } from "pixi-viewport"
import { addFpsCounter } from "./fpsCounter"
import "./styles.css"

export const app = new PIXI.Application({
  resizeTo: window,
})
document.body.appendChild(app.view)
addFpsCounter(app)

const viewport = new Viewport()
app.stage.addChild(viewport)

viewport.drag().pinch().wheel().decelerate({ friction: 0.7 })
