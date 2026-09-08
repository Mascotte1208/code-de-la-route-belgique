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
  {"code":"A21","nom":"Passage pour piétons","cat":"A","desc":"Annonce un passage clouté à proximité."},
  {"code":"A23","nom":"Endroit fréquenté par des enfants","cat":"A","desc":"Présence d'écoles ou aires de jeux."},
  {"code":"A25","nom":"Passage de cyclistes","cat":"A","desc":"Débouché de cyclistes ou piste cyclable."},
  {"code":"A31","nom":"Travaux","cat":"A","desc":"Présence d'un chantier sur ou le long de la voie publique."},
  {"code":"A33","nom":"Feux de circulation","cat":"A","desc":"Annonce des feux tricolores en amont."},
  {"code":"A51","nom":"Danger indéterminé","cat":"A","desc":"Danger particulier précisé par un panonceau additionnel."},

  {"code":"B1","nom":"Cédez le passage","cat":"B","desc":"Triangle pointé vers le bas. Céder le passage aux usagers de la voie prioritaire."},
  {"code":"B5","nom":"Stop (Arrêt obligatoire)","cat":"B","desc":"Obligation de marquer l'arrêt complet avant la ligne d'effet."},
  {"code":"B9","nom":"Voie prioritaire","cat":"B","desc":"Losange jaune : vous êtes prioritaire aux intersections."},
  {"code":"B11","nom":"Fin de voie prioritaire","cat":"B","desc":"Losange barré : fin du statut de route prioritaire."},
  {"code":"B15","nom":"Priorité à l'intersection","cat":"B","desc":"Vous avez la priorité uniquement à la prochaine intersection."},
  {"code":"B17","nom":"Priorité à droite","cat":"B","desc":"Règle générale : céder le passage venant de droite."},

  {"code":"C1","nom":"Accès interdit dans les deux sens","cat":"C","desc":"Interdiction à tout conducteur de s'engager."},
  {"code":"C3","nom":"Sens interdit","cat":"C","desc":"Interdiction de s'engager dans cette voie."},
  {"code":"C5","nom":"Accès interdit aux automobiles","cat":"C","desc":"Interdit aux voitures et camions."},
  {"code":"C7","nom":"Accès interdit aux motocycles","cat":"C","desc":"Interdit aux motos."},
  {"code":"C11","nom":"Accès interdit aux cyclistes","cat":"C","desc":"Interdit aux vélos."},
  {"code":"C19","nom":"Accès interdit aux piétons","cat":"C","desc":"Interdit aux piétons."},
  {"code":"C23","nom":"Accès interdit aux camions","cat":"C","desc":"Interdit aux véhicules lourds de marchandises."},
  {"code":"C35","nom":"Interdiction de dépasser","cat":"C","desc":"Interdiction de dépasser les véhicules à moteur."},
  {"code":"C43 30","nom":"Vitesse limitée à 30 km/h","cat":"C","desc":"Vitesse maximale autorisée de 30 km/h.","num":"30"},
  {"code":"C43 50","nom":"Vitesse limitée à 50 km/h","cat":"C","desc":"Vitesse maximale autorisée de 50 km/h.","num":"50"},
  {"code":"C43 70","nom":"Vitesse limitée à 70 km/h","cat":"C","desc":"Vitesse maximale autorisée de 70 km/h.","num":"70"},
  {"code":"C43 90","nom":"Vitesse limitée à 90 km/h","cat":"C","desc":"Vitesse maximale autorisée de 90 km/h.","num":"90"},
  {"code":"C45","nom":"Fin de toutes les interdictions locales","cat":"C","desc":"Fin des limitations de vitesse ou de dépassement."},

  {"code":"D1a","nom":"Direction obligatoire à droite","cat":"D","desc":"Obligation de tourner à droite."},
  {"code":"D1b","nom":"Direction obligatoire à gauche","cat":"D","desc":"Obligation de tourner à gauche."},
  {"code":"D9","nom":"Piste cyclable obligatoire","cat":"D","desc":"Voie exclusive réservée aux cyclistes."},
  {"code":"D10","nom":"Chemin pour piétons","cat":"D","desc":"Voie réservée exclusivement aux piétons."},

  {"code":"E1","nom":"Stationnement interdit","cat":"E","desc":"Interdiction de stationner du côté du panneau. L'arrêt reste autorisé."},
  {"code":"E3","nom":"Arrêt et stationnement interdits","cat":"E","desc":"Interdiction absolue de s'arrêter et de stationner."},
  {"code":"E9a","nom":"Stationnement autorisé (Parking)","cat":"E","desc":"Indique un emplacement ou un parking autorisé."},

  {"code":"F1","nom":"Commencement d'agglomération","cat":"F","desc":"Vitesse limitée par défaut à 50 km/h (30 km/h à Bruxelles)."},
  {"code":"F3","nom":"Fin d'agglomération","cat":"F","desc":"Les règles d'agglomération prennent fin."},
  {"code":"F5","nom":"Autoroute","cat":"F","desc":"Début d'autoroute (vitesse min. 70, max. 120 km/h)."},
  {"code":"F9","nom":"Route pour automobiles","cat":"F","desc":"Voie réservée aux véhicules automobiles."},
  {"code":"F12a","nom":"Zone résidentielle / Zone de rencontre","cat":"F","desc":"Piétons prioritaires sur toute la largeur. Vitesse max 20 km/h."},
  {"code":"F19","nom":"Sens unique","cat":"F","desc":"Indique une rue à sens unique."},
  {"code":"F4a","nom":"Début de zone 30","cat":"F","desc":"Entrée d'une zone où la vitesse est limitée à 30 km/h."},
  {"code":"F4b","nom":"Fin de zone 30","cat":"F","desc":"Sortie de la zone 30."},

  {"code":"Panonceau 1","nom":"Distance avant le danger","cat":"X","desc":"Indique la distance à laquelle se situe le danger ou la règle."},
  {"code":"Panonceau 2","nom":"Etendue de la mesure","cat":"X","desc":"Indique la longueur sur laquelle s'applique la prescription."},
  {"code":"Panonceau 3","nom":"Répétition / Rappel","cat":"X","desc":"Confirme qu'une interdiction ou obligation est toujours d'application."}
];

