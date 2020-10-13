Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    showProgressBar: "bottom",
    showPrevButton: true,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to start quiz by history. <br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "bin_question",
                    title: "In which bin can we dispose the baking paper?",
                    choices: [
                        "Cummingled Recycling Bin",
                        "General Waste Bin",
                        "Glass Recycling Bin",
                        "Food & Garden Bin"
                    ],
                    correctAnswer: "General Waste Bin"
                },
                {
                    "type": "html",
                    "visibleIf": "{bin_question}='General Waste Bin'",
                    "html": "Great Job!"
                },
                {
                    "type": "html",
                    "visibleIf": "{bin_question}='Cummingled Recycling Bin' or {bin_question}='Glass Recycling Bin' or {bin_question}='Food & Garden Bin'",
                    "html": "Some Suggestion"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "plastic_alt",
                    title: "Select the correct alternative for the plastic milk container mentioned on this site?",
                    choicesOrder: "random",
                    choices: [
                        "Plastic Bottle",
                        "Stainless Steel Bottle",
                        "Glass Bottle",
                        "None of the above"
                    ],
                    correctAnswer: "Glass Bottle"
                },
                {
                    "type": "html",
                    "visibleIf": "{plastic_alt}='Glass Bottle'",
                    "html": "Great Job!"
                },
                {
                    "type": "html",
                    "visibleIf": "{plastic_alt}='Plastic Bottle' or {plastic_alt}='Stainless Steel Bottle' or {plastic_alt}='None of the above'",
                    "html": "Some Suggestion"
                }
            ]
        },
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

//survey
//    .onComplete
//    .add(function (result) {
//        document
//            .querySelector('#surveyResult')
//            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
//    });

$("#surveyElement").Survey({ model: survey });

