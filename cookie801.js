jQuery(document).ready(function() {

	var message = "We use cookies and share some information with third parties in order to analyze our traffic and serve you the most adapted content.";
	var acceptText = 'I understand';
	var policyText = 'More information';

	var language = window.navigator.userLanguage || window.navigator.language;

	if (language.indexOf('fr') == 0) {
		message = "Nous utilisons des cookies et partageons certaines informations avec des tierces parties dans le but d'analyser notre trafic et de vous servir le contenu le plus pertinent.";
		acceptText = 'Je comprends';
		policyText = "Plus d'informations";
	}
	else if (language.indexOf('pt') == 0 || language.indexOf('br') == 0) {
		message = "Nós usamos cookies e compartilhamos algumas informações com terceiros, a fim de analisar nosso tráfego e servir-lhe o conteúdo mais adaptado.";
		acceptText = 'Eu aceito';
		policyText = 'Mais informações';
	}
	else if (language.indexOf('tr') == 0) {
		message = 'Trafiğimizi analiz etmek ve size en iyi adapte edilmiş içeriği sunmak için çerezleri kullanıyoruz ve bazı bilgileri üçüncü taraflarla paylaşıyoruz.';
		acceptText = 'Anlıyorum';
		policyText = 'Daha fazla bilgi';
	}
	else if (language.indexOf('es') == 0) {
		message = 'Utilizamos cookies y compartimos alguna información con terceros con el fin de analizar nuestro tráfico y servirte el contenido más adaptado.';
		acceptText = 'Entiendo';
		policyText = 'Más información';
	}
	else if (language.indexOf('pl') == 0) {
		message = 'Używamy ciasteczek i udostępniamy część informacji osobom trzecim w celu analizy ruchu i dostosowania dla Was najodpowiedniejszej treści.';
		acceptText = 'Rozumiem';
		policyText = 'Więcej informacji';
	}
	/*else if (language.indexOf('ro') == 0) {
		message = 'Acest website folosește Cookie-uri pentru a vă furniza o experiență de navigare îmbunătățită.';
		acceptText = 'Am înțeles';
		policyText = 'Politica de Confidențialitate';
	}*/
	/*else if (language.indexOf('no') == 0) {
		message = 'Den nettsiden bruker cookier for å forbedre din brukeropplevelse.';
		acceptText = 'Jeg forstår';
		policyText = 'Privacy Policy'; // to change
	}*/
	else if (language.indexOf('nl') == 0) {
		message = "We gebruiken koekjes en delen informatie met derde partijen om zo het verkeer te analyseren. Hierdoor kunnen wij de meest volledig content bieden.";
		acceptText = 'Begrepen';
		policyText = 'Meer informatie';
	}
	/*else if (language.indexOf('hu') == 0) {
		message = 'Ez a weboldal sütiket használ, hogy fejlesszük a felhasználói élményt.';
		acceptText = 'Értettem';
		policyText = 'Adatvédelmi Nyilatkozat';
	}
	else if (language.indexOf('id') == 0) {
		message = 'Situs ini menggunakan kuki untuk meningkatkan pengalaman pengguna Anda.';
		acceptText = 'Saya mengerti';
		policyText = 'Kebijakan Privasi';
	}*/

	jQuery.cookieBar({
		//fixed: true,
		//bottom: true,
		element: '#cookieconsent',
		policyButton: true,
		message: message,
		acceptText: acceptText,
		policyText: policyText,
		zindex: 10000,
		policyURL: 'http://forum.supermice.net/privacy'
	});
});
