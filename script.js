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
// DONNEES OFFICIELLES - PANNEAUX A
// =========================================================

// Donnees verifiees sur securotheque.wallonie.be (SPW) le 28/09/2026 par l'utilisateur
// (captures d'ecran des planches officielles A a F). Les panneaux-gabarits a nom de
// lieu variable (F15, F25-F43...) et les categories non confirmees dans la source
// (anciennes categories "S" et "X" inventees) ont ete retires plutot que devines.
var PANNEAUX_A = [
    {code:"A1a",nom:"Virage dangereux a gauche",cat:"A",pict:"curveLeft",desc:"Annonce un virage prononce vers la gauche."},
    {code:"A1b",nom:"Virage dangereux a droite",cat:"A",pict:"curveRight",desc:"Annonce un virage prononce vers la droite."},
    {code:"A1c",nom:"Succession de virages (premier a gauche)",cat:"A",pict:"doubleCurveLeft",desc:"Annonce plusieurs virages successifs, le premier a gauche."},
    {code:"A1d",nom:"Succession de virages (premier a droite)",cat:"A",pict:"doubleCurveRight",desc:"Annonce plusieurs virages successifs, le premier a droite."},
    {code:"A3",nom:"Descente dangereuse",cat:"A",pict:"slopeDown",desc:"Pente raide indiquee par un pourcentage sur le panneau. Utilisez le frein moteur."},
    {code:"A5",nom:"Montee a forte inclinaison",cat:"A",pict:"slopeUp",desc:"Forte cote indiquee par un pourcentage sur le panneau."},
    {code:"A7a",nom:"Chaussee retrecie (des deux cotes)",cat:"A",pict:"narrowBoth",desc:"Retrecissement de la route des deux cotes."},
    {code:"A7b",nom:"Chaussee retrecie (a droite)",cat:"A",pict:"narrowRight",desc:"Retrecissement de la route du cote droit."},
    {code:"A7c",nom:"Chaussee retrecie (a gauche)",cat:"A",pict:"narrowLeft",desc:"Retrecissement de la route du cote gauche."},
    {code:"A9",nom:"Pont mobile",cat:"A",pict:"bridge",desc:"Approche d'un pont levant ou tournant."},
    {code:"A11",nom:"Debouche sur un quai ou une berge",cat:"A",pict:"quay",desc:"Risque de chute dans l'eau si la manoeuvre est mal executee."},
    {code:"A13",nom:"Cassis",cat:"A",pict:"dip",desc:"Depression brusque de la chaussee (creux)."},
    {code:"A14",nom:"Dos d'ane",cat:"A",pict:"bump",desc:"Bosse ou ralentisseur sur la chaussee."},
    {code:"A15",nom:"Chaussee glissante",cat:"A",pict:"slippery",desc:"Risque accru de glissade (pluie, verglas, gravillons)."},
    {code:"A17",nom:"Projection de gravillons",cat:"A",pict:"gravel",desc:"Risque de projection de pierres ou gravillons."},
    {code:"A19",nom:"Chutes de pierres",cat:"A",pict:"fallingRocks",desc:"Risque d'eboulement ou de chutes de pierres."},
    {code:"A21",nom:"Passage pour pietons",cat:"A",pict:"pedestrian",desc:"Annonce un passage pour pietons a proximite."},
    {code:"A23",nom:"Endroit frequente par des enfants",cat:"A",pict:"children",desc:"Presence probable d'ecoles ou d'aires de jeux."},
    {code:"A25",nom:"Traversee de cyclistes",cat:"A",pict:"bicycle",desc:"Debouche de cyclistes ou piste cyclable qui traverse."},
    {code:"A27",nom:"Passage d'animaux sauvages",cat:"A",pict:"deer",desc:"Traversee possible d'animaux sauvages (cerfs, sangliers, etc.)."},
    {code:"A29",nom:"Passage d'animaux domestiques",cat:"A",pict:"domesticAnimal",desc:"Traversee possible de betail ou d'animaux domestiques."},
    {code:"A31",nom:"Travaux",cat:"A",pict:"workman",desc:"Presence d'un chantier sur ou le long de la voie publique."},
    {code:"A33",nom:"Feux de circulation",cat:"A",pict:"trafficLight",desc:"Annonce des feux tricolores en amont."},
    {code:"A35",nom:"Aeronefs volant a basse altitude",cat:"A",pict:"airplane",desc:"Endroit ou des avions peuvent voler a tres basse altitude."},
    {code:"A37",nom:"Vent lateral",cat:"A",pict:"crosswind",desc:"Risque de vent lateral brusque (pont, sortie de foret)."},
    {code:"A41",nom:"Annonce d'un passage a niveau",cat:"A",pict:"levelCrossingAhead",desc:"Signal avance annoncant un passage a niveau plus loin."},
    {code:"A43",nom:"Passage a niveau sans barrieres",cat:"A",pict:"trainCrossing",desc:"Traversee de voie(s) ferree(s) sans barrieres ni demi-barrieres."},
    {code:"A45",nom:"Signalisation avancee de passage a niveau",cat:"A",pict:"levelCrossingLattice",desc:"Marque le compte a rebours vers un passage a niveau."},
    {code:"A47",nom:"Passage a niveau muni de barrieres",cat:"A",pict:"trainGate",desc:"Traversee de voie(s) ferree(s) equipee de barrieres ou demi-barrieres."},
    {code:"A51",nom:"Autres dangers",cat:"A",pict:"exclaim",desc:"Danger indetermine, souvent precise par un panonceau additionnel."}
];

// ---- PANNEAUX B (priorite) ----
var PANNEAUX_B = [
    {code:"B1",nom:"Cedez le passage",cat:"B",desc:"Triangle pointe vers le bas. Ceder le passage aux usagers de la voie abordee."},
    {code:"B3",nom:"Annonce d'un cedez-le-passage",cat:"B",panonceauText:"200 m",desc:"Previent qu'un signal B1 se trouve 200 m plus loin."},
    {code:"B5",nom:"Stop (Arret obligatoire)",cat:"B",desc:"Obligation de marquer l'arret complet avant la ligne d'effet."},
    {code:"B7",nom:"Annonce d'un stop",cat:"B",panonceauText:"STOP 150m",desc:"Previent qu'un signal B5 se trouve 150 m plus loin."},
    {code:"B9",nom:"Voie prioritaire",cat:"B",pict:"priorityRoad",desc:"Losange jaune : vous etes prioritaire sur cette route aux intersections."},
    {code:"B11",nom:"Fin de voie prioritaire",cat:"B",pict:"priorityRoadEnd",desc:"Le statut de route prioritaire prend fin a cet endroit."},
    {code:"B13",nom:"Annonce de la fin d'une voie prioritaire",cat:"B",panonceauText:"250 m",desc:"Previent qu'un signal B11 se trouve 250 m plus loin."},
    {code:"B15",nom:"Croisement avec une voie sans priorite",cat:"B",pict:"flagTriangle",desc:"Annonce un croisement ou vous conservez la priorite sur les voies secondaires."},
    {code:"B17",nom:"Priorite de droite",cat:"B",pict:"priorityRight",desc:"Rappelle la regle generale : ceder le passage aux vehicules venant de droite."},
    {code:"B19",nom:"Cedez le passage au trafic venant en sens inverse",cat:"B",pict:"circleUpDown",desc:"Passage etroit : laissez passer les vehicules venant d'en face en premier."},
    {code:"B21",nom:"Priorite sur le trafic venant en sens inverse",cat:"B",pict:"rectUpDown",desc:"Passage etroit : vous avez la priorite sur les vehicules venant d'en face."},
    {code:"B22",nom:"Croisement avec une piste cyclable (danger a gauche)",cat:"B",pict:"bicycle",desc:"Des cyclistes peuvent deboucher depuis la gauche."},
    {code:"B23",nom:"Croisement avec une piste cyclable (danger a droite)",cat:"B",pict:"bicycle",desc:"Des cyclistes peuvent deboucher depuis la droite."}
];

// ---- PANNEAUX C (interdiction) ----
var PANNEAUX_C = [
    {code:"C1",nom:"Sens interdit",cat:"C",desc:"Interdiction de s'engager dans cette voie, dans ce sens."},
    {code:"C3",nom:"Acces interdit dans les deux sens",cat:"C",desc:"Interdiction a tout conducteur de s'engager, dans les deux sens."},
    {code:"C5",nom:"Acces interdit aux vehicules automobiles",cat:"C",pict:"car",desc:"Interdit aux voitures et camions."},
    {code:"C7",nom:"Acces interdit aux motocyclettes",cat:"C",pict:"motorcycle",desc:"Interdit aux motos."},
    {code:"C9",nom:"Acces interdit aux cyclomoteurs",cat:"C",pict:"bicycle",desc:"Interdit aux cyclomoteurs (velos a moteur auxiliaire)."},
    {code:"C11",nom:"Acces interdit aux cyclistes",cat:"C",pict:"bicycle",desc:"Interdit aux velos."},
    {code:"C19",nom:"Acces interdit aux pietons",cat:"C",pict:"pedestrian",desc:"Interdit aux pietons."},
    {code:"C22",nom:"Acces interdit aux autobus",cat:"C",pict:"bus",desc:"Interdit aux autobus et autocars."},
    {code:"C23",nom:"Acces interdit aux vehicules de transport de choses",cat:"C",pict:"truck",desc:"Interdit aux camions et vehicules affectes au transport de marchandises."},
    {code:"C25",nom:"Longueur maximale autorisee",cat:"C",panonceauText:"⟷ 13 m",desc:"Interdit aux vehicules dont la longueur depasse celle indiquee."},
    {code:"C27",nom:"Largeur maximale autorisee",cat:"C",panonceauText:"⟷ 2,50m",desc:"Interdit aux vehicules dont la largeur depasse celle indiquee."},
    {code:"C29",nom:"Hauteur maximale autorisee",cat:"C",panonceauText:"↕ 3,50m",desc:"Interdit aux vehicules dont la hauteur depasse celle indiquee."},
    {code:"C31a",nom:"Interdiction de tourner a gauche",cat:"C",pict:"noTurnLeft",desc:"Interdiction de tourner a gauche a la prochaine intersection."},
    {code:"C31b",nom:"Interdiction de tourner a droite",cat:"C",pict:"noTurnRight",desc:"Interdiction de tourner a droite a la prochaine intersection."},
    {code:"C33",nom:"Interdiction de faire demi-tour",cat:"C",pict:"noUTurn",desc:"Interdiction de faire demi-tour."},
    {code:"C35",nom:"Interdiction de depasser",cat:"C",pict:"noOvertake",desc:"Interdiction de depasser les vehicules a moteur autres que les motos a deux roues."},
    {code:"C39",nom:"Interdiction de depasser pour les vehicules de transport de choses",cat:"C",pict:"noOvertakeTruck",desc:"Interdiction pour les vehicules de transport de choses de plus de 3,5t de depasser."},
    {code:"C43 30",nom:"Vitesse limitee a 30 km/h",cat:"C",desc:"Vitesse maximale autorisee de 30 km/h.","num":"30"},
    {code:"C43 50",nom:"Vitesse limitee a 50 km/h",cat:"C",desc:"Vitesse maximale autorisee de 50 km/h.","num":"50"},
    {code:"C43 70",nom:"Vitesse limitee a 70 km/h",cat:"C",desc:"Vitesse maximale autorisee de 70 km/h.","num":"70"},
    {code:"C43 90",nom:"Vitesse limitee a 90 km/h",cat:"C",desc:"Vitesse maximale autorisee de 90 km/h.","num":"90"},
    {code:"C45",nom:"Fin de toutes les interdictions locales",cat:"C",desc:"Fin des limitations de vitesse ou de depassement imposees localement."},
    {code:"C47",nom:"Peage",cat:"C",panonceauText:"PEAGE",desc:"Annonce un poste de peage."}
];

// ---- PANNEAUX D (obligation) ----
var PANNEAUX_D = [
    {code:"D1a",nom:"Direction obligatoire : tout droit",cat:"D",pict:"arrowUp",desc:"Obligation de continuer tout droit."},
    {code:"D1b",nom:"Direction obligatoire : a gauche",cat:"D",pict:"arrowLeft",desc:"Obligation de tourner a gauche."},
    {code:"D1c",nom:"Direction obligatoire : en biais a gauche",cat:"D",pict:"arrowDiagLeft",desc:"Obligation de prendre la direction oblique indiquee vers la gauche."},
    {code:"D1d",nom:"Direction obligatoire : en biais a droite",cat:"D",pict:"arrowDiagRight",desc:"Obligation de prendre la direction oblique indiquee vers la droite."},
    {code:"D1e",nom:"Contournement obligatoire par la gauche",cat:"D",pict:"curveSimpleLeft",desc:"Obligation de contourner l'obstacle par la gauche."},
    {code:"D1f",nom:"Contournement obligatoire par la droite",cat:"D",pict:"curveSimpleRight",desc:"Obligation de contourner l'obstacle par la droite."},
    {code:"D3a",nom:"Direction obligatoire : a gauche ou tout droit",cat:"D",pict:"doubleArrowLeft",desc:"A la prochaine intersection, obligation d'aller a gauche ou tout droit."},
    {code:"D3b",nom:"Direction obligatoire : a droite ou tout droit",cat:"D",pict:"doubleArrowRight",desc:"A la prochaine intersection, obligation d'aller a droite ou tout droit."},
    {code:"D5",nom:"Sens giratoire obligatoire",cat:"D",pict:"roundabout",desc:"Annonce un giratoire ou la circulation se fait dans le sens indique."},
    {code:"D7",nom:"Piste cyclable obligatoire",cat:"D",pict:"bicycleWhite",desc:"Voie exclusivement reservee aux cyclistes, obligatoire pour eux."},
    {code:"D9a",nom:"Chemin obligatoire pour pietons et cyclistes (voies non separees)",cat:"D",pict:"splitPathA",desc:"Chemin commun obligatoire pour pietons et cyclistes, sans separation."},
    {code:"D9b",nom:"Chemin obligatoire pour pietons et cyclistes (voies separees)",cat:"D",pict:"splitPathB",desc:"Chemin obligatoire pour pietons et cyclistes, avec voies separees."},
    {code:"D10",nom:"Chemin obligatoire pour pietons et cyclistes",cat:"D",pict:"bikePedCombo",desc:"Chemin obligatoire partage entre pietons et cyclistes."},
    {code:"D11",nom:"Chemin obligatoire pour pietons",cat:"D",pict:"pedestrianWhite",desc:"Voie reservee et obligatoire exclusivement pour les pietons."},
    {code:"D13",nom:"Chemin obligatoire pour cavaliers",cat:"D",pict:"horseWhite",desc:"Voie reservee et obligatoire exclusivement pour les cavaliers."}
];

// ---- PANNEAUX E (arret et stationnement) ----
var PANNEAUX_E = [
    {code:"E1",nom:"Stationnement interdit",cat:"E",desc:"Interdiction de stationner du cote du panneau. L'arret reste autorise."},
    {code:"E3",nom:"Arret et stationnement interdits",cat:"E",desc:"Interdiction absolue de s'arreter et de stationner."},
    {code:"E5",nom:"Stationnement interdit du 1er au 15 du mois",cat:"E",panonceauText:"1-15",desc:"Stationnement alterne : interdit la premiere quinzaine du mois."},
    {code:"E7",nom:"Stationnement interdit du 16 a la fin du mois",cat:"E",panonceauText:"16-31",desc:"Stationnement alterne : interdit la seconde quinzaine du mois."},
    {code:"E9a",nom:"Parking",cat:"E",desc:"Indique un emplacement de stationnement autorise."},
    {code:"E9b",nom:"Parking pour voitures",cat:"E",pict:"car",desc:"Emplacement de stationnement reserve aux voitures."},
    {code:"E9c",nom:"Parking pour camions",cat:"E",pict:"truck",desc:"Emplacement de stationnement reserve aux camions."},
    {code:"E9d",nom:"Parking pour autobus",cat:"E",pict:"bus",desc:"Emplacement de stationnement reserve aux autobus et autocars."},
    {code:"E9h",nom:"Parking pour camping-cars",cat:"E",pict:"caravan",desc:"Emplacement de stationnement reserve aux camping-cars."},
    {code:"E9i",nom:"Parking pour motos et cyclomoteurs",cat:"E",pict:"motorcycle",desc:"Emplacement de stationnement reserve aux deux-roues motorises."}
];

// ---- PANNEAUX F (indication) ----
var PANNEAUX_F = [
    {code:"F1a",nom:"Debut d'agglomeration",cat:"F",pict:"town",desc:"Vitesse limitee par defaut a 50 km/h (30 km/h a Bruxelles), sauf indication contraire."},
    {code:"F3a",nom:"Fin d'agglomeration",cat:"F",pict:"townEnd",desc:"Les regles de circulation en agglomeration prennent fin."},
    {code:"F4a",nom:"Debut de zone 30",cat:"F",pict:"zone30",desc:"Entree d'une zone ou la vitesse est limitee a 30 km/h."},
    {code:"F4b",nom:"Fin de zone 30",cat:"F",pict:"zone30End",desc:"Sortie de la zone 30."},
    {code:"F5",nom:"Autoroute",cat:"F",pict:"highway",desc:"Debut d'autoroute (vitesse minimale 70, maximale 120 km/h)."},
    {code:"F7",nom:"Fin d'autoroute",cat:"F",pict:"highwayEnd",desc:"Fin du regime autoroutier."},
    {code:"F8",nom:"Annonce d'un tunnel",cat:"F",pict:"tunnel",desc:"Annonce l'approche d'un tunnel."},
    {code:"F9",nom:"Route pour automobiles",cat:"F",pict:"carRoad",desc:"Voie reservee aux vehicules automobiles."},
    {code:"F11",nom:"Fin de route pour automobiles",cat:"F",pict:"carRoadEnd",desc:"Fin de la voie reservee aux vehicules automobiles."},
    {code:"F12a",nom:"Zone residentielle ou zone de rencontre",cat:"F",pict:"residential",desc:"Pietons prioritaires sur toute la largeur de la voie publique. Vitesse max 20 km/h."},
    {code:"F12b",nom:"Fin de zone residentielle ou de rencontre",cat:"F",pict:"residentialEnd",desc:"Sortie de la zone residentielle ou de rencontre."},
    {code:"F14",nom:"Impasse",cat:"F",pict:"deadEnd",desc:"La voie ne mene nulle part (cul-de-sac)."},
    {code:"F17",nom:"Voie reservee aux bus",cat:"F",pict:"bus",desc:"Voie exclusivement reservee aux autobus et transports en commun."},
    {code:"F18",nom:"Voie reservee aux trams",cat:"F",pict:"tram",desc:"Voie exclusivement reservee aux trams."},
    {code:"F19",nom:"Sens unique",cat:"F",pict:"oneWay",desc:"Indique une rue a sens unique."},
    {code:"F21",nom:"Circulation dans les deux sens",cat:"F",pict:"twoWay",desc:"Annonce la fin d'une chaussee a sens unique : circulation a double sens."},
    {code:"F49",nom:"Indication d'un passage pour pietons",cat:"F",pict:"pedestrianWhite",desc:"Signale l'emplacement d'un passage pour pietons."},
    {code:"F50",nom:"Indication d'une traversee cyclable",cat:"F",pict:"bicycleWhite",desc:"Signale l'emplacement d'une traversee pour cyclistes."},
    {code:"F59a",nom:"Indication d'un parking",cat:"F",desc:"Signale la direction ou se trouve un parking."},
    {code:"F61",nom:"Telephone",cat:"F",pict:"phone",desc:"Signale la presence d'un telephone."},
    {code:"F62",nom:"Poste d'appel d'urgence (SOS)",cat:"F",pict:"phoneSos",desc:"Signale une borne d'appel d'urgence, frequente sur autoroute."},
    {code:"F63a",nom:"Station-service",cat:"F",pict:"fuel",desc:"Signale un poste de ravitaillement en carburant."},
    {code:"F63f",nom:"Borne de recharge electrique",cat:"F",pict:"evCharge",desc:"Signale une borne de recharge pour vehicule electrique."},
    {code:"F65",nom:"Hotel ou logement",cat:"F",pict:"bed",desc:"Signale un hebergement (hotel, gite)."},
    {code:"F67",nom:"Restaurant",cat:"F",pict:"forkKnife",desc:"Signale un restaurant."},
    {code:"F69",nom:"Debit de boissons ou snack-bar",cat:"F",pict:"cup",desc:"Signale un cafe ou snack-bar."},
    {code:"F71",nom:"Camping",cat:"F",pict:"tent",desc:"Signale un terrain de camping."},
    {code:"F73",nom:"Caravaning",cat:"F",pict:"caravan",desc:"Signale un terrain reserve aux caravanes et camping-cars."},
    {code:"F77",nom:"Information touristique",cat:"F",pict:"infoI",desc:"Signale un point d'information touristique."}
];

