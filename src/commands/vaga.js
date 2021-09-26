import scrap from '../crawlers/index.js'
import { validateURL } from '../common/validations.js';
import RequiredParameters from '../common/errors/RequiredParameters.js'

function vaga({ params }) {
    if (params.length === 0) throw new RequiredParameters('URL')

    const url = params[0]
    try {
        validateURL(url)
        scrap(url)
    } catch (err) {
        console.error(err.message)
    }
}

export default vaga