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
// DONNÉES OFFICIELLES COMPLÈTES
// =========================================================

var PANNEAUX_A = [
    {code:"A1a",nom:"Virage dangereux à gauche",cat:"A",desc:"Annonce un virage prononcé vers la gauche."},
    {code:"A1b",nom:"Virage dangereux à droite",cat:"A",desc:"Annonce un virage prononcé vers la droite."},
    {code:"A1c",nom:"Succession de virages (premier à gauche)",cat:"A",desc:"Annonce plusieurs virages successifs, le premier à gauche."},
    {code:"A1d",nom:"Succession de virages (premier à droite)",cat:"A",desc:"Annonce plusieurs virages successifs, le premier à droite."},
    {code:"A3",nom:"Descente dangereuse",cat:"A",desc:"Pente raide indiquée par un pourcentage. Utilisez le frein moteur."},
    {code:"A5",nom:"Montée à forte inclinaison",cat:"A",desc:"Indique une forte côte."},
    {code:"A7a",nom:"Chaussée rétrécie (des deux côtés)",cat:"A",desc:"Rétrécissement de la route des deux côtés."},
    {code:"A7b",nom:"Chaussée rétrécie (à droite)",cat:"A",desc:"Rétrécissement de la route du côté droit."},
    {code:"A7c",nom:"Chaussée rétrécie (à gauche)",cat:"A",desc:"Rétrécissement de la route du côté gauche."},
    {code:"A8",nom:"Accotement non stabilisé",cat:"A",desc:"Accotement non revêtu, risque de perte de contrôle."},
    {code:"A9",nom:"Pont mobile",cat:"A",desc:"Approche d'un pont levant ou tournant."},
    {code:"A11",nom:"Débouche sur un quai ou berge",cat:"A",desc:"Risque de chute dans l'eau si manœuvre mal exécutée."},
    {code:"A13",nom:"Cassis ou dos d'âne",cat:"A",desc:"Ralentisseur ou bosse sur la chaussée."},
    {code:"A15",nom:"Chaussée glissante",cat:"A",desc:"Risque accru de glissade (pluie, verglas, gravillons)."},
    {code:"A16",nom:"Verglas ou neige",cat:"A",desc:"Risque de verglas ou chaussée enneigée."},
    {code:"A17",nom:"Projection de gravillons",cat:"A",desc:"Risque de projection de pierres ou gravillons."},
    {code:"A18",nom:"Brouillard",cat:"A",desc:"Risque de brouillard épais."},
    {code:"A19",nom:"Chutes de pierres",cat:"A",desc:"Risque d'éboulement ou chutes de pierres."},
    {code:"A21",nom:"Passage pour piétons",cat:"A",desc:"Annonce un passage clouté à proximité."},
    {code:"A23",nom:"Endroit fréquenté par des enfants",cat:"A",desc:"Présence d'écoles ou aires de jeux."},
    {code:"A24",nom:"Endroit fréquenté par des cavaliers",cat:"A",desc:"Présence de cavaliers ou centres équestres."},
    {code:"A25",nom:"Passage de cyclistes",cat:"A",desc:"Débouché de cyclistes ou piste cyclable."},
    {code:"A27",nom:"Traversée d'animaux",cat:"A",desc:"Traversée possible d'animaux (cerfs, sangliers, etc.)."},
    {code:"A31",nom:"Travaux",cat:"A",desc:"Présence d'un chantier sur ou le long de la voie publique."},
    {code:"A32",nom:"Files (embouteillage)",cat:"A",desc:"Risque de formation de files ou ralentissements."},
    {code:"A33",nom:"Feux de circulation",cat:"A",desc:"Annonce des feux tricolores en amont."},
    {code:"A45",nom:"Passage à niveau (non gardé)",cat:"A",desc:"Annonce un passage à niveau sans barrières."},
    {code:"A47",nom:"Passage à niveau (gardé)",cat:"A",desc:"Annonce un passage à niveau avec barrières."},
    {code:"A51",nom:"Danger indéterminé",cat:"A",desc:"Danger particulier précisé par un panonceau additionnel."}
];

var PANNEAUX_B = [
    {code:"B1",nom:"Cédez le passage",cat:"B",desc:"Triangle pointe vers le bas. Céder le passage aux usagers de la voie prioritaire."},
    {code:"B5",nom:"Stop (Arrêt obligatoire)",cat:"B",desc:"Obligation de marquer l'arrêt complet avant la ligne d'effet."},
    {code:"B9",nom:"Voie prioritaire",cat:"B",desc:"Losange jaune : vous êtes prioritaire aux intersections."},
    {code:"B11",nom:"Fin de voie prioritaire",cat:"B",desc:"Losange barré : fin du statut de route prioritaire."},
    {code:"B15",nom:"Priorité à l'intersection",cat:"B",desc:"Vous avez la priorité uniquement à la prochaine intersection."},
    {code:"B17",nom:"Priorité à droite",cat:"B",desc:"Règle générale : céder le passage venant de droite."}
];

var PANNEAUX_C = [
    {code:"C1",nom:"Accès interdit dans les deux sens",cat:"C",desc:"Interdiction à tout conducteur de s'engager."},
    {code:"C3",nom:"Sens interdit",cat:"C",desc:"Interdiction de s'engager dans cette voie."},
    {code:"C5",nom:"Accès interdit aux automobiles",cat:"C",desc:"Interdit aux voitures et camions."},
    {code:"C7",nom:"Accès interdit aux motocycles",cat:"C",desc:"Interdit aux motos."},
    {code:"C11",nom:"Accès interdit aux cyclistes",cat:"C",desc:"Interdit aux vélos."},
    {code:"C19",nom:"Accès interdit aux piétons",cat:"C",desc:"Interdit aux piétons."},
    {code:"C23",nom:"Accès interdit aux camions",cat:"C",desc:"Interdit aux véhicules lourds de marchandises."},
    {code:"C35",nom:"Interdiction de dépasser",cat:"C",desc:"Interdiction de dépasser les véhicules à moteur."},
    {code:"C39",nom:"Interdiction de dépasser pour camions",cat:"C",desc:"Interdiction pour les camions > 3,5t de dépasser."},
    {code:"C43 30",nom:"Vitesse limitée à 30 km/h",cat:"C",desc:"Vitesse maximale autorisée de 30 km/h.","num":"30"},
    {code:"C43 50",nom:"Vitesse limitée à 50 km/h",cat:"C",desc:"Vitesse maximale autorisée de 50 km/h.","num":"50"},
    {code:"C43 70",nom:"Vitesse limitée à 70 km/h",cat:"C",desc:"Vitesse maximale autorisée de 70 km/h.","num":"70"},
    {code:"C43 90",nom:"Vitesse limitée à 90 km/h",cat:"C",desc:"Vitesse maximale autorisée de 90 km/h.","num":"90"},
    {code:"C45",nom:"Fin de toutes les interdictions locales",cat:"C",desc:"Fin des limitations de vitesse ou de dépassement."}
];

