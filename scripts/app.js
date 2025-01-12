// Initial setup
const app = document.getElementById('app');

// Templates
const templates = {
	mainMenu: (tasks) => `
		<header>
			<h1>Полиглот | Немецкий</h1>
		</header>
		<main>
			<ul class="menu">
			${tasks.map((task, index) => `<li class="menu-item">
					<button class="menu-btn" onclick="renderSubMenu(${index})">
						<div class="menu-item-title">${task.name}</div>
						<p class="menu-item-description">${task.description}</p>
					</button>
				</li>`).join('')}
			</ul>
		</main>
		<footer>
			<!-- Футер в меню -->
		</footer>
	`,

	subMenu: (taskIndex, submenus) => `
		<header>
			<button class="back-link" onclick="clearAndRender(renderMainMenu)">⬅️ Назад</button>
			<h1>Урок ${taskIndex + 1}</h1>
		</header>
		<main>
			<ul>
				${submenus.map((submenu, index) => `<li class="menu-item">
					<button class="menu-btn" onclick="clearAndRender(() => renderContent(${taskIndex}, ${index}))">
						<div class="menu-item-title">${submenu.name}</div>
						<p class="menu-item-description">${submenu.details}</p>
					</button>
				</li>`).join('')}
			</ul>
		</main>
		<footer>
			<!-- Футер в сабменю -->
		</footer>
	`,

	content: (taskIndex, submenuIndex, content) => `
		<header>
			<button class="back-link" onclick="clearAndRender(() => renderSubMenu(${taskIndex}))">⬅️ Назад</button>
			<h1>Урок ${taskIndex + 1}.${submenuIndex + 1}</h1>
		</header>
		<main>
			<div class="box" data-words="${content.words}" data-tenses="${content.tenses}">
				<div class="box__task box-task--js">она / они</div>
				<div class="box-input box-input--js">
					<div class="box-input__text box-input-text--js"></div>
					<div class="correct-variant correct-variant--js hidden">
						<p>Правильный ответ:</p>
						<p class="correct-variant__text success-color correct-variant-text--js"></p>
						<div class="correct-variant-msg">
							<p class="pulse">Коснитесь области в зелёной рамке, чтобы продолжить</p>
						</div>
					</div>
				</div>
				<div class="refresh-btn-container refresh-btn-container--js hidden"><button class="btn" type="button" onClick="clearAndRender(() => renderContent(${taskIndex}, ${submenuIndex}))">Пройти ещё раз 🤓</button></div>
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
		</main>
		<footer>
			<div class="progress progress--js">
				<div class="progress-bar progress-bar--js"></div>
				<p class="progress-content progress-content--js">Прогресс... <span class="progress-value--js">0</span>%</p>
			</div>
		</footer>
	`,
};

// Data
const data = {
	tasks: [
		{ id: 1, name: 'Урок 1', description: 'Утверждения, отрицания, вопросы. Местоимения. Глаголы' },
	],
	submenus: [
		[
			{ id: 1, name: 'Словарь урока', details: 'Местоимения' },
			{ id: 2, name: 'Словарь урока', details: 'Глоголы' },
		],
		[
			{ id: 1, name: 'Submenu 3-1', details: 'Details for Submenu 3-1' },
			{ id: 2, name: 'Submenu 3-2', details: 'Details for Submenu 3-2' },
			{ id: 3, name: 'Submenu 3-3', details: 'Details for Submenu 3-3' },
			{ id: 4, name: 'Submenu 3-4', details: 'Details for Submenu 3-4' },
		],
	],
	content: [
		[
			{ id: 1, words: 'pronouns', tenses: 'false' },
			{ id: 1, words: 'verbs', tenses: 'false' },
		],
	],
};

// Utility function to clear variables and listeners
function clearState() {
	const scripts = document.querySelectorAll('script[data-dynamic]');
	scripts.forEach((script) => script.remove());
}

function clearAndRender(renderFunction) {
	clearState();
	renderFunction();
}

function loadScript(src) {
	const script = document.createElement('script');
	script.src = src;
	script.type = 'text/javascript';
	script.defer = true;
	script.dataset.dynamic = 'true';
	document.body.appendChild(script);
}

// Render functions
function renderMainMenu() {
	app.innerHTML = templates.mainMenu(data.tasks);
}

function renderSubMenu(taskIndex) {
	app.innerHTML = templates.subMenu(taskIndex, data.submenus[taskIndex]);
}

function renderContent(taskIndex, submenuIndex) {
	app.innerHTML = templates.content(
		taskIndex,
		submenuIndex,
		data.content[taskIndex][submenuIndex]
	);
	loadScript('scripts/main.js');
}

// Initial render
renderMainMenu();
