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

// ---- PANNEAUX DE DANGER (A) ----
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

// ---- PANNEAUX DE PRIORITE (B) ----
var PANNEAUX_B = [
    {code:"B1",nom:"Cedez le passage",cat:"B",desc:"Triangle pointe vers le bas. Ceder le passage aux usagers de la voie prioritaire."},
    {code:"B5",nom:"Stop (Arret obligatoire)",cat:"B",desc:"Obligation de marquer l'arret complet avant la ligne d'effet."},
    {code:"B9",nom:"Voie prioritaire",cat:"B",desc:"Losange jaune : vous etes prioritaire aux intersections."},
    {code:"B11",nom:"Fin de voie prioritaire",cat:"B",desc:"Losange barre : fin du statut de route prioritaire."},
    {code:"B15",nom:"Priorite a l'intersection",cat:"B",desc:"Vous avez la priorite uniquement a la prochaine intersection."},
    {code:"B17",nom:"Priorite a droite",cat:"B",desc:"Regle generale : ceder le passage venant de droite."}
];

// ---- PANNEAUX D'INTERDICTION (C) ----
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

// ---- PANNEAUX D'OBLIGATION (D) ----
var PANNEAUX_D = [
    {code:"D1a",nom:"Direction obligatoire a droite",cat:"D",desc:"Obligation de tourner a droite."},
    {code:"D1b",nom:"Direction obligatoire a gauche",cat:"D",desc:"Obligation de tourner a gauche."},
    {code:"D9",nom:"Piste cyclable obligatoire",cat:"D",desc:"Voie exclusive reservee aux cyclistes."},
    {code:"D10",nom:"Chemin pour pietons",cat:"D",desc:"Voie reservee exclusivement aux pietons."}
];

// ---- PANNEAUX DE STATIONNEMENT (E) ----
var PANNEAUX_E = [
    {code:"E1",nom:"Stationnement interdit",cat:"E",desc:"Interdiction de stationner du cote du panneau. L'arret reste autorise."},
    {code:"E3",nom:"Arret et stationnement interdits",cat:"E",desc:"Interdiction absolue de s'arreter et de stationner."},
    {code:"E9a",nom:"Stationnement autorise (Parking)",cat:"E",desc:"Indique un emplacement ou un parking autorise."}
];

// ---- PANNEAUX D'INDICATION (F) ----
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

// ---- PANONCEAUX (X) ----
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
    {id:"mec_001",titre:"Huile moteur",cat:"MECA",sousCat:"Moteur",desc:"Viscosite 5W30/10W40. Vidange tous les 15 000-30 000 km."},
    {id:"mec_002",titre:"Filtre a huile",cat:"MECA",sousCat:"Moteur",desc:"Remplacement a chaque vidange. Retient les impuretes."},
    {id:"mec_003",titre:"Liquide de refroidissement",cat:"MECA",sousCat:"Moteur",desc:"Antigel, niveau entre MIN et MAX. Remplacement 5 ans ou 100 000 km."},
    {id:"mec_004",titre:"Thermostat",cat:"MECA",sousCat:"Moteur",desc:"Regule la temperature moteur. Bloque = surchauffe."},
    {id:"mec_005",titre:"Radiateur",cat:"MECA",sousCat:"Moteur",desc:"Nettoyage regulier. Fuite = surchauffe."},
    {id:"mec_006",titre:"Ventilateur de refroidissement",cat:"MECA",sousCat:"Moteur",desc:"S'enclenche a 90-100°C. Defaut = surchauffe."},
    {id:"mec_007",titre:"Courroie de distribution",cat:"MECA",sousCat:"Moteur",desc:"Remplacement 100 000-150 000 km. Casse = destruction moteur."},
    {id:"mec_008",titre:"Courroie d'accessoires",cat:"MECA",sousCat:"Moteur",desc:"Alternateur, direction, climatisation. Casse = perte d'assistance."},
    {id:"mec_009",titre:"Tendeur de courroie",cat:"MECA",sousCat:"Moteur",desc:"Maintient la tension. Usure = bruit, glissement."},
    {id:"mec_010",titre:"Pompe a eau",cat:"MECA",sousCat:"Moteur",desc:"Circulation du liquide de refroidissement. Fuite = surchauffe."},
    {id:"mec_011",titre:"Alternateur",cat:"MECA",sousCat:"Electrique",desc:"Recharge la batterie. Defaut = batterie vide."},
    {id:"mec_012",titre:"Batterie",cat:"MECA",sousCat:"Electrique",desc:"Tension 12V. Duree de vie 4-5 ans."},
    {id:"mec_013",titre:"Demarreur",cat:"MECA",sousCat:"Electrique",desc:"Lance le moteur. Clic = batterie ou demarreur HS."},
    {id:"mec_014",titre:"Filtre a air moteur",cat:"MECA",sousCat:"Moteur",desc:"Remplacement 20 000-40 000 km. Colmate = perte de puissance."},
    {id:"mec_015",titre:"Turbo-compresseur",cat:"MECA",sousCat:"Moteur",desc:"Suralimentation. Defaut = perte de puissance, fumee."},
    {id:"mec_016",titre:"Vanne EGR",cat:"MECA",sousCat:"Moteur",desc:"Recirculation des gaz. Colmatage = perte de puissance."},
    {id:"mec_017",titre:"Volant moteur (bimasse)",cat:"MECA",sousCat:"Transmission",desc:"Amortit les vibrations. Defaut = claquements."},
    {id:"mec_018",titre:"Embrayage",cat:"MECA",sousCat:"Transmission",desc:"Usure 150 000-200 000 km. Patinage = embrayage use."},
    {id:"mec_019",titre:"Boite de vitesses",cat:"MECA",sousCat:"Transmission",desc:"Vidange 60 000-100 000 km. Passage dur = usure."},
    {id:"mec_020",titre:"Arbre de transmission",cat:"MECA",sousCat:"Transmission",desc:"Transmet le couple. Jeu = vibrations."},
    {id:"mec_021",titre:"Cardans / Roulements de roue",cat:"MECA",sousCat:"Transmission",desc:"Usure = bruit de roulement, vibrations."},
    {id:"mec_022",titre:"Joint de culasse",cat:"MECA",sousCat:"Moteur",desc:"Fissure = melange huile/eau, fumee blanche."},
    {id:"mec_023",titre:"Filtre a gazole",cat:"MECA",sousCat:"Injection",desc:"Purge de l'eau. Remplacement 20 000 km."},
    {id:"mec_024",titre:"Systeme AdBlue",cat:"MECA",sousCat:"Injection",desc:"Reduction des NOx. Defaut = non-demarrage."},
    {id:"mec_025",titre:"Injecteurs",cat:"MECA",sousCat:"Injection",desc:"Nettoyage ou remplacement 100 000-150 000 km."},
    {id:"mec_026",titre:"Pompe a essence",cat:"MECA",sousCat:"Injection",desc:"Alimentation carburant. Defaut = calage."},
    {id:"mec_027",titre:"Bougies de prechauffage",cat:"MECA",sousCat:"Injection",desc:"Aident au demarrage a froid. Defaut = fumee blanche."},
    {id:"mec_028",titre:"Filtre a air habitacle",cat:"MECA",sousCat:"Confort",desc:"Remplacement 15 000-20 000 km. Colmate = buee."},
    {id:"mec_029",titre:"Plaquettes de frein",cat:"MECA",sousCat:"Freinage",desc:"Usure = bruit, distance allongee. Epaisseur min 2-3 mm."},
    {id:"mec_030",titre:"Disques de frein",cat:"MECA",sousCat:"Freinage",desc:"Usure, voile. Vibrations = disque voile."},
    {id:"mec_031",titre:"Liquide de frein",cat:"MECA",sousCat:"Freinage",desc:"Niveau, hygroscopique. Remplacement 2-5 ans."},
    {id:"mec_032",titre:"Maitre-cylindre",cat:"MECA",sousCat:"Freinage",desc:"Pompe principale. Fuite = pedale molle."},
    {id:"mec_033",titre:"Etriers de frein",cat:"MECA",sousCat:"Freinage",desc:"Pression sur les plaquettes. Colmatage = freinage asymetrique."},
    {id:"mec_034",titre:"Tuyaux de frein",cat:"MECA",sousCat:"Freinage",desc:"Flexibles. Usure = perte de pression."},
    {id:"mec_035",titre:"Frein de stationnement",cat:"MECA",sousCat:"Freinage",desc:"Cable ou electrique. Entretien regulier."},
    {id:"mec_036",titre:"ABS",cat:"MECA",sousCat:"Freinage",desc:"Capteurs de roue. Defaut = perte d'ABS."},
    {id:"mec_037",titre:"ESP",cat:"MECA",sousCat:"Freinage",desc:"Antipatinage, stabilite. Defaut = temoin."},
    {id:"mec_038",titre:"Assistance freinage d'urgence",cat:"MECA",sousCat:"Freinage",desc:"Freinage automatique en cas de danger."},
    {id:"mec_039",titre:"Freinage regeneratif",cat:"MECA",sousCat:"Freinage",desc:"Vehicules hybrides/electriques."},
    {id:"mec_040",titre:"Direction assistee",cat:"MECA",sousCat:"Direction",desc:"Hydraulique ou electrique. Defaut = direction dure."},
    {id:"mec_041",titre:"Liquide de direction",cat:"MECA",sousCat:"Direction",desc:"Controle du niveau, fuites."},
    {id:"mec_042",titre:"Cremaillere de direction",cat:"MECA",sousCat:"Direction",desc:"Jeu, usure = direction floue."},
    {id:"mec_043",titre:"Barres stabilisatrices",cat:"MECA",sousCat:"Suspension",desc:"Maintien de la caisse."},
    {id:"mec_044",titre:"Amortisseurs",cat:"MECA",sousCat:"Suspension",desc:"Usure = rebond, tenue de route degradee."},
    {id:"mec_045",titre:"Ressorts de suspension",cat:"MECA",sousCat:"Suspension",desc:"Cassure = voiture penche."},
    {id:"mec_046",titre:"Biellettes de direction",cat:"MECA",sousCat:"Direction",desc:"Jeu = direction imprecise."},
    {id:"mec_047",titre:"Rotules de direction",cat:"MECA",sousCat:"Direction",desc:"Usure = jeu, usure des pneus."},
    {id:"mec_048",titre:"Silentblocs",cat:"MECA",sousCat:"Suspension",desc:"Usure = bruit de roulement."},
    {id:"mec_049",titre:"Bougies d'allumage",cat:"MECA",sousCat:"Allumage",desc:"Usure 30 000-60 000 km."},
    {id:"mec_050",titre:"Bobines d'allumage",cat:"MECA",sousCat:"Allumage",desc:"Defaut = perte de puissance."},
    {id:"mec_051",titre:"Cables d'allumage",cat:"MECA",sousCat:"Allumage",desc:"Fissures = etincelles, rates."},
    {id:"mec_052",titre:"Catalyseur",cat:"MECA",sousCat:"Echappement",desc:"Transforme les gaz polluants."},
    {id:"mec_053",titre:"Filtre a particules",cat:"MECA",sousCat:"Echappement",desc:"Retient les suies. Colmatage = risque de casse."},
    {id:"mec_054",titre:"Ligne d'echappement",cat:"MECA",sousCat:"Echappement",desc:"Corrosion = trou, bruit."},
    {id:"mec_055",titre:"Pot catalytique",cat:"MECA",sousCat:"Echappement",desc:"Usure = bruit excessif."},
    {id:"mec_056",titre:"Silencieux",cat:"MECA",sousCat:"Echappement",desc:"Perfore = bruit excessif."},
    {id:"mec_057",titre:"Sonde lambda",cat:"MECA",sousCat:"Echappement",desc:"Defaut = surconsommation."},
    {id:"mec_058",titre:"Feux de croisement",cat:"MECA",sousCat:"Eclairage",desc:"Obligatoires de nuit, tunnels, brouillard."},
    {id:"mec_059",titre:"Feux de route",cat:"MECA",sousCat:"Eclairage",desc:"Eblouissement interdit."},
    {id:"mec_060",titre:"Feux de brouillard avant",cat:"MECA",sousCat:"Eclairage",desc:"Uniquement brouillard ou fortes pluies."}
];

