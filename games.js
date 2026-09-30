// Questions fondées sur les fiches existantes des cinq leçons.
// Chaque correction reprend la fiche source sans modifier la matière.
var COURSE_QUESTIONS = [
 ['cours_103','Tu pousses une moto en panne. Quel est ton statut ?','Conducteur',['Piéton','Passager','Cycliste']],
 ['cours_104','Quel lieu est librement accessible à tous ?','La voie publique',['Un garage privé','Une base militaire','Une cour clôturée']],
 ['cours_102','Qui est également considéré comme conducteur ?','Un cavalier',['Un piéton','Un passager de bus','Une personne assise sur un banc']],
 ['cours_203','Un agent lève le bras verticalement. Quel ordre donne-t-il ?','Stop',['Accélérer','Tourner à droite','Continuer normalement']],
 ['cours_205','Un agent se présente de profil. Que signifie ce geste dans le cours ?','Roulez',['Stop pour tous','Demi-tour obligatoire','Stationnement obligatoire']],
 ['cours_207','Un feu est rouge, mais un agent te dit de passer. Que dois-tu suivre ?',"L’ordre de l’agent",['Le feu uniquement','Le véhicule devant toi','La règle de priorité de droite']],
 ['cours_301','Les marquages temporaires jaune-orange contredisent les blancs. Lesquels priment ?','Les jaune-orange',['Les blancs','Les plus larges','Les plus anciens']],
 ['cours_305','Devant une ligne continue et une discontinue juxtaposées, quelle ligne dois-tu regarder ?','Celle de ton côté',['Celle du côté opposé','Toujours la discontinue','Toujours la plus longue']],
 ['cours_308',"Peut-on stationner sur une zone d’évitement hachurée ?",'Non',['Oui, cinq minutes','Oui, avec les feux de détresse','Oui, la nuit']],
 ['cours_403','Un panneau jaune portant un nom de commune modifie-t-il la vitesse autorisée ?','Non, pas à lui seul',['Oui, il impose 30 km/h','Oui, il impose 50 km/h','Oui, il impose 70 km/h']],
 ['cours_408','Hors agglomération, un signal impose 50 km/h. Quelle limite suis-tu ?','50 km/h',['70 km/h','90 km/h','120 km/h']],
 ['cours_410','En règle générale, où dois-tu te placer sur la chaussée ?','Le plus à droite possible',['Toujours à gauche','Au milieu de deux bandes','Sur la bande d’arrêt d’urgence']],
 ['cours_503',"Pour sortir de l’autoroute, où faut-il idéalement commencer à freiner ?",'Sur la bande de sortie',['Sur la bande de gauche','Sur la bande d’arrêt d’urgence','Après la sortie uniquement']],
 ['cours_505',"Lors de ton insertion sur l’autoroute, qui doit céder le passage ?",'Toi, aux véhicules déjà sur l’autoroute',['Les véhicules déjà sur l’autoroute','Uniquement les poids lourds','Personne']],
 ['cours_509','Dans les embouteillages, où les motos peuvent-elles remonter les files selon le cours ?','Entre les deux bandes les plus à gauche',['Sur la bande d’arrêt d’urgence','Entre toutes les bandes indistinctement','Sur l’accotement']]
];
var game = null;
function shuffled(items) {
 var result = items.slice();
 for(var i=result.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=result[i];result[i]=result[j];result[j]=t;}
 return result;
}
function courseGameQuestions() {
 return COURSE_QUESTIONS.map(function(row){
  var source=COURS_VIDEO.find(function(item){return item.id===row[0];});
  return {kind:'course',prompt:row[1],answer:row[2],options:shuffled([row[2]].concat(row[3])),explanation:source.desc,source:source.sousCat,id:source.id};
 });
}
function panelGameQuestions() {
 // Les panneaux sans image d’origine restent dans les cours, hors de ce jeu visuel.
 var seen = new Set();
 var pool = PANNEAUX.filter(function(item){if(!IMAGE_PANELS[item.code] || seen.has(item.nom))return false;seen.add(item.nom);return true;});
 return pool.map(function(item){
  var others=pool.filter(function(p){return p.nom!==item.nom;});
  var same=shuffled(others.filter(function(p){return p.cat===item.cat;}));
  var candidates=same.concat(shuffled(others.filter(function(p){return p.cat!==item.cat;})));
  return {kind:'panel',prompt:'Que signifie ce panneau ?',answer:item.nom,options:shuffled([item.nom].concat(candidates.slice(0,3).map(function(p){return p.nom;}))),explanation:item.desc,source:'Panneau '+item.code,id:item.code,image:'panneaux/'+item.code+'.png'};
 });
}
function showGames() {game=null;reveal('games');$('gameLobby').hidden=false;$('gamePlay').hidden=true;$('gameResult').hidden=true;}
function startGame(mode) {
 var panels=shuffled(panelGameQuestions()),courses=shuffled(courseGameQuestions());
 var questions=mode==='panels'?panels.slice(0,10):mode==='courses'?courses.slice(0,10):shuffled(panels.slice(0,5).concat(courses.slice(0,5)));
 game={mode:mode,questions:questions,index:0,score:0,answered:false,errors:[]};
 reveal('games');$('gameLobby').hidden=true;$('gameResult').hidden=true;$('gamePlay').hidden=false;renderGameQuestion();
}
function renderGameQuestion() {
 var q=game.questions[game.index];game.answered=false;
 $('gameProgress').textContent='Question '+(game.index+1)+' / '+game.questions.length+' · '+game.score+' bonne(s) réponse(s)';
 $('gameQuestion').textContent=q.prompt;
 $('gameImage').hidden=!q.image;
 if(q.image){$('gameImage').src=q.image;$('gameImage').alt='Panneau à identifier';}else{$('gameImage').removeAttribute('src');}
 $('gameSource').textContent=q.kind==='course'?q.source:'Reconnaissance des panneaux';
 $('gameOptions').innerHTML=q.options.map(function(option,i){return '<button class="game-option" onclick="answerGame('+i+')">'+escapeHTML(option)+'</button>';}).join('');
 $('gameFeedback').textContent='';$('gameFeedback').className='game-feedback';$('gameNext').hidden=true;
 $('gameQuestion').focus();
}
function answerGame(index) {
 if(!game || game.answered || !Number.isInteger(index))return;
 var q=game.questions[game.index];if(index<0 || index>=q.options.length)return;
 game.answered=true;var correct=q.options[index]===q.answer;
 if(correct)game.score++;else game.errors.push({question:q,chosen:q.options[index]});
 $('gameOptions').querySelectorAll('button').forEach(function(button,i){
  button.disabled=true;
  if(q.options[i]===q.answer){button.classList.add('correct');button.textContent='✓ '+q.options[i];}
  else if(i===index){button.classList.add('wrong');button.textContent='✗ '+q.options[i];}
 });
 $('gameFeedback').className='game-feedback '+(correct?'correct':'wrong');
 $('gameFeedback').textContent=(correct?'Bonne réponse ! ':'La bonne réponse : '+q.answer+'. ')+q.explanation+' — '+q.source;
 $('gameNext').textContent=game.index===game.questions.length-1?'Voir mon résultat':'Question suivante';$('gameNext').hidden=false;$('gameNext').focus();
}
function nextGameQuestion() {
 if(!game || !game.answered)return;
 game.index++;
 if(game.index<game.questions.length){renderGameQuestion();return;}
 $('gamePlay').hidden=true;$('gameResult').hidden=false;
 $('gameScore').textContent=game.score+' / '+game.questions.length;
 $('gameSummary').textContent=game.score===game.questions.length?'Bravo, tout est juste !':'Voici les points à revoir tranquillement.';
 $('gameCorrections').innerHTML=game.errors.map(function(entry){var q=entry.question;return '<article class="game-review">'+(q.image?'<img src="'+q.image+'" alt="'+escapeHTML(q.answer)+'">':'')+'<h3>'+escapeHTML(q.prompt)+'</h3><p>Ta réponse : '+escapeHTML(entry.chosen)+'</p><p><b>Bonne réponse : '+escapeHTML(q.answer)+'</b></p><p>'+escapeHTML(q.explanation)+'</p><small>'+escapeHTML(q.source)+'</small></article>';}).join('');
 $('gameScore').focus();
}
function replayGame(){if(game)startGame(game.mode);}
