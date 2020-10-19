module.exports = class Page {
    open(env) {
        return browser.url(`${env}`)
    }

    // Used occasionally with elements that cannot be accessed in conventional manners by passing this function into browser.execute()
    runInBrowser(element) {
        element.click()
    }
}
