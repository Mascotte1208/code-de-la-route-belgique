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

const MATIERE_AUTO = [
  {
    "id": "auto_1",
    "titre": "Niveau d'huile moteur",
    "cat": "Technique",
    "desc": "Le contrôle s'effectue <b>moteur froid et sur un plan horizontal</b>, le véhicule étant à l'arrêt. Le niveau d'huile indiqué par la jauge doit se situer entre le repère MIN et le repère MAX. Un niveau insuffisant provoque une usure anormale, voire un serrage du moteur par défaut de lubrification ; un excès peut détériorer les joints et le pot catalytique."
  },
  {
    "id": "auto_2",
    "titre": "Liquide de refroidissement",
    "cat": "Technique",
    "desc": "Le niveau se vérifie visuellement via le vase d'expansion transparent, sans dépasser le repère MAX. <b>Avertissement de sécurité :</b> ne jamais ouvrir le bouchon du réservoir de refroidissement lorsque le moteur est chaud ou sous pression, sous peine de brûlures graves."
  },
  {
    "id": "auto_3",
    "titre": "Liquide de frein",
    "cat": "Technique",
    "desc": "Le niveau du réservoir de liquide de frein doit être inspecté régulièrement. S'il descend anormalement sous le niveau minimum, cela indique soit l'usure prononcée des plaquettes et disques de frein, soit une fuite dans le circuit hydraulique. Une baisse de ce niveau compromet directement l'efficacité du freinage."
  },
  {
    "id": "auto_4",
    "titre": "Liquide de lave-glace et visibilité",
    "cat": "Technique",
    "desc": "Le réservoir de lave-glace doit être maintenu plein, particulièrement en hiver ou par temps de pluie. Le bon état des balais d'essuie-glace ainsi que l'absence de fissures ou d'impacts majeurs (dans le champ de vision) sur le pare-brise sont obligatoires sous peine d'infraction."
  },
  {
    "id": "auto_5",
    "titre": "Pression et état des pneumatiques",
    "cat": "Technique",
    "desc": "La pression des pneus se vérifie <b>à froid</b> (ou en ajoutant 0,3 bar si les pneus sont chauds). Une pression inadaptée augmente la consommation de carburant, détériore la tenue de route et use prématurément la bande de roulement. La profondeur minimale légale des rainures principales est de <b>1,6 mm</b> pour les voitures particulières en Europe."
  },
  {
    "id": "auto_6",
    "titre": "Masse Maximale Autorisée (MMA / PTAC)",
    "cat": "Légal & Charges",
    "desc": "La <b>MMA</b> correspond au poids total maximal autorisé pour le véhicule en charge (véhicule vide + passagers + carburant + bagages). Cette valeur figure sur le certificat d'immatriculation (rubrique F.2). Il est strictement interdit de circuler en surcharge, ce qui altère la trajectoire, allonge les distances de freinage et fragilise les suspensions."
  },
  {
    "id": "auto_7",
    "titre": "Masse remorquable et permis de conduire",
    "cat": "Légal & Charges",
    "desc": "La capacité de traction d'un véhicule dépend de sa masse et de sa motorisation (valeur F.3 sur la carte grise). Avec un permis B standard, vous pouvez tracter une remorque dont la MMA n'excède pas 750 kg, ou une remorque plus lourde à condition que la somme des MMA (véhicule + remorque) ne dépasse pas 3 500 kg."
  },
  {
    "id": "auto_8",
    "titre": "Documents administratifs obligatoires",
    "cat": "Administratif",
    "desc": "Le conducteur doit en permanence détenir et présenter à toute réquisition des autorités :<br>1. Le permis de conduire valide et correspondant à la catégorie du véhicule.<br>2. Le certificat d'immatriculation (carte grise).<br>3. Le certificat d'assurance automobile (carte verte ou attestation valable).<br>4. Le certificat de visite du contrôle technique (si le véhicule est soumis à l'obligation)."
  },
  {
    "id": "auto_9",
    "titre": "Équipements de sécurité obligatoires à bord",
    "cat": "Sécurité",
    "desc": "Tout véhicule immatriculé doit obligatoirement disposer de :<br>• Un triangle de signalisation d'urgence.<br>• Un gilet de haute visibilité (fluo) par occupant présent à bord.<br>• Une trousse de premiers secours conforme aux normes en vigueur.<br>• Un extincteur portatif homologué et contrôlé périodiquement."
  },
  {
    "id": "auto_10",
    "titre": "Feux de signalisation et éclairage",
    "cat": "Technique",
    "desc": "Le conducteur doit s'assurer du bon fonctionnement de l'ensemble des feux : feux de position, feux de croisement (codes), feux de route (phares), feux de brouillard (avant/arrière), feux de stop et clignotants. Les optiques doivent être propres et les ampoules grillées remplacées sans délai."
  }
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

/* =========================================================
   STOCKAGE PERSISTANT
========================================================= */

const DEFAULT_APP_DATA = {
  favorites:[],
  stats:{sessions:0,correct:0,total:0},
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
        stats:{...DEFAULT_APP_DATA.stats, ...(parsed.stats||{})}
      };
    }
  }catch(e){}
}

