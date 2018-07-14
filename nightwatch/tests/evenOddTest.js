let superBrowser = null;

var testData = {
    evenOdd: '1,2,3,4',
    filterObject: 'hairColor',
    filterObjectII: 'title',
    filterStringI: 'Jessica',
    filterStringII: 'Aerith',
    palindromeI: 'mom',
    palindromeII: 'simon garfunkel',
    sumI: '7',
    sumII: '3'
}

module.exports = {

    beforeEach: browser => {
        superBrowser = browser.page.allPageObjects()
        superBrowser.navigate()
    },
    after: browser => {
        browser.end()
    },

    'evenOddCard': browser => {

        superBrowser
            .setValue('@EOinput', testData.evenOdd)
            .click('@splitButt')
            .verify.containsText('@evenArray', 'Evens: [2,4]')
            .verify.containsText('@oddArray', 'Odds: [1,3]')

    },

    'filterObject': browser => {

        superBrowser
            .click('@filterButton')
            .verify.containsText('@objArrayDisplay', 'Filtered: []')
            .setValue('@objInput', testData.filterObject)
            .click('@filterButton')
            .verify.containsText('@objArrayDisplay', 'Filtered: [ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')

    },

    'filterString': browser => {

        superBrowser

            .setValue('@stringInput', testData.filterStringI)
            .click('@stringButton')
            .verify.containsText('@stringResults', 'Filtered Names: [ "Jessica" ]')
            .clearValue('@stringInput')

        superBrowser


            .setValue('@stringInput', testData.filterStringII)
            .click('@stringButton')
            .expect.element('@stringResults').text.to.contain('Filtered Names: []')

    },

    'Palindrome': browser => {

        superBrowser
            .setValue('@pdInput', testData.palindromeI)
            .click('@pdButton')
            .expect.element('@pdResults').text.to.equal('Palindrome: true')

        superBrowser
            .clearValue('@pdInput')
            .setValue('@pdInput', testData.palindromeII)
            .click('@pdButton')
            .expect.element('@pdResults').text.to.equal('Palindrome: false')


    },

    'Sum': browser => {

        superBrowser
            .setValue('@topNumber', testData.sumI)
            .setValue('@bottomNumber', testData.sumII)
            .click('@addButton')
            .expect.element('@sumResults').text.to.equal('Sum: 10')
    }


}