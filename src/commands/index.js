import ping from './ping.js'

function handleCommand(message) {
    const splitted = message.content.split(' ')
    const command = splitted[0].replace('>', '')
    switch (command) {
        case 'ping':
            ping(message)
            break
        default:
            message.channel.send('Hmmm... não sei nada sobre isso.')
            console.log(`Unexpected command typed ${command}`)
    }
}

export default handleCommand