
var istorija_poc = [
	["Svaki je čovek"],
	["Kad počnete da živite po navikama i citatima,"],
	["Većina ljudi je neko drugi."],
	["Pesnik je oduvek bio onaj koji"],
	["Zaljubiš se jer je to tebi potrebno,"],
	["Sretan je i velik zaista samo onaj koji ne mora ni vladati ni pokoravati"],
	["Čudno je kako je malo potrebno da budemo sretni,"],
	["Čak i ako sreća zaboravi na tebe,"],
	["Sve što jeste, mora isto toliko i da nije,"],
	["Teškoća je u tome da čovjekov život nije samo njegov."]
];

var istorija_sred = [
	[" citat svojih predaka."],
	[" prestali ste da živite."],
	[" Njihova strast su tuđi životi, njihovo znanje - oponašanje, njihovi stavovi - citati."],
	[" u drugima leči bolest od koje sam umire."],
	[" a voliš jer je to potrebno nekom drugom."],
	[" se da bi mogao nešto biti."],
	[" i još čudnije: kako nam često baš to malo nedostaje."],
	[" ti nemoj nikada zaboraviti na nju."],
	[" i samo koliko ga nema, toliko ga i može biti."],
	[" Tko ga želi oblikovati, mora imati pomoć svoje okoline ili neće uspjeti."]
]

var istorija_kraj = [
	["Ralf Valdo Emerson"],
	["Džejms Artur Boldvin"],
	["Oskar Vajld"],
	["Branko Miljković"],
	["Đorđe Balašević"],
	["Gete"],
	["Ivo Andrić",
	["Žak Prever"],
	["Miroslav Antić"],
	["Rabindranat Tagore"]
];

var citati = [
    ["Audaces fortuna iuvat – Sreća pomaže hrabrima."],
    ["Acta, non verba – Dela, ne reči."],
    ["Bibere humanum est, ergo bibamus – Piti je ljudski, zato pijmo."],
	["Cogito, ergo sum – Mislim, dakle postojim."],
	["Cujusvis hominis est errare – Svaki čovek može da pogreši."],
	["Clara pacta, boni amici – Čist račun, duga ljubav."],
	["Clavus clavo extruditur. – Klin se klinom izbija."],
	["Dum spiro spero – Dok dišem (živim), nadam se."],
	["Ego sum, qui sum. – Ja sam koji jesam."],
	["Hoc facias homini, quod cupis esse tibi. – Ne čini drugome što ne želiš da se tebi čini."]
];
	
function generatecitati(_category, _count) {
	if(_category === 'istorija')
	{
		rand = Math.floor(Math.random() * (istorija_poc.length));
	}
	else{
		rand = Math.floor(Math.random() * (citati.length));
	}
	var index = [];
	for(var i = 1; i <= _count; i++) {
		while(index.indexOf(rand) !== -1) {
			if(_category === 'istorija')
			{
				rand = Math.floor(Math.random() * (istorija_poc.length));
			}
			else{
				rand = Math.floor(Math.random() * (citati.length));
			}
		}
		var id = "quote" + i;
		if(_category === 'istorija')
		{
			document.getElementById(id).innerHTML = "<blockquote>" + istorija_poc [rand] + istorija_sred [rand] + "<small>" + istorija_kraj[rand] + "</small></blockquote>";
		}
		else{
			document.getElementById(id).innerHTML = "<blockquote>" + citati [rand] + "</blockquote>";
		}
		index.push(rand);
	}
	
}
function newQuote(){

	var category = document.getElementById("category");
	var count = document.getElementById("count");

	generatecitati(category.options[category.selectedIndex].value, count.options[count.selectedIndex].value);
}
function quit() {
	window.open('', '_self', '');
	window.close();
}
function refresh(){
	window.location.reload();
}
