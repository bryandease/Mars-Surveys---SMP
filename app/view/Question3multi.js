Ext.define('SUR.view.Question3multi', {
    extend: 'Ext.Panel',
    xtype: 'question3multi',

    requires: [
        'SUR.view.Question3multi1',
        'SUR.view.Question3multi2',
        'SUR.view.Question3multi3'
    ],

    config: {
        height: 400,
        layout: 'card',
        items: [
            { xtype: 'question3multi1' },
            { xtype: 'question3multi2' },
            { xtype: 'question3multi3' }
        ]
    }
});