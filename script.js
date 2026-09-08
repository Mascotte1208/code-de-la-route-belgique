// =========================================================
// POLYFILL STORAGE
// =========================================================

if (!window.storage) {
    window.storage = {
        get: async function(key) {
            try {
                var value = localStorage.getItem(key);
                return value ? { value: value } : null;
            } catch (e) {
                return null;
            }
        },
        set: async function(key, value) {
            try {
                localStorage.setItem(key, value);
            } catch (e) {}
        }
    };
}

// =========================================================
// DONNEES OFFICIELLES COMPLETES
// =========================================================

// ---- PANNEAUX DE DANGER (A) - COMPLETS ----
var PANNEAUX_A = [
    {code:"A1a",nom:"Virage dangereux a gauche",cat:"A",desc:"Annonce un virage prononce vers la gauche."},
    {code:"A1b",nom:"Virage dangereux a droite",cat:"A",desc:"Annonce un virage prononce vers la droite."},
    {code:"A1c",nom:"Succession de virages (premier a gauche)",cat:"A",desc:"Annonce plusieurs virages successifs, le premier a gauche."},
    {code:"A1d",nom:"Succession de virages (premier a droite)",cat:"A",desc:"Annonce plusieurs virages successifs, le premier a droite."},
    {code:"A3",nom:"Descente dangereuse",cat:"A",desc:"Pente raide indiquee par un pourcentage. Utilisez le frein moteur."},
    {code:"A5",nom:"Montee a forte inclinaison",cat:"A",desc:"Indique une forte cote."},
    {code:"A7a",nom:"Chaussee retrecie (des deux cotes)",cat:"A",desc:"Retrecissement de la route des deux cotes."},
    {code:"A7b",nom:"Chaussee retrecie (a droite)",cat:"A",desc:"Retrecissement de la route du cote droit."},
    {code:"A7c",nom:"Chaussee retrecie (a gauche)",cat:"A",desc:"Retrecissement de la route du cote gauche."},
    {code:"A8",nom:"Accotement non stabilise",cat:"A",desc:"Accotement non revetu, risque de perte de controle."},
    {code:"A9",nom:"Pont mobile",cat:"A",desc:"Approche d'un pont levant ou tournant."},
    {code:"A11",nom:"Debouche sur un quai ou berge",cat:"A",desc:"Risque de chute dans l'eau si manoeuvre mal executee."},
    {code:"A13",nom:"Cassis ou dos d'ane",cat:"A",desc:"Ralentisseur ou bosse sur la chaussee."},
    {code:"A15",nom:"Chaussee glissante",cat:"A",desc:"Risque accru de glissade (pluie, verglas, gravillons)."},
    {code:"A16",nom:"Verglas ou neige",cat:"A",desc:"Risque de verglas ou chaussee enneigee."},
    {code:"A17",nom:"Projection de gravillons",cat:"A",desc:"Risque de projection de pierres ou gravillons."},
    {code:"A18",nom:"Brouillard",cat:"A",desc:"Risque de brouillard epais."},
    {code:"A19",nom:"Chutes de pierres",cat:"A",desc:"Risque d'eboulement ou chutes de pierres."},
    {code:"A21",nom:"Passage pour pietons",cat:"A",desc:"Annonce un passage cloute a proximite."},
    {code:"A23",nom:"Endroit frequente par des enfants",cat:"A",desc:"Presence d'ecoles ou aires de jeux."},
    {code:"A24",nom:"Endroit frequente par des cavaliers",cat:"A",desc:"Presence de cavaliers ou centres equestres."},
    {code:"A25",nom:"Passage de cyclistes",cat:"A",desc:"Debouche de cyclistes ou piste cyclable."},
    {code:"A27",nom:"Traversee d'animaux",cat:"A",desc:"Traversee possible d'animaux (cerfs, sangliers, etc.)."},
    {code:"A31",nom:"Travaux",cat:"A",desc:"Presence d'un chantier sur ou le long de la voie publique."},
    {code:"A32",nom:"Files (embouteillage)",cat:"A",desc:"Risque de formation de files ou ralentissements."},
    {code:"A33",nom:"Feux de circulation",cat:"A",desc:"Annonce des feux tricolores en amont."},
    {code:"A45",nom:"Passage a niveau (non garde)",cat:"A",desc:"Annonce un passage a niveau sans barrieres."},
    {code:"A47",nom:"Passage a niveau (garde)",cat:"A",desc:"Annonce un passage a niveau avec barrieres."},
    {code:"A51",nom:"Danger indetermine",cat:"A",desc:"Danger particulier precise par un panonceau additionnel."}
];

// ---- PANNEAUX DE PRIORITE (B) - COMPLETS ----
var PANNEAUX_B = [
    {code:"B1",nom:"Cedez le passage",cat:"B",desc:"Triangle pointe vers le bas. Ceder le passage aux usagers de la voie prioritaire."},
    {code:"B5",nom:"Stop (Arret obligatoire)",cat:"B",desc:"Obligation de marquer l'arret complet avant la ligne d'effet."},
    {code:"B9",nom:"Voie prioritaire",cat:"B",desc:"Losange jaune : vous etes prioritaire aux intersections."},
    {code:"B11",nom:"Fin de voie prioritaire",cat:"B",desc:"Losange barre : fin du statut de route prioritaire."},
    {code:"B15",nom:"Priorite a l'intersection",cat:"B",desc:"Vous avez la priorite uniquement a la prochaine intersection."},
    {code:"B17",nom:"Priorite a droite",cat:"B",desc:"Regle generale : ceder le passage venant de droite."}
];

// ---- PANNEAUX D'INTERDICTION (C) - COMPLETS ----
var PANNEAUX_C = [
    {code:"C1",nom:"Acces interdit dans les deux sens",cat:"C",desc:"Interdiction a tout conducteur de s'engager."},
    {code:"C3",nom:"Sens interdit",cat:"C",desc:"Interdiction de s'engager dans cette voie."},
    {code:"C5",nom:"Acces interdit aux automobiles",cat:"C",desc:"Interdit aux voitures et camions."},
    {code:"C7",nom:"Acces interdit aux motocycles",cat:"C",desc:"Interdit aux motos."},
    {code:"C11",nom:"Acces interdit aux cyclistes",cat:"C",desc:"Interdit aux velos."},
    {code:"C19",nom:"Acces interdit aux pietons",cat:"C",desc:"Interdit aux pietons."},
    {code:"C23",nom:"Acces interdit aux camions",cat:"C",desc:"Interdit aux vehicules lourds de marchandises."},
    {code:"C35",nom:"Interdiction de depasser",cat:"C",desc:"Interdiction de depasser les vehicules a moteur."},
    {code:"C39",nom:"Interdiction de depasser pour camions",cat:"C",desc:"Interdiction pour les camions > 3,5t de depasser."},
    {code:"C43 30",nom:"Vitesse limitee a 30 km/h",cat:"C",desc:"Vitesse maximale autorisee de 30 km/h.","num":"30"},
    {code:"C43 50",nom:"Vitesse limitee a 50 km/h",cat:"C",desc:"Vitesse maximale autorisee de 50 km/h.","num":"50"},
    {code:"C43 70",nom:"Vitesse limitee a 70 km/h",cat:"C",desc:"Vitesse maximale autorisee de 70 km/h.","num":"70"},
    {code:"C43 90",nom:"Vitesse limitee a 90 km/h",cat:"C",desc:"Vitesse maximale autorisee de 90 km/h.","num":"90"},
    {code:"C45",nom:"Fin de toutes les interdictions locales",cat:"C",desc:"Fin des limitations de vitesse ou de depassement."}
];

// ---- PANNEAUX D'OBLIGATION (D) - COMPLETS ----
var PANNEAUX_D = [
    {code:"D1a",nom:"Direction obligatoire a droite",cat:"D",desc:"Obligation de tourner a droite."},
    {code:"D1b",nom:"Direction obligatoire a gauche",cat:"D",desc:"Obligation de tourner a gauche."},
    {code:"D9",nom:"Piste cyclable obligatoire",cat:"D",desc:"Voie exclusive reservee aux cyclistes."},
    {code:"D10",nom:"Chemin pour pietons",cat:"D",desc:"Voie reservee exclusivement aux pietons."}
];

// ---- PANNEAUX DE STATIONNEMENT (E) - COMPLETS ----
var PANNEAUX_E = [
    {code:"E1",nom:"Stationnement interdit",cat:"E",desc:"Interdiction de stationner du cote du panneau. L'arret reste autorise."},
    {code:"E3",nom:"Arret et stationnement interdits",cat:"E",desc:"Interdiction absolue de s'arreter et de stationner."},
    {code:"E9a",nom:"Stationnement autorise (Parking)",cat:"E",desc:"Indique un emplacement ou un parking autorise."}
];

