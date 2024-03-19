import { Button } from "@/components/ui/button";
import { useState } from "react";

function RandomColor() {
  const [typeOfColor, settypeOfColor] = useState("hex");
  const [color, setcolor] = useState("#2123da");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setcolor(hexColor);
  }

  function handleCreateRandomRgbColor() { 
    const r = randomColorUtility(250)
    const g = randomColorUtility(250)
    const b = randomColorUtility(250)

    setcolor(`rgb(${r},${g},${b})`)
  }

  return (
    <div
      className={`container flex flex-1 flex-col items-center justify-start gap-8 my-10 w-full h-screen`}
      style={{ background: color }}
    >
      <Button onClick={() => settypeOfColor("hex")} variant="secondary">
        Create HEX Color
      </Button>
      <Button onClick={() => settypeOfColor("rgb")} variant="secondary">
        Create RGB Color
      </Button>
      <Button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
        variant="secondary"
      >
        Generate Random Color
      </Button>
      <div className="flex justify-center items-center mix-blend-multiply dark:mix-blend-exclusion mt-[50px]">
        <h1 className="text-8xl font-micro">{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