const INFRACTIONS = [
  {"titre":"Oubli du clignotant","degre":"1er Degré","amende":"58 €","desc":"Omettre d'indiquer un changement de direction, un dépassement ou la sortie d'un rond-point."},
  {"titre":"Stationnement gênant simple","degre":"1er Degré","amende":"58 €","desc":"Stationner sur une zone non autorisée sans gêner gravement la circulation."},
  {"titre":"Circuler sur une bande de bus","degre":"1er Degré","amende":"58 €","desc":"Emprunter une bande réservée aux transports en commun sans autorisation."},
  {"titre":"Défaut de documents à bord","degre":"1er Degré","amende":"58 €","desc":"Ne pas présenter immédiatement son permis, son certificat d'immatriculation ou son assurance."},
  {"titre":"Utilisation abusive des feux de brouillard","degre":"1er Degré","amende":"58 €","desc":"Allumer les feux antibrouillard par temps clair ou pluie légère (éblouissement)."},
  {"titre":"Non-port de la ceinture de sécurité","degre":"2ème Degré","amende":"116 €","desc":"Obligatoire pour tous les occupants du véhicule (conducteur et passagers)."},
  {"titre":"Franchissement d'un feu orange","degre":"2ème Degré","amende":"116 €","desc":"S'engager au feu orange alors qu'il était possible de s'arrêter en sécurité."},
  {"titre":"Stationnement sur passage pour piétons","degre":"2ème Degré","amende":"116 €","desc":"Se garer sur un passage clouté, un trottoir protégeant les piétons ou une piste cyclable."},
  {"titre":"Conduite sans feux la nuit","degre":"2ème Degré","amende":"116 €","desc":"Oublier d'allumer ses feux de croisement entre la tombée et le lever du jour."},
  {"titre":"Dépassement par la droite","degre":"2ème Degré","amende":"116 €","desc":"Interdit sauf en cas de files ininterrompues de véhicules sur les autres bandes."},
  {"titre":"Non-respect de la distance de sécurité","degre":"2ème Degré","amende":"116 €","desc":"Ne pas laisser une distance suffisante par rapport au véhicule qui précède."},
  {"titre":"Ne pas céder le passage à un piéton engagé","degre":"2ème Degré","amende":"116 €","desc":"Refuser la priorité à un piéton s'engageant sur un passage clouté."},
  {"titre":"Usage du GSM au volant","degre":"3ème Degré","amende":"174 €","desc":"Tenir un téléphone ou un écran en main en conduisant. Entraîne un retrait immédiat de permis (15 jours)."},
  {"titre":"Franchir un feu rouge","degre":"3ème Degré","amende":"174 €","desc":"S'engager à un carrefour alors que le feu est rouge fixe ou clignotant."},
  {"titre":"Non-respect d'un panneau STOP (B5)","degre":"3ème Degré","amende":"174 €","desc":"Oublier de marquer un temps d'arrêt complet à la ligne d'effet."},
  {"titre":"Franchir une ligne blanche continue","degre":"3ème Degré","amende":"174 €","desc":"Rouler sur ou franchir une ligne continue délimitant les bandes."},
  {"titre":"Prendre un sens interdit (C3)","degre":"3ème Degré","amende":"174 €","desc":"S'engager dans une rue en sens interdit."},
  {"titre":"Franchir un passage à niveau fermé","degre":"3ème Degré","amende":"174 €","desc":"Passer outre des barrières en mouvement ou des feux rouges clignotants."},
  {"titre":"Faire demi-tour sur autoroute","degre":"4ème Degré","amende":"Tribunal","desc":"Comprend la marche arrière et le contresens sur autoroute. Déchéance du permis obligatoire."},
  {"titre":"Refus d'obtempérer","degre":"4ème Degré","amende":"Tribunal","desc":"Ignorer les ordres d'un agent de police qualifié."},
  {"titre":"Courses de vitesse illégales (Street racing)","degre":"4ème Degré","amende":"Tribunal","desc":"Organiser ou participer à des concours de vitesse sur la voie publique."},
  {"titre":"Délit de fuite","degre":"Délit pénal","amende":"Tribunal","desc":"Quitter les lieux d'un accident pour échapper à ses responsabilités."},
  {"titre":"Excès de vitesse (Agglomération / Zone 30)","degre":"Vitesse","amende":"Dès 53 € + 11 €/km/h","desc":"Tarif de base de 53 €, puis 11 € par km/h excédentaire en zone sensible."},
  {"titre":"Excès de vitesse (Hors agglomération / Autoroute)","degre":"Vitesse","amende":"Dès 53 € + 6 €/km/h","desc":"Tarif de base de 53 €, puis 6 € par km/h excédentaire."},
  {"titre":"Alcoolémie (0,5 g/L à 0,8 g/L)","degre":"Alcool","amende":"179 € + Retrait 3h","desc":"Taux prohibé léger. Retrait immédiat du permis pour 3 heures minimum."},
  {"titre":"Alcoolémie (Supérieure à 0,8 g/L)","degre":"Alcool / Tribunal","amende":"De 420 € à 1200 €","desc":"Retrait immédiat de permis (15 jours) et convocation obligatoire au tribunal de police."}
];

