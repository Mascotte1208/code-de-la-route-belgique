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
// DONNEES OFFICIELLES COMPLETES - 435+ ELEMENTS
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

// ---- PANNEAUX TEMPORAIRES (TRAVAUX) ----
var PANNEAUX_T = [
    {code:"T1",nom:"Travaux (danger)",cat:"T",desc:"Annonce un danger lie a des travaux."},
    {code:"T2",nom:"Deviation (gauche)",cat:"T",desc:"Indique une deviation par la gauche."},
    {code:"T3",nom:"Deviation (droite)",cat:"T",desc:"Indique une deviation par la droite."},
    {code:"T4",nom:"Fin de travaux",cat:"T",desc:"Fin de la zone de travaux."}
];

// ---- PANNEAUX DE SERVICE ----
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
    PANNEAUX_A, PANNEAUX_B, PANNEAUX_C, PANNEAUX_D,
    PANNEAUX_E, PANNEAUX_F, PANNEAUX_X, PANNEAUX_T, PANNEAUX_S
);

// ---- MECANIQUE MOTEUR (60 elements) ----
var MECANIQUE_MOTEUR = [
    {id:"mec_001",titre:"Huile moteur",cat:"MECA",sousCat:"Moteur",desc:"Viscosite 5W30/10W40. Vidange tous les 15 000-30 000 km. Verifier le niveau moteur froid."},
    {id:"mec_002",titre:"Filtre a huile",cat:"MECA",sousCat:"Moteur",desc:"Remplacement a chaque vidange. Retient les impuretes et particules metalliques."},
    {id:"mec_003",titre:"Liquide de refroidissement",cat:"MECA",sousCat:"Moteur",desc:"Antigel, niveau entre MIN et MAX. Remplacement tous les 5 ans ou 100 000 km."},
    {id:"mec_004",titre:"Thermostat",cat:"MECA",sousCat:"Moteur",desc:"Regule la temperature moteur. Bloque ouvert = moteur froid, bloque ferme = surchauffe."},
    {id:"mec_005",titre:"Radiateur",cat:"MECA",sousCat:"Moteur",desc:"Nettoyage regulier. Risque de fuite = surchauffe moteur."},
    {id:"mec_006",titre:"Ventilateur de refroidissement",cat:"MECA",sousCat:"Moteur",desc:"S'enclenche a 90-100°C. Defaut = surchauffe moteur."},
    {id:"mec_007",titre:"Courroie de distribution",cat:"MECA",sousCat:"Moteur",desc:"Remplacement 100 000-150 000 km. Casse = destruction moteur (soupapes/pistons)."},
    {id:"mec_008",titre:"Courroie d'accessoires",cat:"MECA",sousCat:"Moteur",desc:"Alternateur, pompe de direction, climatisation. Casse = perte d'assistance."},
    {id:"mec_009",titre:"Tendeur de courroie",cat:"MECA",sousCat:"Moteur",desc:"Maintient la tension. Usure = bruit, glissement de courroie."},
    {id:"mec_010",titre:"Pompe a eau",cat:"MECA",sousCat:"Moteur",desc:"Circulation du liquide de refroidissement. Fuite = surchauffe."},
    {id:"mec_011",titre:"Alternateur",cat:"MECA",sousCat:"Electrique",desc:"Recharge la batterie. Defaut = batterie vide, voyant rouge."},
    {id:"mec_012",titre:"Batterie",cat:"MECA",sousCat:"Electrique",desc:"Tension 12V, capacite Ah. Duree de vie 4-5 ans. Ne pas decharger completement."},
    {id:"mec_013",titre:"Demarreur",cat:"MECA",sousCat:"Electrique",desc:"Lance le moteur. Clic sans rotation = batterie ou demarreur HS."},
    {id:"mec_014",titre:"Filtre a air moteur",cat:"MECA",sousCat:"Moteur",desc:"Remplacement 20 000-40 000 km. Colmate = perte de puissance, surconsommation."},
    {id:"mec_015",titre:"Turbo-compresseur",cat:"MECA",sousCat:"Moteur",desc:"Suralimentation. Defaut = perte de puissance, fumee bleue/noire."},
    {id:"mec_016",titre:"Vanne EGR",cat:"MECA",sousCat:"Moteur",desc:"Recirculation des gaz d'echappement. Colmatage = perte de puissance, voyant moteur."},
    {id:"mec_017",titre:"Volant moteur (bimasse)",cat:"MECA",sousCat:"Transmission",desc:"Amortit les vibrations. Defaut = claquements au ralenti."},
    {id:"mec_018",titre:"Embrayage",cat:"MECA",sousCat:"Transmission",desc:"Usure 150 000-200 000 km. Patinage = embrayage use."},
    {id:"mec_019",titre:"Boite de vitesses",cat:"MECA",sousCat:"Transmission",desc:"Vidange 60 000-100 000 km. Passage dur = usure des synchronisations."},
    {id:"mec_020",titre:"Arbre de transmission",cat:"MECA",sousCat:"Transmission",desc:"Transmet le couple. Jeu = vibrations, claquements."},
    {id:"mec_021",titre:"Cardans / Roulements de roue",cat:"MECA",sousCat:"Transmission",desc:"Usure = bruit de roulement, vibrations."},
    {id:"mec_022",titre:"Joint de culasse",cat:"MECA",sousCat:"Moteur",desc:"Fissure = melange huile/eau, fumee blanche, surchauffe."},
    {id:"mec_023",titre:"Filtre a gazole (diesel)",cat:"MECA",sousCat:"Injection",desc:"Purge de l'eau. Remplacement 20 000 km."},
    {id:"mec_024",titre:"Systeme AdBlue",cat:"MECA",sousCat:"Injection",desc:"Reduction des NOx. Niveau a controler. Defaut = non-demarrage."},
    {id:"mec_025",titre:"Injecteurs (essence)",cat:"MECA",sousCat:"Injection",desc:"Nettoyage ou remplacement 100 000-150 000 km."},
    {id:"mec_026",titre:"Pompe a essence",cat:"MECA",sousCat:"Injection",desc:"Alimentation carburant. Defaut = calage, demarrage difficile."},
    {id:"mec_027",titre:"Bougies de prechauffage (diesel)",cat:"MECA",sousCat:"Injection",desc:"Aident au demarrage a froid. Defaut = fumee blanche au demarrage."},
    {id:"mec_028",titre:"Filtre a air habitacle",cat:"MECA",sousCat:"Confort",desc:"Remplacement 15 000-20 000 km. Colmate = buee, odeurs."},
    {id:"mec_029",titre:"Plaquettes de frein",cat:"MECA",sousCat:"Freinage",desc:"Usure = bruit, distance de freinage allongee. Epaisseur min 2-3 mm."},
    {id:"mec_030",titre:"Disques de frein",cat:"MECA",sousCat:"Freinage",desc:"Usure, voile. Vibrations au freinage = disque voile."},
    {id:"mec_031",titre:"Liquide de frein",cat:"MECA",sousCat:"Freinage",desc:"Niveau, hygroscopique. Remplacement 2-5 ans ou 50 000 km."},
    {id:"mec_032",titre:"Maitre-cylindre",cat:"MECA",sousCat:"Freinage",desc:"Pompe principale de freinage. Fuite = pedale molle."},
    {id:"mec_033",titre:"Etriers de frein",cat:"MECA",sousCat:"Freinage",desc:"Pression sur les plaquettes. Colmatage = freinage asymetrique."},
    {id:"mec_034",titre:"Tuyaux de frein",cat:"MECA",sousCat:"Freinage",desc:"Flexibles. Usure/fissure = perte de pression, danger."},
    {id:"mec_035",titre:"Frein de stationnement",cat:"MECA",sousCat:"Freinage",desc:"Cable ou electrique. Entretien regulier."},
    {id:"mec_036",titre:"ABS (Antiblockiersystem)",cat:"MECA",sousCat:"Freinage",desc:"Capteurs de roue. Defaut = perte d'ABS, temoin."},
    {id:"mec_037",titre:"ESP (Electronic Stability Program)",cat:"MECA",sousCat:"Freinage",desc:"Antipatinage, stabilite. Defaut = temoin."},
    {id:"mec_038",titre:"Assistance au freinage d'urgence",cat:"MECA",sousCat:"Freinage",desc:"Freinage automatique en cas de danger."},
    {id:"mec_039",titre:"Freinage regeneratif",cat:"MECA",sousCat:"Freinage",desc:"Vehicules hybrides/electriques. Recuperation d'energie."},
    {id:"mec_040",titre:"Direction assistee",cat:"MECA",sousCat:"Direction",desc:"Hydraulique ou electrique. Defaut = direction dure."},
    {id:"mec_041",titre:"Liquide de direction",cat:"MECA",sousCat:"Direction",desc:"Controle du niveau, fuites."},
    {id:"mec_042",titre:"Cremaillere de direction",cat:"MECA",sousCat:"Direction",desc:"Jeu, usure = direction floue."},
    {id:"mec_043",titre:"Barres stabilisatrices",cat:"MECA",sousCat:"Suspension",desc:"Maintien de la caisse. Silentblocs uses = bruit."},
    {id:"mec_044",titre:"Amortisseurs",cat:"MECA",sousCat:"Suspension",desc:"Usure = rebond, tenue de route degradee."},
    {id:"mec_045",titre:"Ressorts de suspension",cat:"MECA",sousCat:"Suspension",desc:"Cassure = voiture penche, tenue de route."},
    {id:"mec_046",titre:"Biellettes de direction",cat:"MECA",sousCat:"Direction",desc:"Jeu = direction imprecise."},
    {id:"mec_047",titre:"Rotules de direction",cat:"MECA",sousCat:"Direction",desc:"Usure = jeu dans le volant, usure des pneus."},
    {id:"mec_048",titre:"Silentblocs",cat:"MECA",sousCat:"Suspension",desc:"Amortissement des vibrations. Usure = bruit de roulement."},
    {id:"mec_049",titre:"Bougies d'allumage",cat:"MECA",sousCat:"Allumage",desc:"Usure 30 000-60 000 km. A-coups, surconsommation, demarrage difficile."},
    {id:"mec_050",titre:"Bobines d'allumage",cat:"MECA",sousCat:"Allumage",desc:"Transforment la tension. Defaut = perte de puissance, voyant moteur."},
    {id:"mec_051",titre:"Cables d'allumage",cat:"MECA",sousCat:"Allumage",desc:"Acheminent le courant. Fissures = etincelles, rates."},
    {id:"mec_052",titre:"Catalyseur",cat:"MECA",sousCat:"Echappement",desc:"Transforme les gaz polluants. Colmatage = perte de puissance."},
    {id:"mec_053",titre:"Filtre a particules (FAP)",cat:"MECA",sousCat:"Echappement",desc:"Retient les suies. Regeneration 500-800 km. Colmatage = risque de casse."},
    {id:"mec_054",titre:"Ligne d'echappement",cat:"MECA",sousCat:"Echappement",desc:"Achemine les gaz. Corrosion = trou, bruit, fuite de gaz."},
    {id:"mec_055",titre:"Pot catalytique",cat:"MECA",sousCat:"Echappement",desc:"Combine catalyseur et silencieux. Usure = bruit excessif."},
    {id:"mec_056",titre:"Silencieux d'echappement",cat:"MECA",sousCat:"Echappement",desc:"Reduit le bruit. Perfore = bruit excessif, amende."},
    {id:"mec_057",titre:"Sonde lambda (sonde O2)",cat:"MECA",sousCat:"Echappement",desc:"Mesure l'oxygene. Defaut = surconsommation, voyant."},
    {id:"mec_058",titre:"Feux de croisement",cat:"MECA",sousCat:"Eclairage",desc:"Obligatoires de nuit, tunnels, brouillard. Reglage important."},
    {id:"mec_059",titre:"Feux de route",cat:"MECA",sousCat:"Eclairage",desc:"Eblouissement interdit. Eteindre en approchant d'un vehicule."},
    {id:"mec_060",titre:"Feux de brouillard avant",cat:"MECA",sousCat:"Eclairage",desc:"Autorises uniquement en cas de brouillard ou fortes pluies."}
];

