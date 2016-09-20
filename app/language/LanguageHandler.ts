import {ILanguage} from './Language';

export module LanguageHandler {
    var languages: ILanguage[] = [];
    export function Register(language: ILanguage) {
        languages.push(language);
    }
    export function GetLanguageById(id: string) {
        return languages.filter((language) => language.id == id)[0];
    }
}