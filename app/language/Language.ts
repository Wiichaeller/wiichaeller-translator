import {ILanguageTranslator, LanguageTranslator} from './LanguageTranslator';

export interface ILanguage {
    id: String;
    data: Object;
    Translate(input: string): ILanguageTranslator;
}

export class Language {
    constructor(public id: String, public data: Object) {

    }
    Translate(input: string): ILanguageTranslator {
        return new LanguageTranslator(input, this);
    }
}