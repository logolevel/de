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
			{ id: 1, name: 'Словарь урока', details: 'Этикет: приветствие, благодарность, прощание' },
			{ id: 2, name: 'Утверждения', details: 'Прошедшее время' },
			{ id: 3, name: 'Отрицания', details: 'Прошедшее время' },
			{ id: 4, name: 'Вопросы', details: 'Прошедшее время' },
			{ id: 5, name: 'Словарь урока', details: 'Вопросительные слова' },
		],
	],
	content: [
		[
			{ id: 1, words: 'pronouns', tenses: false, rule: {type: 'words', title: 'Местоимения'} },
			{ id: 2, words: 'verbs', tenses: false , rule: {type: 'words', title: 'Глоголы'} },
			{ id: 3, words: 'statements', tenses: true, rule: {type: 'simple', title: ''} },
			{ id: 4, words: 'questions', tenses: true, rule: {type: 'simple', title: ''} },
			{ id: 5, words: 'negatives', tenses: true, rule: {type: 'simple', title: ''} },
			{ id: 6, words: 'futures', tenses: true, rule: {type: 'simple', title: ''} },
			{ id: 7, words: 'irregularVerbSein', tenses: false , rule: {type: 'words', title: 'Неправильный глогол <b>Sein</b>'} },
			{ id: 8, words: 'irregularVerbHaben', tenses: false , rule: {type: 'words', title: 'Неправильный глогол <b>Haben</b>'} },
		],
		[
			{ id: 1, words: 'greetingPhrases', tenses: false, rule: {type: 'words', title: 'Словарь урока'} },
			{ id: 2, words: 'pastStatements', tenses: false, rule: {type: 'past', title: 'Прошедшее время'} },
			{ id: 3, words: 'pastNegativeStatements', tenses: false, rule: {type: 'past', title: 'Прошедшее время'} },
			{ id: 4, words: 'pastQuestionStatements', tenses: false, rule: {type: 'past', title: 'Прошедшее время'} },
			{ id: 5, words: 'questionWords', tenses: false, rule: {type: 'words', title: 'Словарь урока'} },
		],
	],
};