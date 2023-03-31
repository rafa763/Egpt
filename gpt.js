import { Configuration, OpenAIApi } from 'openai';
import dontenv from 'dotenv';

dontenv.config();

const GPT_API_key = process.env.GPT_API;

const config = new Configuration({
    apiKey: GPT_API_key,
});

const openai = new OpenAIApi(config);

async function answer(question) {
    const ans = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: question,
        temperature: 0.7,
        max_tokens: 4000,
    });
    return ans.data.choices[0].text;
}

export default answer;