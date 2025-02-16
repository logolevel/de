export const data = {
	tasks: [
		{ id: 1, name: 'Урок 1', description: 'Местоимения и глаголы. Настоящее время: утверждения, отрицания, вопросы.' },
		{ id: 2, name: 'Урок 2', description: 'Этикет. Прошедшее время: утверждения, отрицания, вопросы.' },
	],
	submenus: [
		[
			{ id: 1, name: 'Словарь урока', details: 'Местоимения' },
			{ id: 2, name: 'Словарь урока', details: 'Глоголы' },
			{ id: 3, name: 'Утверждения', details: 'Настоящее время' },
			{ id: 4, name: 'Вопросы', details: 'Настоящее время' },
			{ id: 5, name: 'Отрицания', details: 'Настоящее время' },
			{ id: 6, name: 'Будущее время', details: 'Утверждения, Вопросы, Отрицания. Используем слово "morgen" - "завтра"' },
			{ id: 7, name: 'Неправильный глогол Sein', details: 'sein - быть' },
			{ id: 8, name: 'Неправильный глогол Haben', details: 'haben - иметь' },
		],
		[
			{ id: 1, name: 'Этикет', details: 'Приветствие, благодарность, прощание' },
		],
	],
	content: [
		[
			{ id: 1, words: 'pronouns', tenses: false, rule: {type: 'words', title: 'Местоимения'} },
			{ id: 2, words: 'verbs', tenses: false , rule: {type: 'words', title: 'Глоголы'} },
			{ id: 3, words: 'statements', tenses: true, rule: {type: 'simple-verbs', title: ''} },
			{ id: 4, words: 'questions', tenses: true, rule: {type: 'simple-verbs', title: ''} },
			{ id: 5, words: 'negatives', tenses: true, rule: {type: 'simple-verbs', title: ''} },
			{ id: 6, words: 'futures', tenses: true, rule: {type: 'simple-verbs', title: ''} },
			{ id: 7, words: 'irregularVerbSein', tenses: false , rule: {type: 'words', title: 'Неправильный глогол <b>Sein</b>'} },
			{ id: 7, words: 'irregularVerbHaben', tenses: false , rule: {type: 'words', title: 'Неправильный глогол <b>Haben</b>'} },
		],
		[
			{ id: 1, words: 'greetingPhrases', tenses: false, rule: {type: 'words', title: 'Этикет'} },
		],
	],
};