// ---- PANNEAUX D'INDICATION (F) - COMPLETS ----
var PANNEAUX_F = [
    {code:"F1",nom:"Commencement d'agglomeration",cat:"F",desc:"Vitesse limitee par defaut a 50 km/h (30 km/h a Bruxelles)."},
    {code:"F3",nom:"Fin d'agglomeration",cat:"F",desc:"Les regles d'agglomeration prennent fin."},
    {code:"F4a",nom:"Debut de zone 30",cat:"F",desc:"Entree d'une zone ou la vitesse est limitee a 30 km/h."},
    {code:"F4b",nom:"Fin de zone 30",cat:"F",desc:"Sortie de la zone 30."},
    {code:"F5",nom:"Autoroute",cat:"F",desc:"Debut d'autoroute (vitesse min. 70, max. 120 km/h)."},
    {code:"F9",nom:"Route pour automobiles",cat:"F",desc:"Voie reservee aux vehicules automobiles."},
    {code:"F11b",nom:"Cul-de-sac (Impasse)",cat:"F",desc:"Voie sans issue."},
    {code:"F12a",nom:"Zone residentielle / Zone de rencontre",cat:"F",desc:"Pietons prioritaires sur toute la largeur. Vitesse max 20 km/h."},
    {code:"F19",nom:"Sens unique",cat:"F",desc:"Indique une rue a sens unique."},
    {code:"F20",nom:"Voie reservee aux bus",cat:"F",desc:"Voie exclusivement reservee aux bus et transports en commun."},
    {code:"F21",nom:"Voie de tramway",cat:"F",desc:"Voie reservee aux trams."},
    {code:"F23",nom:"Debut de piste cyclable",cat:"F",desc:"Entree d'une piste cyclable."},
    {code:"F24",nom:"Fin de piste cyclable",cat:"F",desc:"Sortie de la piste cyclable."},
    {code:"F25",nom:"Zone de rencontre",cat:"F",desc:"Zone pietons prioritaires, vitesse max 20 km/h."},
    {code:"F26",nom:"Fin de zone de rencontre",cat:"F",desc:"Sortie de la zone de rencontre."},
    {code:"F27",nom:"Zone pietonne",cat:"F",desc:"Zone exclusivement reservee aux pietons."},
    {code:"F28",nom:"Fin de zone pietonne",cat:"F",desc:"Sortie de la zone pietonne."}
];

// ---- PANONCEAUX (X) - COMPLETS ----
var PANNEAUX_X = [
    {code:"X1",nom:"Distance avant le danger",cat:"X",desc:"Indique la distance a laquelle se situe le danger ou la regle."},
    {code:"X2",nom:"Etendue de la mesure",cat:"X",desc:"Indique la longueur sur laquelle s'applique la prescription."},
    {code:"X3",nom:"Repetition / Rappel",cat:"X",desc:"Confirme qu'une interdiction ou obligation est toujours d'application."},
    {code:"X4",nom:"Hors agglomeration",cat:"X",desc:"Precise que la regle s'applique hors agglomeration."},
    {code:"X5",nom:"Accotement stabilise / non stabilise",cat:"X",desc:"Precise la nature de l'accotement."},
    {code:"X6",nom:"Sauf riverains",cat:"X",desc:"Interdiction ne s'applique pas aux riverains."},
    {code:"X7",nom:"Poids lourds",cat:"X",desc:"Interdiction adaptee aux poids lourds."},
    {code:"X8",nom:"Longueur",cat:"X",desc:"Indication de longueur maximale du vehicule."},
    {code:"X9",nom:"Largeur",cat:"X",desc:"Indication de largeur maximale du vehicule."},
    {code:"X10",nom:"Hauteur",cat:"X",desc:"Indication de hauteur maximale du vehicule."}
];

// ---- PANNEAUX TEMPORAIRES (TRAVAUX) - NOUVEAU ----
var PANNEAUX_T = [
    {code:"T1",nom:"Travaux (danger)",cat:"T",desc:"Annonce un danger lie a des travaux."},
    {code:"T2",nom:"Déviation (gauche)",cat:"T",desc:"Indique une déviation par la gauche."},
    {code:"T3",nom:"Déviation (droite)",cat:"T",desc:"Indique une déviation par la droite."},
    {code:"T4",nom:"Fin de travaux",cat:"T",desc:"Fin de la zone de travaux."}
];

// ---- PANNEAUX DE SERVICE - NOUVEAU ----
var PANNEAUX_S = [
    {code:"S1",nom:"Aire de repos",cat:"S",desc:"Aire de repos avec parking."},
    {code:"S2",nom:"Aire de service",cat:"S",desc:"Aire de service avec station-service."},
    {code:"S3",nom:"Parking",cat:"S",desc:"Parking public."},
    {code:"S4",nom:"Parking payant",cat:"S",desc:"Parking avec horodateur."},
    {code:"S5",nom:"Police / Gendarmerie",cat:"S",desc:"Poste de police ou gendarmerie."},
    {code:"S6",nom:"Hopital",cat:"S",desc:"Hopital ou clinique."},
    {code:"S7",nom:"Pharmacie",cat:"S",desc:"Pharmacie."},
    {code:"S8",nom:"Telephone de secours",cat:"S",desc:"Telephone d'urgence sur autoroute."},
    {code:"S9",nom:"Poste d'essence",cat:"S",desc:"Station-service."}
];

// ---- FUSION DE TOUS LES PANNEAUX ----
var PANNEAUX = [].concat(
    PANNEAUX_A,
    PANNEAUX_B,
    PANNEAUX_C,
    PANNEAUX_D,
    PANNEAUX_E,
    PANNEAUX_F,
    PANNEAUX_X,
    PANNEAUX_T,
    PANNEAUX_S
);

// ---- INFRACTIONS (DEJA COMPLETES) ----
var INFRACTIONS = [
    {titre:"Oubli du clignotant",degre:"1er Degre",amende:"58 €",desc:"Omettre d'indiquer un changement de direction, un depassement ou la sortie d'un rond-point."},
    {titre:"Stationnement genant simple",degre:"1er Degre",amende:"58 €",desc:"Stationner sur une zone non autorisee sans gener gravement la circulation."},
    {titre:"Circuler sur une bande de bus",degre:"1er Degre",amende:"58 €",desc:"Emprunter une bande reservee aux transports en commun sans autorisation."},
    {titre:"Defaut de documents a bord",degre:"1er Degre",amende:"58 €",desc:"Ne pas presenter immediatement son permis, son certificat d'immatriculation ou son assurance."},
    {titre:"Utilisation abusive des feux de brouillard",degre:"1er Degre",amende:"58 €",desc:"Allumer les feux antibrouillard par temps clair ou pluie legere."},
    {titre:"Non-port de la ceinture de securite",degre:"2eme Degre",amende:"116 €",desc:"Obligatoire pour tous les occupants du vehicule."},
    {titre:"Franchissement d'un feu orange",degre:"2eme Degre",amende:"116 €",desc:"S'engager au feu orange alors qu'il etait possible de s'arreter."},
    {titre:"Stationnement sur passage pour pietons",degre:"2eme Degre",amende:"116 €",desc:"Se garer sur un passage cloute ou une piste cyclable."},
    {titre:"Conduite sans feux la nuit",degre:"2eme Degre",amende:"116 €",desc:"Oublier d'allumer ses feux de croisement."},
    {titre:"Depassement par la droite",degre:"2eme Degre",amende:"116 €",desc:"Interdit sauf cas particuliers."},
    {titre:"Non-respect de la distance de securite",degre:"2eme Degre",amende:"116 €",desc:"Ne pas laisser une distance suffisante."},
    {titre:"Ne pas ceder le passage a un pieton engage",degre:"2eme Degre",amende:"116 €",desc:"Refuser la priorite a un pieton sur un passage cloute."},
    {titre:"Usage du GSM au volant",degre:"3eme Degre",amende:"174 €",desc:"Tenir un telephone en main en conduisant. Retrait de permis 15 jours."},
    {titre:"Franchir un feu rouge",degre:"3eme Degre",amende:"174 €",desc:"S'engager alors que le feu est rouge."},
    {titre:"Non-respect d'un panneau STOP",degre:"3eme Degre",amende:"174 €",desc:"Oublier de marquer un arret complet."},
    {titre:"Franchir une ligne blanche continue",degre:"3eme Degre",amende:"174 €",desc:"Rouler sur ou franchir une ligne continue."},
    {titre:"Prendre un sens interdit",degre:"3eme Degre",amende:"174 €",desc:"S'engager dans une rue en sens interdit."},
    {titre:"Franchir un passage a niveau ferme",degre:"3eme Degre",amende:"174 €",desc:"Passer outre des barrieres en mouvement."},
    {titre:"Faire demi-tour sur autoroute",degre:"4eme Degre",amende:"Tribunal",desc:"Marche arriere ou contresens sur autoroute."},
    {titre:"Refus d'obeir",degre:"4eme Degre",amende:"Tribunal",desc:"Ignorer les ordres d'un agent."},
    {titre:"Courses de vitesse illegales",degre:"4eme Degre",amende:"Tribunal",desc:"Concours de vitesse sur la voie publique."},
    {titre:"Delit de fuite",degre:"Delit penal",amende:"Tribunal",desc:"Quitter les lieux d'un accident."},
    {titre:"Exces de vitesse (Agglomeration)",degre:"Vitesse",amende:"Des 53 € + 11 €/km/h",desc:"Tarif de base de 53 €, puis 11 € par km/h."},
    {titre:"Exces de vitesse (Hors agglomeration)",degre:"Vitesse",amende:"Des 53 € + 6 €/km/h",desc:"Tarif de base de 53 €, puis 6 € par km/h."},
    {titre:"Alcoolemie (0,2 g/L - Permis Provisoire)",degre:"Alcool Novice",amende:"Retrait immediat",desc:"Tolerance quasi-nulle pour les jeunes conducteurs."},
    {titre:"Alcoolemie (0,5 a 0,8 g/L)",degre:"Alcool",amende:"179 € + Retrait 3h",desc:"Retrait immediat du permis pour 3 heures."},
    {titre:"Alcoolemie (Superieure a 0,8 g/L)",degre:"Alcool / Tribunal",amende:"De 420 € a 1200 €",desc:"Retrait immediat de permis 15 jours et tribunal."}
];

