import * as PIXI from "pixi.js"
import { Viewport } from "pixi-viewport"
import "./styles.css"

const app = new PIXI.Application({
  resizeTo: window,
})
document.body.appendChild(app.view)

const viewport = new Viewport()
app.stage.addChild(viewport)

viewport.drag().pinch().wheel().decelerate({ friction: 0.7 })

const textStyle = new PIXI.TextStyle({
  fontFamily: "Arial",
  fontSize: 64,
  fill: "white",
  strokeThickness: 4,
})

const message = new PIXI.Text("Hey!", textStyle)

app.ticker.add(() => {
  message.text = app.ticker.lastTime.toFixed(0)
})

viewport.addChild(message)