// ---- PNEUMATIQUES (40 elements) ----
var PNEUMATIQUES = [
    {id:"pneu_001",titre:"Pneu ete",cat:"PNEU",sousCat:"Types",desc:"Gomme dure, adherence au-dessus de 7°C."},
    {id:"pneu_002",titre:"Pneu hiver",cat:"PNEU",sousCat:"Types",desc:"Gomme souple, lamelles. Adherence < 7°C."},
    {id:"pneu_003",titre:"Pneu 4 saisons",cat:"PNEU",sousCat:"Types",desc:"Compromis ete/hiver."},
    {id:"pneu_004",titre:"Pneu cloute",cat:"PNEU",sousCat:"Types",desc:"Autorise du 1er novembre au 31 mars."},
    {id:"pneu_005",titre:"Pneu run-flat",cat:"PNEU",sousCat:"Types",desc:"Roule a plat 80 km/h sur 50-80 km."},
    {id:"pneu_006",titre:"Pneu ZR/VR",cat:"PNEU",sousCat:"Types",desc:"Haute vitesse."},
    {id:"pneu_007",titre:"Pneus rechapés",cat:"PNEU",sousCat:"Types",desc:"Restrictions de vitesse."},
    {id:"pneu_008",titre:"Indice de charge",cat:"PNEU",sousCat:"Dimensions",desc:"Ex: 91 = 615 kg par pneu."},
    {id:"pneu_009",titre:"Indice de vitesse",cat:"PNEU",sousCat:"Dimensions",desc:"Ex: H = 210 km/h, V = 240 km/h."},
    {id:"pneu_010",titre:"Taille (ex: 205/55 R16)",cat:"PNEU",sousCat:"Dimensions",desc:"Largeur 205, hauteur 55%, R = radial."},
    {id:"pneu_011",titre:"DOT",cat:"PNEU",sousCat:"Dimensions",desc:"Date de fabrication (semaine/annee)."},
    {id:"pneu_012",titre:"Fleche de rotation",cat:"PNEU",sousCat:"Dimensions",desc:"Pneu asymetrique ou directionnel."},
    {id:"pneu_013",titre:"TWI (usure)",cat:"PNEU",sousCat:"Dimensions",desc:"Temoins d'usure a 1,6 mm."},
    {id:"pneu_014",titre:"Pressions recommandees",cat:"PNEU",sousCat:"Entretien",desc:"Sur l'etiquette portiere."},
    {id:"pneu_015",titre:"Pression des pneus",cat:"PNEU",sousCat:"Entretien",desc:"Verifier toutes les 2 semaines."},
    {id:"pneu_016",titre:"Sur-gonflage",cat:"PNEU",sousCat:"Entretien",desc:"Usure au centre, moins d'adherence."},
    {id:"pneu_017",titre:"Sous-gonflage",cat:"PNEU",sousCat:"Entretien",desc:"Usure sur les cotes, surchauffe."},
    {id:"pneu_018",titre:"Permutation",cat:"PNEU",sousCat:"Entretien",desc:"AV/AR tous les 10 000 km."},
    {id:"pneu_019",titre:"Usure irreguliere",cat:"PNEU",sousCat:"Entretien",desc:"Parallelisme ou amortisseurs."},
    {id:"pneu_020",titre:"Herbe a pneu",cat:"PNEU",sousCat:"Entretien",desc:"Crevaison lente."},
    {id:"pneu_021",titre:"Kit anti-crevaison",cat:"PNEU",sousCat:"Entretien",desc:"Alternative a la roue de secours."},
    {id:"pneu_022",titre:"Roue de secours",cat:"PNEU",sousCat:"Entretien",desc:"Verifier la pression."},
    {id:"pneu_023",titre:"Jantes",cat:"PNEU",sousCat:"Entretien",desc:"Integrite, fissures, voilage."},
    {id:"pneu_024",titre:"Montage pneus hiver",cat:"PNEU",sousCat:"Saisons",desc:"1er novembre - 31 mars."},
    {id:"pneu_025",titre:"Demontage pneus hiver",cat:"PNEU",sousCat:"Saisons",desc:"Avril."},
    {id:"pneu_026",titre:"Pneus neige",cat:"PNEU",sousCat:"Saisons",desc:"Obligatoires sur certaines routes."},
    {id:"pneu_027",titre:"Chaines a neige",cat:"PNEU",sousCat:"Saisons",desc:"Vitesse max 50 km/h."},
    {id:"pneu_028",titre:"Chaussettes a neige",cat:"PNEU",sousCat:"Saisons",desc:"Alternative aux chaines."},
    {id:"pneu_029",titre:"Pneus ete par temps chaud",cat:"PNEU",sousCat:"Saisons",desc:"Surveillance de la pression."},
    {id:"pneu_030",titre:"Aquaplanage",cat:"PNEU",sousCat:"Saisons",desc:"Perte d'adherence sur l'eau."},
    {id:"pneu_031",titre:"Crevaison",cat:"PNEU",sousCat:"Saisons",desc:"Ne pas rouler a plat."},
    {id:"pneu_032",titre:"Chaines homologuees",cat:"PNEU",sousCat:"Equipements",desc:"Taille correcte."},
    {id:"pneu_033",titre:"Chaussettes",cat:"PNEU",sousCat:"Equipements",desc:"Faciles a installer."},
    {id:"pneu_034",titre:"Pneus cloutes",cat:"PNEU",sousCat:"Equipements",desc:"Autorises selon saison."},
    {id:"pneu_035",titre:"Liquide lave-glace antigel",cat:"PNEU",sousCat:"Equipements",desc:"Protection -20°C ou -30°C."},
    {id:"pneu_036",titre:"Brosse a neige",cat:"PNEU",sousCat:"Equipements",desc:"Degager la neige du toit."},
    {id:"pneu_037",titre:"Kit depannage hiver",cat:"PNEU",sousCat:"Equipements",desc:"Cables, lampe, gants."},
    {id:"pneu_038",titre:"Pression par temps froid",cat:"PNEU",sousCat:"Entretien",desc:"Augmentation."},
    {id:"pneu_039",titre:"Pression par temps chaud",cat:"PNEU",sousCat:"Entretien",desc:"Sous-gonflage possible."},
    {id:"pneu_040",titre:"Remplacement pneus",cat:"PNEU",sousCat:"Entretien",desc:"40 000-60 000 km."}
];

