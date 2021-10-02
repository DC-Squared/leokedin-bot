import ping from './ping.js'
import vaga from './vaga.js'
import showmeastreamer from './showmeastreamer.js'

function handleCommand(message) {
    const splitted = message.content.split(' ')
    const command = {
        name: splitted[0].replace('>', ''),
        params: splitted.slice(1, splitted.length)
    }
    try {
        switch (command.name) {
            case 'ping':
                ping(message)
                break
            case 'vaga':
                vaga(message, command)
                break
            case 'showmeastreamer':
                showmeastreamer(message)
                break
            default:
                message.channel.send('Hmmm... não sei nada sobre isso.')
                console.log(`Unexpected command typed ${command}`)
        }
    } catch (err) {
        console.error(err.message)
    }
}

export default handleCommand