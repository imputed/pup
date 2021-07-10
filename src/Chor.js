const puppeteer = require('puppeteer')

class Chor {

    async EnterData(dates: array<Date>, name: string, mail: string) {
        const Url = 'https://www.rockpopmuc.de/anmeldung-zur-probe/'
        const NameSelector = "#your-name"
        const MailSelector = "#your-email"
        const DateNameSelector = "Probe"
        const submitButton = "#wpcf7-f918-p919-o1 > form > p:nth-child(6) > input"

        const browser = await puppeteer.launch({headless: true})
        const page = await browser.newPage()

        let cnt = 0
        for (var i = 0; i < dates.length; i++) {
            cnt ++
            const date = dates[i]
            await page.goto(Url, {
                waitUntil: 'networkidle0',
            });

            await page.click(NameSelector);
            await page.keyboard.type(name)

            await page.click(MailSelector)
            await page.keyboard.type(mail)

            await page.evaluate(function (date, DateNameSelector) {
                //$FlowFixMe[prop-missing]
                document.getElementsByName(DateNameSelector)[0].form[14].value = date

            }, date, DateNameSelector)

            //	await page.click(submitButton)

        }
        browser.close()
        return cnt
    }
}

module.exports = Chor