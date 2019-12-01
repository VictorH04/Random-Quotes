// ! Immidiate invoked function expression
(function() {
	// The quotes
	const quotes = [
		{
			quote:
				"Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
			author: ' Life'
		},
		{
			quote:
				'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all',
			author: '- John Kenneth Galbraith'
		},
		{
			quote: 'God save me from my friends. I can protect myself from my enemies.',
			author: '- Claude Louis Hector de Villars '
		},
		{
			quote: 'The price of anything is the amount of life you exchange for it.',
			author: '- David Thoreau'
		},
		{
			quote:
				'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ',
			author: 'Charles Lindbergh'
		},
		{
			quote:
				'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.',
			author: '- Tyne Daly'
		},

		{
			quote:
				'The most intriguing people you will encounter in this life are the people who had insights about you, that you didnt know about yourself.',

			author: '- Shannon L. Alder'
		},

		{
			quote: 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.',
			author: '- Albert Einstein'
		},

		{
			quote: 'So many books, so little time.',
			author: '- Frank Zappa'
		},

		{
			quote: 'Be the change that you wish to see in the world.',
			author: '- Mahatma Gandhi'
		},

		{
			quote: 'Only put off until tomorrow what you are willing to die having left undone.',
			author: '- Pablo Picasso'
		},

		{
			quote: 'If you want to be happy, be.',
			author: '- Leo Tolstoy'
		},

		{
			quote: 'Every day above ground is a good day.',
			author: '- Tony Montana'
		},

		{
			quote: 'Those who want respect give respect.',
			author: '- Tony Soprano'
		},

		{
			quote: 'Don’t compare yourself with anyone in this world… if you do so, you are insulting yourself.',
			author: '- Bill Gates'
		},

		{
			quote: 'Life is not fair — get used to it!',
			author: '- Bill Gates'
		},

		{
			quote: 'Stay hungry. Stay foolish.',
			author: '- Steve Jobs'
		},

		{
			quote: 'If you do tomorrow what you did today, you will get tomorrow what you got today.',
			author: '- Benjamin Franklin'
		}
	];

	// Selecting the button
	const btn = document.getElementById('generate-btn');

	// lastValue variable so the quotes dont repeat
	let lastValue;

	// Adding an eventListener to the button
	btn.addEventListener('click', generateQuote);

	function generateQuote() {
		// Creating a random number
		let random = Math.floor(Math.random() * quotes.length);
		console.log(random);

		// IF statement so they dont repeat.
		if (random === lastValue) {
			return generateQuote();
		}
		lastValue = random;

		// Selecting the quote and the author
		document.getElementById('quote').textContent = quotes[random].quote;
		document.querySelector('.author').textContent = quotes[random].author;
	}
})();
