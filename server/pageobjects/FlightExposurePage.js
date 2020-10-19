const Page = require('./Page')

class FlightExposurePage extends Page {
    get titleDomestic() {
        return 'h3[id="dom"]'
    }

    get titleInternational() {
        return 'h3[id="int"]'
    }

    get table() {
        return 'tbody'
    }

    get selectEntriesDomestic() {
        return 'select[name="wb-auto-4_length"]'
    }

    get selectEntriesInternational() {
        return 'select[name="wb-auto-5_length"]'
    }

    getData(table) {
        return $(table).$$('tr')
    }

    selectHowManyEntries(domestic, entries) {
        //browser.execute(this.runInBrowser, browser.$(this.selectEntries))
        //$(this.selectEntries).scrollIntoView()
        if (domestic) $(this.selectEntriesDomestic).click()
        else $(this.selectEntriesInternational).click()
        $(`option[value="${entries}"]`).click()
    }
}

module.exports = new FlightExposurePage()
