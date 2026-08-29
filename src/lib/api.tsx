export interface ChatResponse {
  source?: string;
  reply: string;
  items?: any[];
}

export const sendMessageToAI = async (message: string): Promise<ChatResponse> => {
  try {
    const isDev = process.env.NODE_ENV === 'development';
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || (isDev ? "http://localhost:3000" : "https://api.bhukkadh.hindustaan.in");
    const response = await fetch(`${API_BASE}/api/v1/ai/website-chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data as ChatResponse;
  } catch (error) {
    console.error("Failed to send message to AI backend:", error);
    return {
      reply: "Sorry, I am having trouble connecting to the server right now. Please try again later.",
    };
  }
};
