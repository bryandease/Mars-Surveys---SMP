Ext.define('SUR.view.Question2', {
    extend: 'Ext.Panel',
    xtype: 'question2',

    config: {
        fullscreen: true,
        cls: 'wooden',
        padding: 4,
        items: [{
            html: '<img class="survey_logo" src="touch/resources/images/serve-pets-large.png"> <h1>Question 2:</h1><p class="question_text">Do you feel consumer insights and customer insights are fueling our growth?</p><input type="hidden" class="question" id="question_2" value="">',
            style: {
                height: '100px'
            }
        },
            {
                cls: 'buttonhold',
                items: [
                    {
                        answerID: 'question_2',
                        answer: 'yes',
                        go: 4,
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
                        answerID: 'question_2',
                        answer: 'no',
                        go: 4,
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