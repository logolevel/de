import { data } from './data.js';

export function runMain() {
	const box = document.querySelector('.box--js');
	const backToSubMenuBtn = document.querySelector('.back-to-sub-menu--js');
	const backToContentBtn = document.querySelector('.back-to-content--js');
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
	const theoryBlock = document.querySelector('.theory--js');
	const theoryBtn = document.querySelector('.theory-btn--js');
	const theoryWords = document.querySelector('.theory-words--js');
	const theoryRules = document.querySelector('.theory-rules--js');
	
	// Templates
	const variantBtnTemplate = document.querySelector('#variant-btn-template');
	const variantButtonsFragment = document.createDocumentFragment();
	const theoryTemplate = document.querySelector('#theory-template');
	const theoryTemplateFragment = document.createDocumentFragment();

	// Constants
	const timeout = 1000;
	const questions = 12;

	// Get current object
	const currentWords = box.dataset.words;
	const words = data[currentWords];

	const isRules = theoryBtn.dataset.rules === 'true';

	let counter = 0;
	let progress = 0;
	let current = getRandomObject(words);
	let currentInput = '';

	function getRandomObject(array) {
		if (array.length === 0) return null;
		const randomIndex = Math.floor(Math.random() * array.length);
	
		return array[randomIndex];
	}

	function updateCurrent() {
		current = getRandomObject(words);
	}

	function addClass(element, value) {
		element.classList.add(value);
	}

	function removeClass(element, value) {
		element.classList.remove(value);
	}

	function setTaskValue(value) {
		taskField.textContent = value;
	}

	function setCorrectValue(key) {
		correctVariantText.textContent = key;
	}

	function setFinishMsg() {
		// TODO: Create argument and variable to keep translations
		taskField.innerHTML = '<div class="final-msg"><div>Ура! 🏆</div><div>Задание пройдено! 👍</div><div/>';
	}

	function showRefreshBtn() {
		boxInput.remove();
		removeClass(refreshBtnContainer, 'hidden')
	}

	function clearVariantValue() {
		inputVariant.textContent = '';
	}

	function clearElement(element) {
		element.innerHTML = ''
	}

	function showCorrectMsg() {
		removeClass(correctVariant, 'hidden');
	}

	function hideCorrectMsg() {
		addClass(correctVariant, 'hidden')
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

	function generateTheory() {
		if (isRules) {
			clearElement(theoryRules);
			theoryRules.innerHTML = `
				<h2 class="theory-title">Простая форма глагола <b>machen</b></h2>
				<div class="grid-table">
					<!-- Titles -->
					<div class="grid-cell grid-title">Вопрос</div>
					<div class="grid-cell grid-title">Утверждение</div>
					<div class="grid-cell grid-title">Отрицание</div>
					
					<!-- Content -->
					<div class="grid-cell">
						<div>mach<span>e</span> ich?</div>
					</div>
					<div class="grid-cell">
						<div>ich mach<span>e</span></div>
					</div>
					<div class="grid-cell third-column">+ nicht</div>

					<div class="grid-cell">
						<div>mach<span>st</span> du?</div>
					</div>
					<div class="grid-cell">
						<div>du mach<span>st</span></div>
					</div>

					<div class="grid-cell">
						<div>mach<span>t</span></div>
						<div class="surround sys m-left">
							<div>er?</div>
							<div>sie?</div>
							<div>es?</div>
						</div>
					</div>
					<div class="grid-cell">
						<div class="surround sys m-right">
							<div>er</div>
							<div>sie</div>
							<div>es</div>
						</div>
						<div>mach<span>t</span></div>
					</div>

					<div class="grid-cell">
						<div>mach<span>en</span> wir?</div>
					</div>
					<div class="grid-cell">
						<div>wir mach<span>en</span></div>
					</div>

					<div class="grid-cell">
						<div>mach<span>t</span> ihr?</div>
					</div>
					<div class="grid-cell">
						<div>ihr mach<span>t</span></div>
					</div>

					<div class="grid-cell">
						<div>mach<span>en</span></div>
						<div class="surround sys m-left">
							<div>sie?</div>
							<div>Sie?</div>
						</div>
					</div>
					<div class="grid-cell">
						<div class="surround sys m-right">
							<div>sie</div>
							<div>Sie</div>
						</div>
						<div>mach<span>en</span></div>
					</div>
				</div>
			`
		} else {
			clearElement(theoryWords);

			for (const key of words) {
				const item = theoryTemplate.content.cloneNode(true);
			
				item.querySelector('.theory-words-task--js').textContent = `${key.task}`;
				item.querySelector('.theory-words-answer--js').textContent = `${key.answer}`;
				theoryTemplateFragment.append(item);
			}
	
			theoryWords.append(theoryTemplateFragment);
		}
	}

	function countWords(inputString) {
		const words = inputString.trim().split(/\s+/);

		return words.length;
	}

	function checkVariantInput() {
		const isEqualCountOfWords = countWords(inputVariant.textContent) === countWords(current.answer);

		if(isEqualCountOfWords) {

			if (inputVariant.textContent === current.answer) {
				removeClass(inputVariant, 'error-color')
				addClass(inputVariant, 'success-color')
				addClass(variantsBox, 'block-disabled');

				setTimeout(() => {
					removeClass(inputVariant, 'success-color');
					clearElement(inputVariant);
					updateCurrent();
					modifyCounter('increment');
					updateProgress(counter);
					clearElement(variantsBox);
					generateRandomWords(current);

					if (progress >= 100) {
						addClass(variantsBox, 'block-disabled');
						setFinishMsg();
						showRefreshBtn();
					} else {
						setTaskValue(current.task);
						setCorrectValue(current.answer);
						removeClass(variantsBox, 'block-disabled');
					}
				}, timeout);
			} else {
				addClass(inputVariant, 'error-color');
				addClass(variantsBox, 'block-disabled');

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
		const progressNumber = ((value * 100) / questions).toFixed();

		progress = progressNumber;

		if (progress >= 100) {
			//TODO: Create argument and variable for translation
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

			//Join string in case sentence contain more than one word
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
		removeClass(variantsBox, 'block-disabled');
		clearElement(variantsBox);
		generateRandomWords(current);
		removeClass(inputVariant, 'error-color')
	});

	theoryBtn.addEventListener('click', function() {
		generateTheory();
		addClass(box, 'hidden');
		removeClass(theoryBlock, 'hidden');
		addClass(theoryBtn, 'hidden-disabled');
		addClass(backToSubMenuBtn, 'hidden');
		removeClass(backToContentBtn, 'hidden');
	});

	backToContentBtn.addEventListener('click', function() {
		addClass(theoryBlock, 'hidden');
		removeClass(box, 'hidden');
		removeClass(theoryBtn, 'hidden-disabled');
		removeClass(backToSubMenuBtn, 'hidden');
		addClass(backToContentBtn, 'hidden');
	});

};
