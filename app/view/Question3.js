Ext.define('SUR.view.Question3', {
    extend: 'Ext.Panel',
    xtype: 'question3',

    config: {
        fullscreen: false,
        padding: 4,
        items: [{
            html: '<img class="survey_logo" src="touch/resources/images/serve-pets-large.png"> <h1>Question 3:</h1><p class="question_text">Match our brand categories to the correct list of brands:</p><input type="hidden" class="question" id="question_3" value="1">',
            style: {
                height: '100px'
            }
        },
            { xtype: 'question3multi' }
        ]
    }
});