import { chatbotPrompt } from "../../helpers/contansts/prompt-chatbot";
import { MessageArraySchema } from "@/lib/message";
import {
  ChatGPTMessage,
  OpenAISteam,
  OpenAIStreamPayload,
} from "@/lib/openai_stream";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const parsedMessages = MessageArraySchema.parse(messages);

  const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => ({
    role: message.isUserMessage ? "user" : "system",
    content: message.text,
  }));

  outboundMessages.unshift({
    role: "user",
    content: "",
  });

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: outboundMessages,
    temperature: 0.4,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 4000,
    stream: true,
    n: 1,
  };

  const stream = await OpenAISteam(payload);

  return new Response(stream);
}
