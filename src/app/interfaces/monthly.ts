export interface Monthly {
    ABN:                                             number;
    Acceptances:                                     number;
    "Cash and deposits with financial institutions": number;
    "Deposits by community service organisations":   number;
    "Deposits by financial institutions":            number;
    "Deposits by general government":                number;
    "Deposits by households":                        number;
    "Deposits by non-financial businesses":          number;
    "Institution Name":                              string;
    "Intra-group deposits":                          number | null;
    "Intra-group loans and finance leases":          number | null;
    "Investment securities":                         number;
    "Loans to community service organisations":      number;
    "Loans to financial institutions":               number;
    "Loans to general government":                   number;
    "Loans to households: Credit cards":             number;
    "Loans to households: Housing: Investment":      number;
    "Loans to households: Housing: Owner-occupied":  number;
    "Loans to households: Other":                    number;
    "Loans to non-financial businesses":             number;
    "Negotiable Certificates of Deposit":            number | null;
    "Net acceptances of customers":                  number;
    "Period ":                                       Period;
    "Total long-term borrowings":                    number;
    "Total residents assets":                        number;
    "Total residents deposits":                      number;
    "Total residents loans and finance leases":      number;
    "Total securitised assets on balance sheet":     number;
    "Total short-term borrowings":                   number;
    "Trading securities":                            number;
    index:                                           number;
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
