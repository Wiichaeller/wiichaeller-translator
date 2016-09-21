import {LanguageHandler} from './language/LanguageHandler';
import './data/languages/Wiichaeller';
import './data/languages/Deutsch';

export module Translator {
    export function Translate(input: String, inputLanguage: String, outputLanguage: String): String {
        var output: String = input.toLowerCase();

        output = LanguageHandler
            .GetLanguageById(inputLanguage)
            .Translate(input)
            .To(outputLanguage);

        return output;
    }
}