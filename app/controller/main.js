Ext.define('SUR.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainpanel: 'mainpanel',
            loginform: '#loginform',
            multipanel: 'question3multi',
            thoughts: '#final_thoughts'
        },
        control: {
            'button[action="login"]': {
                tap: 'goLogin'
            },
            'button[action="firstquestion"]': {
                tap: 'firstQuestion'
            },
            'button[action="answer"]': {
                tap: 'saveQuestion'
            },
            'button[action="answermulti"]': {
                tap: 'multiAnswer'
            },
            'button[action="complete"]': {
                tap: 'sendAnswers'
            },
            'button[action="restartapp"]': {
                tap: 'restartApp'
            }
        }
    },

    goLogin: function () {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Logging in...'
        });
        
        var form = this.getLoginform();
        var mainPanel = this.getMainpanel();

        var dh = Ext.DomHelper;
        
        form.submit({
            url: 'http://marketreadytools.com/mars_survey/main/log_in',
            method: 'POST',
            success: function (form, result) {
                Ext.Viewport.unmask();
                Ext.get('username').setHtml(result.name);
                document.getElementById('five_three').value=result.five_three;
                mainPanel.animateActiveItem(1, {type: 'slide', direction: 'left'});
            },
            failure: function () {
                Ext.Viewport.unmask();
                Ext.Msg.alert('Oops! Invalid log in', 'Please try your 5+3 again');
            }
        });
    },

    firstQuestion: function()
    {
        var mainPanel = this.getMainpanel();
        mainPanel.animateActiveItem(2, {type: 'slide', direction: 'left'});
    },

    saveQuestion: function(event)
    {
        var answerID = event.config.answerID;
        var answer = event.config.answer;
        var nextQuestion = event.config.go;

        document.getElementById(answerID).value=answer;

        var mainPanel = this.getMainpanel();
        mainPanel.animateActiveItem(nextQuestion, {type: 'slide', direction: 'left'});
    },

    multiAnswer: function(event)
    {
        var answerID = event.config.answerID;
        var answer = event.config.correct;
        var nextQuestion = event.config.go;

        if (answer === false)
        {
            document.getElementById(answerID).value=0;
        }

        if (nextQuestion > 2)
        {
            var mainPanel = this.getMainpanel();
            mainPanel.animateActiveItem(nextQuestion, {type: 'slide', direction: 'left'});
        }
        else
        {
            var multiPanel = this.getMultipanel();
            multiPanel.animateActiveItem(nextQuestion, {type: 'slide', direction: 'left'});
        }
    },

    sendRequest: function(question, answer, userID)
    {
        Ext.Ajax.request({
            url: 'http://marketreadytools.com/mars_survey/main/save_answers',
            params: {
                associate_id: userID,
                question_id: question,
                answer: answer,
                ipad: 1
            },
            success: function(response){
                var text = response.responseText;
            }
        });
    },

    sendAnswers: function()
    {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Saving Answers...'
        });

        var mainPanel = this.getMainpanel();
        var userID = document.getElementById('five_three').value;        
        var elems = document.getElementsByTagName('*'),i;
        
        for (i in elems)
        {
            if((" "+elems[i].className+" ").indexOf(" question ") > -1)
            {
                this.sendRequest(elems[i].id, elems[i].value, userID);
            }
        }

        var thoughts = this.getThoughts().getValue();

        if (thoughts.length)
        {
            this.sendRequest('question_5', thoughts, userID);
        }

        setTimeout(function()
        {
            Ext.Viewport.unmask();
            mainPanel.animateActiveItem(7, {type: 'slide', direction: 'left'});
        }, 3000);
    },

    restartApp: function()
    {
        location.reload();
    }
});