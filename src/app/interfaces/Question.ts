// To parse this data:
//
//   import { Convert, Question } from "./file";
//
//   const question = Convert.toQuestion(json);

export interface Question {
    additionalComents:    string;
    answerOptionId:       number;
    id:                   number;
    questionDescription:  string;
    questionGroup:        string;
    questionGroupDisplay: string;
    questionName:         string;
    questionType:         string;
    sysActive:            number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toQuestion(json: string): Question {
        return JSON.parse(json);
    }

    public static questionToJson(value: Question): string {
        return JSON.stringify(value);
    }
}
