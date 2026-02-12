import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBkwicux8C12Yp7JKcdmOZFVQAdYpMXQzU';
const genAI = new GoogleGenerativeAI(API_KEY);

async function testModel(modelName) {
    console.log(`Testing model: ${modelName}...`);
    try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent('Hello');
        const response = await result.response;
        console.log(`SUCCESS: ${modelName} works! Response: ${response.text()}`);
        return true;
    } catch (error) {
        console.error(`FAILURE: ${modelName} failed. Error:`, error.message);
        return false;
    }
}

async function runTests() {
    // Try 2.5 first as requested
    const works25 = await testModel('gemini-2.5-flash');
    if (works25) return;

    // Try 2.0
    const works20 = await testModel('gemini-2.0-flash');
    if (works20) return;

    // Try 1.5 as fallback
    await testModel('gemini-1.5-flash');
}

runTests();
