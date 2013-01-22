Ext.define('SUR.view.Question1', {
    extend: 'Ext.Panel',
    xtype: 'question1',

    config: {
        fullscreen: true,
        padding: 4,
        items: [{
            html: '<img class="survey_logo" src="touch/resources/images/serve-pets-large.png"> <h1>Question 1:</h1><p class="question_text">Do you have a better understanding of our Portfolio Strategy?</p><input type="hidden" class="question" id="question_1" value="">',
            style: {
                height: '100px'
            }
        },
            {
                cls: 'buttonhold',
                items: [
                    {
                        answerID: 'question_1',
                        answer: 'yes',
                        go: 3,
                        cls: 'inline',
                        action: 'answer',
                        xtype: 'button',
                        ui: 'confirm',
                        text: 'Yes',
                        width: 150,
                        height: 50,
                        style: {
                            fontSize: '130%',
                            marginRight: '20px'
                        }
                    }, {
                        answerID: 'question_1',
                        answer: 'no',
                        go: 3,
                        cls: 'inline',
                        action: 'answer',
                        xtype: 'button',
                        ui: 'decline',
                        text: 'No',
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