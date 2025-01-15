import { data } from './configurationData.js'
import { runMain } from './main.js';

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
					<button class="menu-btn main-menu-btn--js" data-task-index="${index}">
						<div class="menu-item-title">${task.name}</div>
						<p class="menu-item-description">${task.description}</p>
					</button>
				</li>`).join('')}
			</ul>
		</main>
		<!--
		<footer>
			Футер в меню
		</footer>
		-->
	`,

	subMenu: (taskIndex, submenus) => `
		<header>
			<button class="back-link back-to-main-menu--js">⬅️ Назад</button>
			<h1>Урок ${taskIndex + 1}</h1>
		</header>
		<main>
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

	content: (taskIndex, submenuIndex, content) => `
		<header>
			<button class="back-link back-to-sub-menu--js">⬅️ Назад</button>
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
				<div class="refresh-btn-container refresh-btn-container--js hidden"><button class="btn" type="button">Пройти ещё раз 🤓</button></div>
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


// Render functions
function renderMainMenu() {
	app.innerHTML = templates.mainMenu(data.tasks);

	const buttons = app.querySelectorAll('.main-menu-btn--js');
	buttons.forEach((button) => {
		const taskIndex = Number(button.dataset.taskIndex);
		button.addEventListener('click', () => renderSubMenu(taskIndex));
	});
}

function renderSubMenu(taskIndex) {
	app.innerHTML = templates.subMenu(taskIndex, data.submenus[taskIndex]);

	const backButton = app.querySelector('.back-to-main-menu--js');
	backButton.addEventListener('click', () => renderMainMenu());

	const buttons = app.querySelectorAll('.sub-menu-btn--js');
	buttons.forEach((button) => {
		const index = Number(button.dataset.index);
		button.addEventListener('click', () => renderContent(taskIndex, index));
	});
}

function renderContent(taskIndex, submenuIndex) {
	app.innerHTML = templates.content(
		taskIndex,
		submenuIndex,
		data.content[taskIndex][submenuIndex]
	);

	runMain();

	const backButton = app.querySelector('.back-to-sub-menu--js');
	backButton.addEventListener('click', () => renderSubMenu(taskIndex));

	const refreshButton = app.querySelector('.refresh-btn-container--js');
	refreshButton.addEventListener('click', () => renderContent(taskIndex, submenuIndex));
}

// Initial render
renderMainMenu();
