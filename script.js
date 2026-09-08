/* =========================================================
DONNEES
========================================================= */

const PANNEAUX = [
{"code":"A1a","nom":"Virage dangereux à gauche","cat":"A","desc":"Annonce un virage prononcé vers la gauche."},
{"code":"A1b","nom":"Virage dangereux à droite","cat":"A","desc":"Annonce un virage prononcé vers la droite."},
{"code":"A1c","nom":"Succession de virages","cat":"A","desc":"Annonce plusieurs virages successifs, le premier à gauche."},
{"code":"A3","nom":"Descente dangereuse","cat":"A","desc":"Pente raide indiquée par un pourcentage. Utilisez le frein moteur."},
{"code":"A5","nom":"Montée à forte inclinaison","cat":"A","desc":"Indique une forte côte."},
{"code":"A7a","nom":"Chaussée rétrécie","cat":"A","desc":"Rétrécissement de la route des deux côtés."},
{"code":"A9","nom":"Pont mobile","cat":"A","desc":"Approche d'un pont levant ou tournant."},
{"code":"A13","nom":"Cassis ou dos d'âne","cat":"A","desc":"Ralentisseur ou bosse sur la chaussée."},
{"code":"A15","nom":"Chaussée glissante","cat":"A","desc":"Risque accru de glissade (pluie, verglas, gravillons)."},
{"code":"A21","nom":"Passage pour piétons","cat":"A","desc":"Annonce un passage pour piétons à proximité."},
{"code":"A23","nom":"Endroit fréquenté par des enfants","cat":"A","desc":"Présence d'écoles ou d'endroits fréquentés par des enfants."},
{"code":"A25","nom":"Passage de cyclistes","cat":"A","desc":"Annonce un passage ou un endroit fréquenté par des cyclistes."},
{"code":"A31","nom":"Travaux","cat":"A","desc":"Présence d'un chantier sur ou le long de la voie publique."},
{"code":"A33","nom":"Feux de circulation","cat":"A","desc":"Annonce des feux de circulation en amont."},
{"code":"A51","nom":"Danger indéterminé","cat":"A","desc":"Danger particulier précisé par un panonceau additionnel."},

{"code":"B1","nom":"Cédez le passage","cat":"B","desc":"Céder le passage aux conducteurs circulant sur la voie abordée."},
{"code":"B5","nom":"Stop — Arrêt obligatoire","cat":"B","desc":"Obligation de marquer un arrêt complet avant la ligne d'arrêt."},
{"code":"B9","nom":"Voie prioritaire","cat":"B","desc":"Indique que la voie publique est prioritaire jusqu'au prochain signal indiquant la fin de cette priorité."},
{"code":"B11","nom":"Fin de voie prioritaire","cat":"B","desc":"Indique la fin de la voie prioritaire."},
{"code":"B15","nom":"Priorité à l'intersection","cat":"B","desc":"Indique que la priorité est accordée à la prochaine intersection."},
{"code":"B17","nom":"Priorité de droite","cat":"B","desc":"Indique une intersection où la priorité de droite s'applique."},

{"code":"C1","nom":"Accès interdit dans les deux sens","cat":"C","desc":"Accès interdit dans les deux sens à tout conducteur."},
{"code":"C3","nom":"Sens interdit","cat":"C","desc":"Accès interdit à tout conducteur dans ce sens."},
{"code":"C5","nom":"Accès interdit aux véhicules à moteur","cat":"C","desc":"Accès interdit aux véhicules à moteur."},
{"code":"C7","nom":"Accès interdit aux motocycles","cat":"C","desc":"Accès interdit aux motocycles."},
{"code":"C11","nom":"Accès interdit aux cycles","cat":"C","desc":"Accès interdit aux cycles."},
{"code":"C19","nom":"Accès interdit aux piétons","cat":"C","desc":"Accès interdit aux piétons."},
{"code":"C23","nom":"Accès interdit aux véhicules destinés au transport de marchandises","cat":"C","desc":"Accès interdit aux véhicules destinés au transport de marchandises."},
{"code":"C35","nom":"Interdiction de dépasser","cat":"C","desc":"Interdiction de dépasser les véhicules à moteur à plus de deux roues."},
{"code":"C43 30","nom":"Vitesse limitée à 30 km/h","cat":"C","desc":"Vitesse maximale autorisée de 30 km/h.","num":"30"},
{"code":"C43 50","nom":"Vitesse limitée à 50 km/h","cat":"C","desc":"Vitesse maximale autorisée de 50 km/h.","num":"50"},
{"code":"C43 70","nom":"Vitesse limitée à 70 km/h","cat":"C","desc":"Vitesse maximale autorisée de 70 km/h.","num":"70"},
{"code":"C43 90","nom":"Vitesse limitée à 90 km/h","cat":"C","desc":"Vitesse maximale autorisée de 90 km/h.","num":"90"},
{"code":"C45","nom":"Fin de toutes les interdictions locales","cat":"C","desc":"Fin des interdictions locales précédemment imposées."},

{"code":"D1a","nom":"Direction obligatoire à droite","cat":"D","desc":"Obligation de suivre la direction indiquée par la flèche."},
{"code":"D1b","nom":"Direction obligatoire à gauche","cat":"D","desc":"Obligation de suivre la direction indiquée par la flèche."},
{"code":"D9","nom":"Partie de la voie publique réservée aux cycles et cyclomoteurs à deux roues","cat":"D","desc":"Indique une piste cyclable obligatoire."},
{"code":"D10","nom":"Partie de la voie publique réservée aux piétons et aux cyclistes","cat":"D","desc":"Indique un chemin réservé aux piétons et aux cyclistes."},

{"code":"E1","nom":"Stationnement interdit","cat":"E","desc":"Stationnement interdit du côté de la voie publique où le signal est placé."},
{"code":"E3","nom":"Arrêt et stationnement interdits","cat":"E","desc":"Arrêt et stationnement interdits du côté de la voie publique où le signal est placé."},
{"code":"E9a","nom":"Stationnement autorisé","cat":"E","desc":"Stationnement autorisé."},

{"code":"F1","nom":"Commencement d'une agglomération","cat":"F","desc":"Indique le commencement d'une agglomération."},
{"code":"F3","nom":"Fin d'une agglomération","cat":"F","desc":"Indique la fin d'une agglomération."},
{"code":"F5","nom":"Commencement d'une autoroute","cat":"F","desc":"Indique le commencement d'une autoroute."},
{"code":"F9","nom":"Route pour automobiles","cat":"F","desc":"Indique le commencement d'une route pour automobiles."},
{"code":"F12a","nom":"Commencement d'une zone résidentielle ou d'une zone de rencontre","cat":"F","desc":"Indique le commencement d'une zone résidentielle ou d'une zone de rencontre."},
{"code":"F19","nom":"Sens unique","cat":"F","desc":"Indique que la chaussée est à sens unique."},
{"code":"F4a","nom":"Commencement d'une zone dans laquelle la vitesse est limitée à 30 km/h","cat":"F","desc":"Indique le commencement d'une zone 30."},
{"code":"F4b","nom":"Fin d'une zone dans laquelle la vitesse est limitée à 30 km/h","cat":"F","desc":"Indique la fin d'une zone 30."},

{"code":"Panonceau 1","nom":"Distance avant le danger","cat":"X","desc":"Indique la distance entre le signal et le danger ou l'endroit concerné."},
{"code":"Panonceau 2","nom":"Étendue de la mesure","cat":"X","desc":"Indique la longueur sur laquelle le signal est applicable."},
{"code":"Panonceau 3","nom":"Répétition ou rappel","cat":"X","desc":"Indique la répétition ou le rappel d'une prescription."}
];

