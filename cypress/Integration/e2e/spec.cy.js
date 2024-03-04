///<reference types = 'cypress'/>

import zenithAutomation from "../pageObject";
const ZenithAutomation = new zenithAutomation

describe("Zenith Technical Assessment",()=>{
    it("Testing Specific Functionalities",()=>{
        ZenithAutomation.visitUrl()
        ZenithAutomation.verifyUrl()
        ZenithAutomation.clickContinueButton()

        ZenithAutomation.selectDropdown()
        ZenithAutomation.selectsPersonalMenu()
        ZenithAutomation.selectsBankAccounts()
        ZenithAutomation.selectsCurrentAccount()

        ZenithAutomation.validateZeroAccountopeningBalance()
        ZenithAutomation.validateInternetBanking()
        ZenithAutomation.validateZenithMobileBankingApp()
        ZenithAutomation.validate966Eazybanking()
        ZenithAutomation.validateMasterCardVisaVerveDebitCard()
        ZenithAutomation.validateMasterCardVisaVerveDebitCard()
        ZenithAutomation.validateEmailSMSAlertz()

        ZenithAutomation.validateAccountOpening()
        ZenithAutomation.validatePassport()
        ZenithAutomation.validateSignatories()
        ZenithAutomation.validateResidencePermit()
        ZenithAutomation.validateReferences()
        ZenithAutomation.validateUtilityBill()

        ZenithAutomation.validateAvailableChannel966EazyBanking()
        ZenithAutomation.validateAvailableChannelZenithInternetBanking()
        ZenithAutomation.validateAvailableChannelZenithBankBranch()
        ZenithAutomation.validateAvailableChannelZenithDirect()
        ZenithAutomation.validateAvailableChannelZenithBankAtm()
        ZenithAutomation.validateAvailableChannelZenithBankdebitcard()

    })
})