const RULES = [
  {"titre":"La Priorité à Droite (Règle générale)","desc":"À toute intersection, vous devez céder le passage à tout conducteur venant de droite, sauf si un signal (panneau, feu, agent) ou une règle spécifique (carrossable vs chemin de terre) en dispose autrement."},
  {"titre":"Les Ronds-Points et Giratoires","desc":"Sauf signalisation contraire (panneau B1 'Cédez le passage' ou B5 'Stop' à l'entrée), la règle de la priorité à droite s'applique DANS le rond-point. Cependant, dans 99% des giratoires modernes en Belgique, le panneau 'Cédez le passage' est placé pour ceux qui s'engagent."},
  {"titre":"La Priorité des Trams","desc":"Le tram a TOUJOURS la priorité, même venant de gauche, sauf s'il sort d'un dépôt ou si des feux tricolores réglant la circulation s'opposent à son passage. Ne coupez jamais la trajectoire d'un tram."},
  {"titre":"Vitesses Maximales en Belgique","desc":"• Agglomération : 50 km/h partout (sauf Région de Bruxelles-Capitale où la règle générale est 30 km/h).<br>• Hors agglomération (Flandre / Wallonie) : 90 km/h.<br>• Autoroutes : 120 km/h (min. 70 km/h)."},
  {"titre":"Arrêt vs Stationnement","desc":"• **L'arrêt** : Immobilisation de courte durée pour embarquer/débarquer des personnes ou charger/décharger des marchandises (le conducteur reste à bord ou à proximité).<br>• **Le stationnement** : Immobilisation qui dépasse le temps nécessaire à l'arrêt."},
  {"titre":"Le couloir de secours (Corridor d'urgence)","desc":"En cas d'embouteillage sur autoroute ou route à 2 bandes ou plus, les véhicules doivent obligatoirement se serrer : ceux de gauche vers la gauche, ceux de droite vers la droite, pour laisser un passage central libre aux services de secours."}
];

