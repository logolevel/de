const pronounsArray = ['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'Sie'];
const verbsArray = ['sagen', 'fragen', 'lieben', 'lachen', 'wohnen', 'singen', 'tanzen', 'spielen', 'machen', 'arbeiten', 'antworten', 'hören'];
const machenArray = ['mache', 'machst', 'macht', 'machen'];
const sagenArray = ['sage', 'sagst', 'sagt', 'sagen'];
const fragenArray = ['frage', 'fragst', 'fragt', 'fragen'];
const liebenArray = ['liebe', 'liebst', 'liebt', 'lieben'];
const lachenArray = ['lache', 'lachst', 'lacht', 'lachen'];
const wohnenArray = ['wohne', 'wohnst', 'wohnt', 'wohnen'];
const singenArray = ['singe', 'singst', 'singt', 'singen'];
const tanzenArray = ['tanze', 'tanzst', 'tanzt', 'tanzen'];
const spielenArray = ['spiele', 'spielst', 'spielt', 'spielen'];
const arbeitenArray = ['arbeite', 'arbeitest', 'arbeitet', 'arbeiten'];
const antwortenArray = ['antworte', 'antwortest', 'antwortet', 'antworten'];
const horenArray = ['höre', 'hörst', 'hört', 'hören'];

export const data = {
    "pronouns": [
        { id: 1, task: 'я', answer: 'ich', pronouns: pronounsArray },
        { id: 2, task: 'ты', answer: 'du', pronouns: pronounsArray },
        { id: 3, task: 'он', answer: 'er', pronouns: pronounsArray },
        { id: 4, task: 'она / они', answer: 'sie', pronouns: pronounsArray },
        { id: 5, task: 'оно', answer: 'es', pronouns: pronounsArray },
        { id: 6, task: 'мы', answer: 'wir', pronouns: pronounsArray },
        { id: 7, task: 'вы', answer: 'ihr', pronouns: pronounsArray },
        { id: 8, task: 'Вы', answer: 'Sie', pronouns: pronounsArray },
    ],
    "verbs": [
        { id: 1, task: 'говорить', answer: 'sagen', variants: verbsArray },
        { id: 2, task: 'спрашивать', answer: 'fragen', variants: verbsArray },
        { id: 2, task: 'любить', answer: 'lieben', variants: verbsArray },
        { id: 2, task: 'смеяться', answer: 'lachen', variants: verbsArray },
        { id: 2, task: 'жить, проживать', answer: 'wohnen', variants: verbsArray },
        { id: 2, task: 'петь', answer: 'singen', variants: verbsArray },
        { id: 2, task: 'танцевать', answer: 'tanzen', variants: verbsArray },
        { id: 2, task: 'играть', answer: 'spielen', variants: verbsArray },
        { id: 2, task: 'делать', answer: 'machen', variants: verbsArray },
        { id: 2, task: 'работать', answer: 'arbeiten', variants: verbsArray },
        { id: 2, task: 'отвечать', answer: 'antworten', variants: verbsArray },
        { id: 2, task: 'слышать', answer: 'hören', variants: verbsArray },
    ],
    "statements": [
        { id: 1, task: 'я делаю', answer: 'ich mache', variants: machenArray, pronouns: pronounsArray },
        { id: 2, task: 'ты делаешь', answer: 'du machst', variants: machenArray, pronouns: pronounsArray },
        { id: 3, task: 'он делает', answer: 'er macht', variants: machenArray, pronouns: pronounsArray },
        { id: 4, task: 'она делает', answer: 'sie macht', variants: machenArray, pronouns: pronounsArray },
        { id: 5, task: 'оно делает', answer: 'es macht', variants: machenArray, pronouns: pronounsArray },
        { id: 6, task: 'мы делаем', answer: 'wir machen', variants: machenArray, pronouns: pronounsArray },
        { id: 7, task: 'вы делаете', answer: 'ihr macht', variants: machenArray, pronouns: pronounsArray },
        { id: 8, task: 'они делают', answer: 'sie machen', variants: machenArray, pronouns: pronounsArray },
        { id: 9, task: 'Вы делаете', answer: 'Sie machen', variants: machenArray, pronouns: pronounsArray },

        { id: 10, task: 'я говорю', answer: 'ich sage', variants: sagenArray, pronouns: pronounsArray },
        { id: 11, task: 'ты говоришь', answer: 'du sagst', variants: sagenArray, pronouns: pronounsArray },
        { id: 12, task: 'он говорит', answer: 'er sagt', variants: sagenArray, pronouns: pronounsArray },
        { id: 13, task: 'она говорит', answer: 'sie sagt', variants: sagenArray, pronouns: pronounsArray },
        { id: 14, task: 'оно говорит', answer: 'es sagt', variants: sagenArray, pronouns: pronounsArray },
        { id: 15, task: 'мы говорим', answer: 'wir sagen', variants: sagenArray, pronouns: pronounsArray },
        { id: 16, task: 'вы говорите', answer: 'ihr sagt', variants: sagenArray, pronouns: pronounsArray },
        { id: 17, task: 'они говорят', answer: 'sie sagen', variants: sagenArray, pronouns: pronounsArray },
        { id: 18, task: 'Вы говорите', answer: 'Sie sagen', variants: sagenArray, pronouns: pronounsArray },

        { id: 11, task: 'я спрашиваю', answer: 'ich frage', variants: fragenArray, pronouns: pronounsArray },
        { id: 12, task: 'ты спрашиваешь', answer: 'du fragst', variants: fragenArray, pronouns: pronounsArray },
        { id: 13, task: 'он спрашивает', answer: 'er fragt', variants: fragenArray, pronouns: pronounsArray },
        { id: 14, task: 'она спрашивает', answer: 'sie fragt', variants: fragenArray, pronouns: pronounsArray },
        { id: 15, task: 'оно спрашивает', answer: 'es fragt', variants: fragenArray, pronouns: pronounsArray },
        { id: 16, task: 'мы спрашивает', answer: 'wir fragen', variants: fragenArray, pronouns: pronounsArray },
        { id: 17, task: 'вы спрашиваете', answer: 'ihr fragt', variants: fragenArray, pronouns: pronounsArray },
        { id: 18, task: 'они спршивают', answer: 'sie fragen', variants: fragenArray, pronouns: pronounsArray },
        { id: 19, task: 'Вы спрашиваете', answer: 'Sie fragen', variants: fragenArray, pronouns: pronounsArray },

        { id: 20, task: 'я люблю', answer: 'ich liebe', variants: liebenArray, pronouns: pronounsArray },
        { id: 21, task: 'ты любишь', answer: 'du liebst', variants: liebenArray, pronouns: pronounsArray },
        { id: 22, task: 'он любит', answer: 'er liebt', variants: liebenArray, pronouns: pronounsArray },
        { id: 23, task: 'она любит', answer: 'sie liebt', variants: liebenArray, pronouns: pronounsArray },
        { id: 24, task: 'оно любит', answer: 'es liebt', variants: liebenArray, pronouns: pronounsArray },
        { id: 25, task: 'мы любит', answer: 'wir lieben', variants: liebenArray, pronouns: pronounsArray },
        { id: 26, task: 'вы любите', answer: 'ihr liebt', variants: liebenArray, pronouns: pronounsArray },
        { id: 27, task: 'они любят', answer: 'sie lieben', variants: liebenArray, pronouns: pronounsArray },
        { id: 28, task: 'Вы любите', answer: 'Sie lieben', variants: liebenArray, pronouns: pronounsArray },

        { id: 29, task: 'я смеюсь', answer: 'ich lache', variants: lachenArray, pronouns: pronounsArray },
        { id: 30, task: 'ты смеёшься', answer: 'du lachst', variants: lachenArray, pronouns: pronounsArray },
        { id: 31, task: 'он смеётся', answer: 'er lacht', variants: lachenArray, pronouns: pronounsArray },
        { id: 32, task: 'она смеётся', answer: 'sie lacht', variants: lachenArray, pronouns: pronounsArray },
        { id: 33, task: 'оно смеётся', answer: 'es lacht', variants: lachenArray, pronouns: pronounsArray },
        { id: 34, task: 'мы смеёмся', answer: 'wir lachen', variants: lachenArray, pronouns: pronounsArray },
        { id: 35, task: 'вы смеётесь', answer: 'ihr lacht', variants: lachenArray, pronouns: pronounsArray },
        { id: 36, task: 'они смеются', answer: 'sie lachen', variants: lachenArray, pronouns: pronounsArray },
        { id: 37, task: 'Вы смеётесь', answer: 'Sie lachen', variants: lachenArray, pronouns: pronounsArray },

        { id: 38, task: 'я живу', answer: 'ich wohne', variants: wohnenArray, pronouns: pronounsArray },
        { id: 39, task: 'ты живёшь', answer: 'du wohnst', variants: wohnenArray, pronouns: pronounsArray },
        { id: 40, task: 'он живёт', answer: 'er wohnt', variants: wohnenArray, pronouns: pronounsArray },
        { id: 41, task: 'она живёт', answer: 'sie wohnt', variants: wohnenArray, pronouns: pronounsArray },
        { id: 42, task: 'оно живёт', answer: 'es wohnt', variants: wohnenArray, pronouns: pronounsArray },
        { id: 43, task: 'мы живём', answer: 'wir wohnen', variants: wohnenArray, pronouns: pronounsArray },
        { id: 44, task: 'вы живёте', answer: 'ihr wohnt', variants: wohnenArray, pronouns: pronounsArray },
        { id: 45, task: 'они живут', answer: 'sie wohnen', variants: wohnenArray, pronouns: pronounsArray },
        { id: 46, task: 'Вы живёте', answer: 'Sie wohnen', variants: wohnenArray, pronouns: pronounsArray },

        { id: 47, task: 'я пою', answer: 'ich singe', variants: singenArray, pronouns: pronounsArray },
        { id: 48, task: 'ты поёшь', answer: 'du singst', variants: singenArray, pronouns: pronounsArray },
        { id: 49, task: 'он поёт', answer: 'er singt', variants: singenArray, pronouns: pronounsArray },
        { id: 50, task: 'она поёт', answer: 'sie singt', variants: singenArray, pronouns: pronounsArray },
        { id: 51, task: 'оно поёт', answer: 'es singt', variants: singenArray, pronouns: pronounsArray },
        { id: 52, task: 'мы поём', answer: 'wir singen', variants: singenArray, pronouns: pronounsArray },
        { id: 53, task: 'вы поёте', answer: 'ihr singt', variants: singenArray, pronouns: pronounsArray },
        { id: 54, task: 'они поют', answer: 'sie singen', variants: singenArray, pronouns: pronounsArray },
        { id: 55, task: 'Вы поёте', answer: 'Sie singen', variants: singenArray, pronouns: pronounsArray },

        { id: 56, task: 'я танцую', answer: 'ich tanze', variants: tanzenArray, pronouns: pronounsArray },
        { id: 57, task: 'ты танцуешь', answer: 'du tanzst', variants: tanzenArray, pronouns: pronounsArray },
        { id: 58, task: 'он танцует', answer: 'er tanzt', variants: tanzenArray, pronouns: pronounsArray },
        { id: 59, task: 'она танцует', answer: 'sie tanzt', variants: tanzenArray, pronouns: pronounsArray },
        { id: 60, task: 'оно танцует', answer: 'es tanzt', variants: tanzenArray, pronouns: pronounsArray },
        { id: 61, task: 'мы танцуем', answer: 'wir tanzen', variants: tanzenArray, pronouns: pronounsArray },
        { id: 62, task: 'вы танцуете', answer: 'ihr tanzt', variants: tanzenArray, pronouns: pronounsArray },
        { id: 63, task: 'они танцуют', answer: 'sie tanzen', variants: tanzenArray, pronouns: pronounsArray },
        { id: 64, task: 'Вы танцуете', answer: 'Sie tanzen', variants: tanzenArray, pronouns: pronounsArray },

        { id: 65, task: 'я играю', answer: 'ich spiele', variants: spielenArray, pronouns: pronounsArray },
        { id: 66, task: 'ты играешь', answer: 'du spielst', variants: spielenArray, pronouns: pronounsArray },
        { id: 67, task: 'он играет', answer: 'er spielt', variants: spielenArray, pronouns: pronounsArray },
        { id: 68, task: 'она играет', answer: 'sie spielt', variants: spielenArray, pronouns: pronounsArray },
        { id: 69, task: 'оно играет', answer: 'es spielt', variants: spielenArray, pronouns: pronounsArray },
        { id: 70, task: 'мы играем', answer: 'wir spielen', variants: spielenArray, pronouns: pronounsArray },
        { id: 71, task: 'вы играете', answer: 'ihr spielt', variants: spielenArray, pronouns: pronounsArray },
        { id: 72, task: 'они играют', answer: 'sie spielen', variants: spielenArray, pronouns: pronounsArray },
        { id: 73, task: 'Вы играете', answer: 'Sie spielen', variants: spielenArray, pronouns: pronounsArray },

        { id: 74, task: 'я работаю', answer: 'ich arbeite', variants: arbeitenArray, pronouns: pronounsArray },
        { id: 75, task: 'ты работаешь', answer: 'du arbeitest', variants: arbeitenArray, pronouns: pronounsArray },
        { id: 76, task: 'он работает', answer: 'er arbeitet', variants: arbeitenArray, pronouns: pronounsArray },
        { id: 77, task: 'она работает', answer: 'sie arbeitet', variants: arbeitenArray, pronouns: pronounsArray },
        { id: 78, task: 'оно работает', answer: 'es arbeitet', variants: arbeitenArray, pronouns: pronounsArray },
        { id: 79, task: 'мы работаем', answer: 'wir arbeiten', variants: arbeitenArray, pronouns: pronounsArray },
        { id: 80, task: 'вы работаете', answer: 'ihr arbeitet', variants: arbeitenArray, pronouns: pronounsArray },
        { id: 81, task: 'они работают', answer: 'sie arbeiten', variants: arbeitenArray, pronouns: pronounsArray },
        { id: 82, task: 'Вы работаете', answer: 'Sie arbeiten', variants: arbeitenArray, pronouns: pronounsArray },

        { id: 83, task: 'я отвечаю', answer: 'ich antworte', variants: antwortenArray, pronouns: pronounsArray },
        { id: 84, task: 'ты отвечаешь', answer: 'du antwortest', variants: antwortenArray, pronouns: pronounsArray },
        { id: 85, task: 'он отвечает', answer: 'er antwortet', variants: antwortenArray, pronouns: pronounsArray },
        { id: 86, task: 'она отвечает', answer: 'sie antwortet', variants: antwortenArray, pronouns: pronounsArray },
        { id: 87, task: 'оно отвечает', answer: 'es antwortet', variants: antwortenArray, pronouns: pronounsArray },
        { id: 88, task: 'мы отвечаем', answer: 'wir antworten', variants: antwortenArray, pronouns: pronounsArray },
        { id: 89, task: 'вы отвечаете', answer: 'ihr antwortet', variants: antwortenArray, pronouns: pronounsArray },
        { id: 90, task: 'они отвечают', answer: 'sie antworten', variants: antwortenArray, pronouns: pronounsArray },
        { id: 91, task: 'Вы отвечаете', answer: 'Sie antworten', variants: antwortenArray, pronouns: pronounsArray },

        { id: 92, task: 'я слышу', answer: 'ich höre', variants: horenArray, pronouns: pronounsArray },
        { id: 93, task: 'ты слышишь', answer: 'du hörst', variants: horenArray, pronouns: pronounsArray },
        { id: 94, task: 'он слышет', answer: 'er hört', variants: horenArray, pronouns: pronounsArray },
        { id: 95, task: 'она слышет', answer: 'sie hört', variants: horenArray, pronouns: pronounsArray },
        { id: 96, task: 'оно слышет', answer: 'es hört', variants: horenArray, pronouns: pronounsArray },
        { id: 97, task: 'мы слышим', answer: 'wir hören', variants: horenArray, pronouns: pronounsArray },
        { id: 98, task: 'вы слышите', answer: 'ihr hört', variants: horenArray, pronouns: pronounsArray },
        { id: 99, task: 'они слышут', answer: 'sie hören', variants: horenArray, pronouns: pronounsArray },
        { id: 100, task: 'Вы слышите', answer: 'Sie hören', variants: horenArray, pronouns: pronounsArray },
    ]
}