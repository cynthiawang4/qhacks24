import OpenAI from "openai";

// Our secret api code
const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, 
    dangerouslyAllowBrowser: true
});

// Hard coded prompt to chatgpt -> NEED TO UNHARD CODE
export async function getResponse() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: "What are the colors of the rainbow?" }],
        model: "gpt-3.5-turbo",
      });

  return completion.choices[0].message.content;
}