// ---- SAISONS ET ENVIRONNEMENT (30 elements) ----
var SAISONS_ENVIRONNEMENT = [
    {id:"sai_001",titre:"Conduite sur neige",cat:"SAI",sousCat:"Hiver",desc:"Vitesse reduite, distances doublees."},
    {id:"sai_002",titre:"Conduite sur verglas",cat:"SAI",sousCat:"Hiver",desc:"Freinage ABS, pas de volant brusque."},
    {id:"sai_003",titre:"Fumee blanche",cat:"SAI",sousCat:"Hiver",desc:"Condensation ou fuite de refroidissement."},
    {id:"sai_004",titre:"Gel des serrures",cat:"SAI",sousCat:"Hiver",desc:"Produit degrippant."},
    {id:"sai_005",titre:"Neige sur le toit",cat:"SAI",sousCat:"Hiver",desc:"Obligation de degager (116 € d'amende)."},
    {id:"sai_006",titre:"Brouillard givrant",cat:"SAI",sousCat:"Hiver",desc:"Feux de brouillard."},
    {id:"sai_007",titre:"Route enneigee",cat:"SAI",sousCat:"Hiver",desc:"Vitesse ≤ 50 km/h si visibilite < 50m."},
    {id:"sai_008",titre:"Conduite en montagne",cat:"SAI",sousCat:"Montagne",desc:"Celui qui descend cede le passage."},
    {id:"sai_009",titre:"Frein moteur",cat:"SAI",sousCat:"Montagne",desc:"Utiliser les rapports inferieurs."},
    {id:"sai_010",titre:"Pneus montagne",cat:"SAI",sousCat:"Montagne",desc:"Pneus specifiques, chaines."},
    {id:"sai_011",titre:"Cols de montagne",cat:"SAI",sousCat:"Montagne",desc:"Restrictions de poids, hauteur."},
    {id:"sai_012",titre:"Zones de montagne",cat:"SAI",sousCat:"Montagne",desc:"Panneaux A3, A5."},
    {id:"sai_013",titre:"Conduite par canicule",cat:"SAI",sousCat:"Ete",desc:"Surveillance temperature moteur."},
    {id:"sai_014",titre:"Climatisation",cat:"SAI",sousCat:"Ete",desc:"Verification du gaz."},
    {id:"sai_015",titre:"Protection solaire",cat:"SAI",sousCat:"Ete",desc:"Pare-soleil, lunettes."},
    {id:"sai_016",titre:"Routes goudronnees",cat:"SAI",sousCat:"Ete",desc:"Risque d'aquaplanage."},
    {id:"sai_017",titre:"Orages",cat:"SAI",sousCat:"Ete",desc:"Feux de croisement."},
    {id:"sai_018",titre:"Zones faibles emissions",cat:"SAI",sousCat:"Ecologie",desc:"Crit'Air, ZFE."},
    {id:"sai_019",titre:"Crit'Air",cat:"SAI",sousCat:"Ecologie",desc:"Vignette obligatoire."},
    {id:"sai_020",titre:"Eco-conduite",cat:"SAI",sousCat:"Ecologie",desc:"Vitesse optimale."},
    {id:"sai_021",titre:"Recyclage pneus",cat:"SAI",sousCat:"Ecologie",desc:"Centre agree."},
    {id:"sai_022",titre:"Filtre a particules",cat:"SAI",sousCat:"Ecologie",desc:"Regeneration."},
    {id:"sai_023",titre:"Huile usagee",cat:"SAI",sousCat:"Ecologie",desc:"Depot en dechetterie."},
    {id:"sai_024",titre:"Batterie usagee",cat:"SAI",sousCat:"Ecologie",desc:"Recyclage."},
    {id:"sai_025",titre:"Vehicules electriques",cat:"SAI",sousCat:"Ecologie",desc:"Bornes de recharge."},
    {id:"sai_026",titre:"Chargement ecologique",cat:"SAI",sousCat:"Ecologie",desc:"Reduire consommation."},
    {id:"sai_027",titre:"Conduite grand froid",cat:"SAI",sousCat:"Extreme",desc:"Verifier batterie, huile."},
    {id:"sai_028",titre:"Gel des vitres",cat:"SAI",sousCat:"Extreme",desc:"Degivrage."},
    {id:"sai_029",titre:"Buee sur les vitres",cat:"SAI",sousCat:"Extreme",desc:"Ventilation, desembuage."},
    {id:"sai_030",titre:"Diesel par temps froid",cat:"SAI",sousCat:"Extreme",desc:"Risque de gelification."}
];

// ---- SECOURS ET URGENCE (25 elements) ----
var SECOURS_URGENCE = [
    {id:"sec_001",titre:"PLS",cat:"SEC",sousCat:"Gestes",desc:"Position Laterale de Securite."},
    {id:"sec_002",titre:"Massage cardiaque",cat:"SEC",sousCat:"Gestes",desc:"30 compressions, 2 insufflations."},
    {id:"sec_003",titre:"Compressions",cat:"SEC",sousCat:"Gestes",desc:"Profondeur 5-6 cm, 100-120/min."},
    {id:"sec_004",titre:"Insufflations",cat:"SEC",sousCat:"Gestes",desc:"Tete en extension."},
    {id:"sec_005",titre:"Defibrillateur",cat:"SEC",sousCat:"Gestes",desc:"Utilisation DAE."},
    {id:"sec_006",titre:"Hemorragie",cat:"SEC",sousCat:"Gestes",desc:"Compression directe."},
    {id:"sec_007",titre:"Brulures",cat:"SEC",sousCat:"Gestes",desc:"Ne pas percer les cloques."},
    {id:"sec_008",titre:"Fractures",cat:"SEC",sousCat:"Gestes",desc:"Immobiliser."},
    {id:"sec_009",titre:"Malaise",cat:"SEC",sousCat:"Gestes",desc:"Allonger."},
    {id:"sec_010",titre:"Victime consciente",cat:"SEC",sousCat:"Gestes",desc:"Rassurer."},
    {id:"sec_011",titre:"Triangle",cat:"SEC",sousCat:"Balisage",desc:"50 m agglo, 100-150 m hors."},
    {id:"sec_012",titre:"Gilet haute visibilite",cat:"SEC",sousCat:"Balisage",desc:"Obligatoire."},
    {id:"sec_013",titre:"Feux de detresse",cat:"SEC",sousCat:"Balisage",desc:"Arret d'urgence."},
    {id:"sec_014",titre:"Distance de balisage",cat:"SEC",sousCat:"Balisage",desc:"50 m autoroute."},
    {id:"sec_015",titre:"Signalisation de nuit",cat:"SEC",sousCat:"Balisage",desc:"Feux de position."},
    {id:"sec_016",titre:"Appel d'urgence",cat:"SEC",sousCat:"Balisage",desc:"112, 101, 100."},
    {id:"sec_017",titre:"Trousse de secours",cat:"SEC",sousCat:"Equipements",desc:"Obligatoire."},
    {id:"sec_018",titre:"Extincteur",cat:"SEC",sousCat:"Equipements",desc:"Homologue."},
    {id:"sec_019",titre:"Gilet norme",cat:"SEC",sousCat:"Equipements",desc:"EN 471."},
    {id:"sec_020",titre:"Triangle homologue",cat:"SEC",sousCat:"Equipements",desc:"Verifier la date."},
    {id:"sec_021",titre:"Lampe de poche",cat:"SEC",sousCat:"Equipements",desc:"Recommande."},
    {id:"sec_022",titre:"Cables demarrage",cat:"SEC",sousCat:"Equipements",desc:"Recommandes."},
    {id:"sec_023",titre:"Kit reparation",cat:"SEC",sousCat:"Equipements",desc:"Alternative."},
    {id:"sec_024",titre:"Couverture survie",cat:"SEC",sousCat:"Equipements",desc:"Recommande."},
    {id:"sec_025",titre:"Gants protection",cat:"SEC",sousCat:"Equipements",desc:"Recommandes."}
];

