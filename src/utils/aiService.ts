import { GoogleGenerativeAI } from '@google/generative-ai';

// Hardcoded key for reliability
const API_KEY = 'AIzaSyBkwicux8C12Yp7JKcdmOZFVQAdYpMXQzU';
let genAI: GoogleGenerativeAI | null = new GoogleGenerativeAI(API_KEY);

export const initAI = (apiKey: string) => {
    if (apiKey) {
        genAI = new GoogleGenerativeAI(apiKey);
    }
};

export const generateSummary = async (jobTitle: string, keywords: string) => {
    if (!genAI) {
        // Fallback re-init
        genAI = new GoogleGenerativeAI(API_KEY);
    }

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
        const prompt = `Write a professional resume summary for a ${jobTitle}. 
      Keywords to include: ${keywords}. 
      Keep it concise (2-3 sentences) and impactful. No markdown, just text.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error: any) {
        console.error("AI Generation Error:", error);
        return `Error generating summary: ${error.message || 'Unknown error'}. Please check your internet connection.`;
    }
};

export const enhanceText = async (text: string) => {
    if (!genAI) {
        genAI = new GoogleGenerativeAI(API_KEY);
    }

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
        const prompt = `Enhance the following resume text to be more professional, action-oriented, and impactful. 
      Keep the same meaning but improve the phrasing. 
      Text: "${text}"
      Result (just the enhanced text, no explanations):`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text().trim();
    } catch (error: any) {
        console.error("AI Enhancement Error:", error);
        return text; // Return original text on failure
    }
};