const CATEGORIES = {
  A:{label:"Danger",color:"var(--red)"},
  B:{label:"Priorité",color:"var(--amber)"},
  C:{label:"Interdiction",color:"var(--red)"},
  D:{label:"Obligation",color:"var(--blue)"},
  E:{label:"Stationnement",color:"var(--blue)"},
  F:{label:"Indication",color:"var(--teal)"},
  X:{label:"Panonceaux",color:"var(--purple)"}
};

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
    const result = await window.storage.get("app-state", false);

    if(result && typeof result.value==="string"){
      const parsed = JSON.parse(result.value);

      appData = {
        ...DEFAULT_APP_DATA,
        ...parsed,
        stats:{
          ...DEFAULT_APP_DATA.stats,
          ...(parsed.stats||{})
        }
      };
    }
  }catch(e){}
}

async function saveAppData(){
  try{
    await window.storage.set(
      "app-state",
      JSON.stringify(appData),
      false
    );
  }catch(e){}
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

function $(id){
  return document.getElementById(id);
}

function escapeHTML(value){
  return String(value ?? "").replace(
    /[&<>"']/g,
    char=>({
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      "\"":"&quot;",
      "'":"&#39;"
    }[char])
  );
}

function animateCount(
  element,
  from,
  to,
  suffix,
  duration=550
){
  if(from===to){
    element.textContent=to+suffix;
    return;
  }

  const start=performance.now();

  function tick(now){
    const progress=Math.min(
      1,
      (now-start)/duration
    );

    const eased=1-Math.pow(1-progress,3);

    const value=Math.round(
      from+(to-from)*eased
    );

    element.textContent=value+suffix;

    if(progress<1){
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function shuffle(array){
  const copy=array.slice();

  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(
      Math.random()*(i+1)
    );

    [copy[i],copy[j]]=[
      copy[j],
      copy[i]
    ];
  }

  return copy;
}

function updateHomeStats(){

  const total=stats().total;
  const correct=stats().correct;

  const percentage=
    total>0
      ? Math.round(100*correct/total)
      : 0;

  animateCount(
    $("statSessions"),
    Number($("statSessions").textContent)||0,
    stats().sessions,
    ""
  );

  animateCount(
    $("statSuccess"),
    Number(
      ($("statSuccess").textContent||"0")
        .replace("%","")
    )||0,
    percentage,
    "%"
  );

  animateCount(
    $("statFavs"),
    Number($("statFavs").textContent)||0,
    favorites().length,
    ""
  );

  animateCount(
    $("statQuestions"),
    Number($("statQuestions").textContent)||0,
    total,
    ""
  );

  $("progressPercent").textContent=
    percentage+"%";

  $("progressBar").style.width=
    percentage+"%";

  $("progressText").textContent=
    total>0
      ? `${correct} bonne${correct>1?"s":""} réponse${correct>1?"s":""} sur ${total}`
      : "Aucune session pour le moment";

  $("reviewCount").textContent=
    new Set([
      ...favorites(),
      ...Object.keys(mistakes())
    ]).size;

  $("streak").textContent=
    appData.streak;

  $("reviewButton").style.display=
    favorites().length ||
    Object.keys(mistakes()).length
      ? "block"
      : "none";
}

async function toggleTheme(){

  document.body.classList.toggle("dark");

  appData.theme=
    document.body.classList.contains("dark")
      ? "dark"
      : "light";

  $("themeButton").textContent=
    appData.theme==="dark"
      ? "🌙"
      : "☀️";

  await saveAppData();
}

function applyTheme(){

  if(appData.theme==="dark"){
    document.body.classList.add("dark");

    $("themeButton").textContent="🌙";
  }
}

function hideViews(){

  [
    "home",
    "quiz",
    "repo",
    "infractions",
    "rules"
  ].forEach(
    id=>$(id).classList.add("hidden")
  );
}

function goHome(){

  clearInterval(state.timerId);

  hideViews();

  $("home").classList.remove("hidden");

  $("homeButton").style.display="none";

  updateHomeStats();
}

function showQuiz(){

  clearInterval(state.timerId);

  hideViews();

  $("quiz").classList.remove("hidden");

  $("homeButton").style.display="block";

  configureQuiz();
}

function showRepo(){

  hideViews();

  $("repo").classList.remove("hidden");

  $("homeButton").style.display="block";

  renderRepository();
}

function showInfractions(){

  hideViews();

  $("infractions").classList.remove("hidden");

  $("homeButton").style.display="block";

  renderInfractions();
}

function showRules(){

  hideViews();

  $("rules").classList.remove("hidden");

  $("homeButton").style.display="block";

  renderRules();
}

function renderCategorySelector(){

  const grid=$("categoryGrid");

  grid.innerHTML="";

  Object.keys(CATEGORIES)
    .filter(k=>k!=="X")
    .forEach(key=>{

      const category=CATEGORIES[key];

      const count=
        PANNEAUX.filter(
          p=>p.cat===key
        ).length;

      const button=
        document.createElement("button");

      button.type="button";

      button.className=
        "cat-chip"+
        (
          state.categories.includes(key)
            ? ""
            : " off"
        );

      button.innerHTML=`
        <span
          class="dot"
          style="background:${category.color}"
        ></span>

        <span>
          <b>${category.label}</b>
          <small>${count} panneaux</small>
        </span>
      `;

      button.onclick=()=>{

        if(state.categories.includes(key)){

          if(state.categories.length===1){
            return;
          }

          state.categories=
            state.categories.filter(
              c=>c!==key
            );

        }else{

          state.categories.push(key);

        }

        renderCategorySelector();
      };

      grid.appendChild(button);
    });

  updateQuestionBounds();
}

function updateQuestionBounds(){

  const available=
    PANNEAUX.filter(
      p=>state.categories.includes(p.cat)
    ).length;

  const slider=
    $("questionCount");

  slider.max=
    Math.max(1,available);

  if(Number(slider.value)>available){
    slider.value=available;
  }

  state.questionCount=
    Math.max(
      1,
      Number(slider.value)
    );

  $("questionCountValue").textContent=
    state.questionCount;

  $("quizWarning").classList.toggle(
    "hidden",
    available>=2
  );
}

function configureQuiz(){

  clearInterval(state.timerId);

  $("quizRunning")
    .classList.add("hidden");

  $("quizSummary")
    .classList.add("hidden");

  $("quizConfig")
    .classList.remove("hidden");

  renderCategorySelector();

  updateHomeStats();
}

function startQuiz(){

  const pool=
    PANNEAUX.filter(
      p=>state.categories.includes(p.cat)
    );

  if(pool.length<2){
    return;
  }

  state.timer=
    $("timerEnabled").checked;

  state.questions=
    shuffle(pool).slice(
      0,
      state.questionCount
    );

  beginSession(false);
}

function beginSession(review){

  clearInterval(state.timerId);

  state.index=0;
  state.score=0;
  state.errors=[];
  state.categoryStats={};
  state.review=review;
  state.answered=false;

  $("quizConfig")
    .classList.add("hidden");

  $("quizSummary")
    .classList.add("hidden");

  $("quizRunning")
    .classList.remove("hidden");

  renderQuestion();
}

function startReview(){

  const reviewMap=new Map();

  favorites().forEach(code=>{

    const p=
      PANNEAUX.find(
        x=>x.code===code
      );

    if(p){
      reviewMap.set(
        p.code,
        p
      );
    }
  });

  Object.keys(mistakes()).forEach(code=>{

    const p=
      PANNEAUX.find(
        x=>x.code===code
      );

    if(p){
      reviewMap.set(
        p.code,
        p
      );
    }
  });

  const list=
    shuffle(
      Array.from(
        reviewMap.values()
      )
    );

  if(!list.length){
    showQuiz();
    return;
  }

  state.questions=list;
  state.timer=false;

  beginSession(true);
}

function reviewErrors(){

  state.questions=
    state.errors.map(
      e=>e.panel
    );

  state.timer=false;

  beginSession(true);
}

/* =========================================================
   GENERATEUR DE PANNEAUX
========================================================= */

function makeSignSVG(
  panel,
  small=false
){

  const code=
    escapeHTML(panel.code);

  const cat=
    panel.cat;

  let typeClass="danger";

  if(cat==="A"){
    typeClass="danger";
  }
  else if(cat==="B"){
    typeClass=
      code==="B9" ||
      code==="B11"
        ? "priorite losange"
        : "priorite";
  }
  else if(cat==="C"){
    typeClass="interdiction";
  }
  else if(cat==="D"){
    typeClass="obligation";
  }
  else if(cat==="E"){
    typeClass="stationnement";
  }
  else if(cat==="F"){
    typeClass="indication";
  }
  else{
    typeClass="panonceau";
  }

  return `
    <div class="sign-stage">
      <div class="sign-card ${typeClass}">
        <div class="sign-code">
          ${code}
        </div>

        <div class="sign-subtext">
          ${CATEGORIES[cat]?.label || "Signal"}
        </div>
      </div>
    </div>
  `;
}

function renderProgressDots(){

  $("progressDots").innerHTML=
    state.questions.map(
      (_,index)=>
        `<i class="${
          index<state.index
            ? "done"
            : ""
        }"></i>`
    ).join("");
}

function renderQuestion(){

  clearInterval(state.timerId);

  if(
    state.index>=
    state.questions.length
  ){
    showSummary();
    return;
  }

  renderProgressDots();

  const panel=
    state.questions[state.index];

  $("quizProgress").textContent=
    `${state.review?"Révision":"Question"} ${
      state.index+1
    } / ${
      state.questions.length
    }`;

  $("quizScore").textContent=
    "Score : "+state.score;

  $("favoriteButton").textContent=
    favorites().includes(panel.code)
      ? "⭐"
      : "☆";

  $("signStage").innerHTML=
    makeSignSVG(
      panel,
      false
    );

  $("signCaption").textContent=
    `${panel.code} — ${
      CATEGORIES[panel.cat]?.label ||
      "Panonceau"
    }`;

  const distractors=
    shuffle(
      PANNEAUX.filter(
        p=>p.code!==panel.code
      )
    ).slice(0,3);

  state.options=
    shuffle([
      panel,
      ...distractors
    ]);

  state.answered=false;

  $("optionList").innerHTML=
    state.options.map(
      (opt,i)=>`
        <button
          class="option"
          onclick="answerQuestion(${i})"
        >
          ${escapeHTML(opt.nom)}
        </button>
      `
    ).join("");

  $("feedbackZone").innerHTML="";
  $("nextButtonZone").innerHTML="";

  if(state.timer){

    state.seconds=15;

    $("timerDisplay")
      .classList.remove(
        "hidden",
        "low"
      );

    $("timerDisplay").textContent=
      "⏳ 15s";

    state.timerId=
      setInterval(()=>{

        state.seconds--;

        $("timerDisplay").textContent=
          "⏳ "+
          state.seconds+
          "s";

        $("timerDisplay")
          .classList.toggle(
            "low",
            state.seconds<=5
          );

        if(state.seconds<=0){

          clearInterval(
            state.timerId
          );

          timeoutQuestion();
        }

      },1000);

  }else{

    $("timerDisplay")
      .classList.add("hidden");
  }
}

function timeoutQuestion(){

  if(state.answered){
    return;
  }

  completeAnswer(-1);
}

function answerQuestion(i){

  if(state.answered){
    return;
  }

  clearInterval(
    state.timerId
  );

  completeAnswer(i);
}

async function completeAnswer(
  selectedIndex
){

  state.answered=true;

  const panel=
    state.questions[state.index];

  const selected=
    selectedIndex>=0
      ? state.options[selectedIndex]
      : null;

  const correct=
    selected &&
    selected.code===panel.code;

  const categoryState=
    state.categoryStats[panel.cat] ||
    {
      correct:0,
      total:0
    };

  categoryState.total++;

  if(correct){

    state.score++;

    categoryState.correct++;

  }else{

    state.errors.push({
      panel,
      answer:
        selected
          ? selected.nom
          : "Temps écoulé"
    });

    appData.mistakes[panel.code]=
      (appData.mistakes[panel.code]||0)+1;

    await saveAppData();
  }

  state.categoryStats[panel.cat]=
    categoryState;

  document
    .querySelectorAll(
      "#optionList .option"
    )
    .forEach((el,i)=>{

      el.classList.add(
        "locked"
      );

      if(
        state.options[i].code===
        panel.code
      ){
        el.classList.add(
          "correct"
        );
      }
      else if(
        i===selectedIndex
      ){
        el.classList.add(
          "wrong"
        );
      }
    });

  $("feedbackZone").innerHTML=`
    <div class="feedback ${
      correct ? "" : "bad"
    }">

      <b>
        ${
          correct
            ? "Bonne réponse"
            : selectedIndex<0
              ? "Temps écoulé — c’était : "+
                escapeHTML(panel.nom)
              : "Ce n’était pas ça — c’était : "+
                escapeHTML(panel.nom)
        }
      </b>

      ${escapeHTML(panel.desc)}

    </div>
  `;

  $("nextButtonZone").innerHTML=`
    <button
      class="primary"
      style="width:100%"
      onclick="nextQuestion()"
    >
      ${
        state.index+1>=
        state.questions.length
          ? "Voir le résumé"
          : "Question suivante"
      }
    </button>
  `;

  $("quizScore").textContent=
    "Score : "+state.score;
}

function nextQuestion(){

  state.index++;

  renderQuestion();
}

async function toggleFavorite(){

  const panel=
    state.questions[state.index];

  const i=
    appData.favorites.indexOf(
      panel.code
    );

  if(i>=0){

    appData.favorites.splice(
      i,
      1
    );

  }else{

    appData.favorites.push(
      panel.code
    );
  }

  const button=
    $("favoriteButton");

  button.textContent=
    favorites().includes(panel.code)
      ? "⭐"
      : "☆";

  await saveAppData();

  updateHomeStats();
}

async function showSummary(){

  clearInterval(
    state.timerId
  );

  const total=
    state.questions.length;

  const percentage=
    total
      ? Math.round(
          100*state.score/total
        )
      : 0;

  if(!state.review){

    appData.stats.sessions++;

    appData.stats.correct+=
      state.score;

    appData.stats.total+=
      total;

    await saveAppData();
  }

  $("quizRunning")
    .classList.add("hidden");

  $("quizSummary")
    .classList.remove("hidden");

  $("summaryTitle").textContent=
    state.review
      ? "Révision terminée"
      : "Session terminée";

  $("summaryPercent").textContent=
    "0%";

  animateCount(
    $("summaryPercent"),
    0,
    percentage,
    "%",
    700
  );

  $("summaryFraction").textContent=
    `${state.score} / ${total}`;

  $("summaryMessage").textContent=
    percentage>=90
      ? "Excellent — très bon niveau."
      : percentage>=70
        ? "Bon score, continue à travailler tes points faibles."
        : "Encore un peu d’entraînement requis.";

  $("categoryResults").innerHTML=
    Object.entries(
      state.categoryStats
    ).map(
      ([cat,res])=>{

        const p=
          Math.round(
            100*
            res.correct/
            res.total
          );

        return `
          <div class="category-result">

            <div class="category-result-top">
              <span>
                ${CATEGORIES[cat].label}
              </span>

              <span>
                ${res.correct}/${res.total}
              </span>
            </div>

            <div class="category-track">
              <span
                data-target="${p}"
                style="background:${CATEGORIES[cat].color};"
              ></span>
            </div>

          </div>
        `;
      }
    ).join("");

  requestAnimationFrame(()=>{

    document
      .querySelectorAll(
        "#categoryResults .category-track span"
      )
      .forEach(el=>{

        el.style.width=
          el.dataset.target+
          "%";
      });
  });

  if(state.errors.length){

    $("errorResults").innerHTML=`
      <details class="errors">

        <summary>
          Revoir les ${state.errors.length} erreur(s)
        </summary>

        ${
          state.errors.map(
            e=>`
              <div class="error">

                <b>
                  [${escapeHTML(e.panel.code)}]
                  ${escapeHTML(e.panel.nom)}
                </b>

                <div class="your-answer">
                  Ta réponse :
                  ${escapeHTML(e.answer)}
                </div>

                <div>
                  ${escapeHTML(e.panel.desc)}
                </div>

              </div>
            `
          ).join("")
        }

      </details>
    `;

    $("reviewErrorsZone").innerHTML=`
      <button
        class="danger"
        style="width:100%"
        onclick="reviewErrors()"
      >
        Refaire mes erreurs
        (${state.errors.length})
      </button>
    `;

  }else{

    $("errorResults").innerHTML="";

    $("reviewErrorsZone").innerHTML="";
  }

  updateHomeStats();
}

function replayQuiz(){

  beginSession(
    state.review
  );
}

function renderRepository(){

  const query=
    $("repoSearch")
      .value
      .trim()
      .toLowerCase();

  const results=
    PANNEAUX.filter(p=>{

      if(!query){
        return true;
      }

      return [
        p.code,
        p.nom,
        p.desc,
        CATEGORIES[p.cat]?.label
      ]
      .join(" ")
      .toLowerCase()
      .includes(query);
    });

  $("repoCount").textContent=
    `${results.length} panneau(x) — base de ${PANNEAUX.length}`;

  const list=
    $("repoList");

  list.innerHTML="";

  Object.keys(CATEGORIES)
    .forEach(category=>{

      const group=
        results.filter(
          p=>p.cat===category
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

            ${CATEGORIES[category].label}

          </div>
        `
      );

      group.forEach(panel=>{

        list.insertAdjacentHTML(
          "beforeend",
          `
            <div class="repo-item">

              <div class="repo-thumb">
                ${makeSignSVG(panel,true)}
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

  if(!results.length){

    list.innerHTML=`
      <div class="empty">
        Aucun panneau ne correspond à cette recherche.
      </div>
    `;
  }
}

function renderInfractions(){

  const query=
    $("infractionSearch")
      .value
      .trim()
      .toLowerCase();

  const results=
    INFRACTIONS.filter(i=>{

      if(!query){
        return true;
      }

      return [
        i.titre,
        i.degre,
        i.amende,
        i.desc
      ]
      .join(" ")
      .toLowerCase()
      .includes(query);
    });

  $("infractionList").innerHTML=
    results.length

      ? results.map(i=>{

          let b="";

          if(i.degre.includes("2ème")){
            b="badge-2";
          }
          else if(i.degre.includes("3ème")){
            b="badge-3";
          }
          else if(
            i.degre.includes("4ème") ||
            i.degre.includes("Tribunal")
          ){
            b="badge-4";
          }
          else if(
            i.degre.includes("Vitesse")
          ){
            b="badge-vitesse";
          }
          else if(
            i.degre.includes("Alcool")
          ){
            b="badge-alcool";
          }

          return `
            <div class="info-card">

              <div class="info-header">

                <span class="badge ${b}">
                  ${escapeHTML(i.degre)}
                </span>

                <b>
                  ${escapeHTML(i.amende)}
                </b>

              </div>

              <b>
                ${escapeHTML(i.titre)}
              </b>

              <p>
                ${escapeHTML(i.desc)}
              </p>

            </div>
          `;
        }).join("")

      : `
        <div class="empty">
          Aucune infraction ne correspond.
        </div>
      `;
}

function renderRules(){

  const query=
    $("ruleSearch")
      .value
      .trim()
      .toLowerCase();

  const results=
    RULES.filter(r=>{

      if(!query){
        return true;
      }

      return [
        r.titre,
        r.desc
      ]
      .join(" ")
      .toLowerCase()
      .includes(query);
    });

  $("ruleList").innerHTML=
    results.length

      ? results.map(
          r=>`
            <div class="rule-card">

              <b>
                ${escapeHTML(r.titre)}
              </b>

              <p>
                ${r.desc}
              </p>

            </div>
          `
        ).join("")

      : `
        <div class="empty">
          Aucune règle ne correspond.
        </div>
      `;
}

document.addEventListener(
  "keydown",
  e=>{

    if(
      $("quizRunning")
        .classList
        .contains("hidden")
    ){
      return;
    }

    if(
      e.key>="1" &&
      e.key<="4" &&
      !state.answered
    ){
      answerQuestion(
        Number(e.key)-1
      );
    }

    if(
      e.key==="Enter" &&
      state.answered
    ){
      nextQuestion();
    }

    if(
      e.key.toLowerCase()==="f"
    ){
      toggleFavorite();
    }

    if(e.key==="Escape"){
      goHome();
    }
  }
);

$("questionCount")
  .addEventListener(
    "input",
    e=>{

      state.questionCount=
        Number(e.target.value);

      $("questionCountValue")
        .textContent=
        state.questionCount;
    }
  );

async function init(){

  await loadAppData();

  applyTheme();

  renderCategorySelector();

  updateHomeStats();

  goHome();

  document.body
    .classList
    .add("ready");
}

init();
