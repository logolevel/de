export const data = {
	tasks: [
		{ id: 1, name: 'Урок 1', description: 'Местоимения и глаголы. Утверждения, отрицания, вопросы.' },
	],
	submenus: [
		[
			{ id: 1, name: 'Словарь урока', details: 'Местоимения' },
			{ id: 2, name: 'Словарь урока', details: 'Глоголы' },
			{ id: 2, name: 'Утверждения', details: 'Настоящее время' },
		],
		[
			{ id: 1, name: 'Submenu 3-1', details: 'Details for Submenu 3-1' },
		],
	],
	content: [
		[
			{ id: 1, words: 'pronouns', tenses: false, rules: false },
			{ id: 2, words: 'verbs', tenses: false , rules: false},
			{ id: 3, words: 'statements', tenses: true, rules: true },
		],
	],
};