// ---- PANNEAUX T (chantiers/travaux) ----
var PANNEAUX_T = [
    {code:"T1",nom:"Travaux (danger)",cat:"T",pict:"workman",desc:"Annonce un danger lie a des travaux sur la voie publique."},
    {code:"T2",nom:"Deviation (gauche)",cat:"T",pict:"arrowLeft",desc:"Indique une deviation de la circulation par la gauche."},
    {code:"T3",nom:"Deviation (droite)",cat:"T",pict:"arrowRight",desc:"Indique une deviation de la circulation par la droite."},
    {code:"T4",nom:"Fin de chantier",cat:"T",pict:"checkmark",desc:"Fin de la zone de travaux."}
];

// ---- FUSION PANNEAUX ----
var PANNEAUX = [].concat(PANNEAUX_A, PANNEAUX_B, PANNEAUX_C, PANNEAUX_D, PANNEAUX_E, PANNEAUX_F, PANNEAUX_T);

// ---- MECANIQUE MOTEUR ----
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
    {id:"mec_053",titre:"Filtre a particules",cat:"MECA",sousCat:"Echappement",desc:"Retient les suies (particules fines) des gaz d'echappement diesel. Colmatage = risque de casse ; une regeneration periodique a haute temperature le nettoie."},
    {id:"mec_054",titre:"Ligne d'echappement",cat:"MECA",sousCat:"Echappement",desc:"Corrosion = trou, bruit."},
    {id:"mec_055",titre:"Pot catalytique",cat:"MECA",sousCat:"Echappement",desc:"Usure = bruit excessif."},
    {id:"mec_056",titre:"Silencieux",cat:"MECA",sousCat:"Echappement",desc:"Perfore = bruit excessif."},
    {id:"mec_057",titre:"Sonde lambda",cat:"MECA",sousCat:"Echappement",desc:"Defaut = surconsommation."},
    {id:"mec_058",titre:"Feux de croisement",cat:"MECA",sousCat:"Eclairage",desc:"Obligatoires de nuit, tunnels, brouillard."},
    {id:"mec_059",titre:"Feux de route",cat:"MECA",sousCat:"Eclairage",desc:"Eblouissement interdit."},
    {id:"mec_060",titre:"Feux de brouillard avant",cat:"MECA",sousCat:"Eclairage",desc:"Uniquement brouillard ou fortes pluies."}
];

// ---- PNEUMATIQUES ----
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
    {id:"pneu_030",titre:"Aquaplanage",cat:"PNEU",sousCat:"Saisons",desc:"Perte d'adherence sur l'eau : le pneu ne peut plus l'evacuer et la voiture flotte. Lever le pied sans freiner ni tourner brusquement."},
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

// ---- SAISONS ET ENVIRONNEMENT ----
var SAISONS_ENVIRONNEMENT = [
    {id:"sai_003",titre:"Fumee blanche",cat:"SAI",sousCat:"Hiver",desc:"Condensation ou fuite de refroidissement."},
    {id:"sai_004",titre:"Gel des serrures",cat:"SAI",sousCat:"Hiver",desc:"Produit degrippant."},
    {id:"sai_005",titre:"Neige sur le toit",cat:"SAI",sousCat:"Hiver",desc:"Obligation de degager (116 € d'amende)."},
    {id:"sai_008",titre:"Conduite en montagne",cat:"SAI",sousCat:"Montagne",desc:"Celui qui descend cede le passage."},
    {id:"sai_010",titre:"Pneus montagne",cat:"SAI",sousCat:"Montagne",desc:"Pneus specifiques, chaines."},
    {id:"sai_011",titre:"Cols de montagne",cat:"SAI",sousCat:"Montagne",desc:"Restrictions de poids, hauteur."},
    {id:"sai_012",titre:"Zones de montagne",cat:"SAI",sousCat:"Montagne",desc:"Panneaux A3, A5."},
    {id:"sai_013",titre:"Conduite par canicule",cat:"SAI",sousCat:"Ete",desc:"Surveillance temperature moteur."},
    {id:"sai_018",titre:"Zones faibles emissions",cat:"SAI",sousCat:"Ecologie",desc:"Crit'Air, ZFE."},
    {id:"sai_019",titre:"Crit'Air",cat:"SAI",sousCat:"Ecologie",desc:"Vignette obligatoire."},
    {id:"sai_020",titre:"Eco-conduite",cat:"SAI",sousCat:"Ecologie",desc:"Vitesse optimale."},
    {id:"sai_021",titre:"Recyclage pneus",cat:"SAI",sousCat:"Ecologie",desc:"Centre agree."},
    {id:"sai_022",titre:"Filtre a particules",cat:"SAI",sousCat:"Ecologie",desc:"Se regenere automatiquement a haute vitesse ; en usage urbain repete, un colmatage peut necessiter une intervention."},
    {id:"sai_023",titre:"Huile usagee",cat:"SAI",sousCat:"Ecologie",desc:"Depot en dechetterie."},
    {id:"sai_024",titre:"Batterie usagee",cat:"SAI",sousCat:"Ecologie",desc:"Recyclage."},
    {id:"sai_025",titre:"Vehicules electriques",cat:"SAI",sousCat:"Ecologie",desc:"Bornes de recharge."},
    {id:"sai_026",titre:"Chargement ecologique",cat:"SAI",sousCat:"Ecologie",desc:"Reduire consommation."},
    {id:"sai_029",titre:"Buee sur les vitres",cat:"SAI",sousCat:"Extreme",desc:"Ventilation, desembuage."},
    {id:"sai_030",titre:"Diesel par temps froid",cat:"SAI",sousCat:"Extreme",desc:"Risque de gelification."}
];

// ---- SECOURS ----
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
    {id:"sec_023",titre:"Kit reparation",cat:"SEC",sousCat:"Equipements",desc:"Alternative a la roue de secours ; usage limite (crevaisons simples, non recommande pour un flanc endommage)."},
    {id:"sec_024",titre:"Couverture survie",cat:"SEC",sousCat:"Equipements",desc:"Recommande."},
    {id:"sec_025",titre:"Gants protection",cat:"SEC",sousCat:"Equipements",desc:"Recommandes."}
];

// ---- LEGAL ----
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

// ---- EQUIPEMENTS ----
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
    {id:"eq_012",titre:"Kit reparation",cat:"EQ",sousCat:"Securite",desc:"Alternative a la roue de secours ; usage limite (crevaisons simples, non recommande pour un flanc endommage)."},
    {id:"eq_013",titre:"Roue galette",cat:"EQ",sousCat:"Securite",desc:"Vitesse max 80 km/h."},
    {id:"eq_014",titre:"Leve-vitre",cat:"EQ",sousCat:"Confort",desc:"Verification."},
    {id:"eq_015",titre:"Retroviseurs",cat:"EQ",sousCat:"Confort",desc:"Angle mort."},
    {id:"eq_016",titre:"Angle mort",cat:"EQ",sousCat:"Securite",desc:"Attention."},
    {id:"eq_017",titre:"Alerte angle mort",cat:"EQ",sousCat:"Aides",desc:"Recommande."},
    {id:"eq_018",titre:"Projecteurs adaptatifs",cat:"EQ",sousCat:"Eclairage",desc:"Suivent la direction."},
    {id:"eq_019",titre:"Nettoyage phares",cat:"EQ",sousCat:"Eclairage",desc:"Obligatoire."},
    {id:"eq_020",titre:"Systeme antibrouillard",cat:"EQ",sousCat:"Eclairage",desc:"Verification."}
];

// ---- MARQUAGES ----
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

// ---- CONDITIONS EXTREMES ----
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
    {id:"cnd_016",titre:"Aquaplanage",cat:"CND",sousCat:"Pluie",desc:"Sur route mouillee ou inondee, ralentir avant les flaques : en cas de perte d'adherence, relacher l'accelerateur sans freiner ni tourner brusquement."},
    {id:"cnd_017",titre:"Brouillard",cat:"CND",sousCat:"Brouillard",desc:"Feux brouillard + croisement."},
    {id:"cnd_018",titre:"Vent fort",cat:"CND",sousCat:"Vent",desc:"Tenir le volant."},
    {id:"cnd_019",titre:"Conduite nuit",cat:"CND",sousCat:"Nuit",desc:"Feux de croisement."},
    {id:"cnd_020",titre:"Tunnels",cat:"CND",sousCat:"Tunnels",desc:"Feux de croisement obligatoires, distance 50m, interdiction de s'arreter."},
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

// ---- VEHICULES ----
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

// ---- PSYCHOLOGIE ----
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

// ---- INFRACTIONS ----
var INFRACTIONS = [
    {id:"inf_001",titre:"Oubli du clignotant",cat:"INF",degre:"1er Degre",amende:"58 €",desc:"Omettre d'indiquer un changement de direction."},
    {id:"inf_002",titre:"Stationnement genant",cat:"INF",degre:"1er Degre",amende:"58 €",desc:"Stationner sur une zone non autorisee."},
    {id:"inf_003",titre:"Bande de bus",cat:"INF",degre:"1er Degre",amende:"58 €",desc:"Emprunter une bande reservee aux bus."},
    {id:"inf_004",titre:"Defaut de documents",cat:"INF",degre:"1er Degre",amende:"58 €",desc:"Ne pas presenter permis, carte grise, assurance."},
    {id:"inf_005",titre:"Feux de brouillard abusifs",cat:"INF",degre:"1er Degre",amende:"58 €",desc:"Allumer les feux antibrouillard par temps clair."},
    {id:"inf_006",titre:"Ceinture de securite",cat:"INF",degre:"2eme Degre",amende:"116 €",desc:"Non-port obligatoire pour tous les occupants."},
    {id:"inf_007",titre:"Feu orange",cat:"INF",degre:"2eme Degre",amende:"116 €",desc:"S'engager au feu orange alors qu'on peut s'arreter."},
    {id:"inf_008",titre:"Stationnement sur passage pieton",cat:"INF",degre:"2eme Degre",amende:"116 €",desc:"Se garer sur un passage cloute."},
    {id:"inf_009",titre:"Conduite sans feux la nuit",cat:"INF",degre:"2eme Degre",amende:"116 €",desc:"Oublier d'allumer les feux de croisement."},
    {id:"inf_010",titre:"Depassement par la droite",cat:"INF",degre:"2eme Degre",amende:"116 €",desc:"Depasser par la droite sauf cas particulier."},
    {id:"inf_011",titre:"Distance de securite",cat:"INF",degre:"2eme Degre",amende:"116 €",desc:"Ne pas laisser une distance suffisante."},
    {id:"inf_012",titre:"Priorite pieton",cat:"INF",degre:"2eme Degre",amende:"116 €",desc:"Ne pas ceder le passage a un pieton engage."},
    {id:"inf_013",titre:"GSM au volant",cat:"INF",degre:"3eme Degre",amende:"174 €",desc:"Tenir un telephone en main. Retrait 15 jours."},
    {id:"inf_014",titre:"Feu rouge",cat:"INF",degre:"3eme Degre",amende:"174 €",desc:"S'engager alors que le feu est rouge."},
    {id:"inf_015",titre:"STOP",cat:"INF",degre:"3eme Degre",amende:"174 €",desc:"Oublier de marquer un arret complet."},
    {id:"inf_016",titre:"Ligne blanche continue",cat:"INF",degre:"3eme Degre",amende:"174 €",desc:"Franchir ou rouler sur une ligne continue."},
    {id:"inf_017",titre:"Sens interdit",cat:"INF",degre:"3eme Degre",amende:"174 €",desc:"S'engager dans une rue en sens interdit."},
    {id:"inf_018",titre:"Passage a niveau ferme",cat:"INF",degre:"3eme Degre",amende:"174 €",desc:"Passer outre des barrieres en mouvement."},
    {id:"inf_019",titre:"Demi-tour sur autoroute",cat:"INF",degre:"4eme Degre",amende:"Tribunal",desc:"Marche arriere ou contresens sur autoroute."},
    {id:"inf_020",titre:"Refus d'obeir",cat:"INF",degre:"4eme Degre",amende:"Tribunal",desc:"Ignorer les ordres d'un agent."},
    {id:"inf_021",titre:"Courses de vitesse",cat:"INF",degre:"4eme Degre",amende:"Tribunal",desc:"Concours de vitesse sur la voie publique."},
    {id:"inf_022",titre:"Delit de fuite",cat:"INF",degre:"Delit penal",amende:"Tribunal",desc:"Quitter les lieux d'un accident."},
    {id:"inf_023",titre:"Exces vitesse agglomeration",cat:"INF",degre:"Vitesse",amende:"53 € + 11 €/km/h",desc:"Tarif de base 53 € + 11 €/km/h."},
    {id:"inf_024",titre:"Exces vitesse hors agglo",cat:"INF",degre:"Vitesse",amende:"53 € + 6 €/km/h",desc:"Tarif de base 53 € + 6 €/km/h."},
    {id:"inf_025",titre:"Alcool 0,2 g/L (novice)",cat:"INF",degre:"Alcool Novice",amende:"Retrait immediat",desc:"Tolerance quasi-nulle pour jeunes conducteurs."},
    {id:"inf_026",titre:"Alcool 0,5 a 0,8 g/L",cat:"INF",degre:"Alcool",amende:"179 € + Retrait 3h",desc:"Retrait immediat du permis pour 3 heures."},
    {id:"inf_027",titre:"Alcool > 0,8 g/L",cat:"INF",degre:"Alcool / Tribunal",amende:"420 € a 1200 €",desc:"Retrait 15 jours et tribunal."}
];

// ---- REGLES ----
var RULES = [
    {id:"rul_01",titre:"La Priorite a Droite",cat:"RUL",desc:"A toute intersection, ceder le passage a tout conducteur venant de droite."},
    {id:"rul_02",titre:"Ronds-Points et Giratoires",cat:"RUL",desc:"Sauf panneaux B1/B5, priorite a droite DANS le rond-point."},
    {id:"rul_03",titre:"Priorite des Trams",cat:"RUL",desc:"Le tram a TOUJOURS la priorite, meme venant de gauche."},
    {id:"rul_04",titre:"Vitesses Maximales",cat:"RUL",desc:"Agglo: 50 km/h (30 Bruxelles). Hors agglo: 90/70 km/h. Autoroute: 120 km/h."},
    {id:"rul_05",titre:"Arret vs Stationnement",cat:"RUL",desc:"Arret = court, conducteur a bord. Stationnement = plus long."},
    {id:"rul_06",titre:"Couloir de secours",cat:"RUL",desc:"Se serrer sur autoroute pour laisser passer les secours."},
    {id:"rul_07",titre:"Agents qualifies",cat:"RUL",desc:"Les agents ont priorite sur toute signalisation."},
    {id:"rul_08",titre:"Feu orange",cat:"RUL",desc:"Arret obligatoire sauf impossibilite de s'arreter en securite."},
    {id:"rul_09",titre:"Feu vert et pietons",cat:"RUL",desc:"Ceder le passage aux pietons meme si le feu est vert."},
    {id:"rul_10",titre:"Bande d'arret d'urgence",cat:"RUL",desc:"Interdiction de s'y arreter sauf force majeure."},
    {id:"rul_11",titre:"Depassement des cyclistes",cat:"RUL",desc:"Marge laterale 1,0 m en agglo, 1,5 m hors agglo."},
    {id:"rul_12",titre:"Tunnels",cat:"RUL",desc:"Feux de croisement obligatoires. Distance 50m. Interdiction de s'arreter."}
];

// ---- PIEGES ----
var PIEGES_ROUTES = [
    {id:"piege_1",titre:"Priorite a droite absolue",cat:"TRP",desc:"Sans signalisation, priorite a droite s'applique toujours."},
    {id:"piege_2",titre:"Stationnement 5 metres",cat:"TRP",desc:"Interdit de stationner a moins de 5m avant un passage pieton."},
    {id:"piege_3",titre:"Sortie chemin de terre",cat:"TRP",desc:"Quiconque sort d'un chemin de terre doit toujours ceder le passage."},
    {id:"piege_4",titre:"Depassement cyclistes",cat:"TRP",desc:"Marge laterale 1,0m en agglo, 1,5m hors agglo."},
    {id:"piege_5",titre:"Rond-point classique",cat:"TRP",desc:"Un rond-point n'est prioritaire que s'il y a les panneaux B1 et D10."},
    {id:"piege_6",titre:"Feu orange fixe",cat:"TRP",desc:"Le feu orange oblige a l'arret, sauf impossibilite de s'arreter."},
    {id:"piege_7",titre:"Feu vert et pietons",cat:"TRP",desc:"Ceder le passage aux pietons meme si le feu est vert."},
    {id:"piege_8",titre:"Bande d'arret d'urgence",cat:"TRP",desc:"Interdit de s'y arreter sauf force majeure."},
    {id:"piege_9",titre:"Sens de stationnement",cat:"TRP",desc:"Se garer dans le sens de la marche du cote droit."},
    {id:"piege_10",titre:"Depassement par la droite autoroute",cat:"TRP",desc:"Interdit sauf files ininterrompues."}
];

// ---- USAGERS ----
var USAGERS_MANOEUVRES = [
    {id:"usager_1",titre:"Rues cyclables",cat:"USA",sousCat:"Usagers",desc:"Interdit de depasser les cyclistes. Vitesse max 30 km/h."},
    {id:"usager_2",titre:"Sas a velos",cat:"USA",sousCat:"Usagers",desc:"Espace reserve aux velos aux feux tricolores."},
    {id:"usager_3",titre:"Manoeuvre",cat:"USA",sousCat:"Manoeuvres",desc:"Celui qui effectue une manoeuvre doit ceder le passage a tous."},
    {id:"usager_4",titre:"Croisement pentes",cat:"USA",sousCat:"Manoeuvres",desc:"Le vehicule qui descend s'arrete pour laisser passer celui qui monte."},
    {id:"usager_5",titre:"Permis provisoire nuit",cat:"USA",sousCat:"Manoeuvres",desc:"Interdit de circuler vendredi, samedi, dimanche 22h-6h."},
    {id:"usager_6",titre:"Chargement",cat:"USA",sousCat:"Manoeuvres",desc:"Chargement ne peut masquer les plaques. Signalisation si depassement 1m."},
    {id:"usager_7",titre:"Cavaliers",cat:"USA",sousCat:"Usagers",desc:"Ralentir, ne pas klaxonner pour ne pas effrayer le cheval."},
    {id:"usager_8",titre:"PMR",cat:"USA",sousCat:"Usagers",desc:"Personnes a mobilite reduite. Priorite, temps de traverse plus long."},
    {id:"usager_9",titre:"Enfants",cat:"USA",sousCat:"Usagers",desc:"Imprevisibles. Ralentir a proximite des ecoles."},
    {id:"usager_10",titre:"Marche arriere",cat:"USA",sousCat:"Manoeuvres",desc:"Interdite sauf pour manoeuvre. Ceder le passage a tous."}
];

