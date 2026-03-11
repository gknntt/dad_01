// Common terminal instantiation - Gterm
export function initTerminal() {
    return $('body').terminal(async function(command) {
        if (command !== '') {
            try {
                // If the command contains 'await', we wrap it in a self-executing async function
                let result;
                if (command.includes('await')) {
                    result = await eval(`(async () => { return ${command}; })()`);
                } else {
                    result = window.eval(command);
                }

                // Only echo if the result isn't the terminal itself or undefined
                if (result !== undefined && result !== window.term) {
                    this.echo(new String(result));
                }
            } catch(e) {
                this.error(new String(e));
            }
        }
    }, {
        greetings: '[[b;cyan;]SYSTEM READY.]\n'
    });
}