// ---- LEGAL ET ADMINISTRATIF (30 elements) ----
var LEGAL_ADMIN = [
    {id:"leg_001",titre:"Permis B",cat:"LEG",sousCat:"Permis",desc:"18 ans (ou 17 ans accompagne)."},
    {id:"leg_002",titre:"Permis A1",cat:"LEG",sousCat:"Permis",desc:"125 cm3, 11 kW."},
    {id:"leg_003",titre:"Permis A2",cat:"LEG",sousCat:"Permis",desc:"35 kW."},
    {id:"leg_004",titre:"Permis A",cat:"LEG",sousCat:"Permis",desc:"Puissance illimitee."},
    {id:"leg_005",titre:"Permis C",cat:"LEG",sousCat:"Permis",desc:"Camion > 3,5 t."},
    {id:"leg_006",titre:"Permis D",cat:"LEG",sousCat:"Permis",desc:"Autocar."},
    {id:"leg_007",titre:"Permis BE",cat:"LEG",sousCat:"Permis",desc:"Voiture + remorque > 750 kg."},
    {id:"leg_008",titre:"Permis CE",cat:"LEG",sousCat:"Permis",desc:"Camion + remorque."},
    {id:"leg_009",titre:"Permis DE",cat:"LEG",sousCat:"Permis",desc:"Autocar + remorque."},
    {id:"leg_010",titre:"Visite medicale",cat:"LEG",sousCat:"Permis",desc:"Permis C et D."},
    {id:"leg_011",titre:"Permis provisoire",cat:"LEG",sousCat:"Permis",desc:"36 mois, restrictions nuit."},
    {id:"leg_012",titre:"Permis probatoire",cat:"LEG",sousCat:"Permis",desc:"18 mois, points."},
    {id:"leg_013",titre:"Assurance RC",cat:"LEG",sousCat:"Assurance",desc:"Obligatoire."},
    {id:"leg_014",titre:"Assurance tous risques",cat:"LEG",sousCat:"Assurance",desc:"Facultative."},
    {id:"leg_015",titre:"Controle technique",cat:"LEG",sousCat:"Controle",desc:"Tous les ans."},
    {id:"leg_016",titre:"CT periodicite",cat:"LEG",sousCat:"Controle",desc:"Voiture: 1 an, camion: 6 mois."},
    {id:"leg_017",titre:"Vignette CT",cat:"LEG",sousCat:"Controle",desc:"A apposer."},
    {id:"leg_018",titre:"Carte grise",cat:"LEG",sousCat:"Documents",desc:"Certificat d'immatriculation."},
    {id:"leg_019",titre:"Attestation assurance",cat:"LEG",sousCat:"Documents",desc:"A conserver."},
    {id:"leg_020",titre:"Certificat conformite",cat:"LEG",sousCat:"Documents",desc:"Vehicules neufs."},
    {id:"leg_021",titre:"Alcool 0,5 g/L",cat:"LEG",sousCat:"Sanctions",desc:"179 €, retrait 3h."},
    {id:"leg_022",titre:"Alcool 0,8 g/L",cat:"LEG",sousCat:"Sanctions",desc:"Retrait 15 jours, tribunal."},
    {id:"leg_023",titre:"Alcool 1,2 g/L",cat:"LEG",sousCat:"Sanctions",desc:"Retrait 15 jours, amende."},
    {id:"leg_024",titre:"Drogues",cat:"LEG",sousCat:"Sanctions",desc:"Retrait de permis."},
    {id:"leg_025",titre:"Exces agglo",cat:"LEG",sousCat:"Sanctions",desc:"53 € + 11 €/km/h."},
    {id:"leg_026",titre:"Exces hors agglo",cat:"LEG",sousCat:"Sanctions",desc:"53 € + 6 €/km/h."},
    {id:"leg_027",titre:"Exces autoroute",cat:"LEG",sousCat:"Sanctions",desc:"53 € + 6 €/km/h."},
    {id:"leg_028",titre:"Retrait permis",cat:"LEG",sousCat:"Sanctions",desc:"Alcool, drogue, exces > 40 km/h."},
    {id:"leg_029",titre:"Points",cat:"LEG",sousCat:"Sanctions",desc:"12 points."},
    {id:"leg_030",titre:"Recuperation points",cat:"LEG",sousCat:"Sanctions",desc:"Stage."}
];

