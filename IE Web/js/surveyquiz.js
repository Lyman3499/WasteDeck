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
                    html: "You are about to start quiz. <br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "bin_question",
                    title: "In which bin can we dispose the baking paper?",
                    choices: [
                        "Cummingled recycling bin",
                        "General waste bin",
                        "Glass recycling bin",
                        "Food & garden bin"
                    ],
                    correctAnswer: "General waste bin"
                },
                {
                    "type": "html",
                    "visibleIf": "{bin_question}='General waste bin'",
                    "html": "Great Job!"
                },
                {
                    "type": "html",
                    "visibleIf": "{bin_question}='Cummingled recycling bin' or {bin_question}='Glass recycling bin' or {bin_question}='Food & garden bin'",
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
                        "Plastic bottle",
                        "Stainless steel bottle",
                        "Glass bottle",
                        "None of the above"
                    ],
                    correctAnswer: "Glass bottle"
                },
                {
                    "type": "html",
                    "visibleIf": "{plastic_alt}='Glass bottle'",
                    "html": "Great Job!"
                },
                {
                    "type": "html",
                    "visibleIf": "{plastic_alt}='Plastic bottle' or {plastic_alt}='Stainless steel bottle' or {plastic_alt}='None of the above'",
                    "html": "Some Suggestion"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "pot_farming",
                    title: "What vegetables can be grown in pots?",
                    choices: [
                        "Tomatoes",
                        "Garlic",
                        "Coriander",
                        "All of the above"
                    ],
                    correctAnswer: "All of the above"
                },
                {
                    "type": "html",
                    "visibleIf": "{pot_farming}='All of the above'",
                    "html": "Great Job!"
                },
                {
                    "type": "html",
                    "visibleIf": "{pot_farming}='Tomatoes' or {pot_farming}='Garlic' or {pot_farming}='Coriander'",
                    "html": "Some Suggestion"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "compost",
                    title: "What is the alternative to utilize your kitchen waste?",
                    choices: [
                        "Avoid purchasing unnecessary food items",
                        "Composting",
                        "Pot farming",
                        "None of the above",
                    ],
                    correctAnswer: "Composting"
                },
                {
                    "type": "html",
                    "visibleIf": "{compost}='Composting'",
                    "html": "Great Job!"
                },
                {
                    "type": "html",
                    "visibleIf": "{compost}='Avoid purchasing unnecessary food items' or {compost}='Pot farming' or {compost}='None of the above'",
                    "html": "Some Suggestion"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "food_waste",
                    title: "What are good ways to avoid food waste?",
                    choices: [
                        "Avoid purchasing unnecessary food items",
                        "Store food at correct temperatures",
                        "Save leftover food",
                        "All of the above",
                    ],
                    correctAnswer: "All of the above"
                },
                {
                    "type": "html",
                    "visibleIf": "{food_waste}='All of the above'",
                    "html": "Great Job!"
                },
                {
                    "type": "html",
                    "visibleIf": "{food_waste}='Store food at correct temperatures' or {food_waste}='Save leftover food' or {food_waste}='Avoid purchasing unnecessary food items'",
                    "html": "Some Suggestion"
                }
            ]
        }
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

