export interface Historical {
    depositsFromGeneralGovernment:                                     number;
    abn:                                                               number;
    acceptances:                                                       number;
    acceptancesOfCustomers:                                            number;
    bondsNotesAndLongTermBorrowings:                                   number;
    cashAndLiquidAssets:                                               number;
    certificatesOfDeposit:                                             number;
    depositsFromCommunityServiceOrganisationsAndNonProfitInstitutions: number;
    depositsFromFinancialCorporations:                                 number;
    depositsFromHouseholds:                                            number;
    depositsFromNonFinancialCorporations:                              number;
    dueToClearingHousesAndFinancialInstitutions:                       number;
    grossLoansAndAdvances:                                             number;
    institutionName:                                                   string;
    intraGroupLoansAndAdvances:                                        number;
    investmentSecurities:                                              number;
    loansToCommunityServiceOrganisationsAndNonProfitInstitutions:      number;
    loansToFinancialCorporations:                                      number;
    loansToGeneralGovernment:                                          number;
    loansToHouseholdsHousingInvestment:                                number;
    loansToHouseholdsHousingOwnerOccupied:                             number;
    loansToHouseholdsOther:                                            number;
    loansToNonFinancialCorporations:                                   number;
    otherBorrowings:                                                   number;
    otherDepositAccounts:                                              number;
    otherInvestments:                                                  number;
    outstandingPrincipalBalanceOfSecuritisedAssets:                    number;
    outstandingValueOfAllAssetsThatHaveBeenSecuritised:                null;
    period:                                                            Period;
    totalDeposit:                                                      number;
    totalDeposits:                                                     number;
    totalGrossLoansAndAdvances:                                        number;
    totalResidentAssets:                                               number;
    tradingSecurities:                                                 number;
    valueOfHousingLoansSecuritised:                                    number;
    valueOfHousingLoansSecuritisedDuringTheMonth:                      null;
    id:                                                                number;
    index:                                                             number;
}

export enum Period {
    Fri30Nov2018000000GMT = "Fri, 30 Nov 2018 00:00:00 GMT",
    Fri31Aug2018000000GMT = "Fri, 31 Aug 2018 00:00:00 GMT",
    Fri31May2019000000GMT = "Fri, 31 May 2019 00:00:00 GMT",
    Mon30APR2018000000GMT = "Mon, 30 Apr 2018 00:00:00 GMT",
    Mon31DEC2018000000GMT = "Mon, 31 Dec 2018 00:00:00 GMT",
    Sat30Jun2018000000GMT = "Sat, 30 Jun 2018 00:00:00 GMT",
    Sat31Mar2018000000GMT = "Sat, 31 Mar 2018 00:00:00 GMT",
    Sun30Jun2019000000GMT = "Sun, 30 Jun 2019 00:00:00 GMT",
    Sun30Sep2018000000GMT = "Sun, 30 Sep 2018 00:00:00 GMT",
    Sun31Mar2019000000GMT = "Sun, 31 Mar 2019 00:00:00 GMT",
    Thu28Feb2019000000GMT = "Thu, 28 Feb 2019 00:00:00 GMT",
    Thu31Jan2019000000GMT = "Thu, 31 Jan 2019 00:00:00 GMT",
    Thu31May2018000000GMT = "Thu, 31 May 2018 00:00:00 GMT",
    Tue30APR2019000000GMT = "Tue, 30 Apr 2019 00:00:00 GMT",
    Tue31Jul2018000000GMT = "Tue, 31 Jul 2018 00:00:00 GMT",
    Wed31Oct2018000000GMT = "Wed, 31 Oct 2018 00:00:00 GMT",
}
