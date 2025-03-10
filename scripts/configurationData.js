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
			{ id: 6, name: 'Вопросы со словом: Что?', details: 'Прошедшее, настоящее и будущее время. Что?(Was?)' },
			{ id: 7, name: 'Вопросы со словами: Кто?, Где?, Когда?', details: 'Прошедшее, настоящее и будущее время. Wer?(Кто?), Wo?(Где?), Wann?(Когда?)' },
			{ id: 8, name: 'Словарь урока', details: 'Вчера, сегодня, завтра, сейчас' },
			{ id: 9, name: 'Вопросы со словами: Почему?, Как?', details: 'Настоящее время. Warum?(Почему?), Wie?(Как?)' },
			{ id: 10, name: 'Словарь урока', details: 'Местоимения в родительном и винительном: меня, тебя, его, её, это, нас, вас, Вас' },
			{ id: 11, name: 'Предложения с местоимениями', details: 'Местоимения в родительном и винительном на практике' },
		],
	],
	content: [
		[
			{ id: 1, words: 'pronouns', timeline: false, rule: {type: 'words', title: 'Местоимения'} },
			{ id: 2, words: 'verbs', timeline: false , rule: {type: 'words', title: 'Глоголы'} },
			{ id: 3, words: 'statements', timeline: false, rule: {type: ['present'], title: ''} },
			{ id: 4, words: 'questions', timeline: false, rule: {type: ['present'], title: ''} },
			{ id: 5, words: 'negatives', timeline: false, rule: {type: ['present'], title: ''} },
			{ id: 6, words: 'futures', timeline: false, rule: {type: ['present'], title: ''} },
			{ id: 7, words: 'irregularVerbSein', timeline: false , rule: {type: 'words', title: 'Неправильный глогол <b>Sein</b>'} },
			{ id: 8, words: 'irregularVerbHaben', timeline: false , rule: {type: 'words', title: 'Неправильный глогол <b>Haben</b>'} },
		],
		[
			{ id: 1, words: 'greetingPhrases', timeline: false, rule: {type: 'words', title: 'Словарь урока'} },
			{ id: 2, words: 'pastStatements', timeline: false, rule: {type: ['past'], title: 'Прошедшее время'} },
			{ id: 3, words: 'pastNegativeStatements', timeline: false, rule: {type: ['past'], title: 'Прошедшее время'} },
			{ id: 4, words: 'pastQuestionStatements', timeline: false, rule: {type: ['past'], title: 'Прошедшее время'} },
			{ id: 5, words: 'questionWords', timeline: false, rule: {type: 'words', title: 'Словарь урока'} },
			{ id: 6, words: 'questionWas', timeline: true, rule: {type: ['questionWordPresent', 'questionWordPast'], title: 'Прошедшее, настоящее и будущее врем'} },
			{ id: 7, words: 'questionWerWoWann', timeline: true, rule: {type: ['questionWordPresent', 'questionWordPast'], title: 'Прошедшее, настоящее и будущее врем'} },
			{ id: 8, words: 'tensesAuxiliaryWords', timeline: false, rule: {type: 'words', title: 'Словарь урока'} },
			{ id: 9, words: 'questionWarumWie', timeline: true, rule: {type: ['questionWordPresent'], title: 'Настоящее время'} },
			{ id: 10, words: 'genitiveCaseWords', timeline: false, rule: {type: 'words', additionalWords: 'pronouns', title: 'Словарь урока'} },
			{ id: 11, words: 'genitiveCaseSentences', timeline: false, rule: {type: ['present'], title: 'Настоящее время'} },
		],
	],
};