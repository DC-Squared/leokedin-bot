import puppeteer from 'puppeteer'

async function scrapFromLinkedin(jobUrl) {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--headless']
        })
        
        const page = await browser.newPage()
        await page.goto(jobUrl, {
            waitUntil: 'networkidle2'
        })
        
        let jobDetails = await page.evaluate(() => {
            const jobName = document.querySelector('.top-card-layout__title').innerText
            const companyName = document.querySelector('.topcard__org-name-link.topcard__flavor--black-link').innerText
            const companyImage = document.querySelector('.artdeco-entity-image.artdeco-entity-image--square-5.lazy-loaded').getAttribute('src')
            const jobLocal = document.querySelector('.topcard__flavor.topcard__flavor--bullet').innerText
            const recruiterName = document.querySelector('div.base-card.base-main-card div.base-main-card__info h3').innerText
            const recruiterPosition = document.querySelector('div.base-card.base-main-card div.base-main-card__info h4').innerText

            return {
                jobName,
                jobLocal,
                companyName,
                companyImage,
                recruiterName,
                recruiterPosition
            }
        })

        browser.close()
        
        jobDetails['jobUrl'] = jobUrl
        return jobDetails
    } catch (err) {
        console.log(err)
    }
}

export default scrapFromLinkedin