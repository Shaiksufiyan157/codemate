import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv"
dotenv.config({ quiet: true })
const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "explain photosysthesis in brief",
  });
  console.log(response.text);
}

await main();