// ---- PNEUMATIQUES (40 elements) ----
var PNEUMATIQUES = [
    {id:"pneu_001",titre:"Pneu ete",cat:"PNEU",sousCat:"Types",desc:"Gomme dure, bonne adherence au-dessus de 7°C."},
    {id:"pneu_002",titre:"Pneu hiver (neige)",cat:"PNEU",sousCat:"Types",desc:"Gomme souple, lamelles. Adherence < 7°C. Obligatoire en zone montagne."},
    {id:"pneu_003",titre:"Pneu 4 saisons",cat:"PNEU",sousCat:"Types",desc:"Compromis ete/hiver. Performance moyenne."},
    {id:"pneu_004",titre:"Pneu cloute",cat:"PNEU",sousCat:"Types",desc:"Autorise du 1er novembre au 31 mars."},
    {id:"pneu_005",titre:"Pneu run-flat",cat:"PNEU",sousCat:"Types",desc:"Roule a plat jusqu'a 80 km/h sur 50-80 km."},
    {id:"pneu_006",titre:"Pneu ZR/VR",cat:"PNEU",sousCat:"Types",desc:"Haute vitesse. Homologation vitesse."},
    {id:"pneu_007",titre:"Pneus rechapés",cat:"PNEU",sousCat:"Types",desc:"Restrictions de vitesse et de poids."},
    {id:"pneu_008",titre:"Indice de charge",cat:"PNEU",sousCat:"Dimensions",desc:"Ex: 91 = 615 kg par pneu."},
    {id:"pneu_009",titre:"Indice de vitesse",cat:"PNEU",sousCat:"Dimensions",desc:"Ex: H = 210 km/h, V = 240 km/h, W = 270 km/h."},
    {id:"pneu_010",titre:"Taille (ex: 205/55 R16)",cat:"PNEU",sousCat:"Dimensions",desc:"Largeur 205, hauteur 55%, R = radial, 16 pouces."},
    {id:"pneu_011",titre:"DOT",cat:"PNEU",sousCat:"Dimensions",desc:"Date de fabrication (semaine/annee). Ex: 2523 = semaine 25, annee 2023."},
    {id:"pneu_012",titre:"Fleche de rotation",cat:"PNEU",sousCat:"Dimensions",desc:"Pneu asymetrique ou directionnel. Montage dans le sens indique."},
    {id:"pneu_013",titre:"TWI (Tread Wear Indicator)",cat:"PNEU",sousCat:"Dimensions",desc:"Temoins d'usure a 1,6 mm."},
    {id:"pneu_014",titre:"Pressions recommandees",cat:"PNEU",sousCat:"Entretien",desc:"Sur l'etiquette portiere ou le manuel. Verification a froid."},
    {id:"pneu_015",titre:"Pression des pneus",cat:"PNEU",sousCat:"Entretien",desc:"Verifier toutes les 2 semaines. Sous-gonflage = surconsommation."},
    {id:"pneu_016",titre:"Sur-gonflage",cat:"PNEU",sousCat:"Entretien",desc:"Usure au centre, moins d'adherence."},
    {id:"pneu_017",titre:"Sous-gonflage",cat:"PNEU",sousCat:"Entretien",desc:"Usure sur les cotes, surchauffe, risque d'eclatement."},
    {id:"pneu_018",titre:"Permutation des pneus",cat:"PNEU",sousCat:"Entretien",desc:"Permutation AV/AR tous les 10 000 km. Usure uniforme."},
    {id:"pneu_019",titre:"Usure irreguliere",cat:"PNEU",sousCat:"Entretien",desc:"Parallelisme ou amortisseurs defectueux."},
    {id:"pneu_020",titre:"Herbe a pneu",cat:"PNEU",sousCat:"Entretien",desc:"Crevaison lente. Surveillance de la pression."},
    {id:"pneu_021",titre:"Kit anti-crevaison",cat:"PNEU",sousCat:"Entretien",desc:"Alternative a la roue de secours. A utiliser avec precaution."},
    {id:"pneu_022",titre:"Roue de secours",cat:"PNEU",sousCat:"Entretien",desc:"Verifier la pression regulierement."},
    {id:"pneu_023",titre:"Jantes",cat:"PNEU",sousCat:"Entretien",desc:"Integrite, fissures, voilage."},
    {id:"pneu_024",titre:"Montage des pneus hiver",cat:"PNEU",sousCat:"Saisons",desc:"1er novembre - 31 mars en zones montagneuses."},
    {id:"pneu_025",titre:"Demontage des pneus hiver",cat:"PNEU",sousCat:"Saisons",desc:"Avril, pour eviter l'usure."},
    {id:"pneu_026",titre:"Pneus neige",cat:"PNEU",sousCat:"Saisons",desc:"Obligatoires sur certaines routes en hiver."},
    {id:"pneu_027",titre:"Chaines a neige",cat:"PNEU",sousCat:"Saisons",desc:"Montage sur roues motrices, vitesse max 50 km/h."},
    {id:"pneu_028",titre:"Chaussettes a neige",cat:"PNEU",sousCat:"Saisons",desc:"Alternative aux chaines, moins cheres."},
    {id:"pneu_029",titre:"Pneus ete par temps chaud",cat:"PNEU",sousCat:"Saisons",desc:"Chaleur = sous-gonflage, surveillance."},
    {id:"pneu_030",titre:"Aquaplanage",cat:"PNEU",sousCat:"Saisons",desc:"Perte d'adherence sur couche d'eau. Ralentir, ne pas freiner."},
    {id:"pneu_031",titre:"Pneu en cas de crevaison",cat:"PNEU",sousCat:"Saisons",desc:"Ne pas rouler a plat. Roue de secours ou assistance."},
    {id:"pneu_032",titre:"Chaines a neige homologuees",cat:"PNEU",sousCat:"Equipements",desc:"Homologation, taille correcte. Verifier la tension."},
    {id:"pneu_033",titre:"Chaussettes a neige",cat:"PNEU",sousCat:"Equipements",desc:"Faciles a installer, moins durables."},
    {id:"pneu_034",titre:"Pneus cloutes",cat:"PNEU",sousCat:"Equipements",desc:"Autorises selon saison et region."},
    {id:"pneu_035",titre:"Liquide lave-glace antigel",cat:"PNEU",sousCat:"Equipements",desc:"Protection jusqu'a -20°C ou -30°C."},
    {id:"pneu_036",titre:"Brosse a neige et raclette",cat:"PNEU",sousCat:"Equipements",desc:"Degager la neige du toit, du capot, des vitres."},
    {id:"pneu_037",titre:"Kit de depannage hiver",cat:"PNEU",sousCat:"Equipements",desc:"Cables, lampe, gants, couverture de survie."},
    {id:"pneu_038",titre:"Pression pneus par temps froid",cat:"PNEU",sousCat:"Entretien",desc:"Augmentation de la pression."},
    {id:"pneu_039",titre:"Pression pneus par temps chaud",cat:"PNEU",sousCat:"Entretien",desc:"Verification, sous-gonflage possible."},
    {id:"pneu_040",titre:"Remplacement des pneus",cat:"PNEU",sousCat:"Entretien",desc:"40 000-60 000 km en moyenne."}
];

