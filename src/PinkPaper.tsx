import { useEffect, useRef } from "react";
import { Texture } from "three";

export const PinkPaper = () => {
  const textureRef = useRef<Texture>(null);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    return null;
  }

  // Set canvas dimensions
  canvas.width = 768;
  canvas.height = 938;

  // Fill the canvas with the base color
  context.fillStyle = "pink"; // Light pink background color
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw primary the lines
  context.beginPath();
  for (let i = 2; i < canvas.height; i += 60) {
    context.moveTo(0, i);
    context.lineTo(canvas.width, i);
  }

  context.lineWidth = 2; // Line thickness
  context.strokeStyle = "#00B9ED"; // Line color
  context.stroke();

  // Draw secondary the lines
  context.beginPath();
  for (let i = 0; i < canvas.height; i += 60) {
    // Change 20 to the desired line spacing
    context.moveTo(0, i);
    context.lineTo(canvas.width, i);
  }
  context.lineWidth = 2; // Line thickness
  context.strokeStyle = "#BFD3EC"; // Line color
  context.stroke();

  const texture = new Texture(canvas);
  texture.needsUpdate = true; // Important to update the texture

  useEffect(() => {
    if (textureRef.current) {
      textureRef.current.image = canvas;
      textureRef.current.needsUpdate = true;
    }
  }, []);

  return <texture ref={textureRef} attach="background" />;
};