// ---- FUSION ALL_KNOWLEDGE ----
// ---- ENTRETIEN & DOCUMENTS AUTO (voiture.js) ----
function plainTextFromAuto(html) {
    return String(html || "")
        .replace(/<br\s*\/?>/gi, " ")
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .replace(/\s+/g, " ")
        .trim();
}
var AUTO_ENTRETIEN = (typeof MATIERE_AUTO !== "undefined" ? MATIERE_AUTO : []).map(function(item) {
    return { id: item.id, titre: item.titre, cat: "AUTO", sousCat: item.cat, desc: plainTextFromAuto(item.desc) };
});

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
    USAGERS_MANOEUVRES,
    AUTO_ENTRETIEN
);

// ---- CATEGORIES ----
var CATEGORIES = {
    A:{label:"Danger",color:"var(--red)"},
    B:{label:"Priorite",color:"var(--amber)"},
    C:{label:"Interdiction",color:"var(--red)"},
    D:{label:"Obligation",color:"var(--blue)"},
    E:{label:"Stationnement",color:"var(--blue)"},
    F:{label:"Indication",color:"var(--teal)"},
    T:{label:"Travaux",color:"var(--orange)"},
    MECA:{label:"Mecanique",color:"var(--dark)"},
    PNEU:{label:"Pneumatiques",color:"var(--dark)"},
    SAI:{label:"Saisons",color:"var(--dark)"},
    SEC:{label:"Secours",color:"var(--dark)"},
    LEG:{label:"Legal",color:"var(--dark)"},
    EQ:{label:"Equipements",color:"var(--dark)"},
    MAR:{label:"Marquages",color:"var(--dark)"},
    CND:{label:"Conditions extremes",color:"var(--dark)"},
    VEH:{label:"Vehicules",color:"var(--dark)"},
    PSY:{label:"Psychologie",color:"var(--dark)"},
    RUL:{label:"Regles d'or",color:"var(--purple)"},
    TRP:{label:"Pieges",color:"var(--purple)"},
    USA:{label:"Usagers & manoeuvres",color:"var(--purple)"},
    INF:{label:"Infractions",color:"var(--purple)"},
    AUTO:{label:"Entretien auto",color:"var(--good)"}
};

// ---- MENU STRUCTURE ----
var MENU_STRUCTURE = [
    {
        id:"signalisation",
        label:"Signalisation & Panneaux",
        icon:"🚦",
        color:"var(--blue)",
        description:"Tous les panneaux du code belge : danger, priorite, interdiction, obligation, stationnement, indication et travaux.",
        subCategories:[
            {id:"A",label:"Danger",match:function(item){ return item.cat === "A"; }},
            {id:"B",label:"Priorite",match:function(item){ return item.cat === "B"; }},
            {id:"C",label:"Interdiction",match:function(item){ return item.cat === "C"; }},
            {id:"D",label:"Obligation",match:function(item){ return item.cat === "D"; }},
            {id:"E",label:"Stationnement",match:function(item){ return item.cat === "E"; }},
            {id:"F",label:"Indication",match:function(item){ return item.cat === "F"; }},
            {id:"T",label:"Travaux",match:function(item){ return item.cat === "T"; }}
        ],
        data:PANNEAUX
    },
    {
        id:"mecanique",
        label:"Mecanique & Technologie",
        icon:"🔧",
        color:"var(--dark)",
        description:"Moteur, freins, direction, suspension, electrique, pneumatiques, equipements.",
        subCategories:[
            {id:"MECA",label:"Moteur & Systemes",match:function(item){ return item.cat === "MECA" && ["Moteur","Transmission","Injection","Confort","Allumage","Echappement"].indexOf(item.sousCat) >= 0; }},
            {id:"MECA_FREIN",label:"Systeme de freinage",match:function(item){ return item.cat === "MECA" && item.sousCat === "Freinage"; }},
            {id:"MECA_DIR",label:"Direction & Suspension",match:function(item){ return item.cat === "MECA" && ["Direction","Suspension"].indexOf(item.sousCat) >= 0; }},
            {id:"MECA_ELEC",label:"Electrique & Eclairage",match:function(item){ return item.cat === "MECA" && ["Electrique","Eclairage"].indexOf(item.sousCat) >= 0; }},
            {id:"PNEU",label:"Pneumatiques & Jantes",match:function(item){ return item.cat === "PNEU"; }},
            {id:"EQ",label:"Equipements & Accessoires",match:function(item){ return item.cat === "EQ"; }}
        ],
        data:[].concat(MECANIQUE_MOTEUR, PNEUMATIQUES, EQUIPEMENTS)
    },
    {
        id:"conduite",
        label:"Conduite & Conditions",
        icon:"🌡️",
        color:"var(--teal)",
        description:"Conduite hivernale, estivale, en montagne, conditions extremes et ecologie.",
        subCategories:[
            {id:"SAI_HIVER",label:"Conduite hivernale",match:function(item){ return item.sousCat === "Hiver"; }},
            {id:"SAI_ETE",label:"Conduite estivale",match:function(item){ return item.sousCat === "Ete"; }},
            {id:"SAI_MONT",label:"Conduite en montagne",match:function(item){ return item.sousCat === "Montagne"; }},
            {id:"SAI_ECO",label:"Ecologie & Environnement",match:function(item){ return item.sousCat === "Ecologie"; }},
            {id:"CND_EXT",label:"Conditions extremes",match:function(item){ return ["Extreme","Pluie","Brouillard","Vent","Nuit","Tunnels"].indexOf(item.sousCat) >= 0; }}
        ],
        data:[].concat(SAISONS_ENVIRONNEMENT, CONDITIONS_EXTREMES)
    },
    {
        id:"securite",
        label:"Securite & Secours",
        icon:"🚑",
        color:"var(--red)",
        description:"Gestes de premiers secours, PLS, massage cardiaque, balisage, equipements obligatoires.",
        subCategories:[
            {id:"SEC_GESTES",label:"Gestes de premiers secours",match:function(item){ return item.sousCat === "Gestes"; }},
            {id:"SEC_BALISAGE",label:"Balisage & Signalisation d'urgence",match:function(item){ return item.sousCat === "Balisage"; }},
            {id:"SEC_EQUIP",label:"Equipements obligatoires",match:function(item){ return item.sousCat === "Equipements"; }}
        ],
        data:SECOURS_URGENCE
    },
    {
        id:"legal",
        label:"Regles & Legal",
        icon:"⚖️",
        color:"var(--purple)",
        description:"Regles d'or, pieges, usagers vulnerables, infractions, permis, assurance, controle technique.",
        subCategories:[
            {id:"LEG_REGLES",label:"Regles d'or & Priorites",match:function(item){ return item.cat === "RUL"; }},
            {id:"LEG_PIEGES",label:"Pieges & Zones grises",match:function(item){ return item.cat === "TRP"; }},
            {id:"LEG_USAGERS",label:"Usagers & Manoeuvres",match:function(item){ return item.cat === "USA"; }},
            {id:"LEG_INFRACT",label:"Infractions & Amendes",match:function(item){ return item.cat === "INF" || (item.cat === "LEG" && item.sousCat === "Sanctions"); }},
            {id:"LEG_DOCS",label:"Documents & Permis",match:function(item){ return item.cat === "LEG" && ["Permis","Documents"].indexOf(item.sousCat) >= 0; }},
            {id:"LEG_ASSUR",label:"Assurance & Controle technique",match:function(item){ return item.cat === "LEG" && ["Assurance","Controle"].indexOf(item.sousCat) >= 0; }}
        ],
        data:[].concat(RULES, PIEGES_ROUTES, USAGERS_MANOEUVRES, INFRACTIONS, LEGAL_ADMIN)
    },
    {
        id:"vehicules",
        label:"Vehicules Specifiques",
        icon:"🚗",
        color:"var(--amber)",
        description:"Motos, cyclomoteurs, poids lourds, autocars, remorques et attelages.",
        subCategories:[
            {id:"VEH_MOTO",label:"Motos & Cyclomoteurs",match:function(item){ return ["Moto","Cyclo"].indexOf(item.sousCat) >= 0; }},
            {id:"VEH_PL",label:"Poids lourds & Autocars",match:function(item){ return item.sousCat === "Poids lourds"; }},
            {id:"VEH_REM",label:"Remorques & Attelages",match:function(item){ return item.sousCat === "Remorque"; }},
            {id:"VEH_PRIO",label:"Vehicules prioritaires",match:function(item){ return item.sousCat === "Prioritaires"; }}
        ],
        data:VEHICULES_SPECIFIQUES
    },
    {
        id:"psychologie",
        label:"Psychologie & Statistiques",
        icon:"📊",
        color:"var(--green)",
        description:"Psychologie de la conduite, fatigue, stress, distraction, statistiques du permis belge.",
        subCategories:[
            {id:"PSY_CHOLOGIE",label:"Psychologie de la conduite",match:function(item){ return item.sousCat === "Psychologie"; }},
            {id:"PSY_STATS",label:"Statistiques & Chiffres cles",match:function(item){ return item.sousCat === "Statistiques"; }}
        ],
        data:PSYCHOLOGIE_STATS
    },
    {
        id:"entretien",
        label:"Entretien & Documents",
        icon:"🧰",
        color:"var(--good)",
        description:"Verifications avant le depart, charges et permis, documents obligatoires, equipements de securite a bord.",
        subCategories:[
            {id:"AUTO_TECH",label:"Verifications techniques",match:function(item){ return item.sousCat === "Technique"; }},
            {id:"AUTO_LEGAL",label:"Charges & legal",match:function(item){ return item.sousCat === "Légal & Charges"; }},
            {id:"AUTO_ADMIN",label:"Documents administratifs",match:function(item){ return item.sousCat === "Administratif"; }},
            {id:"AUTO_SEC",label:"Securite a bord",match:function(item){ return item.sousCat === "Sécurité"; }}
        ],
        data:AUTO_ENTRETIEN
    }
];// =========================================================
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
    categories: ["A", "B", "C", "D", "E", "F", "T", "MECA", "PNEU", "SAI", "SEC", "LEG", "EQ", "MAR", "CND", "VEH", "PSY", "RUL", "TRP", "USA", "INF", "AUTO"],
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
    isOfficialExam: false,
    questionStartTime: null
};

var currentMenuCategory = null;
var currentSousCategorie = null;

// =========================================================
// UTILITAIRES
// =========================================================

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

function getAverageTime() {
    var times = JSON.parse(localStorage.getItem("questionTimes") || "[]");
    if (times.length === 0) return 0;
    var sum = times.reduce(function(a, b) { return a + b; }, 0);
    return Math.round(sum / times.length);
}

// =========================================================
// NAVIGATION
// =========================================================

function hideViews() {
    var ids = ["home", "menu", "categoriePage", "sousCategoriePage", "quiz", "repo", "rules",
        "mecanique", "pneumatiques", "saisons", "secours", "legal", "equipements",
        "marquages", "conditions", "vehicules", "psychologie", "infractions", "piegesRoutes",
        "usagersManoeuvres", "statsPage", "dailyChallenge", "flashcards"
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
    updateBadges();
}

function updateHomeStats() {
    var total = stats().total;
    var correct = stats().correct;
    var percentage = total > 0 ? Math.round(100 * correct / total) : 0;
    var currentStreak = parseInt(localStorage.getItem("currentStreak") || "0");
    var badges = getBadges();
    var unlocked = badges.filter(function(b) { return b.unlocked; });

    var prevSessions = Number($("statSessions")?.textContent) || 0;
    var prevQuestions = Number($("statQuestions")?.textContent) || 0;
    var prevFavs = Number($("statFavs")?.textContent) || 0;
    var prevSuccess = Number(($("statSuccess")?.textContent || "0").replace("%", "")) || 0;
    var prevStreak = Number($("statStreak")?.textContent) || 0;
    var prevBadges = Number($("statBadges")?.textContent) || 0;

    if ($("statSessions")) animateCount($("statSessions"), prevSessions, stats().sessions, "");
    if ($("statSuccess")) animateCount($("statSuccess"), prevSuccess, percentage, "%");
    if ($("statFavs")) animateCount($("statFavs"), prevFavs, favorites().length, "");
    if ($("statQuestions")) animateCount($("statQuestions"), prevQuestions, total, "");
    if ($("statStreak")) animateCount($("statStreak"), prevStreak, currentStreak, "");
    if ($("statBadges")) animateCount($("statBadges"), prevBadges, unlocked.length, "");

    if ($("progressPercent")) $("progressPercent").textContent = percentage + "%";
    if ($("progressBar")) $("progressBar").style.width = percentage + "%";
    if ($("progressText")) {
        $("progressText").textContent = total > 0 ? correct + " bonne(s) reponse(s) sur " + total : "Aucune session";
    }
    if ($("reviewCount")) {
        var set = new Set([...favorites(), ...Object.keys(mistakes())]);
        $("reviewCount").textContent = set.size;
    }
    if ($("streak")) $("streak").textContent = currentStreak;
    if ($("badgeCount")) $("badgeCount").textContent = unlocked.length;
}

// =========================================================
// THEME
// =========================================================

async function toggleTheme() {
    document.body.classList.toggle("dark");
    appData.theme = document.body.classList.contains("dark") ? "dark" : "light";
    if ($("themeButton")) $("themeButton").textContent = appData.theme === "dark" ? "🌙" : "☀️";
    if ($("themeButtonHeader")) $("themeButtonHeader").textContent = appData.theme === "dark" ? "🌙" : "☀️";
    await saveAppData();
}

function applyTheme() {
    if (appData.theme === "dark") {
        document.body.classList.add("dark");
        if ($("themeButton")) $("themeButton").textContent = "🌙";
        if ($("themeButtonHeader")) $("themeButtonHeader").textContent = "🌙";
    }
}

function detectDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark");
        if ($("themeButton")) $("themeButton").textContent = "🌙";
        if ($("themeButtonHeader")) $("themeButtonHeader").textContent = "🌙";
    }
}

// =========================================================
// MENU 7 CATEGORIES
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

        var catData = cat.data || [];
        var subLabels = "";
        for (var j = 0; j < cat.subCategories.length; j++) {
            var subCount = catData.filter(cat.subCategories[j].match).length;
            subLabels += '<span style="font-size: 10px; background: var(--soft); padding: 2px 8px; border-radius: 10px;">' + cat.subCategories[j].label + ' (' + subCount + ')</span>';
        }

        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; width: 100%;">
                <span style="font-size: 28px;">${cat.icon}</span>
                <div>
                    <b style="font-size: 17px;">${cat.label}</b>
                    <span style="font-size: 12px; color: var(--muted); display: block;">${catData.length} elements • ${cat.subCategories.length} sous-categories</span>
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

    var data = cat.data || [];
    document.getElementById("categorieTitle").textContent = cat.icon + " " + cat.label;
    document.getElementById("categorieDesc").textContent = cat.description + " (" + data.length + " elements)";

    var grid = document.getElementById("sousCategorieGrid");
    grid.innerHTML = "";

    for (var i = 0; i < cat.subCategories.length; i++) {
        var sc = cat.subCategories[i];
        var count = data.filter(sc.match).length;
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
                <span style="font-size: 11px; color: var(--muted);">${count} elements</span>
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

    var data0 = cat.data || [];
    document.getElementById("sousCategorieTitle").textContent = cat.icon + " " + sc.label;
    document.getElementById("sousCategorieDesc").textContent = data0.filter(sc.match).length + " elements • " + cat.label;
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
    var results = data.filter(sc.match);

    if (query) {
        results = results.filter(function(item) {
            var searchStr = (item.code || item.id || "") + " " + (item.titre || item.nom || "") + " " + (item.desc || "") + " " + (item.sousCat || "");
            return searchStr.toLowerCase().indexOf(query) >= 0;
        });
    }

    list.innerHTML = "";
    list.classList.remove("fade-list");
    void list.offsetWidth;
    list.classList.add("fade-list");

    if (results.length) {
        list.innerHTML = results.map(renderKnowledgeCard).join("");
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
    $("quizModeLabel").textContent = "📚 CATEGORIE";
    $("quizModeLabel").style.background = "var(--blue)";
    $("quizModeLabel").style.color = "white";
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
    $("quizModeLabel").textContent = "📚 EXAMEN CAT";
    $("quizModeLabel").style.background = "var(--blue)";
    $("quizModeLabel").style.color = "white";
    beginSession(false);
}

// =========================================================
// VUES SECONDAIRES
// =========================================================

function showQuiz() {
    clearInterval(state.timerId);
    hideViews();
    state.isOfficialExam = false;
    if ($("quiz")) $("quiz").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    configureQuiz();
}

function showRepo() {
    hideViews();
    if ($("repo")) $("repo").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderRepository();
}

function showRules() {
    hideViews();
    if ($("rules")) $("rules").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderRules();
}

function showMecanique() {
    hideViews();
    if ($("mecanique")) $("mecanique").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderMecanique();
}

function showPneumatiques() {
    hideViews();
    if ($("pneumatiques")) $("pneumatiques").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderPneumatiques();
}

function showSaisons() {
    hideViews();
    if ($("saisons")) $("saisons").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderSaisons();
}

function showSecours() {
    hideViews();
    if ($("secours")) $("secours").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderSecours();
}

function showLegal() {
    hideViews();
    if ($("legal")) $("legal").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderLegal();
}

function showEquipements() {
    hideViews();
    if ($("equipements")) $("equipements").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderEquipements();
}

function showMarquages() {
    hideViews();
    if ($("marquages")) $("marquages").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderMarquages();
}

function showConditions() {
    hideViews();
    if ($("conditions")) $("conditions").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderConditions();
}

function showVehicules() {
    hideViews();
    if ($("vehicules")) $("vehicules").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderVehicules();
}

function showPsychologie() {
    hideViews();
    if ($("psychologie")) $("psychologie").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderPsychologie();
}

function showInfractions() {
    hideViews();
    if ($("infractions")) $("infractions").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderInfractions();
}

function showPiegesRoutes() {
    hideViews();
    if ($("piegesRoutes")) $("piegesRoutes").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderPiegesRoutes();
}

function showUsagersManoeuvres() {
    hideViews();
    if ($("usagersManoeuvres")) $("usagersManoeuvres").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    renderUsagersManoeuvres();
}

// =========================================================
// RENDU GENERIQUE
// =========================================================

function renderKnowledgeCard(item) {
    var title = item.titre || item.nom || "";
    var desc = item.desc || "";
    var code = item.code || item.id || "";
    var badge = item.sousCat || CATEGORIES[item.cat]?.label || "";
    var color = CATEGORIES[item.cat]?.color || "var(--blue)";
    return `
        <div class="repo-item">
            <div class="repo-thumb">${makeSignSVG(item, true)}</div>
            <div style="flex: 1; min-width: 0;">
                ${code ? '<div class="repo-code">' + escapeHTML(code) + '</div>' : ''}
                <div class="repo-name">${escapeHTML(title)}</div>
                <p class="repo-desc">${escapeHTML(desc)}</p>
            </div>
            ${badge ? '<span class="badge" style="background:' + color + '; font-size: 9px; flex: none;">' + escapeHTML(badge) + '</span>' : ''}
        </div>
    `;
}

function renderGeneric(list, searchId, listId, titleKey, descKey, catKey) {
    var query = $(searchId) ? $(searchId).value.trim().toLowerCase() : "";
    var results = list.filter(function(item) {
        if (!query) return true;
        var searchStr = (item.code || item.id || "") + " " + (item.titre || item.nom || "") + " " + (item.desc || "") + " " + (item.sousCat || "") + " " + (CATEGORIES[item.cat]?.label || "");
        return searchStr.toLowerCase().indexOf(query) >= 0;
    });
    var listEl = $(listId);
    if (!listEl) return;
    listEl.innerHTML = "";
    listEl.classList.remove("fade-list");
    void listEl.offsetWidth;
    listEl.classList.add("fade-list");

    if (results.length) {
        listEl.innerHTML = results.map(renderKnowledgeCard).join("");
    } else {
        listEl.innerHTML = '<div class="empty">Aucun element ne correspond.</div>';
    }
}

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
// QUIZ
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
    if (typeof currentDifficulty !== "undefined" && currentDifficulty && currentDifficulty !== "tous") {
        var byDifficulty = getQuestionsByDifficulty(currentDifficulty);
        var filtered = pool.filter(function(p) { return byDifficulty.indexOf(p) >= 0; });
        if (filtered.length >= 2) pool = filtered;
    }
    if (pool.length < 2) return;
    var timerCheckbox = document.getElementById("timerEnabled");
    state.timer = timerCheckbox ? timerCheckbox.checked : false;
    state.questions = shuffle(pool).slice(0, state.questionCount);
    state.isOfficialExam = false;
    $("quizModeLabel").textContent = "⚡ QUIZ";
    $("quizModeLabel").style.background = "var(--amber)";
    $("quizModeLabel").style.color = "var(--ink)";
    hideViews();
    if ($("quiz")) $("quiz").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    if ($("quizConfig")) $("quizConfig").classList.add("hidden");
    if ($("quizSummary")) $("quizSummary").classList.add("hidden");
    if ($("quizRunning")) $("quizRunning").classList.remove("hidden");
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
    $("quizModeLabel").textContent = "📚 EXAMEN";
    $("quizModeLabel").style.background = "var(--blue)";
    $("quizModeLabel").style.color = "white";
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
    state.questions = list;
    state.timer = false;
    state.isOfficialExam = false;
    state.review = true;
    $("quizModeLabel").textContent = "⭐ REVISION";
    $("quizModeLabel").style.background = "var(--amber)";
    $("quizModeLabel").style.color = "var(--ink)";
    hideViews();
    if ($("quiz")) $("quiz").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    if ($("quizConfig")) $("quizConfig").classList.add("hidden");
    if ($("quizSummary")) $("quizSummary").classList.add("hidden");
    if ($("quizRunning")) $("quizRunning").classList.remove("hidden");
    beginSession(true);
}

