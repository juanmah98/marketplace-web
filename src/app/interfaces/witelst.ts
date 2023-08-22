
export interface Witelist {
    business_email: string;
    company_name:   string;
    country:        string;
    firstname:      string;
    id:             number;
    job_title:      string;
    lastname:       string;
    phone:          number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toWitelist(json: string): Witelist[] {
        return JSON.parse(json);
    }

    public static witelistToJson(value: Witelist[]): string {
        return JSON.stringify(value);
    }
}
