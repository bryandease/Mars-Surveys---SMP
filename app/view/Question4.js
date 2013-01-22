Ext.define('SUR.view.Question4', {
    extend: 'Ext.Panel',
    xtype: 'question4',

    config: {
        fullscreen: false,
        padding: 4,
        items: [{
            html: '<img class="survey_logo" src="touch/resources/images/serve-pets-large.png"> <h1>Question 4:</h1><p class="question_text">Which are the 5 Brand Priorities for 2012?</p><div class="multi_wrap"><p class="question_multi_text">&nbsp;</p><p class="question_list">A: PEDIGREE® Dry, CRAVE®, Savory Delights™, Care & Treats, and SHEBA® Launch</p><p class="question_list">B: PEDIGREE® Wet, Exclusive Brands, CESAR®, Temptations®, and SHEBA® Launch</p><p class="question_list">C: PEDIGREE® Dry, Exclusive Brands, CESAR®, Care & Treats, and SHEBA® Launch</p></div><input type="hidden" class="question" id="question_4" value="1">',
            style: {
                height: '100px'
            }
        },
                {
                    cls: 'buttonhold_three',
                    style: {
                        margin: '220px auto 0 auto'
                    },
                    items: [
                        {
                            answerID: 'question_4',
                            answer: 'a',
                            correct: false,
                            go: 6,
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
                            answerID: 'question_4',
                            answer: 'b',
                            correct: false,
                            go: 6,
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
                            answerID: 'question_4',
                            answer: 'c',
                            correct: true,
                            go: 6,
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