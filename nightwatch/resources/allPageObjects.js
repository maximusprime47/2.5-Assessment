
module.exports = {
    url: 'http://localhost:3000',
    elements: {
        //evensOdds Card
        EOinput: 'input[name="evenOddInput"]',
        splitButt: 'button[name="evenOddButton"]',
        evenArray: 'span[name="evenResults"]',
        oddArray: 'span[name="oddResults"]',
        //filterObject Card
        topObjDisplay: 'span[name="objectFilterObjects"]',
        objInput: 'input[name="objectFilterInput"]',
        objArrayDisplay: 'span[name="objectFilterResults"]',
        filterButton: 'button[name="objectFilterButton"]',
        //filterString Card
        topStringArray: 'span[name="nameFilterNames"]',
        stringInput: 'input#nameFilterInput',
        stringButton: 'button#nameFilterButton',
        stringResults: 'span[name="nameFilterResults"]',
        //Palindrome Card 
        pdInput: 'input[name="palindromeInput"]',
        pdButton: 'button[name="palindromeButton"]',
        pdResults: 'span[name="palindromeResults"]',
        //Sum Card
        topNumber: 'input[name="sumInput1"]',
        bottomNumber: 'input[name="sumInput2"]',
        addButton: 'button[name="sumButton"]',
        sumResults: 'span[name="sumResults"]'
    },
}