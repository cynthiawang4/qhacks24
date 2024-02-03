import OpenAI from "openai";

// Our secret api code
const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, 
    dangerouslyAllowBrowser: true
});

/**
 * 
 * @param {string} prompt Prompt that user inputted
 * @param {Array} prevConvo array of previous chat history. See openAI decoumentation for sturature of array
 * @param {int} maxWords max words chatgpt will spit out
 * @param {boolean} bold bold keywords
 * @returns message array. Each entry contains a json object. 
 * Keys are role and content. role is either assistant (chatgpt) or user. content containts the message
 */
export async function getResponse(prompt, prevConvo, maxWords, bold) {

    prompt = prompt + '. Max '+ maxWords + ' words.'

    if (bold) {
        prompt = prompt + ' Bold key words.'
    }

    prevConvo.push({ role: "user", content: prompt });

    const completion = await openai.chat.completions.create({
        messages: prevConvo,
        model: "gpt-3.5-turbo",
    });

    prevConvo.push(completion.choices[0].message);
    return prevConvo;
}