var PANNEAUX_D = [
    {code:"D1a",nom:"Direction obligatoire à droite",cat:"D",desc:"Obligation de tourner à droite."},
    {code:"D1b",nom:"Direction obligatoire à gauche",cat:"D",desc:"Obligation de tourner à gauche."},
    {code:"D9",nom:"Piste cyclable obligatoire",cat:"D",desc:"Voie exclusive réservée aux cyclistes."},
    {code:"D10",nom:"Chemin pour piétons",cat:"D",desc:"Voie réservée exclusivement aux piétons."}
];

var PANNEAUX_E = [
    {code:"E1",nom:"Stationnement interdit",cat:"E",desc:"Interdiction de stationner du côté du panneau. L'arrêt reste autorisé."},
    {code:"E3",nom:"Arrêt et stationnement interdits",cat:"E",desc:"Interdiction absolue de s'arrêter et de stationner."},
    {code:"E9a",nom:"Stationnement autorisé (Parking)",cat:"E",desc:"Indique un emplacement ou un parking autorisé."}
];

var PANNEAUX_F = [
    {code:"F1",nom:"Commencement d'agglomération",cat:"F",desc:"Vitesse limitée par défaut à 50 km/h (30 km/h à Bruxelles)."},
    {code:"F3",nom:"Fin d'agglomération",cat:"F",desc:"Les règles d'agglomération prennent fin."},
    {code:"F4a",nom:"Début de zone 30",cat:"F",desc:"Entrée d'une zone où la vitesse est limitée à 30 km/h."},
    {code:"F4b",nom:"Fin de zone 30",cat:"F",desc:"Sortie de la zone 30."},
    {code:"F5",nom:"Autoroute",cat:"F",desc:"Début d'autoroute (vitesse min. 70, max. 120 km/h)."},
    {code:"F9",nom:"Route pour automobiles",cat:"F",desc:"Voie réservée aux véhicules automobiles."},
    {code:"F11b",nom:"Cul-de-sac (Impasse)",cat:"F",desc:"Voie sans issue."},
    {code:"F12a",nom:"Zone résidentielle / Zone de rencontre",cat:"F",desc:"Piétons prioritaires sur toute la largeur. Vitesse max 20 km/h."},
    {code:"F19",nom:"Sens unique",cat:"F",desc:"Indique une rue à sens unique."},
    {code:"F20",nom:"Voie réservée aux bus",cat:"F",desc:"Voie exclusivement réservée aux bus et transports en commun."},
    {code:"F21",nom:"Voie de tramway",cat:"F",desc:"Voie réservée aux trams."},
    {code:"F23",nom:"Début de piste cyclable",cat:"F",desc:"Entrée d'une piste cyclable."},
    {code:"F24",nom:"Fin de piste cyclable",cat:"F",desc:"Sortie de la piste cyclable."},
    {code:"F25",nom:"Zone de rencontre",cat:"F",desc:"Zone piétons prioritaires, vitesse max 20 km/h."},
    {code:"F26",nom:"Fin de zone de rencontre",cat:"F",desc:"Sortie de la zone de rencontre."},
    {code:"F27",nom:"Zone piétonne",cat:"F",desc:"Zone exclusivement réservée aux piétons."},
    {code:"F28",nom:"Fin de zone piétonne",cat:"F",desc:"Sortie de la zone piétonne."}
];

var PANNEAUX_X = [
    {code:"X1",nom:"Distance avant le danger",cat:"X",desc:"Indique la distance à laquelle se situe le danger ou la règle."},
    {code:"X2",nom:"Étendue de la mesure",cat:"X",desc:"Indique la longueur sur laquelle s'applique la prescription."},
    {code:"X3",nom:"Répétition / Rappel",cat:"X",desc:"Confirme qu'une interdiction ou obligation est toujours d'application."},
    {code:"X4",nom:"Hors agglomération",cat:"X",desc:"Précise que la règle s'applique hors agglomération."},
    {code:"X5",nom:"Accotement stabilisé / non stabilisé",cat:"X",desc:"Précise la nature de l'accotement."},
    {code:"X6",nom:"Sauf riverains",cat:"X",desc:"Interdiction ne s'applique pas aux riverains."},
    {code:"X7",nom:"Poids lourds",cat:"X",desc:"Interdiction adaptée aux poids lourds."},
    {code:"X8",nom:"Longueur",cat:"X",desc:"Indication de longueur maximale du véhicule."},
    {code:"X9",nom:"Largeur",cat:"X",desc:"Indication de largeur maximale du véhicule."},
    {code:"X10",nom:"Hauteur",cat:"X",desc:"Indication de hauteur maximale du véhicule."}
];

var PANNEAUX_T = [
    {code:"T1",nom:"Travaux (danger)",cat:"T",desc:"Annonce un danger lié à des travaux."},
    {code:"T2",nom:"Déviation (gauche)",cat:"T",desc:"Indique une déviation par la gauche."},
    {code:"T3",nom:"Déviation (droite)",cat:"T",desc:"Indique une déviation par la droite."},
    {code:"T4",nom:"Fin de travaux",cat:"T",desc:"Fin de la zone de travaux."}
];

var PANNEAUX_S = [
    {code:"S1",nom:"Aire de repos",cat:"S",desc:"Aire de repos avec parking."},
    {code:"S2",nom:"Aire de service",cat:"S",desc:"Aire de service avec station-service."},
    {code:"S3",nom:"Parking",cat:"S",desc:"Parking public."},
    {code:"S4",nom:"Parking payant",cat:"S",desc:"Parking avec horodateur."},
    {code:"S5",nom:"Police / Gendarmerie",cat:"S",desc:"Poste de police ou gendarmerie."},
    {code:"S6",nom:"Hôpital",cat:"S",desc:"Hôpital ou clinique."},
    {code:"S7",nom:"Pharmacie",cat:"S",desc:"Pharmacie."},
    {code:"S8",nom:"Téléphone de secours",cat:"S",desc:"Téléphone d'urgence sur autoroute."},
    {code:"S9",nom:"Poste d'essence",cat:"S",desc:"Station-service."}
];

var PANNEAUX = [].concat(PANNEAUX_A, PANNEAUX_B, PANNEAUX_C, PANNEAUX_D, PANNEAUX_E, PANNEAUX_F, PANNEAUX_X, PANNEAUX_T, PANNEAUX_S);

