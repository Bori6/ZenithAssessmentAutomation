class zenithAutomation
{
    visitUrl(){
        return cy.visit(Cypress.env('url'))
    }
    verifyUrl(){
        return cy.url().should('eq','https://www.zenithbank.com/')
    }
    clickContinueButton(){
        return cy.get('#continue-button').click()
    }
    selectDropdown(){
        return cy.get('.mobile-menu-link').click()
    }
    selectsPersonalMenu(){
        return cy.get('#menu-main-menu > .menu-item-1162 > [href="/personal-banking/"]').click()
    }
    selectsBankAccounts(){
        return cy.get('[style="display: block;"] > .menu-item-1154 > [href="/personal-banking/bank-accounts/"]').click()
    }
    selectsCurrentAccount(){
        return cy.get('.menu-item-1640 > a').click()
    }
    validateZeroAccountopeningBalance(){
        return cy.get('#ui-id-2 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(1)').should("contain","Zero account opening balance")
    }
    validateInternetBanking(){
        return cy.get('#ui-id-2 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(2)').should("contain","Internet Banking")
    }
    validateZenithMobileBankingApp(){
        return cy.get('#ui-id-2 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(3)').should("contain","Zenith Mobile Banking app")
    }
    validate966Eazybanking(){
        return cy.get('#ui-id-2 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(4)').should("contain","*966# Eazybanking")
    }
    validateMasterCardVisaVerveDebitCard(){
        return cy.get('#ui-id-2 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(5)').should("contain","MasterCard/Visa/Verve debit card")
    }
    validateEmailSMSAlertz(){
        return cy.get('#ui-id-2 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(6)').should("contain","Email/SMS Alertz")
    } 
    validateChequeBook(){
        return cy.get('#ui-id-2 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(7)').should("contain","Cheque book")
    }
    validateAccountOpening(){
        return cy.get('#ui-id-4 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(1)').should('contain','Account opening form duly completed')
    }
    validatePassport(){
        return cy.get('#ui-id-4 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(2)').should('contain','One recent clear passport photograph of signatory')
    }
    validateSignatories(){
        return cy.get('#ui-id-4 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(3)').should('contain','Identification of signatories')
    }
    validateResidencePermit(){
        return cy.get('#ui-id-4 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(4)').should('contain','Residence permit')
    }
    validateReferences(){
        return cy.get('#ui-id-4 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(5)').should('contain','independent and satisfactory references')
    }
    validateUtilityBill(){
        return cy.get('#ui-id-4 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(6)').should('contain','Public Utility Receipt dated within the last three months')
    }
    validateAvailableChannel966EazyBanking(){
        return cy.get('#ui-id-6 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(1)').should('contain','*966# EazyBanking')
    }
    validateAvailableChannelZenithInternetBanking(){
        return cy.get('#ui-id-6 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(2)').should('contain','Zenith Internet Banking')
    }
    validateAvailableChannelZenithBankBranch(){
        return cy.get('#ui-id-6 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(3)').should('contain','In-branch')
    }
    validateAvailableChannelZenithDirect(){
        return cy.get('#ui-id-6 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(4)').should('contain','ZenithDirect')
    }
    validateAvailableChannelZenithBankAtm(){
        return cy.get('#ui-id-6 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(5)').should('contain','Zenith Bank ATM')
    }
    validateAvailableChannelZenithMobileBankingApp(){
        return cy.get('#ui-id-6 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(6)').should('contain','Zenith Mobile Banking App')
    }
    validateAvailableChannelZenithBankdebitcard(){
        return cy.get('#ui-id-6 > .container > .row > .cpb_content_element > .cpb-asset-content > ul > :nth-child(7)').should('contain','Zenith Bank debit card')
    }
}
export  default zenithAutomation