/* =========================================================
INFRACTIONS
========================================================= */

const INFRACTIONS = [
{"titre":"Oubli du clignotant","degre":"1er Degré","amende":"58 €","desc":"Omettre d'indiquer un changement de direction, un dépassement ou une manœuvre."},
{"titre":"Stationnement gênant simple","degre":"1er Degré","amende":"58 €","desc":"Stationner à un endroit où le stationnement est interdit ou gênant."},
{"titre":"Circuler sur une bande de bus","degre":"1er Degré","amende":"58 €","desc":"Emprunter une bande réservée aux transports en commun sans autorisation."},
{"titre":"Défaut de documents à bord","degre":"1er Degré","amende":"58 €","desc":"Ne pas pouvoir présenter les documents requis lors d'un contrôle."},
{"titre":"Utilisation abusive des feux de brouillard","degre":"1er Degré","amende":"58 €","desc":"Utiliser les feux de brouillard dans des conditions où leur utilisation n'est pas autorisée."},
{"titre":"Non-port de la ceinture de sécurité","degre":"2ème Degré","amende":"116 €","desc":"La ceinture de sécurité doit être portée lorsque le véhicule en est équipé."},
{"titre":"Franchissement d'un feu orange","degre":"2ème Degré","amende":"116 €","desc":"Ne pas s'arrêter à un feu orange lorsque l'arrêt est possible en toute sécurité."},
{"titre":"Stationnement sur passage pour piétons","degre":"2ème Degré","amende":"116 €","desc":"Stationner à un endroit où le stationnement est interdit afin de préserver le passage des piétons."},
{"titre":"Conduite sans feux la nuit","degre":"2ème Degré","amende":"116 €","desc":"Ne pas utiliser l'éclairage obligatoire lorsque les conditions l'imposent."},
{"titre":"Dépassement par la droite","degre":"2ème Degré","amende":"116 €","desc":"Le dépassement s'effectue normalement par la gauche, sauf exceptions prévues par le Code."},
{"titre":"Non-respect de la distance de sécurité","degre":"2ème Degré","amende":"116 €","desc":"Ne pas conserver une distance suffisante avec le véhicule qui précède."},
{"titre":"Ne pas céder le passage à un piéton engagé","degre":"2ème Degré","amende":"116 €","desc":"Ne pas respecter la priorité accordée au piéton dans les situations prévues par le Code."},
{"titre":"Usage du GSM au volant","degre":"3ème Degré","amende":"174 €","desc":"Utiliser ou manipuler un appareil électronique mobile à écran non fixé au véhicule dans les conditions interdites."},
{"titre":"Franchir un feu rouge","degre":"3ème Degré","amende":"174 €","desc":"Ne pas respecter l'interdiction imposée par un feu rouge."},
{"titre":"Non-respect d'un panneau STOP (B5)","degre":"3ème Degré","amende":"174 €","desc":"Ne pas respecter l'obligation d'arrêt imposée par le signal B5."},
{"titre":"Franchir une ligne blanche continue","degre":"3ème Degré","amende":"174 €","desc":"Franchir une marque routière continue dans une situation où cela est interdit."},
{"titre":"Prendre un sens interdit (C3)","degre":"3ème Degré","amende":"174 €","desc":"S'engager dans une voie dans le sens interdit."},
{"titre":"Franchir un passage à niveau fermé","degre":"3ème Degré","amende":"174 €","desc":"Ne pas respecter les signaux ou barrières d'un passage à niveau."},
{"titre":"Faire demi-tour sur autoroute","degre":"4ème Degré","amende":"Tribunal","desc":"Effectuer une manœuvre interdite sur une autoroute."},
{"titre":"Refus d'obtempérer","degre":"4ème Degré","amende":"Tribunal","desc":"Ne pas respecter les injonctions d'un agent qualifié."},
{"titre":"Courses de vitesse illégales","degre":"4ème Degré","amende":"Tribunal","desc":"Organiser ou participer à des compétitions de vitesse interdites sur la voie publique."},
{"titre":"Délit de fuite","degre":"Délit pénal","amende":"Tribunal","desc":"Quitter les lieux d'un accident dans le but d'échapper aux responsabilités."},
{"titre":"Excès de vitesse","degre":"Vitesse","amende":"Variable","desc":"Les sanctions dépendent notamment de la vitesse mesurée, du lieu et du dépassement constaté."},
{"titre":"Alcoolémie","degre":"Alcool","amende":"Variable","desc":"Les sanctions dépendent du taux d'alcool constaté et de la situation du conducteur."}
];

