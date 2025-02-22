export const data = {
	tasks: [
		{ id: 1, name: 'Урок 1', description: 'Местоимения и глаголы. Настоящее время: утверждения, отрицания, вопросы.' },
		{ id: 2, name: 'Урок 2', description: 'Этикет. Прошедшее время: утверждения, отрицания, вопросы. Вопросительные слова: Was, Wer, Wo, Wann, Warum, Wie, Wen' },
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
			{ id: 5, name: 'Словарь урока', details: 'Вопросительные слова: Was, Wer, Wo, Wann, Warum, Wie, Wen' },
			{ id: 6, name: 'Вопросы со словом Was', details: 'Прошедшее, настоящее и будущее время' },
			{ id: 7, name: 'Вопросы со словами Wer, Wo, Wann', details: 'Прошедшее, настоящее и будущее время' },
		],
	],
	content: [
		[
			{ id: 1, words: 'pronouns', timeline: false, rule: {type: 'words', title: 'Местоимения'} },
			{ id: 2, words: 'verbs', timeline: false , rule: {type: 'words', title: 'Глоголы'} },
			{ id: 3, words: 'statements', timeline: false, rule: {type: 'simple', title: ''} },
			{ id: 4, words: 'questions', timeline: false, rule: {type: 'simple', title: ''} },
			{ id: 5, words: 'negatives', timeline: false, rule: {type: 'simple', title: ''} },
			{ id: 6, words: 'futures', timeline: false, rule: {type: 'simple', title: ''} },
			{ id: 7, words: 'irregularVerbSein', timeline: false , rule: {type: 'words', title: 'Неправильный глогол <b>Sein</b>'} },
			{ id: 8, words: 'irregularVerbHaben', timeline: false , rule: {type: 'words', title: 'Неправильный глогол <b>Haben</b>'} },
		],
		[
			{ id: 1, words: 'greetingPhrases', timeline: false, rule: {type: 'words', title: 'Словарь урока'} },
			{ id: 2, words: 'pastStatements', timeline: false, rule: {type: 'past', title: 'Прошедшее время'} },
			{ id: 3, words: 'pastNegativeStatements', timeline: false, rule: {type: 'past', title: 'Прошедшее время'} },
			{ id: 4, words: 'pastQuestionStatements', timeline: false, rule: {type: 'past', title: 'Прошедшее время'} },
			{ id: 5, words: 'questionWords', timeline: false, rule: {type: 'words', title: 'Словарь урока'} },
			{ id: 6, words: 'questionWas', timeline: true, rule: {type: 'past', title: 'Прошедшее, настоящее и будущее врем'} },
			{ id: 7, words: 'questionWerWoWann', timeline: true, rule: {type: 'past', title: 'Прошедшее, настоящее и будущее врем'} },
		],
	],
};