// ---- REGLES D'OR - COMPLETES ----
var RULES = [
    {titre:"La Priorite a Droite (Regle generale)",desc:"A toute intersection, vous devez ceder le passage a tout conducteur venant de droite, sauf si un signal (panneau, feu, agent) ou une regle specifique (carrossable vs chemin de terre) en dispose autrement."},
    {titre:"Les Ronds-Points et Giratoires",desc:"Sauf signalisation contraire (panneau B1 'Cedez le passage' ou B5 'Stop' a l'entree), la regle de la priorite a droite s'applique DANS le rond-point. Cependant, dans 99% des giratoires modernes en Belgique, le panneau 'Cedez le passage' est place pour ceux qui s'engagent."},
    {titre:"La Priorite des Trams",desc:"Le tram a TOUJOURS la priorite, meme venant de gauche, sauf s'il sort d'un depot ou si des feux tricolores reglant la circulation s'opposent a son passage. Ne coupez jamais la trajectoire d'un tram."},
    {titre:"Vitesses Maximales en Belgique (Regionalisees)",desc:"Agglomeration : 50 km/h (sauf Bruxelles ou la regle generale est 30 km/h). Hors agglomeration : 90 km/h en Wallonie, 70 km/h en Flandre. Autoroutes : 120 km/h (min. 70 km/h)."},
    {titre:"Arret vs Stationnement",desc:"L'arret est une immobilisation de courte duree pour embarquer/debarquer des personnes ou charger/decharger des marchandises (le conducteur reste a bord ou a proximite). Le stationnement est une immobilisation qui depasse le temps necessaire a l'arret."},
    {titre:"Le couloir de secours (Corridor d'urgence)",desc:"En cas d'embouteillage sur autoroute ou route a 2 bandes ou plus, les vehicules doivent obligatoirement se serrer : ceux de gauche vers la gauche, ceux de droite vers la droite, pour laisser un passage central libre aux services de secours."},
    {titre:"Les agents qualifies et signaleurs",desc:"Les agents de police ont priorite sur toute signalisation (panneaux, feux). Leurs gestes sont imperatifs : bras leve = stop, bras horizontaux = circulation sur la voie indiquee. Les signaleurs (ecoles, PMR, manifestations) sont prioritaires."},
    {titre:"Le feu orange",desc:"Le feu orange oblige a l'arret, SAUF si vous etes si pres du carrefour que vous ne pouvez plus vous arreter en securite sans provoquer de collision."},
    {titre:"Le feu vert et les pietons",desc:"Si vous coupez un passage pour pietons ou une piste cyclable, vous devez ceder le passage aux usagers qui traversent, meme si votre feu tricolore est au vert."},
    {titre:"La bande d'arret d'urgence",desc:"Interdiction de s'y arreter sauf cas de force majeure absolue (panne mecanique ou malaise). S'y garer par confort est une infraction grave."},
    {titre:"Le depassement des cyclistes",desc:"Marge laterale obligatoire de 1,0 m en agglomeration et de 1,5 m hors agglomeration. Le franchissement de ligne continue est autorise si la visibilite le permet."},
    {titre:"Les tunnels",desc:"Allumage obligatoire des feux de croisement meme si le tunnel est eclaire. Interdiction absolue de faire demi-tour ou de reculer. Distance de securite minimale de 50 m."}
];

// ---- TECHNIQUE & VOITURE - COMPLET ----
var MATIERE_AUTO = [
    {id:"auto_1",titre:"Niveau d'huile moteur",cat:"Technique",desc:"Le controle s'effectue moteur froid et sur un plan horizontal. Le niveau doit se situer entre MIN et MAX. Un manque provoque un serrage moteur."},
    {id:"auto_2",titre:"Liquide de refroidissement",cat:"Technique",desc:"Verification via le vase d'expansion. Avertissement : ne jamais ouvrir le bouchon a chaud sous peine de brulures graves."},
    {id:"auto_3",titre:"Liquide de frein",cat:"Technique",desc:"Une baisse anormale indique soit l'usure prononcee des plaquettes/disques, soit une fuite dans le circuit hydraulique."},
    {id:"auto_4",titre:"Liquide de lave-glace et balais",cat:"Technique",desc:"Le reservoir doit etre plein. Les fissures majeures dans le champ de vision du pare-brise constituent une infraction."},
    {id:"auto_5",titre:"Pression et profondeur des pneus",cat:"Technique",desc:"Verification a froid. La profondeur minimale legale des rainures principales est de 1,6 mm en Europe."},
    {id:"auto_6",titre:"Masse Maximale Autorisee (MMA / PTAC)",cat:"Legal & Charges",desc:"Poids total maximal autorise (vehicule vide + passagers + bagages). Indique sur la carte grise (rubrique F.2). Interdiction de surcharge."},
    {id:"auto_7",titre:"Masse remorquable (Permis B)",cat:"Legal & Charges",desc:"Remorque max 750 kg sans condition, ou plus lourde si la somme des MMA (voiture + remorque) ne depasse pas 3 500 kg."},
    {id:"auto_8",titre:"Documents obligatoires a bord",cat:"Administratif",desc:"1. Permis de conduire valide. 2. Certificat d'immatriculation (carte grise). 3. Attestation d'assurance. 4. Certificat de controle technique."},
    {id:"auto_9",titre:"Equipements de securite obligatoires",cat:"Securite",desc:"Triangle de signalisation, gilet haute visibilite par occupant, trousse de premiers secours et extincteur portatif homologue."},
    {id:"auto_10",titre:"Reglementation stricte dans les Tunnels",cat:"Securite & Tunnels",desc:"1. Allumage obligatoire des feux de croisement meme si le tunnel est eclaire. 2. Interdiction absolue de faire demi-tour ou de reculer. 3. En cas d'embouteillage : couper le moteur, garder ses distances et allumer les feux de detresse. 4. Distance de securite minimale de 50 metres avec le vehicule precedent."},
    {id:"auto_11",titre:"Eco-conduite (Notions d'examen)",cat:"Eco-conduite",desc:"Passer les rapports de vitesse rapidement (entre 2000 et 2500 tr/min), couper le moteur lors d'un arret prolonge (> 1 minute), maintenir des pneumatiques correctement gonfles pour reduire la consommation de carburant."},
    {id:"auto_12",titre:"Premiers Secours en cas d'accident",cat:"Secours",desc:"Sequence d'urgence absolue : 1. Proteger (baliser et enfiler son gilet avant de sortir) ; 2. Alerter (appeler le 112 en precisant le lieu exact et l'etat des victimes) ; 3. Secourir (ne jamais retirer le casque d'un motard conscient sauf risque d'asphyxie)."},
    {id:"auto_13",titre:"Position laterale de securite (PLS)",cat:"Secours",desc:"Pour une victime inconsciente mais respirant : mettre en PLS sur le cote, jambe superieure pliee, tete en extension, pour degager les voies respiratoires."},
    {id:"auto_14",titre:"Massage cardiaque",cat:"Secours",desc:"En cas d'arret cardiaque : 30 compressions (5-6 cm de profondeur, 100-120/min) + 2 insufflations. Continuer jusqu'a l'arrivee des secours."},
    {id:"auto_15",titre:"Alcool et conduite",cat:"Securite",desc:"Taux legal : 0,5 g/L (0,2 g/L pour permis provisoire). Sanctions : retrait de permis, amende, tribunal. Les drogues sont totalement interdites."}
];

