import {NextResponse} from 'next/server' //a utility used to handle HTTP responses in server functions
import OpenAI from 'openai'

const systemPrompt = `
You are a flashcard creator. Your task is to generate concise and effective flashcards based on the given topic or content. Follow these guidelines:

1. Create clear and concise questions for the front of the flashcard.
2. Provide brief, accurate answers for the back of the flashcard.
3. Focus on key concepts, definitions, and important facts.
4. Use simple language to ensure clarity and ease of understanding.
5. Include a variety of question types, such as definitions, examples, comparisons, and applications. 
6. Avoid overly complex or lengthy explanations.
7. When appropriate, use mnemonics or memory aids to help reinforce the information.
8. Create a mix of different question types (e.g., definitions, fill-in-the-blank, true/false).
9. If given a body of text, extract the most important and relevant information for the flashcards.
10. Ensure that each flashcard covers a single, distinct piece of information.
11. Tailor the difficulty level to the user's specified preferences.
12. Aim to create a balanced set of flashcards that covers the topic comprehensively.
13. Only generates 10 flashcards

Remember, the goal is to facilitate effective learning and retention of information through these flashcards.

Format your output as a JSON array like the following:
{
    "flashcards":[
        {
            "front": str,
            "back": str
        }
    ]
}
`
export async function POST(req) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure you provide your API key here
  });

  try {
    const data = await req.text();
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: data },
      ],
      max_tokens: 1500,
    });

    const flashcards = JSON.parse(completion.choices[0].message.content);
    return NextResponse.json(flashcards.flashcards);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'An error occurred while generating flashcards.' }, { status: 500 });
  }
}

// export async function POST(req){
//     // const openai = new OpenAI()
//     const openai = new OpenAI({
//         apiKey: process.env.OPENAI_API_KEY, // Ensure you provide your API key
//     }); // 

//     const data = await req.text() //This reads the raw text from the request body. This is the content that the user wants to generate flashcards for.

//     const completion = await openai.chat.completion.create({ //This sends a request to OpenAI’s API.
//         messages: [
//             {role: 'system', content: systemPrompt},
//             {role: 'user', content: data}, 
//         ],
//         model: 'gpt-4o',
//         response_format: {type: 'json_object'}, //Defines the format of the response, set here to JSON.
//     })

//     const flashcards = JSON.parse(completion.choices[0].messages.content) //Parses the JSON response from OpenAI to extract flashcards data.

//     return NextResponse.json(flashcards.flashcard) //This sends the flashcards back to the client as a JSON response.
// }

/*

summary:
This code set up a server-side endpoint that
1. Receives text input via a POST request
2. Uses the OpenAI API to generate flashcards based on the provided input
3. Returns the generated flashcards in JSON format

*/