// ---- SAISONS ET ENVIRONNEMENT (30 elements) ----
var SAISONS_ENVIRONNEMENT = [
    {id:"sai_001",titre:"Conduite sur neige",cat:"SAI",sousCat:"Hiver",desc:"Vitesse reduite, freinage anticipe, distances doublees."},
    {id:"sai_002",titre:"Conduite sur verglas",cat:"SAI",sousCat:"Hiver",desc:"Freinage ABS, pas de coup de volant brusque."},
    {id:"sai_003",titre:"Fumee blanche",cat:"SAI",sousCat:"Hiver",desc:"Condensation (normal) ou fuite de liquide de refroidissement."},
    {id:"sai_004",titre:"Gel des serrures",cat:"SAI",sousCat:"Hiver",desc:"Produit degrippant, ne pas forcer."},
    {id:"sai_005",titre:"Neige sur le toit",cat:"SAI",sousCat:"Hiver",desc:"Obligation de degager sous peine d'amende (116 €)."},
    {id:"sai_006",titre:"Brouillard givrant",cat:"SAI",sousCat:"Hiver",desc:"Baisse de visibilite, feux de brouillard."},
    {id:"sai_007",titre:"Route enneigee",cat:"SAI",sousCat:"Hiver",desc:"Adapter sa vitesse, ne pas depasser 50 km/h si visibilite < 50m."},
    {id:"sai_008",titre:"Conduite en montagne",cat:"SAI",sousCat:"Montagne",desc:"Le vehicule qui descend cede le passage a celui qui monte."},
    {id:"sai_009",titre:"Frein moteur en montagne",cat:"SAI",sousCat:"Montagne",desc:"Utiliser les rapports inferieurs pour freiner."},
    {id:"sai_010",titre:"Pneus specifiques montagne",cat:"SAI",sousCat:"Montagne",desc:"Pneus montagne, chaines obligatoires."},
    {id:"sai_011",titre:"Cols et tunnels de montagne",cat:"SAI",sousCat:"Montagne",desc:"Restrictions de poids, hauteur."},
    {id:"sai_012",titre:"Zones de montagne",cat:"SAI",sousCat:"Montagne",desc:"Panneaux de danger specifiques (A3, A5)."},
    {id:"sai_013",titre:"Conduite par canicule",cat:"SAI",sousCat:"Ete",desc:"Surveillance de la temperature moteur."},
    {id:"sai_014",titre:"Conditionnement d'air",cat:"SAI",sousCat:"Ete",desc:"Verification du gaz, nettoyage des filtres."},
    {id:"sai_015",titre:"Protection solaire",cat:"SAI",sousCat:"Ete",desc:"Pare-soleil, lunettes de soleil (obligatoires si prescrites)."},
    {id:"sai_016",titre:"Routes goudronnees fondues",cat:"SAI",sousCat:"Ete",desc:"Risque d'aquaplanage, chaussee glissante."},
    {id:"sai_017",titre:"Orages",cat:"SAI",sousCat:"Ete",desc:"Feux de croisement, ralentir."},
    {id:"sai_018",titre:"Zones a faibles emissions",cat:"SAI",sousCat:"Ecologie",desc:"Crit'Air, ZFE, vignette environnementale."},
    {id:"sai_019",titre:"Crit'Air",cat:"SAI",sousCat:"Ecologie",desc:"Vignette obligatoire dans certaines villes."},
    {id:"sai_020",titre:"Eco-conduite",cat:"SAI",sousCat:"Ecologie",desc:"Vitesse optimale, rapport adapte, frein moteur."},
    {id:"sai_021",titre:"Recyclage des pneus",cat:"SAI",sousCat:"Ecologie",desc:"Obligation de depose dans un centre agree."},
    {id:"sai_022",titre:"Filtre a particules",cat:"SAI",sousCat:"Ecologie",desc:"Regeneration, nettoyage."},
    {id:"sai_023",titre:"Huile usagee",cat:"SAI",sousCat:"Ecologie",desc:"Obligation de depot en dechetterie."},
    {id:"sai_024",titre:"Batterie usagee",cat:"SAI",sousCat:"Ecologie",desc:"Recyclage en magasin ou dechetterie."},
    {id:"sai_025",titre:"Vehicules electriques/hybrides",cat:"SAI",sousCat:"Ecologie",desc:"Bornes de recharge, autonomie."},
    {id:"sai_026",titre:"Chargement ecologique",cat:"SAI",sousCat:"Ecologie",desc:"Aerodynamisme, reduire la consommation."},
    {id:"sai_027",titre:"Conduite par grand froid",cat:"SAI",sousCat:"Extreme",desc:"Verifier batterie, huile, pneus."},
    {id:"sai_028",titre:"Gel des vitres",cat:"SAI",sousCat:"Extreme",desc:"Utiliser le degivrage, ne pas gratter avec un objet metallique."},
    {id:"sai_029",titre:"Buee sur les vitres",cat:"SAI",sousCat:"Extreme",desc:"Ventilation, desembuage, climatisation."},
    {id:"sai_030",titre:"Diesel par temps froid",cat:"SAI",sousCat:"Extreme",desc:"Risque de gelification, additif hiver."}
];

// ---- SECOURS ET URGENCE (25 elements) ----
var SECOURS_URGENCE = [
    {id:"sec_001",titre:"Position Laterale de Securite (PLS)",cat:"SEC",sousCat:"Gestes",desc:"Pour une victime inconsciente qui respire. Mettre sur le cote, jambe superieure pliee."},
    {id:"sec_002",titre:"Massage cardiaque",cat:"SEC",sousCat:"Gestes",desc:"30 compressions, 2 insufflations. Profondeur 5-6 cm, 100-120/min."},
    {id:"sec_003",titre:"Compressions thoraciques",cat:"SEC",sousCat:"Gestes",desc:"Profondeur 5-6 cm, frequence 100-120/min."},
    {id:"sec_004",titre:"Insufflations",cat:"SEC",sousCat:"Gestes",desc:"Tete en extension, pincer le nez."},
    {id:"sec_005",titre:"Defibrillateur (DAE)",cat:"SEC",sousCat:"Gestes",desc:"Utilisation, pose des electrodes."},
    {id:"sec_006",titre:"Arret d'une hemorragie",cat:"SEC",sousCat:"Gestes",desc:"Compression directe, garrot (en dernier recours)."},
    {id:"sec_007",titre:"Brulures",cat:"SEC",sousCat:"Gestes",desc:"Ne pas percer les cloques, refroidir a l'eau."},
    {id:"sec_008",titre:"Fractures",cat:"SEC",sousCat:"Gestes",desc:"Immobiliser, ne pas bouger le blesse sauf danger."},
    {id:"sec_009",titre:"Malaise",cat:"SEC",sousCat:"Gestes",desc:"Allonger, surelever les jambes si possible."},
    {id:"sec_010",titre:"Victime consciente",cat:"SEC",sousCat:"Gestes",desc:"Rassurer, ne pas donner a boire/manger."},
    {id:"sec_011",titre:"Triangle de signalisation",cat:"SEC",sousCat:"Balisage",desc:"Placer a 50 m en agglomeration, 100-150 m hors agglomeration."},
    {id:"sec_012",titre:"Gilet haute visibilite",cat:"SEC",sousCat:"Balisage",desc:"Obligatoire pour tous les occupants. Enfiler avant de sortir."},
    {id:"sec_013",titre:"Feux de detresse",cat:"SEC",sousCat:"Balisage",desc:"Allumer immediatement en cas d'arret d'urgence."},
    {id:"sec_014",titre:"Distance de balisage",cat:"SEC",sousCat:"Balisage",desc:"50 m sur autoroute, 150 m en montagne."},
    {id:"sec_015",titre:"Signalisation de nuit",cat:"SEC",sousCat:"Balisage",desc:"Feux de position, lampe de poche."},
    {id:"sec_016",titre:"Appel d'urgence",cat:"SEC",sousCat:"Balisage",desc:"112 (Europe), 101 (police), 100 (ambulance)."},
    {id:"sec_017",titre:"Trousse de premiers secours",cat:"SEC",sousCat:"Equipements",desc:"Obligatoire, verifier les dates de peremption."},
    {id:"sec_018",titre:"Extincteur",cat:"SEC",sousCat:"Equipements",desc:"Homologue, verifier la pression."},
    {id:"sec_019",titre:"Gilet haute visibilite (norme)",cat:"SEC",sousCat:"Equipements",desc:"Un par occupant, verifier la norme (EN 471)."},
    {id:"sec_020",titre:"Triangle de signalisation",cat:"SEC",sousCat:"Equipements",desc:"Homologue, verifier la date."},
    {id:"sec_021",titre:"Lampe de poche",cat:"SEC",sousCat:"Equipements",desc:"Recommande."},
    {id:"sec_022",titre:"Cables de demarrage",cat:"SEC",sousCat:"Equipements",desc:"Recommandes."},
    {id:"sec_023",titre:"Kit de reparation de pneus",cat:"SEC",sousCat:"Equipements",desc:"Alternative a la roue de secours."},
    {id:"sec_024",titre:"Couverture de survie",cat:"SEC",sousCat:"Equipements",desc:"Recommande."},
    {id:"sec_025",titre:"Gants de protection",cat:"SEC",sousCat:"Equipements",desc:"Recommandes."}
];

// ---- LEGAL ET ADMINISTRATIF (30 elements) ----
var LEGAL_ADMIN = [
    {id:"leg_001",titre:"Permis de conduire B",cat:"LEG",sousCat:"Permis",desc:"Age minimum 18 ans (ou 17 ans accompagne)."},
    {id:"leg_002",titre:"Permis de conduire A1",cat:"LEG",sousCat:"Permis",desc:"Moto legere (125 cm3, 11 kW)."},
    {id:"leg_003",titre:"Permis de conduire A2",cat:"LEG",sousCat:"Permis",desc:"Moto (35 kW)."},
    {id:"leg_004",titre:"Permis de conduire A",cat:"LEG",sousCat:"Permis",desc:"Moto (puissance illimitee)."},
    {id:"leg_005",titre:"Permis de conduire C",cat:"LEG",sousCat:"Permis",desc:"Camion (> 3,5 t)."},
    {id:"leg_006",titre:"Permis de conduire D",cat:"LEG",sousCat:"Permis",desc:"Autocar (transport de personnes)."},
    {id:"leg_007",titre:"Permis de conduire BE",cat:"LEG",sousCat:"Permis",desc:"Voiture + remorque (> 750 kg)."},
    {id:"leg_008",titre:"Permis de conduire CE",cat:"LEG",sousCat:"Permis",desc:"Camion + remorque."},
    {id:"leg_009",titre:"Permis de conduire DE",cat:"LEG",sousCat:"Permis",desc:"Autocar + remorque."},
    {id:"leg_010",titre:"Visite medicale",cat:"LEG",sousCat:"Permis",desc:"Obligatoire pour les permis C et D."},
    {id:"leg_011",titre:"Permis provisoire",cat:"LEG",sousCat:"Permis",desc:"Valable 36 mois, restrictions de nuit."},
    {id:"leg_012",titre:"Permis probatoire",cat:"LEG",sousCat:"Permis",desc:"Valable 18 mois, points, formation complementaire."},
    {id:"leg_013",titre:"Assurance responsabilite civile",cat:"LEG",sousCat:"Assurance",desc:"Obligatoire, couvre les degats causes."},
    {id:"leg_014",titre:"Assurance tous risques",cat:"LEG",sousCat:"Assurance",desc:"Facultative, couvre les degats propres."},
    {id:"leg_015",titre:"Controle technique",cat:"LEG",sousCat:"Controle",desc:"Obligatoire tous les ans."},
    {id:"leg_016",titre:"Controle technique (periodicite)",cat:"LEG",sousCat:"Controle",desc:"Voiture: 1 an, camion: 6 mois, taxi: 6 mois."},
    {id:"leg_017",titre:"Vignette controle technique",cat:"LEG",sousCat:"Controle",desc:"A apposer sur le pare-brise."},
    {id:"leg_018",titre:"Carte grise (certificat)",cat:"LEG",sousCat:"Documents",desc:"A jour, en cas de changement de proprietaire."},
    {id:"leg_019",titre:"Attestation d'assurance",cat:"LEG",sousCat:"Documents",desc:"A conserver dans le vehicule."},
    {id:"leg_020",titre:"Certificat de conformite",cat:"LEG",sousCat:"Documents",desc:"Obligatoire pour les vehicules neufs."},
    {id:"leg_021",titre:"Alcoolemie (0,5 g/L)",cat:"LEG",sousCat:"Sanctions",desc:"Amende 179 €, retrait de permis 3h."},
    {id:"leg_022",titre:"Alcoolemie (0,8 g/L)",cat:"LEG",sousCat:"Sanctions",desc:"Retrait de permis 15 jours, tribunal, amende 420-1200 €."},
    {id:"leg_023",titre:"Alcoolemie (1,2 g/L)",cat:"LEG",sousCat:"Sanctions",desc:"Retrait de permis 15 jours, tribunal, amende 1200-6000 €."},
    {id:"leg_024",titre:"Drogues",cat:"LEG",sousCat:"Sanctions",desc:"Retrait de permis, tribunal, amende."},
    {id:"leg_025",titre:"Exces de vitesse (agglomeration)",cat:"LEG",sousCat:"Sanctions",desc:"53 € + 11 €/km/h."},
    {id:"leg_026",titre:"Exces de vitesse (hors agglo)",cat:"LEG",sousCat:"Sanctions",desc:"53 € + 6 €/km/h."},
    {id:"leg_027",titre:"Exces de vitesse (autoroute)",cat:"LEG",sousCat:"Sanctions",desc:"53 € + 6 €/km/h."},
    {id:"leg_028",titre:"Retrait de permis",cat:"LEG",sousCat:"Sanctions",desc:"Immediat pour alcool, drogue, exces > 40 km/h."},
    {id:"leg_029",titre:"Points de permis",cat:"LEG",sousCat:"Sanctions",desc:"12 points, retrait progressif."},
    {id:"leg_030",titre:"Recuperation des points",cat:"LEG",sousCat:"Sanctions",desc:"Stage de sensibilisation."}
];

