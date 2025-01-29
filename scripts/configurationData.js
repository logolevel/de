export const data = {
	tasks: [
		{ id: 1, name: 'Урок 1', description: 'Местоимения и глаголы. Утверждения, отрицания, вопросы.' },
	],
	submenus: [
		[
			{ id: 1, name: 'Словарь урока', details: 'Местоимения' },
			{ id: 2, name: 'Словарь урока', details: 'Глоголы' },
			{ id: 3, name: 'Утверждения', details: 'Настоящее время' },
			{ id: 4, name: 'Вопросы', details: 'Настоящее время' },
			{ id: 5, name: 'Отрицания', details: 'Настоящее время' },
			{ id: 5, name: 'Будущее время', details: 'Утверждения, Вопросы, Отрицания. Используем слово "morgen" - "завтра"' },
		],
		[
			{ id: 1, name: 'Submenu 3-1', details: 'Details for Submenu 3-1' },
		],
	],
	content: [
		[
			{ id: 1, words: 'pronouns', tenses: false, rule: 'words' },
			{ id: 2, words: 'verbs', tenses: false , rule: 'words'},
			{ id: 3, words: 'statements', tenses: true, rule: 'simple-verbs' },
			{ id: 4, words: 'questions', tenses: true, rule: 'simple-verbs' },
			{ id: 5, words: 'negatives', tenses: true, rule: 'simple-verbs' },
			{ id: 5, words: 'futures', tenses: true, rule: 'simple-verbs' },
		],
	],
};