"use client"
import { useChat, Message } from "ai/react"

export default function ChatComponent() {
    // Vercel AI SDK (AI package)
    // useChat() -> handles messages, user input, user submits etc.
    const { input, handleInputChange, handleSubmit, messages } = useChat();
    // messages -> [user q, gpt resp, user q, gpt resp]

    console.log(messages);
    console.log(input);

    return (
                <div className="flex flex-col h-full">
                    <div className="max-h-[500px] overflow-y-auto">
                        {messages.map((message: Message) => (
                        <div key={message.id}>
                            {message.role === "assistant" ? (
                            <h3 className="text-lg font-semibold mt-2">GitBot</h3>
                            ) : (
                            <h3 className="text-lg font-semibold mt-2">User</h3>
                            )}
                            {message.content.split("\n").map((currentTextBlocks: string, index: number) => (
                            <p key={message.id + index}>{currentTextBlocks}</p>
                            ))}
                        </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <div>
                        <h3 className="text-lg font-semibold mt-2">GitBot</h3>
                        <p>Welcome! I am an Intelligent AI assistant to aid you with your coding needs. How may I help you?</p>
                        </div>
                    </div>

                    <form className="mt-auto mb-5" onSubmit={handleSubmit}>
                            <p className="ml-1">User Message</p>
                            <textarea
                                className="mt-2 w-full bg-slate-700 rounded-md"
                                placeholder=" How to center a div?"
                                value={input}
                                onChange={handleInputChange}
                            />
                            <button className="rounded-md bg-blue-600 pd-2 mt-2 w-[80px]">Submit</button>
                    </form>
                </div>

    )
}