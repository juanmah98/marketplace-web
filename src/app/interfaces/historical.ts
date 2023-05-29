export interface Historical {
    " Deposits from general government":                                         number;
    ABN:                                                                         number;
    Acceptances:                                                                 number;
    "Acceptances of customers":                                                  number;
    "Bonds, notes and long-term borrowings":                                     number;
    "Cash and liquid assets":                                                    number;
    "Certificates of deposit":                                                   number;
    "Deposits from community service organisations and non-profit institutions": number;
    "Deposits from financial corporations":                                      number;
    "Deposits from households":                                                  number;
    "Deposits from non-financial corporations":                                  number;
    "Due to clearing houses and financial institutions":                         number;
    "Gross loans and advances":                                                  number;
    "Institution Name":                                                          string;
    "Intra-group loans and advances":                                            number;
    "Investment securities":                                                     number;
    "Loans to community service organisations and non-profit institutions":      number;
    "Loans to financial corporations":                                           number;
    "Loans to general government":                                               number;
    "Loans to households: Housing: Investment":                                  number;
    "Loans to households: Housing: Owner-occupied":                              number;
    "Loans to households: Other":                                                number;
    "Loans to non-financial corporations":                                       number;
    "Other borrowings":                                                          number;
    "Other deposit accounts":                                                    number;
    "Other investments":                                                         number;
    "Outstanding principal balance of securitised assets":                       number;
    "Outstanding value of all assets that have been securitised":                null;
    Period:                                                                      Period;
    "Total deposit":                                                             number;
    "Total deposits":                                                            number;
    "Total gross loans and advances":                                            number;
    "Total resident assets":                                                     number;
    "Trading securities":                                                        number;
    "Value of housing loans securitised":                                        number;
    "Value of housing loans securitised during the month":                       null;
    id:                                                                          number;
    index:                                                                       number;
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
