const TelegramBot = require('node-telegram-bot-api');

// Replace with your Telegram Bot Token from BotFather
const token = '7585448471:AAEvagJcBplpgm__SNxwxqQc0n5S_1LxLlw';
const bot = new TelegramBot(token, { polling: true });

// Sample dataset of colleges
const colleges = [
    {
        name: "IIT Bombay",
        min_inter_marks: 85,
        min_btech_cgpa: 8.0,
        min_gate_score: 700,
        branch: "CSE"
    },
    {
        name: "IIT Delhi",
        min_inter_marks: 80,
        min_btech_cgpa: 7.5,
        min_gate_score: 650,
        branch: "Mechanical"
    },
    {
        name: "NIT Trichy",
        min_inter_marks: 75,
        min_btech_cgpa: 7.0,
        min_gate_score: 600,
        branch: "ECE"
    }
];

// Store user data temporarily
let userData = {};

// Start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Welcome to the MTech College Finder Bot!\nPlease enter your Intermediate marks (%):");
});

// Handle user messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // Skip if it's the /start command
    if (text === '/start') return;

    // Initialize user data if not already done
    if (!userData[chatId]) {
        userData[chatId] = {};
    }

    // Step-by-step input collection
    if (!userData[chatId].interMarks) {
        const marks = parseFloat(text);
        if (isNaN(marks) || marks < 0 || marks > 100) {
            bot.sendMessage(chatId, "Please enter a valid percentage (0-100):");
            return;
        }
        userData[chatId].interMarks = marks;
        bot.sendMessage(chatId, "Enter your BTech CGPA (out of 10):");
    } 
    else if (!userData[chatId].btechCgpa) {
        const cgpa = parseFloat(text);
        if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
            bot.sendMessage(chatId, "Please enter a valid CGPA (0-10):");
            return;
        }
        userData[chatId].btechCgpa = cgpa;
        bot.sendMessage(chatId, "Enter your GATE score (out of 1000):");
    } 
    else if (!userData[chatId].gateScore) {
        const score = parseFloat(text);
        if (isNaN(score) || score < 0 || score > 1000) {
            bot.sendMessage(chatId, "Please enter a valid GATE score (0-1000):");
            return;
        }
        userData[chatId].gateScore = score;

        // Find eligible colleges
        const eligibleColleges = colleges.filter(college => 
            college.min_inter_marks <= userData[chatId].interMarks &&
            college.min_btech_cgpa <= userData[chatId].btechCgpa &&
            college.min_gate_score <= userData[chatId].gateScore
        );

        // Send response
        if (eligibleColleges.length > 0) {
            const response = "Recommended Colleges:\n" + 
                eligibleColleges.map(c => `${c.name} (${c.branch})`).join("\n");
            bot.sendMessage(chatId, response);
        } else {
            bot.sendMessage(chatId, "Sorry, no colleges match your criteria.");
        }

        // Reset user data for next use
        delete userData[chatId];
    }
});

console.log("Bot is running...");