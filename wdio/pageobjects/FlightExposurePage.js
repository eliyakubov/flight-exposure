const Page = require('./Page')

class FlightExposurePage extends Page {
    get titleDomestic() {
        return 'h3[id="dom"]'
    }

    get titleInternational() {
        return 'h3[id="int"]'
    }

    get tableDomestic() {
        //return '/html/body/main/div[3]/div/section/details/div/table/tbody' For August 12 and later
        return '/html/body/main/div[2]/section[1]/details/div/table/tbody' // For Aug 5 and earlier
    }

    get tableInternational() {
        //return '/html/body/main/div[4]/div/section/details/div/table/tbody' // For Aug 12 and later
        return '/html/body/main/div[2]/section[2]/details/div/table/tbody' // For Aug 5 and earlier
    }

    get selectEntriesDomestic() {
        //return 'select[name="wb-auto-4_length"]' // For September and later
        return 'select[name="wb-auto-5_length"]' // For August and earlier
    }

    get selectEntriesInternational() {
        //return 'select[name="wb-auto-5_length"]' // For September and later
        return 'select[name="wb-auto-6_length"]' // For August and earlier
    }

    getData(table, domestic, archive) {
        if (domestic === 'international')
            return $(this.tableInternational).$$('tr')
        else return $(this.tableDomestic).$$('tr')
    }

    selectHowManyEntries(domestic, entries) {
        //browser.execute(this.runInBrowser, browser.$(this.selectEntries))
        //$(this.selectEntries).scrollIntoView()
        if (domestic) {
            $(this.selectEntriesDomestic).click()
            $$(`option[value="${entries}"]`)[0].click()
        } else {
            $(this.selectEntriesInternational).click()
            $$(`option[value="${entries}"]`)[1].click()
        }
        browser.pause(500)
    }
}

module.exports = new FlightExposurePage()
