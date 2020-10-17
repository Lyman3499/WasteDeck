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
                    "html": "<h4 style = 'background-color:#71bc42; padding:8px; color:#ffffff;'>Correct!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{bin_question}='Cummingled recycling bin' or {bin_question}='Glass recycling bin' or {bin_question}='Food & garden bin'",
                    "html": "<h4 style = 'background-color:#ff0033; padding:8px; color:#ffffff;'>Incorrect answer. Please think again.</h4><b>Recommendation:</b> Please refer to the <a class='quiz_links' target='_blank' href='Waste_Seperation'>Garbage classification page</a> to find out which waste goes into which bin."
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
                    "html": "<h4 style = 'background-color:#71bc42; padding:8px; color:#ffffff;'>Right!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{plastic_alt}='Plastic bottle' or {plastic_alt}='Stainless steel bottle' or {plastic_alt}='None of the above'",
                    "html": "<h4 style = 'background-color:#ff0033; padding:8px; color:#ffffff;'>Incorrect answer. Please think again</h4><b>Recommendation:</b> Please refer to the <a class='quiz_links' target='_blank' href='Plastic_Alternative'>plastic alternative page</a> to find out the different alternatives to plastic food packaging items."
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
                    "html": "<h4 style = 'background-color:#71bc42; padding:8px; color:#ffffff;'>Great Job!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{pot_farming}='Tomatoes' or {pot_farming}='Garlic' or {pot_farming}='Coriander'",
                    "html": "<h4 style = 'background-color:#ff0033; padding:8px; color:#ffffff;'>Incorrect answer. Please think again</h4><b>Recommendation:</b> Please refer to the <a class='quiz_links' target='_blank' href='Pot_Farming'>pot farming page</a> to find out different vegetables you can grow in pots."
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "compost",
                    title: "How can you utilize your kitchen waste?",
                    choices: [
                        "To create compost",
                        "By using it in pot farming",
                        "None of the above",
                    ],
                    correctAnswer: "To create compost"
                },
                {
                    "type": "html",
                    "visibleIf": "{compost}='To create compost'",
                    "html": "<h4 style = 'background-color:#71bc42; padding:8px; color:#ffffff;'>Right!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{compost}='By using it in pot farming' or {compost}='None of the above'",
                    "html": "<h4 style = 'background-color:#ff0033; padding:8px; color:#ffffff;'>Incorrect answer. Please think again</h4><b>Recommendation:</b> Please refer to the <a class='quiz_links' target='_blank' href='Composting'>composting page</a> to find out different kitchen waste that can be used to create compost."
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
                    "html": "<h4 style = 'background-color:#71bc42; padding:8px; color:#ffffff;'>Great Job!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{food_waste}='Store food at correct temperatures' or {food_waste}='Save leftover food' or {food_waste}='Avoid purchasing unnecessary food items'",
                    "html": "<h4 style = 'background-color:#ff0033; padding:8px; color:#ffffff;'>Incorrect answer. Please think again</h4><b>Recommendation:</b> Please refer to the <a class='quiz_links' target='_blank' href='Avoid_Food_Waste'>avoid food waste page</a> to find different ways to avoid food wastage."
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "plant_question",
                    title: "Plants have absorbed almost half of the carbon dioxide that is produced by humans over the last decade?",
                    choices: [
                        "True",
                        "False",
                    ],
                    correctAnswer: "False"
                },
                {
                    "type": "html",
                    "visibleIf": "{plant_question}='False'",
                    "html": "<h4 style = 'background-color:#71bc42; padding:8px; color:#ffffff;'>Correct!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{plant_question}='True'",
                    "html": "<h4 style = 'background-color:#ff0033; padding:8px; color:#ffffff;'>Incorrect answer. Please think again</h4><b>Recommendation:</b> Plants take up about a quarter of the carbon dioxide humans release into the atmosphere over the last decade. Moreover, as the planet's temperature rises more droughts will take place, affecting the amount of water available for plants to grow."
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "carbon_sinks",
                    title: "Which of the following are carbon sinks?",
                    choices: [
                        "Soil and rocks",
                        "Fossil fuels",
                        "Forests",
                        "All of the above",
                    ],
                    correctAnswer: "All of the above"
                },
                {
                    "type": "html",
                    "visibleIf": "{carbon_sinks}='All of the above'",
                    "html": "<h4 style = 'background-color:#71bc42; padding:8px; color:#ffffff;'>Excellent!</h4>"
                },
                {
                    "type": "html",
                    "visibleIf": "{carbon_sinks}='Soil and rocks' or {carbon_sinks}='Fossil fuels' or {carbon_sinks}='Forests'",
                    "html": "<h4 style = 'background-color:#ff0033; padding:8px; color:#ffffff;'>Incorrect answer. Please think again</h4><b>Carbon sinks:</b> They are natural systems that absorb and store atmospheric carbon dioxide. Example: soils and rocks, fossil fuels, forests, and oceans. <br /><b>Carbon sources:</b> They are systems that release carbon dioxide into the atmosphere Example: Cities, Wildfires, and Volcanos. <br /><b>NOTE:</b> Our choices daily affect the amount of carbon dioxide released into the atmosphere which disrupts the balance that exists between natural carbon sinks and sources. This increases our carbon footprint."
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