function reviewErrors() {
    state.questions = state.errors.map(function(error) { return error.panel; });
    state.timer = false;
    state.isOfficialExam = false;
    state.review = true;
    $("quizModeLabel").textContent = "🔄 ERREURS";
    $("quizModeLabel").style.background = "var(--red)";
    $("quizModeLabel").style.color = "white";
    hideViews();
    if ($("quiz")) $("quiz").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    if ($("quizConfig")) $("quizConfig").classList.add("hidden");
    if ($("quizSummary")) $("quizSummary").classList.add("hidden");
    if ($("quizRunning")) $("quizRunning").classList.remove("hidden");
    beginSession(true);
}

function replayQuiz() { beginSession(state.review); }

// =========================================================
// SVG PANNEAUX
// =========================================================

// Pictogrammes individuels des panneaux : chaque code a sa propre silhouette
// (au lieu de partager la meme forme generique que les autres panneaux de sa
// categorie). fg = couleur du trait/remplissage du pictogramme.
function personSil(fg, cx, cy, s) {
    cx = cx || 90; cy = cy || 95; s = s || 1;
    return '<circle cx="' + cx + '" cy="' + (cy - 30 * s) + '" r="' + (9 * s) + '" fill="' + fg + '"/>' +
        '<path d="M' + (cx - 12 * s) + ' ' + (cy + 22 * s) + ' Q' + cx + ' ' + (cy - 16 * s) + ' ' + (cx + 12 * s) + ' ' + (cy + 22 * s) + ' Z" fill="' + fg + '"/>';
}
function bikeSil(fg, cx, cy, s) {
    cx = cx || 90; cy = cy || 100; s = s || 1;
    var r = 16 * s;
    return '<circle cx="' + (cx - 24 * s) + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + fg + '" stroke-width="' + (5 * s) + '"/>' +
        '<circle cx="' + (cx + 24 * s) + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + fg + '" stroke-width="' + (5 * s) + '"/>' +
        '<path d="M' + (cx - 24 * s) + ' ' + cy + ' L' + (cx - 4 * s) + ' ' + (cy - 26 * s) + ' L' + (cx + 24 * s) + ' ' + cy + ' M' + (cx - 4 * s) + ' ' + (cy - 26 * s) + ' L' + (cx + 6 * s) + ' ' + cy + ' M' + (cx - 14 * s) + ' ' + (cy - 26 * s) + ' L' + (cx + 4 * s) + ' ' + (cy - 26 * s) + '" fill="none" stroke="' + fg + '" stroke-width="' + (5 * s) + '" stroke-linecap="round" stroke-linejoin="round"/>';
}
function carSil(fg, cx, cy, s) {
    cx = cx || 90; cy = cy || 100; s = s || 1;
    return '<path d="M' + (cx - 45 * s) + ' ' + (cy + 10 * s) + ' q0 -14 14 -16 l10 -18 q4 -6 12 -6 h18 q8 0 12 6 l10 18 q14 2 14 16 v10 h-10 M' + (cx - 45 * s) + ' ' + (cy + 20 * s) + ' h90' + '" fill="none" stroke="' + fg + '" stroke-width="' + (6 * s) + '" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<circle cx="' + (cx - 24 * s) + '" cy="' + (cy + 20 * s) + '" r="' + (9 * s) + '" fill="' + fg + '"/><circle cx="' + (cx + 24 * s) + '" cy="' + (cy + 20 * s) + '" r="' + (9 * s) + '" fill="' + fg + '"/>';
}
function truckSil(fg, cx, cy, s) {
    cx = cx || 90; cy = cy || 100; s = s || 1;
    return '<rect x="' + (cx - 46 * s) + '" y="' + (cy - 16 * s) + '" width="' + (58 * s) + '" height="' + (30 * s) + '" fill="none" stroke="' + fg + '" stroke-width="' + (6 * s) + '"/>' +
        '<path d="M' + (cx + 12 * s) + ' ' + (cy - 16 * s) + ' h20 l14 16 v14 h-34 Z" fill="none" stroke="' + fg + '" stroke-width="' + (6 * s) + '" stroke-linejoin="round"/>' +
        '<circle cx="' + (cx - 30 * s) + '" cy="' + (cy + 18 * s) + '" r="' + (8 * s) + '" fill="' + fg + '"/><circle cx="' + (cx + 26 * s) + '" cy="' + (cy + 18 * s) + '" r="' + (8 * s) + '" fill="' + fg + '"/>';
}
function motoSil(fg, cx, cy, s) {
    cx = cx || 90; cy = cy || 100; s = s || 1;
    var r = 15 * s;
    return '<circle cx="' + (cx - 26 * s) + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + fg + '" stroke-width="' + (5 * s) + '"/>' +
        '<circle cx="' + (cx + 26 * s) + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + fg + '" stroke-width="' + (5 * s) + '"/>' +
        '<path d="M' + (cx - 26 * s) + ' ' + cy + ' L' + (cx - 2 * s) + ' ' + (cy - 8 * s) + ' L' + (cx + 10 * s) + ' ' + (cy - 24 * s) + ' M' + (cx - 2 * s) + ' ' + (cy - 8 * s) + ' L' + (cx + 26 * s) + ' ' + cy + '" fill="none" stroke="' + fg + '" stroke-width="' + (5 * s) + '" stroke-linecap="round" stroke-linejoin="round"/>';
}
function arrowShape(fg, dir) {
    var rot = { up: 0, right: 90, down: 180, left: 270 }[dir] || 0;
    return '<g transform="rotate(' + rot + ' 90 95)"><path d="M90 40 V150 M65 65 L90 40 L115 65" fill="none" stroke="' + fg + '" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/></g>';
}
function curveArrow(fg, mirror) {
    var m = mirror ? '<g transform="scale(-1,1) translate(-180,0)">' : '<g>';
    return m + '<path d="M55 145 Q55 60 130 55" fill="none" stroke="' + fg + '" stroke-width="11" stroke-linecap="round"/><path d="M113 40 L135 52 L118 70" fill="none" stroke="' + fg + '" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/></g>';
}
function doubleCurveArrow(fg, mirror) {
    var m = mirror ? '<g transform="scale(-1,1) translate(-180,0)">' : '<g>';
    return m + '<path d="M45 150 Q45 105 80 100 Q115 95 115 55" fill="none" stroke="' + fg + '" stroke-width="10" stroke-linecap="round"/><path d="M98 42 L120 53 L104 72" fill="none" stroke="' + fg + '" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></g>';
}
var PICTOGRAMS = {
    curveLeft: function(fg) { return curveArrow(fg, true); },
    curveRight: function(fg) { return curveArrow(fg, false); },
    doubleCurveLeft: function(fg) { return doubleCurveArrow(fg, true); },
    doubleCurveRight: function(fg) { return doubleCurveArrow(fg, false); },
    slopeDown: function(fg) { return '<path d="M40 70 L140 130" stroke="' + fg + '" stroke-width="10" stroke-linecap="round"/><text x="95" y="60" text-anchor="middle" font-size="26" font-weight="900" fill="' + fg + '" font-family="Arial">14%</text>'; },
    slopeUp: function(fg) { return '<path d="M40 130 L140 70" stroke="' + fg + '" stroke-width="10" stroke-linecap="round"/><text x="95" y="150" text-anchor="middle" font-size="26" font-weight="900" fill="' + fg + '" font-family="Arial">14%</text>'; },
    narrowBoth: function(fg) { return '<path d="M35 55 L75 100 L35 145 M145 55 L105 100 L145 145" fill="none" stroke="' + fg + '" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'; },
    narrowRight: function(fg) { return '<path d="M35 145 V55 M145 55 L105 100 L145 145" fill="none" stroke="' + fg + '" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'; },
    narrowLeft: function(fg) { return '<path d="M145 145 V55 M35 55 L75 100 L35 145" fill="none" stroke="' + fg + '" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'; },
    shoulder: function(fg) { return '<path d="M35 60 V140 M35 140 H145" fill="none" stroke="' + fg + '" stroke-width="8" stroke-linecap="round"/><path d="M35 60 L145 60 L145 100" fill="none" stroke="' + fg + '" stroke-width="8" stroke-dasharray="3 8" stroke-linecap="round"/>'; },
    bridge: function(fg) { return '<path d="M30 120 H150 M30 120 V90 M150 120 V70 M150 70 L120 90" fill="none" stroke="' + fg + '" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'; },
    quay: function(fg) { return '<path d="M30 100 H150 M30 100 V140 M150 100 V140" fill="none" stroke="' + fg + '" stroke-width="8" stroke-linecap="round"/><path d="M25 140 Q45 130 65 140 Q85 150 105 140 Q125 130 145 140" fill="none" stroke="' + fg + '" stroke-width="6" stroke-linecap="round"/>'; },
    bump: function(fg) { return '<path d="M30 130 Q60 130 65 100 Q70 70 90 70 Q110 70 115 100 Q120 130 150 130" fill="none" stroke="' + fg + '" stroke-width="8" stroke-linecap="round"/>'; },
    slippery: function(fg) { return carSil(fg, 82, 85, 0.75) + '<path d="M55 130 Q65 122 75 130 M85 130 Q95 122 105 130 M100 138 Q110 130 120 138" fill="none" stroke="' + fg + '" stroke-width="5" stroke-linecap="round"/>'; },
    snowflake: function(fg) { return [0, 60, 120].map(function(a) { var x = 40 * Math.cos(a * Math.PI / 180), y = 40 * Math.sin(a * Math.PI / 180); return '<line x1="' + (90 - x) + '" y1="' + (95 - y) + '" x2="' + (90 + x) + '" y2="' + (95 + y) + '" stroke="' + fg + '" stroke-width="8" stroke-linecap="round"/>'; }).join(''); },
    gravel: function(fg) { return carSil(fg, 75, 90, 0.7) + '<circle cx="125" cy="70" r="5" fill="' + fg + '"/><circle cx="138" cy="90" r="4" fill="' + fg + '"/><circle cx="130" cy="110" r="4" fill="' + fg + '"/>'; },
    fog: function(fg) { return [65, 85, 105, 125].map(function(y, i) { var w = i % 2 ? 90 : 70; return '<line x1="' + (90 - w / 2) + '" y1="' + y + '" x2="' + (90 + w / 2) + '" y2="' + y + '" stroke="' + fg + '" stroke-width="8" stroke-linecap="round"/>'; }).join(''); },
    fallingRocks: function(fg) { return '<path d="M35 145 L75 60 L100 90 L120 55 L150 145 Z" fill="none" stroke="' + fg + '" stroke-width="7" stroke-linejoin="round"/><circle cx="125" cy="40" r="8" fill="' + fg + '"/><path d="M118 55 l14 -14" stroke="' + fg + '" stroke-width="4" stroke-linecap="round"/>'; },
    pedestrian: function(fg) { return personSil(fg, 90, 90, 1.1); },
    pedestrianWhite: function(fg) { return personSil(fg, 90, 95, 1.2); },
    pedestrianWhiteEnd: function(fg) { return personSil(fg, 90, 95, 1.2) + '<line x1="35" y1="145" x2="145" y2="35" stroke="#c81e2c" stroke-width="9"/>'; },
    children: function(fg) { return personSil(fg, 68, 95, 0.9) + personSil(fg, 108, 100, 0.75) + '<line x1="80" y1="105" x2="96" y2="108" stroke="' + fg + '" stroke-width="5" stroke-linecap="round"/>'; },
    horse: function(fg) { return personSil(fg, 100, 75, 0.7) + '<path d="M35 135 Q35 110 55 108 L95 105 Q110 105 112 120 M55 108 L50 90 L65 95 L60 108 M50 135 V115 M85 135 V118" fill="none" stroke="' + fg + '" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'; },
    bicycle: function(fg) { return bikeSil(fg, 90, 100, 0.85); },
    bicycleWhite: function(fg) { return bikeSil(fg, 90, 100, 0.95); },
    bicycleWhiteEnd: function(fg) { return bikeSil(fg, 90, 100, 0.95) + '<line x1="35" y1="145" x2="145" y2="35" stroke="#c81e2c" stroke-width="9"/>'; },
    deer: function(fg) { return '<path d="M45 140 Q45 110 65 108 L110 105 Q130 103 133 120 M65 108 L58 85 M58 85 L48 75 M58 85 L64 73 M60 140 V118 M100 140 V112 M115 140 V115" fill="none" stroke="' + fg + '" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'; },
    workman: function(fg) { return personSil(fg, 78, 85, 1) + '<path d="M90 95 L120 115 M120 115 L135 100 M120 115 L112 140" fill="none" stroke="' + fg + '" stroke-width="6" stroke-linecap="round"/>'; },
    queue: function(fg) { return [0, 1, 2].map(function(i) { return '<rect x="' + (45 + i * 30) + '" y="' + (110 - i * 12) + '" width="20" height="' + (26 + i * 12) + '" fill="none" stroke="' + fg + '" stroke-width="6"/>'; }).join(''); },
    trafficLight: function(fg) { return '<rect x="72" y="45" width="36" height="90" rx="8" fill="none" stroke="' + fg + '" stroke-width="6"/><circle cx="90" cy="65" r="9" fill="' + fg + '"/><circle cx="90" cy="90" r="9" fill="none" stroke="' + fg + '" stroke-width="4"/><circle cx="90" cy="115" r="9" fill="none" stroke="' + fg + '" stroke-width="4"/>'; },
    trainCrossing: function(fg) { return '<path d="M60 45 L120 145 M120 45 L60 145" stroke="' + fg + '" stroke-width="9" stroke-linecap="round"/><circle cx="90" cy="95" r="58" fill="none" stroke="' + fg + '" stroke-width="6"/>'; },
    trainGate: function(fg) { return '<rect x="35" y="85" width="110" height="14" rx="4" fill="' + fg + '"/><rect x="35" y="85" width="18" height="14" fill="#fff"/><rect x="71" y="85" width="18" height="14" fill="#fff"/><rect x="107" y="85" width="18" height="14" fill="#fff"/><circle cx="35" cy="92" r="8" fill="' + fg + '"/>'; },
    exclaim: function(fg) { return '<rect x="82" y="55" width="16" height="55" rx="6" fill="' + fg + '"/><circle cx="90" cy="128" r="10" fill="' + fg + '"/>'; },
    priorityRoad: function(fg) { return '<rect x="65" y="70" width="50" height="50" fill="' + fg + '" transform="rotate(45 90 95)"/>'; },
    priorityRoadEnd: function(fg) { return '<rect x="65" y="70" width="50" height="50" fill="none" stroke="' + fg + '" stroke-width="6" transform="rotate(45 90 95)"/><line x1="40" y1="150" x2="140" y2="40" stroke="#c81e2c" stroke-width="9"/>'; },
    priorityNext: function(fg) { return '<rect x="65" y="70" width="50" height="50" fill="none" stroke="' + fg + '" stroke-width="7" transform="rotate(45 90 95)"/><rect x="65" y="70" width="50" height="20" fill="' + fg + '" transform="rotate(45 90 95)"/>'; },
    priorityRight: function(fg) { return '<path d="M55 65 L125 135 M125 65 L55 135" stroke="' + fg + '" stroke-width="13" stroke-linecap="round"/>'; },
    car: function(fg) { return carSil(fg, 90, 95, 1); },
    motorcycle: function(fg) { return motoSil(fg, 90, 95, 1); },
    truck: function(fg) { return truckSil(fg, 90, 95, 1); },
    noOvertake: function(fg) { return carSil(fg, 105, 78, 0.62) + carSil("#c81e2c", 65, 112, 0.62); },
    noOvertakeTruck: function(fg) { return truckSil(fg, 105, 78, 0.6) + carSil("#c81e2c", 65, 112, 0.6); },
    arrowRight: function(fg) { return arrowShape(fg, "right"); },
    arrowLeft: function(fg) { return arrowShape(fg, "left"); },
    checkmark: function(fg) { return '<path d="M55 95 L80 125 L135 60" fill="none" stroke="' + fg + '" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>'; },
    town: function(fg) { return '<path d="M35 135 V95 L55 80 L75 95 V135 M85 135 V70 L110 55 L135 70 V135 M85 135 H150" fill="none" stroke="' + fg + '" stroke-width="6" stroke-linejoin="round"/>'; },
    townEnd: function(fg) { return PICTOGRAMS.town(fg) + '<line x1="30" y1="140" x2="150" y2="50" stroke="#c81e2c" stroke-width="9"/>'; },
    highway: function(fg) { return '<path d="M50 145 L75 45 H105 L130 145 M65 105 H115 M72 80 H108" fill="none" stroke="' + fg + '" stroke-width="7" stroke-linejoin="round"/>'; },
    carRoad: function(fg) { return carSil(fg, 90, 100, 1); },
    deadEnd: function(fg) { return '<path d="M90 145 V55 M60 85 L90 55 L120 85" fill="none" stroke="' + fg + '" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><line x1="45" y1="145" x2="135" y2="145" stroke="' + fg + '" stroke-width="9" stroke-linecap="round"/>'; },
    residential: function(fg) { return personSil(fg, 65, 100, 0.75) + carSil(fg, 118, 108, 0.55); },
    residentialEnd: function(fg) { return PICTOGRAMS.residential(fg) + '<line x1="35" y1="145" x2="145" y2="35" stroke="#c81e2c" stroke-width="9"/>'; },
    oneWay: function(fg) { return '<rect x="35" y="78" width="70" height="32" fill="' + fg + '"/><path d="M100 63 L135 94 L100 125 Z" fill="' + fg + '"/>'; },
    bus: function(fg) { return '<rect x="45" y="55" width="90" height="60" rx="10" fill="none" stroke="' + fg + '" stroke-width="7"/><rect x="58" y="68" width="24" height="18" fill="' + fg + '"/><rect x="98" y="68" width="24" height="18" fill="' + fg + '"/><circle cx="65" cy="118" r="8" fill="' + fg + '"/><circle cx="115" cy="118" r="8" fill="' + fg + '"/>'; },
    tram: function(fg) { return '<rect x="45" y="55" width="90" height="55" rx="6" fill="none" stroke="' + fg + '" stroke-width="7"/><line x1="60" y1="70" x2="120" y2="70" stroke="' + fg + '" stroke-width="6"/><line x1="90" y1="30" x2="90" y2="55" stroke="' + fg + '" stroke-width="5"/><circle cx="65" cy="118" r="8" fill="' + fg + '"/><circle cx="115" cy="118" r="8" fill="' + fg + '"/>'; },
    bench: function(fg) { return '<path d="M40 100 H140 M40 100 V140 M140 100 V140 M55 100 V80 H125 V100" fill="none" stroke="' + fg + '" stroke-width="7" stroke-linejoin="round"/>'; },
    fuelWrench: function(fg) { return '<rect x="55" y="55" width="35" height="80" rx="6" fill="none" stroke="' + fg + '" stroke-width="6"/><path d="M55 75 H40 V95 H55" fill="none" stroke="' + fg + '" stroke-width="6"/><path d="M110 130 L145 95 M145 95 a10 10 0 1 0 -14 -14 l-8 8 l6 6 l-20 20 Z" fill="none" stroke="' + fg + '" stroke-width="6" stroke-linejoin="round"/>'; },
    parkingPaid: function(fg) { return '<text x="78" y="118" text-anchor="middle" font-size="70" font-weight="900" fill="' + fg + '" font-family="Arial">P</text><circle cx="128" cy="125" r="18" fill="none" stroke="' + fg + '" stroke-width="5"/><text x="128" y="131" text-anchor="middle" font-size="16" font-weight="900" fill="' + fg + '" font-family="Arial">€</text>'; },
    police: function(fg) { return '<path d="M90 40 L130 55 V95 Q130 130 90 150 Q50 130 50 95 V55 Z" fill="none" stroke="' + fg + '" stroke-width="6" stroke-linejoin="round"/><path d="M75 98 l10 12 l24 -30" fill="none" stroke="' + fg + '" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'; },
    hospital: function(fg) { return '<rect x="72" y="45" width="16" height="70" fill="' + fg + '" transform="translate(2,0)"/><rect x="55" y="72" width="70" height="16" fill="' + fg + '" transform="translate(2,0)"/>'; },
    pharmacy: function(fg) { return '<rect x="70" y="50" width="20" height="80" rx="4" fill="' + fg + '"/><rect x="50" y="80" width="80" height="20" rx="4" fill="' + fg + '"/>'; },
    phone: function(fg) { return '<path d="M65 55 q-10 10 0 25 q15 20 35 35 q15 10 25 0 l8 -8 q4 -4 0 -9 l-14 -14 q-4 -4 -9 0 l-6 6 q-10 -6 -19 -19 l6 -6 q4 -5 0 -9 l-14 -14 q-5 -4 -9 0 Z" fill="' + fg + '"/>'; },
    fuel: function(fg) { return '<rect x="50" y="60" width="45" height="75" rx="4" fill="none" stroke="' + fg + '" stroke-width="6"/><line x1="50" y1="80" x2="95" y2="80" stroke="' + fg + '" stroke-width="6"/><path d="M95 90 h15 q10 0 10 10 v25 q0 8 8 8 q8 0 8 -8 v-45 l-14 -14" fill="none" stroke="' + fg + '" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/>'; },
    dip: function(fg) { return '<path d="M30 100 Q60 100 65 130 Q70 160 90 160 Q110 160 115 130 Q120 100 150 100" fill="none" stroke="' + fg + '" stroke-width="8" stroke-linecap="round" transform="translate(0,-30)"/>'; },
    domesticAnimal: function(fg) { return '<path d="M40 140 Q40 115 58 113 L100 110 Q118 108 120 122 M58 113 L48 95 L65 90 L68 108 M60 140 V120 M95 140 V116 M108 140 V118" fill="none" stroke="' + fg + '" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 128 L25 118" stroke="' + fg + '" stroke-width="6" stroke-linecap="round"/>'; },
    airplane: function(fg) { return '<path d="M90 45 L98 95 L145 120 L145 130 L98 118 L94 145 L110 158 L110 165 L90 160 L70 165 L70 158 L86 145 L82 118 L35 130 L35 120 L82 95 Z" fill="' + fg + '"/>'; },
    crosswind: function(fg) { return [70, 90, 110].map(function(y, i) { var off = i * 6; return '<path d="M' + (40 + off) + ' ' + y + ' q15 -14 30 0 q15 14 30 0 q15 -14 30 0" fill="none" stroke="' + fg + '" stroke-width="7" stroke-linecap="round"/>'; }).join(''); },
    levelCrossingAhead: function(fg) { return '<rect x="35" y="82" width="110" height="12" rx="3" fill="' + fg + '"/><circle cx="35" cy="88" r="7" fill="' + fg + '"/><line x1="35" y1="95" x2="35" y2="140" stroke="' + fg + '" stroke-width="6" stroke-linecap="round"/>'; },
    levelCrossingLattice: function(fg) { return [-40, 0, 40].map(function(dx) { return '<g transform="translate(' + dx + ',0)"><path d="M90 65 L110 95 L90 125 L70 95 Z" fill="none" stroke="' + fg + '" stroke-width="6"/></g>'; }).join(''); },
    flagTriangle: function(fg) { return '<path d="M90 30 V90 M90 30 L130 42 L90 58 Z" fill="' + fg + '" stroke="' + fg + '" stroke-width="6" stroke-linejoin="round"/>'; },
    circleUpDown: function(fg) { return '<circle cx="90" cy="90" r="58" fill="none" stroke="' + fg + '" stroke-width="7"/><path d="M70 115 V65 M60 78 L70 65 L80 78" fill="none" stroke="' + fg + '" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M110 65 V115 M100 102 L110 115 L120 102" fill="none" stroke="#c81e2c" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'; },
    rectUpDown: function(fg) { return '<path d="M70 140 V60 M58 76 L70 60 L82 76" fill="none" stroke="#c81e2c" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M110 60 V140 M98 124 L110 140 L122 124" fill="none" stroke="' + fg + '" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'; },
    arrowUp: function(fg) { return arrowShape(fg, "up"); },
    arrowDiagLeft: function(fg) { return '<g transform="rotate(-45 90 95)">' + arrowShape(fg, "up") + '</g>'; },
    arrowDiagRight: function(fg) { return '<g transform="rotate(45 90 95)">' + arrowShape(fg, "up") + '</g>'; },
    curveSimpleLeft: function(fg) { return '<path d="M115 55 Q60 55 60 100 V140" fill="none" stroke="' + fg + '" stroke-width="12" stroke-linecap="round"/><path d="M45 125 L60 140 L75 125" fill="none" stroke="' + fg + '" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>'; },
    curveSimpleRight: function(fg) { return '<path d="M65 55 Q120 55 120 100 V140" fill="none" stroke="' + fg + '" stroke-width="12" stroke-linecap="round"/><path d="M105 125 L120 140 L135 125" fill="none" stroke="' + fg + '" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>'; },
    doubleArrowLeft: function(fg) { return '<path d="M90 140 V60 M75 75 L90 60 L105 75" fill="none" stroke="' + fg + '" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M90 100 H55 M68 88 L55 100 L68 112" fill="none" stroke="' + fg + '" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'; },
    doubleArrowRight: function(fg) { return '<path d="M90 140 V60 M75 75 L90 60 L105 75" fill="none" stroke="' + fg + '" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M90 100 H125 M112 88 L125 100 L112 112" fill="none" stroke="' + fg + '" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'; },
    roundabout: function(fg) { return '<circle cx="90" cy="90" r="45" fill="none" stroke="' + fg + '" stroke-width="10"/><path d="M126 60 L133 78 L114 74 Z" fill="' + fg + '"/>'; },
    splitPathA: function(fg) { return '<line x1="90" y1="35" x2="90" y2="155" stroke="' + fg + '" stroke-width="4"/>' + bikeSil(fg, 58, 100, 0.5) + personSil(fg, 118, 105, 0.55) + bikeSil(fg, 118, 125, 0.35); },
    splitPathB: function(fg) { return '<line x1="90" y1="35" x2="90" y2="155" stroke="' + fg + '" stroke-width="8"/>' + bikeSil(fg, 55, 95, 0.55) + personSil(fg, 125, 95, 0.7); },
    bikePedCombo: function(fg) { return bikeSil(fg, 65, 110, 0.55) + personSil(fg, 118, 90, 0.7); },
    horseWhite: function(fg) { return PICTOGRAMS.horse(fg); },
    noTurnLeft: function(fg) { return arrowShape(fg, "left") + '<line x1="35" y1="35" x2="145" y2="145" stroke="#c81e2c" stroke-width="9"/>'; },
    noTurnRight: function(fg) { return arrowShape(fg, "right") + '<line x1="145" y1="35" x2="35" y2="145" stroke="#c81e2c" stroke-width="9"/>'; },
    noUTurn: function(fg) { return '<path d="M110 130 V80 a25 25 0 0 0 -50 0 v25" fill="none" stroke="' + fg + '" stroke-width="10" stroke-linecap="round"/><path d="M45 90 L60 105 L75 90" fill="none" stroke="' + fg + '" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><line x1="35" y1="35" x2="145" y2="145" stroke="#c81e2c" stroke-width="9"/>'; },
    caravan: function(fg) { return '<path d="M35 110 h80 a10 10 0 0 1 10 10 v10 h-90 Z" fill="none" stroke="' + fg + '" stroke-width="6" stroke-linejoin="round"/><line x1="20" y1="130" x2="35" y2="120" stroke="' + fg + '" stroke-width="5"/><circle cx="60" cy="132" r="9" fill="' + fg + '"/><circle cx="95" cy="132" r="9" fill="' + fg + '"/>'; },
    tunnel: function(fg) { return '<path d="M35 135 V95 a55 55 0 0 1 110 0 v40" fill="none" stroke="' + fg + '" stroke-width="8"/><line x1="35" y1="135" x2="35" y2="150" stroke="' + fg + '" stroke-width="8"/><line x1="145" y1="135" x2="145" y2="150" stroke="' + fg + '" stroke-width="8"/>'; },
    highwayEnd: function(fg) { return PICTOGRAMS.highway(fg) + '<line x1="30" y1="150" x2="150" y2="40" stroke="#c81e2c" stroke-width="9"/>'; },
    carRoadEnd: function(fg) { return PICTOGRAMS.carRoad(fg) + '<line x1="30" y1="150" x2="150" y2="40" stroke="#c81e2c" stroke-width="9"/>'; },
    twoWay: function(fg) { return '<path d="M60 65 V135 M48 78 L60 65 L72 78" fill="none" stroke="' + fg + '" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M120 135 V65 M108 122 L120 135 L132 122" fill="none" stroke="' + fg + '" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'; },
    phoneSos: function(fg) { return PICTOGRAMS.phone(fg) + '<text x="90" y="150" text-anchor="middle" font-size="16" font-weight="900" fill="' + fg + '" font-family="Arial">SOS</text>'; },
    evCharge: function(fg) { return '<path d="M95 40 L60 100 h20 l-15 45 l45 -65 h-20 Z" fill="' + fg + '"/>'; },
    bed: function(fg) { return '<path d="M35 140 V95 h110 v45 M35 115 h30 a12 12 0 0 1 0 -24 h20 a12 12 0 0 1 12 12 v12" fill="none" stroke="' + fg + '" stroke-width="6" stroke-linejoin="round"/><line x1="35" y1="128" x2="145" y2="128" stroke="' + fg + '" stroke-width="5"/>'; },
    forkKnife: function(fg) { return '<line x1="60" y1="40" x2="60" y2="150" stroke="' + fg + '" stroke-width="7" stroke-linecap="round"/><path d="M45 40 v35 M60 40 v35 M75 40 v35" stroke="' + fg + '" stroke-width="5" stroke-linecap="round"/><path d="M120 40 v50 a15 15 0 0 1 -15 15 v45" fill="none" stroke="' + fg + '" stroke-width="7" stroke-linecap="round"/>'; },
    cup: function(fg) { return '<path d="M50 60 h70 v40 a35 35 0 0 1 -70 0 Z" fill="none" stroke="' + fg + '" stroke-width="7"/><path d="M120 75 h15 a15 15 0 0 1 0 30 h-15" fill="none" stroke="' + fg + '" stroke-width="6"/><line x1="45" y1="150" x2="135" y2="150" stroke="' + fg + '" stroke-width="7" stroke-linecap="round"/>'; },
    tent: function(fg) { return '<path d="M90 45 L150 140 H30 Z" fill="none" stroke="' + fg + '" stroke-width="7" stroke-linejoin="round"/><path d="M90 45 L90 140" stroke="' + fg + '" stroke-width="5"/><path d="M65 140 L90 90 L115 140" fill="none" stroke="' + fg + '" stroke-width="5" stroke-linejoin="round"/>'; },
    infoI: function(fg) { return '<circle cx="90" cy="55" r="11" fill="' + fg + '"/><rect x="80" y="78" width="20" height="62" rx="4" fill="' + fg + '"/>'; }
};
function renderPictogram(panel, fg) {
    var fn = panel.pict && PICTOGRAMS[panel.pict];
    return fn ? fn(fg) : "";
}

