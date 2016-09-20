import {Translator} from './Translator';
import {LanguageHandler} from './language/LanguageHandler';

import $ from 'jquery';
import 'materialize';

var fromLanguageId;
var toLanguageId;
var languageIds = LanguageHandler.GetLanguageIds();
function updateText() {
    $('#output-text').text(Translator.Translate($('#input').val(), fromLanguageId, toLanguageId));
}
function selectLanguage(languageId, from) {
    var parent;
    if (from) {
        parent = $('.from-language');
        fromLanguageId = languageId;
        if (fromLanguageId == toLanguageId) {
            selectLanguage(languageIds.filter(id => { return id !== fromLanguageId; })[0], false);
        }
    } else {
        parent = $('.to-language');
        toLanguageId = languageId;
        if (fromLanguageId == toLanguageId) {
            selectLanguage(languageIds.filter(id => { return id !== toLanguageId; })[0], true);
        }
    }


    parent.find('.change-language').removeClass('disabled');
    parent.find('[data-language-id=' + languageId + ']').addClass('disabled');
}
$(document).ready(() => {
    $('.tooltipped').tooltip({ delay: 50 });

    $('#input').keyup(updateText);



    languageIds.forEach(id => {
        $('.languages').append('<a data-language-id="' + id + '" class="change-language waves-effect waves-light btn click-to-toggle">' + id + '</a>');
        $('.change-language').click((e) => {
            updateText();
            selectLanguage($(e.target).attr('data-language-id'), $(e.target).parent().hasClass('from-language'));
        });
    });
    selectLanguage('Wiichaeller', true);
    selectLanguage('Deutsch', false);

});