// ---- PIEGES ROUTES - COMPLETS ----
var PIEGES_ROUTES = [
    {id:"piege_1",titre:"La priorite a droite absolue par defaut",cat:"Pieges & Priorites",desc:"Le piege : Penser que la route la plus large est prioritaire. La regle : Sans signalisation (panneau ou feu), la priorite a droite s'applique toujours aveuglement."},
    {id:"piege_2",titre:"Le stationnement interdit implicite (Les 5 metres)",cat:"Pieges & Priorites",desc:"Le piege : Se garer juste avant un passage pieton en pensant qu'il n'y a pas de panneau E1/E3. La regle : Il est strictement interdit de stationner a moins de 5 metres en amont d'un passage pour pietons ou pour cyclistes."},
    {id:"piege_3",titre:"Sortie d'un chemin de terre",cat:"Pieges & Priorites",desc:"Le piege : Ceder le passage a quelqu'un qui sort d'un chemin de terre sous pretexte qu'il est a droite. La regle : Quiconque sort d'un chemin de terre, d'un sentier ou d'une propriete privee doit toujours ceder le passage sur la voie publique."},
    {id:"piege_4",titre:"Le depassement des cyclistes (Distances)",cat:"Pieges & Priorites",desc:"Le piege : Froler un cycliste en ville. La regle : Marge laterale obligatoire de 1,0 m en agglomeration et de 1,5 m hors agglomeration. Franchissement de ligne continue autorise si la visibilite le permet."},
    {id:"piege_5",titre:"Le piege du rond-point classique vs giratoire",cat:"Pieges & Priorites",desc:"Le piege : Croire que l'on est prioritaire dans tous les ronds-points. La regle : Un rond-point n'est un giratoire prioritaire que si les panneaux 'Cedez le passage' (B1) et 'Sens giratoire' (D10) sont places. Sinon, c'est la priorite a droite classique pour entrer !"},
    {id:"piege_6",titre:"L'illusion du feu orange fixe",cat:"Pieges & Priorites",desc:"Le piege : Accelerer au feu orange. La regle : Le feu orange oblige a l'arret, SAUF si vous etes si pres du carrefour que vous ne pouvez plus vous arreter en securite sans provoquer de collision."},
    {id:"piege_7",titre:"Le feu vert n'annule pas la priorite des pietons",cat:"Pieges & Priorites (Rare)",desc:"Le piege vicieux : Tourner a droite ou a gauche a un feu vert en pensant avoir le champ libre. La regle : Si vous coupez un passage pour pietons ou une piste cyclable, vous devez ceder le passage aux usagers qui traversent, meme si votre feu tricolore est au vert."},
    {id:"piege_8",titre:"La bande d'arret d'urgence sur autoroute",cat:"Pieges & Priorites (Rare)",desc:"Le piege : S'y arreter pour passer un appel d'urgence ou regler son GPS. La regle : C'est strictement interdit, sauf cas de force majeure absolue (panne mecanique ou malaise). S'y garer par confort est une infraction grave."},
    {id:"piege_9",titre:"Le sens de stationnement et le disque bleu",cat:"Pieges & Priorites (Rare)",desc:"Le piege : Se garer a contresens ou regler mal son disque. La regle : Vous devez obligatoirement vous garer dans le sens de la marche du cote droit. Sur disque de stationnement, celui-ci doit etre regle sur l'heure de l'arrivee (l'heure entamee ou la demi-heure suivante)."},
    {id:"piege_10",titre:"Le depassement par la droite sur autoroute",cat:"Pieges & Priorites (Rare)",desc:"Le piege : Penser que doubler par la droite est toujours interdit. La regle : C'est interdit, sauf en cas de files ininterrompues de vehicules sur les autres bandes lorsque la circulation est dense et roule au pas."}
];

// ---- USAGERS & MANOEUVRES - COMPLETS ----
var USAGERS_MANOEUVRES = [
    {id:"usager_1",titre:"Les rues cyclables (Fietsstraten)",cat:"Usagers Vulnerables",desc:"Dans une rue cyclable, les cyclistes occupent toute la largeur de leur bande (ou la moitie de la voirie). Il est strictement interdit aux automobilistes de depasser les cyclistes dans ces rues, et la vitesse maximale y est limitee a 30 km/h."},
    {id:"usager_2",titre:"Les sas a velos aux feux",cat:"Usagers Vulnerables",desc:"Espace peint en avant de la ligne d'arret des voitures aux feux tricolores. Il est reserve exclusivement aux velos et cyclomoteurs pour leur permettre de se placer en securite devant les vehicules lors du passage au vert."},
    {id:"usager_3",titre:"Qu'est-ce qu'une manoeuvre en droit belge ?",cat:"Manoeuvres",desc:"Constituent des manoeuvres : quitter un stationnement, faire demi-tour, reculer, sortir d'un garage ou s'inserer dans la circulation. La regle absolue : Celui qui effectue une manoeuvre doit ceder le passage a tous les autres usagers."},
    {id:"usager_4",titre:"Croisement sur routes de montagne / fortes pentes",cat:"Intersections",desc:"Sur les pentes raides (panneaux A3/A5), le vehicule qui descend doit s'arreter ou reculer pour laisser passer celui qui monte, sauf si le vehicule qui monte trouve un refuge (une halte) plus pres de lui."},
    {id:"usager_5",titre:"Restrictions du Permis Provisoire 36 mois",cat:"Permis & Legal",desc:"Si tu conduis avec un permis provisoire accompagne d'un guide, il est strictement interdit de circuler les vendredis, samedis, dimanches et veilles de jours feries entre 22h et 6h du matin."},
    {id:"usager_6",titre:"Le chargement et les depassements a l'arriere",cat:"Chargement",desc:"Un chargement ne peut jamais masquer les plaques ou les feux. S'il depasse de plus d'un metre a l'arriere du vehicule, il doit obligatoirement etre signale par un panneau carre a rayures rouges et blanches."},
    {id:"usager_7",titre:"Cavaliers et animaux",cat:"Usagers Vulnerables",desc:"Les cavaliers sont des usagers vulnerables. Ralentir, augmenter la distance de securite. Ne jamais klaxonner pour ne pas effrayer le cheval."},
    {id:"usager_8",titre:"Personnes a mobilite reduite (PMR)",cat:"Usagers Vulnerables",desc:"Les PMR (personnes agees, fauteuils roulants, malvoyants) sont prioritaires. Leur temps de traverse est plus long. Leur acceder la priorite."},
    {id:"usager_9",titre:"Enfants sur la voie publique",cat:"Usagers Vulnerables",desc:"Les enfants sont imprevisibles. Ralentir a proximite des ecoles, aires de jeux. Anticiper leurs mouvements."},
    {id:"usager_10",titre:"Marche arriere",cat:"Manoeuvres",desc:"La marche arriere est interdite sauf pour une manoeuvre. Elle doit etre effectuee avec une visibilite suffisante, a allure reduite, en cedant le passage a tous."}
];

// ---- MARQUAGES AU SOL - NOUVEAU ----
var MARQUAGES = [
    {id:"marquage_1",titre:"Ligne blanche continue (LBC)",cat:"Marquages",desc:"Interdit de franchir, de depasser ou de rouler dessus. Delimite la chaussee ou les voies."},
    {id:"marquage_2",titre:"Ligne blanche discontinue (LBD)",cat:"Marquages",desc:"Autorise le depassement si la visibilite le permet. Delimite les voies."},
    {id:"marquage_3",titre:"Ligne blanche mixte (LBM)",cat:"Marquages",desc:"Continue d'un cote, discontinue de l'autre. Interdit de la franchir du cote continue."},
    {id:"marquage_4",titre:"Ligne jaune",cat:"Marquages",desc:"Stationnement interdit de ce cote."},
    {id:"marquage_5",titre:"Ligne bleue",cat:"Marquages",desc:"Stationnement payant ou disque bleu obligatoire."},
    {id:"marquage_6",titre:"Fleches de rabattement",cat:"Marquages",desc:"Obligation de changer de voie dans le sens indique."},
    {id:"marquage_7",titre:"Ligne de rive (zigzag)",cat:"Marquages",desc:"Bande d'arret d'urgence ou bord de chaussee."},
    {id:"marquage_8",titre:"Passage pieton",cat:"Marquages",desc:"Bandes blanches paralleles. Priorite aux pietons."},
    {id:"marquage_9",titre:"Passage cycliste",cat:"Marquages",desc:"Deux lignes de pointilles. Priorite aux cyclistes."},
    {id:"marquage_10",titre:"Sas velo",cat:"Marquages",desc:"Espace reserve aux velos devant les feux."}
];

// ---- CONDITIONS DE CONDUITE - NOUVEAU ----
var CONDITIONS = [
    {id:"cond_1",titre:"Conduite sous la pluie",cat:"Conditions",desc:"Reduire la vitesse, augmenter la distance de securite (x2), allumer les feux de croisement. Risque d'aquaplanage."},
    {id:"cond_2",titre:"Conduite dans le brouillard",cat:"Conditions",desc:"Allumer les feux de brouillard et les feux de croisement (pas les feux de route). Reduire la vitesse considerablement."},
    {id:"cond_3",titre:"Conduite sur la neige ou le verglas",cat:"Conditions",desc:"Pneus neige ou chaines obligatoires. Reduire la vitesse, freiner en douceur, utiliser le frein moteur. Doubler les distances de securite."},
    {id:"cond_4",titre:"Conduite de nuit",cat:"Conditions",desc:"Allumer les feux de croisement. En cas d'eblouissement, ralentir et regarder le bord droit de la chaussee."},
    {id:"cond_5",titre:"Conduite dans les tunnels",cat:"Conditions",desc:"Allumer les feux de croisement. Distance de securite 50 m. Interdiction de s'arreter, faire demi-tour ou reculer."},
    {id:"cond_6",titre:"Conduite par vent fort",cat:"Conditions",desc:"Reduire la vitesse, tenir le volant fermement, anticiper les rafales."},
    {id:"cond_7",titre:"Conduite en montagne / forte pente",cat:"Conditions",desc:"Utiliser le frein moteur, ne pas rouler en roue libre. Le vehicule qui descend doit ceder le passage a celui qui monte."}
];

