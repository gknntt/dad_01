// Import the terminal initialization function
import { initTerminal } from '../common/g_term.js';

// Initialize the terminal and assign it to window.term for global access
window.term = initTerminal();

// Define a game function that uses the terminal to interact with the user
async function game() {
    // Print to terminal
    term.echo("Starting system...");

    // Create 'fav' variable and set it to value returned from user via term.read (await read completion)
    let fav = await term.read("What is your favorite food? ");

    // Print out message
    term.echo("Yum! I love " + fav + " too.");

    // Show user how to interact with terminal directly
    term.echo("\n");
    term.echo("By the way, you can also interact with the terminal directly by typing commands.");
    term.echo("For example, try:\n");
    term.echo("     for (let i=0;i<10;i++){ term.echo(i) };\n");
    term.echo(" or:\n");
    term.echo("     let g;");
    term.echo('     g=await term.read("Enter number: ");');
    term.echo('     term.echo("You entered: " + g);\n\n');
}

// Launch game (in terminal) immediately
game();