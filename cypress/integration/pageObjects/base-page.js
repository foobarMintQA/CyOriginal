import * as XLSX from 'xlsx';
const chalk = require('chalk');

class BasePage {

    typeText(selector, str) {
        console.log("Console log - Why I am getting chai error here?");
        expect(2 > 3).should('be.true');
        cy.log("Cy log - Why I am getting chai error here?");
    }
}

export default BasePage;