import { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";

interface Message {
  role: "user" | "watson";
  text: string;
}

export default function IBMWatsonClone() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulating IBM Watson API response
    setTimeout(() => {
      const watsonMessage: Message = { role: "watson", text: \`IBM Watson says: "\${input}"\` };
      setMessages((prev) => [...prev, watsonMessage]);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 min-h-screen flex flex-col">
      <h1 className="text-xl font-bold text-center mb-4">IBM Watson Module Clone</h1>
      <Card className="flex-1 overflow-auto p-4 bg-white shadow-md rounded-lg">
        <CardContent className="space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={\`p-2 rounded-lg max-w-xs \${msg.role === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black"}\`}
            >
              {msg.text}
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="flex mt-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg"
        />
        <Button onClick={sendMessage} className="ml-2" variant="primary">
          <MessageCircle size={20} />
        </Button>
      </div>
    </div>
  );
}