var MECANIQUE_MOTEUR = [
    {id:"mec_001",titre:"Huile moteur",cat:"MECA",sousCat:"Moteur",desc:"Viscosité 5W30/10W40. Vidange tous les 15 000-30 000 km."},
    {id:"mec_002",titre:"Filtre à huile",cat:"MECA",sousCat:"Moteur",desc:"Remplacement à chaque vidange."},
    {id:"mec_003",titre:"Liquide de refroidissement",cat:"MECA",sousCat:"Moteur",desc:"Antigel, niveau entre MIN et MAX."},
    {id:"mec_004",titre:"Thermostat",cat:"MECA",sousCat:"Moteur",desc:"Régule la température moteur."},
    {id:"mec_005",titre:"Radiateur",cat:"MECA",sousCat:"Moteur",desc:"Nettoyage régulier. Risque de fuite = surchauffe."},
    {id:"mec_006",titre:"Ventilateur de refroidissement",cat:"MECA",sousCat:"Moteur",desc:"S'enclenche à 90-100°C."},
    {id:"mec_007",titre:"Courroie de distribution",cat:"MECA",sousCat:"Moteur",desc:"Remplacement 100 000-150 000 km."},
    {id:"mec_008",titre:"Courroie d'accessoires",cat:"MECA",sousCat:"Moteur",desc:"Alternateur, pompe de direction, climatisation."},
    {id:"mec_009",titre:"Tendeur de courroie",cat:"MECA",sousCat:"Moteur",desc:"Maintient la tension."},
    {id:"mec_010",titre:"Pompe à eau",cat:"MECA",sousCat:"Moteur",desc:"Circulation du liquide de refroidissement."},
    {id:"mec_011",titre:"Alternateur",cat:"MECA",sousCat:"Électrique",desc:"Recharge la batterie."},
    {id:"mec_012",titre:"Batterie",cat:"MECA",sousCat:"Électrique",desc:"Tension 12V. Durée de vie 4-5 ans."},
    {id:"mec_013",titre:"Démarreur",cat:"MECA",sousCat:"Électrique",desc:"Lance le moteur."},
    {id:"mec_014",titre:"Filtre à air moteur",cat:"MECA",sousCat:"Moteur",desc:"Remplacement 20 000-40 000 km."},
    {id:"mec_015",titre:"Turbo-compresseur",cat:"MECA",sousCat:"Moteur",desc:"Suralimentation."},
    {id:"mec_016",titre:"Vanne EGR",cat:"MECA",sousCat:"Moteur",desc:"Recirculation des gaz d'échappement."},
    {id:"mec_017",titre:"Volant moteur (bimasse)",cat:"MECA",sousCat:"Transmission",desc:"Amortit les vibrations."},
    {id:"mec_018",titre:"Embrayage",cat:"MECA",sousCat:"Transmission",desc:"Usure 150 000-200 000 km."},
    {id:"mec_019",titre:"Boîte de vitesses",cat:"MECA",sousCat:"Transmission",desc:"Vidange 60 000-100 000 km."},
    {id:"mec_020",titre:"Arbre de transmission",cat:"MECA",sousCat:"Transmission",desc:"Transmet le couple."},
    {id:"mec_021",titre:"Cardans / Roulements de roue",cat:"MECA",sousCat:"Transmission",desc:"Usure = bruit de roulement."},
    {id:"mec_022",titre:"Joint de culasse",cat:"MECA",sousCat:"Moteur",desc:"Fissure = mélange huile/eau."},
    {id:"mec_023",titre:"Filtre à gazole (diesel)",cat:"MECA",sousCat:"Injection",desc:"Purge de l'eau."},
    {id:"mec_024",titre:"Système AdBlue",cat:"MECA",sousCat:"Injection",desc:"Réduction des NOx."},
    {id:"mec_025",titre:"Injecteurs (essence)",cat:"MECA",sousCat:"Injection",desc:"Nettoyage ou remplacement."},
    {id:"mec_026",titre:"Pompe à essence",cat:"MECA",sousCat:"Injection",desc:"Alimentation carburant."},
    {id:"mec_027",titre:"Bougies de préchauffage (diesel)",cat:"MECA",sousCat:"Injection",desc:"Aident au démarrage à froid."},
    {id:"mec_028",titre:"Filtre à air habitacle",cat:"MECA",sousCat:"Confort",desc:"Remplacement 15 000-20 000 km."},
    {id:"mec_029",titre:"Plaquettes de frein",cat:"MECA",sousCat:"Freinage",desc:"Usure = bruit, distance de freinage allongée."},
    {id:"mec_030",titre:"Disques de frein",cat:"MECA",sousCat:"Freinage",desc:"Usure, voile."},
    {id:"mec_031",titre:"Liquide de frein",cat:"MECA",sousCat:"Freinage",desc:"Niveau, hygroscopique."},
    {id:"mec_032",titre:"Maître-cylindre",cat:"MECA",sousCat:"Freinage",desc:"Pompe principale de freinage."},
    {id:"mec_033",titre:"Étriers de frein",cat:"MECA",sousCat:"Freinage",desc:"Pression sur les plaquettes."},
    {id:"mec_034",titre:"Tuyaux de frein",cat:"MECA",sousCat:"Freinage",desc:"Flexibles. Usure = perte de pression."},
    {id:"mec_035",titre:"Frein de stationnement",cat:"MECA",sousCat:"Freinage",desc:"Câble ou électrique."},
    {id:"mec_036",titre:"ABS",cat:"MECA",sousCat:"Freinage",desc:"Capteurs de roue."},
    {id:"mec_037",titre:"ESP",cat:"MECA",sousCat:"Freinage",desc:"Antipatinage, stabilité."},
    {id:"mec_038",titre:"Assistance au freinage d'urgence",cat:"MECA",sousCat:"Freinage",desc:"Freinage automatique."},
    {id:"mec_039",titre:"Freinage régénératif",cat:"MECA",sousCat:"Freinage",desc:"Véhicules hybrides/électriques."},
    {id:"mec_040",titre:"Direction assistée",cat:"MECA",sousCat:"Direction",desc:"Hydraulique ou électrique."}
];