function makeSignSVG(panel, small) {
    small = small || false;
    var ink = "#171a1f";
    var content = "";
    if (panel.cat === "A" || panel.cat === "T") {
        var color = panel.cat === "T" ? "#ff8c00" : "#c81e2c";
        content = '<polygon points="90,12 168,154 12,154" fill="#fff" stroke="' + color + '" stroke-width="12" stroke-linejoin="round"/>';
        content += renderPictogram(panel, ink) || ('<rect x="85" y="70" width="10" height="40" rx="3" fill="' + ink + '"/><circle cx="90" cy="122" r="5" fill="' + ink + '"/>');
    } else if (panel.cat === "B") {
        if (panel.code === "B1" || panel.code === "B3") {
            content = '<polygon points="12,30 168,30 90,160" fill="#fff" stroke="#c81e2c" stroke-width="12" stroke-linejoin="round"/>';
            if (panel.panonceauText) content += '<text x="90" y="115" text-anchor="middle" font-size="' + (small ? 14 : 22) + '" font-weight="900" fill="' + ink + '" font-family="Arial">' + escapeHTML(panel.panonceauText) + '</text>';
        } else if (panel.code === "B5" || panel.code === "B7") {
            content = '<polygon points="60,10 120,10 170,60 170,120 120,170 60,170 10,120 10,60" fill="#c81e2c" stroke="#7a0f18" stroke-width="3" stroke-linejoin="round"/><text x="90" y="102" text-anchor="middle" font-size="' + (small ? 13 : 24) + '" font-weight="900" fill="#fff" font-family="Arial">' + escapeHTML(panel.panonceauText || "STOP") + '</text>';
        } else if (panel.code === "B11" || panel.code === "B13") {
            content = '<rect x="65" y="70" width="50" height="50" fill="none" stroke="' + ink + '" stroke-width="6" transform="rotate(45 90 95)"/><line x1="40" y1="150" x2="140" y2="40" stroke="#c81e2c" stroke-width="9"/>';
            if (panel.panonceauText) content += '<text x="90" y="158" text-anchor="middle" font-size="' + (small ? 12 : 18) + '" font-weight="900" fill="' + ink + '" font-family="Arial">' + escapeHTML(panel.panonceauText) + '</text>';
        } else {
            content = '<polygon points="90,12 168,90 90,168 12,90" fill="#e8a400" stroke="' + ink + '" stroke-width="2.5"/>' + renderPictogram(panel, ink);
        }
    } else if (panel.cat === "C") {
        if (panel.code === "C1") {
            content = '<circle cx="90" cy="90" r="76" fill="#c81e2c"/><rect x="30" y="76" width="120" height="28" rx="4" fill="#fff"/>';
        } else if (panel.code === "C3") {
            content = '<circle cx="90" cy="90" r="76" fill="#fff" stroke="#c81e2c" stroke-width="14"/>';
        } else if (panel.num) {
            content = '<circle cx="90" cy="90" r="76" fill="#fff" stroke="#c81e2c" stroke-width="14"/><text x="90" y="108" text-anchor="middle" font-size="' + (small ? 22 : 52) + '" font-weight="900" fill="' + ink + '" font-family="Arial">' + escapeHTML(panel.num) + '</text>';
        } else if (panel.panonceauText) {
            content = '<circle cx="90" cy="90" r="76" fill="#fff" stroke="#c81e2c" stroke-width="14"/><text x="90" y="100" text-anchor="middle" font-size="' + (small ? 14 : 22) + '" font-weight="900" fill="' + ink + '" font-family="Arial">' + escapeHTML(panel.panonceauText) + '</text>';
        } else if (panel.pict) {
            content = '<circle cx="90" cy="90" r="76" fill="#fff" stroke="#c81e2c" stroke-width="14"/>' + renderPictogram(panel, ink);
        } else {
            content = '<circle cx="90" cy="90" r="76" fill="#fff" stroke="#9aa1aa" stroke-width="3"/><line x1="35" y1="125" x2="125" y2="35" stroke="#4a4d52" stroke-width="8"/>';
        }
    } else if (panel.cat === "D") {
        content = '<circle cx="90" cy="90" r="76" fill="#1c5fa8"/>' + (renderPictogram(panel, "#fff") || '<path d="M90 130 V50 M65 75 L90 50 L115 75" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>');
    } else if (panel.cat === "E") {
        if (panel.code === "E1") {
            content = '<circle cx="90" cy="90" r="76" fill="#1c5fa8"/><line x1="35" y1="145" x2="145" y2="35" stroke="#c81e2c" stroke-width="12"/>';
        } else if (panel.code === "E3") {
            content = '<circle cx="90" cy="90" r="76" fill="#1c5fa8"/><line x1="35" y1="145" x2="145" y2="35" stroke="#c81e2c" stroke-width="10"/><line x1="35" y1="35" x2="145" y2="145" stroke="#c81e2c" stroke-width="10"/>';
        } else if (panel.code === "E5" || panel.code === "E7") {
            content = '<circle cx="90" cy="90" r="76" fill="#1c5fa8"/><line x1="35" y1="145" x2="145" y2="35" stroke="#c81e2c" stroke-width="12"/><text x="90" y="150" text-anchor="middle" font-size="' + (small ? 13 : 18) + '" font-weight="900" fill="#fff" font-family="Arial">' + escapeHTML(panel.panonceauText || "") + '</text>';
        } else {
            content = '<rect x="12" y="12" width="156" height="156" rx="14" fill="#1c5fa8"/><text x="90" y="122" text-anchor="middle" font-size="' + (small ? 42 : 90) + '" font-weight="900" fill="#fff" font-family="Arial">P</text>';
        }
    } else if (panel.cat === "F") {
        if (panel.code === "F4a" || panel.code === "F4b") {
            content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#fff" stroke="' + ink + '" stroke-width="3"/><text x="90" y="45" text-anchor="middle" font-size="' + (small ? 12 : 18) + '" font-weight="900" fill="' + ink + '" letter-spacing="2">ZONE</text><circle cx="90" cy="105" r="42" fill="#fff" stroke="#c81e2c" stroke-width="9"/><text x="90" y="118" text-anchor="middle" font-size="' + (small ? 18 : 34) + '" font-weight="900" fill="' + ink + '" font-family="Arial">30</text>';
            if (panel.code === "F4b") content += '<line x1="30" y1="140" x2="150" y2="50" stroke="#c81e2c" stroke-width="9"/>';
        } else if (panel.code === "F59a") {
            content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#1c5fa8"/><text x="90" y="122" text-anchor="middle" font-size="' + (small ? 42 : 90) + '" font-weight="900" fill="#fff" font-family="Arial">P</text>';
        } else {
            var whiteBgPicts = ["town", "townEnd", "deadEnd", "residential", "residentialEnd"];
            if (whiteBgPicts.indexOf(panel.pict) >= 0) {
                content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#fff" stroke="' + ink + '" stroke-width="6"/>' + renderPictogram(panel, ink);
            } else {
                content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#1c5fa8"/>' + (renderPictogram(panel, "#fff") || '<text x="90" y="122" text-anchor="middle" font-size="' + (small ? 42 : 90) + '" font-weight="900" fill="#fff" font-family="Arial">?</text>');
            }
        }
    } else if (panel.cat === "MECA") {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#3d4451"/><path d="M55 70 a20 20 0 1 1 0 0.1" fill="none" stroke="#fff" stroke-width="9"/><path d="M120 60 L150 30 M150 30 l8 8 M150 30 l-8 8 M100 80 L140 120 M60 110 L40 130 M40 130 l0 12 M40 130 l-12 0" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/><circle cx="75" cy="95" r="26" fill="none" stroke="#fff" stroke-width="9"/>';
    } else if (panel.cat === "PNEU") {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#20242b"/><circle cx="90" cy="90" r="62" fill="none" stroke="#fff" stroke-width="10"/><circle cx="90" cy="90" r="30" fill="#fff"/><circle cx="90" cy="90" r="10" fill="#20242b"/>' + [0,60,120,180,240,300].map(function(a){var r1=52,r2=70,x1=90+r1*Math.cos(a*Math.PI/180),y1=90+r1*Math.sin(a*Math.PI/180),x2=90+r2*Math.cos(a*Math.PI/180),y2=90+r2*Math.sin(a*Math.PI/180);return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="#fff" stroke-width="7"/>';}).join('');
    } else if (panel.cat === "SAI") {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#0e7c86"/><g stroke="#fff" stroke-width="8" stroke-linecap="round">' + [0,60,120].map(function(a){var x=54*Math.cos(a*Math.PI/180),y=54*Math.sin(a*Math.PI/180);return '<line x1="'+(90-x)+'" y1="'+(90-y)+'" x2="'+(90+x)+'" y2="'+(90+y)+'"/>';}).join('') + '</g>';
    } else if (panel.cat === "SEC") {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#c81e2c"/><rect x="72" y="34" width="36" height="112" rx="6" fill="#fff"/><rect x="34" y="72" width="112" height="36" rx="6" fill="#fff"/>';
    } else if (panel.cat === "LEG") {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#6b46c1"/><line x1="90" y1="35" x2="90" y2="130" stroke="#fff" stroke-width="8"/><line x1="40" y1="55" x2="140" y2="55" stroke="#fff" stroke-width="8"/><path d="M40 55 L25 90 a15 15 0 0 0 30 0 Z" fill="none" stroke="#fff" stroke-width="7"/><path d="M140 55 L125 90 a15 15 0 0 0 30 0 Z" fill="none" stroke="#fff" stroke-width="7"/><rect x="65" y="128" width="50" height="10" rx="3" fill="#fff"/>';
    } else if (panel.cat === "EQ") {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#e8a400"/><circle cx="90" cy="85" r="34" fill="#fff"/><path d="M78 118 h24 v10 a12 12 0 0 1 -24 0 Z" fill="#fff"/><line x1="90" y1="45" x2="90" y2="55" stroke="#fff" stroke-width="7" stroke-linecap="round"/>';
    } else if (panel.cat === "MAR") {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#4a4d52"/><line x1="90" y1="20" x2="90" y2="55" stroke="#fff" stroke-width="10"/><line x1="90" y1="75" x2="90" y2="105" stroke="#fff" stroke-width="10"/><line x1="90" y1="125" x2="90" y2="160" stroke="#fff" stroke-width="10"/>';
    } else if (panel.cat === "CND") {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#1c5fa8"/><path d="M55 95 a25 25 0 0 1 0-50 a32 32 0 0 1 62 8 a24 24 0 0 1 -6 47 Z" fill="#fff"/><g stroke="#e8a400" stroke-width="7" stroke-linecap="round"><line x1="55" y1="118" x2="45" y2="140"/><line x1="90" y1="118" x2="80" y2="140"/><line x1="125" y1="118" x2="115" y2="140"/></g>';
    } else if (panel.cat === "VEH") {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#3d4451"/><rect x="25" y="80" width="90" height="35" rx="5" fill="#fff"/><rect x="115" y="95" width="35" height="20" rx="4" fill="#fff"/><circle cx="55" cy="120" r="14" fill="#20242b" stroke="#fff" stroke-width="5"/><circle cx="128" cy="120" r="14" fill="#20242b" stroke="#fff" stroke-width="5"/>';
    } else if (panel.cat === "PSY") {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#1e7a3c"/><rect x="40" y="95" width="20" height="45" fill="#fff"/><rect x="70" y="70" width="20" height="70" fill="#fff"/><rect x="100" y="50" width="20" height="90" fill="#fff"/><rect x="130" y="80" width="20" height="60" fill="#fff"/>';
    } else if (panel.cat === "RUL") {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#6b46c1"/><path d="M90 30 L140 45 V90 c0 35 -25 55 -50 60 c-25 -5 -50 -25 -50 -60 V45 Z" fill="#fff"/><path d="M65 92 l16 16 l34 -38" fill="none" stroke="#6b46c1" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>';
    } else if (panel.cat === "TRP") {
        content = '<polygon points="90,20 165,155 15,155" fill="#fff" stroke="#6b46c1" stroke-width="12" stroke-linejoin="round"/><rect x="83" y="70" width="14" height="45" rx="4" fill="#6b46c1"/><circle cx="90" cy="130" r="7" fill="#6b46c1"/>';
    } else if (panel.cat === "USA") {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#6b46c1"/><circle cx="90" cy="55" r="18" fill="#fff"/><path d="M60 145 v-30 a30 30 0 0 1 60 0 v30 Z" fill="#fff"/>';
    } else if (panel.cat === "INF") {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#6b46c1"/><circle cx="90" cy="90" r="58" fill="none" stroke="#fff" stroke-width="9"/><text x="90" y="108" text-anchor="middle" font-size="' + (small ? 40 : 78) + '" font-weight="900" fill="#fff" font-family="Arial">€</text>';
    } else if (panel.cat === "AUTO") {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#1e7a3c"/><rect x="50" y="30" width="80" height="120" rx="6" fill="#fff"/><rect x="65" y="22" width="50" height="14" rx="4" fill="#fff"/><line x1="63" y1="65" x2="117" y2="65" stroke="#1e7a3c" stroke-width="6"/><line x1="63" y1="90" x2="117" y2="90" stroke="#1e7a3c" stroke-width="6"/><path d="M63 112 l8 8 l14 -16" fill="none" stroke="#1e7a3c" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><line x1="100" y1="118" x2="117" y2="118" stroke="#1e7a3c" stroke-width="6"/>';
    } else {
        content = '<rect x="12" y="12" width="156" height="156" rx="10" fill="#1c5fa8"/><text x="90" y="122" text-anchor="middle" font-size="' + (small ? 42 : 90) + '" font-weight="900" fill="#fff" font-family="Arial">?</text>';
    }
    return '<svg class="sign-svg" viewBox="0 0 180 180" preserveAspectRatio="xMidYMid meet" role="img" aria-label="' + escapeHTML(panel.nom || panel.titre || "") + '" xmlns="http://www.w3.org/2000/svg">' + content + '</svg>';
}

