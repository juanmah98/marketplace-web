export interface Historical {
    __values__: Values[];
}

export interface Values {
    ABN:      number;
    __data__: Data[];
}

export interface Data {
    abn:                                                                         number;
    acceptances:                                                                 number;
    acceptances_of_customers:                                                    number;
    "bonds_notes_and_long-term_borrowings":                                      string;
    cash_and_liquid_assets:                                                      number;
    certificates_of_deposit:                                                     number;
    "deposits_from_community_service_organisations_and_non-profit_institutions": number;
    deposits_from_financial_corporations:                                        number;
    deposits_from_general_government:                                            number;
    deposits_from_households:                                                    number;
    "deposits_from_non-financial_corporations":                                  number;
    due_to_clearing_houses_and_financial_institutions:                           number;
    gross_loans_and_advances:                                                    number;
    id:                                                                          number;
    index:                                                                       number;
    institution_name:                                                            string;
    "intra-group_loans_and_advances":                                            number;
    investment_securities:                                                       number;
    "loans_to_community_service_organisations_and_non-profit_institutions":      number;
    loans_to_financial_corporations:                                             number;
    loans_to_general_government:                                                 number;
    loans_to_households_housing_investment:                                      number;
    "loans_to_households_housing_owner-occupied":                                number;
    loans_to_households_other:                                                   number;
    "loans_to_non-financial_corporations":                                       number;
    other_borrowings:                                                            number;
    other_deposit_accounts:                                                      number;
    other_investments:                                                           number;
    outstanding_principal_balance_of_securitised_assets:                         number;
    outstanding_value_of_all_assets_that_have_been_securitised:                  null;
    period:                                                                      Period;
    total_deposit:                                                               number;
    total_deposits:                                                              number;
    total_gross_loans_and_advances:                                              number;
    total_resident_assets:                                                       number;
    trading_securities:                                                          number;
    value_of_housing_loans_securitised:                                          number;
    value_of_housing_loans_securitised_during_the_month:                         null;
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
