Ext.define('SUR.view.Welcome', {
    extend: 'Ext.Panel',
    xtype: 'welcometext',

    config: {
        defaults: {
            styleHtmlContent: true
        },
        items: [{
            html: '<img class="survey_logo" src="touch/resources/images/serve-pets-large.png">',
            style: {
                height: '100px'
            }
        },
        {
            xtype: 'logincard',
            style: {
                height: '200px'
            }
        }]
    }
});