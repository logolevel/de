import { state } from './app.js';
import { data } from './data.js';
import { rules } from './rules.js';

export function runMain() {
	const box = document.querySelector('.box--js');
	const backToSubMenuBtn = document.querySelector('.back-to-sub-menu--js');
	const backToContentBtn = document.querySelector('.back-to-content--js');
	const mainBlock = document.querySelector('.main--js');
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
	const manualInputBtnWrapper = document.querySelector('.manual-input-btn-wrapper--js');
	const manualInputBtn = document.querySelector('.manual-input-btn--js');
	const errorMessage = document.getElementById('errorMessage');
	const speechBtn = document.querySelector('.speech-btn--js');
	const currentCounter = document.querySelector('.counter-current--js');
	const totalCounter = document.querySelector('.counter-total--js');
	const timeline = document.querySelector('.timeline--js');
	const timelineItems = timeline.querySelectorAll('.timeline-item');
	
	// Templates
	const variantBtnTemplate = document.querySelector('#variant-btn-template');
	const variantButtonsFragment = document.createDocumentFragment();
	const theoryTemplate = document.querySelector('#theory-template');
	const theoryTemplateFragment = document.createDocumentFragment();

	// Constants
	const timeout = 1500;
	const questions = 12;

	// Current mode
	const writeModeString = mainBlock.dataset.writeMode;
	let isDefaultMode = true;
	let isWriteMode = false;

	if (writeModeString === 'true') {
		isWriteMode = true;
		isDefaultMode = false;
	}

	// Get current object
	const currentWords = box.dataset.words;
	const words = data[currentWords];

	// Get current Rule
	const rule = JSON.parse(theoryBtn.dataset.rule);
	const ruleType = rule.type;
	const ruleTitle = rule.title;

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

	function setElementValue(el, value) {
		el.textContent = value;
	}

	function disableInput(element) {
		element.setAttribute('disabled', 'disabled');
	}

	function enableInput(element) {
		element.removeAttribute('disabled');
	}

	function setFinishMsg() {
		// TODO: Create argument and variable to keep translations
		taskField.innerHTML = '<div class="final-msg"><div>Ура! 🏆</div><div>Задание пройдено! 👍</div><div/>';
	}

	function showRefreshBtn() {
		boxInput.remove();
		removeClass(refreshBtnContainer, 'hidden')
	}

	function clearInput(element) {
		element.value = '';
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
		const { answer, variants } = obj;
	
		// Define special characters to check for
		const specialChars = ['?', '!', ','];
	
		// Find which special characters exist in the answer
		const presentSpecialChars = specialChars.filter(char => answer.includes(char));
	
		// If no special characters, use answer as is; otherwise, remove them
		const answerWords = presentSpecialChars.length > 0
			? answer.replace(new RegExp(`[${specialChars.join('')}]`, 'g'), '').split(" ")
			: answer.split(" ");
	
		// Combine all arrays inside `variants` into one array
		const combinedWords = variants.flat();
	
		// If combinedWords is empty, throw an error
		if (combinedWords.length === 0) {
			throw new Error("No valid words in 'variants'.");
		}
	
		// Filter out duplicates and ensure the answerWords are included
		const uniqueWords = Array.from(new Set([...combinedWords, ...answerWords]));
	
		// Ensure `answerWords` are included in the final selection
		const randomSelection = [...answerWords];
	
		// Add special characters only if they exist in the original sentence
		if (presentSpecialChars.length > 0) {
			randomSelection.push(...presentSpecialChars);
		}
	
		// Fill up to 9 words
		while (randomSelection.length < 9) {
			const randomWord = uniqueWords[Math.floor(Math.random() * uniqueWords.length)];
			randomSelection.push(randomWord); // Add words to fill up
		}
	
		// If still less than 9 (unlikely but handle edge case), repeat variants
		while (randomSelection.length < 9) {
			const fallbackWord = combinedWords[Math.floor(Math.random() * combinedWords.length)];
			randomSelection.push(fallbackWord);
		}
	
		// Shuffle the final array
		for (let i = randomSelection.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[randomSelection[i], randomSelection[j]] = [randomSelection[j], randomSelection[i]];
		}
	
		// Append to Fragment
		for (const key of randomSelection) {
			const item = variantBtnTemplate.content.cloneNode(true);
			item.querySelector('button').textContent = key;
			variantButtonsFragment.append(item);
		}
	
		// Append to the HTML
		variantsBox.append(variantButtonsFragment);
	}
	

	function generateTheory() {
		if (ruleType === 'words') {
			clearElement(theoryWords);

			if (ruleTitle) {
				const h2 = document.createElement('h2');
				h2.classList.add('theory-title');
				h2.innerHTML = ruleTitle;
				
				theoryWords.append(h2);
			}

			for (const key of words) {
				const item = theoryTemplate.content.cloneNode(true);
			
				item.querySelector('.theory-words-task--js').textContent = `${key.task}`;
				item.querySelector('.theory-words-answer--js').textContent = `${key.answer}`;
				theoryTemplateFragment.append(item);
			}
	
			theoryWords.append(theoryTemplateFragment);
		} else {
			clearElement(theoryRules);

			const combinedContent = ruleType.reduce((acc, type) => {
				if (rules[type]) {
					acc += rules[type].map(rule => `${rule.content}`).join('');
				}
				return acc;
			}, '');

			theoryRules.innerHTML = combinedContent;
		}
	}

	function countWords(inputString) {
		const words = inputString.trim().split(/\s+|[?!,]/).filter(Boolean);
		const specialCharCount = (inputString.match(/[?!,]/g) || []).length;

		return words.length + specialCharCount;
	}

	function updateTimeline() {
		const currentTense = current.tense;
		timelineItems.forEach(item => removeClass(item, 'm-active'));
	
		const tenseClassMap = {
			past: 'm-past',
			present: 'm-present',
			future: 'm-future'
		};
	
		const activeClass = tenseClassMap[currentTense];

		if (activeClass) {
			document.querySelector(`.timeline-item.${activeClass}`).classList.add('m-active');
		}
	}

	function hideTimeline() {
		addClass(timeline ,'hidden');
	}

	const speechHelper = {
		utterance: new SpeechSynthesisUtterance(),
	
		init() {
			this.utterance.lang = "de-DE";
			this.utterance.rate = 0.7;
			this.utterance.volume = 0;
		},
	
		speak(text) {
			this.utterance.text = text;
			window.speechSynthesis.speak(this.utterance);
		},

		setVolume(volume) {
			this.utterance.volume = volume;
		},

		toggleVolume(volume) {
			this.utterance.volume = !volume;
		},

		getVolume() {
			return this.utterance.volume;
		},
	
		addEndListener(callback) {
			this.utterance.addEventListener("end", callback);
		}
	};

	function refreshTask() {
		removeClass(inputVariant, 'success-color');
		clearInput(inputVariant);
		updateCurrent();
		modifyCounter('increment');
		updateProgress(counter);
		setElementValue(currentCounter, counter);

		if (isDefaultMode) {
			clearElement(variantsBox);
			generateRandomWords(current);
		}

		updateTimeline();

		if (progress >= 100) {
			if (isDefaultMode) {
				addClass(variantsBox, 'hidden');
			}

			setFinishMsg();
			showRefreshBtn();
			hideTimeline();
		} else {
			setElementValue(taskField, current.task);
			setElementValue(correctVariantText, current.answer);

			if (isDefaultMode) {
				removeClass(variantsBox, 'block-disabled');
			}

			if (isWriteMode) {
				inputVariant.focus();
			}
		}
	}

	function verifyAnswer() {
		if (inputVariant.value === '') {
			return false;
		}

		const inputText = inputVariant.value.trim();

		if (inputText === current.answer) {
			removeClass(inputVariant, 'error-color');
			addClass(inputVariant, 'success-color');

			if (isDefaultMode) {
				addClass(variantsBox, 'block-disabled');
			}

			speechHelper.speak(inputText);

		} else {
			addClass(inputVariant, 'error-color');
			
			if (isWriteMode) {
				disableInput(inputVariant);
				addClass(manualInputBtnWrapper, 'hidden');
			}

			if (isDefaultMode) {
				addClass(variantsBox, 'block-disabled');
			}

			setTimeout(() => {
				showCorrectMsg();
				modifyCounter('decrement');
				updateProgress(counter);
				setElementValue(currentCounter, counter);
			}, timeout);
		}
	}

	function checkSelection() {
		const isEqualCountOfWords = countWords(inputVariant.value) === countWords(current.answer);

		if(isEqualCountOfWords) {
			verifyAnswer();
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

	function toggleVariable(variable) {
		variable = !variable;
		return variable;
	}

	function toggleClass(element, className) {
		if (element.classList.contains(className)) {
			element.classList.remove(className);
		} else {
			element.classList.add(className);
		}
	}

	/* RUN */
	setElementValue(taskField, current.task)
	setElementValue(correctVariantText, current.answer);
	setElementValue(currentCounter, counter);
	setElementValue(totalCounter, questions);
	speechHelper.init();

	if (isWriteMode) {
		inputVariant.focus();
		setWriteModeListener();
	}

	if (isDefaultMode) {
		generateRandomWords(current);
		setDefaultModeListeners();
	}

	if (state.isSpeechMode) {
		speechHelper.setVolume(1);
	}

	updateTimeline(); // TODO

	/* Listeners */
	function setDefaultModeListeners() {
		variantsBox.addEventListener('click', function(e) {
			if (e.target.classList.contains('variant-btn')) {
				currentInput = e.target.textContent;

				//Join string in case sentence contain more than one word
				if (inputVariant.value === '') {
					inputVariant.value = `${currentInput}`;
				}
				else if (currentInput === '?' || currentInput === '!' || currentInput === ',') {
					inputVariant.value = `${inputVariant.value}${currentInput}`;
				}
				else {
					inputVariant.value = `${inputVariant.value} ${currentInput}`;
				}

				checkSelection();
				hideIntensiveMsg();
			}
		});
	}

	function setWriteModeListener() {
		inputVariant.addEventListener('input', function() {
			if (!inputVariant.checkValidity()) {
				addClass(manualInputBtn, 'block-disabled');
				removeClass(errorMessage, 'hidden');
			} else {
				removeClass(manualInputBtn, 'block-disabled');
				addClass(errorMessage, 'hidden');
			}
		});

		manualInputBtn.addEventListener('click', function() {
			if (!inputVariant.checkValidity()) {
				addClass(manualInputBtn, 'block-disabled');
				removeClass(errorMessage, 'hidden');
				return false;
			}

			verifyAnswer();
		});
	}

	correctVariant.addEventListener('click', function() {
		hideCorrectMsg();
		clearInput(inputVariant);
		
		if (isWriteMode) {
			enableInput(inputVariant);
			removeClass(manualInputBtnWrapper, 'hidden');
			inputVariant.focus();
		}

		if (isDefaultMode) {
			removeClass(variantsBox, 'block-disabled');
			clearElement(variantsBox);
			generateRandomWords(current);
		}

		updateTimeline();

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

	speechBtn.addEventListener('click', function() {
		state.isSpeechMode = toggleVariable(state.isSpeechMode);
		toggleClass(speechBtn, 'm-on')
		speechHelper.toggleVolume(speechHelper.getVolume());
	});

	speechHelper.addEndListener(() => {
		refreshTask();
	});

};