/* =========================================================
REGLES
========================================================= */

const RULES = [
{"titre":"La priorité à droite","desc":"À une intersection, la priorité de droite s'applique lorsque rien ne prévoit une autre règle de priorité."},
{"titre":"Les ronds-points et giratoires","desc":"La priorité dépend de la signalisation présente à l'entrée du giratoire. Il faut toujours observer les panneaux et marquages."},
{"titre":"La priorité des trams","desc":"Les règles de priorité applicables aux véhicules sur rails doivent être respectées. Une attention particulière est nécessaire lors du croisement d'un tram."},
{"titre":"Vitesses maximales en Belgique","desc":"Les limitations de vitesse dépendent notamment de la Région, du type de route, de la zone et de la signalisation."},
{"titre":"Arrêt et stationnement","desc":"L'arrêt correspond notamment à une immobilisation brève liée à l'embarquement, au débarquement ou au chargement. Le stationnement correspond à une immobilisation qui ne relève pas de cette situation."},
{"titre":"Le couloir de secours","desc":"En cas de ralentissement important ou d'embouteillage sur une route comportant plusieurs bandes de circulation dans le même sens, les conducteurs doivent permettre le passage des véhicules prioritaires selon les règles applicables."}
];

/* =========================================================
CATEGORIES
========================================================= */

const CATEGORIES = {
A:{label:"Danger",color:"var(--red)"},
B:{label:"Priorité",color:"var(--amber)"},
C:{label:"Interdiction",color:"var(--red)"},
D:{label:"Obligation",color:"var(--blue)"},
E:{label:"Stationnement",color:"var(--blue)"},
F:{label:"Indication",color:"var(--teal)"},
X:{label:"Panonceaux",color:"var(--purple)"}
};

/* =========================================================
DONNEES DE L'APPLICATION
========================================================= */

const DEFAULT_APP_DATA = {
favorites:[],
stats:{
sessions:0,
correct:0,
total:0
},
mistakes:{},
theme:"light",
streak:0
};

let appData = JSON.parse(JSON.stringify(DEFAULT_APP_DATA));

async function loadAppData(){
try{
if(window.storage && typeof window.storage.get === "function"){
const result = await window.storage.get("app-state", false);

```
  if(result && typeof result.value === "string"){
    const parsed = JSON.parse(result.value);

    appData = {
      ...DEFAULT_APP_DATA,
      ...parsed,
      stats:{
        ...DEFAULT_APP_DATA.stats,
        ...(parsed.stats || {})
      }
    };
  }
}
```

}catch(error){
console.warn("Impossible de charger les données locales :", error);
}
}

async function saveAppData(){
try{
if(window.storage && typeof window.storage.set === "function"){
await window.storage.set(
"app-state",
JSON.stringify(appData),
false
);
}else{
localStorage.setItem(
"code-route-app-state",
JSON.stringify(appData)
);
}
}catch(error){
try{
localStorage.setItem(
"code-route-app-state",
JSON.stringify(appData)
);
}catch(e){
console.warn("Impossible de sauvegarder les données :", e);
}
}
}

function favorites(){
return appData.favorites;
}

function stats(){
return appData.stats;
}

function mistakes(){
return appData.mistakes;
}

/* =========================================================
ETAT DU QUIZ
========================================================= */

let state = {
categories:["A","B","C","D","E","F"],
questionCount:15,
timer:false,
questions:[],
index:0,
score:0,
answered:false,
options:[],
errors:[],
categoryStats:{},
review:false,
timerId:null,
seconds:15
};

/* =========================================================
UTILITAIRES
========================================================= */

function $(id){
return document.getElementById(id);
}

function escapeHTML(value){
return String(value ?? "").replace(/[&<>"']/g, char => ({
"&":"&",
"<":"<",
">":">",
""":""",
"'":"'"
}[char]));
}

