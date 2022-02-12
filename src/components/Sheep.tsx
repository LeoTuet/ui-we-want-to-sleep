import Sketch from "react-p5";
import p5Types from "p5"; //Typen von p5

import sheep from "../assets/sheep.png";
import { useState } from "react";

const baseGRAV = 3;
const imageHeight = 130;
const imageWidth = 198;

export const Sheep = ({
  className,
  height,
}: {
  className?: string;
  height: number;
}) => {
  const [image, setImage] = useState<p5Types.Image | undefined>(undefined);

  let xPos = 200;
  let yJumpOffset = 0;
  let speed = 0;
  let gravity = baseGRAV;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, height).parent(canvasParentRef);
    p5.loadImage(sheep, (img) => {
      setImage(img);
    });
  };

  let orientation: "LEFT" | "RIGHT";

  const draw = (p5: p5Types) => {
    p5.translate(0, -imageHeight);

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

    if (image) {
      p5.image(image, xPos, height + yJumpOffset, imageWidth, imageHeight);
    }

    yJumpOffset = yJumpOffset + speed;
    speed = speed + gravity;

    if (yJumpOffset > 0) {
      speed = 0;
      gravity = 0;
      yJumpOffset = 0;
    } else if (yJumpOffset > -150) {
      gravity = baseGRAV;
    }
  };

  /* Setup Methode */
  const mouseClicked = (p5: p5Types) => {
    console.log(height, yJumpOffset, p5.mouseY);

    if (
      p5.mouseX > xPos &&
      p5.mouseX < xPos + imageWidth &&
      p5.mouseY > height + yJumpOffset - imageHeight &&
      p5.mouseY < height + yJumpOffset
    ) {
      speed = -35;
      gravity = baseGRAV;
    }
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, height);
    if (p5.windowWidth < xPos + imageWidth) {
      const newPos = p5.windowWidth - imageWidth;
      if (newPos > 0) {
        xPos = newPos;
      }
    }
  };

  const keyPressed = (p5: p5Types) => {
    if (p5.keyIsDown(p5.UP_ARROW) || p5.key === "w") {
      speed = -40;
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
