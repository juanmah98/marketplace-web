// To parse this data:
//
//   import { Convert } from "./file";
//
//   const answer = Convert.toAnswer(json);

export interface Answer {
    userId:     number;
    questionId: number;
    answer:     AnswerClass;
}

export interface AnswerClass {
    additionalComents:  string;
    answerDescription:  string;
    answerGroup:        string;
    answerGroupDisplay: string;
    answerName:         string;
    answerOptionId:     number;
    answerType:         string;
    sysActive:          number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toAnswer(json: string): Answer[] {
        return JSON.parse(json);
    }

    public static answerToJson(value: Answer[]): string {
        return JSON.stringify(value);
    }
}