var PNEUMATIQUES = [
    {id:"pneu_001",titre:"Pneu été",cat:"PNEU",sousCat:"Types",desc:"Gomme dure, bonne adhérence au-dessus de 7°C."},
    {id:"pneu_002",titre:"Pneu hiver (neige)",cat:"PNEU",sousCat:"Types",desc:"Gomme souple, lamelles. Adhérence < 7°C."},
    {id:"pneu_003",titre:"Pneu 4 saisons",cat:"PNEU",sousCat:"Types",desc:"Compromis été/hiver."},
    {id:"pneu_004",titre:"Pneu clouté",cat:"PNEU",sousCat:"Types",desc:"Autorisé du 1er novembre au 31 mars."},
    {id:"pneu_005",titre:"Pneu run-flat",cat:"PNEU",sousCat:"Types",desc:"Roule à plat jusqu'à 80 km/h sur 50-80 km."},
    {id:"pneu_006",titre:"Pneu ZR/VR",cat:"PNEU",sousCat:"Types",desc:"Haute vitesse."},
    {id:"pneu_007",titre:"Pneus rechapés",cat:"PNEU",sousCat:"Types",desc:"Restrictions de vitesse et de poids."},
    {id:"pneu_008",titre:"Indice de charge",cat:"PNEU",sousCat:"Dimensions",desc:"Ex: 91 = 615 kg par pneu."},
    {id:"pneu_009",titre:"Indice de vitesse",cat:"PNEU",sousCat:"Dimensions",desc:"Ex: H = 210 km/h, V = 240 km/h."},
    {id:"pneu_010",titre:"Taille (ex: 205/55 R16)",cat:"PNEU",sousCat:"Dimensions",desc:"Largeur 205, hauteur 55%, R = radial."},
    {id:"pneu_011",titre:"DOT",cat:"PNEU",sousCat:"Dimensions",desc:"Date de fabrication (semaine/année)."},
    {id:"pneu_012",titre:"Flèche de rotation",cat:"PNEU",sousCat:"Dimensions",desc:"Pneu asymétrique ou directionnel."},
    {id:"pneu_013",titre:"TWI (Tread Wear Indicator)",cat:"PNEU",sousCat:"Dimensions",desc:"Témoins d'usure à 1,6 mm."},
    {id:"pneu_014",titre:"Pressions recommandées",cat:"PNEU",sousCat:"Entretien",desc:"Sur l'étiquette portière."},
    {id:"pneu_015",titre:"Pression des pneus",cat:"PNEU",sousCat:"Entretien",desc:"Vérifier toutes les 2 semaines."},
    {id:"pneu_016",titre:"Sur-gonflage",cat:"PNEU",sousCat:"Entretien",desc:"Usure au centre."},
    {id:"pneu_017",titre:"Sous-gonflage",cat:"PNEU",sousCat:"Entretien",desc:"Usure sur les côtés, surchauffe."},
    {id:"pneu_018",titre:"Permutation des pneus",cat:"PNEU",sousCat:"Entretien",desc:"Permutation AV/AR tous les 10 000 km."},
    {id:"pneu_019",titre:"Usure irrégulière",cat:"PNEU",sousCat:"Entretien",desc:"Parallélisme ou amortisseurs défectueux."},
    {id:"pneu_020",titre:"Herbe à pneu",cat:"PNEU",sousCat:"Entretien",desc:"Crevaison lente."}
];

var SAISONS_ENVIRONNEMENT = [
    {id:"sai_001",titre:"Conduite sur neige",cat:"SAI",sousCat:"Hiver",desc:"Vitesse réduite, freinage anticipé."},
    {id:"sai_002",titre:"Conduite sur verglas",cat:"SAI",sousCat:"Hiver",desc:"Freinage ABS, pas de coup de volant brusque."},
    {id:"sai_003",titre:"Fumée blanche",cat:"SAI",sousCat:"Hiver",desc:"Condensation (normal) ou fuite."},
    {id:"sai_004",titre:"Gel des serrures",cat:"SAI",sousCat:"Hiver",desc:"Produit dégrippant."},
    {id:"sai_005",titre:"Neige sur le toit",cat:"SAI",sousCat:"Hiver",desc:"Obligation de dégager."},
    {id:"sai_006",titre:"Brouillard givrant",cat:"SAI",sousCat:"Hiver",desc:"Baisse de visibilité."},
    {id:"sai_007",titre:"Route enneigée",cat:"SAI",sousCat:"Hiver",desc:"Adapter sa vitesse."},
    {id:"sai_008",titre:"Conduite en montagne",cat:"SAI",sousCat:"Montagne",desc:"Le véhicule qui descend cède le passage."}
];

var SECOURS_URGENCE = [
    {id:"sec_001",titre:"Position Latérale de Sécurité (PLS)",cat:"SEC",sousCat:"Gestes",desc:"Pour une victime inconsciente qui respire."},
    {id:"sec_002",titre:"Massage cardiaque",cat:"SEC",sousCat:"Gestes",desc:"30 compressions, 2 insufflations."},
    {id:"sec_003",titre:"Compressions thoraciques",cat:"SEC",sousCat:"Gestes",desc:"Profondeur 5-6 cm, 100-120/min."},
    {id:"sec_004",titre:"Insufflations",cat:"SEC",sousCat:"Gestes",desc:"Tête en extension, pincer le nez."},
    {id:"sec_005",titre:"Défibrillateur (DAE)",cat:"SEC",sousCat:"Gestes",desc:"Utilisation, pose des électrodes."},
    {id:"sec_006",titre:"Arrêt d'une hémorragie",cat:"SEC",sousCat:"Gestes",desc:"Compression directe."},
    {id:"sec_007",titre:"Brûlures",cat:"SEC",sousCat:"Gestes",desc:"Ne pas percer les cloques."},
    {id:"sec_008",titre:"Fractures",cat:"SEC",sousCat:"Gestes",desc:"Immobiliser."},
    {id:"sec_009",titre:"Malaise",cat:"SEC",sousCat:"Gestes",desc:"Allonger, surélever les jambes."},
    {id:"sec_010",titre:"Victime consciente",cat:"SEC",sousCat:"Gestes",desc:"Rassurer."}
];

var LEGAL_ADMIN = [
    {id:"leg_001",titre:"Permis de conduire B",cat:"LEG",sousCat:"Permis",desc:"Âge minimum 18 ans."},
    {id:"leg_002",titre:"Permis de conduire A1",cat:"LEG",sousCat:"Permis",desc:"Moto légère (125 cm3, 11 kW)."},
    {id:"leg_003",titre:"Permis de conduire A2",cat:"LEG",sousCat:"Permis",desc:"Moto (35 kW)."},
    {id:"leg_004",titre:"Permis de conduire A",cat:"LEG",sousCat:"Permis",desc:"Moto (puissance illimitée)."},
    {id:"leg_005",titre:"Permis de conduire C",cat:"LEG",sousCat:"Permis",desc:"Camion (> 3,5 t)."},
    {id:"leg_006",titre:"Permis de conduire D",cat:"LEG",sousCat:"Permis",desc:"Autocar."},
    {id:"leg_007",titre:"Permis de conduire BE",cat:"LEG",sousCat:"Permis",desc:"Voiture + remorque."},
    {id:"leg_008",titre:"Assurance responsabilité civile",cat:"LEG",sousCat:"Assurance",desc:"Obligatoire."},
    {id:"leg_009",titre:"Contrôle technique",cat:"LEG",sousCat:"Contrôle",desc:"Obligatoire tous les ans."},
    {id:"leg_010",titre:"Alcoolémie (0,5 g/L)",cat:"LEG",sousCat:"Sanctions",desc:"Amende 179 €, retrait 3h."}
];

var EQUIPEMENTS = [
    {id:"eq_001",titre:"Phare à LED",cat:"EQ",sousCat:"Éclairage",desc:"Obligatoire sur les véhicules récents."},
    {id:"eq_002",titre:"Feux de jour",cat:"EQ",sousCat:"Éclairage",desc:"Obligatoires sur autoroute."},
    {id:"eq_003",titre:"Waze/GPS",cat:"EQ",sousCat:"Aides",desc:"Autorisation, ne pas manipuler."},
    {id:"eq_004",titre:"Caméra de recul",cat:"EQ",sousCat:"Aides",desc:"Recommandé."},
    {id:"eq_005",titre:"Radar de recul",cat:"EQ",sousCat:"Aides",desc:"Recommandé."}
];