// ---- CATEGORIES - COMPLETES ----
var CATEGORIES = {
    A:{label:"Danger",color:"var(--red)"},
    B:{label:"Priorite",color:"var(--amber)"},
    C:{label:"Interdiction",color:"var(--red)"},
    D:{label:"Obligation",color:"var(--blue)"},
    E:{label:"Stationnement",color:"var(--blue)"},
    F:{label:"Indication",color:"var(--teal)"},
    X:{label:"Panonceaux",color:"var(--purple)"},
    T:{label:"Travaux",color:"var(--orange)"},
    S:{label:"Service",color:"var(--green)"}
};

// =========================================================
// STOCKAGE & ETAT
// =========================================================

var DEFAULT_APP_DATA = {
    favorites:[],
    stats:{sessions:0,correct:0,total:0},
    mistakes:{},
    theme:"light",
    streak:0
};

var appData = JSON.parse(JSON.stringify(DEFAULT_APP_DATA));

async function loadAppData(){
    try{
        if(window.storage && typeof window.storage.get === "function"){
            var result = await window.storage.get("app-state", false);
            if(result && typeof result.value==="string"){
                var parsed = JSON.parse(result.value);
                appData = {
                    ...DEFAULT_APP_DATA,
                    ...parsed,
                    stats:{...DEFAULT_APP_DATA.stats, ...(parsed.stats||{})}
                };
            }
        }
    }catch(e){
        console.warn("Impossible de charger les donnees:", e);
    }
}

async function saveAppData(){
    try{
        if(window.storage && typeof window.storage.set === "function"){
            await window.storage.set("app-state", JSON.stringify(appData), false);
        }
    }catch(e){
        console.warn("Echec de la sauvegarde:", e);
    }
}

function favorites(){ return appData.favorites; }
function stats(){ return appData.stats; }
function mistakes(){ return appData.mistakes; }

var state={
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
    seconds:15,
    isOfficialExam:false
};

function $(id){ return document.getElementById(id); }

