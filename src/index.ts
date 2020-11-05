import * as PIXI from "pixi.js"
import { Viewport } from "pixi-viewport"
import { SVG } from "pixi-svg"
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

function getHexagonPoints(radius: number) {
  const points = []

  for (var theta = 0; theta < Math.PI * 2; theta += Math.PI / 3) {
    const pointX = radius * Math.sin(theta)
    const pointY = radius * Math.cos(theta)

    points.push(`${pointX},${pointY}`)
  }

  return points.join(" ")
}

function* getHexagonGrid(cols: number, rows: number) {
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const radius = 100

      const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon")

      polygon.style.fill = "white"
      polygon.style.stroke = "pink"
      polygon.style.strokeWidth = "2px"
      polygon.setAttribute("points", getHexagonPoints(radius))

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svg.appendChild(polygon)
      const hexagon = new SVG(svg)

      const offset = (Math.sqrt(3) * radius) / 2

      hexagon.position.x = 40 + offset * col * 2
      hexagon.position.y = 40 + offset * row * Math.sqrt(3)

      if (row % 2 !== 0) {
        hexagon.position.x += offset
      }

      yield hexagon
    }
  }
}

for (const hexagon of getHexagonGrid(4, 4)) {
  hexagon.interactive = true
  hexagon.addListener("pointerover", () => {
    hexagon.tint = 0xffffcc
  })
  hexagon.addListener("pointerout", () => {
    hexagon.tint = 0xffffff
  })

  viewport.addChild(hexagon)
}