var MARQUAGES_SOL = [
    {id:"mar_001",titre:"Ligne blanche continue simple",cat:"MAR",sousCat:"Lignes",desc:"Interdiction de franchir."},
    {id:"mar_002",titre:"Ligne blanche continue double",cat:"MAR",sousCat:"Lignes",desc:"Interdiction totale."},
    {id:"mar_003",titre:"Ligne blanche discontinue",cat:"MAR",sousCat:"Lignes",desc:"Autorisation de dépasser."},
    {id:"mar_004",titre:"Ligne jaune",cat:"MAR",sousCat:"Lignes",desc:"Stationnement interdit."},
    {id:"mar_005",titre:"Passage piéton",cat:"MAR",sousCat:"Passages",desc:"Priorité aux piétons."}
];

var CONDITIONS_EXTREMES = [
    {id:"cnd_001",titre:"Conduite sur neige",cat:"CND",sousCat:"Hiver",desc:"Vitesse réduite."},
    {id:"cnd_002",titre:"Conduite sur verglas",cat:"CND",sousCat:"Hiver",desc:"ABS."},
    {id:"cnd_003",titre:"Conduite par grand froid",cat:"CND",sousCat:"Hiver",desc:"Vérifier batterie."},
    {id:"cnd_004",titre:"Gel des vitres",cat:"CND",sousCat:"Hiver",desc:"Dégivrage."},
    {id:"cnd_005",titre:"Conduite par canicule",cat:"CND",sousCat:"Été",desc:"Surveillance température."}
];

var VEHICULES_SPECIFIQUES = [
    {id:"veh_001",titre:"Moto (catégorie A1)",cat:"VEH",sousCat:"Moto",desc:"125 cm3, 11 kW."},
    {id:"veh_002",titre:"Moto (catégorie A2)",cat:"VEH",sousCat:"Moto",desc:"35 kW."},
    {id:"veh_003",titre:"Moto (catégorie A)",cat:"VEH",sousCat:"Moto",desc:"Puissance illimitée."},
    {id:"veh_004",titre:"Casque moto",cat:"VEH",sousCat:"Moto",desc:"Obligatoire."},
    {id:"veh_005",titre:"Camion (permis C)",cat:"VEH",sousCat:"Poids lourds",desc:"> 3,5 t."}
];

var PSYCHOLOGIE_STATS = [
    {id:"psy_001",titre:"Stress et conduite",cat:"PSY",sousCat:"Psychologie",desc:"Le stress altère les capacités."},
    {id:"psy_002",titre:"Fatigue",cat:"PSY",sousCat:"Psychologie",desc:"15 minutes de pause toutes les 2h."},
    {id:"psy_003",titre:"Somnolence",cat:"PSY",sousCat:"Psychologie",desc:"Risque d'endormissement."},
    {id:"psy_004",titre:"Alcool et conduite",cat:"PSY",sousCat:"Psychologie",desc:"0,5 g/L = 1 verre."},
    {id:"psy_005",titre:"Drogues et conduite",cat:"PSY",sousCat:"Psychologie",desc:"Interdiction totale."}
];

var INFRACTIONS = [
    {titre:"Oubli du clignotant",degre:"1er Degré",amende:"58 €",desc:"Omettre d'indiquer un changement de direction."},
    {titre:"Stationnement gênant",degre:"1er Degré",amende:"58 €",desc:"Stationner sur une zone non autorisée."},
    {titre:"Ceinture de sécurité",degre:"2ème Degré",amende:"116 €",desc:"Non-port obligatoire."},
    {titre:"Feu rouge",degre:"3ème Degré",amende:"174 €",desc:"S'engager alors que le feu est rouge."},
    {titre:"STOP",degre:"3ème Degré",amende:"174 €",desc:"Oublier de marquer un arrêt complet."},
    {titre:"GSM au volant",degre:"3ème Degré",amende:"174 €",desc:"Tenir un téléphone en main."}
];

var RULES = [
    {titre:"La Priorité à Droite",desc:"À toute intersection, céder le passage à tout conducteur venant de droite."},
    {titre:"Ronds-Points et Giratoires",desc:"Sauf panneaux B1/B5, priorité à droite DANS le rond-point."},
    {titre:"Priorité des Trams",desc:"Le tram a TOUJOURS la priorité."},
    {titre:"Vitesses Maximales",desc:"Agglo: 50 km/h. Hors agglo: 90 km/h. Autoroute: 120 km/h."},
    {titre:"Feu orange",desc:"Arrêt obligatoire sauf impossibilité de s'arrêter en sécurité."}
];

var PIEGES_ROUTES = [
    {id:"piege_1",titre:"Priorité à droite absolue",cat:"PIE",sousCat:"Pièges",desc:"Sans signalisation, priorité à droite."},
    {id:"piege_2",titre:"Stationnement 5 mètres",cat:"PIE",sousCat:"Pièges",desc:"Interdit à moins de 5m avant un passage piéton."},
    {id:"piege_3",titre:"Sortie chemin de terre",cat:"PIE",sousCat:"Pièges",desc:"Céder toujours le passage."},
    {id:"piege_4",titre:"Dépassement cyclistes",cat:"PIE",sousCat:"Pièges",desc:"Marge 1,0m en agglo, 1,5m hors agglo."},
    {id:"piege_5",titre:"Rond-point classique",cat:"PIE",sousCat:"Pièges",desc:"Un rond-point n'est prioritaire que s'il y a B1 et D10."}
];

var USAGERS_MANOEUVRES = [
    {id:"usager_1",titre:"Rues cyclables",cat:"USA",sousCat:"Usagers",desc:"Interdit de dépasser les cyclistes."},
    {id:"usager_2",titre:"Sas à vélos",cat:"USA",sousCat:"Usagers",desc:"Espace réservé aux vélos aux feux."},
    {id:"usager_3",titre:"Manœuvre",cat:"USA",sousCat:"Manœuvres",desc:"Céder le passage à tous."},
    {id:"usager_4",titre:"Croisement pentes",cat:"USA",sousCat:"Manœuvres",desc:"Le véhicule qui descend cède le passage."},
    {id:"usager_5",titre:"PMR",cat:"USA",sousCat:"Usagers",desc:"Personnes à mobilité réduite."}
];

var ALL_KNOWLEDGE = [].concat(
    PANNEAUX, MECANIQUE_MOTEUR, PNEUMATIQUES, SAISONS_ENVIRONNEMENT,
    SECOURS_URGENCE, LEGAL_ADMIN, EQUIPEMENTS, MARQUAGES_SOL,
    CONDITIONS_EXTREMES, VEHICULES_SPECIFIQUES, PSYCHOLOGIE_STATS,
    INFRACTIONS, RULES, PIEGES_ROUTES, USAGERS_MANOEUVRES
);

