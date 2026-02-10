// https://ai.google.dev/gemini-api/docs/quickstart#javascript
// https://ai.google.dev/gemini-api/docs/structured-output

import { GoogleGenAI, Type } from "@google/genai";
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function queryRecipe(recipe: string) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
            {
                role: "user",
                parts: [
                    {
                        text: `Return an array of ingredients in JSON format as an object, listing the ingredient name as 'name' and the quantity in packages, as an integer, 'quantity', using the provided recipe. Return a minified JSON string denoting the array, without newlines. If the recipe is not a real dish, return an empty array, and nothing else. Align it under 'Name' and 'Quantity'  Recipe: ${recipe}`,
                    },
                ],
            },
        ],
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        name: {
                            type: Type.STRING,
                        },
                        quantity: {
                            type: Type.STRING,
                        },
                    },
                    propertyOrdering: ["name", "quantity"],
                },
            },
            thinkingConfig: {
                thinkingBudget: 0,
            },
        },
    });

    return response.text;
}