async function saveAppData(){
  try{
    await window.storage.set("app-state", JSON.stringify(appData), false);
  }catch(e){
    console.error("Échec de la sauvegarde :", e);
  }
}

function favorites(){ return appData.favorites; }
function stats(){ return appData.stats; }
function mistakes(){ return appData.mistakes; }

let state={
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

function animateCount(element,from,to,suffix,duration=550){
  if(from===to){
    element.textContent=to+suffix;
    return;
  }
  const start=performance.now();
  function tick(now){
    const progress=Math.min(1,(now-start)/duration);
    const eased=1-Math.pow(1-progress,3);
    const value=Math.round(from+(to-from)*eased);
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
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy;
}

function updateHomeStats(){
  const total=stats().total;
  const correct=stats().correct;
  const percentage=total>0?Math.round(100*correct/total):0;

  const prevSessions=Number($("statSessions").textContent)||0;
  const prevQuestions=Number($("statQuestions").textContent)||0;
  const prevFavs=Number($("statFavs").textContent)||0;
  const prevSuccess=Number(($("statSuccess").textContent||"0").replace("%",""))||0;

  animateCount($("statSessions"),prevSessions,stats().sessions,"");
  animateCount($("statSuccess"),prevSuccess,percentage,"%");
  animateCount($("statFavs"),prevFavs,favorites().length,"");
  animateCount($("statQuestions"),prevQuestions,total,"");

  $("progressPercent").textContent=percentage+"%";
  $("progressBar").style.width=percentage+"%";

  $("progressText").textContent=
    total>0
      ? `${correct} bonne${correct>1?"s":""} réponse${correct>1?"s":""} sur ${total}`
      : "Aucune session pour le moment";

  $("reviewCount").textContent=
    new Set([
      ...favorites(),
      ...Object.keys(mistakes())
    ]).size;

  $("streak").textContent=appData.streak;

  $("reviewButton").style.display=
    favorites().length || Object.keys(mistakes()).length
      ? "block"
      : "none";
}

async function toggleTheme(){
  document.body.classList.toggle("dark");
  appData.theme=document.body.classList.contains("dark")?"dark":"light";
  $("themeButton").textContent=appData.theme==="dark"?"🌙":"☀️";
  await saveAppData();
}

function applyTheme(){
  if(appData.theme==="dark"){
    document.body.classList.add("dark");
    $("themeButton").textContent="🌙";
  }
}

function hideViews(){
  ["home","quiz","repo","infractions","rules","matiereAuto"].forEach(id=>{
    if($(id)) $(id).classList.add("hidden");
  });
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

function showMatiereAuto(){
  hideViews();
  $("matiereAuto").classList.remove("hidden");
  $("homeButton").style.display="block";
  renderMatiereAuto();
}

function renderCategorySelector(){
  const grid=$("categoryGrid");
  grid.innerHTML="";

  Object.keys(CATEGORIES)
    .filter(key=>key!=="X")
    .forEach(key=>{
      const category=CATEGORIES[key];
      const count=PANNEAUX.filter(p=>p.cat===key).length;
      const button=document.createElement("button");
      button.type="button";
      button.className="cat-chip"+(state.categories.includes(key)?"":" off");
      button.innerHTML=`
        <span class="dot" style="background:${category.color}"></span>
        <span>
          <b>${category.label}</b>
          <small>${count} panneaux</small>
        </span>
      `;
      button.onclick=()=>{
        if(state.categories.includes(key)){
          if(state.categories.length===1) return;
          state.categories=state.categories.filter(c=>c!==key);
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
  const available=PANNEAUX.filter(p=>state.categories.includes(p.cat)).length;
  const slider=$("questionCount");
  slider.max=Math.max(1,available);
  if(Number(slider.value)>available){
    slider.value=available;
  }
  state.questionCount=Math.max(1,Number(slider.value));
  $("questionCountValue").textContent=state.questionCount;
  $("quizWarning").classList.toggle("hidden",available>=2);
}

function configureQuiz(){
  clearInterval(state.timerId);
  $("quizRunning").classList.add("hidden");
  $("quizSummary").classList.add("hidden");
  $("quizConfig").classList.remove("hidden");
  renderCategorySelector();
  updateHomeStats();
}

function startQuiz(){
  const pool=PANNEAUX.filter(p=>state.categories.includes(p.cat));
  if(pool.length<2) return;
  state.timer=$("timerEnabled").checked;
  state.questions=shuffle(pool).slice(0,state.questionCount);
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
  $("quizConfig").classList.add("hidden");
  $("quizSummary").classList.add("hidden");
  $("quizRunning").classList.remove("hidden");
  renderQuestion();
}

function startReview(){
  const reviewMap=new Map();
  favorites().forEach(code=>{
    const panel=PANNEAUX.find(p=>p.code===code);
    if(panel) reviewMap.set(panel.code,panel);
  });
  Object.keys(mistakes()).forEach(code=>{
    const panel=PANNEAUX.find(p=>p.code===code);
    if(panel) reviewMap.set(panel.code,panel);
  });
  const list=shuffle(Array.from(reviewMap.values()));
  if(!list.length){
    showQuiz();
    return;
  }
  state.questions=list;
  state.timer=false;
  beginSession(true);
}

function reviewErrors(){
  state.questions=state.errors.map(error=>error.panel);
  state.timer=false;
  beginSession(true);
}

/* =========================================================
   PANNEAUX SVG — Version corrigée et stable
========================================================= */

function dangerTriangle(inner){
  return `
    <polygon points="90,12 168,154 12,154" fill="#fff" stroke="#c81e2c" stroke-width="12" stroke-linejoin="round"/>
    ${inner}
  `;
}

function prohibCircle(inner){
  return `
    <circle cx="90" cy="90" r="76" fill="#fff" stroke="#c81e2c" stroke-width="14"/>
    ${inner}
  `;
}

function obligCircle(inner){
  return `
    <circle cx="90" cy="90" r="76" fill="#1c5fa8"/>
    ${inner}
  `;
}

function makeSignSVG(panel, small=false){
  const code = escapeHTML(panel.code);
  const num = escapeHTML(panel.num || "");
  const ink = "#171a1f";
  let content = "";

  if(panel.cat === "A"){
    if(panel.code === "A1a"){
      content = dangerTriangle(`<path d="M110 65 C85 75 70 100 75 130" fill="none" stroke="${ink}" stroke-width="9" stroke-linecap="round"/><path d="M95 55 L110 65 L95 78" fill="none" stroke="${ink}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`);
    } else if(panel.code === "A1b"){
      content = dangerTriangle(`<path d="M70 65 C95 75 110 100 105 130" fill="none" stroke="${ink}" stroke-width="9" stroke-linecap="round"/><path d="M85 55 L70 65 L85 78" fill="none" stroke="${ink}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`);
    } else if(panel.code === "A3" || panel.code === "A5"){
      content = dangerTriangle(`<text x="90" y="115" text-anchor="middle" font-size="${small?18:28}" font-weight="900" fill="${ink}" font-family="Arial">10%</text>`);
    } else if(panel.code === "A33"){
      content = dangerTriangle(`<rect x="74" y="65" width="32" height="60" rx="4" fill="${ink}"/><circle cx="90" cy="80" r="6" fill="#c81e2c"/><circle cx="90" cy="95" r="6" fill="#e8a400"/><circle cx="90" cy="110" r="6" fill="#1e7a3c"/>`);
    } else {
      content = dangerTriangle(`<rect x="85" y="70" width="10" height="40" rx="3" fill="${ink}"/><circle cx="90" cy="122" r="5" fill="${ink}"/>`);
    }
  } else if(panel.cat === "B"){
    if(panel.code === "B1"){
      content = `<polygon points="12,30 168,30 90,160" fill="#fff" stroke="#c81e2c" stroke-width="12" stroke-linejoin="round"/>`;
    } else if(panel.code === "B5"){
      content = `<polygon points="60,10 120,10 170,60 170,120 120,170 60,170 10,120 10,60" fill="#c81e2c" stroke="#7a0f18" stroke-width="3" stroke-linejoin="round"/><text x="90" y="102" text-anchor="middle" font-size="${small?16:30}" font-weight="900" fill="#fff" font-family="Arial">STOP</text>`;
    } else if(panel.code === "B9" || panel.code === "B11"){
      content = `<polygon points="90,12 168,90 90,168 12,90" fill="#e8a400" stroke="${ink}" stroke-width="2.5"/>` + (panel.code === "B11" ? `<line x1="30" y1="150" x2="150" y2="30" stroke="#4a4d52" stroke-width="10"/>` : ``);
    } else {
      content = `<polygon points="90,12 168,90 90,168 12,90" fill="#fff" stroke="${ink}" stroke-width="3"/><line x1="90" y1="25" x2="90" y2="155" stroke="${ink}" stroke-width="6"/><line x1="25" y1="90" x2="155" y2="90" stroke="${ink}" stroke-width="6"/><path d="M90 90 L130 72 L130 90 L145 90 L130 108 L130 90 Z" fill="#c81e2c"/>`;
    }
  } else if(panel.cat === "C"){
    if(panel.code === "C1"){
      content = prohibCircle("");
    } else if(panel.code === "C3"){
      content = `<circle cx="90" cy="90" r="76" fill="#c81e2c"/><rect x="30" y="76" width="120" height="28" rx="4" fill="#fff"/>`;
    } else if(panel.num){
      content = prohibCircle(`<text x="90" y="108" text-anchor="middle" font-size="${small?22:52}" font-weight="900" fill="${ink}" font-family="Arial">${num}</text>`);
    } else {
      content = `<circle cx="90" cy="90" r="76" fill="#fff" stroke="#9aa1aa" stroke-width="3"/><line x1="35" y1="125" x2="125" y2="35" stroke="#4a4d52" stroke-width="8"/><line x1="55" y1="145" x2="145" y2="55" stroke="#4a4d52" stroke-width="8"/>`;
    }
  } else if(panel.cat === "D"){
    if(panel.code === "D1a"){
      content = obligCircle(`<path d="M90 130 V50 M65 75 L90 50 L115 75" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`);
    } else if(panel.code === "D1b"){
      content = obligCircle(`<path d="M130 90 H50 M75 65 L50 90 L75 115" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`);
    } else {
      content = obligCircle(`<circle cx="90" cy="65" r="10" fill="#fff"/><path d="M90 78 V110 L70 135 M90 95 L115 88" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`);
    }
  } else if(panel.cat === "E"){
    if(panel.code === "E1" || panel.code === "E3"){
      content = `<circle cx="90" cy="90" r="76" fill="#1c5fa8" stroke="#c81e2c" stroke-width="12"/><line x1="35" y1="145" x2="145" y2="35" stroke="#c81e2c" stroke-width="12"/>` + (panel.code === "E3" ? `<line x1="35" y1="35" x2="145" y2="145" stroke="#c81e2c" stroke-width="12"/>` : ``);
    } else {
      content = `<rect x="12" y="12" width="156" height="156" rx="14" fill="#1c5fa8"/><text x="90" y="122" text-anchor="middle" font-size="${small?42:90}" font-weight="900" fill="#fff" font-family="Arial">P</text>`;
    }
  } else if(panel.cat === "F"){
    if(panel.code === "F1" || panel.code === "F3"){
      const isFin = panel.code === "F3";
      content = `<rect x="12" y="45" width="156" height="90" rx="4" fill="#fff" stroke="${isFin?'#4a4d52':'#c81e2c'}" stroke-width="7"/><path d="M28 135 V105 L45 92 V135 M52 135 V82 L72 68 L92 82 V135" fill="none" stroke="${isFin?'#9aa1aa':'#171a1f'}" stroke-width="5" stroke-linejoin="round"/><line x1="20" y1="135" x2="160" y2="135" stroke="${isFin?'#9aa1aa':'#171a1f'}" stroke-width="5"/>` + (isFin ? `<line x1="20" y1="145" x2="160" y2="35" stroke="#4a4d52" stroke-width="8"/>` : ``);
    } else if(panel.code === "F5" || panel.code === "F9"){
      content = `<rect x="12" y="25" width="156" height="130" rx="8" fill="#1c5fa8"/><path d="M30 115 H150 M50 115 V80 H130 V115" fill="none" stroke="#fff" stroke-width="8" stroke-linejoin="round"/>`;
    } else if(panel.code === "F19"){
      content = `<rect x="12" y="55" width="156" height="70" rx="6" fill="#1c5fa8"/><path d="M30 90 H140 M110 65 L145 90 L110 115" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>`;
    } else {
      content = `<rect x="12" y="12" width="156" height="156" rx="10" fill="#fff" stroke="${ink}" stroke-width="3"/><text x="90" y="45" text-anchor="middle" font-size="${small?12:18}" font-weight="900" fill="${ink}" letter-spacing="2">ZONE</text><circle cx="90" cy="105" r="42" fill="#fff" stroke="#c81e2c" stroke-width="9"/><text x="90" y="118" text-anchor="middle" font-size="${small?18:34}" font-weight="900" fill="${ink}" font-family="Arial">30</text>`;
    }
  } else {
    content = `<rect x="12" y="55" width="156" height="70" rx="6" fill="#fff" stroke="${ink}" stroke-width="4"/><text x="90" y="98" text-anchor="middle" font-size="${small?16:24}" font-weight="900" fill="${ink}" font-family="Arial">50 m</text>`;
  }

  return `<svg class="sign-svg" viewBox="0 0 180 180" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${escapeHTML(panel.nom)}" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
}

function renderProgressDots(){
  $("progressDots").innerHTML=
    state.questions
      .map(
        (_,index)=>`
          <i
            class="${index<state.index?"done":""}"
          ></i>
        `
      )
      .join("");
}

function renderQuestion(){
  clearInterval(state.timerId);

  if(state.index>=state.questions.length){
    showSummary();
    return;
  }

  renderProgressDots();

  const panel=state.questions[state.index];

  $("quizProgress").textContent=
    `${state.review?"Révision":"Question"} ${state.index+1} / ${state.questions.length}`;

  $("quizScore").textContent="Score : "+state.score;

  $("favoriteButton").textContent=
    favorites().includes(panel.code) ? "⭐" : "☆";

  $("signStage").innerHTML=makeSignSVG(panel,false);

  $("signCaption").textContent=
    `${panel.code} — ${CATEGORIES[panel.cat]?.label||"Panonceau"}`;

  const distractors=
    shuffle(
      PANNEAUX.filter(
        panelItem=>panelItem.code!==panel.code
      )
    ).slice(0,3);

  state.options=shuffle([panel,...distractors]);
  state.answered=false;

  $("optionList").innerHTML=
    state.options
      .map(
        (option,index)=>`
          <button
            class="option"
            onclick="answerQuestion(${index})"
          >
            ${escapeHTML(option.nom)}
          </button>
        `
      )
      .join("");

  $("feedbackZone").innerHTML="";
  $("nextButtonZone").innerHTML="";

  if(state.timer){
    state.seconds=15;
    $("timerDisplay").classList.remove("hidden");
    $("timerDisplay").classList.remove("low");
    $("timerDisplay").textContent="⏳ 15s";

    state.timerId=setInterval(()=>{
      state.seconds--;
      $("timerDisplay").textContent="⏳ "+state.seconds+"s";
      $("timerDisplay").classList.toggle("low",state.seconds<=5);

      if(state.seconds<=0){
        clearInterval(state.timerId);
        timeoutQuestion();
      }
    },1000);
  }else{
    $("timerDisplay").classList.add("hidden");
  }
}

function timeoutQuestion(){
  if(state.answered) return;
  completeAnswer(-1);
}

function answerQuestion(index){
  if(state.answered) return;
  clearInterval(state.timerId);
  completeAnswer(index);
}

async function completeAnswer(selectedIndex){
  state.answered=true;

  const panel=state.questions[state.index];
  const selected=selectedIndex>=0?state.options[selectedIndex]:null;
  const correct=selected && selected.code===panel.code;

  const categoryState=state.categoryStats[panel.cat]||{correct:0,total:0};
  categoryState.total++;

  if(correct){
    state.score++;
    categoryState.correct++;
  }else{
    state.errors.push({
      panel,
      answer:selected?selected.nom:"Temps écoulé"
    });
    appData.mistakes[panel.code]=(appData.mistakes[panel.code]||0)+1;
    await saveAppData();
  }

  state.categoryStats[panel.cat]=categoryState;

  document
    .querySelectorAll("#optionList .option")
    .forEach((element,index)=>{
      element.classList.add("locked");
      if(state.options[index].code===panel.code){
        element.classList.add("correct");
      }else if(index===selectedIndex){
        element.classList.add("wrong");
      }
    });

  $("feedbackZone").innerHTML=`
    <div class="feedback ${correct?"":"bad"}">
      <b>
        ${
          correct
            ? "Bonne réponse"
            : selectedIndex<0
              ? "Temps écoulé — c’était : "+escapeHTML(panel.nom)
              : "Ce n’était pas ça — c’était : "+escapeHTML(panel.nom)
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
      ${state.index+1>=state.questions.length?"Voir le résumé":"Question suivante"}
    </button>
  `;

  $("quizScore").textContent="Score : "+state.score;
}

function nextQuestion(){
  state.index++;
  renderQuestion();
}

async function toggleFavorite(){
  const panel=state.questions[state.index];
  const index=appData.favorites.indexOf(panel.code);

  if(index>=0){
    appData.favorites.splice(index,1);
  }else{
    appData.favorites.push(panel.code);
  }

  const button=$("favoriteButton");
  button.textContent=favorites().includes(panel.code)?"⭐":"☆";
  button.classList.remove("pop");
  void button.offsetWidth;
  button.classList.add("pop");

  await saveAppData();
  updateHomeStats();
}

async function showSummary(){
  clearInterval(state.timerId);

  const total=state.questions.length;
  const percentage=total?Math.round(100*state.score/total):0;

  if(!state.review){
    appData.stats.sessions++;
    appData.stats.correct+=state.score;
    appData.stats.total+=total;
    await saveAppData();
  }

  $("quizRunning").classList.add("hidden");
  $("quizSummary").classList.remove("hidden");

  $("summaryTitle").textContent=state.review?"Révision terminée":"Session terminée";
  $("summaryPercent").textContent="0%";
  animateCount($("summaryPercent"),0,percentage,"%",700);

  $("summaryFraction").textContent=`${state.score} / ${total}`;

  $("summaryMessage").textContent=
    percentage>=90
      ? "Excellent — très bon niveau."
      : percentage>=70
        ? "Bon score, continue à travailler tes points faibles."
        : "Encore un peu d’entraînement requis.";

  $("categoryResults").innerHTML=
    Object.entries(state.categoryStats)
      .map(([category,result])=>{
        const percent=Math.round(100*result.correct/result.total);
        return `
          <div class="category-result">
            <div class="category-result-top">
              <span>${CATEGORIES[category].label}</span>
              <span>${result.correct}/${result.total}</span>
            </div>
            <div class="category-track">
              <span data-target="${percent}" style="background:${CATEGORIES[category].color};"></span>
            </div>
          </div>
        `;
      })
      .join("");

  requestAnimationFrame(()=>{
    document
      .querySelectorAll("#categoryResults .category-track span")
      .forEach(element=>{
        element.style.width=element.dataset.target+"%";
      });
  });

  if(state.errors.length){
    $("errorResults").innerHTML=`
      <details class="errors">
        <summary>Revoir les ${state.errors.length} erreur(s)</summary>
        ${
          state.errors
            .map(
              error=>`
                <div class="error">
                  <b>[${escapeHTML(error.panel.code)}] ${escapeHTML(error.panel.nom)}</b>
                  <div class="your-answer">Ta réponse : ${escapeHTML(error.answer)}</div>
                  <div>${escapeHTML(error.panel.desc)}</div>
                </div>
              `
            )
            .join("")
        }
      </details>
    `;
    $("reviewErrorsZone").innerHTML=`
      <button class="danger" style="width:100%" onclick="reviewErrors()">
        Refaire mes erreurs (${state.errors.length})
      </button>
    `;
  }else{
    $("errorResults").innerHTML="";
    $("reviewErrorsZone").innerHTML="";
  }

  updateHomeStats();
}

function replayQuiz(){
  beginSession(state.review);
}

function renderRepository(){
  const query=$("repoSearch").value.trim().toLowerCase();
  const results=PANNEAUX.filter(panel=>{
    if(!query) return true;
    return [panel.code,panel.nom,panel.desc,CATEGORIES[panel.cat]?.label]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });

  $("repoCount").textContent=`${results.length} panneau(x) — base de ${PANNEAUX.length}`;

  const list=$("repoList");
  list.innerHTML="";
  list.classList.remove("fade-list");
  void list.offsetWidth;
  list.classList.add("fade-list");

  Object.keys(CATEGORIES).forEach(category=>{
    const group=results.filter(panel=>panel.cat===category);
    if(!group.length) return;

    list.insertAdjacentHTML(
      "beforeend",
      `
        <div class="repo-head">
          <span class="dot" style="background:${CATEGORIES[category].color}"></span>
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
              <div class="repo-code">${escapeHTML(panel.code)}</div>
              <div class="repo-name">${escapeHTML(panel.nom)}</div>
              <div class="repo-desc">${escapeHTML(panel.desc)}</div>
            </div>
          </div>
        `
      );
    });
  });

  if(!results.length){
    list.innerHTML=`<div class="empty">Aucun panneau ne correspond à cette recherche.</div>`;
  }
}

function renderInfractions(){
  const query=$("infractionSearch").value.trim().toLowerCase();
  const results=INFRACTIONS.filter(item=>{
    if(!query) return true;
    return [item.titre,item.degre,item.amende,item.desc]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });

  const list=$("infractionList");
  list.classList.remove("fade-list");
  void list.offsetWidth;
  list.classList.add("fade-list");

  list.innerHTML=results.length
    ? results
        .map(item=>{
          let badgeClass="";
          if(item.degre.includes("2ème")){
            badgeClass="badge-2";
          }else if(item.degre.includes("3ème")){
            badgeClass="badge-3";
          }else if(
            item.degre.includes("4ème") ||
            item.degre.includes("Tribunal") ||
            item.degre.includes("Délit")
          ){
            badgeClass="badge-4";
          }else if(item.degre.includes("Vitesse")){
            badgeClass="badge-vitesse";
          }else if(item.degre.includes("Alcool")){
            badgeClass="badge-alcool";
          }

          return `
            <div class="info-card">
              <div class="info-header">
                <span class="badge ${badgeClass}">${escapeHTML(item.degre)}</span>
                <b>${escapeHTML(item.amende)}</b>
              </div>
              <b>${escapeHTML(item.titre)}</b>
              <p>${escapeHTML(item.desc)}</p>
            </div>
          `;
        })
        .join("")
    : `<div class="empty">Aucune infraction ne correspond.</div>`;
}

function renderRules(){
  const query=$("ruleSearch").value.trim().toLowerCase();
  const results=RULES.filter(rule=>{
    if(!query) return true;
    return [rule.titre,rule.desc].join(" ").toLowerCase().includes(query);
  });

  const list=$("ruleList");
  list.classList.remove("fade-list");
  void list.offsetWidth;
  list.classList.add("fade-list");

  list.innerHTML=results.length
    ? results
        .map(
          rule=>`
            <div class="rule-card">
              <b>${escapeHTML(rule.titre)}</b>
              <p>${rule.desc}</p>
            </div>
          `
        )
        .join("")
    : `<div class="empty">Aucune règle ne correspond.</div>`;
}

function renderMatiereAuto(){
  const query=$("autoSearch").value.trim().toLowerCase();
  const results=MATIERE_AUTO.filter(item=>{
    if(!query) return true;
    return [item.titre,item.cat,item.desc].join(" ").toLowerCase().includes(query);
  });

  const list=$("autoList");
  list.classList.remove("fade-list");
  void list.offsetWidth;
  list.classList.add("fade-list");

  list.innerHTML=results.length
    ? results
        .map(
          item=>`
            <div class="rule-card">
              <div class="info-header">
                <span class="badge" style="background:var(--blue)">${escapeHTML(item.cat)}</span>
              </div>
              <b>${escapeHTML(item.titre)}</b>
              <p>${item.desc}</p>
            </div>
          `
        )
        .join("")
    : `<div class="empty">Aucune notion ne correspond à cette recherche.</div>`;
}

document.addEventListener("keydown",event=>{
  if($("quizRunning").classList.contains("hidden")) return;

  if(event.key>="1" && event.key<="4" && !state.answered){
    answerQuestion(Number(event.key)-1);
  }

  if(event.key==="Enter" && state.answered){
    nextQuestion();
  }

  if(event.key.toLowerCase()==="f"){
    toggleFavorite();
  }

  if(event.key==="Escape"){
    goHome();
  }
});

$("questionCount").addEventListener("input",event=>{
  state.questionCount=Number(event.target.value);
  $("questionCountValue").textContent=state.questionCount;
});

async function init(){
  await loadAppData();
  applyTheme();
  renderCategorySelector();
  updateHomeStats();
  goHome();
  document.body.classList.add("ready");
}

init();
