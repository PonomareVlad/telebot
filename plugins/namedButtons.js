/*
    Named buttons which triggers bot commands.
*/

export default  {

    id: 'namedButtons',
    defaultConfig: {
        buttons: {
            // myButton: {
            //     label: '😄 My Button Name',
            //     command: '/myBotCommand'
            // }
        }
    },

    plugin(bot, pluginConfig) {

        const buttons = pluginConfig.buttons || {};

        bot.on('text', (msg, props) => {
            const text = msg.text;
            for (let buttonId in buttons) {
                const button = buttons[buttonId];
                if (button.label === text) {
                    return bot.event(button.command, msg, props);
                }
            }

        });

    }

};
