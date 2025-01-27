// pages/api/encode.js
import { createCanvas } from "canvas";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { sub_txid: txid } = req.body;
      const txidArray = txid.match(/.{1,6}/g) || [];
      const width = 550;
      const height = 550;

      const canvas = createCanvas(width, height);
      const context = canvas.getContext("2d");

      let endAngle = 0;
      let converted = 2.18; // initial value

      txidArray.forEach((colour, i) => {
        const x = width / 2;
        const y = height / 2;
        const startAngle = endAngle;
        
        endAngle = startAngle + Math.round((converted / (i + 1)) * Math.PI);
        if (endAngle <= startAngle) {
          endAngle = Math.round(startAngle - 10);
        }

        const drawWidth = 50;
        const radius = Math.round((width / 2.5) - (i * 18));

        context.fillStyle = "#" + colour;
        context.strokeStyle = "#" + colour;
        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle, false);
        context.lineWidth = drawWidth;
        context.stroke();

        if (isNaN(colour.substring(5))) {
          converted = colour.substring(5).charCodeAt(0) - 96;
        } else {
          converted = parseInt(colour.substring(5));
        }
      });

      const base64Img = canvas.toDataURL("image/png").replace(/^data:image\/(png|jpg);base64,/, "");

      res.status(200).json({ txid, txidArray, base64Img });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
