import { data } from './configurationData.js'
import { runMain } from './main.js';
import { runSettings } from './settings.js';

const app = document.getElementById('app');

let state = {
	writeMode: 'false'
};

// Settings
function handleCheckboxChange(isChecked) {
	state.writeMode = String(isChecked);
}

// Templates
const templates = {
	mainMenu: (tasks) => `
		<header>
			<div class="header-link hidden-disabled">&nbsp;</div>
			<h1>Полиглот | Немецкий</h1>
			<div class="header-link m-big btn-settings--js">⚙️</div>
		</header>
		<main>
			<ul class="menu">
			${tasks.map((task, index) => `<li class="menu-item">
					<button class="menu-btn main-menu-btn--js" data-task-index="${index}">
						<div class="menu-item-title">${task.name}</div>
						<p class="menu-item-description">${task.description}</p>
					</button>
				</li>`).join('')}
			</ul>
		</main>
		<footer>
			<button class="footer-btn btn-settings--js">Настройки ⚙️</button>
		</footer>
	`,

	settings: () => `
		<header>
			<button class="header-link back-to-main-menu--js">⬅️ Главная</button>
			<h1>Настройки</h1>
			<div class="header-link hidden-disabled">&nbsp;</div>
		</header>
		<main class="main">
			<div class="mode mode--js">
				<h2 class="mode-title">Режим тренировки:</h2>
				<div class="mode-action">
					<label>
						<div class="mode-description">
							<h3>Включить режим "ввода текста"</h3>
							<p>Позволяет вводить ответ в тренажёрах вручную, без помощи готовых вариантов</p>
						</div>
						<div class="switch">
							<input type="checkbox" value="write-mode" id="write-mode" name="mode" data-write-mode="${state.writeMode}">
							<span class="slider round"></span>
						</div>
					</label>
				</div>
			</div>
		</main>
`,

	subMenu: (taskIndex, submenus) => `
		<header>
			<button class="header-link back-to-main-menu--js">⬅️ Главная</button>
			<h1>Урок ${taskIndex + 1}</h1>
			<div class="header-link hidden-disabled">&nbsp;</div>
		</header>
		<main class="main--js">
			<ul>
				${submenus.map((submenu, index) => `<li class="menu-item">
					<button class="menu-btn sub-menu-btn--js" data-index="${index}">
						<div class="menu-item-title">${submenu.name}</div>
						<p class="menu-item-description">${submenu.details}</p>
					</button>
				</li>`).join('')}
			</ul>
		</main>
		<!--
		<footer>
			Футер в сабменю
		</footer>
		-->
	`,

	defaultMode: (taskIndex, submenuIndex, content) => `
		${getHeader(taskIndex, submenuIndex, content)}
		<main class="main main--js" data-write-mode="${state.writeMode}">
			<div class="box box--js" data-words="${content.words}" data-tenses="${content.tenses}">
				<div class="box__task box-task--js">она / они</div>
				<div class="box-input box-input--js">
					<div class="box-input__text">
						<input type="text" class="box-input-text--js" disabled>
					</div>
					${getAnswerField()}
				</div>
				${getRefreshButton()}
				<div class="box__variants box-variants--js">
					<div class="incentive-msg incentive-msg--js">
						<div class="incentive-msg-text">
							<p class="pulse">Выберите перевод из таблицы</p>
						</div>
						<div class="incentive-msg-icon bounce">⬇️</div>
					</div>
				</div>
				<template id="variant-btn-template">
					<button class="variant-btn"></button>
				</template>
			</div>
			${getTheory()}
		</main>
		${getFooter()}
	`,

	writeMode: (taskIndex, submenuIndex, content) => `
		${getHeader(taskIndex, submenuIndex, content)}
		<main class="main main--js" data-write-mode="${state.writeMode}">
			<div class="box m-write box--js" data-words="${content.words}" data-tenses="${content.tenses}">
				<div class="box__task box-task--js">она / они</div>
				<div class="box-input box-input--js">
					<div class="manual-input manual-input--js">
						<input
							type="text"
							class="box-input-text--js m-write"
							name="manual"
							placeholder="пишите тут"
							autocomplete="off"
							autocapitalize="none"
							pattern="[A-Za-zÄÖÜäöüß\\s?!.,]+"
						>
						<p id="errorMessage" class="error-msg hidden">Введён некорректный символ. Вероятно вы ввели НЕ латинский/немецкий символ либо число</p>
						<button class="btn manual-input-btn--js" name="manual" type="button">Проверить ответ</button>
					</div>
					${getAnswerField()}
				</div>
				${getRefreshButton()}
			</div>
			${getTheory()}
		</main>
		${getFooter()}
	`,
};

