import scrapFromLinkedin from './LinkedinCrawler/index.js'

function crawlerIdentifier(url) {
    if (url.includes('linkedin')) return 'linkedin'
}

export default function scrap(url) {
    const crawler = crawlerIdentifier(url)
    
    switch(crawler) {
        case 'linkedin':
            const jobDetails = scrapFromLinkedin(url)
            return jobDetails
            break;
        default:
            console.log('No available crawler for this URL.')
    }
}