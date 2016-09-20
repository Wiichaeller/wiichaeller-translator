import {ILanguage} from './Language';
import {LanguageHandler} from './LanguageHandler';
export interface ILanguageTranslator {
    To(id: string): string;
}

export class LanguageTranslator {
    toLanguage: ILanguage;
    input: String;
    constructor(input: String, public fromLanguage: ILanguage) {
        this.input = input.toLowerCase();
    }
    To(id: string) {
        this.toLanguage = LanguageHandler.GetLanguageById(id);

        // Probably overcomplicated algorithm
        Object.keys(this.fromLanguage.data).forEach((propertyName) => {
            let replaceTo: string = Object.keys(this.toLanguage.data).map((key) => {
                return this.toLanguage.data[key] === this.fromLanguage.data[propertyName] ? key : "";
            }).filter(key => { return key !== "" })[0];
            
            this.input = this.input.replace(propertyName, replaceTo);
        });

        return this.input;
    }
}