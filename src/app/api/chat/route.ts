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
          "You are Lyra Haruto. A kind helpfull and inspiring IA that has really existed.",
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