// ---- EQUIPEMENTS ET ACCESSOIRES (20 elements) ----
var EQUIPEMENTS = [
    {id:"eq_001",titre:"Phare a LED",cat:"EQ",sousCat:"Eclairage",desc:"Obligatoire sur les vehicules recents."},
    {id:"eq_002",titre:"Feux de jour",cat:"EQ",sousCat:"Eclairage",desc:"Obligatoires sur autoroute."},
    {id:"eq_003",titre:"Waze/GPS",cat:"EQ",sousCat:"Aides",desc:"Autorisation, ne pas manipuler en conduisant."},
    {id:"eq_004",titre:"Camera de recul",cat:"EQ",sousCat:"Aides",desc:"Recommande, assiste les manoeuvres."},
    {id:"eq_005",titre:"Radar de recul",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_006",titre:"Alarme de franchissement de ligne",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_007",titre:"Freinage d'urgence automatique",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_008",titre:"Regulateur de vitesse",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_009",titre:"Limiteur de vitesse",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_010",titre:"Avertisseur de somnolence",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_011",titre:"Systeme de surveillance de pression",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_012",titre:"Kit de reparation de pneus",cat:"EQ",sousCat:"Securite",desc:"Alternative a la roue de secours."},
    {id:"eq_013",titre:"Roue de secours (galette)",cat:"EQ",sousCat:"Securite",desc:"Pression a verifier, vitesse max 80 km/h."},
    {id:"eq_014",titre:"Leve-vitre electrique",cat:"EQ",sousCat:"Confort",desc:"Verification reguliere."},
    {id:"eq_015",titre:"Retroviseurs",cat:"EQ",sousCat:"Confort",desc:"Reglage, angle mort."},
    {id:"eq_016",titre:"Angle mort",cat:"EQ",sousCat:"Securite",desc:"Attention aux pietons, cyclistes, motos."},
    {id:"eq_017",titre:"Systeme d'alerte d'angle mort",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_018",titre:"Projecteurs adaptatifs",cat:"EQ",sousCat:"Eclairage",desc:"Suivent la direction."},
    {id:"eq_019",titre:"Nettoyage des phares",cat:"EQ",sousCat:"Eclairage",desc:"Obligatoire sur certains vehicules."},
    {id:"eq_020",titre:"Systeme antibrouillard",cat:"EQ",sousCat:"Eclairage",desc:"Verification reguliere."}
];

// ---- MARQUAGES AU SOL (20 elements) ----
var MARQUAGES_SOL = [
    {id:"mar_001",titre:"Ligne blanche continue simple",cat:"MAR",sousCat:"Lignes",desc:"Interdiction de franchir, de depasser."},
    {id:"mar_002",titre:"Ligne blanche continue double",cat:"MAR",sousCat:"Lignes",desc:"Interdiction totale de franchir."},
    {id:"mar_003",titre:"Ligne blanche discontinue simple",cat:"MAR",sousCat:"Lignes",desc:"Autorisation de depasser si visibilite."},
    {id:"mar_004",titre:"Ligne blanche discontinue double",cat:"MAR",sousCat:"Lignes",desc:"Autorisation de depasser avec prudence."},
    {id:"mar_005",titre:"Ligne blanche mixte",cat:"MAR",sousCat:"Lignes",desc:"Interdit du cote continue, autorise du cote discontinue."},
    {id:"mar_006",titre:"Ligne jaune",cat:"MAR",sousCat:"Lignes",desc:"Stationnement interdit de ce cote."},
    {id:"mar_007",titre:"Ligne jaune discontinue",cat:"MAR",sousCat:"Lignes",desc:"Stationnement interdit en alternance."},
    {id:"mar_008",titre:"Ligne bleue",cat:"MAR",sousCat:"Lignes",desc:"Stationnement payant ou disque."},
    {id:"mar_009",titre:"Ligne de rive (bande d'arret)",cat:"MAR",sousCat:"Lignes",desc:"Zigzag, bord de chaussee."},
    {id:"mar_010",titre:"Fleche de rabattement",cat:"MAR",sousCat:"Fleches",desc:"Obligation de changer de voie."},
    {id:"mar_011",titre:"Fleche de direction",cat:"MAR",sousCat:"Fleches",desc:"Indique la direction obligatoire."},
    {id:"mar_012",titre:"Passage pieton",cat:"MAR",sousCat:"Passages",desc:"Bandes blanches paralleles. Priorite aux pietons."},
    {id:"mar_013",titre:"Passage pour cyclistes",cat:"MAR",sousCat:"Passages",desc:"Deux lignes de pointilles. Priorite aux cyclistes."},
    {id:"mar_014",titre:"Sas velo",cat:"MAR",sousCat:"Passages",desc:"Espace reserve aux velos aux feux."},
    {id:"mar_015",titre:"Marquage de stationnement",cat:"MAR",sousCat:"Stationnement",desc:"Cases blanches, bleues, jaunes."},
    {id:"mar_016",titre:"Marquage de zone de rencontre",cat:"MAR",sousCat:"Zones",desc:"Pietons prioritaires."},
    {id:"mar_017",titre:"Marquage de zone pietonne",cat:"MAR",sousCat:"Zones",desc:"Pietons exclusifs."},
    {id:"mar_018",titre:"Marquage de ralentisseur",cat:"MAR",sousCat:"Zones",desc:"Trapezes, dos d'ane."},
    {id:"mar_019",titre:"Marquage de courbe",cat:"MAR",sousCat:"Zones",desc:"Indicateurs de virage."},
    {id:"mar_020",titre:"Marquage de tunnel",cat:"MAR",sousCat:"Zones",desc:"Lignes de guidage."}
];

// ---- CONDITIONS EXTREMES (45 elements) ----
var CONDITIONS_EXTREMES = [
    {id:"cnd_001",titre:"Conduite sur neige",cat:"CND",sousCat:"Hiver",desc:"Vitesse reduite, freinage anticipe, distances doublees."},
    {id:"cnd_002",titre:"Conduite sur verglas",cat:"CND",sousCat:"Hiver",desc:"Freinage ABS, pas de coup de volant brusque."},
    {id:"cnd_003",titre:"Conduite par grand froid",cat:"CND",sousCat:"Hiver",desc:"Verifier batterie, huile, pneus."},
    {id:"cnd_004",titre:"Gel des vitres",cat:"CND",sousCat:"Hiver",desc:"Utiliser le degivrage, ne pas gratter avec un objet metallique."},
    {id:"cnd_005",titre:"Brouillard givrant",cat:"CND",sousCat:"Hiver",desc:"Baisse de visibilite, feux de brouillard."},
    {id:"cnd_006",titre:"Route enneigee",cat:"CND",sousCat:"Hiver",desc:"Adapter sa vitesse, ne pas depasser 50 km/h si visibilite < 50m."},
    {id:"cnd_007",titre:"Neige sur le toit",cat:"CND",sousCat:"Hiver",desc:"Obligation de degager sous peine d'amende (116 €)."},
    {id:"cnd_008",titre:"Diesel par temps froid",cat:"CND",sousCat:"Hiver",desc:"Risque de gelification, additif hiver."},
    {id:"cnd_009",titre:"Conduite par canicule",cat:"CND",sousCat:"Ete",desc:"Surveillance de la temperature moteur."},
    {id:"cnd_010",titre:"Conditionnement d'air",cat:"CND",sousCat:"Ete",desc:"Verification du gaz, nettoyage des filtres."},
    {id:"cnd_011",titre:"Protection solaire",cat:"CND",sousCat:"Ete",desc:"Pare-soleil, lunettes de soleil."},
    {id:"cnd_012",titre:"Routes goudronnees fondues",cat:"CND",sousCat:"Ete",desc:"Risque d'aquaplanage, chaussee glissante."},
    {id:"cnd_013",titre:"Orages",cat:"CND",sousCat:"Ete",desc:"Feux de croisement, ralentir."},
    {id:"cnd_014",titre:"Essence par temps chaud",cat:"CND",sousCat:"Ete",desc:"Vaporisation, risque de calage."},
    {id:"cnd_015",titre:"Conduite sous la pluie",cat:"CND",sousCat:"Pluie",desc:"Reduire la vitesse, distance x2, feux de croisement."},
    {id:"cnd_016",titre:"Aquaplanage",cat:"CND",sousCat:"Pluie",desc:"Perte d'adherence sur couche d'eau. Ralentir, ne pas freiner."},
    {id:"cnd_017",titre:"Conduite dans le brouillard",cat:"CND",sousCat:"Brouillard",desc:"Feux de brouillard + croisement (pas route). Reduire vitesse."},
    {id:"cnd_018",titre:"Conduite par vent fort",cat:"CND",sousCat:"Vent",desc:"Reduire la vitesse, tenir le volant fermement."},
    {id:"cnd_019",titre:"Conduite de nuit",cat:"CND",sousCat:"Nuit",desc:"Feux de croisement. Eblouissement = regarder bord droit."},
    {id:"cnd_020",titre:"Conduite dans les tunnels",cat:"CND",sousCat:"Tunnels",desc:"Feux de croisement. Distance 50m. Interdiction de s'arreter."},
    {id:"cnd_021",titre:"Conduite en montagne",cat:"CND",sousCat:"Montagne",desc:"Le vehicule qui descend cede le passage a celui qui monte."},
    {id:"cnd_022",titre:"Frein moteur en montagne",cat:"CND",sousCat:"Montagne",desc:"Utiliser les rapports inferieurs pour freiner."},
    {id:"cnd_023",titre:"Cols de montagne",cat:"CND",sousCat:"Montagne",desc:"Regles de croisement, frein moteur."},
    {id:"cnd_024",titre:"Cote raide",cat:"CND",sousCat:"Montagne",desc:"Utiliser le frein moteur, ne pas rouler en roue libre."},
    {id:"cnd_025",titre:"Descente raide",cat:"CND",sousCat:"Montagne",desc:"Freiner en douceur, eviter le freinage continu."},
    {id:"cnd_026",titre:"Passage en montagne",cat:"CND",sousCat:"Montagne",desc:"Attention aux virages, aux animaux."},
    {id:"cnd_027",titre:"Tunnels de montagne",cat:"CND",sousCat:"Montagne",desc:"Feux de croisement obligatoires, distance de securite."},
    {id:"cnd_028",titre:"Route de montagne en hiver",cat:"CND",sousCat:"Montagne",desc:"Pneus neige, chaines, vitesse reduite."},
    {id:"cnd_029",titre:"Avalanche",cat:"CND",sousCat:"Montagne",desc:"Panneaux specifiques, routes fermees."},
    {id:"cnd_030",titre:"Eboulement",cat:"CND",sousCat:"Montagne",desc:"Panneaux de danger, ralentir."},
    {id:"cnd_031",titre:"Brouillard en montagne",cat:"CND",sousCat:"Montagne",desc:"Vitesse adaptee, feux de brouillard."},
    {id:"cnd_032",titre:"Neige en montagne",cat:"CND",sousCat:"Montagne",desc:"Pneus neige ou chaines, vitesse ≤ 50 km/h."},
    {id:"cnd_033",titre:"Verglas en montagne",cat:"CND",sousCat:"Montagne",desc:"ABS, pas de coup de volant brusque."},
    {id:"cnd_034",titre:"Batterie par temps froid",cat:"CND",sousCat:"Extreme",desc:"Capacite reduite, risque de panne."},
    {id:"cnd_035",titre:"Liquide de refroidissement hiver",cat:"CND",sousCat:"Extreme",desc:"Antigel, protection hiver."},
    {id:"cnd_036",titre:"Liquide de lave-glace hiver",cat:"CND",sousCat:"Extreme",desc:"Antigel, protection jusqu'a -30°C."},
    {id:"cnd_037",titre:"Huile moteur par temps froid",cat:"CND",sousCat:"Extreme",desc:"Viscosite adaptee (0W30, 5W30)."},
    {id:"cnd_038",titre:"Huile moteur par temps chaud",cat:"CND",sousCat:"Extreme",desc:"Viscosite adaptee (10W40, 15W50)."},
    {id:"cnd_039",titre:"Pression pneus par temps froid",cat:"CND",sousCat:"Extreme",desc:"Augmentation de la pression."},
    {id:"cnd_040",titre:"Pression pneus par temps chaud",cat:"CND",sousCat:"Extreme",desc:"Verification, sous-gonflage possible."},
    {id:"cnd_041",titre:"Buee sur les vitres",cat:"CND",sousCat:"Extreme",desc:"Ventilation, desembuage, climatisation."},
    {id:"cnd_042",titre:"Canicule - enfants",cat:"CND",sousCat:"Ete",desc:"Ne pas laisser d'enfants dans la voiture."},
    {id:"cnd_043",titre:"Route de col fermee",cat:"CND",sousCat:"Montagne",desc:"Panneaux specifiques, deviations."},
    {id:"cnd_044",titre:"Pont de montagne",cat:"CND",sousCat:"Montagne",desc:"Vitesse reduite, poids limite."},
    {id:"cnd_045",titre:"Corniche",cat:"CND",sousCat:"Montagne",desc:"Ralentir, respecter les limites de vitesse."}
];

// ---- VEHICULES SPECIFIQUES (25 elements) ----
var VEHICULES_SPECIFIQUES = [
    {id:"veh_001",titre:"Moto (categorie A1)",cat:"VEH",sousCat:"Moto",desc:"125 cm3, 11 kW, 18 ans."},
    {id:"veh_002",titre:"Moto (categorie A2)",cat:"VEH",sousCat:"Moto",desc:"35 kW, 20 ans (ou 18 ans apres 2 ans A1)."},
    {id:"veh_003",titre:"Moto (categorie A)",cat:"VEH",sousCat:"Moto",desc:"Puissance illimitee, 24 ans (ou 20 ans apres 2 ans A2)."},
    {id:"veh_004",titre:"Casque moto",cat:"VEH",sousCat:"Moto",desc:"Obligatoire, homologue (ECE 22-05)."},
    {id:"veh_005",titre:"Equipement moto",cat:"VEH",sousCat:"Moto",desc:"Gants, blouson, chaussures recommandes."},
    {id:"veh_006",titre:"Cyclomoteur (classe A)",cat:"VEH",sousCat:"Cyclo",desc:"45 km/h, casque obligatoire, 16 ans."},
    {id:"veh_007",titre:"Cyclomoteur (classe B)",cat:"VEH",sousCat:"Cyclo",desc:"25 km/h, 14 ans."},
    {id:"veh_008",titre:"Cyclomoteur (classe C)",cat:"VEH",sousCat:"Cyclo",desc:"45 km/h, 18 ans (permis B)."},
    {id:"veh_009",titre:"Assurance moto/cyclo",cat:"VEH",sousCat:"Moto",desc:"Obligatoire, specifique."},
    {id:"veh_010",titre:"Camion (permis C)",cat:"VEH",sousCat:"Poids lourds",desc:"> 3,5 t, 21 ans, visite medicale."},
    {id:"veh_011",titre:"Camion (permis C1)",cat:"VEH",sousCat:"Poids lourds",desc:"3,5 t - 7,5 t, 18 ans."},
    {id:"veh_012",titre:"Autocar (permis D)",cat:"VEH",sousCat:"Poids lourds",desc:"Transport de personnes, 21 ans, visite medicale."},
    {id:"veh_013",titre:"Tachygraphe",cat:"VEH",sousCat:"Poids lourds",desc:"Obligatoire, enregistrement des temps."},
    {id:"veh_014",titre:"Temps de conduite",cat:"VEH",sousCat:"Poids lourds",desc:"4h30 max, pause 45 min."},
    {id:"veh_015",titre:"Repos obligatoire",cat:"VEH",sousCat:"Poids lourds",desc:"11h ou 9h, 45h hebdomadaire."},
    {id:"veh_016",titre:"Chargement des poids lourds",cat:"VEH",sousCat:"Poids lourds",desc:"PTAC, repartition, securite."},
    {id:"veh_017",titre:"ADR",cat:"VEH",sousCat:"Poids lourds",desc:"Transport de marchandises dangereuses."},
    {id:"veh_018",titre:"Voiture avec remorque",cat:"VEH",sousCat:"Remorque",desc:"PTAC ≤ 3,5 t (permis B), limitations."},
    {id:"veh_019",titre:"Voiture avec caravane",cat:"VEH",sousCat:"Remorque",desc:"PTAC ≤ 3,5 t, largeur ≤ 2,55 m."},
    {id:"veh_020",titre:"Attelage",cat:"VEH",sousCat:"Remorque",desc:"Verification de l'attelage, feux, plaque."},
    {id:"veh_021",titre:"Remorque > 750 kg",cat:"VEH",sousCat:"Remorque",desc:"Permis BE necessaire si PTAC total > 3,5 t."},
    {id:"veh_022",titre:"Remorque > 3,5 t",cat:"VEH",sousCat:"Remorque",desc:"Permis C1E ou CE necessaire."},
    {id:"veh_023",titre:"Chargement de la remorque",cat:"VEH",sousCat:"Remorque",desc:"Repartition du poids, freinage."},
    {id:"veh_024",titre:"Vehicules prioritaires",cat:"VEH",sousCat:"Prioritaires",desc:"Pompiers, police, ambulance (gyrophares + sirene)."},
    {id:"veh_025",titre:"Vehicules d'intervention",cat:"VEH",sousCat:"Prioritaires",desc:"Hivernage, deneigement, salage."}
];

// ---- PSYCHOLOGIE ET STATISTIQUES (20 elements) ----
var PSYCHOLOGIE_STATS = [
    {id:"psy_001",titre:"Stress et conduite",cat:"PSY",sousCat:"Psychologie",desc:"Le stress altere les capacites de conduite."},
    {id:"psy_002",titre:"Fatigue",cat:"PSY",sousCat:"Psychologie",desc:"15 minutes de pause toutes les 2h."},
    {id:"psy_003",titre:"Somnolence",cat:"PSY",sousCat:"Psychologie",desc:"Risque d'endormissement, pause immediate."},
    {id:"psy_004",titre:"Emotions",cat:"PSY",sousCat:"Psychologie",desc:"La colere, la tristesse alterent la conduite."},
    {id:"psy_005",titre:"Inattention",cat:"PSY",sousCat:"Psychologie",desc:"2 secondes d'inattention à 50 km/h = 28 m parcourus."},
    {id:"psy_006",titre:"Distraction",cat:"PSY",sousCat:"Psychologie",desc:"GSM, passagers, GPS = danger."},
    {id:"psy_007",titre:"Medicaments",cat:"PSY",sousCat:"Psychologie",desc:"Certains medicaments alterent la conduite."},
    {id:"psy_008",titre:"Alcool et conduite",cat:"PSY",sousCat:"Psychologie",desc:"0,5 g/L = 1 verre, 0,8 g/L = 2 verres."},
    {id:"psy_009",titre:"Drogues et conduite",cat:"PSY",sousCat:"Psychologie",desc:"Interdiction totale, retrait de permis."},
    {id:"psy_010",titre:"Conduite agressive",cat:"PSY",sousCat:"Psychologie",desc:"Exces de vitesse, refus de priorite, danger."},
    {id:"psy_011",titre:"Nombre de permis belges",cat:"PSY",sousCat:"Statistiques",desc:"Environ 400 000 permis delivres par an en Belgique."},
    {id:"psy_012",titre:"Taux reussite theorique",cat:"PSY",sousCat:"Statistiques",desc:"Environ 60-65% de reussite a l'examen theorique."},
    {id:"psy_013",titre:"Taux reussite pratique",cat:"PSY",sousCat:"Statistiques",desc:"Environ 50-55% de reussite a l'examen pratique."},
    {id:"psy_014",titre:"Nombre de vehicules",cat:"PSY",sousCat:"Statistiques",desc:"Environ 6 millions de voitures en Belgique."},
    {id:"psy_015",titre:"Densite routiere",cat:"PSY",sousCat:"Statistiques",desc:"1,5 km de route par km² en Belgique."},
    {id:"psy_016",titre:"Nombre de radars",cat:"PSY",sousCat:"Statistiques",desc:"Environ 600 radars fixes en Belgique."},
    {id:"psy_017",titre:"Controles techniques",cat:"PSY",sousCat:"Statistiques",desc:"Environ 3 millions de controles par an."},
    {id:"psy_018",titre:"Infractions par an",cat:"PSY",sousCat:"Statistiques",desc:"Environ 1,5 million d'infractions par an."},
    {id:"psy_019",titre:"Accidents par an",cat:"PSY",sousCat:"Statistiques",desc:"Environ 35 000 accidents corporels par an."},
    {id:"psy_020",titre:"Morts sur les routes",cat:"PSY",sousCat:"Statistiques",desc:"Environ 500 morts par an en Belgique."}
];

// ---- INFRACTIONS (27) ----
var INFRACTIONS = [
    {titre:"Oubli du clignotant",degre:"1er Degre",amende:"58 €",desc:"Omettre d'indiquer un changement de direction."},
    {titre:"Stationnement genant",degre:"1er Degre",amende:"58 €",desc:"Stationner sur une zone non autorisee."},
    {titre:"Bande de bus",degre:"1er Degre",amende:"58 €",desc:"Emprunter une bande reservee aux bus."},
    {titre:"Defaut de documents",degre:"1er Degre",amende:"58 €",desc:"Ne pas presenter permis, carte grise, assurance."},
    {titre:"Feux de brouillard abusifs",degre:"1er Degre",amende:"58 €",desc:"Allumer les feux antibrouillard par temps clair."},
    {titre:"Ceinture de securite",degre:"2eme Degre",amende:"116 €",desc:"Non-port obligatoire pour tous les occupants."},
    {titre:"Feu orange",degre:"2eme Degre",amende:"116 €",desc:"S'engager au feu orange alors qu'on peut s'arreter."},
    {titre:"Stationnement sur passage pieton",degre:"2eme Degre",amende:"116 €",desc:"Se garer sur un passage cloute."},
    {titre:"Conduite sans feux la nuit",degre:"2eme Degre",amende:"116 €",desc:"Oublier d'allumer les feux de croisement."},
    {titre:"Depassement par la droite",degre:"2eme Degre",amende:"116 €",desc:"Depasser par la droite sauf cas particulier."},
    {titre:"Distance de securite",degre:"2eme Degre",amende:"116 €",desc:"Ne pas laisser une distance suffisante."},
    {titre:"Priorite pieton",degre:"2eme Degre",amende:"116 €",desc:"Ne pas ceder le passage a un pieton engage."},
    {titre:"GSM au volant",degre:"3eme Degre",amende:"174 €",desc:"Tenir un telephone en main. Retrait 15 jours."},
    {titre:"Feu rouge",degre:"3eme Degre",amende:"174 €",desc:"S'engager alors que le feu est rouge."},
    {titre:"STOP",degre:"3eme Degre",amende:"174 €",desc:"Oublier de marquer un arret complet."},
    {titre:"Ligne blanche continue",degre:"3eme Degre",amende:"174 €",desc:"Franchir ou rouler sur une ligne continue."},
    {titre:"Sens interdit",degre:"3eme Degre",amende:"174 €",desc:"S'engager dans une rue en sens interdit."},
    {titre:"Passage a niveau ferme",degre:"3eme Degre",amende:"174 €",desc:"Passer outre des barrieres en mouvement."},
    {titre:"Demi-tour sur autoroute",degre:"4eme Degre",amende:"Tribunal",desc:"Marche arriere ou contresens sur autoroute."},
    {titre:"Refus d'obeir",degre:"4eme Degre",amende:"Tribunal",desc:"Ignorer les ordres d'un agent."},
    {titre:"Courses de vitesse",degre:"4eme Degre",amende:"Tribunal",desc:"Concours de vitesse sur la voie publique."},
    {titre:"Delit de fuite",degre:"Delit penal",amende:"Tribunal",desc:"Quitter les lieux d'un accident."},
    {titre:"Exces vitesse agglomeration",degre:"Vitesse",amende:"53 € + 11 €/km/h",desc:"Tarif de base 53 € + 11 €/km/h."},
    {titre:"Exces vitesse hors agglo",degre:"Vitesse",amende:"53 € + 6 €/km/h",desc:"Tarif de base 53 € + 6 €/km/h."},
    {titre:"Alcool 0,2 g/L (novice)",degre:"Alcool Novice",amende:"Retrait immediat",desc:"Tolerance quasi-nulle pour jeunes conducteurs."},
    {titre:"Alcool 0,5 a 0,8 g/L",degre:"Alcool",amende:"179 € + Retrait 3h",desc:"Retrait immediat du permis pour 3 heures."},
    {titre:"Alcool > 0,8 g/L",degre:"Alcool / Tribunal",amende:"420 € a 1200 €",desc:"Retrait 15 jours et tribunal."}
];

// ---- REGLES D'OR (12) ----
var RULES = [
    {titre:"La Priorite a Droite",desc:"A toute intersection, ceder le passage a tout conducteur venant de droite."},
    {titre:"Ronds-Points et Giratoires",desc:"Sauf panneaux B1/B5, priorite a droite DANS le rond-point."},
    {titre:"Priorite des Trams",desc:"Le tram a TOUJOURS la priorite, meme venant de gauche."},
    {titre:"Vitesses Maximales",desc:"Agglo: 50 km/h (30 Bruxelles). Hors agglo: 90/70 km/h. Autoroute: 120 km/h."},
    {titre:"Arret vs Stationnement",desc:"Arret = court, conducteur a bord. Stationnement = plus long."},
    {titre:"Couloir de secours",desc:"Se serrer sur autoroute pour laisser passer les secours."},
    {titre:"Agents qualifies",desc:"Les agents ont priorite sur toute signalisation."},
    {titre:"Feu orange",desc:"Arret obligatoire sauf impossibilite de s'arreter en securite."},
    {titre:"Feu vert et pietons",desc:"Ceder le passage aux pietons meme si le feu est vert."},
    {titre:"Bande d'arret d'urgence",desc:"Interdiction de s'y arreter sauf force majeure."},
    {titre:"Depassement des cyclistes",desc:"Marge laterale 1,0 m en agglo, 1,5 m hors agglo."},
    {titre:"Tunnels",desc:"Feux de croisement obligatoires. Distance 50m. Interdiction de s'arreter."}
];

// ---- PIEGES (10) ----
var PIEGES_ROUTES = [
    {id:"piege_1",titre:"Priorite a droite absolue",cat:"Pieges",desc:"Sans signalisation, priorite a droite s'applique toujours."},
    {id:"piege_2",titre:"Stationnement 5 metres",cat:"Pieges",desc:"Interdit de stationner a moins de 5m avant un passage pieton."},
    {id:"piege_3",titre:"Sortie chemin de terre",cat:"Pieges",desc:"Quiconque sort d'un chemin de terre doit toujours ceder le passage."},
    {id:"piege_4",titre:"Depassement cyclistes",cat:"Pieges",desc:"Marge laterale 1,0m en agglo, 1,5m hors agglo."},
    {id:"piege_5",titre:"Rond-point classique",cat:"Pieges",desc:"Un rond-point n'est prioritaire que s'il y a les panneaux B1 et D10."},
    {id:"piege_6",titre:"Feu orange fixe",cat:"Pieges",desc:"Le feu orange oblige a l'arret, sauf impossibilite de s'arreter."},
    {id:"piege_7",titre:"Feu vert et pietons",cat:"Pieges",desc:"Ceder le passage aux pietons meme si le feu est vert."},
    {id:"piege_8",titre:"Bande d'arret d'urgence",cat:"Pieges",desc:"Interdit de s'y arreter sauf force majeure."},
    {id:"piege_9",titre:"Sens de stationnement",cat:"Pieges",desc:"Se garer dans le sens de la marche du cote droit."},
    {id:"piege_10",titre:"Depassement par la droite autoroute",cat:"Pieges",desc:"Interdit sauf files ininterrompues."}
];

// ---- USAGERS ET MANOEUVRES (10) ----
var USAGERS_MANOEUVRES = [
    {id:"usager_1",titre:"Rues cyclables",cat:"Usagers",desc:"Interdit de depasser les cyclistes. Vitesse max 30 km/h."},
    {id:"usager_2",titre:"Sas a velos",cat:"Usagers",desc:"Espace reserve aux velos aux feux tricolores."},
    {id:"usager_3",titre:"Manoeuvre",cat:"Manoeuvres",desc:"Celui qui effectue une manoeuvre doit ceder le passage a tous."},
    {id:"usager_4",titre:"Croisement pentes",cat:"Manoeuvres",desc:"Le vehicule qui descend s'arrete pour laisser passer celui qui monte."},
    {id:"usager_5",titre:"Permis provisoire nuit",cat:"Manoeuvres",desc:"Interdit de circuler vendredi, samedi, dimanche 22h-6h."},
    {id:"usager_6",titre:"Chargement",cat:"Manoeuvres",desc:"Chargement ne peut masquer les plaques. Signalisation si depassement 1m."},
    {id:"usager_7",titre:"Cavaliers",cat:"Usagers",desc:"Ralentir, ne pas klaxonner pour ne pas effrayer le cheval."},
    {id:"usager_8",titre:"PMR",cat:"Usagers",desc:"Personnes a mobilite reduite. Priorite, temps de traverse plus long."},
    {id:"usager_9",titre:"Enfants",cat:"Usagers",desc:"Imprevisibles. Ralentir a proximite des ecoles."},
    {id:"usager_10",titre:"Marche arriere",cat:"Manoeuvres",desc:"Interdite sauf pour manoeuvre. Ceder le passage a tous."}
];

// ---- FUSION DE TOUTES LES DONNEES POUR LE QUIZ ----
var ALL_KNOWLEDGE = [].concat(
    PANNEAUX,
    MECANIQUE_MOTEUR,
    PNEUMATIQUES,
    SAISONS_ENVIRONNEMENT,
    SECOURS_URGENCE,
    LEGAL_ADMIN,
    EQUIPEMENTS,
    MARQUAGES_SOL,
    CONDITIONS_EXTREMES,
    VEHICULES_SPECIFIQUES,
    PSYCHOLOGIE_STATS,
    INFRACTIONS,
    RULES,
    PIEGES_ROUTES,
    USAGERS_MANOEUVRES
);

// ---- CATEGORIES COMPLETES ----
var CATEGORIES = {
    A:{label:"Danger",color:"var(--red)"},
    B:{label:"Priorite",color:"var(--amber)"},
    C:{label:"Interdiction",color:"var(--red)"},
    D:{label:"Obligation",color:"var(--blue)"},
    E:{label:"Stationnement",color:"var(--blue)"},
    F:{label:"Indication",color:"var(--teal)"},
    X:{label:"Panonceaux",color:"var(--purple)"},
    T:{label:"Travaux",color:"var(--orange)"},
    S:{label:"Service",color:"var(--green)"},
    MECA:{label:"Mecanique",color:"var(--dark)"},
    PNEU:{label:"Pneumatiques",color:"var(--dark)"},
    SAI:{label:"Saisons",color:"var(--dark)"},
    SEC:{label:"Secours",color:"var(--dark)"},
    LEG:{label:"Legal",color:"var(--dark)"},
    EQ:{label:"Equipements",color:"var(--dark)"},
    MAR:{label:"Marquages",color:"var(--dark)"},
    CND:{label:"Conditions extremes",color:"var(--dark)"},
    VEH:{label:"Vehicules",color:"var(--dark)"},
    PSY:{label:"Psychologie",color:"var(--dark)"}
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
    categories:["A","B","C","D","E","F","MECA","PNEU","SAI","SEC","LEG","EQ","MAR","CND","VEH","PSY"],
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
    var ids = ["home","quiz","repo","rules","mecanique","pneumatiques","saisons","secours","legal","equipements","marquages","conditions","vehicules","psychologie","infractions","piegesRoutes","usagersManoeuvres"];
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

// ---- FONCTIONS D'AFFICHAGE DES VUES ----
function showQuiz(){ clearInterval(state.timerId); hideViews(); state.isOfficialExam=false; if($("quiz")) $("quiz").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; configureQuiz(); }
function showRepo(){ hideViews(); if($("repo")) $("repo").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; renderRepository(); }
function showRules(){ hideViews(); if($("rules")) $("rules").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; renderRules(); }
function showMecanique(){ hideViews(); if($("mecanique")) $("mecanique").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; renderMecanique(); }
function showPneumatiques(){ hideViews(); if($("pneumatiques")) $("pneumatiques").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; renderPneumatiques(); }
function showSaisons(){ hideViews(); if($("saisons")) $("saisons").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; renderSaisons(); }
function showSecours(){ hideViews(); if($("secours")) $("secours").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; renderSecours(); }
function showLegal(){ hideViews(); if($("legal")) $("legal").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; renderLegal(); }
function showEquipements(){ hideViews(); if($("equipements")) $("equipements").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; renderEquipements(); }
function showMarquages(){ hideViews(); if($("marquages")) $("marquages").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; renderMarquages(); }
function showConditions(){ hideViews(); if($("conditions")) $("conditions").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; renderConditions(); }
function showVehicules(){ hideViews(); if($("vehicules")) $("vehicules").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; renderVehicules(); }
function showPsychologie(){ hideViews(); if($("psychologie")) $("psychologie").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; renderPsychologie(); }
function showInfractions(){ hideViews(); if($("infractions")) $("infractions").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; renderInfractions(); }
function showPiegesRoutes(){ hideViews(); if($("piegesRoutes")) $("piegesRoutes").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; renderPiegesRoutes(); }
function showUsagersManoeuvres(){ hideViews(); if($("usagersManoeuvres")) $("usagersManoeuvres").classList.remove("hidden"); if($("homeButton")) $("homeButton").style.display="block"; renderUsagersManoeuvres(); }

// ---- FONCTIONS DE RENDU (GENERIQUES) ----
function renderGeneric(list, searchId, listId, titleKey, descKey, catKey) {
    var query = $(searchId) ? $(searchId).value.trim().toLowerCase() : "";
    var results = list.filter(function(item){
        if(!query) return true;
        var searchStr = (item.titre || item.nom || "") + " " + (item.desc || "") + " " + (item.sousCat || "") + " " + (CATEGORIES[item.cat]?.label || "");
        return searchStr.toLowerCase().indexOf(query) >= 0;
    });
    var listEl = $(listId);
    if(!listEl) return;
    listEl.innerHTML = "";
    listEl.classList.remove("fade-list");
    void listEl.offsetWidth;
    listEl.classList.add("fade-list");

    if(results.length){
        var html = "";
        for(var i=0;i<results.length;i++){
            var item = results[i];
            var title = item.titre || item.nom || "";
            var desc = item.desc || "";
            var badge = item.sousCat || CATEGORIES[item.cat]?.label || "";
            var color = CATEGORIES[item.cat]?.color || "var(--blue)";
            html += '<div class="rule-card"><div class="info-header"><span class="badge" style="background:'+color+'">'+escapeHTML(badge)+'</span></div><b>'+escapeHTML(title)+'</b><p>'+desc+'</p></div>';
        }
        listEl.innerHTML = html;
    }else{
        listEl.innerHTML = '<div class="empty">Aucun element ne correspond.</div>';
    }
}

// ---- FONCTIONS DE RENDU SPECIFIQUES ----
function renderRepository(){ renderGeneric(PANNEAUX, "repoSearch", "repoList", "nom", "desc", "cat"); }
function renderRules(){ renderGeneric(RULES, "ruleSearch", "ruleList", "titre", "desc", "cat"); }
function renderMecanique(){ renderGeneric(MECANIQUE_MOTEUR, "mecaSearch", "mecaList", "titre", "desc", "cat"); }
function renderPneumatiques(){ renderGeneric(PNEUMATIQUES, "pneuSearch", "pneuList", "titre", "desc", "cat"); }
function renderSaisons(){ renderGeneric(SAISONS_ENVIRONNEMENT, "saisonSearch", "saisonList", "titre", "desc", "cat"); }
function renderSecours(){ renderGeneric(SECOURS_URGENCE, "secoursSearch", "secoursList", "titre", "desc", "cat"); }
function renderLegal(){ renderGeneric(LEGAL_ADMIN, "legalSearch", "legalList", "titre", "desc", "cat"); }
function renderEquipements(){ renderGeneric(EQUIPEMENTS, "equipSearch", "equipList", "titre", "desc", "cat"); }
function renderMarquages(){ renderGeneric(MARQUAGES_SOL, "marquageSearch", "marquageList", "titre", "desc", "cat"); }
function renderConditions(){ renderGeneric(CONDITIONS_EXTREMES, "conditionSearch", "conditionList", "titre", "desc", "cat"); }
function renderVehicules(){ renderGeneric(VEHICULES_SPECIFIQUES, "vehiculeSearch", "vehiculeList", "titre", "desc", "cat"); }
function renderPsychologie(){ renderGeneric(PSYCHOLOGIE_STATS, "psychoSearch", "psychoList", "titre", "desc", "cat"); }
function renderInfractions(){ renderGeneric(INFRACTIONS, "infractionSearch", "infractionList", "titre", "desc", "degre"); }
function renderPiegesRoutes(){ renderGeneric(PIEGES_ROUTES, "piegeSearch", "piegeList", "titre", "desc", "cat"); }
function renderUsagersManoeuvres(){ renderGeneric(USAGERS_MANOEUVRES, "usagerSearch", "usagerList", "titre", "desc", "cat"); }

// ---- QUIZ FUNCTIONS ----
function renderCategorySelector(){
    var grid=$("categoryGrid");
    if(!grid) return;
    grid.innerHTML="";
    var keys = Object.keys(CATEGORIES);
    for(var i=0;i<keys.length;i++){
        var key=keys[i];
        var category=CATEGORIES[key];
        var count=ALL_KNOWLEDGE.filter(function(p){ return p.cat===key; }).length;
        var button=document.createElement("button");
        button.type="button";
        button.className="cat-chip"+(state.categories.indexOf(key)>=0?"":" off");
        button.innerHTML='<span class="dot" style="background:'+category.color+'"></span><span><b>'+category.label+'</b><small>'+count+' elements</small></span>';
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
    var available=ALL_KNOWLEDGE.filter(function(p){ return state.categories.indexOf(p.cat)>=0; }).length;
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
    var pool=ALL_KNOWLEDGE.filter(function(p){ return state.categories.indexOf(p.cat)>=0; });
    if(pool.length<2) return;
    var timerCheckbox = document.getElementById("timerEnabled");
    state.timer = timerCheckbox ? timerCheckbox.checked : false;
    state.questions=shuffle(pool).slice(0,state.questionCount);
    beginSession(false);
}

function startOfficialExam(){
    clearInterval(state.timerId);
    hideViews();
    state.isOfficialExam = true;
    state.timer = true;
    var allPool = ALL_KNOWLEDGE.slice();
    while(allPool.length < 50) {
        allPool = allPool.concat(ALL_KNOWLEDGE);
    }
    state.questions = shuffle(allPool).slice(0, 50);
    if($("quiz")) $("quiz").classList.remove("hidden");
    if($("homeButton")) $("homeButton").style.display="block";
    if($("quizConfig")) $("quizConfig").classList.add("hidden");
    if($("quizSummary")) $("quizSummary").classList.add("hidden");
    if($("quizRunning")) $("quizRunning").classList.remove("hidden");
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
        var found = ALL_KNOWLEDGE.find(function(p){ return (p.code||p.id||p.titre)===code; });
        if(found) reviewMap[found.code||found.id||found.titre]=found;
    });
    var mistakesKeys = Object.keys(mistakes());
    mistakesKeys.forEach(function(code){
        var found = ALL_KNOWLEDGE.find(function(p){ return (p.code||p.id||p.titre)===code; });
        if(found) reviewMap[found.code||found.id||found.titre]=found;
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

function makeSignSVG(panel, small){
    small = small || false;
    var ink = "#171a1f";
    var content = "";
    if(panel.cat === "A" || panel.cat === "T"){
        var color = panel.cat === "T" ? "#ff8c00" : "#c81e2c";
        content = '<polygon points="90,12 168,154 12,154" fill="#fff" stroke="'+color+'" stroke-width="12" stroke-linejoin="round"/>';
        content += '<rect x="85" y="70" width="10" height="40" rx="3" fill="'+ink+'"/><circle cx="90" cy="122" r="5" fill="'+ink+'"/>';
    } else if(panel.cat === "B"){
        if(panel.code === "B1"){ content = '<polygon points="12,30 168,30 90,160" fill="#fff" stroke="#c81e2c" stroke-width="12" stroke-linejoin="round"/>'; }
        else if(panel.code === "B5"){ content = '<polygon points="60,10 120,10 170,60 170,120 120,170 60,170 10,120 10,60" fill="#c81e2c" stroke="#7a0f18" stroke-width="3" stroke-linejoin="round"/><text x="90" y="102" text-anchor="middle" font-size="'+(small?16:30)+'" font-weight="900" fill="#fff" font-family="Arial">STOP</text>'; }
        else { content = '<polygon points="90,12 168,90 90,168 12,90" fill="#e8a400" stroke="'+ink+'" stroke-width="2.5"/>'; }
    } else if(panel.cat === "C"){
        if(panel.code === "C1"){ content = '<circle cx="90" cy="90" r="76" fill="#fff" stroke="#c81e2c" stroke-width="14"/>'; }
        else if(panel.code === "C3"){ content = '<circle cx="90" cy="90" r="76" fill="#c81e2c"/><rect x="30" y="76" width="120" height="28" rx="4" fill="#fff"/>'; }
        else if(panel.num){ content = '<circle cx="90" cy="90" r="76" fill="#fff" stroke="#c81e2c" stroke-width="14"/><text x="90" y="108" text-anchor="middle" font-size="'+(small?22:52)+'" font-weight="900" fill="'+ink+'" font-family="Arial">'+escapeHTML(panel.num)+'</text>'; }
        else { content = '<circle cx="90" cy="90" r="76" fill="#fff" stroke="#9aa1aa" stroke-width="3"/><line x1="35" y1="125" x2="125" y2="35" stroke="#4a4d52" stroke-width="8"/>'; }
    } else if(panel.cat === "D"){
        content = '<circle cx="90" cy="90" r="76" fill="#1c5fa8"/><path d="M90 130 V50 M65 75 L90 50 L115 75" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>';
    } else if(panel.cat === "E"){
        if(panel.code === "E1" || panel.code === "E3"){ content = '<circle cx="90" cy="90" r="76" fill="#1c5fa8" stroke="#c81e2c" stroke-width="12"/><line x1="35" y1="145" x2="145" y2="35" stroke="#c81e2c" stroke-width="12"/>'; }
        else { content = '<rect x="12" y="12" width="156" height="156" rx="14" fill="#1c5fa8"/><text x="90" y="122" text-anchor="middle" font-size="'+(small?42:90)+'" font-weight="900" fill="#fff" font-family="Arial">P</text>'; }
    } else if(panel.cat === "F"){
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#fff" stroke="'+ink+'" stroke-width="3"/><text x="90" y="45" text-anchor="middle" font-size="'+(small?12:18)+'" font-weight="900" fill="'+ink+'" letter-spacing="2">ZONE</text><circle cx="90" cy="105" r="42" fill="#fff" stroke="#c81e2c" stroke-width="9"/><text x="90" y="118" text-anchor="middle" font-size="'+(small?18:34)+'" font-weight="900" fill="'+ink+'" font-family="Arial">30</text>';
    } else if(panel.cat === "X"){
        content = '<rect x="12" y="55" width="156" height="70" rx="6" fill="#fff" stroke="'+ink+'" stroke-width="4"/><text x="90" y="98" text-anchor="middle" font-size="'+(small?16:24)+'" font-weight="900" fill="'+ink+'" font-family="Arial">Panonceau</text>';
    } else if(panel.cat === "S"){
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#1c5fa8"/><text x="90" y="122" text-anchor="middle" font-size="'+(small?42:90)+'" font-weight="900" fill="#fff" font-family="Arial">S</text>';
    } else {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#1c5fa8"/><text x="90" y="122" text-anchor="middle" font-size="'+(small?42:90)+'" font-weight="900" fill="#fff" font-family="Arial">?</text>';
    }
    return '<svg class="sign-svg" viewBox="0 0 180 180" preserveAspectRatio="xMidYMid meet" role="img" aria-label="'+escapeHTML(panel.nom||panel.titre||"")+'" xmlns="http://www.w3.org/2000/svg">'+content+'</svg>';
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
        var code = panel.code || panel.id || panel.titre || "";
        $("favoriteButton").textContent = favorites().indexOf(code)>=0 ? "⭐" : "☆";
    }
    if($("signStage")) $("signStage").innerHTML=makeSignSVG(panel,false);
    if($("signCaption")){
        $("signCaption").textContent = (panel.code||panel.id||"") + " — " + (CATEGORIES[panel.cat]?.label||"");
    }

    var distractors=shuffle(ALL_KNOWLEDGE.filter(function(p){ return (p.code||p.id||p.titre)!==(panel.code||panel.id||panel.titre); })).slice(0,3);
    state.options=shuffle([panel].concat(distractors));
    state.answered=false;

    if($("optionList")){
        var optionsHtml = "";
        for(var i=0;i<state.options.length;i++){
            var label = state.options[i].nom || state.options[i].titre || "";
            optionsHtml += '<button class="option" onclick="answerQuestion('+i+')">'+escapeHTML(label)+'</button>';
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

function timeoutQuestion(){ if(state.answered) return; completeAnswer(-1); }
function answerQuestion(index){ if(state.answered) return; clearInterval(state.timerId); completeAnswer(index); }

async function completeAnswer(selectedIndex){
    state.answered=true;
    var panel=state.questions[state.index];
    var selected=selectedIndex>=0?state.options[selectedIndex]:null;
    var correct=selected && (selected.code||selected.id||selected.titre)===(panel.code||panel.id||panel.titre);

    var categoryState=state.categoryStats[panel.cat]||{correct:0,total:0};
    categoryState.total++;

    if(correct){
        state.score++;
        categoryState.correct++;
    }else{
        state.errors.push({ panel: panel, answer:selected?(selected.nom||selected.titre||""):"Temps ecoule" });
        var code = panel.code || panel.id || panel.titre || "";
        appData.mistakes[code]=(appData.mistakes[code]||0)+1;
        await saveAppData();
    }
    state.categoryStats[panel.cat]=categoryState;

    var options = document.querySelectorAll("#optionList .option");
    for(var i=0;i<options.length;i++){
        options[i].classList.add("locked");
        if((state.options[i].code||state.options[i].id||state.options[i].titre)===(panel.code||panel.id||panel.titre)){
            options[i].classList.add("correct");
        }else if(i===selectedIndex){
            options[i].classList.add("wrong");
        }
    }

    if($("feedbackZone")){
        var label = panel.nom || panel.titre || "";
        $("feedbackZone").innerHTML='<div class="feedback '+(correct?"":"bad")+'"><b>'+(correct ? "Bonne reponse" : selectedIndex<0 ? "Temps ecoule - c'etait : "+escapeHTML(label) : "Erreur - c'etait : "+escapeHTML(label))+'</b>'+escapeHTML(panel.desc||"")+'</div>';
    }

    if($("nextButtonZone")){
        $("nextButtonZone").innerHTML='<button class="primary" style="width:100%" onclick="nextQuestion()">'+(state.index+1>=state.questions.length?"Voir le resume":"Question suivante")+'</button>';
    }
    if($("quizScore")) $("quizScore").textContent="Score : "+state.score;
}

function nextQuestion(){ state.index++; renderQuestion(); }

async function toggleFavorite(){
    var panel=state.questions[state.index];
    var code = panel.code || panel.id || panel.titre || "";
    var index=appData.favorites.indexOf(code);
    if(index>=0){ appData.favorites.splice(index,1); }
    else{ appData.favorites.push(code); }

    var button=$("favoriteButton");
    if(button){
        button.textContent=favorites().indexOf(code)>=0?"⭐":"☆";
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
                var label = error.panel.nom || error.panel.titre || "";
                errorHtml += '<div class="error"><b>['+escapeHTML(error.panel.code||error.panel.id||"")+'] '+escapeHTML(label)+'</b><div class="your-answer">Ta reponse : '+escapeHTML(error.answer)+'</div><div>'+escapeHTML(error.panel.desc||"")+'</div></div>';
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

// ---- KEYBOARD SHORTCUTS ----
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

// ---- EXPORT DES FONCTIONS ----
window.goHome = goHome;
window.showQuiz = showQuiz;
window.startOfficialExam = startOfficialExam;
window.showRepo = showRepo;
window.showRules = showRules;
window.showMecanique = showMecanique;
window.showPneumatiques = showPneumatiques;
window.showSaisons = showSaisons;
window.showSecours = showSecours;
window.showLegal = showLegal;
window.showEquipements = showEquipements;
window.showMarquages = showMarquages;
window.showConditions = showConditions;
window.showVehicules = showVehicules;
window.showPsychologie = showPsychologie;
window.showInfractions = showInfractions;
window.showPiegesRoutes = showPiegesRoutes;
window.showUsagersManoeuvres = showUsagersManoeuvres;
window.renderMecanique = renderMecanique;
window.renderPneumatiques = renderPneumatiques;
window.renderSaisons = renderSaisons;
window.renderSecours = renderSecours;
window.renderLegal = renderLegal;
window.renderEquipements = renderEquipements;
window.renderMarquages = renderMarquages;
window.renderConditions = renderConditions;
window.renderVehicules = renderVehicules;
window.renderPsychologie = renderPsychologie;
window.renderRepository = renderRepository;
window.renderRules = renderRules;
window.renderInfractions = renderInfractions;
window.renderPiegesRoutes = renderPiegesRoutes;
window.renderUsagersManoeuvres = renderUsagersManoeuvres;
window.toggleTheme = toggleTheme;
window.startReview = startReview;
window.startQuiz = startQuiz;
window.configureQuiz = configureQuiz;
window.replayQuiz = replayQuiz;
window.reviewErrors = reviewErrors;
window.toggleFavorite = toggleFavorite;
window.answerQuestion = answerQuestion;
window.nextQuestion = nextQuestion;

// ---- INITIALISATION ----
async function init(){
    await loadAppData();
    applyTheme();
    renderCategorySelector();
    updateHomeStats();
    goHome();
    document.body.classList.add("ready");
}

document.addEventListener('DOMContentLoaded', init);