function animateCount(element, from, to, suffix, duration = 550){
if(!element) return;

if(from === to){
element.textContent = to + suffix;
return;
}

const start = performance.now();

function tick(now){
const progress = Math.min(
1,
(now - start) / duration
);

```
const eased = 1 - Math.pow(1 - progress, 3);
const value = Math.round(
  from + (to - from) * eased
);

element.textContent = value + suffix;

if(progress < 1){
  requestAnimationFrame(tick);
}
```

}

requestAnimationFrame(tick);
}

function shuffle(array){
const copy = array.slice();

for(let i = copy.length - 1; i > 0; i--){
const j = Math.floor(Math.random() * (i + 1));

```
[copy[i], copy[j]] = [
  copy[j],
  copy[i]
];
```

}

return copy;
}

/* =========================================================
STATISTIQUES ACCUEIL
========================================================= */

function updateHomeStats(){
const total = stats().total;
const correct = stats().correct;

const percentage = total > 0
? Math.round(100 * correct / total)
: 0;

animateCount(
$("statSessions"),
Number($("statSessions")?.textContent) || 0,
stats().sessions,
""
);

animateCount(
$("statSuccess"),
Number(
($("statSuccess")?.textContent || "0")
.replace("%","")
) || 0,
percentage,
"%"
);

animateCount(
$("statFavs"),
Number($("statFavs")?.textContent) || 0,
favorites().length,
""
);

animateCount(
$("statQuestions"),
Number($("statQuestions")?.textContent) || 0,
total,
""
);

if($("progressPercent")){
$("progressPercent").textContent =
percentage + "%";
}

if($("progressBar")){
$("progressBar").style.width =
percentage + "%";
}

if($("progressText")){
$("progressText").textContent =
total > 0
? `${correct} bonne${correct > 1 ? "s" : ""} réponse${correct > 1 ? "s" : ""} sur ${total}`
: "Aucune session pour le moment";
}

if($("reviewCount")){
$("reviewCount").textContent =
new Set([
...favorites(),
...Object.keys(mistakes())
]).size;
}

if($("streak")){
$("streak").textContent =
appData.streak;
}

if($("reviewButton")){
$("reviewButton").style.display =
favorites().length ||
Object.keys(mistakes()).length
? "block"
: "none";
}
}

/* =========================================================
THEME
========================================================= */

async function toggleTheme(){
document.body.classList.toggle("dark");

appData.theme =
document.body.classList.contains("dark")
? "dark"
: "light";

if($("themeButton")){
$("themeButton").textContent =
appData.theme === "dark"
? "🌙"
: "☀️";
}

await saveAppData();
}

function applyTheme(){
if(appData.theme === "dark"){
document.body.classList.add("dark");

```
if($("themeButton")){
  $("themeButton").textContent = "🌙";
}
```

}
}

/* =========================================================
NAVIGATION
========================================================= */

function hideViews(){
[
"home",
"quiz",
"repo",
"infractions",
"rules"
].forEach(id => {
const element = $(id);

```
if(element){
  element.classList.add("hidden");
}
```

});
}

function goHome(){
clearInterval(state.timerId);

hideViews();

if($("home")){
$("home").classList.remove("hidden");
}

if($("homeButton")){
$("homeButton").style.display = "none";
}

updateHomeStats();
}

function showQuiz(){
clearInterval(state.timerId);

hideViews();

if($("quiz")){
$("quiz").classList.remove("hidden");
}

if($("homeButton")){
$("homeButton").style.display = "block";
}

configureQuiz();
}

function showRepo(){
hideViews();

if($("repo")){
$("repo").classList.remove("hidden");
}

if($("homeButton")){
$("homeButton").style.display = "block";
}

renderRepository();
}

function showInfractions(){
hideViews();

if($("infractions")){
$("infractions").classList.remove("hidden");
}

if($("homeButton")){
$("homeButton").style.display = "block";
}

renderInfractions();
}

function showRules(){
hideViews();

if($("rules")){
$("rules").classList.remove("hidden");
}

if($("homeButton")){
$("homeButton").style.display = "block";
}

renderRules();
}

/* =========================================================
CATEGORIES DU QUIZ
========================================================= */