function getHeader(taskIndex, submenuIndex, content) {
	return `
		<header>
			<button class="header-link back-to-sub-menu--js">⬅️ Назад</button>
			<button class="header-link back-to-content--js hidden">⬅️ Назад</button>
			<h1 class="header-title--js">Урок ${taskIndex + 1}.${submenuIndex + 1}</h1>
			<button class="theory-btn header-link theory-btn--js" data-rule="${content.rule}">Подсказка ℹ️</>
		</header>
	`
}

function getFooter() {
	return `
		<footer>
			<div class="progress progress--js">
				<div class="progress-bar progress-bar--js"></div>
				<p class="progress-content progress-content--js">Прогресс... <span class="progress-value--js">0</span>%</p>
			</div>
		</footer>
	`
}

function getTheory() {
	return `
		<div class="theory theory--js hidden">
			<div class="theory-rules theory-rules--js"></div>
			<ul class="theory-words theory-words--js"></ul>
		</div>
		<template id="theory-template">
			<li class="theory-words-item">
				<div class="theory-words-task theory-words-task--js"></div>
				<div class="theory-words-answer theory-words-answer--js"></div>
			</li>
		</template>
	`
}

function getAnswerField() {
	return `
		<div class="correct-variant correct-variant--js hidden">
			<p>Правильный ответ:</p>
			<p class="correct-variant__text success-color correct-variant-text--js"></p>
			<div class="correct-variant-msg">
				<p class="pulse">Коснитесь области в зелёной рамке, чтобы продолжить</p>
			</div>
		</div>
		<div class="correct-variant correct-variant--js hidden">
			<p>Правильный ответ:</p>
			<p class="correct-variant__text success-color correct-variant-text--js"></p>
			<div class="correct-variant-msg">
				<p class="pulse">Коснитесь области в зелёной рамке, чтобы продолжить</p>
			</div>
		</div>
	`
}

function getRefreshButton() {
	return `
		<div class="refresh-btn-container refresh-btn-container--js hidden"><button class="btn" type="button">Пройти ещё раз 🤓</button></div>
	`
}


// Render functions
function renderMainMenu() {
	app.innerHTML = templates.mainMenu(data.tasks);

	const buttons = app.querySelectorAll('.main-menu-btn--js');
	buttons.forEach((button) => {
		const taskIndex = Number(button.dataset.taskIndex);
		button.addEventListener('click', () => renderSubMenu(taskIndex));
	});

	const settingsBtns = app.querySelectorAll('.btn-settings--js');
	settingsBtns.forEach((button) => {
		button.addEventListener('click', () => renderSettings());
	});
}

function renderSubMenu(taskIndex) {
	app.innerHTML = templates.subMenu(taskIndex, data.submenus[taskIndex]);

	backToMainMenuListener();

	const buttons = app.querySelectorAll('.sub-menu-btn--js');
	buttons.forEach((button) => {
		const index = Number(button.dataset.index);
		button.addEventListener('click', () => {
			if (state.writeMode === 'true') {
				renderWriteMode(taskIndex, index);
			} else {
				renderDefaultMode(taskIndex, index);
			}
		});
	});
}

function renderSettings() {
	app.innerHTML = templates.settings();

	backToMainMenuListener();
	runSettings(handleCheckboxChange);
}

function renderDefaultMode(taskIndex, submenuIndex) {
	app.innerHTML = templates.defaultMode(
		taskIndex,
		submenuIndex,
		data.content[taskIndex][submenuIndex]
	);

	runMain();

	const backButton = app.querySelector('.back-to-sub-menu--js');
	backButton.addEventListener('click', () => renderSubMenu(taskIndex));

	const refreshButton = app.querySelector('.refresh-btn-container--js');
	refreshButton.addEventListener('click', () => renderDefaultMode(taskIndex, submenuIndex));
}

function renderWriteMode(taskIndex, submenuIndex) {
	app.innerHTML = templates.writeMode(
		taskIndex,
		submenuIndex,
		data.content[taskIndex][submenuIndex]
	);

	runMain();

	const backButton = app.querySelector('.back-to-sub-menu--js');
	backButton.addEventListener('click', () => renderSubMenu(taskIndex));

	const refreshButton = app.querySelector('.refresh-btn-container--js');
	refreshButton.addEventListener('click', () => renderWriteMode(taskIndex, submenuIndex));
}


function backToMainMenuListener() {
	const backButton = app.querySelector('.back-to-main-menu--js');
	backButton.addEventListener('click', () => renderMainMenu());
}

// Initial render
renderMainMenu();
