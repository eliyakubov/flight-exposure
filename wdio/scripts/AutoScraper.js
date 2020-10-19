require('dotenv').config()
const FlightExposurePage = require('../pageobjects/FlightExposurePage')
const API = require('../API/API')
const axios = require('axios')

describe('Runs an automated GUI browser to scrape data', () => {
    before('Open environment', () => {
        FlightExposurePage.open(process.env.WEBPAGE_TO_SCRAPE)
        $(FlightExposurePage.titleDomestic).waitForDisplayed({})
        $(FlightExposurePage.titleInternational).waitForDisplayed({})
    })

    it('Will navigate to domestic flights and scrape data', () => {
        const type = 'domestic'
        //$(FlightExposurePage.titleDomestic).scrollIntoView()
        $(FlightExposurePage.titleDomestic).click()
        browser.pause(4000)
        FlightExposurePage.selectHowManyEntries(true, 100)
        browser.pause(1000)
        FlightExposurePage.getData(
            FlightExposurePage.table,
            'domestic',
            true
        ).forEach(row => {
            const cells = row.$$('td')
            const flightData = {
                type: type,
                airline: cells[0]
                    .getHTML(false)
                    .trim()
                    .replace(/^\s+|\s+$/g, ''),
                flight: cells[1]
                    .getHTML(false)
                    .trim()
                    .replace(/^\s+|\s+$/g, ''),
                departing: cells[2]
                    .getHTML(false)
                    .trim()
                    .replace(/^\s+|\s+$/g, ''),
                destination: cells[3]
                    .getHTML(false)
                    .trim()
                    .replace(/^\s+|\s+$/g, ''),
                date: cells[4]
                    .getHTML(false)
                    .trim()
                    .replace(/^\s+|\s+$/g, ''),
                rows: cells[5]
                    .getHTML(false)
                    .trim()
                    .replace(/^\s+|\s+$/g, '')
            }

            API.makePostRequest('/updateDB', flightData)
        })
    })

    it('Will navigate to domestic flights and scrape data', () => {
        const type = 'international'
        //$(FlightExposurePage.titleInternational).scrollIntoView()
        $(FlightExposurePage.titleInternational).click()
        browser.pause(4000)
        FlightExposurePage.selectHowManyEntries(false, 100)
        browser.pause(1000)
        FlightExposurePage.getData(
            FlightExposurePage.table,
            'international',
            true
        ).forEach(row => {
            const cells = row.$$('td')
            const flightData = {
                type: type,
                airline: cells[0]
                    .getHTML(false)
                    .trim()
                    .replace(/^\s+|\s+$/g, ''),
                flight: cells[1]
                    .getHTML(false)
                    .trim()
                    .replace(/^\s+|\s+$/g, ''),
                departing: cells[2]
                    .getHTML(false)
                    .trim()
                    .replace(/^\s+|\s+$/g, ''),
                destination: cells[3]
                    .getHTML(false)
                    .trim()
                    .replace(/^\s+|\s+$/g, ''),
                date: cells[4]
                    .getHTML(false)
                    .trim()
                    .replace(/^\s+|\s+$/g, ''),
                rows: cells[5]
                    .getHTML(false)
                    .trim()
                    .replace(/^\s+|\s+$/g, '')
            }

            API.makePostRequest('/updateDB', flightData)
        })
    })
})
