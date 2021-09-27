import scrap from '../crawlers/index.js'
import JobEmbed from '../views/embeds/JobEmbed.js'
import { validateURL } from '../common/validations.js';
import RequiredParameters from '../common/errors/RequiredParameters.js'
import { getChannelByName } from '../common/utils.js';

async function vaga(message, { params }) {
    if (params.length === 0) throw new RequiredParameters('URL')

    const url = params[0]
    try {
        validateURL(url)
        
        const jobDetails = await scrap(url)
        
        const jobEmbed = JobEmbed(jobDetails)
        const channel = getChannelByName(message.author.client, 'vagas')
        channel.send({ embeds: [jobEmbed] })
    } catch (err) {
        console.error(err.message)
    }
}

export default vaga