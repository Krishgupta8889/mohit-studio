
import { GoogleGenAI } from "@google/genai";

// We wrap the initialization in a function or a getter to ensure it doesn't crash if process.env.API_KEY is missing
const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("Gemini API Key is missing. AI features will be disabled.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

/**
 * Interface with the Gemini model to provide studio-specific information.
 */
export const getAssistantResponse = async (userMessage: string) => {
  const ai = getAIClient();
  if (!ai) {
    return "Our AI assistant is currently in maintenance mode. Please use WhatsApp or call us directly!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are an AI assistant for Mohit Studio, a professional photography studio. 
        Your task is to help potential clients with information about wedding photography, pre-wedding shoots, portraits, and cinematography.
        
        Studio Context:
        - Studio Name: Mohit Studio
        - Location: Bhursi Road, Khannoudhi 484770, Madhya Pradesh, India.
        - Contact: +91 7581907594 or 1mohitgupta7772@gmail.com
        - Services: Wedding photography, cinematography, event coverage, portraits.
        
        Tone: Professional, artistic, and welcoming. If you don't know something, ask them to call +91 7581907594.`,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response. Please reach out to our team directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Please call us at +91 7581907594 for a quick response!";
  }
};
