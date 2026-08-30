export interface ChatResponse {
  success?: boolean;
  source?: string;
  reply: string;
  requestId?: string;
  items?: any[];
  quickActions?: any[];
}

export const sendMessageToAI = async (message: string): Promise<ChatResponse> => {
  try {
    const response = await fetch("https://apibhukkad.allindiahub.com/api/ai/website-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        sessionId: "guest",
        history: [],
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.success === false) {
      return {
        reply: "Sorry, please try again or contact support@hindustaan.in",
      };
    }

    return data as ChatResponse;
  } catch (error) {
    console.error("Failed to send message to AI backend:", error);
    return {
      reply: "Sorry, please try again or contact support@hindustaan.in",
    };
  }
};
