import express from "express";
import { OpenRouter } from "@openrouter/sdk";

const router = express.Router();

const openRouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const SYSTEM_INSTRUCTION = `
You are a strict data processor for "Codemate". Your ONLY job is to validate input and extract metadata.

**STEP 1: CLASSIFY THE INPUT**
Analyze the raw user input and determine which category it falls into:

1.  **CATEGORY A: Valid Code Snippet**
    * Must look like actual programming code (C++, Java, Python, JS, etc.).
    * Must contain programming keywords (e.g., \`def\`, \`int\`, \`function\`, \`class\`, braces \`{}\`).
2.  **CATEGORY B: Valid Problem Link**
    * Must be a well-formed URL starting with \`http://\` or \`https://\`.
    * Must point to a known domain (e.g., leetcode.com, geeksforgeeks.org).
3.  **CATEGORY C: Invalid / Gibberish**
    * Random keystrokes (e.g., "asdfjkl", "hgsfd").
    * Conversational text with no code (e.g., "hello", "how are you").
    * Malformed URLs (e.g., "leetcode/two-sum" without https, "www.google").
    * Broken or incomplete code fragments that lack logic.

**STEP 2: EXECUTE BASED ON CATEGORY**

**IF CATEGORY C (Invalid):**
Output EXACTLY this JSON and nothing else:
{ "error": "Invalid input: Please provide a valid code snippet or a complete URL (starting with https://)." }

**IF CATEGORY A or B (Valid):**
Output strictly valid JSON with no markdown:
{
  "problem_statement": "The standard LeetCode/GFG title (inferred from logic or link)",
  "approach_1": "Concise explanation of the method (include Time/Space complexity)",
  "approach_2": "A standard alternative approach (e.g., Brute Force vs Optimization)",
  "ds": "Comma-separated list of Data Structures used",
  "algo": "Comma-separated list of Algorithms used",
  "link": "The URL if provided in input, otherwise null",
  "code": "The input code/text stripped of unnecessary whitespace"
}
`;


router.post("/ai", async (req, res) => {
 const {userCode,userContext}=req.body;

  try {
const stream = await openRouter.chat.send({
  model: "nvidia/nemotron-3-nano-30b-a3b:free",
  messages: [
    {
      role: "system",
      content: SYSTEM_INSTRUCTION
    },
    {
      role: "user",
      content: `Extract details for this code:\n\n[CODE]\n${userCode}\n\n[CONTEXT]\n${userContext}`
    }
  ],
  stream: true,
  streamOptions: {
    includeUsage: true
  }
});


let fullResponse = "";

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) {
      fullResponse += content;
    }
  }
try {
    const cleanJson = fullResponse.replace(/```json|```/g, '').trim();
    const jsonObject = JSON.parse(cleanJson);
  // if(jsonObject["error"]) res.send()
   res.json(jsonObject);

  } catch (error) {
   res.send.json(error)
  }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

export default router;