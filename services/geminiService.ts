import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // In a real app, this should be handled securely
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const getSpeakingFeedback = async (
  targetSentence: string,
  userSpeech: string
): Promise<{ score: string; feedback: string }> => {
  if (!ai) {
    // Fallback if no API key is present for demo purposes
    return {
      score: "Good",
      feedback: "API Key missing. Simulating feedback: You pronounced most words correctly, but try to focus on the ending sounds."
    };
  }

  try {
    const prompt = `
      You are an encouraging English teacher for 9th grade students. 
      The student was trying to say: "${targetSentence}".
      The speech recognition heard: "${userSpeech}".
      
      Compare them.
      1. Give a score: "Excellent" (if perfect/very close), "Good" (if understandable but minor errors), or "Try Again" (if completely different).
      2. Give 1 short sentence of specific advice on pronunciation or grammar based on the difference.
      
      Output JSON format:
      {
        "score": "Excellent" | "Good" | "Try Again",
        "feedback": "Your advice here."
      }
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response");

    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      score: "Good",
      feedback: "Great effort! I couldn't connect to the AI judge right now, but your fluency is improving."
    };
  }
};
