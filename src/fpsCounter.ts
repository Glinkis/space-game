import { Application, Text, TextStyle } from "pixi.js"

export function addFpsCounter(app: Application) {
  const textStyle = new TextStyle({
    fontFamily: "Calibri",
    fontSize: 18,
    fill: "white",
    strokeThickness: 4,
  })

  const counter = new Text("", textStyle)

  app.ticker.add(() => {
    counter.text = `FPS: ${Math.round(app.ticker.FPS)}`
    counter.position.x = app.view.width - counter.width
  })

  app.stage.addChild(counter)
}