function renderCategorySelector(){
const grid = $("categoryGrid");

if(!grid) return;

grid.innerHTML = "";

Object.keys(CATEGORIES)
.filter(key => key !== "X")
.forEach(key => {

```
  const category = CATEGORIES[key];

  const count =
    PANNEAUX.filter(
      panel => panel.cat === key
    ).length;

  const button =
    document.createElement("button");

  button.type = "button";

  button.className =
    "cat-chip" +
    (
      state.categories.includes(key)
        ? ""
        : " off"
    );

  button.innerHTML = `
    <span
      class="dot"
      style="background:${category.color}"
    ></span>

    <span>
      <b>${escapeHTML(category.label)}</b>
      <small>${count} panneaux</small>
    </span>
  `;

  button.onclick = () => {

    if(state.categories.includes(key)){

      if(state.categories.length === 1){
        return;
      }

      state.categories =
        state.categories.filter(
          categoryKey => categoryKey !== key
        );

    }else{

      state.categories.push(key);

    }

    renderCategorySelector();
  };

  grid.appendChild(button);
});
```

updateQuestionBounds();
}

function updateQuestionBounds(){

const available =
PANNEAUX.filter(
panel => state.categories.includes(panel.cat)
).length;

const slider = $("questionCount");

if(!slider) return;

slider.max =
Math.max(1, available);

if(Number(slider.value) > available){
slider.value = available;
}

state.questionCount =
Math.max(1, Number(slider.value));

if($("questionCountValue")){
$("questionCountValue").textContent =
state.questionCount;
}

if($("quizWarning")){
$("quizWarning").classList.toggle(
"hidden",
available >= 2
);
}
}

/* =========================================================
CONFIGURATION
========================================================= */

function configureQuiz(){

clearInterval(state.timerId);

if($("quizRunning")){
$("quizRunning").classList.add("hidden");
}

if($("quizSummary")){
$("quizSummary").classList.add("hidden");
}

if($("quizConfig")){
$("quizConfig").classList.remove("hidden");
}

renderCategorySelector();
updateHomeStats();
}

/* =========================================================
DEMARRER UN QUIZ
========================================================= */

function startQuiz(){

const pool =
PANNEAUX.filter(
panel => state.categories.includes(panel.cat)
);

if(pool.length < 1){
return;
}

state.timer =
$("timerEnabled")
? $("timerEnabled").checked
: false;

state.questions =
shuffle(pool).slice(
0,
state.questionCount
);

beginSession(false);
}

function beginSession(review){

clearInterval(state.timerId);

state.index = 0;
state.score = 0;
state.errors = [];
state.categoryStats = {};
state.review = review;
state.answered = false;

if($("quizConfig")){
$("quizConfig").classList.add("hidden");
}

if($("quizSummary")){
$("quizSummary").classList.add("hidden");
}

if($("quizRunning")){
$("quizRunning").classList.remove("hidden");
}

renderQuestion();
}

/* =========================================================
REVISION
========================================================= */

function startReview(){

const reviewMap = new Map();

favorites().forEach(code => {
const panel =
PANNEAUX.find(
item => item.code === code
);

```
if(panel){
  reviewMap.set(
    panel.code,
    panel
  );
}
```

});

Object.keys(mistakes()).forEach(code => {

```
const panel =
  PANNEAUX.find(
    item => item.code === code
  );

if(panel){
  reviewMap.set(
    panel.code,
    panel
  );
}
```

});

const list =
shuffle(
Array.from(
reviewMap.values()
)
);

if(!list.length){
showQuiz();
return;
}

state.questions = list;
state.timer = false;

beginSession(true);
}

function reviewErrors(){

state.questions =
state.errors.map(
error => error.panel
);

state.timer = false;

beginSession(true);
}

/* =========================================================
GENERATION VISUELLE DES PANNEAUX
========================================================= */

function makeSignSVG(panel, small = false){

const code =
escapeHTML(panel.code);

const cat =
panel.cat;

let typeClass = "danger";

if(cat === "A"){
typeClass = "danger";
}
else if(cat === "B"){
typeClass =
code === "B9" ||
code === "B11"
? "priorite losange"
: "priorite";
}
else if(cat === "C"){
typeClass = "interdiction";
}
else if(cat === "D"){
typeClass = "obligation";
}
else if(cat === "E"){
typeClass = "stationnement";
}
else if(cat === "F"){
typeClass = "indication";
}
else{
typeClass = "panonceau";
}

let symbol = "";

if(panel.num){
symbol = `       <strong class="sign-number">
        ${escapeHTML(panel.num)}       </strong>
    `;
}
else if(code === "B5"){
symbol = `       <strong class="sign-symbol">
        STOP       </strong>
    `;
}
else if(code === "B1"){
symbol = `       <strong class="sign-symbol">
        ▼       </strong>
    `;
}
else if(code === "B9"){
symbol = `       <strong class="sign-symbol">
        ◆       </strong>
    `;
}
else if(code === "B11"){
symbol = `       <strong class="sign-symbol">
        ◇       </strong>
    `;
}
else if(cat === "D"){
symbol = `       <strong class="sign-symbol">
        ↑       </strong>
    `;
}
else if(cat === "C"){
symbol = `       <strong class="sign-symbol">
        !       </strong>
    `;
}
else if(cat === "A"){
symbol = `       <strong class="sign-symbol">
        !       </strong>
    `;
}
else{
symbol = `       <strong class="sign-symbol">
        ${escapeHTML(code)}       </strong>
    `;
}

return `     <div class="sign-stage ${small ? "mini" : ""}">       <div class="sign-card ${typeClass}">
        ${symbol}         <div class="sign-code">${code}</div>         <div class="sign-subtext">
          ${escapeHTML(
            CATEGORIES[cat]?.label || "Signal"
          )}         </div>       </div>     </div>
  `;
}

/* =========================================================
AFFICHAGE DES QUESTIONS
========================================================= */

function renderProgressDots(){

if(!$("progressDots")) return;

$("progressDots").innerHTML =
state.questions
.map((_, index) => `         <i
          class="${index < state.index ? "done" : ""}"         ></i>
      `)
.join("");
}

function renderQuestion(){

clearInterval(state.timerId);

if(
state.index >=
state.questions.length
){
showSummary();
return;
}

renderProgressDots();

const panel =
state.questions[state.index];

if($("quizProgress")){
$("quizProgress").textContent =
`${state.review ? "Révision" : "Question"} ${state.index + 1} / ${state.questions.length}`;
}

if($("quizScore")){
$("quizScore").textContent =
"Score : " + state.score;
}

if($("favoriteButton")){
$("favoriteButton").textContent =
favorites().includes(panel.code)
? "⭐"
: "☆";
}

if($("signStage")){
$("signStage").innerHTML =
makeSignSVG(panel, false);
}

if($("signCaption")){
$("signCaption").textContent =
`${panel.code} — ${CATEGORIES[panel.cat]?.label || "Panonceau"}`;
}

const distractors =
shuffle(
PANNEAUX.filter(
item => item.code !== panel.code
)
).slice(0, 3);

state.options =
shuffle([
panel,
...distractors
]);

state.answered = false;

if($("optionList")){
$("optionList").innerHTML =
state.options
.map((option, index) => `           <button
            class="option"
            onclick="answerQuestion(${index})"           >
            ${escapeHTML(option.nom)}           </button>
        `)
.join("");
}

if($("feedbackZone")){
$("feedbackZone").innerHTML = "";
}

if($("nextButtonZone")){
$("nextButtonZone").innerHTML = "";
}

if(state.timer){

```
state.seconds = 15;

if($("timerDisplay")){
  $("timerDisplay").classList.remove(
    "hidden",
    "low"
  );

  $("timerDisplay").textContent =
    "⏳ 15s";
}

state.timerId =
  setInterval(() => {

    state.seconds--;

    if($("timerDisplay")){
      $("timerDisplay").textContent =
        "⏳ " + state.seconds + "s";

      $("timerDisplay").classList.toggle(
        "low",
        state.seconds <= 5
      );
    }

    if(state.seconds <= 0){

      clearInterval(
        state.timerId
      );

      timeoutQuestion();
    }

  }, 1000);
```

}else{

```
if($("timerDisplay")){
  $("timerDisplay").classList.add(
    "hidden"
  );
}
```

}
}

/* =========================================================
REPONSES
========================================================= */

function timeoutQuestion(){

if(state.answered){
return;
}

completeAnswer(-1);
}

function answerQuestion(index){

if(state.answered){
return;
}

clearInterval(state.timerId);

completeAnswer(index);
}

async function completeAnswer(selectedIndex){

state.answered = true;

const panel =
state.questions[state.index];

const selected =
selectedIndex >= 0
? state.options[selectedIndex]
: null;

const correct =
selected &&
selected.code === panel.code;

const categoryState =
state.categoryStats[panel.cat] ||
{
correct:0,
total:0
};

categoryState.total++;

if(correct){

```
state.score++;
categoryState.correct++;
```

}else{

```
state.errors.push({
  panel,
  answer:
    selected
      ? selected.nom
      : "Temps écoulé"
});

appData.mistakes[panel.code] =
  (appData.mistakes[panel.code] || 0) + 1;

await saveAppData();
```

}

state.categoryStats[panel.cat] =
categoryState;

document
.querySelectorAll(
"#optionList .option"
)
.forEach((element, index) => {

```
  element.classList.add(
    "locked"
  );

  if(
    state.options[index].code ===
    panel.code
  ){
    element.classList.add(
      "correct"
    );
  }
  else if(
    index === selectedIndex
  ){
    element.classList.add(
      "wrong"
    );
  }
});
```

if($("feedbackZone")){

```
const message =
  correct
    ? "Bonne réponse"
    : selectedIndex < 0
      ? "Temps écoulé — c’était : " +
        escapeHTML(panel.nom)
      : "Ce n’était pas ça — c’était : " +
        escapeHTML(panel.nom);

$("feedbackZone").innerHTML = `
  <div
    class="feedback ${correct ? "" : "bad"}"
  >
    <b>${message}</b>
    ${escapeHTML(panel.desc)}
  </div>
`;
```

}

if($("nextButtonZone")){

```
$("nextButtonZone").innerHTML = `
  <button
    class="primary"
    style="width:100%"
    onclick="nextQuestion()"
  >
    ${
      state.index + 1 >=
      state.questions.length
        ? "Voir le résumé"
        : "Question suivante"
    }
  </button>
`;
```

}

if($("quizScore")){
$("quizScore").textContent =
"Score : " + state.score;
}
}

function nextQuestion(){

state.index++;

renderQuestion();
}

/* =========================================================
FAVORIS
========================================================= */

async function toggleFavorite(){

const panel =
state.questions[state.index];

if(!panel){
return;
}

const index =
appData.favorites.indexOf(
panel.code
);

if(index >= 0){

```
appData.favorites.splice(
  index,
  1
);
```

}else{

```
appData.favorites.push(
  panel.code
);
```

}

if($("favoriteButton")){
$("favoriteButton").textContent =
favorites().includes(panel.code)
? "⭐"
: "☆";
}

await saveAppData();

updateHomeStats();
}

/* =========================================================
RESUME
========================================================= */

async function showSummary(){

clearInterval(state.timerId);

const total =
state.questions.length;

const percentage =
total
? Math.round(
100 * state.score / total
)
: 0;

if(!state.review){

```
appData.stats.sessions++;

appData.stats.correct +=
  state.score;

appData.stats.total +=
  total;

await saveAppData();
```

}

if($("quizRunning")){
$("quizRunning").classList.add(
"hidden"
);
}

if($("quizSummary")){
$("quizSummary").classList.remove(
"hidden"
);
}

if($("summaryTitle")){
$("summaryTitle").textContent =
state.review
? "Révision terminée"
: "Session terminée";
}

if($("summaryPercent")){
$("summaryPercent").textContent =
"0%";

```
animateCount(
  $("summaryPercent"),
  0,
  percentage,
  "%",
  700
);
```

}

if($("summaryFraction")){
$("summaryFraction").textContent =
`${state.score} / ${total}`;
}

if($("summaryMessage")){
$("summaryMessage").textContent =
percentage >= 90
? "Excellent — très bon niveau."
: percentage >= 70
? "Bon score, continue à travailler tes points faibles."
: "Encore un peu d’entraînement requis.";
}

if($("categoryResults")){

```
$("categoryResults").innerHTML =
  Object.entries(
    state.categoryStats
  )
  .map(([category, result]) => {

    const percent =
      Math.round(
        100 *
        result.correct /
        result.total
      );

    return `
      <div class="category-result">

        <div class="category-result-top">
          <span>
            ${escapeHTML(
              CATEGORIES[category].label
            )}
          </span>

          <span>
            ${result.correct}/${result.total}
          </span>
        </div>

        <div class="category-track">
          <span
            data-target="${percent}"
            style="background:${CATEGORIES[category].color};"
          ></span>
        </div>

      </div>
    `;
  })
  .join("");
```

}

requestAnimationFrame(() => {

```
document
  .querySelectorAll(
    "#categoryResults .category-track span"
  )
  .forEach(element => {

    element.style.width =
      element.dataset.target + "%";

  });
```

});

if(state.errors.length){

```
if($("errorResults")){

  $("errorResults").innerHTML = `
    <details class="errors">

      <summary>
        Revoir les ${state.errors.length} erreur(s)
      </summary>

      ${state.errors.map(error => `
        <div class="error">

          <b>
            [${escapeHTML(error.panel.code)}]
            ${escapeHTML(error.panel.nom)}
          </b>

          <div class="your-answer">
            Ta réponse :
            ${escapeHTML(error.answer)}
          </div>

          <div>
            ${escapeHTML(error.panel.desc)}
          </div>

        </div>
      `).join("")}

    </details>
  `;
}

if($("reviewErrorsZone")){

  $("reviewErrorsZone").innerHTML = `
    <button
      class="danger"
      style="width:100%"
      onclick="reviewErrors()"
    >
      Refaire mes erreurs
      (${state.errors.length})
    </button>
  `;
}
```

}else{

```
if($("errorResults")){
  $("errorResults").innerHTML = "";
}

if($("reviewErrorsZone")){
  $("reviewErrorsZone").innerHTML = "";
}
```

}

updateHomeStats();
}

function replayQuiz(){

beginSession(
state.review
);
}

/* =========================================================
REPERTOIRE DES PANNEAUX
========================================================= */

function renderRepository(){

if(!$("repoSearch") || !$("repoList")){
return;
}

const query =
$("repoSearch").value
.trim()
.toLowerCase();

const results =
PANNEAUX.filter(panel => {

```
  if(!query){
    return true;
  }

  return [
    panel.code,
    panel.nom,
    panel.desc,
    CATEGORIES[panel.cat]?.label
  ]
  .join(" ")
  .toLowerCase()
  .includes(query);

});
```

if($("repoCount")){
$("repoCount").textContent =
`${results.length} panneau(x) — base de ${PANNEAUX.length}`;
}

const list =
$("repoList");

list.innerHTML = "";

Object.keys(CATEGORIES)
.forEach(category => {

```
  const group =
    results.filter(
      panel =>
        panel.cat === category
    );

  if(!group.length){
    return;
  }

  list.insertAdjacentHTML(
    "beforeend",
    `
      <div class="repo-head">
        <span
          class="dot"
          style="background:${CATEGORIES[category].color}"
        ></span>
        ${escapeHTML(
          CATEGORIES[category].label
        )}
      </div>
    `
  );

  group.forEach(panel => {

    list.insertAdjacentHTML(
      "beforeend",
      `
        <div class="repo-item">

          <div class="repo-thumb">
            ${makeSignSVG(panel, true)}
          </div>

          <div>

            <div class="repo-code">
              ${escapeHTML(panel.code)}
            </div>

            <div class="repo-name">
              ${escapeHTML(panel.nom)}
            </div>

            <div class="repo-desc">
              ${escapeHTML(panel.desc)}
            </div>

          </div>

        </div>
      `
    );

  });

});
```

if(!results.length){

```
list.innerHTML = `
  <div class="empty">
    Aucun panneau ne correspond à cette recherche.
  </div>
`;
```

}
}

/* =========================================================
INFRACTIONS
========================================================= */

function renderInfractions(){

if(!$("infractionSearch") ||
!$("infractionList")){
return;
}

const query =
$("infractionSearch").value
.trim()
.toLowerCase();

const results =
INFRACTIONS.filter(infraction => {

```
  if(!query){
    return true;
  }

  return [
    infraction.titre,
    infraction.degre,
    infraction.amende,
    infraction.desc
  ]
  .join(" ")
  .toLowerCase()
  .includes(query);

});
```

$("infractionList").innerHTML =
results.length

```
  ? results.map(infraction => {

      let badgeClass = "";

      if(
        infraction.degre.includes("2ème")
      ){
        badgeClass = "badge-2";
      }
      else if(
        infraction.degre.includes("3ème")
      ){
        badgeClass = "badge-3";
      }
      else if(
        infraction.degre.includes("4ème") ||
        infraction.degre.includes("Tribunal")
      ){
        badgeClass = "badge-4";
      }
      else if(
        infraction.degre.includes("Vitesse")
      ){
        badgeClass = "badge-vitesse";
      }
      else if(
        infraction.degre.includes("Alcool")
      ){
        badgeClass = "badge-alcool";
      }

      return `
        <div class="info-card">

          <div class="info-header">

            <span
              class="badge ${badgeClass}"
            >
              ${escapeHTML(
                infraction.degre
              )}
            </span>

            <b>
              ${escapeHTML(
                infraction.amende
              )}
            </b>

          </div>

          <b>
            ${escapeHTML(
              infraction.titre
            )}
          </b>

          <p>
            ${escapeHTML(
              infraction.desc
            )}
          </p>

        </div>
      `;

    }).join("")

  : `
    <div class="empty">
      Aucune infraction ne correspond.
    </div>
  `;
```

}

/* =========================================================
REGLES
========================================================= */

function renderRules(){

if(!$("ruleSearch") ||
!$("ruleList")){
return;
}

const query =
$("ruleSearch").value
.trim()
.toLowerCase();

const results =
RULES.filter(rule => {

```
  if(!query){
    return true;
  }

  return [
    rule.titre,
    rule.desc
  ]
  .join(" ")
  .toLowerCase()
  .includes(query);

});
```

$("ruleList").innerHTML =
results.length

```
  ? results.map(rule => `
      <div class="rule-card">

        <b>
          ${escapeHTML(rule.titre)}
        </b>

        <p>
          ${rule.desc}
        </p>

      </div>
    `).join("")

  : `
    <div class="empty">
      Aucune règle ne correspond.
    </div>
  `;
```

}

/* =========================================================
RACCOURCIS CLAVIER
========================================================= */

document.addEventListener(
"keydown",
event => {

```
const quizRunning =
  $("quizRunning");

if(
  !quizRunning ||
  quizRunning.classList.contains("hidden")
){
  return;
}

if(
  event.key >= "1" &&
  event.key <= "4" &&
  !state.answered
){
  answerQuestion(
    Number(event.key) - 1
  );
}

if(
  event.key === "Enter" &&
  state.answered
){
  nextQuestion();
}

if(
  event.key.toLowerCase() === "f"
){
  toggleFavorite();
}

if(
  event.key === "Escape"
){
  goHome();
}
```

}
);

/* =========================================================
SLIDER DU NOMBRE DE QUESTIONS
========================================================= */

const questionCountInput =
$("questionCount");

if(questionCountInput){

questionCountInput.addEventListener(
"input",
event => {

```
  state.questionCount =
    Number(event.target.value);

  if($("questionCountValue")){
    $("questionCountValue").textContent =
      state.questionCount;
  }

}
```

);
}

/* =========================================================
INITIALISATION
========================================================= */

async function init(){

await loadAppData();

/* Récupération éventuelle depuis localStorage */
try{

```
if(
  window.storage &&
  typeof window.storage.get === "function"
){

  /* window.storage est prioritaire */

}else{

  const saved =
    localStorage.getItem(
      "code-route-app-state"
    );

  if(saved){

    const parsed =
      JSON.parse(saved);

    appData = {
      ...DEFAULT_APP_DATA,
      ...parsed,
      stats:{
        ...DEFAULT_APP_DATA.stats,
        ...(parsed.stats || {})
      }
    };

  }

}
```

}catch(error){

```
console.warn(
  "Impossible de lire les données locales :",
  error
);
```

}

applyTheme();

renderCategorySelector();

updateHomeStats();

goHome();

document.body.classList.add(
"ready"
);
}

init();