// =========================================================
// RENDU QUESTION
// =========================================================

function renderProgressDots() {
    if (!$("progressDots")) return;
    var html = "";
    for (var i = 0; i < state.questions.length; i++) {
        html += '<i class="' + (i < state.index ? "done" : "") + '"></i>';
    }
    $("progressDots").innerHTML = html;
}

function renderQuestion() {
    clearInterval(state.timerId);
    if (state.index >= state.questions.length) { showSummary(); return; }
    renderProgressDots();

    state.questionStartTime = Date.now();

    var panel = state.questions[state.index];
    var totalQ = state.questions.length;

    if ($("quizProgress")) {
        $("quizProgress").textContent = (state.isOfficialExam ? "📚 Examen Officiel" : (state.review ? "⭐ Revision" : "⚡ Question")) + " " + (state.index + 1) + " / " + totalQ;
    }
    if ($("quizScore")) $("quizScore").textContent = "Score : " + state.score;
    if ($("favoriteButton")) {
        var code = panel.code || panel.id || panel.titre || "";
        $("favoriteButton").textContent = favorites().indexOf(code) >= 0 ? "⭐" : "☆";
    }
    if ($("signStage")) $("signStage").innerHTML = makeSignSVG(panel, false);
    if ($("signCaption")) {
        $("signCaption").textContent = (panel.code || panel.id || "") + " — " + (CATEGORIES[panel.cat]?.label || "");
    }

    var distractors = shuffle(ALL_KNOWLEDGE.filter(function(p) { return (p.code || p.id || p.titre) !== (panel.code || panel.id || panel.titre); })).slice(0, 3);
    state.options = shuffle([panel].concat(distractors));
    state.answered = false;

    if ($("optionList")) {
        var optionsHtml = "";
        for (var i = 0; i < state.options.length; i++) {
            var label = state.options[i].nom || state.options[i].titre || "";
            optionsHtml += '<button class="option" onclick="answerQuestion(' + i + ')">' + escapeHTML(label) + '</button>';
        }
        $("optionList").innerHTML = optionsHtml;
    }

    if ($("feedbackZone")) $("feedbackZone").innerHTML = "";
    if ($("nextButtonZone")) $("nextButtonZone").innerHTML = "";

    if (state.timer && $("timerDisplay")) {
        state.seconds = 15;
        $("timerDisplay").classList.remove("hidden");
        $("timerDisplay").classList.remove("low");
        $("timerDisplay").textContent = "⏱ 15s";

        state.timerId = setInterval(function() {
            state.seconds--;
            $("timerDisplay").textContent = "⏱ " + state.seconds + "s";
            $("timerDisplay").classList.toggle("low", state.seconds <= 5);
            if (state.seconds <= 0) {
                clearInterval(state.timerId);
                timeoutQuestion();
            }
        }, 1000);
    } else if ($("timerDisplay")) {
        $("timerDisplay").classList.add("hidden");
    }
}

function timeoutQuestion() { if (state.answered) return;
    completeAnswer(-1); }

function answerQuestion(index) { if (state.answered) return;
    clearInterval(state.timerId);
    completeAnswer(index); }

// Enregistre chaque reponse (juste ou fausse) de facon identique quel que soit le mode de jeu,
// pour que categories faibles, fiche de revision, mode pieges et mode difficile restent coherents.
function recordAnswerOutcome(panel, correct) {
    var code = panel.code || panel.id || panel.titre || "";
    if (!code) return;
    if (correct) {
        var corrects = JSON.parse(localStorage.getItem("correctAnswers") || "{}");
        corrects[code] = (corrects[code] || 0) + 1;
        localStorage.setItem("correctAnswers", JSON.stringify(corrects));
    } else {
        appData.mistakes[code] = (appData.mistakes[code] || 0) + 1;
    }
}

async function completeAnswer(selectedIndex) {
    state.answered = true;
    var panel = state.questions[state.index];
    var selected = selectedIndex >= 0 ? state.options[selectedIndex] : null;
    var correct = selected && (selected.code || selected.id || selected.titre) === (panel.code || panel.id || panel.titre);

    var categoryState = state.categoryStats[panel.cat] || { correct: 0, total: 0 };
    categoryState.total++;

    if (correct) {
        state.score++;
        categoryState.correct++;
        recordAnswerOutcome(panel, true);
        var currentStreak = parseInt(localStorage.getItem("currentStreak") || "0") + 1;
        localStorage.setItem("currentStreak", String(currentStreak));
        var bestStreak = parseInt(localStorage.getItem("bestStreak") || "0");
        if (currentStreak > bestStreak) {
            localStorage.setItem("bestStreak", String(currentStreak));
        }
    } else {
        state.errors.push({ panel: panel, answer: selected ? (selected.nom || selected.titre || "") : "Temps ecoule" });
        recordAnswerOutcome(panel, false);
        localStorage.setItem("currentStreak", "0");
        await saveAppData();
    }

    state.categoryStats[panel.cat] = categoryState;

    var options = document.querySelectorAll("#optionList .option");
    for (var i = 0; i < options.length; i++) {
        options[i].classList.add("locked");
        if ((state.options[i].code || state.options[i].id || state.options[i].titre) === (panel.code || panel.id || panel.titre)) {
            options[i].classList.add("correct");
        } else if (i === selectedIndex && !correct) {
            options[i].classList.add("wrong");
        }
    }

    if ($("feedbackZone")) {
        var label = panel.nom || panel.titre || "";
        $("feedbackZone").innerHTML = '<div class="feedback ' + (correct ? "" : "bad") + '"><b>' + (correct ? "✅ Bonne reponse !" : selectedIndex < 0 ? "⏱ Temps ecoule - c'etait : " + escapeHTML(label) : "❌ Erreur - c'etait : " + escapeHTML(label)) + '</b>' + escapeHTML(panel.desc || "") + '</div>';
    }

    if ($("nextButtonZone")) {
        $("nextButtonZone").innerHTML = '<button class="primary" style="width:100%" onclick="nextQuestion()">' + (state.index + 1 >= state.questions.length ? "📊 Voir le resume" : "➡️ Question suivante") + '</button>';
    }
    if ($("quizScore")) $("quizScore").textContent = "Score : " + state.score;

    // Enregistrer le temps
    if (state.questionStartTime) {
        var time = (Date.now() - state.questionStartTime) / 1000;
        var times = JSON.parse(localStorage.getItem("questionTimes") || "[]");
        times.push(time);
        localStorage.setItem("questionTimes", JSON.stringify(times.slice(-100)));
    }

    // Mettre à jour les stats quotidiennes
    var today = new Date().toDateString();
    var lastDate = localStorage.getItem("lastDate") || "";
    if (lastDate !== today) {
        localStorage.setItem("dailyQuestions", "0");
        localStorage.setItem("lastDate", today);
    }
    var dailyQ = parseInt(localStorage.getItem("dailyQuestions") || "0");
    localStorage.setItem("dailyQuestions", String(dailyQ + 1));
    updateDailyGoal();
    updateBadges();
    updateHomeStats();
}

function nextQuestion() {
    state.index++;
    renderQuestion();
}

// =========================================================
// FAVORIS
// =========================================================

async function toggleFavorite() {
    var panel = state.questions[state.index];
    var code = panel.code || panel.id || panel.titre || "";
    var index = appData.favorites.indexOf(code);
    if (index >= 0) { appData.favorites.splice(index, 1); } else { appData.favorites.push(code); }

    var button = $("favoriteButton");
    if (button) {
        button.textContent = favorites().indexOf(code) >= 0 ? "⭐" : "☆";
        button.classList.remove("pop");
        void button.offsetWidth;
        button.classList.add("pop");
    }
    await saveAppData();
    updateHomeStats();
}

// =========================================================
// RESUME
// =========================================================

// Enregistre la fin d'une session de la meme facon pour tous les modes de jeu
// (quiz, examen, chrono, sans-erreur, defi du jour...) afin que le tableau de bord
// (appData.stats) et le graphique de progression (statsHistory) reflètent tout ce
// qui a ete joue, pas seulement le quiz classique.
function recordSessionCompletion(correct, total, mode, countTowardStats) {
    if (countTowardStats && total > 0) {
        appData.stats.sessions++;
        appData.stats.correct += correct;
        appData.stats.total += total;
    }
    var percent = total > 0 ? Math.round(100 * correct / total) : 0;
    var history = JSON.parse(localStorage.getItem("statsHistory") || "[]");
    history.push({ date: new Date().toLocaleDateString(), score: percent, mode: mode, count: total });
    localStorage.setItem("statsHistory", JSON.stringify(history.slice(-50)));
}

async function showSummary() {
    clearInterval(state.timerId);
    var total = state.questions.length;
    var score = state.score;
    var percentage = total ? Math.round(100 * score / total) : 0;

    recordSessionCompletion(score, total, state.isOfficialExam ? "exam" : (state.review ? "review" : "quiz"), !state.review);
    if (!state.review) {
        await saveAppData();
    }

    if ($("quizRunning")) $("quizRunning").classList.add("hidden");
    if ($("quizSummary")) $("quizSummary").classList.remove("hidden");

    var passed = true;
    if (state.isOfficialExam) {
        passed = score >= 41;
        $("summaryTitle").textContent = passed ? "🎉 EXAMEN REUSSI (Officiel)" : "❌ EXAMEN ECHOUE (Officiel)";
    } else {
        $("summaryTitle").textContent = state.review ? "⭐ Revision terminee" : "⚡ Session terminee";
    }

    if ($("summaryPercent")) {
        $("summaryPercent").textContent = "0%";
        animateCount($("summaryPercent"), 0, percentage, "%", 700);
    }
    if ($("summaryFraction")) $("summaryFraction").textContent = score + " / " + total;

    if ($("summaryMessage")) {
        if (state.isOfficialExam) {
            $("summaryMessage").textContent = passed ? "Felicitations ! Avec " + score + "/50, tu obtiens ton permis theorique." : "Tu as obtenu " + score + "/50. Seuil : 41/50.";
        } else {
            $("summaryMessage").textContent = percentage >= 90 ? "🌟 Excellent !" : percentage >= 70 ? "👍 Bon score." : "📚 Entrainement requis.";
        }
    }

    // Stats du résumé
    var avgTime = getAverageTime();
    var bestStreak = parseInt(localStorage.getItem("bestStreak") || "0");
    if ($("summaryTime")) $("summaryTime").textContent = avgTime > 0 ? avgTime + "s" : "—";
    if ($("summaryStreak")) $("summaryStreak").textContent = bestStreak;
    if ($("summaryDifficulty")) {
        var diffLabel = { facile: "⭐ Facile", moyen: "⭐⭐ Moyen", difficile: "⭐⭐⭐ Difficile" };
        $("summaryDifficulty").textContent = currentDifficulty && diffLabel[currentDifficulty] ? diffLabel[currentDifficulty] : "Tous";
    }

    if ($("categoryResults")) {
        var catHtml = "";
        var catEntries = Object.entries(state.categoryStats);
        for (var i = 0; i < catEntries.length; i++) {
            var cat = catEntries[i][0];
            var result = catEntries[i][1];
            var percent = Math.round(100 * result.correct / result.total);
            catHtml += '<div class="category-result"><div class="category-result-top"><span>' + (CATEGORIES[cat]?.label || cat) + '</span><span>' + result.correct + '/' + result.total + '</span></div><div class="category-track"><span data-target="' + percent + '" style="background:' + (CATEGORIES[cat]?.color || 'var(--blue)') + ';"></span></div></div>';
        }
        $("categoryResults").innerHTML = catHtml;
    }

    requestAnimationFrame(function() {
        var spans = document.querySelectorAll("#categoryResults .category-track span");
        for (var i = 0; i < spans.length; i++) {
            spans[i].style.width = spans[i].dataset.target + "%";
        }
    });

    if (state.errors.length) {
        if ($("errorResults")) {
            var errorHtml = '<details class="errors"><summary>📝 Revoir les ' + state.errors.length + ' erreur(s)</summary>';
            for (var i = 0; i < state.errors.length; i++) {
                var error = state.errors[i];
                var label = error.panel.nom || error.panel.titre || "";
                errorHtml += '<div class="error"><b>[' + escapeHTML(error.panel.code || error.panel.id || "") + '] ' + escapeHTML(label) + '</b><div class="your-answer">❌ Ta reponse : ' + escapeHTML(error.answer) + '</div><div>✅ ' + escapeHTML(error.panel.desc || "") + '</div></div>';
            }
            errorHtml += '</details>';
            $("errorResults").innerHTML = errorHtml;
        }
        if ($("reviewErrorsZone")) {
            $("reviewErrorsZone").innerHTML = '<button class="danger" style="width:100%" onclick="reviewErrors()">🔄 Refaire mes erreurs (' + state.errors.length + ')</button>';
        }
    } else {
        if ($("errorResults")) $("errorResults").innerHTML = "";
        if ($("reviewErrorsZone")) $("reviewErrorsZone").innerHTML = "";
    }

    updateBadges();
    updateHomeStats();
}

