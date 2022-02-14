import { useState } from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Typen von p5

import sheep from "../assets/sheep.png";

const imageHeight = 130;
const imageWidth = 198;

export const Sheep = ({
  className,
  size: { width, height },
}: {
  className?: string;
  size: {
    width: number;
    height: number;
  };
}) => {
  const [image, setImage] = useState<p5Types.Image | null>(null);
  const [lastSize, setLastSize] = useState({ width: 0, height: 0 });

  let xPos = 200;
  let yJumpOffset = 0;
  let speed = 0;
  let gravity = 3;
  let orientation: "LEFT" | "RIGHT" = "RIGHT";

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.loadImage(sheep, (img) => {
      setImage(img);
    });
  };

  const draw = (p5: p5Types) => {
    if (lastSize.height !== height || lastSize.width !== width) {
      setLastSize({ width, height });
      p5.resizeCanvas(width, height);
      if (width < xPos + imageWidth) {
        const newPos = width - imageWidth;
        if (newPos > 0) {
          xPos = newPos;
        }
      }
    }

    p5.translate(0, -imageHeight);

    p5.background(p5.color("#100522"));

    if (xPos < -imageWidth) {
      xPos = width; // To jump back to the right
    } else if (xPos > width) {
      xPos = -imageWidth; // To jump back to the left
    }

    if (p5.keyIsDown(p5.RIGHT_ARROW) || (p5.key === "d" && p5.keyIsDown)) {
      xPos += 10;
      orientation = "RIGHT";
    } else if (
      p5.keyIsDown(p5.LEFT_ARROW) ||
      (p5.key === "a" && p5.keyIsDown)
    ) {
      xPos -= 10;
      orientation = "LEFT";
    }

    if (speed !== 0) {
      if (yJumpOffset + speed + gravity <= 0) {
        speed += gravity;
        yJumpOffset += speed;
      } else {
        yJumpOffset = 0;
        speed = 0;
      }
    }

    if (image) {
      p5.translate(xPos, 0);

      if (orientation === "RIGHT") {
        // rotates the sheep image
        p5.scale(-1, 1);
      }

      p5.image(
        image,
        -imageWidth / 2,
        height + yJumpOffset,
        imageWidth,
        imageHeight
      );
    }
  };

  /* Setup Methode */
  const mouseClicked = (p5: p5Types) => {
    if (
      p5.mouseX > xPos &&
      p5.mouseX < xPos + imageWidth &&
      p5.mouseY > height + yJumpOffset - imageHeight &&
      p5.mouseY < height + yJumpOffset
    ) {
      speed = -35;
    }
  };

  const keyPressed = (p5: p5Types) => {
    if (p5.keyIsDown(p5.UP_ARROW) || p5.key === "w") {
      speed = -40;
    }
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      mouseClicked={mouseClicked}
      keyPressed={keyPressed}
      className={className}
    />
  );
};
