(function () {
	// Words
	const currentWords = document.querySelector('.box').dataset.words;

	//TODO: Move data to another js file
	const pronounsArray = ['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'Sie'];
	const verbsArray = ['sagen', 'fragen', 'lieben', 'lachen', 'wohnen', 'singen', 'tanzen', 'spielen', 'machen', 'arbeiten', 'antworten', 'hören'];
	const machenArray = ['mathe', 'machst', 'macht', 'machen'];
	const sagenArray = ['sage', 'sagst', 'sagt', 'sagen'];

	//TODO: Add other sentenses to the statement key
	const sentenses = {
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
			{ id: 1, task: 'я делаю', answer: 'ich mathe', variants: machenArray, pronouns: pronounsArray },
			{ id: 2, task: 'ты делаешь', answer: 'du machst', variants: machenArray, pronouns: pronounsArray },
			{ id: 3, task: 'он делает', answer: 'er macht', variants: machenArray, pronouns: pronounsArray },
			{ id: 4, task: 'она делает', answer: 'sie macht', variants: machenArray, pronouns: pronounsArray },
			{ id: 5, task: 'оно делает', answer: 'es machen', variants: machenArray, pronouns: pronounsArray },
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

	const words = sentenses[currentWords];

	let counter = 0;
	let progress = 0;
	let current = getRandomObject(words);
	let currentInput = '';

	const timeout = 1000;

	const taskField = document.querySelector('.box-task--js');
	const variantsBox = document.querySelector('.box-variants--js');
	const inputVariant = document.querySelector('.box-input-text--js');
	const correctVariant = document.querySelector('.correct-variant--js');
	const correctVariantText = document.querySelector('.correct-variant-text--js');
	const progressValue = document.querySelector('.progress-value--js');
	const progressBar = document.querySelector('.progress-bar--js');
	const progressContent = document.querySelector('.progress-content--js');
	const intensiveMsg = document.querySelector('.incentive-msg--js');
	const boxInput = document.querySelector('.box-input--js');
	const refreshBtnContainer = document.querySelector('.refresh-btn-container--js');
	const variantBtnTemplate = document.querySelector('#variant-btn-template');
	const variantButtonsFragment = document.createDocumentFragment();

	function getRandomObject(array) {
		if (array.length === 0) return null;
		const randomIndex = Math.floor(Math.random() * array.length);
	
		return array[randomIndex];
	}

	function updateCurrent() {
		current = getRandomObject(words);
	}

	function disableBlock(element) {
		//TODO: create universal function to adding class
		element.classList.add('block-disabled');
	}

	function enableBlock(element) {
		//TODO: create universal function to removing class
		element.classList.remove('block-disabled');
	}

	function setTaskValue(value) {
		taskField.textContent = value;
	}

	function setCorrectValue(key) {
		correctVariantText.textContent = key;
	}

	function setFinishMsg() {
		taskField.innerHTML = '<div class="final-msg"><div>Ура! 🏆</div><div>Задание пройдено! 👍</div><div/>';
	}

	function showRefreshBtn() {
		boxInput.remove();
		refreshBtnContainer.classList.remove('hidden');
	}

	function clearVariantValue() {
		inputVariant.textContent = '';
	}

	function showCorrectMsg() {
		correctVariant.classList.remove('hidden');
	}

	function hideCorrectMsg() {
		correctVariant.classList.add('hidden');
	}

	function hideIntensiveMsg() {
		if (intensiveMsg) {
			intensiveMsg.remove();
		}
		return;
	}

	function generateRandomWords(obj) {
		const { answer, variants, pronouns } = obj;

		// Split the answer into words
		const answerWords = answer.split(" ");
	
		// Combine `variants` and `pronouns` if they exist, or use an empty array
		const combinedWords = [
			...(variants || []),
			...(pronouns || [])
		];
	
		// If combinedWords is empty, throw an error
		if (combinedWords.length === 0) {
			throw new Error("No valid words in 'variants' or 'pronouns'.");
		}
	
		// Filter out duplicates and ensure the answerWords are included
		const uniqueWords = Array.from(new Set(combinedWords.concat(answerWords)));
	
		// Ensure `answerWords` are included in the final selection
		const randomSelection = [...answerWords];
	
		while (randomSelection.length < 9) {
			const randomWord = uniqueWords[Math.floor(Math.random() * uniqueWords.length)];
			randomSelection.push(randomWord); // Add words to fill up
		}
	
		// If still less than 9 (unlikely but handle edge case), repeat variants or pronouns
		while (randomSelection.length < 9) {
			const fallbackSource = variants?.length ? variants : pronouns;
			const fallbackWord = fallbackSource[Math.floor(Math.random() * fallbackSource.length)];
			randomSelection.push(fallbackWord);
		}
	
		// Shuffle the final array
		for (let i = randomSelection.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[randomSelection[i], randomSelection[j]] = [randomSelection[j], randomSelection[i]];
		}

		// append to Fragment
		for (const key of randomSelection) {
			const item = variantBtnTemplate.content.cloneNode(true);
		
			item.querySelector('button').textContent = `${key}`;
			variantButtonsFragment.append(item);
		}
		
		//TODO: Refactor HTML
		// variantsBox.innerHTML = ''; back this variant and change HTML correctly
		// append to the HTML
		variantsBox.append(variantButtonsFragment);
	}

	function countWords(inputString) {
		const words = inputString.trim().split(/\s+/);

		return words.length;
	}

	function checkVariantInput() {
		const isEqualCountOfWords = countWords(inputVariant.textContent) === countWords(current.answer);

		if(isEqualCountOfWords) {

			if (inputVariant.textContent === current.answer) {
				//TODO: to function
				inputVariant.classList.remove('error-color');
				inputVariant.classList.add('success-color');

				disableBlock(variantsBox);

				setTimeout(() => {
					inputVariant.classList.remove('success-color');
					clearVariantValue();
					updateCurrent();
					modifyCounter('increment');
					updateProgress(counter);
					//TODO: to function
					variantsBox.innerHTML = '';
					generateRandomWords(current);

					if (progress >= 100) {
						disableBlock(variantsBox);
						setFinishMsg();
						showRefreshBtn();
					} else {
						setTaskValue(current.task);
						setCorrectValue(current.answer);
						enableBlock(variantsBox);
					}
				}, timeout);
			} else {
				inputVariant.classList.add('error-color');
				disableBlock(variantsBox);

				setTimeout(() => {
					showCorrectMsg();
					modifyCounter('decrement');
					updateProgress(counter);
				}, timeout);
			}
		}
	}

	function modifyCounter(operation) {
		if (operation === "increment") {
			counter++;
		} else if (operation === "decrement") {
			if (counter > 0) {
				counter--;
			}
		} else {
			console.error(`Invalid operation "${operation}". Use "increment" or "decrement".`);
			return;
		}
	}

	function updateProgress(value) {
		const fullValue = 12;
		const progressNumber = ((value * 100) / fullValue).toFixed();

		progress = progressNumber;

		if (progress >= 100) {
			progressContent.textContent = 'Завершено';
		} else {
			progressValue.textContent = progressNumber;
		}

		progressBar.style.width = `${progressNumber}%`;
	}

	/* RUN */
	setTaskValue(current.task);
	setCorrectValue(current.answer);
	generateRandomWords(current);

	/* Listeners */
	variantsBox.addEventListener('click', function(e) {
		if (e.target.classList.contains('variant-btn')) {
			currentInput = e.target.textContent;

			//TODO: to function ??
			if (inputVariant.textContent.length === 0) {
				inputVariant.textContent = `${currentInput}`;
			} else {
				inputVariant.textContent = `${inputVariant.textContent} ${currentInput}`;
			}

			checkVariantInput();
			hideIntensiveMsg();
		}
	});

	correctVariant.addEventListener('click', function() {
		hideCorrectMsg();
		clearVariantValue();
		enableBlock(variantsBox);
		//TODO: to function
		variantsBox.innerHTML = '';
		generateRandomWords(current);
		//TODO: to function
		inputVariant.classList.remove('error-color');
	});

})();