// =========================================================
// 19 FONCTIONNALITES
// =========================================================

// ---- 1. GRAPHIQUE DE PROGRESSION ----
function updateProgressChart() {
    var chart = document.getElementById("progressChart");
    if (!chart) return;

    var history = JSON.parse(localStorage.getItem("statsHistory") || "[]");
    if (history.length === 0) {
        chart.innerHTML = '<div style="text-align: center; width: 100%; color: var(--muted);">📊 Commence à répondre à des questions pour voir ta progression !</div>';
        return;
    }

    var recent = history.slice(-20);
    var max = Math.max(...recent.map(function(s) { return s.score || 0; }), 1);

    chart.innerHTML = '';
    for (var i = 0; i < recent.length; i++) {
        var bar = document.createElement('div');
        bar.style.cssText = 'flex:1; display:flex; flex-direction:column; align-items:center; height:100%; justify-content:flex-end;';

        var height = Math.max(5, (recent[i].score || 0) / max * 100);
        var color = recent[i].score >= 80 ? 'var(--good)' : recent[i].score >= 50 ? 'var(--amber)' : 'var(--red)';

        bar.innerHTML = `
            <div class="chart-bar" style="height:${height}%; background:${color}; min-height:5px;"></div>
            <div class="chart-bar-label">${recent[i].date || ''}</div>
        `;
        chart.appendChild(bar);
    }
}

// ---- 2. TEMPS MOYEN - déjà fait avec getAverageTime()

// ---- 3. CATEGORIES FAIBLES ----
function getWeakCategories() {
    var mistakes = appData.mistakes || {};
    var totals = {};
    var wrongs = {};

    for (var key in mistakes) {
        var item = ALL_KNOWLEDGE.find(function(p) { return (p.code || p.id || p.titre) === key; });
        if (item) {
            var cat = item.cat || "Inconnu";
            if (!totals[cat]) { totals[cat] = 0;
                wrongs[cat] = 0; }
            totals[cat]++;
            wrongs[cat]++;
        }
    }

    var corrects = JSON.parse(localStorage.getItem("correctAnswers") || "{}");
    for (var key2 in corrects) {
        var item2 = ALL_KNOWLEDGE.find(function(p) { return (p.code || p.id || p.titre) === key2; });
        if (item2) {
            var cat2 = item2.cat || "Inconnu";
            if (!totals[cat2]) { totals[cat2] = 0;
                wrongs[cat2] = 0; }
            totals[cat2] += corrects[key2] || 0;
        }
    }

    var weak = [];
    for (var cat in totals) {
        if (totals[cat] > 0) {
            var ratio = (wrongs[cat] || 0) / totals[cat];
            weak.push({ category: cat, ratio: ratio, total: totals[cat], wrong: wrongs[cat] || 0 });
        }
    }

    weak.sort(function(a, b) { return b.ratio - a.ratio; });
    return weak.slice(0, 5);
}

// ---- 4. SERIE - déjà gérée dans completeAnswer

// ---- 5. MEILLEUR SCORE - déjà dans localStorage

// ---- 6. COURSE CONTRE LA MONTRE ----
var timedModeState = { active: false, timer: null, timeLeft: 60, score: 0, questions: [], index: 0, options: [], answered: false };

function startTimedMode() {
    var pool = ALL_KNOWLEDGE.slice();
    timedModeState.questions = shuffle(pool);
    timedModeState.index = 0;
    timedModeState.score = 0;
    timedModeState.timeLeft = 60;
    timedModeState.active = true;

    hideViews();
    if ($("quiz")) $("quiz").classList.remove("hidden");
    if ($("quizConfig")) $("quizConfig").classList.add("hidden");
    if ($("quizSummary")) $("quizSummary").classList.add("hidden");
    if ($("quizRunning")) $("quizRunning").classList.remove("hidden");

    $("quizProgress").textContent = "⏱️ Course contre la montre";
    $("quizScore").textContent = "Score: 0";
    $("quizModeLabel").textContent = "⏱️ TIMED";
    $("quizModeLabel").style.background = "var(--red)";
    $("quizModeLabel").style.color = "white";

    var timerDisplay = $("timerDisplay");
    if (timerDisplay) {
        timerDisplay.classList.remove("hidden");
        timerDisplay.textContent = "⏱️ 60s";
        timerDisplay.style.background = "var(--red)";
        timerDisplay.style.color = "white";
        timerDisplay.classList.remove("low");
    }

    renderTimedQuestion();

    if (timedModeState.timer) clearInterval(timedModeState.timer);
    timedModeState.timer = setInterval(function() {
        timedModeState.timeLeft--;
        if (timerDisplay) {
            timerDisplay.textContent = "⏱️ " + timedModeState.timeLeft + "s";
            if (timedModeState.timeLeft <= 10) {
                timerDisplay.classList.add("low");
            }
        }
        if (timedModeState.timeLeft <= 0) {
            clearInterval(timedModeState.timer);
            timedModeState.active = false;
            endTimedMode();
        }
    }, 1000);
}

function renderTimedQuestion() {
    if (timedModeState.index >= timedModeState.questions.length || !timedModeState.active) {
        endTimedMode();
        return;
    }

    var panel = timedModeState.questions[timedModeState.index];
    $("signStage").innerHTML = makeSignSVG(panel, false);
    $("signCaption").textContent = (panel.code || "") + " — " + (CATEGORIES[panel.cat]?.label || "");
    $("question").textContent = "Quelle est la designation exacte ?";
    $("quizScore").textContent = "Score: " + timedModeState.score;

    var distractors = shuffle(ALL_KNOWLEDGE.filter(function(p) { return (p.code || p.id || p.titre) !== (panel.code || panel.id || panel.titre); })).slice(0, 3);
    timedModeState.options = shuffle([panel].concat(distractors));
    timedModeState.answered = false;

    var optionsHtml = "";
    for (var i = 0; i < timedModeState.options.length; i++) {
        var label = timedModeState.options[i].nom || timedModeState.options[i].titre || "";
        optionsHtml += '<button class="option" onclick="answerTimedQuestion(' + i + ')">' + escapeHTML(label) + '</button>';
    }
    $("optionList").innerHTML = optionsHtml;
    $("feedbackZone").innerHTML = "";
    $("nextButtonZone").innerHTML = "";
}

async function answerTimedQuestion(index) {
    if (timedModeState.answered || !timedModeState.active) return;
    timedModeState.answered = true;

    var panel = timedModeState.questions[timedModeState.index];
    var selected = timedModeState.options[index];
    var correct = selected && (selected.code || selected.id || selected.titre) === (panel.code || panel.id || panel.titre);

    recordAnswerOutcome(panel, correct);
    if (correct) {
        timedModeState.score++;
    } else {
        await saveAppData();
    }

    $("quizScore").textContent = "Score: " + timedModeState.score;

    var options = document.querySelectorAll("#optionList .option");
    for (var i = 0; i < options.length; i++) {
        options[i].classList.add("locked");
        if ((timedModeState.options[i].code || timedModeState.options[i].id || timedModeState.options[i].titre) === (panel.code || panel.id || panel.titre)) {
            options[i].classList.add("correct");
        } else if (i === index && !correct) {
            options[i].classList.add("wrong");
        }
    }

    var label = panel.nom || panel.titre || "";
    $("feedbackZone").innerHTML = '<div class="feedback ' + (correct ? "" : "bad") + '"><b>' + (correct ? "✅ Bonne reponse !" : "❌ Erreur - c'etait : " + escapeHTML(label)) + '</b>' + escapeHTML(panel.desc || "") + '</div>';
    $("nextButtonZone").innerHTML = '<button class="primary" style="width:100%" onclick="nextTimedQuestion()">➡️ Question suivante</button>';
}

function nextTimedQuestion() {
    timedModeState.index++;
    renderTimedQuestion();
}

function endTimedMode() {
    timedModeState.active = false;
    if (timedModeState.timer) {
        clearInterval(timedModeState.timer);
        timedModeState.timer = null;
    }

    recordSessionCompletion(timedModeState.score, timedModeState.index, "timed", true);

    $("quizRunning").classList.add("hidden");
    $("quizSummary").classList.remove("hidden");
    $("summaryTitle").textContent = "⏱️ Course terminee !";
    $("summaryPercent").textContent = timedModeState.score + " bonnes reponses";
    $("summaryFraction").textContent = "en 60 secondes";
    $("summaryMessage").textContent = timedModeState.score >= 30 ? "🚀 Excellent rythme !" : timedModeState.score >= 15 ? "👍 Bon entrainement !" : "📚 Continue à t'entrainer !";

    $("categoryResults").innerHTML = "";
    $("errorResults").innerHTML = "";
    $("reviewErrorsZone").innerHTML = '<button class="primary" style="width:100%" onclick="startTimedMode()">⏱️ Rejouer</button>';

    updateHomeStats();
}

// ---- 7. DEFI DU JOUR ----
function showDailyChallenge() {
    hideViews();
    if ($("dailyChallenge")) $("dailyChallenge").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";

    var today = new Date().toDateString();
    var challenge = localStorage.getItem("dailyChallenge");
    var data = challenge ? JSON.parse(challenge) : null;

    if (!data || data.date !== today) {
        var random = ALL_KNOWLEDGE[Math.floor(Math.random() * ALL_KNOWLEDGE.length)];
        data = { date: today, question: random, done: false };
        localStorage.setItem("dailyChallenge", JSON.stringify(data));
    }

    $("dailyChallengeDate").textContent = "📅 " + new Date().toLocaleDateString();

    var content = $("dailyChallengeContent");
    var panel = data.question;
    var isDone = data.done;

    content.innerHTML = `
        <div style="margin-bottom: 20px;">${makeSignSVG(panel, false)}</div>
        <p style="color: var(--muted);">Un element du programme, chaque jour. Devine sa designation exacte.</p>
        <div style="margin-top: 20px;">
            ${isDone ?
                '<span style="background: var(--good); color: white; padding: 10px 20px; border-radius: 10px;">✅ Defi realise aujourd\'hui !</span>' :
                '<button class="primary" onclick="answerDailyChallenge()">🎯 Relever le defi</button>'
            }
        </div>
    `;
}

var dailyChallengeOptions = [];

function answerDailyChallenge() {
    var challenge = JSON.parse(localStorage.getItem("dailyChallenge"));
    var panel = challenge.question;

    var distractors = shuffle(ALL_KNOWLEDGE.filter(function(p) { return (p.code || p.id || p.titre) !== (panel.code || panel.id || panel.titre); })).slice(0, 3);
    dailyChallengeOptions = shuffle([panel].concat(distractors));

    var content = $("dailyChallengeContent");
    var html = `
        <div style="margin-bottom: 20px;">${makeSignSVG(panel, false)}</div>
        <div style="font-size: 18px; font-weight: 900; margin-bottom: 10px;">Quelle est la designation exacte ?</div>
        <div style="display: flex; flex-direction: column; gap: 10px; max-width: 400px; margin: auto;">
    `;

    for (var i = 0; i < dailyChallengeOptions.length; i++) {
        var label = dailyChallengeOptions[i].nom || dailyChallengeOptions[i].titre || "";
        html += `<button class="option" onclick="checkDailyChallenge(${i})">${escapeHTML(label)}</button>`;
    }

    html += `</div>`;
    content.innerHTML = html;
}

async function checkDailyChallenge(index) {
    var options = document.querySelectorAll("#dailyChallengeContent .option");
    var challenge = JSON.parse(localStorage.getItem("dailyChallenge"));
    var panel = challenge.question;
    var selected = dailyChallengeOptions[index];
    var isCorrect = !!selected && (selected.code || selected.id || selected.titre) === (panel.code || panel.id || panel.titre);
    var correctDesc = panel.desc || "";

    recordAnswerOutcome(panel, isCorrect);
    if (!isCorrect) await saveAppData();

    for (var i = 0; i < options.length; i++) {
        options[i].classList.add("locked");
        var label = options[i].textContent;
        if (label === (panel.nom || panel.titre || "")) {
            options[i].classList.add("correct");
        }
        if (i === index && !isCorrect) {
            options[i].classList.add("wrong");
        }
    }

    var content = $("dailyChallengeContent");
    if (isCorrect) {
        challenge.done = true;
        localStorage.setItem("dailyChallenge", JSON.stringify(challenge));
        recordSessionCompletion(1, 1, "daily", true);
        updateBadges();
        updateHomeStats();

        content.innerHTML += `
            <div style="margin-top: 20px; background: var(--good); color: white; padding: 15px; border-radius: 12px;">
                🎉 Félicitations ! Tu as réussi le défi du jour !
                <div style="font-size: 12px; margin-top: 5px;">${escapeHTML(correctDesc)}</div>
            </div>
        `;
    } else {
        content.innerHTML += `
            <div style="margin-top: 20px; background: var(--red); color: white; padding: 15px; border-radius: 12px;">
                ❌ Ce n'était pas la bonne réponse. La bonne réponse était : <b>${escapeHTML(panel.nom || panel.titre || "")}</b>
                <div style="font-size: 12px; margin-top: 5px;">${escapeHTML(panel.desc || "")}</div>
                <button class="primary" style="margin-top: 10px;" onclick="showDailyChallenge()">🔄 Réessayer</button>
            </div>
        `;
    }
}

// ---- 8. MODE SANS ERREUR ----
var noErrorState = { active: false, score: 0, questions: [], index: 0, options: [], answered: false };

function startNoErrorMode() {
    noErrorState.questions = shuffle(ALL_KNOWLEDGE.slice());
    noErrorState.index = 0;
    noErrorState.score = 0;
    noErrorState.active = true;

    hideViews();
    if ($("quiz")) $("quiz").classList.remove("hidden");
    if ($("quizConfig")) $("quizConfig").classList.add("hidden");
    if ($("quizSummary")) $("quizSummary").classList.add("hidden");
    if ($("quizRunning")) $("quizRunning").classList.remove("hidden");

    $("quizProgress").textContent = "💎 Mode sans erreur";
    $("quizScore").textContent = "Série: 0";
    $("quizModeLabel").textContent = "💎 NO ERROR";
    $("quizModeLabel").style.background = "var(--amber)";
    $("quizModeLabel").style.color = "var(--ink)";
    $("timerDisplay").classList.add("hidden");

    renderNoErrorQuestion();
}

function renderNoErrorQuestion() {
    if (noErrorState.index >= noErrorState.questions.length) {
        endNoErrorMode();
        return;
    }

    var panel = noErrorState.questions[noErrorState.index];
    $("signStage").innerHTML = makeSignSVG(panel, false);
    $("signCaption").textContent = (panel.code || "") + " — " + (CATEGORIES[panel.cat]?.label || "");
    $("question").textContent = "Quelle est la designation exacte ?";
    $("quizScore").textContent = "Série: " + noErrorState.score;

    var distractors = shuffle(ALL_KNOWLEDGE.filter(function(p) { return (p.code || p.id || p.titre) !== (panel.code || panel.id || panel.titre); })).slice(0, 3);
    noErrorState.options = shuffle([panel].concat(distractors));
    noErrorState.answered = false;

    var optionsHtml = "";
    for (var i = 0; i < noErrorState.options.length; i++) {
        var label = noErrorState.options[i].nom || noErrorState.options[i].titre || "";
        optionsHtml += '<button class="option" onclick="answerNoErrorQuestion(' + i + ')">' + escapeHTML(label) + '</button>';
    }
    $("optionList").innerHTML = optionsHtml;
    $("feedbackZone").innerHTML = "";
    $("nextButtonZone").innerHTML = "";
}

async function answerNoErrorQuestion(index) {
    if (noErrorState.answered || !noErrorState.active) return;
    noErrorState.answered = true;

    var panel = noErrorState.questions[noErrorState.index];
    var selected = noErrorState.options[index];
    var correct = selected && (selected.code || selected.id || selected.titre) === (panel.code || panel.id || panel.titre);

    recordAnswerOutcome(panel, correct);
    if (correct) {
        noErrorState.score++;
    } else {
        await saveAppData();
        noErrorState.active = false;
        showNoErrorResult();
        return;
    }

    $("quizScore").textContent = "Série: " + noErrorState.score;

    var options = document.querySelectorAll("#optionList .option");
    for (var i = 0; i < options.length; i++) {
        options[i].classList.add("locked");
        if ((noErrorState.options[i].code || noErrorState.options[i].id || noErrorState.options[i].titre) === (panel.code || panel.id || panel.titre)) {
            options[i].classList.add("correct");
        }
    }

    var label = panel.nom || panel.titre || "";
    $("feedbackZone").innerHTML = '<div class="feedback"><b>✅ Bonne reponse !</b>' + escapeHTML(panel.desc || "") + '</div>';
    $("nextButtonZone").innerHTML = '<button class="primary" style="width:100%" onclick="nextNoErrorQuestion()">➡️ Question suivante</button>';
}

function nextNoErrorQuestion() {
    noErrorState.index++;
    renderNoErrorQuestion();
}

function showNoErrorResult() {
    $("quizRunning").classList.add("hidden");
    $("quizSummary").classList.remove("hidden");
    $("summaryTitle").textContent = "💎 Mode sans erreur";
    $("summaryPercent").textContent = noErrorState.score + " questions";
    $("summaryFraction").textContent = "sans erreur !";
    $("summaryMessage").textContent = noErrorState.score >= 20 ? "🌟 Impressionnant !" : noErrorState.score >= 10 ? "👍 Bon entrainement !" : "📚 Continue à t'entrainer !";

    recordSessionCompletion(noErrorState.score, noErrorState.score + 1, "noerror", true);

    $("categoryResults").innerHTML = "";
    $("errorResults").innerHTML = "";
    $("reviewErrorsZone").innerHTML = '<button class="primary" style="width:100%" onclick="startNoErrorMode()">💎 Rejouer</button>';
    updateBadges();
    updateHomeStats();
}

// ---- 9. MODE QUESTIONS PIEGES ----
function startTrapMode() {
    var mistakes = appData.mistakes || {};
    var trapQuestions = PIEGES_ROUTES.slice();

    for (var key in mistakes) {
        if (mistakes[key] >= 2) {
            var item = ALL_KNOWLEDGE.find(function(p) { return (p.code || p.id || p.titre) === key; });
            if (item && trapQuestions.indexOf(item) === -1) trapQuestions.push(item);
        }
    }

    if (trapQuestions.length < 10) {
        var extra = shuffle(ALL_KNOWLEDGE.filter(function(p) { return trapQuestions.indexOf(p) === -1; }));
        trapQuestions = trapQuestions.concat(extra.slice(0, 10 - trapQuestions.length));
    }

    state.questions = shuffle(trapQuestions).slice(0, Math.min(15, trapQuestions.length));
    state.timer = false;
    state.isOfficialExam = false;
    state.review = false;

    hideViews();
    if ($("quiz")) $("quiz").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    if ($("quizConfig")) $("quizConfig").classList.add("hidden");
    if ($("quizSummary")) $("quizSummary").classList.add("hidden");
    if ($("quizRunning")) $("quizRunning").classList.remove("hidden");

    $("quizModeLabel").textContent = "⚠️ TRAP";
    $("quizModeLabel").style.background = "var(--purple)";
    $("quizModeLabel").style.color = "white";
    beginSession(false);
}

