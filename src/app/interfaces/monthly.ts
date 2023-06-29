export interface Monthly {
    __values__: Values[];
}

export interface Values {
    ABN:      number;
    __data__: Data[];
}

export interface Data {
    abn:                                           number;
    acceptances:                                   number;
    cash_and_deposits_with_financial_institutions: number;
    deposits_by_community_service_organisations:   number;
    deposits_by_financial_institutions:            number;
    deposits_by_general_government:                number;
    deposits_by_households:                        number;
    "deposits_by_non-financial_businesses":        number;
    index:                                         number;
    institution_name:                              string;
    "intra-group_deposits":                        number | null;
    "intra-group_loans_and_finance_leases":        number | null;
    investment_securities:                         number;
    loans_to_community_service_organisations:      number;
    loans_to_financial_institutions:               number;
    loans_to_general_government:                   number;
    loans_to_households_credit_cards:              number;
    loans_to_households_housing_investment:        number;
    "loans_to_households_housing_owner-occupied":  number;
    loans_to_households_other:                     number;
    "loans_to_non-financial_businesses":           number;
    negotiable_certificates_of_deposit:            number | null;
    net_acceptances_of_customers:                  number;
    period:                                        Period;
    "total_long-term_borrowings":                  number;
    total_residents_assets:                        number;
    total_residents_deposits:                      number;
    total_residents_loans_and_finance_leases:      number;
    total_securitised_assets_on_balance_sheet:     number;
    "total_short-term_borrowings":                 number;
    trading_securities:                            number;
}

export enum Period {
    Fri30Sep2022000000GMT = "Fri, 30 Sep 2022 00:00:00 GMT",
    Fri31DEC2021000000GMT = "Fri, 31 Dec 2021 00:00:00 GMT",
    Mon28Feb2022000000GMT = "Mon, 28 Feb 2022 00:00:00 GMT",
    Mon31Jan2022000000GMT = "Mon, 31 Jan 2022 00:00:00 GMT",
    Mon31Oct2022000000GMT = "Mon, 31 Oct 2022 00:00:00 GMT",
    Sat30APR2022000000GMT = "Sat, 30 Apr 2022 00:00:00 GMT",
    Sat31DEC2022000000GMT = "Sat, 31 Dec 2022 00:00:00 GMT",
    Sun31Jul2022000000GMT = "Sun, 31 Jul 2022 00:00:00 GMT",
    Sun31Oct2021000000GMT = "Sun, 31 Oct 2021 00:00:00 GMT",
    Thu30Jun2022000000GMT = "Thu, 30 Jun 2022 00:00:00 GMT",
    Thu30Sep2021000000GMT = "Thu, 30 Sep 2021 00:00:00 GMT",
    Thu31Mar2022000000GMT = "Thu, 31 Mar 2022 00:00:00 GMT",
    Tue30Nov2021000000GMT = "Tue, 30 Nov 2021 00:00:00 GMT",
    Tue31Jan2023000000GMT = "Tue, 31 Jan 2023 00:00:00 GMT",
    Tue31May2022000000GMT = "Tue, 31 May 2022 00:00:00 GMT",
    Wed30Nov2022000000GMT = "Wed, 30 Nov 2022 00:00:00 GMT",
    Wed31Aug2022000000GMT = "Wed, 31 Aug 2022 00:00:00 GMT",
}
