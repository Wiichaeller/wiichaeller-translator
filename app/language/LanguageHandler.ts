import {ILanguage} from './Language';

export module LanguageHandler {
    var languages: ILanguage[] = [];
    export function Register(language: ILanguage) {
        languages.push(language);
    }
    export function GetLanguageById(id: String) {
        return languages.filter((language) => language.id == id)[0];
    }
    export function GetLanguageIds(): String[] {
        return languages.map((language) => { return language.id; });
    }
}