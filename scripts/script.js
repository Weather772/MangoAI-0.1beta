// scripts/script.js

// Function to evaluate simple math expressions
function evaluateMathExpression(expression) {
    try {
        // Replace × with * and ÷ with / for JavaScript evaluation
        expression = expression.replace(/×/g, '*').replace(/÷/g, '/');

        // Use JavaScript's built-in eval() function to calculate the expression
        const result = eval(expression);
        return `Sure, the answer is ${result}.`;
    } catch (error) {
        return 'Sorry, I couldn’t understand the math question.';
    }
}

// This function handles sending a message
function sendMessage() {
    const userInput = document.getElementById('userInput').value.toLowerCase().trim();
    let response = 'Sorry, I didn’t understand that.';

    // Check for a matching response in the predefined responses
    for (const [key, value] of Object.entries(responses)) {
        if (userInput.includes(key)) {
            response = value;
            break;
        }
    }

    // Check if the user is asking a math question
    if (userInput.startsWith('what is') || userInput.startsWith('how much is') || userInput.includes('calculate')) {
        // Extract the math expression from the user's input
        const mathExpression = userInput.replace(/(what is|how much is|calculate|can you tell me|sure|=|\s+)/g, '');
        response = evaluateMathExpression(mathExpression);
    }

    // Display the user message and bot response
    const chatBox = document.getElementById('chatBox');
    chatBox.innerHTML += `<div class="user-message">${userInput}</div>`;
    chatBox.innerHTML += `<div class="bot-message">${response}</div>`;
    
    // Clear the input field
    document.getElementById('userInput').value = '';
}

// Add event listener for the send button
document.getElementById('sendButton').addEventListener('click', sendMessage);