// ---- EQUIPEMENTS ET ACCESSOIRES (20 elements) ----
var EQUIPEMENTS = [
    {id:"eq_001",titre:"Phare LED",cat:"EQ",sousCat:"Eclairage",desc:"Obligatoire recents."},
    {id:"eq_002",titre:"Feux de jour",cat:"EQ",sousCat:"Eclairage",desc:"Autoroute."},
    {id:"eq_003",titre:"Waze/GPS",cat:"EQ",sousCat:"Aides",desc:"Ne pas manipuler."},
    {id:"eq_004",titre:"Camera recul",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_005",titre:"Radar recul",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_006",titre:"Alarme franchissement",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_007",titre:"Freinage auto",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_008",titre:"Regulateur",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_009",titre:"Limiteur",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_010",titre:"Avertisseur somnolence",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_011",titre:"Surveillance pression",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_012",titre:"Kit reparation",cat:"EQ",sousCat:"Securite",desc:"Alternative."},
    {id:"eq_013",titre:"Roue galette",cat:"EQ",sousCat:"Securite",desc:"Vitesse max 80 km/h."},
    {id:"eq_014",titre:"Leve-vitre",cat:"EQ",sousCat:"Confort",desc:"Verification."},
    {id:"eq_015",titre:"Retroviseurs",cat:"EQ",sousCat:"Confort",desc:"Angle mort."},
    {id:"eq_016",titre:"Angle mort",cat:"EQ",sousCat:"Securite",desc:"Attention."},
    {id:"eq_017",titre:"Alerte angle mort",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_018",titre:"Projecteurs adaptatifs",cat:"EQ",sousCat:"Eclairage",desc:"Suivent la direction."},
    {id:"eq_019",titre:"Nettoyage phares",cat:"EQ",sousCat:"Eclairage",desc:"Obligatoire."},
    {id:"eq_020",titre:"Systeme antibrouillard",cat:"EQ",sousCat:"Eclairage",desc:"Verification."}
];

// ---- MARQUAGES AU SOL (20 elements) ----
var MARQUAGES_SOL = [
    {id:"mar_001",titre:"Ligne continue simple",cat:"MAR",sousCat:"Lignes",desc:"Interdiction de franchir."},
    {id:"mar_002",titre:"Ligne continue double",cat:"MAR",sousCat:"Lignes",desc:"Interdiction totale."},
    {id:"mar_003",titre:"Ligne discontinue simple",cat:"MAR",sousCat:"Lignes",desc:"Depasser si visibilite."},
    {id:"mar_004",titre:"Ligne discontinue double",cat:"MAR",sousCat:"Lignes",desc:"Depasser avec prudence."},
    {id:"mar_005",titre:"Ligne mixte",cat:"MAR",sousCat:"Lignes",desc:"Interdit cote continue."},
    {id:"mar_006",titre:"Ligne jaune",cat:"MAR",sousCat:"Lignes",desc:"Stationnement interdit."},
    {id:"mar_007",titre:"Ligne jaune discontinue",cat:"MAR",sousCat:"Lignes",desc:"Stationnement interdit alternance."},
    {id:"mar_008",titre:"Ligne bleue",cat:"MAR",sousCat:"Lignes",desc:"Stationnement payant."},
    {id:"mar_009",titre:"Ligne de rive",cat:"MAR",sousCat:"Lignes",desc:"Bord de chaussee."},
    {id:"mar_010",titre:"Fleche rabattement",cat:"MAR",sousCat:"Fleches",desc:"Changer de voie."},
    {id:"mar_011",titre:"Fleche direction",cat:"MAR",sousCat:"Fleches",desc:"Direction obligatoire."},
    {id:"mar_012",titre:"Passage pieton",cat:"MAR",sousCat:"Passages",desc:"Priorite pietons."},
    {id:"mar_013",titre:"Passage cycliste",cat:"MAR",sousCat:"Passages",desc:"Priorite cyclistes."},
    {id:"mar_014",titre:"Sas velo",cat:"MAR",sousCat:"Passages",desc:"Espace reserve velos."},
    {id:"mar_015",titre:"Marquage stationnement",cat:"MAR",sousCat:"Stationnement",desc:"Cases."},
    {id:"mar_016",titre:"Zone rencontre",cat:"MAR",sousCat:"Zones",desc:"Pietons prioritaires."},
    {id:"mar_017",titre:"Zone pietonne",cat:"MAR",sousCat:"Zones",desc:"Pietons exclusifs."},
    {id:"mar_018",titre:"Ralentisseur",cat:"MAR",sousCat:"Zones",desc:"Trapezes."},
    {id:"mar_019",titre:"Courbe",cat:"MAR",sousCat:"Zones",desc:"Indicateurs virage."},
    {id:"mar_020",titre:"Tunnel",cat:"MAR",sousCat:"Zones",desc:"Lignes de guidage."}
];

// ---- CONDITIONS EXTREMES (45 elements) ----
var CONDITIONS_EXTREMES = [
    {id:"cnd_001",titre:"Conduite sur neige",cat:"CND",sousCat:"Hiver",desc:"Vitesse reduite, distances doublees."},
    {id:"cnd_002",titre:"Conduite sur verglas",cat:"CND",sousCat:"Hiver",desc:"ABS, pas de volant brusque."},
    {id:"cnd_003",titre:"Conduite grand froid",cat:"CND",sousCat:"Hiver",desc:"Verifier batterie, huile."},
    {id:"cnd_004",titre:"Gel des vitres",cat:"CND",sousCat:"Hiver",desc:"Degivrage."},
    {id:"cnd_005",titre:"Brouillard givrant",cat:"CND",sousCat:"Hiver",desc:"Feux de brouillard."},
    {id:"cnd_006",titre:"Route enneigee",cat:"CND",sousCat:"Hiver",desc:"Vitesse ≤ 50 km/h."},
    {id:"cnd_007",titre:"Neige toit",cat:"CND",sousCat:"Hiver",desc:"Obligation degager."},
    {id:"cnd_008",titre:"Diesel froid",cat:"CND",sousCat:"Hiver",desc:"Risque gelification."},
    {id:"cnd_009",titre:"Conduite canicule",cat:"CND",sousCat:"Ete",desc:"Surveillance temperature."},
    {id:"cnd_010",titre:"Climatisation",cat:"CND",sousCat:"Ete",desc:"Verification gaz."},
    {id:"cnd_011",titre:"Protection solaire",cat:"CND",sousCat:"Ete",desc:"Pare-soleil."},
    {id:"cnd_012",titre:"Routes goudronnees",cat:"CND",sousCat:"Ete",desc:"Aquaplanage."},
    {id:"cnd_013",titre:"Orages",cat:"CND",sousCat:"Ete",desc:"Feux de croisement."},
    {id:"cnd_014",titre:"Essence chaud",cat:"CND",sousCat:"Ete",desc:"Vaporisation."},
    {id:"cnd_015",titre:"Conduite pluie",cat:"CND",sousCat:"Pluie",desc:"Distance x2."},
    {id:"cnd_016",titre:"Aquaplanage",cat:"CND",sousCat:"Pluie",desc:"Ralentir."},
    {id:"cnd_017",titre:"Brouillard",cat:"CND",sousCat:"Brouillard",desc:"Feux brouillard + croisement."},
    {id:"cnd_018",titre:"Vent fort",cat:"CND",sousCat:"Vent",desc:"Tenir le volant."},
    {id:"cnd_019",titre:"Conduite nuit",cat:"CND",sousCat:"Nuit",desc:"Feux de croisement."},
    {id:"cnd_020",titre:"Tunnels",cat:"CND",sousCat:"Tunnels",desc:"Feux croisement, distance 50m."},
    {id:"cnd_021",titre:"Montagne",cat:"CND",sousCat:"Montagne",desc:"Celui qui descend cede."},
    {id:"cnd_022",titre:"Frein moteur",cat:"CND",sousCat:"Montagne",desc:"Rapports inferieurs."},
    {id:"cnd_023",titre:"Cols",cat:"CND",sousCat:"Montagne",desc:"Regles de croisement."},
    {id:"cnd_024",titre:"Cote raide",cat:"CND",sousCat:"Montagne",desc:"Frein moteur."},
    {id:"cnd_025",titre:"Descente raide",cat:"CND",sousCat:"Montagne",desc:"Freinage doux."},
    {id:"cnd_026",titre:"Passage montagne",cat:"CND",sousCat:"Montagne",desc:"Attention animaux."},
    {id:"cnd_027",titre:"Tunnels montagne",cat:"CND",sousCat:"Montagne",desc:"Feux croisement."},
    {id:"cnd_028",titre:"Route montagne hiver",cat:"CND",sousCat:"Montagne",desc:"Pneus neige."},
    {id:"cnd_029",titre:"Avalanche",cat:"CND",sousCat:"Montagne",desc:"Routes fermees."},
    {id:"cnd_030",titre:"Eboulement",cat:"CND",sousCat:"Montagne",desc:"Panneaux danger."},
    {id:"cnd_031",titre:"Brouillard montagne",cat:"CND",sousCat:"Montagne",desc:"Feux brouillard."},
    {id:"cnd_032",titre:"Neige montagne",cat:"CND",sousCat:"Montagne",desc:"Pneus neige."},
    {id:"cnd_033",titre:"Verglas montagne",cat:"CND",sousCat:"Montagne",desc:"ABS."},
    {id:"cnd_034",titre:"Batterie froid",cat:"CND",sousCat:"Extreme",desc:"Capacite reduite."},
    {id:"cnd_035",titre:"Refroidissement hiver",cat:"CND",sousCat:"Extreme",desc:"Antigel."},
    {id:"cnd_036",titre:"Lave-glace hiver",cat:"CND",sousCat:"Extreme",desc:"Antigel -30°C."},
    {id:"cnd_037",titre:"Huile froid",cat:"CND",sousCat:"Extreme",desc:"0W30, 5W30."},
    {id:"cnd_038",titre:"Huile chaud",cat:"CND",sousCat:"Extreme",desc:"10W40, 15W50."},
    {id:"cnd_039",titre:"Pression froid",cat:"CND",sousCat:"Extreme",desc:"Augmentation."},
    {id:"cnd_040",titre:"Pression chaud",cat:"CND",sousCat:"Extreme",desc:"Sous-gonflage."},
    {id:"cnd_041",titre:"Buee",cat:"CND",sousCat:"Extreme",desc:"Ventilation."},
    {id:"cnd_042",titre:"Canicule enfants",cat:"CND",sousCat:"Ete",desc:"Ne pas laisser."},
    {id:"cnd_043",titre:"Col ferme",cat:"CND",sousCat:"Montagne",desc:"Deviations."},
    {id:"cnd_044",titre:"Pont montagne",cat:"CND",sousCat:"Montagne",desc:"Poids limite."},
    {id:"cnd_045",titre:"Corniche",cat:"CND",sousCat:"Montagne",desc:"Ralentir."}
];

// ---- VEHICULES SPECIFIQUES (25 elements) ----
var VEHICULES_SPECIFIQUES = [
    {id:"veh_001",titre:"Moto A1",cat:"VEH",sousCat:"Moto",desc:"125 cm3, 11 kW."},
    {id:"veh_002",titre:"Moto A2",cat:"VEH",sousCat:"Moto",desc:"35 kW."},
    {id:"veh_003",titre:"Moto A",cat:"VEH",sousCat:"Moto",desc:"Puissance illimitee."},
    {id:"veh_004",titre:"Casque moto",cat:"VEH",sousCat:"Moto",desc:"Homologue ECE 22-05."},
    {id:"veh_005",titre:"Equipement moto",cat:"VEH",sousCat:"Moto",desc:"Gants, blouson."},
    {id:"veh_006",titre:"Cyclomoteur A",cat:"VEH",sousCat:"Cyclo",desc:"45 km/h, 16 ans."},
    {id:"veh_007",titre:"Cyclomoteur B",cat:"VEH",sousCat:"Cyclo",desc:"25 km/h, 14 ans."},
    {id:"veh_008",titre:"Cyclomoteur C",cat:"VEH",sousCat:"Cyclo",desc:"45 km/h, 18 ans."},
    {id:"veh_009",titre:"Assurance moto",cat:"VEH",sousCat:"Moto",desc:"Obligatoire."},
    {id:"veh_010",titre:"Camion C",cat:"VEH",sousCat:"Poids lourds",desc:"> 3,5 t, 21 ans."},
    {id:"veh_011",titre:"Camion C1",cat:"VEH",sousCat:"Poids lourds",desc:"3,5-7,5 t, 18 ans."},
    {id:"veh_012",titre:"Autocar D",cat:"VEH",sousCat:"Poids lourds",desc:"21 ans."},
    {id:"veh_013",titre:"Tachygraphe",cat:"VEH",sousCat:"Poids lourds",desc:"Obligatoire."},
    {id:"veh_014",titre:"Temps conduite",cat:"VEH",sousCat:"Poids lourds",desc:"4h30 max."},
    {id:"veh_015",titre:"Repos",cat:"VEH",sousCat:"Poids lourds",desc:"11h ou 9h."},
    {id:"veh_016",titre:"Chargement PL",cat:"VEH",sousCat:"Poids lourds",desc:"PTAC."},
    {id:"veh_017",titre:"ADR",cat:"VEH",sousCat:"Poids lourds",desc:"Marchandises dangereuses."},
    {id:"veh_018",titre:"Voiture remorque",cat:"VEH",sousCat:"Remorque",desc:"PTAC ≤ 3,5 t."},
    {id:"veh_019",titre:"Caravane",cat:"VEH",sousCat:"Remorque",desc:"Largeur ≤ 2,55 m."},
    {id:"veh_020",titre:"Attelage",cat:"VEH",sousCat:"Remorque",desc:"Verification."},
    {id:"veh_021",titre:"Remorque > 750 kg",cat:"VEH",sousCat:"Remorque",desc:"Permis BE."},
    {id:"veh_022",titre:"Remorque > 3,5 t",cat:"VEH",sousCat:"Remorque",desc:"Permis C1E/CE."},
    {id:"veh_023",titre:"Chargement remorque",cat:"VEH",sousCat:"Remorque",desc:"Repartition."},
    {id:"veh_024",titre:"Vehicules prioritaires",cat:"VEH",sousCat:"Prioritaires",desc:"Pompiers, police, ambulance."},
    {id:"veh_025",titre:"Intervention",cat:"VEH",sousCat:"Prioritaires",desc:"Deneigement."}
];

// ---- PSYCHOLOGIE ET STATISTIQUES (20 elements) ----
var PSYCHOLOGIE_STATS = [
    {id:"psy_001",titre:"Stress",cat:"PSY",sousCat:"Psychologie",desc:"Altere les capacites."},
    {id:"psy_002",titre:"Fatigue",cat:"PSY",sousCat:"Psychologie",desc:"Pause 15 min/2h."},
    {id:"psy_003",titre:"Somnolence",cat:"PSY",sousCat:"Psychologie",desc:"Pause immediate."},
    {id:"psy_004",titre:"Emotions",cat:"PSY",sousCat:"Psychologie",desc:"Colere, tristesse."},
    {id:"psy_005",titre:"Inattention",cat:"PSY",sousCat:"Psychologie",desc:"2 sec = 28m à 50 km/h."},
    {id:"psy_006",titre:"Distraction",cat:"PSY",sousCat:"Psychologie",desc:"GSM, GPS."},
    {id:"psy_007",titre:"Medicaments",cat:"PSY",sousCat:"Psychologie",desc:"Alterent la conduite."},
    {id:"psy_008",titre:"Alcool",cat:"PSY",sousCat:"Psychologie",desc:"0,5 g/L = 1 verre."},
    {id:"psy_009",titre:"Drogues",cat:"PSY",sousCat:"Psychologie",desc:"Interdiction."},
    {id:"psy_010",titre:"Conduite agressive",cat:"PSY",sousCat:"Psychologie",desc:"Danger."},
    {id:"psy_011",titre:"Permis belges",cat:"PSY",sousCat:"Statistiques",desc:"400 000/an."},
    {id:"psy_012",titre:"Reussite theorique",cat:"PSY",sousCat:"Statistiques",desc:"60-65%."},
    {id:"psy_013",titre:"Reussite pratique",cat:"PSY",sousCat:"Statistiques",desc:"50-55%."},
    {id:"psy_014",titre:"Vehicules",cat:"PSY",sousCat:"Statistiques",desc:"6 millions."},
    {id:"psy_015",titre:"Densite routiere",cat:"PSY",sousCat:"Statistiques",desc:"1,5 km/km²."},
    {id:"psy_016",titre:"Radars",cat:"PSY",sousCat:"Statistiques",desc:"600 fixes."},
    {id:"psy_017",titre:"Controles techniques",cat:"PSY",sousCat:"Statistiques",desc:"3 millions/an."},
    {id:"psy_018",titre:"Infractions",cat:"PSY",sousCat:"Statistiques",desc:"1,5 million/an."},
    {id:"psy_019",titre:"Accidents",cat:"PSY",sousCat:"Statistiques",desc:"35 000/an."},
    {id:"psy_020",titre:"Morts",cat:"PSY",sousCat:"Statistiques",desc:"500/an."}
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

// ---- STRUCTURE DU MENU 7 CATEGORIES ----
var MENU_STRUCTURE = [
    {
        id: "signalisation",
        label: "Signalisation & Panneaux",
        icon: "🚦",
        color: "var(--blue)",
        description: "Tous les panneaux du code belge : danger, priorite, interdiction, obligation, stationnement, indication, panonceaux, travaux et service.",
        subCategories: [
            { id: "A", label: "Danger", count: 29 },
            { id: "B", label: "Priorite", count: 6 },
            { id: "C", label: "Interdiction", count: 15 },
            { id: "D", label: "Obligation", count: 4 },
            { id: "E", label: "Stationnement", count: 3 },
            { id: "F", label: "Indication", count: 18 },
            { id: "X", label: "Panonceaux", count: 10 },
            { id: "T", label: "Travaux", count:             { id: "T", label: "Travaux", count: 4 },
            { id: "S", label: "Service", count: 9 }
        ],
        totalCount: 98,
        data: PANNEAUX
    },
    {
        id: "mecanique",
        label: "Mecanique & Technologie",
        icon: "🔧",
        color: "var(--dark)",
        description: "Moteur, freins, direction, suspension, electrique, pneumatiques, equipements.",
        subCategories: [
            { id: "MECA", label: "Moteur & Systemes", count: 28 },
            { id: "MECA_FREIN", label: "Systeme de freinage", count: 11 },
            { id: "MECA_DIR", label: "Direction & Suspension", count: 9 },
            { id: "MECA_ELEC", label: "Electrique & Eclairage", count: 12 },
            { id: "PNEU", label: "Pneumatiques & Jantes", count: 40 },
            { id: "EQ", label: "Equipements & Accessoires", count: 20 }
        ],
        totalCount: 120,
        data: [].concat(MECANIQUE_MOTEUR, PNEUMATIQUES, EQUIPEMENTS)
    },
    {
        id: "conduite",
        label: "Conduite & Conditions",
        icon: "🌡️",
        color: "var(--teal)",
        description: "Conduite hivernale, estivale, en montagne, conditions extremes et ecologie.",
        subCategories: [
            { id: "SAI_HIVER", label: "Conduite hivernale", count: 8 },
            { id: "SAI_ETE", label: "Conduite estivale", count: 6 },
            { id: "SAI_MONT", label: "Conduite en montagne", count: 5 },
            { id: "CND_EXT", label: "Conditions extremes", count: 15 },
            { id: "SAI_ECO", label: "Ecologie & Environnement", count: 11 }
        ],
        totalCount: 45,
        data: [].concat(SAISONS_ENVIRONNEMENT, CONDITIONS_EXTREMES)
    },
    {
        id: "securite",
        label: "Securite & Secours",
        icon: "🚑",
        color: "var(--red)",
        description: "Gestes de premiers secours, PLS, massage cardiaque, balisage, equipements obligatoires.",
        subCategories: [
            { id: "SEC_GESTES", label: "Gestes de premiers secours", count: 10 },
            { id: "SEC_BALISAGE", label: "Balisage & Signalisation d'urgence", count: 6 },
            { id: "SEC_EQUIP", label: "Equipements obligatoires", count: 9 }
        ],
        totalCount: 25,
        data: SECOURS_URGENCE
    },
    {
        id: "legal",
        label: "Regles & Legal",
        icon: "⚖️",
        color: "var(--purple)",
        description: "Regles d'or, pieges, usagers vulnerables, infractions, permis, assurance, controle technique.",
        subCategories: [
            { id: "LEG_REGLES", label: "Regles d'or & Priorites", count: 12 },
            { id: "LEG_PIEGES", label: "Pieges & Zones grises", count: 10 },
            { id: "LEG_USAGERS", label: "Usagers & Manoeuvres", count: 10 },
            { id: "LEG_INFRACT", label: "Infractions & Amendes", count: 27 },
            { id: "LEG_DOCS", label: "Documents & Permis", count: 12 },
            { id: "LEG_ASSUR", label: "Assurance & Controle technique", count: 8 }
        ],
        totalCount: 79,
        data: [].concat(RULES, PIEGES_ROUTES, USAGERS_MANOEUVRES, INFRACTIONS, LEGAL_ADMIN)
    },
    {
        id: "vehicules",
        label: "Vehicules Specifiques",
        icon: "🚗",
        color: "var(--amber)",
        description: "Motos, cyclomoteurs, poids lourds, autocars, remorques et attelages.",
        subCategories: [
            { id: "VEH_MOTO", label: "Motos & Cyclomoteurs", count: 9 },
            { id: "VEH_PL", label: "Poids lourds & Autocars", count: 8 },
            { id: "VEH_REM", label: "Remorques & Attelages", count: 6 }
        ],
        totalCount: 23,
        data: VEHICULES_SPECIFIQUES
    },
    {
        id: "psychologie",
        label: "Psychologie & Statistiques",
        icon: "📊",
        color: "var(--green)",
        description: "Psychologie de la conduite, fatigue, stress, distraction, statistiques du permis belge.",
        subCategories: [
            { id: "PSY_CHOLOGIE", label: "Psychologie de la conduite", count: 10 },
            { id: "PSY_STATS", label: "Statistiques & Chiffres cles", count: 10 }
        ],
        totalCount: 20,
        data: PSYCHOLOGIE_STATS
    }
];

// =========================================================
// STOCKAGE & ETAT
// =========================================================

var DEFAULT_APP_DATA = {
    favorites: [],
    stats: { sessions: 0, correct: 0, total: 0 },
    mistakes: {},
    theme: "light",
    streak: 0
};

var appData = JSON.parse(JSON.stringify(DEFAULT_APP_DATA));

async function loadAppData() {
    try {
        if (window.storage && typeof window.storage.get === "function") {
            var result = await window.storage.get("app-state", false);
            if (result && typeof result.value === "string") {
                var parsed = JSON.parse(result.value);
                appData = {
                    ...DEFAULT_APP_DATA,
                    ...parsed,
                    stats: { ...DEFAULT_APP_DATA.stats, ...(parsed.stats || {}) }
                };
            }
        }
    } catch (e) {
        console.warn("Impossible de charger les donnees:", e);
    }
}

async function saveAppData() {
    try {
        if (window.storage && typeof window.storage.set === "function") {
            await window.storage.set("app-state", JSON.stringify(appData), false);
        }
    } catch (e) {
        console.warn("Echec de la sauvegarde:", e);
    }
}

function favorites() { return appData.favorites; }
function stats() { return appData.stats; }
function mistakes() { return appData.mistakes; }

var state = {
    categories: ["A", "B", "C", "D", "E", "F", "MECA", "PNEU", "SAI", "SEC", "LEG", "EQ", "MAR", "CND", "VEH", "PSY"],
    questionCount: 15,
    timer: false,
    questions: [],
    index: 0,
    score: 0,
    answered: false,
    options: [],
    errors: [],
    categoryStats: {},
    review: false,
    timerId: null,
    seconds: 15,
    isOfficialExam: false
};

var currentMenuCategory = null;
var currentSousCategorie = null;

function $(id) { return document.getElementById(id); }

function escapeHTML(value) {
    return String(value || "").replace(/[&<>"']/g, function(char) {
        var map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" };
        return map[char];
    });
}

function animateCount(element, from, to, suffix, duration) {
    duration = duration || 550;
    if (!element) return;
    if (from === to) { element.textContent = to + suffix; return; }
    var start = performance.now();
    function tick(now) {
        var progress = Math.min(1, (now - start) / duration);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = Math.round(from + (to - from) * eased);
        element.textContent = value + suffix;
        if (progress < 1) { requestAnimationFrame(tick); }
    }
    requestAnimationFrame(tick);
}

function shuffle(array) {
    var copy = array.slice();
    for (var i = copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    return copy;
}

// =========================================================
// FONCTIONS DE NAVIGATION
// =========================================================

function hideViews() {
    var ids = ["home", "menu", "categoriePage", "sousCategoriePage", "quiz", "repo", "rules",
        "mecanique", "pneumatiques", "saisons", "secours", "legal", "equipements",
        "marquages", "conditions", "vehicules", "psychologie", "infractions", "piegesRoutes",
        "usagersManoeuvres"
    ];
    for (var i = 0; i < ids.length; i++) {
        if ($(ids[i])) $(ids[i]).classList.add("hidden");
    }
}

function goHome() {
    clearInterval(state.timerId);
    hideViews();
    if ($("home")) $("home").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "none";
    updateHomeStats();
}

function updateHomeStats() {
    var total = stats().total;
    var correct = stats().correct;
    var percentage = total > 0 ? Math.round(100 * correct / total) : 0;

    var prevSessions = Number($("statSessions")?.textContent) || 0;
    var prevQuestions = Number($("statQuestions")?.textContent) || 0;
    var prevFavs = Number($("statFavs")?.textContent) || 0;
    var prevSuccess = Number(($("statSuccess")?.textContent || "0").replace("%", "")) || 0;

    if ($("statSessions")) animateCount($("statSessions"), prevSessions, stats().sessions, "");
    if ($("statSuccess")) animateCount($("statSuccess"), prevSuccess, percentage, "%");
    if ($("statFavs")) animateCount($("statFavs"), prevFavs, favorites().length, "");
    if ($("statQuestions")) animateCount($("statQuestions"), prevQuestions, total, "");

    if ($("progressPercent")) $("progressPercent").textContent = percentage + "%";
    if ($("progressBar")) $("progressBar").style.width = percentage + "%";

    if ($("progressText")) {
        $("progressText").textContent = total > 0 ? correct + " bonne(s) reponse(s) sur " + total : "Aucune session";
    }
    if ($("reviewCount")) {
        var set = new Set([...favorites(), ...Object.keys(mistakes())]);
        $("reviewCount").textContent = set.size;
    }
    if ($("streak")) $("streak").textContent = appData.streak;
}

async function toggleTheme() {
    document.body.classList.toggle("dark");
    appData.theme = document.body.classList.contains("dark") ? "dark" : "light";
    if ($("themeButton")) $("themeButton").textContent = appData.theme === "dark" ? "🌙" : "☀";
    await saveAppData();
}

function applyTheme() {
    if (appData.theme === "dark") {
        document.body.classList.add("dark");
        if ($("themeButton")) $("themeButton").textContent = "🌙";
    }
}

// =========================================================
// FONCTIONS DU MENU 7 CATEGORIES
// =========================================================

function showMenu() {
    hideViews();
    if ($("menu")) $("menu").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderMenu();
}

function renderMenu() {
    var grid = document.getElementById("menuGrid");
    if (!grid) return;
    grid.innerHTML = "";

    for (var i = 0; i < MENU_STRUCTURE.length; i++) {
        var cat = MENU_STRUCTURE[i];
        var card = document.createElement("div");
        card.className = "stat";
        card.style.cursor = "pointer";
        card.style.padding = "18px";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.alignItems = "flex-start";
        card.style.gap = "8px";
        card.style.borderLeft = "4px solid " + cat.color;
        card.onclick = (function(c) {
            return function() { showCategorie(c.id); };
        })(cat);

        var subLabels = "";
        for (var j = 0; j < cat.subCategories.length; j++) {
            subLabels += '<span style="font-size: 10px; background: var(--soft); padding: 2px 8px; border-radius: 10px;">' + cat.subCategories[j].label + ' (' + cat.subCategories[j].count + ')</span>';
        }

        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; width: 100%;">
                <span style="font-size: 28px;">${cat.icon}</span>
                <div>
                    <b style="font-size: 17px;">${cat.label}</b>
                    <span style="font-size: 12px; color: var(--muted); display: block;">${cat.totalCount} elements • ${cat.subCategories.length} sous-categories</span>
                </div>
            </div>
            <p style="font-size: 12px; color: var(--muted); margin: 0; line-height: 1.4;">${cat.description}</p>
            <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 4px;">
                ${subLabels}
            </div>
        `;
        grid.appendChild(card);
    }
}

function showCategorie(categoryId) {
    var cat = MENU_STRUCTURE.find(function(c) { return c.id === categoryId; });
    if (!cat) return;
    currentMenuCategory = cat;
    currentSousCategorie = null;

    hideViews();
    if ($("categoriePage")) $("categoriePage").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";

    document.getElementById("categorieTitle").textContent = cat.icon + " " + cat.label;
    document.getElementById("categorieDesc").textContent = cat.description + " (" + cat.totalCount + " elements)";

    var grid = document.getElementById("sousCategorieGrid");
    grid.innerHTML = "";

    for (var i = 0; i < cat.subCategories.length; i++) {
        var sc = cat.subCategories[i];
        var card = document.createElement("button");
        card.className = "practice";
        card.style.width = "100%";
        card.style.justifyContent = "space-between";
        card.onclick = (function(sc) {
            return function() { showSousCategorie(sc.id); };
        })(sc);

        card.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: flex-start;">
                <b>${sc.label}</b>
                <span style="font-size: 11px; color: var(--muted);">${sc.count} elements</span>
            </div>
            <span class="arrow">→</span>
        `;
        grid.appendChild(card);
    }
}

function showCategorieBack() {
    if (currentMenuCategory) {
        showCategorie(currentMenuCategory.id);
    } else {
        showMenu();
    }
}

function showSousCategorie(sousCatId) {
    currentSousCategorie = sousCatId;
    var cat = currentMenuCategory;
    var sc = cat.subCategories.find(function(s) { return s.id === sousCatId; });
    if (!sc) return;

    hideViews();
    if ($("sousCategoriePage")) $("sousCategoriePage").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";

    document.getElementById("sousCategorieTitle").textContent = cat.icon + " " + sc.label;
    document.getElementById("sousCategorieDesc").textContent = sc.count + " elements • " + cat.label;
    renderSousCategorie();
}

function renderSousCategorie() {
    var cat = currentMenuCategory;
    var sc = cat.subCategories.find(function(s) { return s.id === currentSousCategorie; });
    if (!sc) return;

    var query = document.getElementById("sousCategorieSearch")?.value?.toLowerCase() || "";
    var list = document.getElementById("sousCategorieList");
    if (!list) return;

    var data = cat.data || [];
    var results = data.filter(function(item) {
        var match = false;
        if (item.sousCat) {
            // Verifier si la sous-categorie correspond
            var catKeys = Object.keys(CATEGORIES);
            for (var i = 0; i < catKeys.length; i++) {
                var key = catKeys[i];
                if (CATEGORIES[key].label === sc.label || key === sc.id) {
                    if (item.cat === key) match = true;
                }
            }
            // Verifier par le nom de la sous-categorie
            if (item.sousCat === sc.label) match = true;
        }
        // Si l'element a un id qui commence par sc.id
        if (item.id && item.id.indexOf(sc.id) === 0) match = true;
        // Si l'element a une categorie qui correspond
        if (item.cat === sc.id) match = true;
        // Si pas de sousCat, on garde
        if (!item.sousCat && !item.id) match = true;
        return match;
    });

    // Si aucun resultat, prendre tous les elements de la categorie
    if (results.length === 0) {
        results = data;
    }

    // Appliquer la recherche
    if (query) {
        results = results.filter(function(item) {
            var searchStr = (item.titre || item.nom || "") + " " + (item.desc || "") + " " + (item.sousCat || "");
            return searchStr.toLowerCase().indexOf(query) >= 0;
        });
    }

    list.innerHTML = "";
    list.classList.remove("fade-list");
    void list.offsetWidth;
    list.classList.add("fade-list");

    if (results.length) {
        var html = "";
        for (var i = 0; i < results.length; i++) {
            var item = results[i];
            var title = item.titre || item.nom || "";
            var desc = item.desc || "";
            var code = item.code || item.id || "";
            var badge = item.sousCat || CATEGORIES[item.cat]?.label || "";
            var color = CATEGORIES[item.cat]?.color || "var(--blue)";

            html += `
                <div class="rule-card" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px;">
                    ${code ? '<span style="font-weight: 900; font-size: 12px; color: var(--muted); min-width: 50px;">' + escapeHTML(code) + '</span>' : ''}
                    <div style="flex: 1;">
                        <b style="font-size: 14px;">${escapeHTML(title)}</b>
                        <p style="font-size: 12px; margin: 3px 0 0; color: var(--muted);">${escapeHTML(desc)}</p>
                    </div>
                    ${badge ? '<span class="badge" style="background:' + color + '; font-size: 9px;">' + escapeHTML(badge) + '</span>' : ''}
                </div>
            `;
        }
        list.innerHTML = html;
    } else {
        list.innerHTML = '<div class="empty">Aucun element ne correspond.</div>';
    }
}

function quizCategorie() {
    var cat = currentMenuCategory;
    var pool = cat.data || [];
    if (pool.length < 2) return;
    state.questions = shuffle(pool).slice(0, Math.min(15, pool.length));
    state.timer = false;
    state.isOfficialExam = false;
    hideViews();
    if ($("quiz")) $("quiz").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    if ($("quizConfig")) $("quizConfig").classList.add("hidden");
    if ($("quizSummary")) $("quizSummary").classList.add("hidden");
    if ($("quizRunning")) $("quizRunning").classList.remove("hidden");
    beginSession(false);
}

function examenCategorie() {
    var cat = currentMenuCategory;
    var pool = cat.data || [];
    var allPool = pool.slice();
    while (allPool.length < 50) {
        allPool = allPool.concat(pool);
    }
    state.questions = shuffle(allPool).slice(0, 50);
    state.timer = true;
    state.isOfficialExam = true;
    hideViews();
    if ($("quiz")) $("quiz").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    if ($("quizConfig")) $("quizConfig").classList.add("hidden");
    if ($("quizSummary")) $("quizSummary").classList.add("hidden");
    if ($("quizRunning")) $("quizRunning").classList.remove("hidden");
    beginSession(false);
}

// =========================================================
// FONCTIONS DES VUES SECONDAIRES
// =========================================================

function showQuiz() { clearInterval(state.timerId);
    hideViews();
    state.isOfficialExam = false;
    if ($("quiz")) $("quiz").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    configureQuiz(); }

function showRepo() { hideViews();
    if ($("repo")) $("repo").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderRepository(); }

function showRules() { hideViews();
    if ($("rules")) $("rules").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderRules(); }

function showMecanique() { hideViews();
    if ($("mecanique")) $("mecanique").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderMecanique(); }

function showPneumatiques() { hideViews();
    if ($("pneumatiques")) $("pneumatiques").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderPneumatiques(); }

function showSaisons() { hideViews();
    if ($("saisons")) $("saisons").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderSaisons(); }

function showSecours() { hideViews();
    if ($("secours")) $("secours").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderSecours(); }

function showLegal() { hideViews();
    if ($("legal")) $("legal").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderLegal(); }

function showEquipements() { hideViews();
    if ($("equipements")) $("equipements").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderEquipements(); }

function showMarquages() { hideViews();
    if ($("marquages")) $("marquages").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderMarquages(); }

function showConditions() { hideViews();
    if ($("conditions")) $("conditions").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderConditions(); }

function showVehicules() { hideViews();
    if ($("vehicules")) $("vehicules").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderVehicules(); }

function showPsychologie() { hideViews();
    if ($("psychologie")) $("psychologie").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderPsychologie(); }

function showInfractions() { hideViews();
    if ($("infractions")) $("infractions").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderInfractions(); }

function showPiegesRoutes() { hideViews();
    if ($("piegesRoutes")) $("piegesRoutes").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderPiegesRoutes(); }

function showUsagersManoeuvres() { hideViews();
    if ($("usagersManoeuvres")) $("usagersManoeuvres").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderUsagersManoeuvres(); }

// =========================================================
// FONCTIONS DE RENDU GENERIQUES
// =========================================================

function renderGeneric(list, searchId, listId, titleKey, descKey, catKey) {
    var query = $(searchId) ? $(searchId).value.trim().toLowerCase() : "";
    var results = list.filter(function(item) {
        if (!query) return true;
        var searchStr = (item.titre || item.nom || "") + " " + (item.desc || "") + " " + (item.sousCat || "") + " " + (CATEGORIES[item.cat]?.label || "");
        return searchStr.toLowerCase().indexOf(query) >= 0;
    });
    var listEl = $(listId);
    if (!listEl) return;
    listEl.innerHTML = "";
    listEl.classList.remove("fade-list");
    void listEl.offsetWidth;
    listEl.classList.add("fade-list");

    if (results.length) {
        var html = "";
        for (var i = 0; i < results.length; i++) {
            var item = results[i];
            var title = item.titre || item.nom || "";
            var desc = item.desc || "";
            var badge = item.sousCat || CATEGORIES[item.cat]?.label || "";
            var color = CATEGORIES[item.cat]?.color || "var(--blue)";
            var code = item.code || item.id || "";
            html += `
                <div class="rule-card" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px;">
                    ${code ? '<span style="font-weight: 900; font-size: 12px; color: var(--muted); min-width: 50px;">' + escapeHTML(code) + '</span>' : ''}
                    <div style="flex: 1;">
                        <b style="font-size: 14px;">${escapeHTML(title)}</b>
                        <p style="font-size: 12px; margin: 3px 0 0; color: var(--muted);">${escapeHTML(desc)}</p>
                    </div>
                    ${badge ? '<span class="badge" style="background:' + color + '; font-size: 9px;">' + escapeHTML(badge) + '</span>' : ''}
                </div>
            `;
        }
        listEl.innerHTML = html;
    } else {
        listEl.innerHTML = '<div class="empty">Aucun element ne correspond.</div>';
    }
}

// ---- FONCTIONS DE RENDU SPECIFIQUES ----
function renderRepository() { renderGeneric(PANNEAUX, "repoSearch", "repoList", "nom", "desc", "cat"); }
function renderRules() { renderGeneric(RULES, "ruleSearch", "ruleList", "titre", "desc", "cat"); }
function renderMecanique() { renderGeneric(MECANIQUE_MOTEUR, "mecaSearch", "mecaList", "titre", "desc", "cat"); }
function renderPneumatiques() { renderGeneric(PNEUMATIQUES, "pneuSearch", "pneuList", "titre", "desc", "cat"); }
function renderSaisons() { renderGeneric(SAISONS_ENVIRONNEMENT, "saisonSearch", "saisonList", "titre", "desc", "cat"); }
function renderSecours() { renderGeneric(SECOURS_URGENCE, "secoursSearch", "secoursList", "titre", "desc", "cat"); }
function renderLegal() { renderGeneric(LEGAL_ADMIN, "legalSearch", "legalList", "titre", "desc", "cat"); }
function renderEquipements() { renderGeneric(EQUIPEMENTS, "equipSearch", "equipList", "titre", "desc", "cat"); }
function renderMarquages() { renderGeneric(MARQUAGES_SOL, "marquageSearch", "marquageList", "titre", "desc", "cat"); }
function renderConditions() { renderGeneric(CONDITIONS_EXTREMES, "conditionSearch", "conditionList", "titre", "desc", "cat"); }
function renderVehicules() { renderGeneric(VEHICULES_SPECIFIQUES, "vehiculeSearch", "vehiculeList", "titre", "desc", "cat"); }
function renderPsychologie() { renderGeneric(PSYCHOLOGIE_STATS, "psychoSearch", "psychoList", "titre", "desc", "cat"); }
function renderInfractions() { renderGeneric(INFRACTIONS, "infractionSearch", "infractionList", "titre", "desc", "degre"); }
function renderPiegesRoutes() { renderGeneric(PIEGES_ROUTES, "piegeSearch", "piegeList", "titre", "desc", "cat"); }
function renderUsagersManoeuvres() { renderGeneric(USAGERS_MANOEUVRES, "usagerSearch", "usagerList", "titre", "desc", "cat"); }

// =========================================================
// QUIZ FUNCTIONS
// =========================================================

function renderCategorySelector() {
    var grid = $("categoryGrid");
    if (!grid) return;
    grid.innerHTML = "";
    var keys = Object.keys(CATEGORIES);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var category = CATEGORIES[key];
        var count = ALL_KNOWLEDGE.filter(function(p) { return p.cat === key; }).length;
        var button = document.createElement("button");
        button.type = "button";
        button.className = "cat-chip" + (state.categories.indexOf(key) >= 0 ? "" : " off");
        button.innerHTML = '<span class="dot" style="background:' + category.color + '"></span><span><b>' + category.label + '</b><small>' + count + ' elements</small></span>';
        button.onclick = function(k) {
            return function() {
                if (state.categories.indexOf(k) >= 0) {
                    if (state.categories.length === 1) return;
                    state.categories = state.categories.filter(function(c) { return c !== k; });
                } else {
                    state.categories.push(k);
                }
                renderCategorySelector();
            };
        }(key);
        grid.appendChild(button);
    }
    updateQuestionBounds();
}

function updateQuestionBounds() {
    var available = ALL_KNOWLEDGE.filter(function(p) { return state.categories.indexOf(p.cat) >= 0; }).length;
    var slider = $("questionCount");
    if (!slider) return;
    slider.max = Math.max(1, available);
    if (Number(slider.value) > available) { slider.value = available; }
    state.questionCount = Math.max(1, Number(slider.value));
    if ($("questionCountValue")) $("questionCountValue").textContent = state.questionCount;
    if ($("quizWarning")) $("quizWarning").classList.toggle("hidden", available >= 2);
}

function configureQuiz() {
    clearInterval(state.timerId);
    state.isOfficialExam = false;
    if ($("quizRunning")) $("quizRunning").classList.add("hidden");
    if ($("quizSummary")) $("quizSummary").classList.add("hidden");
    if ($("quizConfig")) $("quizConfig").classList.remove("hidden");
    renderCategorySelector();
    updateHomeStats();
}

function startQuiz() {
    var pool = ALL_KNOWLEDGE.filter(function(p) { return state.categories.indexOf(p.cat) >= 0; });
    if (pool.length < 2) return;
    var timerCheckbox = document.getElementById("timerEnabled");
    state.timer = timerCheckbox ? timerCheckbox.checked : false;
    state.questions = shuffle(pool).slice(0, state.questionCount);
    beginSession(false);
}

function startOfficialExam() {
    clearInterval(state.timerId);
    hideViews();
    state.isOfficialExam = true;
    state.timer = true;
    var allPool = ALL_KNOWLEDGE.slice();
    while (allPool.length < 50) {
        allPool = allPool.concat(ALL_KNOWLEDGE);
    }
    state.questions = shuffle(allPool).slice(0, 50);
    if ($("quiz")) $("quiz").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    if ($("quizConfig")) $("quizConfig").classList.add("hidden");
    if ($("quizSummary")) $("quizSummary").classList.add("hidden");
    if ($("quizRunning")) $("quizRunning").classList.remove("hidden");
    beginSession(false);
}

function beginSession(review) {
    clearInterval(state.timerId);
    state.index = 0;
    state.score = 0;
    state.errors = [];
    state.categoryStats = {};
    state.review = review;
    state.answered = false;
    if ($("quizConfig")) $("quizConfig").classList.add("hidden");
    if ($("quizSummary")) $("quizSummary").classList.add("hidden");
    if ($("quizRunning")) $("quizRunning").classList.remove("hidden");
    renderQuestion();
}

function startReview() {
    var reviewMap = {};
    favorites().forEach(function(code) {
        var found = ALL_KNOWLEDGE.find(function(p) { return (p.code || p.id || p.titre) === code; });
        if (found) reviewMap[found.code || found.id || found.titre] = found;
    });
    var mistakesKeys = Object.keys(mistakes());
    mistakesKeys.forEach(function(code) {
        var found = ALL_KNOWLEDGE.find(function(p) { return (p.code || p.id || p.titre) === code; });
        if (found) reviewMap[found.code || found.id || found.titre] = found;
    });
    var list = shuffle(Object.values(reviewMap));
    if (!list.length) { showQuiz(); return; }
   
