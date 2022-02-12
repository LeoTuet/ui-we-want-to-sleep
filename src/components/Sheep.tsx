import Sketch from "react-p5";
import p5Types from "p5"; //Typen von p5

import sheep from "../assets/sheep.png";
import { useState } from "react";

const baseGRAV = 3;
const imageHeight = 130;
const imageWidth = 198;

export const Sheep = ({ className }: { className?: string }) => {
  const [image, setImage] = useState<p5Types.Image | undefined>(undefined);

  let xPos = 200;
  let yPos = 0;
  let speed = 0;
  let gravity = baseGRAV;

  let mouseOffsetX = 0;
  let mouseOffsetY = 0;

  let containerHeight: number = 0;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    containerHeight = p5.windowHeight * 0.92;
    p5.createCanvas(p5.windowWidth, containerHeight).parent(canvasParentRef);
    p5.loadImage(sheep, (img) => {
      setImage(img);
    });
    yPos = containerHeight - imageHeight;
  };

  let orientation: "LEFT" | "RIGHT";

  const draw = (p5: p5Types) => {
    containerHeight = p5.windowHeight * 0.92;
    p5.background(p5.color("#100522"));

    if (xPos < -imageWidth) {
      xPos = p5.windowWidth; // To jump back to the right
    } else if (xPos > p5.windowWidth) {
      xPos = -imageWidth; // To jump back to the left
    }

    if (p5.keyIsDown(p5.RIGHT_ARROW)) {
      // To move right
      xPos += 10;
      orientation = "RIGHT";
    } else if (p5.keyIsDown(p5.LEFT_ARROW)) {
      // To move left
      xPos -= 10;
      orientation = "LEFT";
    }

    if (orientation == "RIGHT") {
      // Change image based on orientation
      if (image) {
        p5.image(image, xPos, yPos, imageWidth, imageHeight);
      }
    } else {
      if (image) {
        p5.image(image, xPos, yPos, imageWidth, imageHeight);
      }
    }

    yPos = yPos + speed;
    speed = speed + gravity;

    if (yPos > containerHeight - imageHeight) {
      speed = 0;
      gravity = 0;
      yPos = containerHeight - imageHeight;
    } else if (yPos < containerHeight - imageHeight - 150) {
      gravity = baseGRAV;
    }
  };

  /* Setup Methode */
  const mouseClicked = (p5: p5Types) => {
    console.log(p5.mouseX, p5.mouseY);

    if (
      p5.mouseX > xPos &&
      p5.mouseX < xPos + imageWidth &&
      p5.mouseY > yPos &&
      p5.mouseY < yPos + imageHeight
    ) {
      speed = -35 * (yPos / containerHeight);
      gravity = baseGRAV;
    }
  };

  const windowResized = (p5: p5Types) => {
    containerHeight = p5.windowHeight * 0.92;
    p5.resizeCanvas(p5.windowWidth, containerHeight);
    if (p5.windowWidth < xPos + imageWidth) {
      const newPos = p5.windowWidth - imageWidth;
      if (newPos > 0) {
        xPos = newPos;
      }
    }
  };

  const keyPressed = (p5: p5Types) => {
    if (p5.keyIsDown(p5.UP_ARROW)) {
      speed = -50 * (yPos / containerHeight);
      gravity = baseGRAV;
    }
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      mouseClicked={mouseClicked}
      windowResized={windowResized}
      keyPressed={keyPressed}
      className={className}
    />
  );
};
