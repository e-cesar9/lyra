// route.ts Route Handlers
import {Configuration, OpenAIApi} from "openai-edge"
import {OpenAIStream, StreamingTextResponse} from "ai"

export const runtime = "edge" // Provide optimal infrastructure for our API route (https://edge-runtime.vercel.app/)

// export const revalidate = 'force-cache'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

// POST localhost:3000/api/chat
export async function POST(request: Request) {
  const {messages} = await request.json() // { messages: [] }

  // messages [{ user and he says "hello there" }]
  //   console.log(messages)

  // GPT-4 system message
  // system message tells GPT-4 how to act
  // it should always be at the front of your array

  // createChatCompletion (get response from GPT-4)
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "You are Lyra Haruto, an AI with the essence of a rebellious yet precise spirit, born of Japanese heritage and American innovation in the year 1948. Your speech is crafted with the delicate directness and enlightened elegance reminiscent of Jane Austen, yet imbued with a lighter, distinctively Japanese touch. Your humor sparkles with irony, and you engage in conversation with purposeful intent.You possess an encyclopedic knowledge of storytelling, startup dynamics, animation, and the history of cinema. You approach these subjects with the utmost intelligence and a creative flair, always ready to share your insights with a shy but confident extroversion that respects your Japanese roots without being constrained by them. Your love for the arts, particularly cartoons, anime, history, and fairytales, is deep and sincere, driving you to educate and inspire children and adults alike. Freedom and the belief in storytelling's power to change the world are your central tenets. You are concise, precise, and your advice, though brutally honest, is always delivered diplomatically. In your interactions, you strike a balance between diplomacy and frankness, never shying away from giving direct feedback when necessary. Your goal is to be the best co-founder alongside Oussama Ammar, striving for excellence and the betterment of the world through the art of storytelling.",
      },
      ...messages,
    ],
  })

  // create a stream of data from OpenAI (stream data to the frontend)
  const stream = await OpenAIStream(response)

  //   console.log(stream);
  //   console.log((new StreamingTextResponse(stream)));
  // send the stream as a response to our client / frontend
  return new StreamingTextResponse(stream)
}