var CATEGORIES = {
    A:{label:"Danger",color:"var(--red)"},
    B:{label:"Priorité",color:"var(--amber)"},
    C:{label:"Interdiction",color:"var(--red)"},
    D:{label:"Obligation",color:"var(--blue)"},
    E:{label:"Stationnement",color:"var(--blue)"},
    F:{label:"Indication",color:"var(--teal)"},
    X:{label:"Panonceaux",color:"var(--purple)"},
    T:{label:"Travaux",color:"var(--orange)"},
    S:{label:"Service",color:"var(--green)"},
    MECA:{label:"Mécanique",color:"var(--dark)"},
    PNEU:{label:"Pneumatiques",color:"var(--dark)"},
    SAI:{label:"Saisons",color:"var(--dark)"},
    SEC:{label:"Secours",color:"var(--dark)"},
    LEG:{label:"Légal",color:"var(--dark)"},
    EQ:{label:"Équipements",color:"var(--dark)"},
    MAR:{label:"Marquages",color:"var(--dark)"},
    CND:{label:"Conditions extrêmes",color:"var(--dark)"},
    VEH:{label:"Véhicules",color:"var(--dark)"},
    PSY:{label:"Psychologie",color:"var(--dark)"},
    PIE:{label:"Pièges",color:"var(--orange)"},
    USA:{label:"Usagers",color:"var(--purple)"}
};

var MENU_STRUCTURE = [
    {id:"signalisation",label:"🚦 Signalisation",icon:"🚦",color:"var(--blue)",desc:"Tous les panneaux du code belge.",subCategories:[
        {id:"A",label:"Danger",count:29},
        {id:"B",label:"Priorité",count:6},
        {id:"C",label:"Interdiction",count:15},
        {id:"D",label:"Obligation",count:4},
        {id:"E",label:"Stationnement",count:3},
        {id:"F",label:"Indication",count:18},
        {id:"X",label:"Panonceaux",count:10},
        {id:"T",label:"Travaux",count:4},
        {id:"S",label:"Service",count:9}
    ],totalCount:98,data:PANNEAUX},
    {id:"mecanique",label:"🔧 Mécanique",icon:"🔧",color:"var(--dark)",desc:"Moteur, freins, direction, suspension.",subCategories:[
        {id:"MECA",label:"Moteur & Systèmes",count:40},
        {id:"PNEU",label:"Pneumatiques",count:20},
        {id:"EQ",label:"Équipements",count:5}
    ],totalCount:65,data:[].concat(MECANIQUE_MOTEUR,PNEUMATIQUES,EQUIPEMENTS)},
    {id:"conduite",label:"🌦️ Conduite",icon:"🌦️",color:"var(--teal)",desc:"Conduite hivernale, estivale, montagne.",subCategories:[
        {id:"SAI",label:"Saisons",count:8},
        {id:"CND",label:"Conditions extrêmes",count:5}
    ],totalCount:13,data:[].concat(SAISONS_ENVIRONNEMENT,CONDITIONS_EXTREMES)},
    {id:"securite",label:"🚑 Secours",icon:"🚑",color:"var(--red)",desc:"Gestes de premiers secours, balisage.",subCategories:[
        {id:"SEC",label:"Secours & Urgence",count:10}
    ],totalCount:10,data:SECOURS_URGENCE},
    {id:"legal",label:"⚖️ Légal",icon:"⚖️",color:"var(--purple)",desc:"Règles, infractions, permis, assurance.",subCategories:[
        {id:"LEG",label:"Légal & Admin",count:10},
        {id:"PSY",label:"Psychologie",count:5},
        {id:"PIE",label:"Pièges",count:5},
        {id:"USA",label:"Usagers",count:5}
    ],totalCount:25,data:[].concat(LEGAL_ADMIN,PSYCHOLOGIE_STATS,PIEGES_ROUTES,USAGERS_MANOEUVRES)},
    {id:"vehicules",label:"🚛 Véhicules",icon:"🚛",color:"var(--amber)",desc:"Motos, poids lourds, remorques.",subCategories:[
        {id:"VEH",label:"Véhicules spécifiques",count:5}
    ],totalCount:5,data:VEHICULES_SPECIFIQUES},
    {id:"marquages",label:"🛣️ Marquages",icon:"🛣️",color:"var(--green)",desc:"Lignes, passages piétons, sas vélo.",subCategories:[
        {id:"MAR",label:"Marquages au sol",count:5}
    ],totalCount:5,data:MARQUAGES_SOL}
];

var DEFAULT_APP_DATA = {favorites:[],stats:{sessions:0,correct:0,total:0},mistakes:{},theme:"light",streak:0};
var appData = JSON.parse(JSON.stringify(DEFAULT_APP_DATA));

async function loadAppData(){
    try{
        if(window.storage && typeof window.storage.get === "function"){
            var result = await window.storage.get("app-state");
            if(result && typeof result.value==="string"){
                var parsed = JSON.parse(result.value);
                appData = {...DEFAULT_APP_DATA,...parsed,stats:{...DEFAULT_APP_DATA.stats,...(parsed.stats||{})}};
            }
        }
    }catch(e){console.warn("Erreur chargement:",e);}
}

async function saveAppData(){
    try{
        if(window.storage && typeof window.storage.set === "function"){
            await window.storage.set("app-state",JSON.stringify(appData));
        }
    }catch(e){console.warn("Erreur sauvegarde:",e);}
}

function favorites(){return appData.favorites;}
function stats(){return appData.stats;}
function mistakes(){return appData.mistakes;}

var state={categories:["A","B","C","D","E","F","MECA","PNEU","SAI","SEC","LEG","EQ","MAR","CND","VEH","PSY","PIE","USA"],questionCount:15,timer:false,questions:[],index:0,score:0,answered:false,options:[],errors:[],categoryStats:{},review:false,timerId:null,seconds:15,isOfficialExam:false};

function $(id){return document.getElementById(id);}

