Ext.define('SUR.view.Instructions', {
    extend: 'Ext.Panel',
    xtype: 'instructions',

    config: {
        fullscreen: true,
        cls: 'wooden',
        padding: 4,
        defaults: {
            margin: 5
        },
        items: [{
            html: '<img class="survey_logo" src="touch/resources/images/serve-pets-large.png"> <p class="intro_text">Welcome, <span id="username"></span>, to the "Serve More Pets" interactive survey. You will be asked a series of questions - then given the opportunity to give your feedback at the end of the survey.  Click the button below to get started.</p><input type="hidden" id="five_three" value="">',
            style: {
                height: '100px'
            }
        }, {
            action: 'firstquestion',
            xtype: 'button',
            ui: 'confirm',
            text: 'Continue',
            width: 300,
            height: 50,
            style: {
                fontSize: '130%'
            },
            centered: true
        }]
    }
});