import {LanguageHandler} from './language/LanguageHandler';
import './data/languages/Wiichaeller';
import './data/languages/Deutsch';

export module Translator {
    export function Translate(input: string, inputLanguage: string, outputLanguage: string): string {
        var output: string = input.toLowerCase();

        output = LanguageHandler
            .GetLanguageById(inputLanguage)
            .Translate(input)
            .To(outputLanguage);

        return output;
    }
}