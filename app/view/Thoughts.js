Ext.define('SUR.view.Thoughts', {
    extend: 'Ext.Panel',
    xtype: 'thoughts',

    requires: [
        'SUR.view.Thoughtsform'
    ],

    config: {
        fullscreen: true,
        padding: 4,
        items: [{
            html: '<img class="survey_logo" src="touch/resources/images/serve-pets-large.png"><h1>Question 5:</h1><p class="question_text">Tell us what you think! Example: “What does Serve More Pets mean to you?” - then tap the complete button below to complete your survey.</p>',
            style: {
                height: '130px'
            }
        },
        {
            xtype: 'thoughtsform',
            style: {
                position: 'relative',
                top: '85px',
                height: '500px'
            }
        }]
    }
});