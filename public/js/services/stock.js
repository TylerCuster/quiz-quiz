window.angular.module('quizquiz.services.stock', [])
	.factory('Stock', function() {
		var stock = {};
		stock.quizzes = [
			{ 
				quizId: 1,
				quizTitle: "World Leaders",
				quiz: [
					{
						question: "Who is Prime Minister of the United Kingdom?",
						choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
						correctAnswer:0
					},
					{
						question: "Who is the President of the United States?",
						choices: ["2 Chainz", "Barack Obama", "An ostrich"],
						correctAnswer:1
					},
					{
						question: "Who holds the button?",
						choices: ["It's a cardigan button", "Trevor"],
						correctAnswer:1
					},
					{
						question: "Here's a freeby",
						choices: ["Select this to earn a FREE point"],
						correctAnswer:0
					},
					{
						question: "How many acorns in tree with three acorns, twelve leaves, twenty-five branches, sixty-five legumes?",
						choices: ["One or two", "Acorn", "Peanut is a legume", "Acorns", "Demons"],
						correctAnswer:3
					}
				]
			},
			{
				quizId: 2,
				quizTitle: "Dogs",
				quiz: [
					{
						question: "Who is holding a small dog at this very moment?",
						choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
						correctAnswer:0
					},
					{
						question: "Who has been the lowest below sea level?",
						choices: ["2 Chainz", "Barack Obama", "An ostrich"],
						correctAnswer:1
					},
					{
						question: "Who holds the button?",
						choices: ["It's a cardigan button", "Lue"],
						correctAnswer:1
					},
					{
						question: "Here's a freeby",
						choices: ["Select this to earn a FREE point"],
						correctAnswer:0
					},
					{
						question: "How many acorns in tree with three acorns, twelve leaves, twenty-five branches, sixty-five legumes?",
						choices: ["One or two", "Acorn", "Peanut is a legume", "Acorns", "Demons"],
						correctAnswer:3
					}
				]
			},
			{ 
				quizId: 3,
				quizTitle: "Shrimps",
				quiz: [
					{
						question: "Shump?",
						choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
						correctAnswer:0
					},
					{
						question: "Who is the President of the United States?",
						choices: ["2 Chainz", "Barack Obama", "An ostrich"],
						correctAnswer:1
					},
					{
						question: "Who holds the button?",
						choices: ["It's a cardigan button", "Trevor"],
						correctAnswer:1
					},
					{
						question: "Here's a freeby",
						choices: ["Select this to earn a FREE point"],
						correctAnswer:0
					},
					{
						question: "How many acorns in tree with three acorns, twelve leaves, twenty-five branches, sixty-five legumes?",
						choices: ["One or two", "Acorn", "Peanut is a legume", "Acorns", "Demons"],
						correctAnswer:3
					}
				]
			},
			{ 
				quizId: 4,
				quizTitle: "Cats",
				quiz: [
					{
						question: "What's a better cat name?",
						choices: ["Lumpy Lue", "Walter", "Simple Sally", "JJ Juicy"], 
						correctAnswer:0
					},
					{
						question: "Who is not the President of the United States?",
						choices: ["2 Chainz", "Barack Obama", "An ostrich"],
						correctAnswer:1
					},
					{
						question: "Who holds the button?",
						choices: ["It's a cardigan button", "Trevor"],
						correctAnswer:1
					},
					{
						question: "Here's a freeby",
						choices: ["Select this to earn a FREE point"],
						correctAnswer:0
					},
					{
						question: "How many acorns in tree with three acorns, twelve leaves, twenty-five branches, sixty-five legumes?",
						choices: ["One or two", "Acorn", "Peanut is a legume", "Acorns", "Demons"],
						correctAnswer:3
					}
				]
			}
		];
		return stock;
	});