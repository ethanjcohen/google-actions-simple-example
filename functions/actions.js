let test = {
	value: 0
};

module.exports = {
	LIST_MOVIES: ({ _ }, say) => {
		say(`${test.value++} Some awesome movies are Ant Man and The Wasp, Jurassic World, and Solo`);
	},
	SOLO: ({ _ }, say) => {
		say('Its a star wars movie about Hon Solo');
	}
}
