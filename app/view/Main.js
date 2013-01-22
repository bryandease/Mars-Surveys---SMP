Ext.define('SUR.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'mainpanel',

    requires: [
        'SUR.view.Welcome',
        'SUR.view.Login',
        'SUR.view.Instructions',
        'SUR.view.Question1',
        'SUR.view.Question2',
        'SUR.view.Question3',
        'SUR.view.Question3multi',
        'SUR.view.Question4',
        'SUR.view.Thoughts',
        'SUR.view.Finished'
    ],

    config: {
        layout: 'card',
        fullscreen: true,
        items: [
            { xtype: 'welcometext' },
            { xtype: 'instructions' },
            { xtype: 'question1' },
            { xtype: 'question2' },
            { xtype: 'question3' },
            { xtype: 'question4' },
            { xtype: 'thoughts' },
            { xtype: 'finished' }
        ]
    }
});