// ---- 10. MODE EXAMEN CHRONOMETRE ----
function startExamMode() {
    var allPool = ALL_KNOWLEDGE.slice();
    while (allPool.length < 50) {
        allPool = allPool.concat(ALL_KNOWLEDGE);
    }
    state.questions = shuffle(allPool).slice(0, 50);
    state.timer = true;
    state.isOfficialExam = true;
    state.review = false;

    hideViews();
    if ($("quiz")) $("quiz").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    if ($("quizConfig")) $("quizConfig").classList.add("hidden");
    if ($("quizSummary")) $("quizSummary").classList.add("hidden");
    if ($("quizRunning")) $("quizRunning").classList.remove("hidden");

    $("quizModeLabel").textContent = "📚 EXAMEN";
    $("quizModeLabel").style.background = "var(--blue)";
    $("quizModeLabel").style.color = "white";

    var totalSeconds = 45 * 60;
    var timerDisplay = $("timerDisplay");
    if (timerDisplay) {
        timerDisplay.classList.remove("hidden");
        timerDisplay.textContent = "⏱️ 45:00";
        timerDisplay.style.background = "var(--blue)";
        timerDisplay.style.color = "white";
        timerDisplay.classList.remove("low");
    }

    state.timerId = setInterval(function() {
        totalSeconds--;
        var mins = Math.floor(totalSeconds / 60);
        var secs = totalSeconds % 60;
        if (timerDisplay) {
            timerDisplay.textContent = "⏱️ " + String(mins).padStart(2, '0') + ":" + String(secs).padStart(2, '0');
            if (totalSeconds < 300) {
                timerDisplay.classList.add("low");
            }
        }
        if (totalSeconds <= 0) {
            clearInterval(state.timerId);
            showSummary();
        }
    }, 1000);

    beginSession(false);
}

// ---- 11. BADGES ----
function getBadges() {
    var badges = [];
    var total = appData.stats.total || 0;
    var correct = appData.stats.correct || 0;
    var percentage = total > 0 ? Math.round(100 * correct / total) : 0;
    var currentStreak = parseInt(localStorage.getItem("currentStreak") || "0");
    var bestStreak = parseInt(localStorage.getItem("bestStreak") || "0");
    var dailyChallenge = JSON.parse(localStorage.getItem("dailyChallenge") || "{}");

    badges.push({ id: "apprenti", name: "Apprenti", icon: "🥉", unlocked: total >= 10 });
    badges.push({ id: "conducteur", name: "Conducteur", icon: "🥈", unlocked: total >= 50 });
    badges.push({ id: "expert", name: "Expert", icon: "🥇", unlocked: total >= 100 && percentage >= 80 });
    badges.push({ id: "streak", name: "Série", icon: "🔥", unlocked: bestStreak >= 10 });
    badges.push({ id: "master", name: "Master", icon: "🏆", unlocked: total >= 200 && percentage >= 85 });
    badges.push({ id: "daily", name: "Défi du jour", icon: "🌟", unlocked: dailyChallenge.done });

    return badges;
}

function updateBadges() {
    var badges = getBadges();
    var unlocked = badges.filter(function(b) { return b.unlocked; });

    var badgeList = document.getElementById("badgeList");
    if (badgeList) {
        if (unlocked.length === 0) {
            badgeList.innerHTML = '<span style="color: var(--muted); font-size: 12px;">Aucun badge débloqué. Continue à t\'entraîner !</span>';
        } else {
            badgeList.innerHTML = unlocked.map(function(b) {
                return '<span class="badge-item" style="display: inline-flex; align-items: center; gap: 4px; background: var(--soft); padding: 4px 10px; border-radius: 20px; font-size: 13px;"><span>' + b.icon + '</span> ' + b.name + '</span>';
            }).join('');
        }
    }

    if ($("badgeCount")) $("badgeCount").textContent = unlocked.length;
    if ($("statBadges")) $("statBadges").textContent = unlocked.length;
    if ($("statsBadgesCount")) $("statsBadgesCount").textContent = unlocked.length;
}

// ---- 12. PERFORMANCE PAR CATEGORIE ----
function updateCategoryPerformance() {
    var container = document.getElementById("categoryPerformance");
    if (!container) return;

    var categoryStats = {};
    for (var key in appData.mistakes) {
        var item = ALL_KNOWLEDGE.find(function(p) { return (p.code || p.id || p.titre) === key; });
        if (item) {
            var cat = item.cat || "Inconnu";
            if (!categoryStats[cat]) categoryStats[cat] = { total: 0, correct: 0 };
            categoryStats[cat].total += appData.mistakes[key] || 0;
        }
    }

    var corrects = JSON.parse(localStorage.getItem("correctAnswers") || "{}");
    for (var key2 in corrects) {
        var item2 = ALL_KNOWLEDGE.find(function(p) { return (p.code || p.id || p.titre) === key2; });
        if (item2) {
            var cat2 = item2.cat || "Inconnu";
            if (!categoryStats[cat2]) categoryStats[cat2] = { total: 0, correct: 0 };
            categoryStats[cat2].correct += corrects[key2] || 0;
        }
    }

    container.innerHTML = "";
    var keys = Object.keys(categoryStats);
    if (keys.length === 0) {
        container.innerHTML = '<div class="empty">Commence à répondre à des questions pour voir tes performances par catégorie.</div>';
        return;
    }

    for (var i = 0; i < keys.length; i++) {
        var cat = keys[i];
        var stats = categoryStats[cat];
        var total = stats.total + stats.correct;
        var percent = total > 0 ? Math.round(100 * stats.correct / total) : 0;
        var color = percent >= 80 ? 'var(--good)' : percent >= 50 ? 'var(--amber)' : 'var(--red)';
        var label = CATEGORIES[cat]?.label || cat;

        var div = document.createElement('div');
        div.className = 'stat';
        div.style.padding = '10px';
        div.style.textAlign = 'center';
        div.innerHTML = `
            <div style="font-size: 24px; font-weight: 900; color: ${color};">${percent}%</div>
            <div style="font-size: 12px; color: var(--muted);">${label}</div>
            <div style="font-size: 10px; color: var(--muted);">${stats.correct}/${total}</div>
        `;
        container.appendChild(div);
    }
}

// ---- 13. OBJECTIFS QUOTIDIENS ----
function updateDailyGoal() {
    var today = new Date().toDateString();
    var dailyQ = parseInt(localStorage.getItem("dailyQuestions") || "0");
    var lastDate = localStorage.getItem("lastDate") || "";

    if (lastDate !== today) {
        localStorage.setItem("dailyQuestions", "0");
        localStorage.setItem("lastDate", today);
        dailyQ = 0;
    }

    var goal = parseInt(localStorage.getItem("dailyGoal") || "20");
    var percent = Math.min(100, Math.round(100 * dailyQ / goal));

    var text = document.getElementById("dailyGoalText");
    if (text) text.textContent = dailyQ + " / " + goal + " questions aujourd'hui";

    var percentEl = document.getElementById("dailyGoalPercent");
    if (percentEl) percentEl.textContent = percent + "%";

    var bar = document.getElementById("dailyGoalBar");
    if (bar) bar.style.width = percent + "%";
}

function setDailyGoal() {
    var input = document.getElementById("dailyGoalInput");
    if (input) {
        var goal = parseInt(input.value) || 20;
        localStorage.setItem("dailyGoal", String(Math.max(1, goal)));
        updateDailyGoal();
    }
}

// ---- 14. FICHES DE REVISION ----
function generateRevisionSheet() {
    var weak = getWeakCategories();
    var questions = [];

    for (var i = 0; i < weak.length; i++) {
        var cat = weak[i].category;
        var items = ALL_KNOWLEDGE.filter(function(p) { return p.cat === cat; });
        questions = questions.concat(shuffle(items).slice(0, 5));
    }

    if (questions.length === 0) {
        questions = shuffle(ALL_KNOWLEDGE.slice()).slice(0, 20);
    }

    var win = window.open('', '_blank');
    if (!win) {
        alert("Veuillez autoriser les pop-ups pour generer la fiche de revision.");
        return;
    }

    var html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Fiche de revision - Code de la route Belgique</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: auto; }
                h1 { text-align: center; color: #171a1f; border-bottom: 3px solid #c81e2c; padding-bottom: 10px; }
                .card { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 8px; page-break-inside: avoid; }
                .card h3 { margin: 0 0 5px 0; color: #1c5fa8; }
                .card .code { font-size: 12px; color: #68707a; }
                .card .desc { margin: 5px 0 0 0; color: #333; }
                .badge { display: inline-block; background: #c81e2c; color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; }
                .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #68707a; border-top: 1px solid #ddd; padding-top: 15px; }
                @media print { .card { break-inside: avoid; } body { padding: 10px; } }
            </style>
        </head>
        <body>
            <h1>📄 Fiche de revision - Code de la route</h1>
            <p style="text-align: center; color: #68707a;">Genere le ${new Date().toLocaleDateString()} • ${questions.length} questions</p>
    `;

    for (var i = 0; i < questions.length; i++) {
        var q = questions[i];
        var title = q.nom || q.titre || "";
        var desc = q.desc || "";
        var code = q.code || q.id || "";
        var cat = CATEGORIES[q.cat]?.label || q.cat || "";
        var color = CATEGORIES[q.cat]?.color || "var(--blue)";

        html += `
            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h3>${escapeHTML(title)}</h3>
                    <span class="badge" style="background:${color};">${escapeHTML(cat)}</span>
                </div>
                <div class="code">${escapeHTML(code)}</div>
                <p class="desc">${escapeHTML(desc)}</p>
            </div>
        `;
    }

    html += `
            <div class="footer">
                🇧🇪 Code de la route Belgique • ${questions.length} questions • ${new Date().toLocaleDateString()}
            </div>
        </body>
        </html>
    `;

    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(function() { win.print(); }, 500);
}

// ---- 15. FLASHCARDS ----
var flashcardState = { questions: [], index: 0, flipped: false };

function showFlashcards() {
    hideViews();
    if ($("flashcards")) $("flashcards").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";

    if (flashcardState.questions.length === 0) {
        var pool = shuffle(ALL_KNOWLEDGE.slice());
        flashcardState.questions = pool.slice(0, 20);
        flashcardState.index = 0;
        flashcardState.flipped = false;
    }
    renderFlashcard();
}

function renderFlashcard() {
    if (flashcardState.questions.length === 0) {
        $("flashcard").textContent = "Aucune carte disponible.";
        $("flashcardCounter").textContent = "0 / 0";
        return;
    }

    var q = flashcardState.questions[flashcardState.index];
    var title = q.nom || q.titre || "";
    var desc = q.desc || "";
    var code = q.code || q.id || "";
    var cat = CATEGORIES[q.cat]?.label || q.cat || "";

    var flashcard = $("flashcard");
    flashcard.className = flashcardState.flipped ? "flipped" : "";
    flashcard.innerHTML = `
        <div class="front">
            <div>
                <div style="font-size: 14px; color: var(--muted);">${escapeHTML(code)} • ${escapeHTML(cat)}</div>
                <div style="font-size: 20px; font-weight: 900; margin-top: 10px;">${escapeHTML(title)}</div>
                <div style="font-size: 12px; color: var(--muted); margin-top: 15px;">👆 Cliquez pour voir la reponse</div>
            </div>
        </div>
        <div class="back">
            <div>
                <div style="font-size: 14px; color: var(--muted);">📖 Reponse</div>
                <div style="font-size: 16px; margin-top: 10px;">${escapeHTML(desc)}</div>
            </div>
        </div>
    `;

    flashcard.onclick = function() {
        flashcardState.flipped = !flashcardState.flipped;
        renderFlashcard();
    };

    $("flashcardCounter").textContent = (flashcardState.index + 1) + " / " + flashcardState.questions.length;
}

function nextFlashcard() {
    if (flashcardState.index < flashcardState.questions.length - 1) {
        flashcardState.index++;
        flashcardState.flipped = false;
        renderFlashcard();
    }
}

function prevFlashcard() {
    if (flashcardState.index > 0) {
        flashcardState.index--;
        flashcardState.flipped = false;
        renderFlashcard();
    }
}

function shuffleFlashcards() {
    flashcardState.questions = shuffle(flashcardState.questions);
    flashcardState.index = 0;
    flashcardState.flipped = false;
    renderFlashcard();
}

function resetFlashcards() {
    var pool = shuffle(ALL_KNOWLEDGE.slice());
    flashcardState.questions = pool.slice(0, 20);
    flashcardState.index = 0;
    flashcardState.flipped = false;
    renderFlashcard();
}

// ---- 17. NIVEAU DE DIFFICULTE ----
var currentDifficulty = "tous";

function setDifficulty(level) {
    currentDifficulty = level;
    var label = document.getElementById("difficultyLabel");
    if (label) {
        var names = { facile: "⭐ Facile", moyen: "⭐⭐ Moyen", difficile: "⭐⭐⭐ Difficile", tous: "Tous niveaux" };
        label.textContent = "Niveau actuel : " + (names[level] || "Tous niveaux");
    }

    var buttons = ["diffFacile", "diffMoyen", "diffDifficile"];
    for (var i = 0; i < buttons.length; i++) {
        var btn = document.getElementById(buttons[i]);
        if (btn) {
            var isActive = buttons[i] === "diff" + level.charAt(0).toUpperCase() + level.slice(1);
            btn.style.opacity = isActive ? "1" : "0.5";
            btn.style.transform = isActive ? "scale(1.05)" : "scale(1)";
        }
    }
}

function getQuestionsByDifficulty(level) {
    var pool = ALL_KNOWLEDGE.slice();
    if (level === "facile") {
        var mistakes = appData.mistakes || {};
        return pool.filter(function(item) {
            var code = item.code || item.id || item.titre || "";
            return !mistakes[code] || mistakes[code] < 2;
        });
    } else if (level === "difficile") {
        var mistakes2 = appData.mistakes || {};
        return pool.filter(function(item) {
            var code2 = item.code || item.id || item.titre || "";
            return mistakes2[code2] && mistakes2[code2] >= 2;
        });
    }
    return pool;
}

// ---- 18. REVISION DES ERREURS ----
function startErrorOnlyMode() {
    var mistakes = appData.mistakes || {};
    var errorQuestions = [];

    for (var key in mistakes) {
        if (mistakes[key] > 0) {
            var item = ALL_KNOWLEDGE.find(function(p) { return (p.code || p.id || p.titre) === key; });
            if (item) errorQuestions.push(item);
        }
    }

    if (errorQuestions.length === 0) {
        alert("Tu n'as fait aucune erreur ! Félicitations ! 🎉");
        goHome();
        return;
    }

    state.questions = shuffle(errorQuestions).slice(0, Math.min(15, errorQuestions.length));
    state.timer = false;
    state.isOfficialExam = false;
    state.review = true;

    hideViews();
    if ($("quiz")) $("quiz").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";
    if ($("quizConfig")) $("quizConfig").classList.add("hidden");
    if ($("quizSummary")) $("quizSummary").classList.add("hidden");
    if ($("quizRunning")) $("quizRunning").classList.remove("hidden");

    $("quizModeLabel").textContent = "🔄 ERREURS";
    $("quizModeLabel").style.background = "var(--red)";
    $("quizModeLabel").style.color = "white";
    beginSession(true);
}

// ---- 19. MODE SOMBRE AUTOMATIQUE ----
// Déjà géré par detectDarkMode() et le CSS

// ---- STATISTIQUES PAGE ----
function showStatsPage() {
    hideViews();
    if ($("statsPage")) $("statsPage").classList.remove("hidden");
    if ($("homeButton")) $("homeButton").style.display = "block";

    var total = appData.stats.total || 0;
    var correct = appData.stats.correct || 0;
    var wrong = total - correct;
    var percent = total > 0 ? Math.round(100 * correct / total) : 0;
    var avgTime = getAverageTime();
    var bestStreak = parseInt(localStorage.getItem("bestStreak") || "0");
    var badges = getBadges();
    var unlocked = badges.filter(function(b) { return b.unlocked; });
    var weak = getWeakCategories();

    if ($("statsTotal")) $("statsTotal").textContent = total;
    if ($("statsCorrect")) $("statsCorrect").textContent = correct;
    if ($("statsWrong")) $("statsWrong").textContent = wrong;
    if ($("statsAvgTime")) $("statsAvgTime").textContent = avgTime > 0 ? avgTime + "s" : "—";
    if ($("statsBestStreak")) $("statsBestStreak").textContent = bestStreak;
    if ($("statsBadgesCount")) $("statsBadgesCount").textContent = unlocked.length;

    updateProgressChart();
    updateCategoryPerformance();

    var weakContainer = document.getElementById("weakCategories");
    if (weakContainer) {
        if (weak.length === 0) {
            weakContainer.innerHTML = '<div class="empty">Aucune categorie faible detectee. Continue comme ça ! 🎉</div>';
        } else {
            weakContainer.innerHTML = weak.map(function(w) {
                var label = CATEGORIES[w.category]?.label || w.category;
                var color = w.ratio > 0.5 ? 'var(--red)' : w.ratio > 0.3 ? 'var(--amber)' : 'var(--good)';
                return `<div style="display: flex; justify-content: space-between; padding: 8px 12px; border-bottom: 1px solid var(--line);">
                    <span>${label}</span>
                    <span style="color: ${color}; font-weight: 900;">${Math.round(w.ratio * 100)}% d'erreurs (${w.wrong}/${w.total})</span>
                </div>`;
            }).join('');
        }
    }

    updateDailyGoal();
    updateBadges();
}

// =========================================================
// RACCOURCIS CLAVIER
// =========================================================

document.addEventListener("keydown", function(event) {
    if ($("quizRunning") && $("quizRunning").classList.contains("hidden")) return;
    if (event.key >= "1" && event.key <= "4" && !state.answered) { answerQuestion(Number(event.key) - 1); }
    if (event.key === "Enter" && state.answered) { nextQuestion(); }
    if (event.key.toLowerCase() === "f") { toggleFavorite(); }
    if (event.key === "Escape") { goHome(); }
});

if ($("questionCount")) {
    $("questionCount").addEventListener("input", function(event) {
        state.questionCount = Number(event.target.value);
        if ($("questionCountValue")) $("questionCountValue").textContent = state.questionCount;
    });
}

// =========================================================
// EXPORT DES FONCTIONS
// =========================================================

window.goHome = goHome;
window.showMenu = showMenu;
window.showCategorie = showCategorie;
window.showCategorieBack = showCategorieBack;
window.showSousCategorie = showSousCategorie;
window.quizCategorie = quizCategorie;
window.examenCategorie = examenCategorie;
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
window.startTimedMode = startTimedMode;
window.startNoErrorMode = startNoErrorMode;
window.startTrapMode = startTrapMode;
window.startExamMode = startExamMode;
window.startErrorOnlyMode = startErrorOnlyMode;
window.showDailyChallenge = showDailyChallenge;
window.answerDailyChallenge = answerDailyChallenge;
window.checkDailyChallenge = checkDailyChallenge;
window.showFlashcards = showFlashcards;
window.nextFlashcard = nextFlashcard;
window.prevFlashcard = prevFlashcard;
window.shuffleFlashcards = shuffleFlashcards;
window.resetFlashcards = resetFlashcards;
window.generateRevisionSheet = generateRevisionSheet;
window.setDailyGoal = setDailyGoal;
window.setDifficulty = setDifficulty;
window.showStatsPage = showStatsPage;
window.updateBadges = updateBadges;
window.updateDailyGoal = updateDailyGoal;

// =========================================================
// INITIALISATION
// =========================================================

async function init() {
    await loadAppData();
    applyTheme();
    detectDarkMode();
    renderCategorySelector();
    updateHomeStats();
    updateBadges();
    updateDailyGoal();
    updateCategoryPerformance();
    setDifficulty("tous");
    goHome();
    document.body.classList.add("ready");

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (appData.theme === "auto") {
                document.body.classList.toggle("dark", e.matches);
                if ($("themeButton")) $("themeButton").textContent = e.matches ? "🌙" : "☀️";
                if ($("themeButtonHeader")) $("themeButtonHeader").textContent = e.matches ? "🌙" : "☀️";
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', init);