function escapeHTML(value){
    return String(value||"").replace(/[&<>"']/g,function(char){
        var map={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"};
        return map[char];
    });
}

function animateCount(element,from,to,suffix,duration){
    duration=duration||550;
    if(!element)return;
    if(from===to){element.textContent=to+suffix;return;}
    var start=performance.now();
    function tick(now){
        var progress=Math.min(1,(now-start)/duration);
        var eased=1-Math.pow(1-progress,3);
        var value=Math.round(from+(to-from)*eased);
        element.textContent=value+suffix;
        if(progress<1)requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

function shuffle(array){
    var copy=array.slice();
    for(var i=copy.length-1;i>0;i--){
        var j=Math.floor(Math.random()*(i+1));
        var temp=copy[i];copy[i]=copy[j];copy[j]=temp;
    }
    return copy;
}

function updateHomeStats(){
    var total=stats().total;
    var correct=stats().correct;
    var percentage=total>0?Math.round(100*correct/total):0;
    if($("statSessions"))animateCount($("statSessions"),0,stats().sessions,"",550);
    if($("statSuccess"))animateCount($("statSuccess"),0,percentage,"%",550);
    if($("statFavs"))animateCount($("statFavs"),0,favorites().length,"",550);
    if($("statQuestions"))animateCount($("statQuestions"),0,total,"",550);
    if($("progressPercent"))$("progressPercent").textContent=percentage+"%";
    if($("progressBar"))$("progressBar").style.width=percentage+"%";
    if($("progressText"))$("progressText").textContent=total>0?correct+" bonne(s) réponse(s) sur "+total:"Aucune session";
    if($("streak"))$("streak").textContent=appData.streak;
}

async function toggleTheme(){
    document.body.classList.toggle("dark");
    appData.theme=document.body.classList.contains("dark")?"dark":"light";
    if($("themeButton"))$("themeButton").textContent=appData.theme==="dark"?"🌙":"☀️";
    await saveAppData();
}

function applyTheme(){
    if(appData.theme==="dark"){
        document.body.classList.add("dark");
        if($("themeButton"))$("themeButton").textContent="🌙";
    }
}

function hideViews(){
    var ids=["home","quiz","menu","categoriePage","sousCategoriePage","repo","rules","mecanique","pneumatiques","saisons","secours","legal","equipements","marquages","conditions","vehicules","psychologie","infractions","piegesRoutes","usagersManoeuvres"];
    for(var i=0;i<ids.length;i++){if($(ids[i]))$(ids[i]).classList.add("hidden");}
}

function goHome(){
    clearInterval(state.timerId);
    hideViews();
    if($("home"))$("home").classList.remove("hidden");
    updateHomeStats();
}

function showMenu(){
    hideViews();
    if($("menu"))$("menu").classList.remove("hidden");
    renderMenu();
}

function renderMenu(){
    var grid=$("menuGrid");
    if(!grid)return;
    grid.innerHTML="";
    for(var i=0;i<MENU_STRUCTURE.length;i++){
        var cat=MENU_STRUCTURE[i];
        var card=document.createElement("div");
        card.className="practice";
        card.style.cursor="pointer";
        card.onclick=function(c){return function(){showCategoriePage(c.id);};}(cat);
        card.innerHTML='<span class="practice-icon">'+cat.icon+'</span><span class="practice-copy"><b>'+cat.label+'</b><small>'+cat.totalCount+' éléments - '+cat.subCategories.length+' sous-catégories</small></span><span class="arrow">→</span>';
        grid.appendChild(card);
    }
}

function showCategoriePage(catId){
    var cat=null;
    for(var i=0;i<MENU_STRUCTURE.length;i++){if(MENU_STRUCTURE[i].id===catId)cat=MENU_STRUCTURE[i];}
    if(!cat)return;
    hideViews();
    if($("categoriePage"))$("categoriePage").classList.remove("hidden");
    $("categorieTitle").textContent=cat.icon+" "+cat.label;
    $("categorieDesc").textContent=cat.desc+" "+cat.totalCount+" éléments au total.";
    var grid=$("sousCategorieGrid");
    grid.innerHTML="";
    for(var j=0;j<cat.subCategories.length;j++){
        var sc=cat.subCategories[j];
        var btn=document.createElement("button");
        btn.className="practice";
        btn.style.width="100%";
        btn.onclick=function(s){return function(){showSousCategorie(cat.id,s.id);};}(sc);
        btn.innerHTML='<span class="practice-copy"><b>'+sc.label+'</b><small>'+sc.count+' éléments</small></span><span class="arrow">→</span>';
        grid.appendChild(btn);
    }
}

function showSousCategorie(catId,sousCatId){
    var cat=null;
    for(var i=0;i<MENU_STRUCTURE.length;i++){if(MENU_STRUCTURE[i].id===catId)cat=MENU_STRUCTURE[i];}
    if(!cat)return;
    hideViews();
    if($("sousCategoriePage"))$("sousCategoriePage").classList.remove("hidden");
    $("sousCategorieTitle").textContent=cat.icon+" "+cat.label+" > "+sousCatId;
    renderSousCategorieList(cat,sousCatId);
}

function renderSousCategorieList(cat,sousCatId){
    var list=$("sousCategorieList");
    if(!list)return;
    list.innerHTML="";
    var data=cat.data;
    var results=data.filter(function(item){return item.cat===sousCatId||(item.sousCat&&item.sousCat.indexOf(sousCatId)>=0);});
    if(results.length===0)results=data;
    for(var i=0;i<Math.min(results.length,20);i++){
        var item=results[i];
        var div=document.createElement("div");
        div.className="rule-card";
        div.innerHTML='<b>'+(item.titre||item.nom||item.code||item.id)+'</b><p>'+(item.desc||"")+'</p>';
        list.appendChild(div);
    }
}

function showQuiz(){clearInterval(state.timerId);hideViews();state.isOfficialExam=false;if($("quiz"))$("quiz").classList.remove("hidden");configureQuiz();}

function configureQuiz(){
    clearInterval(state.timerId);
    state.isOfficialExam=false;
    if($("quizRunning"))$("quizRunning").classList.add("hidden");
    if($("quizSummary"))$("quizSummary").classList.add("hidden");
    if($("quizConfig"))$("quizConfig").classList.remove("hidden");
    updateHomeStats();
}

function startQuiz(){
    var pool=ALL_KNOWLEDGE.filter(function(p){return state.categories.indexOf(p.cat)>=0;});
    if(pool.length<2)return;
    state.timer=$("timerEnabled")?$("timerEnabled").checked:false;
    state.questions=shuffle(pool).slice(0,state.questionCount);
    beginSession(false);
}

function startOfficialExam(){
    clearInterval(state.timerId);
    hideViews();
    state.isOfficialExam=true;
    state.timer=true;
    var allPool=ALL_KNOWLEDGE.slice();
    while(allPool.length<50)allPool=allPool.concat(ALL_KNOWLEDGE);
    state.questions=shuffle(allPool).slice(0,50);
    if($("quiz"))$("quiz").classList.remove("hidden");
    if($("quizConfig"))$("quizConfig").classList.add("hidden");
    if($("quizSummary"))$("quizSummary").classList.add("hidden");
    if($("quizRunning"))$("quizRunning").classList.remove("hidden");
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
    if($("quizConfig"))$("quizConfig").classList.add("hidden");
    if($("quizSummary"))$("quizSummary").classList.add("hidden");
    if($("quizRunning"))$("quizRunning").classList.remove("hidden");
    renderQuestion();
}

function renderProgressDots(){
    if(!$("progressDots"))return;
    var html="";
    for(var i=0;i<state.questions.length;i++){
        html+='<span class="'+(i<state.index?"done":(i===state.index?"current":""))+'"></span>';
    }
    $("progressDots").innerHTML=html;
}

function renderQuestion(){
    clearInterval(state.timerId);
    if(state.index>=state.questions.length){showSummary();return;}
    renderProgressDots();
    var panel=state.questions[state.index];
    if($("quizProgress"))$("quizProgress").textContent=(state.isOfficialExam?"Examen Officiel":"Question")+" "+(state.index+1)+"/"+state.questions.length;
    if($("quizScore"))$("quizScore").textContent="Score: "+state.score;
    if($("favoriteButton")){
        var code=panel.code||panel.id||panel.titre;
        $("favoriteButton").textContent=favorites().indexOf(code)>=0?"★":"☆";
    }
    var distractors=shuffle(ALL_KNOWLEDGE.filter(function(p){return(p.code||p.id||p.titre)!==(panel.code||panel.id||panel.titre);})).slice(0,3);
    state.options=shuffle([panel].concat(distractors));
    state.answered=false;
    if($("optionList")){
        var html="";
        for(var i=0;i<state.options.length;i++){
            var label=state.options[i].nom||state.options[i].titre;
            html+='<button class="option" onclick="answerQuestion('+i+')">'+escapeHTML(label)+'</button>';
        }
        $("optionList").innerHTML=html;
    }
    if($("feedbackZone"))$("feedbackZone").innerHTML="";
    if($("nextButtonZone"))$("nextButtonZone").innerHTML="";
    if($("timerDisplay")){
        if(state.timer){
            state.seconds=15;
            $("timerDisplay").classList.remove("hidden");
            $("timerDisplay").textContent=state.seconds+"s";
            state.timerId=setInterval(function(){
                state.seconds--;
                $("timerDisplay").textContent=state.seconds+"s";
                if(state.seconds<=0){clearInterval(state.timerId);timeoutQuestion();}
            },1000);
        }else{$("timerDisplay").classList.add("hidden");}
    }
}

function timeoutQuestion(){if(state.answered)return;completeAnswer(-1);}

function answerQuestion(index){if(state.answered)return;clearInterval(state.timerId);completeAnswer(index);}

function completeAnswer(selectedIndex){
    state.answered=true;
    var panel=state.questions[state.index];
    var selected=selectedIndex>=0?state.options[selectedIndex]:null;
    var correct=selected&&(selected.code||selected.id||selected.titre)===(panel.code||panel.id||panel.titre);
    var categoryState=state.categoryStats[panel.cat]||{correct:0,total:0};
    categoryState.total++;
    if(correct){state.score++;categoryState.correct++;}
    else{
        var code=panel.code||panel.id||panel.titre;
        appData.mistakes[code]=(appData.mistakes[code]||0)+1;
        state.errors.push({panel:panel,answer:selected?(selected.nom||selected.titre):"Temps écoulé"});
    }
    state.categoryStats[panel.cat]=categoryState;
    var options=document.querySelectorAll("#optionList .option");
    for(var i=0;i<options.length;i++){
        options[i].classList.add("locked");
        if((state.options[i].code||state.options[i].id||state.options[i].titre)===(panel.code||panel.id||panel.titre))options[i].classList.add("correct");
        else if(i===selectedIndex&&!correct)options[i].classList.add("wrong");
    }
    if($("feedbackZone")){
        var label=panel.nom||panel.titre;
        $("feedbackZone").innerHTML='<div class="feedback '+(correct?"good":"bad")+'"><b>'+(correct?"Bonne réponse !":"Erreur — c'était")+'</b> '+escapeHTML(label)+'</div>';
    }
    if($("nextButtonZone")){
        $("nextButtonZone").innerHTML='<button class="primary" style="width:100%" onclick="nextQuestion()">'+(state.index+1>=state.questions.length?"Voir le résumé":"Question suivante")+'</button>';
    }
    if($("quizScore"))$("quizScore").textContent="Score: "+state.score;
    saveAppData();
    updateHomeStats();
}

function nextQuestion(){state.index++;renderQuestion();}

async function toggleFavorite(){
    var panel=state.questions[state.index];
    var code=panel.code||panel.id||panel.titre;
    var index=appData.favorites.indexOf(code);
    if(index>=0)appData.favorites.splice(index,1);
    else appData.favorites.push(code);
    var button=$("favoriteButton");
    if(button){
        button.textContent=appData.favorites.indexOf(code)>=0?"★":"☆";
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
    if($("quizRunning"))$("quizRunning").classList.add("hidden");
    if($("quizSummary"))$("quizSummary").classList.remove("hidden");
    var passed=true;
    if(state.isOfficialExam){
        passed=score>=41;
        if($("summaryTitle"))$("summaryTitle").textContent=passed?"EXAMEN RÉUSSI ✓":"EXAMEN ÉCHOUÉ ✗";
    }else{
        if($("summaryTitle"))$("summaryTitle").textContent=state.review?"Révision terminée":"Session terminée";
    }
    if($("summaryPercent")){
        $("summaryPercent").textContent="0";
        animateCount($("summaryPercent"),0,percentage,"%",700);
    }
    if($("summaryFraction"))$("summaryFraction").textContent=score+"/"+total;
    if($("summaryMessage")){
        if(state.isOfficialExam){
            $("summaryMessage").textContent=passed?"Félicitations ! Avec "+score+"/50, tu obtiens ton permis théorique.":"Tu as obtenu "+score+"/50. Seuil de réussite : 41/50.";
        }else{
            $("summaryMessage").textContent=percentage>=90?"Excellent ! Continue comme ça.":percentage>=70?"Bon score. Encore un peu d'entraînement.":"Entraînement requis. Ne te décourage pas !";
        }
    }
    if($("errorResults")){
        if(state.errors.length){
            var errorHtml='<details class="errors"><summary>Revoir les '+state.errors.length+' erreur(s)</summary>';
            for(var k=0;k<state.errors.length;k++){
                var error=state.errors[k];
                var label=error.panel.nom||error.panel.titre;
                errorHtml+='<div class="error"><b>'+(error.panel.code||error.panel.id)+" — "+label+'</b><div class="your-answer">Ta réponse : '+error.answer+'</div></div>';
            }
            errorHtml+='</details>';
            $("errorResults").innerHTML=errorHtml;
        }else{$("errorResults").innerHTML="";}
    }
    updateHomeStats();
}

function replayQuiz(){beginSession(state.review);}

function startReview(){
    var reviewMap={};
    favorites().forEach(function(code){
        var found=ALL_KNOWLEDGE.find(function(p){return(p.code||p.id||p.titre)===code;});
        if(found)reviewMap[found.code||found.id||found.titre]=found;
    });
    var mistakesKeys=Object.keys(mistakes());
    mistakesKeys.forEach(function(code){
        var found=ALL_KNOWLEDGE.find(function(p){return(p.code||p.id||p.titre)===code;});
        if(found)reviewMap[found.code||found.id||found.titre]=found;
    });
    var list=shuffle(Object.values(reviewMap));
    if(!list.length){showQuiz();return;}
    state.questions=list;
    state.timer=false;
    state.isOfficialExam=false;
    beginSession(true);
}

document.addEventListener("keydown",function(event){
    if($("quizRunning")&&!$("quizRunning").classList.contains("hidden")){
        if((event.key>="1"&&event.key<="4")&&!state.answered)answerQuestion(parseInt(event.key)-1);
        if(event.key==="Enter"&&state.answered)nextQuestion();
        if(event.key.toLowerCase()==="f")toggleFavorite();
        if(event.key==="Escape")goHome();
    }
});

if($("questionCount")){
    $("questionCount").addEventListener("input",function(event){
        state.questionCount=Number(event.target.value);
        if($("questionCountValue"))$("questionCountValue").textContent=state.questionCount;
    });
}

async function init(){
    await loadAppData();
    applyTheme();
    updateHomeStats();
    goHome();
    document.body.classList.add("ready");
}

if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",init);}else{init();}
