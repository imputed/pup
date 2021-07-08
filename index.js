'use strict';

const puppeteer = require('puppeteer')
const minimist = require('minimist')

let args = minimist(process.argv.slice(2), {
    default: {
        name: "Benedikt Schleibinger",
		mail: "privat@benedikt-schleibinger.de"
	},
});

const Name = args.name
const Mail = args.mail
const Dates =  ["2021-08-05", "2021-08-12", "2021-08-19", "2021-08-26", "2021-09-02", "2021-09-09", "2021-09-16", "2021-09-23", "2021-09-30", "2021-10-07"] 
const Url = 'https://www.rockpopmuc.de/anmeldung-zur-probe/'

async function enterData() {
	const NameSelector = "#your-name"
	const MailSelector = "#your-email"
	const DateNameSelector = "Probe"
	const submitButton = "#wpcf7-f918-p919-o1 > form > p:nth-child(6) > input"

	const browser = await puppeteer.launch({ headless: false })
	const page = await browser.newPage()



	for (var i = 0; i < Dates.length; i++) {
		const date = Dates[i]
		await page.goto(Url, {
			waitUntil: 'networkidle0',
		  });

		await page.click(NameSelector);
		await page.keyboard.type(Name)

		await page.click(MailSelector)
		await page.keyboard.type(Mail)

		await page.evaluate(function (date) {
			document.getElementsByName("Probe")[0].form[14].value = date

		}, date)

	//	await page.click(submitButton)

	}
	browser.close()
}

enterData();
