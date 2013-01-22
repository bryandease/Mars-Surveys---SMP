Ext.define('SUR.view.Question3multi2', {
    extend: 'Ext.Panel',
    xtype: 'question3multi2',

    config: {
        padding: 4,
        items: [{
            html: '<div class="multi_wrap"><p class="question_multi_text">Which brands represent the <b>DEVELOP</b> category?</p><p class="question_list">A: WHISKAS® Dry and Wet, The Goodlife Recipe® and CRAVE®</p><p class="question_list">B: Temptations®, CESAR® Wet, DENTASTIX®, PEDIGREE® Dry Special Care, SHEBA®</p><p class="question_list">C: PEDIGREE® Adult Dry and PEDIGREE® Wet</p></div>',
            style: {
                height: '100px'
            }
        },
            {
                cls: 'buttonhold_three',
                items: [
                    {
                        answerID: 'question_3',
                        answer: 'a',
                        correct: false,
                        go: 2,
                        cls: 'inline',
                        action: 'answermulti',
                        xtype: 'button',
                        ui: 'confirm',
                        text: 'A',
                        width: 150,
                        height: 50,
                        style: {
                            fontSize: '130%',
                            marginRight: '20px'
                        }
                    }, {
                        answerID: 'question_3',
                        answer: 'b',
                        correct: false,
                        go: 2,
                        cls: 'inline',
                        action: 'answermulti',
                        xtype: 'button',
                        ui: 'decline',
                        text: 'B',
                        width: 150,
                        height: 50,
                        style: {
                            fontSize: '130%',
                            marginRight: '20px'
                        }
                    }, {
                        answerID: 'question_3',
                        answer: 'c',
                        correct: true,
                        go: 2,
                        cls: 'inline',
                        action: 'answermulti',
                        xtype: 'button',
                        ui: 'orange',
                        text: 'C',
                        width: 150,
                        height: 50,
                        style: {
                            fontSize: '130%'
                        }
                    }
                ]
            }
        ]
    }
});