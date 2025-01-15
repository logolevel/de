const pronounsArray = ['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'Sie'];
const verbsArray = ['sagen', 'fragen', 'lieben', 'lachen', 'wohnen', 'singen', 'tanzen', 'spielen', 'machen', 'arbeiten', 'antworten', 'hören'];
const machenArray = ['mache', 'machst', 'macht', 'machen'];
const sagenArray = ['sage', 'sagst', 'sagt', 'sagen'];

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
    ]
}