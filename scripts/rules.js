export const rules = {
	"simple-verbs": [
		{
			id: 1, content: `
			<h2 class="theory-title">Простая форма глагола <b>machen</b></h2>
			<div class="container">
				<ol class="theory-menu">
					<li>
						<a class="theory-menu-link" href="#present-tense"> - Настоящее время</a>
					</li>
					<li>
						<a class="theory-menu-link" href="#future-tense"> - Будущее время</a>
					</li>
				</ol>
			</div>
			<h3 class="theory-sub-title" id="present-tense">Настоящее время</h3>
			<div class="grid-table">
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
			</div>
			<h3 class="theory-sub-title" id="future-tense">Будущее время</h3>
			<div class="container">
				<p>В конец предложения Настоящего времени нужно добавить слово, обозначающее Будущее. Например: <b>завтра</b> - <b>morgen</b></p>
				<p>Mache ich <b>morgen</b>? - Я работаю завтра?</p>
				<p>Ich mache <b>morgen</b> - Я работаю завтра</p>
				<p>Ich mache nicht <b>morgen</b> - Я не работаю завтра</p>
			</div>
		` },
	]
}