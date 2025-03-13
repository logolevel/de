const presentCells = `
		<!-- Titles -->
		<div class="grid-cell grid-title">Вопрос</div>
		<div class="grid-cell grid-title">Утверждение</div>
		<div class="grid-cell grid-title">Отрицание</div>
		
		<!-- Content -->
		<div class="grid-cell">
			<div>mach<b>e</b> ich?</div>
		</div>
		<div class="grid-cell">
			<div>ich mach<b>e</b></div>
		</div>
		<div class="grid-cell third-column">+ nicht</div>

		<div class="grid-cell">
			<div>mach<b>st</b> du?</div>
		</div>
		<div class="grid-cell">
			<div>du mach<b>st</b></div>
		</div>

		<div class="grid-cell">
			<div>mach<b>t</b></div>
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
			<div>mach<b>t</b></div>
		</div>

		<div class="grid-cell">
			<div>mach<b>en</b> wir?</div>
		</div>
		<div class="grid-cell">
			<div>wir mach<b>en</b></div>
		</div>

		<div class="grid-cell">
			<div>mach<b>t</b> ihr?</div>
		</div>
		<div class="grid-cell">
			<div>ihr mach<b>t</b></div>
		</div>

		<div class="grid-cell">
			<div>mach<b>en</b></div>
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
			<div>mach<b>en</b></div>
		</div>
`;

const pastCells = `
	<!-- Titles -->
	<div class="grid-cell grid-title">Вопрос</div>
	<div class="grid-cell grid-title">Утверждение</div>
	<div class="grid-cell grid-title">Отрицание</div>
	
	<!-- Content -->
	<div class="grid-cell">
		<div><b>habe</b> ich?</div>
	</div>
	<div class="grid-cell">
		<div>ich <b>habe</b></div>
	</div>
	<div class="grid-cell third-column">+ nicht</div>

	<div class="grid-cell">
		<div><b>hast</b> du?</div>
	</div>
	<div class="grid-cell">
		<div>du <b>hast</b></div>
	</div>

	<div class="grid-cell">
		<div><b>hat</b></div>
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
		<div><b>hat</b></div>
	</div>

	<div class="grid-cell">
		<div><b>haben</b> wir?</div>
	</div>
	<div class="grid-cell">
		<div>wir <b>haben</b></div>
	</div>

	<div class="grid-cell">
		<div><b>habt</b> ihr?</div>
	</div>
	<div class="grid-cell">
		<div>ihr <b>habt</b></div>
	</div>

	<div class="grid-cell">
		<div><b>haben</b></div>
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
		<div><b>haben</b></div>
	</div>
`;

export const rules = {
	"present": [
		{
			id: 1, content: `
			<h2 class="theory-title">Простая форма глагола <b>machen</b></h2>
			<h3 class="theory-sub-title" id="present-tense">Настоящее время</h3>
			<div class="grid-table">
				${presentCells}
			</div>
			<h3 class="theory-sub-title" id="future-tense">Будущее время</h3>
			<div class="container">
				<p>В конец предложения Настоящего времени нужно добавить слово, обозначающее Будущее. Например: <b>завтра</b> - <b>morgen</b></p>
				<p>Mache ich <b>morgen</b>? - Я работаю завтра?</p>
				<p>Ich mache <b>morgen</b> - Я работаю завтра</p>
				<p>Ich mache nicht <b>morgen</b> - Я не работаю завтра</p>
			</div>
		` },
	],
	"past": [
		{
			id: 2, content: `
			<h2 class="theory-title">Прошеднее время</h2>
			<h3 class="theory-sub-title" id="present-tense">Вспомагательный глалол <b>haben</b></h3>
			<div class="container">
				<p>В прошедшем времени используется вспомагательный глалол <b>haben</b> в разных вариациях</p>
				<p>В конец предложения Настоящего времени нужно добавить конструкцию <b>ge</b> + <b>macht</b> + <b>t</b>. Например: <b>gemacht</b></p>
				<p>Ich habe gemacht - Я сделал</p>
				<p>Ich habe nicht gemacht - Я не сделал</p>
				<p>Habe ich gemacht - Я сделал?</p>
			</div>
			<div class="grid-table">
				${pastCells}
				<!-- Last content row -->
				<div class="grid-cell full-width">
					<div>+ <b>ge</b>mach<b>t</b></div>
				</div>
			</div>
		` },
	],
	"questionWordPast": [
		{
			id: 3, content: `
			<h2 class="theory-title">Прошеднее время</h2>
			<h3 class="theory-sub-title">Вопросительное слово + Прошедшее время</h3>
			<div class="container">
				<p>В начале предложения <b>вопросительное слово</b>, потом Настоящеее время, а в конец нужно добавить конструкцию <b>ge</b> + <b>macht</b> + <b>t</b>. Например: <b>gemacht</b></p>
				<p>Was hast du gesagt? - Что ты сказал?</p>
				<p>Was singst du? - Что ты поёшь?</p>
				<p>Was singst du morgen? - Что ты завтра споёшь?</p>
			</div>
			<div class="grid-table">
				<!-- First content row -->
				<div class="grid-cell full-width">
					<div><b>Was</b>, <b>Wer</b>, <b>Wo</b>, <b>Wann</b>, <b>Warum</b>, <b>Wie</b>, <b>Wen</b> +</div>
				</div>
				${pastCells}
				<!-- Last content row -->
				<div class="grid-cell full-width">
					<div>+ <b>ge</b>mach<b>t</b></div>
				</div>
			</div>
		` },
	],
	"questionWordPresent": [
		{
			id: 4, content: `
			<h2 class="theory-title">Простая форма глагола <b>machen</b></h2>
			<h3 class="theory-sub-title">Вопросительное слово + Настоящее время</h3>
			<div class="container">
				<p>В начале предложения <b>вопросительное слово</b> и Настоящеее время</p>
				<p>Где ты живёшь? - Что ты сказал?</p>
			</div>
			<div class="grid-table">
				<div class="grid-cell full-width">
					<div><b>Was</b>, <b>Wer</b>, <b>Wo</b>, <b>Wann</b>, <b>Warum</b>, <b>Wie</b>, <b>Wen</b> +</div>
				</div>
				${presentCells}
			</div>
			<div class="container">
				<p>В конец предложения Настоящего времени нужно добавить слово, обозначающее Будущее. Например: <b>завтра</b> - <b>morgen</b></p>
				<p>Mache ich <b>morgen</b>? - Я работаю завтра?</p>
				<p>Ich mache <b>morgen</b> - Я работаю завтра</p>
				<p>Ich mache nicht <b>morgen</b> - Я не работаю завтра</p>
			</div>
		` },
	],
}