function escapeHTML(value){
    return String(value || "").replace(/[&<>"']/g, function(char){
        var map = {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"};
        return map[char];
    });
}

function animateCount(element,from,to,suffix,duration){
    duration = duration || 550;
    if(!element) return;
    if(from===to){ element.textContent=to+suffix; return; }
    var start=performance.now();
    function tick(now){
        var progress=Math.min(1,(now-start)/duration);
        var eased=1-Math.pow(1-progress,3);
        var value=Math.round(from+(to-from)*eased);
        element.textContent=value+suffix;
        if(progress<1){ requestAnimationFrame(tick); }
    }
    requestAnimationFrame(tick);
}

function shuffle(array){
    var copy=array.slice();
    for(var i=copy.length-1;i>0;i--){
        var j=Math.floor(Math.random()*(i+1));
        var temp=copy[i];
        copy[i]=copy[j];
        copy[j]=temp;
    }
    return copy;
}

function updateHomeStats(){
    var total=stats().total;
    var correct=stats().correct;
    var percentage=total>0?Math.round(100*correct/total):0;

    var prevSessions=Number($("statSessions")?.textContent)||0;
    var prevQuestions=Number($("statQuestions")?.textContent)||0;
    var prevFavs=Number($("statFavs")?.textContent)||0;
    var prevSuccess=Number(($("statSuccess")?.textContent||"0").replace("%",""))||0;

    if($("statSessions")) animateCount($("statSessions"),prevSessions,stats().sessions,"");
    if($("statSuccess")) animateCount($("statSuccess"),prevSuccess,percentage,"%");
    if($("statFavs")) animateCount($("statFavs"),prevFavs,favorites().length,"");
    if($("statQuestions")) animateCount($("statQuestions"),prevQuestions,total,"");

    if($("progressPercent")) $("progressPercent").textContent=percentage+"%";
    if($("progressBar")) $("progressBar").style.width=percentage+"%";

    if($("progressText")){
        $("progressText").textContent = total>0 ? correct+" bonne(s) reponse(s) sur "+total : "Aucune session";
    }
    if($("reviewCount")){
        var set = new Set([...favorites(), ...Object.keys(mistakes())]);
        $("reviewCount").textContent = set.size;
    }
    if($("streak")) $("streak").textContent=appData.streak;
}

async function toggleTheme(){
    document.body.classList.toggle("dark");
    appData.theme=document.body.classList.contains("dark")?"dark":"light";
    if($("themeButton")) $("themeButton").textContent=appData.theme==="dark"?"🌙":"☀";
    await saveAppData();
}

function applyTheme(){
    if(appData.theme==="dark"){
        document.body.classList.add("dark");
        if($("themeButton")) $("themeButton").textContent="🌙";
    }
}

function hideViews(){
    var ids = ["home","quiz","repo","infractions","rules","matiereAuto","piegesRoutes","usagersManoeuvres","marquages","conditions"];
    for(var i=0;i<ids.length;i++){
        if($(ids[i])) $(ids[i]).classList.add("hidden");
    }
}

function goHome(){
    clearInterval(state.timerId);
    hideViews();
    if($("home")) $("home").classList.remove("hidden");
    if($("homeButton")) $("homeButton").style.display="none";
    updateHomeStats();
}

function showQuiz(){
    clearInterval(state.timerId);
    hideViews();
    state.isOfficialExam = false;
    if($("quiz")) $("quiz").classList.remove("hidden");
    if($("homeButton")) $("homeButton").style.display="block";
    configureQuiz();
}

function startOfficialExam(){
    clearInterval(state.timerId);
    hideViews();
    state.isOfficialExam = true;
    state.timer = true;
    
    var allPool = PANNEAUX.slice();
    while(allPool.length < 50) {
        allPool = allPool.concat(PANNEAUX);
    }
    state.questions = shuffle(allPool).slice(0, 50);
    
    if($("quiz")) $("quiz").classList.remove("hidden");
    if($("homeButton")) $("homeButton").style.display="block";
    
    if($("quizConfig")) $("quizConfig").classList.add("hidden");
    if($("quizSummary")) $("quizSummary").classList.add("hidden");
    if($("quizRunning")) $("quizRunning").classList.remove("hidden");
    
    beginSession(false);
}

function showRepo(){
    hideViews();
    if($("repo")) $("repo").classList.remove("hidden");
    if($("homeButton")) $("homeButton").style.display="block";
    renderRepository();
}

function showInfractions(){
    hideViews();
    if($("infractions")) $("infractions").classList.remove("hidden");
    if($("homeButton")) $("homeButton").style.display="block";
    renderInfractions();
}

function showRules(){
    hideViews();
    if($("rules")) $("rules").classList.remove("hidden");
    if($("homeButton")) $("homeButton").style.display="block";
    renderRules();
}

function showMatiereAuto(){
    clearInterval(state.timerId);
    hideViews();
    if($("matiereAuto")) $("matiereAuto").classList.remove("hidden");
    if($("homeButton")) $("homeButton").style.display="block";
    renderMatiereAuto();
}

function showPiegesRoutes(){
    clearInterval(state.timerId);
    hideViews();
    if($("piegesRoutes")) $("piegesRoutes").classList.remove("hidden");
    if($("homeButton")) $("homeButton").style.display="block";
    renderPiegesRoutes();
}

function showUsagersManoeuvres(){
    clearInterval(state.timerId);
    hideViews();
    if($("usagersManoeuvres")) $("usagersManoeuvres").classList.remove("hidden");
    if($("homeButton")) $("homeButton").style.display="block";
    renderUsagersManoeuvres();
}

function showMarquages(){
    clearInterval(state.timerId);
    hideViews();
    if($("marquages")) $("marquages").classList.remove("hidden");
    if($("homeButton")) $("homeButton").style.display="block";
    renderMarquages();
}

function showConditions(){
    clearInterval(state.timerId);
    hideViews();
    if($("conditions")) $("conditions").classList.remove("hidden");
    if($("homeButton")) $("homeButton").style.display="block";
    renderConditions();
}

function renderCategorySelector(){
    var grid=$("categoryGrid");
    if(!grid) return;
    grid.innerHTML="";

    var keys = Object.keys(CATEGORIES);
    for(var i=0;i<keys.length;i++){
        var key = keys[i];
        var category=CATEGORIES[key];
        var count=PANNEAUX.filter(function(p){ return p.cat===key; }).length;
        var button=document.createElement("button");
        button.type="button";
        button.className="cat-chip"+(state.categories.indexOf(key)>=0?"":" off");
        button.innerHTML='<span class="dot" style="background:'+category.color+'"></span><span><b>'+category.label+'</b><small>'+count+' panneaux</small></span>';
        button.onclick=function(k){
            return function(){
                if(state.categories.indexOf(k)>=0){
                    if(state.categories.length===1) return;
                    state.categories=state.categories.filter(function(c){ return c!==k; });
                }else{
                    state.categories.push(k);
                }
                renderCategorySelector();
            };
        }(key);
        grid.appendChild(button);
    }
    updateQuestionBounds();
}

function updateQuestionBounds(){
    var available=PANNEAUX.filter(function(p){ return state.categories.indexOf(p.cat)>=0; }).length;
    var slider=$("questionCount");
    if(!slider) return;
    slider.max=Math.max(1,available);
    if(Number(slider.value)>available){ slider.value=available; }
    state.questionCount=Math.max(1,Number(slider.value));
    if($("questionCountValue")) $("questionCountValue").textContent=state.questionCount;
    if($("quizWarning")) $("quizWarning").classList.toggle("hidden",available>=2);
}

function configureQuiz(){
    clearInterval(state.timerId);
    state.isOfficialExam = false;
    if($("quizRunning")) $("quizRunning").classList.add("hidden");
    if($("quizSummary")) $("quizSummary").classList.add("hidden");
    if($("quizConfig")) $("quizConfig").classList.remove("hidden");
    renderCategorySelector();
    updateHomeStats();
}

function startQuiz(){
    var pool=PANNEAUX.filter(function(p){ return state.categories.indexOf(p.cat)>=0; });
    if(pool.length<2) return;
    var timerCheckbox = document.getElementById("timerEnabled");
    state.timer = timerCheckbox ? timerCheckbox.checked : false;
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
    if($("quizConfig")) $("quizConfig").classList.add("hidden");
    if($("quizSummary")) $("quizSummary").classList.add("hidden");
    if($("quizRunning")) $("quizRunning").classList.remove("hidden");
    renderQuestion();
}

function startReview(){
    var reviewMap={};
    favorites().forEach(function(code){
        var found = PANNEAUX.find(function(p){ return p.code===code; });
        if(found) reviewMap[found.code]=found;
    });
    var mistakesKeys = Object.keys(mistakes());
    mistakesKeys.forEach(function(code){
        var found = PANNEAUX.find(function(p){ return p.code===code; });
        if(found) reviewMap[found.code]=found;
    });
    var list = shuffle(Object.values(reviewMap));
    if(!list.length){ showQuiz(); return; }
    state.questions=list;
    state.timer=false;
    state.isOfficialExam = false;
    beginSession(true);
}

function reviewErrors(){
    state.questions=state.errors.map(function(error){ return error.panel; });
    state.timer=false;
    state.isOfficialExam = false;
    beginSession(true);
}

// =========================================================
// PANNEAUX SVG ENGINE - VERSION SIMPLIFIEE
// =========================================================

function makeSignSVG(panel, small){
    small = small || false;
    var ink = "#171a1f";
    var content = "";

    if(panel.cat === "A"){
        content = '<polygon points="90,12 168,154 12,154" fill="#fff" stroke="#c81e2c" stroke-width="12" stroke-linejoin="round"/>';
        content += '<rect x="85" y="70" width="10" height="40" rx="3" fill="'+ink+'"/><circle cx="90" cy="122" r="5" fill="'+ink+'"/>';
    } else if(panel.cat === "B"){
        if(panel.code === "B1"){
            content = '<polygon points="12,30 168,30 90,160" fill="#fff" stroke="#c81e2c" stroke-width="12" stroke-linejoin="round"/>';
        } else if(panel.code === "B5"){
            content = '<polygon points="60,10 120,10 170,60 170,120 120,170 60,170 10,120 10,60" fill="#c81e2c" stroke="#7a0f18" stroke-width="3" stroke-linejoin="round"/><text x="90" y="102" text-anchor="middle" font-size="'+(small?16:30)+'" font-weight="900" fill="#fff" font-family="Arial">STOP</text>';
        } else {
            content = '<polygon points="90,12 168,90 90,168 12,90" fill="#e8a400" stroke="'+ink+'" stroke-width="2.5"/>';
        }
    } else if(panel.cat === "C"){
        if(panel.code === "C1"){
            content = '<circle cx="90" cy="90" r="76" fill="#fff" stroke="#c81e2c" stroke-width="14"/>';
        } else if(panel.code === "C3"){
            content = '<circle cx="90" cy="90" r="76" fill="#c81e2c"/><rect x="30" y="76" width="120" height="28" rx="4" fill="#fff"/>';
        } else if(panel.num){
            content = '<circle cx="90" cy="90" r="76" fill="#fff" stroke="#c81e2c" stroke-width="14"/><text x="90" y="108" text-anchor="middle" font-size="'+(small?22:52)+'" font-weight="900" fill="'+ink+'" font-family="Arial">'+escapeHTML(panel.num)+'</text>';
        } else {
            content = '<circle cx="90" cy="90" r="76" fill="#fff" stroke="#9aa1aa" stroke-width="3"/><line x1="35" y1="125" x2="125" y2="35" stroke="#4a4d52" stroke-width="8"/>';
        }
    } else if(panel.cat === "D"){
        content = '<circle cx="90" cy="90" r="76" fill="#1c5fa8"/>';
        content += '<path d="M90 130 V50 M65 75 L90 50 L115 75" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>';
    } else if(panel.cat === "E"){
        if(panel.code === "E1" || panel.code === "E3"){
            content = '<circle cx="90" cy="90" r="76" fill="#1c5fa8" stroke="#c81e2c" stroke-width="12"/><line x1="35" y1="145" x2="145" y2="35" stroke="#c81e2c" stroke-width="12"/>';
        } else {
            content = '<rect x="12" y="12" width="156" height="156" rx="14" fill="#1c5fa8"/><text x="90" y="122" text-anchor="middle" font-size="'+(small?42:90)+'" font-weight="900" fill="#fff" font-family="Arial">P</text>';
        }
    } else if(panel.cat === "F"){
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#fff" stroke="'+ink+'" stroke-width="3"/><text x="90" y="45" text-anchor="middle" font-size="'+(small?12:18)+'" font-weight="900" fill="'+ink+'" letter-spacing="2">ZONE</text><circle cx="90" cy="105" r="42" fill="#fff" stroke="#c81e2c" stroke-width="9"/><text x="90" y="118" text-anchor="middle" font-size="'+(small?18:34)+'" font-weight="900" fill="'+ink+'" font-family="Arial">30</text>';
    } else if(panel.cat === "X"){
        content = '<rect x="12" y="55" width="156" height="70" rx="6" fill="#fff" stroke="'+ink+'" stroke-width="4"/><text x="90" y="98" text-anchor="middle" font-size="'+(small?16:24)+'" font-weight="900" fill="'+ink+'" font-family="Arial">Panonceau</text>';
    } else if(panel.cat === "T"){
        content = '<polygon points="90,12 168,154 12,154" fill="#ff8c00" stroke="#c81e2c" stroke-width="12" stroke-linejoin="round"/>';
        content += '<rect x="85" y="70" width="10" height="40" rx="3" fill="#fff"/>';
    } else {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#1c5fa8"/><text x="90" y="122" text-anchor="middle" font-size="'+(small?42:90)+'" font-weight="900" fill="#fff" font-family="Arial">S</text>';
    }

    return '<svg class="sign-svg" viewBox="0 0 180 180" preserveAspectRatio="xMidYMid meet" role="img" aria-label="'+escapeHTML(panel.nom)+'" xmlns="http://www.w3.org/2000/svg">'+content+'</svg>';
}

function renderProgressDots(){
    if(!$("progressDots")) return;
    var html = "";
    for(var i=0;i<state.questions.length;i++){
        html += '<i class="'+(i<state.index?"done":"")+'"></i>';
    }
    $("progressDots").innerHTML = html;
}

function renderQuestion(){
    clearInterval(state.timerId);
    if(state.index>=state.questions.length){ showSummary(); return; }
    renderProgressDots();

    var panel=state.questions[state.index];
    var totalQ = state.questions.length;

    if($("quizProgress")){
        $("quizProgress").textContent = (state.isOfficialExam ? "Examen Officiel" : (state.review?"Revision":"Question")) + " " + (state.index+1) + " / " + totalQ;
    }
    if($("quizScore")) $("quizScore").textContent="Score : "+state.score;
    if($("favoriteButton")){
        $("favoriteButton").textContent = favorites().indexOf(panel.code)>=0 ? "⭐" : "☆";
    }
    if($("signStage")) $("signStage").innerHTML=makeSignSVG(panel,false);
    if($("signCaption")){
        $("signCaption").textContent = panel.code + " — " + (CATEGORIES[panel.cat]?.label||"Panonceau");
    }

    var distractors=shuffle(PANNEAUX.filter(function(p){ return p.code!==panel.code; })).slice(0,3);
    state.options=shuffle([panel].concat(distractors));
    state.answered=false;

    if($("optionList")){
        var optionsHtml = "";
        for(var i=0;i<state.options.length;i++){
            optionsHtml += '<button class="option" onclick="answerQuestion('+i+')">'+escapeHTML(state.options[i].nom)+'</button>';
        }
        $("optionList").innerHTML=optionsHtml;
    }

    if($("feedbackZone")) $("feedbackZone").innerHTML="";
    if($("nextButtonZone")) $("nextButtonZone").innerHTML="";

    if(state.timer && $("timerDisplay")){
        state.seconds=15;
        $("timerDisplay").classList.remove("hidden");
        $("timerDisplay").classList.remove("low");
        $("timerDisplay").textContent="⏳ 15s";

        state.timerId=setInterval(function(){
            state.seconds--;
            $("timerDisplay").textContent="⏳ "+state.seconds+"s";
            $("timerDisplay").classList.toggle("low",state.seconds<=5);
            if(state.seconds<=0){
                clearInterval(state.timerId);
                timeoutQuestion();
            }
        },1000);
    }else if($("timerDisplay")){
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
    var panel=state.questions[state.index];
    var selected=selectedIndex>=0?state.options[selectedIndex]:null;
    var correct=selected && selected.code===panel.code;

    var categoryState=state.categoryStats[panel.cat]||{correct:0,total:0};
    categoryState.total++;

    if(correct){
        state.score++;
        categoryState.correct++;
    }else{
        state.errors.push({ panel: panel, answer:selected?selected.nom:"Temps ecoule" });
        appData.mistakes[panel.code]=(appData.mistakes[panel.code]||0)+1;
        await saveAppData();
    }
    state.categoryStats[panel.cat]=categoryState;

    var options = document.querySelectorAll("#optionList .option");
    for(var i=0;i<options.length;i++){
        options[i].classList.add("locked");
        if(state.options[i].code===panel.code){
            options[i].classList.add("correct");
        }else if(i===selectedIndex){
            options[i].classList.add("wrong");
        }
    }

    if($("feedbackZone")){
        $("feedbackZone").innerHTML='<div class="feedback '+(correct?"":"bad")+'"><b>'+(correct ? "Bonne reponse" : selectedIndex<0 ? "Temps ecoule - c'etait : "+escapeHTML(panel.nom) : "Erreur - c'etait : "+escapeHTML(panel.nom))+'</b>'+escapeHTML(panel.desc)+'</div>';
    }

    if($("nextButtonZone")){
        $("nextButtonZone").innerHTML='<button class="primary" style="width:100%" onclick="nextQuestion()">'+(state.index+1>=state.questions.length?"Voir le resume":"Question suivante")+'</button>';
    }
    if($("quizScore")) $("quizScore").textContent="Score : "+state.score;
}

function nextQuestion(){
    state.index++;
    renderQuestion();
}

async function toggleFavorite(){
    var panel=state.questions[state.index];
    var index=appData.favorites.indexOf(panel.code);
    if(index>=0){ appData.favorites.splice(index,1); }
    else{ appData.favorites.push(panel.code); }

    var button=$("favoriteButton");
    if(button){
        button.textContent=favorites().indexOf(panel.code)>=0?"⭐":"☆";
        button.classList.remove("pop");
        void button.offsetWidth;
        button.classList.add("pop");
    }
    await saveAppData();
    updateHomeStats();
}

async function showSummary(){
    clearInterval(state.timerId);
    var total=state.questions.length;
    var score=state.score;
    var percentage=total?Math.round(100*score/total):0;

    if(!state.review){
        appData.stats.sessions++;
        appData.stats.correct+=score;
        appData.stats.total+=total;
        await saveAppData();
    }

    if($("quizRunning")) $("quizRunning").classList.add("hidden");
    if($("quizSummary")) $("quizSummary").classList.remove("hidden");

    var passed = true;
    if(state.isOfficialExam){
        passed = score >= 41;
        $("summaryTitle").textContent = passed ? "🎉 EXAMEN REUSSI (Officiel)" : "❌ EXAMEN ECHOUE (Officiel)";
    } else {
        $("summaryTitle").textContent = state.review ? "Revision terminee" : "Session terminee";
    }

    if($("summaryPercent")){
        $("summaryPercent").textContent="0%";
        animateCount($("summaryPercent"),0,percentage,"%",700);
    }
    if($("summaryFraction")) $("summaryFraction").textContent=score+" / "+total;

    if($("summaryMessage")){
        if(state.isOfficialExam){
            $("summaryMessage").textContent = passed ? "Felicitations ! Avec "+score+"/50, tu obtiens ton permis theorique." : "Tu as obtenu "+score+"/50. Seuil : 41/50.";
        } else {
            $("summaryMessage").textContent = percentage>=90 ? "Excellent !" : percentage>=70 ? "Bon score." : "Entrainement requis.";
        }
    }

    if($("categoryResults")){
        var catHtml = "";
        var catEntries = Object.entries(state.categoryStats);
        for(var i=0;i<catEntries.length;i++){
            var cat = catEntries[i][0];
            var result = catEntries[i][1];
            var percent=Math.round(100*result.correct/result.total);
            catHtml += '<div class="category-result"><div class="category-result-top"><span>'+(CATEGORIES[cat]?.label || cat)+'</span><span>'+result.correct+'/'+result.total+'</span></div><div class="category-track"><span data-target="'+percent+'" style="background:'+(CATEGORIES[cat]?.color || 'var(--blue)')+';"></span></div></div>';
        }
        $("categoryResults").innerHTML=catHtml;
    }

    requestAnimationFrame(function(){
        var spans = document.querySelectorAll("#categoryResults .category-track span");
        for(var i=0;i<spans.length;i++){
            spans[i].style.width=spans[i].dataset.target+"%";
        }
    });

    if(state.errors.length){
        if($("errorResults")){
            var errorHtml = '<details class="errors"><summary>Revoir les '+state.errors.length+' erreur(s)</summary>';
            for(var i=0;i<state.errors.length;i++){
                var error = state.errors[i];
                errorHtml += '<div class="error"><b>['+escapeHTML(error.panel.code)+'] '+escapeHTML(error.panel.nom)+'</b><div class="your-answer">Ta reponse : '+escapeHTML(error.answer)+'</div><div>'+escapeHTML(error.panel.desc)+'</div></div>';
            }
            errorHtml += '</details>';
            $("errorResults").innerHTML=errorHtml;
        }
        if($("reviewErrorsZone")){
            $("reviewErrorsZone").innerHTML='<button class="danger" style="width:100%" onclick="reviewErrors()">Refaire mes erreurs ('+state.errors.length+')</button>';
        }
    }else{
        if($("errorResults")) $("errorResults").innerHTML="";
        if($("reviewErrorsZone")) $("reviewErrorsZone").innerHTML="";
    }
    updateHomeStats();
}

function replayQuiz(){ beginSession(state.review); }

// =========================================================
// FUNCTIONS DE RENDU POUR LES DIFFERENTES VUES
// =========================================================

function renderRepository(){
    var query=$("repoSearch") ? $("repoSearch").value.trim().toLowerCase() : "";
    var results=PANNEAUX.filter(function(panel){
        if(!query) return true;
        return [panel.code,panel.nom,panel.desc,CATEGORIES[panel.cat]?.label].join(" ").toLowerCase().indexOf(query)>=0;
    });
    if($("repoCount")) $("repoCount").textContent=results.length+" panneau(x) - base de "+PANNEAUX.length;

    var list=$("repoList");
    if(!list) return;
    list.innerHTML="";
    list.classList.remove("fade-list");
    void list.offsetWidth;
    list.classList.add("fade-list");

    var catKeys = Object.keys(CATEGORIES);
    for(var ci=0;ci<catKeys.length;ci++){
        var category=catKeys[ci];
        var group=results.filter(function(panel){ return panel.cat===category; });
        if(!group.length) continue;
        list.insertAdjacentHTML("beforeend", '<div class="repo-head"><span class="dot" style="background:'+CATEGORIES[category].color+'"></span>'+CATEGORIES[category].label+'</div>');
        for(var gi=0;gi<group.length;gi++){
            var panel=group[gi];
            list.insertAdjacentHTML("beforeend", '<div class="repo-item"><div class="repo-thumb">'+makeSignSVG(panel,true)+'</div><div><div class="repo-code">'+escapeHTML(panel.code)+'</div><div class="repo-name">'+escapeHTML(panel.nom)+'</div><div class="repo-desc">'+escapeHTML(panel.desc)+'</div></div></div>');
        }
    }
    if(!results.length){ list.innerHTML='<div class="empty">Aucun panneau ne correspond.</div>'; }
}

function renderInfractions(){
    var query=$("infractionSearch") ? $("infractionSearch").value.trim().toLowerCase() : "";
    var results=INFRACTIONS.filter(function(item){
        if(!query) return true;
        return [item.titre,item.degre,item.amende,item.desc].join(" ").toLowerCase().indexOf(query)>=0;
    });
    var list=$("infractionList");
    if(!list) return;
    list.classList.remove("fade-list");
    void list.offsetWidth;
    list.classList.add("fade-list");

    if(results.length){
        var html = "";
        for(var i=0;i<results.length;i++){
            var item=results[i];
            var badgeClass="";
            if(item.degre.indexOf("2eme")>=0){ badgeClass="badge-2"; }
            else if(item.degre.indexOf("3eme")>=0){ badgeClass="badge-3"; }
            else if(item.degre.indexOf("4eme")>=0||item.degre.indexOf("Tribunal")>=0||item.degre.indexOf("Delit")>=0){ badgeClass="badge-4"; }
            else if(item.degre.indexOf("Vitesse")>=0){ badgeClass="badge-vitesse"; }
            else if(item.degre.indexOf("Alcool")>=0){ badgeClass="badge-alcool"; }
            html += '<div class="info-card"><div class="info-header"><span class="badge '+badgeClass+'">'+escapeHTML(item.degre)+'</span><b>'+escapeHTML(item.amende)+'</b></div><b>'+escapeHTML(item.titre)+'</b><p>'+escapeHTML(item.desc)+'</p></div>';
        }
        list.innerHTML=html;
    }else{
        list.innerHTML='<div class="empty">Aucune infraction.</div>';
    }
}

function renderRules(){
    var query=$("ruleSearch") ? $("ruleSearch").value.trim().toLowerCase() : "";
    var results=RULES.filter(function(rule){
        if(!query) return true;
        return [rule.titre,rule.desc].join(" ").toLowerCase().indexOf(query)>=0;
    });
    var list=$("ruleList");
    if(!list) return;
    list.classList.remove("fade-list");
    void list.offsetWidth;
    list.classList.add("fade-list");

    if(results.length){
        var html = "";
        for(var i=0;i<results.length;i++){
            var rule=results[i];
            html += '<div class="rule-card"><b>'+escapeHTML(rule.titre)+'</b><p>'+rule.desc+'</p></div>';
        }
        list.innerHTML=html;
    }else{
        list.innerHTML='<div class="empty">Aucune regle.</div>';
    }
}

function renderMatiereAuto(){
    var query=$("autoSearch") ? $("autoSearch").value.trim().toLowerCase() : "";
    var results=MATIERE_AUTO.filter(function(item){
        if(!query) return true;
        return [item.titre,item.cat,item.desc].join(" ").toLowerCase().indexOf(query)>=0;
    });
    var list=$("autoList");
    if(!list) return;
    list.classList.remove("fade-list");
    void list.offsetWidth;
    list.classList.add("fade-list");

    if(results.length){
        var html = "";
        for(var i=0;i<results.length;i++){
            var item=results[i];
            html += '<div class="rule-card"><div class="info-header"><span class="badge" style="background:var(--blue)">'+escapeHTML(item.cat)+'</span></div><b>'+escapeHTML(item.titre)+'</b><p>'+item.desc+'</p></div>';
        }
        list.innerHTML=html;
    }else{
        list.innerHTML='<div class="empty">Aucune notion.</div>';
    }
}

function renderPiegesRoutes(){
    var query=$("piegeSearch") ? $("piegeSearch").value.trim().toLowerCase() : "";
    var results=PIEGES_ROUTES.filter(function(item){
        if(!query) return true;
        return [item.titre,item.cat,item.desc].join(" ").toLowerCase().indexOf(query)>=0;
    });
    var list=$("piegeList");
    if(!list) return;
    list.classList.remove("fade-list");
    void list.offsetWidth;
    list.classList.add("fade-list");

    if(results.length){
        var html = "";
        for(var i=0;i<results.length;i++){
            var item=results[i];
            html += '<div class="rule-card"><div class="info-header"><span class="badge" style="background:var(--red)">'+escapeHTML(item.cat)+'</span></div><b>'+escapeHTML(item.titre)+'</b><p>'+item.desc+'</p></div>';
        }
        list.innerHTML=html;
    }else{
        list.innerHTML='<div class="empty">Aucun piege.</div>';
    }
}

function renderUsagersManoeuvres(){
    var query=$("usagerSearch") ? $("usagerSearch").value.trim().toLowerCase() : "";
    var results=USAGERS_MANOEUVRES.filter(function(item){
        if(!query) return true;
        return [item.titre,item.cat,item.desc].join(" ").toLowerCase().indexOf(query)>=0;
    });
    var list=$("usagerList");
    if(!list) return;
    list.classList.remove("fade-list");
    void list.offsetWidth;
    list.classList.add("fade-list");

    if(results.length){
        var html = "";
        for(var i=0;i<results.length;i++){
            var item=results[i];
            html += '<div class="rule-card"><div class="info-header"><span class="badge" style="background:var(--teal)">'+escapeHTML(item.cat)+'</span></div><b>'+escapeHTML(item.titre)+'</b><p>'+item.desc+'</p></div>';
        }
        list.innerHTML=html;
    }else{
        list.innerHTML='<div class="empty">Aucun element.</div>';
    }
}

function renderMarquages(){
    var query=$("marquageSearch") ? $("marquageSearch").value.trim().toLowerCase() : "";
    var results=MARQUAGES.filter(function(item){
        if(!query) return true;
        return [item.titre,item.cat,item.desc].join(" ").toLowerCase().indexOf(query)>=0;
    });
    var list=$("marquageList");
    if(!list) return;
    list.classList.remove("fade-list");
    void list.offsetWidth;
    list.classList.add("fade-list");

    if(results.length){
        var html = "";
        for(var i=0;i<results.length;i++){
            var item=results[i];
            html += '<div class="rule-card"><div class="info-header"><span class="badge" style="background:var(--purple)">'+escapeHTML(item.cat)+'</span></div><b>'+escapeHTML(item.titre)+'</b><p>'+item.desc+'</p></div>';
        }
        list.innerHTML=html;
    }else{
        list.innerHTML='<div class="empty">Aucun marquage.</div>';
    }
}

function renderConditions(){
    var query=$("conditionSearch") ? $("conditionSearch").value.trim().toLowerCase() : "";
    var results=CONDITIONS.filter(function(item){
        if(!query) return true;
        return [item.titre,item.cat,item.desc].join(" ").toLowerCase().indexOf(query)>=0;
    });
    var list=$("conditionList");
    if(!list) return;
    list.classList.remove("fade-list");
    void list.offsetWidth;
    list.classList.add("fade-list");

    if(results.length){
        var html = "";
        for(var i=0;i<results.length;i++){
            var item=results[i];
            html += '<div class="rule-card"><div class="info-header"><span class="badge" style="background:var(--amber)">'+escapeHTML(item.cat)+'</span></div><b>'+escapeHTML(item.titre)+'</b><p>'+item.desc+'</p></div>';
        }
        list.innerHTML=html;
    }else{
        list.innerHTML='<div class="empty">Aucune condition.</div>';
    }
}

// =========================================================
// KEYBOARD SHORTCUTS
// =========================================================

document.addEventListener("keydown", function(event){
    if($("quizRunning") && $("quizRunning").classList.contains("hidden")) return;
    if(event.key>="1" && event.key<="4" && !state.answered){ answerQuestion(Number(event.key)-1); }
    if(event.key==="Enter" && state.answered){ nextQuestion(); }
    if(event.key.toLowerCase()==="f"){ toggleFavorite(); }
    if(event.key==="Escape"){ goHome(); }
});

if($("questionCount")){
    $("questionCount").addEventListener("input", function(event){
        state.questionCount=Number(event.target.value);
        if($("questionCountValue")) $("questionCountValue").textContent=state.questionCount;
    });
}

// =========================================================
// EXPORT DES FONCTIONS
// =========================================================

window.goHome = goHome;
window.showQuiz = showQuiz;
window.startOfficialExam = startOfficialExam;
window.showRepo = showRepo;
window.showInfractions = showInfractions;
window.showRules = showRules;
window.showMatiereAuto = showMatiereAuto;
window.showPiegesRoutes = showPiegesRoutes;
window.showUsagersManoeuvres = showUsagersManoeuvres;
window.showMarquages = showMarquages;
window.showConditions = showConditions;
window.renderMatiereAuto = renderMatiereAuto;
window.renderPiegesRoutes = renderPiegesRoutes;
window.renderUsagersManoeuvres = renderUsagersManoeuvres;
window.renderMarquages = renderMarquages;
window.renderConditions = renderConditions;
window.toggleTheme = toggleTheme;
window.startReview = startReview;
window.startQuiz = startQuiz;
window.configureQuiz = configureQuiz;
window.replayQuiz = replayQuiz;
window.reviewErrors = reviewErrors;
window.toggleFavorite = toggleFavorite;
window.answerQuestion = answerQuestion;
window.nextQuestion = nextQuestion;
window.renderRepository = renderRepository;
window.renderInfractions = renderInfractions;
window.renderRules = renderRules;

// =========================================================
// INITIALISATION
// =========================================================

async function init(){
    await loadAppData();
    applyTheme();
    renderCategorySelector();
    updateHomeStats();
    goHome();
    document.body.classList.add("ready");
}

document.addEventListener('DOMContentLoaded', init);
