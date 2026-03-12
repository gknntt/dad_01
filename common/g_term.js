// Common terminal instantiation - Gterm
export function initTerminal() {
    return $('body').terminal(async function(command) {
        if (command !== '') {
            try {
                // Pre-process: Replace 'let ' and 'const ' with 'var ' 
                // This forces variables to stick to the global window scope
                let processedCommand = command.replace(/^\s*(let|const)\s+/g, 'var ');

                let result;
                if (processedCommand.includes('await')) {
                    // We use window.eval to ensure we are in the outermost scope
                    result = await window.eval(`(async () => { return ${processedCommand}; })()`);
                } else {
                    result = window.eval(processedCommand);
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
        greetings: '[[b;cyan;]SYSTEM READY.]\n',
        checkType: false,
        device: 'mobile',
        scrollOnEcho: true
    });
}