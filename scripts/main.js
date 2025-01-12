(function () {
	const currentWords = document.querySelector('.box').dataset.words;

	const wordsArray = {
		"pronouns" : {
			"ich": "я",
			"du": "ты",
			"er": "он",
			"sie": "она / они",
			"es": "оно",
			"wir": "мы",
			"ihr": "вы",
			"Sie": "Вы",
		},
		"verbs" : {
			"sagen": "говорить",
			"fragen": "спрашивать",
			"lieben": "любить",
			"lachen": "смеяться",
			"wohnen": "жить, проживать",
			"singen": "петь",
			"tanzen": "танцевать",
			"spielen": "играть",
			"machen": "делать",
			"arbeiten": "работать",
			"antworten": "отвечать",
			"hören": "слышать",
		}
	}

	const words = Object.assign({}, wordsArray[currentWords]);

	let counters = {
		'counter-1-vocabulary': 0
	};

	let progresses = {
		'counter-1-vocabulary': 0
	};

	const timeout = 1000;

	const taskField = document.querySelector('.box-task--js');
	const variants = document.querySelector('.box-variants--js');
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

	let current = getRandomEntryFromObject(words);

	function getRandomEntryFromObject(obj) {
		const entries = Object.entries(obj);
		const randomIndex = Math.floor(Math.random() * entries.length);
		const [key, value] = entries[randomIndex];

		return { key, value };
	}

	function updateCurrent() {
		current = getRandomEntryFromObject(words)
	}

	function disableBlock(element) {
		element.classList.add('block-disabled');
	}

	function enableBlock(element) {
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

	function generateVariants(obj) {
		let entries = Object.entries(obj);
		const currentArray = Object.values(current);

		// Shuffle the entries array
		for (let i = entries.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[entries[i], entries[j]] = [entries[j], entries[i]];
		}

		// If there are fewer than 9 items, repeat the entries to make up the difference
		while (entries.length < 9) {
			entries = entries.concat(entries);
		}

		// Limit to exactly 9 items
		const limitedEntries = entries.slice(0, 9);

		// If the current item is missing after slicing, replace a random entry with it
		if (!limitedEntries.some(([key]) => key === currentArray[0])) {
			const randomIndex = Math.floor(Math.random() * 9);
			limitedEntries[randomIndex] = currentArray;
		}

		// append to Fragment
		for (const [key, value] of limitedEntries) {
			const item = variantBtnTemplate.content.cloneNode(true);
		
			item.querySelector('button').textContent = `${key}`;
			variantButtonsFragment.append(item);
		}
		
		// variants.innerHTML = ''; back this variant and change HTML correctly
		// append to the HTML
		variants.append(variantButtonsFragment);
	}

	function checkVariantInput() {
		if (taskField.textContent === words[inputVariant.textContent]) {
			inputVariant.classList.remove('error-color');
			inputVariant.classList.add('success-color');

			disableBlock(variants);

			setTimeout(() => {
				inputVariant.classList.remove('success-color');
				clearVariantValue();
				updateCurrent();
				modifyCounter('counter-1-vocabulary', 'increment');
				updateProgress(counters['counter-1-vocabulary'], ['counter-1-vocabulary']);
				variants.innerHTML = '';
				generateVariants(words);

				if (progresses['counter-1-vocabulary'] >= 100) {
					disableBlock(variants);
					setFinishMsg();
					showRefreshBtn();
				} else {
					setTaskValue(current.value);
					setCorrectValue(current.key);
					enableBlock(variants);
				}
			}, timeout);
		} else {
			inputVariant.classList.add('error-color');
			disableBlock(variants);

			setTimeout(() => {
				showCorrectMsg();
				modifyCounter('counter-1-vocabulary', 'decrement');
				updateProgress(counters['counter-1-vocabulary'], ['counter-1-vocabulary']);
			}, timeout)
		}
	}

	function modifyCounter(counterName, operation) {
		if (!(counterName in counters)) {
			console.error(`Counter "${counterName}" does not exist.`);
			return;
		}

		if (operation === "increment") {
			counters[counterName]++;
		} else if (operation === "decrement") {
			if (counters[counterName] > 0) {
				counters[counterName]--;
			}
		} else {
			console.error(`Invalid operation "${operation}". Use "increment" or "decrement".`);
			return;
		}
	}

	function updateProgress(value, progressName) {
		const fullValue = 12;
		const progress = ((value * 100) / fullValue).toFixed();

		progresses[progressName] = progress;

		if (progresses[progressName] >= 100) {
			progressContent.textContent = 'Завершено';
		} else {
			progressValue.textContent = progress;
		}

		progressBar.style.width = `${progress}%`;
	}

	/* RUN */
	setTaskValue(current.value);
	setCorrectValue(current.key);
	generateVariants(words);

	/* Listeners */
	variants.addEventListener('click', function(e) {
		if (e.target.classList.contains('variant-btn')) {
			inputVariant.textContent = `${e.target.textContent}`;
			checkVariantInput();
			hideIntensiveMsg();
		}
	});

	correctVariant.addEventListener('click', function() {
		hideCorrectMsg();
		clearVariantValue();
		enableBlock(variants);
		variants.innerHTML = '';
		generateVariants(words);
	});

})();
