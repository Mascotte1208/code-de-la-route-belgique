/* =========================================================
   DONNEES OFFICIELLES & EXPERTES INTEGRALES (BELGIQUE)
========================================================= */

const PANNEAUX = [
  {"code":"A1a","nom":"Virage dangereux Ã  gauche","cat":"A","desc":"Annonce un virage prononcÃ© vers la gauche."},
  {"code":"A1b","nom":"Virage dangereux Ã  droite","cat":"A","desc":"Annonce un virage prononcÃ© vers la droite."},
  {"code":"A1c","nom":"Succession de virages","cat":"A","desc":"Annonce plusieurs virages successifs, le premier Ã  gauche."},
  {"code":"A3","nom":"Descente dangereuse","cat":"A","desc":"Pente raide indiquÃ©e par un pourcentage. Utilisez le frein moteur."},
  {"code":"A5","nom":"MontÃ©e Ã  forte inclinaison","cat":"A","desc":"Indique une forte cÃ´te."},
  {"code":"A7a","nom":"ChaussÃ©e rÃ©trÃ©cie","cat":"A","desc":"RÃ©trÃ©cissement de la route des deux cÃ´tÃ©s."},
  {"code":"A9","nom":"Pont mobile","cat":"A","desc":"Approche d'un pont levant ou tournant."},
  {"code":"A13","nom":"Cassis ou dos d'Ã¢ne","cat":"A","desc":"Ralentisseur ou bosse sur la chaussÃ©e."},
  {"code":"A15","nom":"ChaussÃ©e glissante","cat":"A","desc":"Risque accru de glissade (pluie, verglas, gravillons)."},
  {"code":"A21","nom":"Passage pour piÃ©tons","cat":"A","desc":"Annonce un passage cloutÃ© Ã  proximitÃ©."},
  {"code":"A23","nom":"Endroit frÃ©quentÃ© par des enfants","cat":"A","desc":"PrÃ©sence d'Ã©coles ou aires de jeux."},
  {"code":"A25","nom":"Passage de cyclistes","cat":"A","desc":"DÃ©bouchÃ© de cyclistes ou piste cyclable."},
  {"code":"A31","nom":"Travaux","cat":"A","desc":"PrÃ©sence d'un chantier sur ou le long de la voie publique."},
  {"code":"A33","nom":"Feux de circulation","cat":"A","desc":"Annonce des feux tricolores en amont."},
  {"code":"A51","nom":"Danger indÃ©terminÃ©","cat":"A","desc":"Danger particulier prÃ©cisÃ© par un panonceau additionnel."},

  {"code":"B1","nom":"CÃ©dez le passage","cat":"B","desc":"Triangle pointÃ© vers le bas. CÃ©der le passage aux usagers de la voie prioritaire."},
  {"code":"B5","nom":"Stop (ArrÃªt obligatoire)","cat":"B","desc":"Obligation de marquer l'arrÃªt complet avant la ligne d'effet."},
  {"code":"B9","nom":"Voie prioritaire","cat":"B","desc":"Losange jaune : vous Ãªtes prioritaire aux intersections."},
  {"code":"B11","nom":"Fin de voie prioritaire","cat":"B","desc":"Losange barrÃ© : fin du statut de route prioritaire."},
  {"code":"B15","nom":"PrioritÃ© Ã  l'intersection","cat":"B","desc":"Vous avez la prioritÃ© uniquement Ã  la prochaine intersection."},
  {"code":"B17","nom":"PrioritÃ© Ã  droite","cat":"B","desc":"RÃ¨gle gÃ©nÃ©rale : cÃ©der le passage venant de droite."},

  {"code":"C1","nom":"AccÃ¨s interdit dans les deux sens","cat":"C","desc":"Interdiction Ã  tout conducteur de s'engager."},
  {"code":"C3","nom":"Sens interdit","cat":"C","desc":"Interdiction de s'engager dans cette voie."},
  {"code":"C5","nom":"AccÃ¨s interdit aux automobiles","cat":"C","desc":"Interdit aux voitures et camions."},
  {"code":"C7","nom":"AccÃ¨s interdit aux motocycles","cat":"C","desc":"Interdit aux motos."},
  {"code":"C11","nom":"AccÃ¨s interdit aux cyclistes","cat":"C","desc":"Interdit aux vÃ©los."},
  {"code":"C19","nom":"AccÃ¨s interdit aux piÃ©tons","cat":"C","desc":"Interdit aux piÃ©tons."},
  {"code":"C23","nom":"AccÃ¨s interdit aux camions","cat":"C","desc":"Interdit aux vÃ©hicules lourds de marchandises."},
  {"code":"C35","nom":"Interdiction de dÃ©passer","cat":"C","desc":"Interdiction de dÃ©passer les vÃ©hicules Ã  moteur."},
  {"code":"C43 30","nom":"Vitesse limitÃ©e Ã  30 km/h","cat":"C","desc":"Vitesse maximale autorisÃ©e de 30 km/h.","num":"30"},
  {"code":"C43 50","nom":"Vitesse limitÃ©e Ã  50 km/h","cat":"C","desc":"Vitesse maximale autorisÃ©e de 50 km/h.","num":"50"},
  {"code":"C43 70","nom":"Vitesse limitÃ©e Ã  70 km/h","cat":"C","desc":"Vitesse maximale autorisÃ©e de 70 km/h.","num":"70"},
  {"code":"C43 90","nom":"Vitesse limitÃ©e Ã  90 km/h","cat":"C","desc":"Vitesse maximale autorisÃ©e de 90 km/h.","num":"90"},
  {"code":"C45","nom":"Fin de toutes les interdictions locales","cat":"C","desc":"Fin des limitations de vitesse ou de dÃ©passement."},

  {"code":"D1a","nom":"Direction obligatoire Ã  droite","cat":"D","desc":"Obligation de tourner Ã  droite."},
  {"code":"D1b","nom":"Direction obligatoire Ã  gauche","cat":"D","desc":"Obligation de tourner Ã  gauche."},
  {"code":"D9","nom":"Piste cyclable obligatoire","cat":"D","desc":"Voie exclusive rÃ©servÃ©e aux cyclistes."},
  {"code":"D10","nom":"Chemin pour piÃ©tons","cat":"D","desc":"Voie rÃ©servÃ©e exclusivement aux piÃ©tons."},

  {"code":"E1","nom":"Stationnement interdit","cat":"E","desc":"Interdiction de stationner du cÃ´tÃ© du panneau. L'arrÃªt reste autorisÃ©."},
  {"code":"E3","nom":"ArrÃªt et stationnement interdits","cat":"E","desc":"Interdiction absolue de s'arrÃªter et de stationner."},
  {"code":"E9a","nom":"Stationnement autorisÃ© (Parking)","cat":"E","desc":"Indique un emplacement ou un parking autorisÃ©."},

  {"code":"F1","nom":"Commencement d'agglomÃ©ration","cat":"F","desc":"Vitesse limitÃ©e par dÃ©faut Ã  50 km/h (30 km/h Ã  Bruxelles)."},
  {"code":"F3","nom":"Fin d'agglomÃ©ration","cat":"F","desc":"Les rÃ¨gles d'agglomÃ©ration prennent fin."},
  {"code":"F5","nom":"Autoroute","cat":"F","desc":"DÃ©but d'autoroute (vitesse min. 70, max. 120 km/h)."},
  {"code":"F9","nom":"Route pour automobiles","cat":"F","desc":"Voie rÃ©servÃ©e aux vÃ©hicules automobiles."},
  {"code":"F12a","nom":"Zone rÃ©sidentielle / Zone de rencontre","cat":"F","desc":"PiÃ©tons prioritaires sur toute la largeur. Vitesse max 20 km/h."},
  {"code":"F19","nom":"Sens unique","cat":"F","desc":"Indique une rue Ã  sens unique."},
  {"code":"F4a","nom":"DÃ©but de zone 30","cat":"F","desc":"EntrÃ©e d'une zone oÃ¹ la vitesse est limitÃ©e Ã  30 km/h."},
  {"code":"F4b","nom":"Fin de zone 30","cat":"F","desc":"Sortie de la zone 30."},

  {"code":"Panonceau 1","nom":"Distance avant le danger","cat":"X","desc":"Indique la distance Ã  laquelle se situe le danger ou la rÃ¨gle."},
  {"code":"Panonceau 2","nom":"Etendue de la mesure","cat":"X","desc":"Indique la longueur sur laquelle s'applique la prescription."},
  {"code":"Panonceau 3","nom":"RÃ©pÃ©tition / Rappel","cat":"X","desc":"Confirme qu'une interdiction ou obligation est toujours d'application."}
];

const INFRACTIONS = [
  {"titre":"Oubli du clignotant","degre":"1er DegrÃ©","amende":"58 â‚¬","desc":"Omettre d'indiquer un changement de direction, un dÃ©passement ou la sortie d'un rond-point."},
  {"titre":"Stationnement gÃªnant simple","degre":"1er DegrÃ©","amende":"58 â‚¬","desc":"Stationner sur une zone non autorisÃ©e sans gÃªner gravement la circulation."},
  {"titre":"Circuler sur une bande de bus","degre":"1er DegrÃ©","amende":"58 â‚¬","desc":"Emprunter une bande rÃ©servÃ©e aux transports en commun sans autorisation."},
  {"titre":"DÃ©faut de documents Ã  bord","degre":"1er DegrÃ©","amende":"58 â‚¬","desc":"Ne pas prÃ©senter immÃ©diatement son permis, son certificat d'immatriculation ou son assurance."},
  {"titre":"Utilisation abusive des feux de brouillard","degre":"1er DegrÃ©","amende":"58 â‚¬","desc":"Allumer les feux antibrouillard par temps clair ou pluie lÃ©gÃ¨re (Ã©blouissement)."},
  {"titre":"Non-port de la ceinture de sÃ©curitÃ©","degre":"2Ã¨me DegrÃ©","amende":"116 â‚¬","desc":"Obligatoire pour tous les occupants du vÃ©hicule (conducteur et passagers)."},
  {"titre":"Franchissement d'un feu orange","degre":"2Ã¨me DegrÃ©","amende":"116 â‚¬","desc":"S'engager au feu orange alors qu'il Ã©tait possible de s'arrÃªter en sÃ©curitÃ©."},
  {"titre":"Stationnement sur passage pour piÃ©tons","degre":"2Ã¨me DegrÃ©","amende":"116 â‚¬","desc":"Se garer sur un passage cloutÃ©, un trottoir protÃ©geant les piÃ©tons ou une piste cyclable."},
  {"titre":"Conduite sans feux la nuit","degre":"2Ã¨me DegrÃ©","amende":"116 â‚¬","desc":"Oublier d'allumer ses feux de croisement entre la tombÃ©e et le lever du jour."},
  {"titre":"DÃ©passement par la droite","degre":"2Ã¨me DegrÃ©","amende":"116 â‚¬","desc":"Interdit sauf en cas de files ininterrompues de vÃ©hicules sur les autres bandes."},
  {"titre":"Non-respect de la distance de sÃ©curitÃ©","degre":"2Ã¨me DegrÃ©","amende":"116 â‚¬","desc":"Ne pas laisser une distance suffisante par rapport au vÃ©hicule qui prÃ©cÃ¨de."},
  {"titre":"Ne pas cÃ©der le passage Ã  un piÃ©ton engagÃ©","degre":"2Ã¨me DegrÃ©","amende":"116 â‚¬","desc":"Refuser la prioritÃ© Ã  un piÃ©ton s'engageant sur un passage cloutÃ©."},
  {"titre":"Usage du GSM au volant","degre":"3Ã¨me DegrÃ©","amende":"174 â‚¬","desc":"Tenir un tÃ©lÃ©phone ou un Ã©cran en main en conduisant. EntraÃ®ne un retrait immÃ©diat de permis (15 jours)."},
  {"titre":"Franchir un feu rouge","degre":"3Ã¨me DegrÃ©","amende":"174 â‚¬","desc":"S'engager Ã  un carrefour alors que le feu est rouge fixe ou clignotant."},
  {"titre":"Non-respect d'un panneau STOP (B5)","degre":"3Ã¨me DegrÃ©","amende":"174 â‚¬","desc":"Oublier de marquer un temps d'arrÃªt complet Ã  la ligne d'effet."},
  {"titre":"Franchir une ligne blanche continue","degre":"3Ã¨me DegrÃ©","amende":"174 â‚¬","desc":"Rouler sur ou franchir une ligne continue dÃ©limitant les bandes."},
  {"titre":"Prendre un sens interdit (C3)","degre":"3Ã¨me DegrÃ©","amende":"174 â‚¬","desc":"S'engager dans une rue en sens interdit."},
  {"titre":"Franchir un passage Ã  niveau fermÃ©","degre":"3Ã¨me DegrÃ©","amende":"174 â‚¬","desc":"Passer outre des barriÃ¨res en mouvement ou des feux rouges clignotants."},
  {"titre":"Faire demi-tour sur autoroute","degre":"4Ã¨me DegrÃ©","amende":"Tribunal","desc":"Comprend la marche arriÃ¨re et le contresens sur autoroute. DÃ©chÃ©ance du permis obligatoire."},
  {"titre":"Refus d'obtempÃ©rer","degre":"4Ã¨me DegrÃ©","amende":"Tribunal","desc":"Ignorer les ordres d'un agent de police qualifiÃ©."},
  {"titre":"Courses de vitesse illÃ©gales (Street racing)","degre":"4Ã¨me DegrÃ©","amende":"Tribunal","desc":"Organiser ou participer Ã  des concours de vitesse sur la voie publique."},
  {"titre":"DÃ©lit de fuite","degre":"DÃ©lit pÃ©nal","amende":"Tribunal","desc":"Quitter les lieux d'accident pour Ã©chapper Ã  ses responsabilitÃ©s."},
  {"titre":"ExcÃ¨s de vitesse (AgglomÃ©ration / Zone 30)","degre":"Vitesse","amende":"DÃ¨s 53 â‚¬ + 11 â‚¬/km/h","desc":"Tarif de base de 53 â‚¬, puis 11 â‚¬ par km/h excÃ©dentaire en zone sensible."},
  {"titre":"ExcÃ¨s de vitesse (Hors agglomÃ©ration / Autoroute)","degre":"Vitesse","amende":"DÃ¨s 53 â‚¬ + 6 â‚¬/km/h","desc":"Tarif de base de 53 â‚¬, puis 6 â‚¬ par km/h excÃ©dentaire."},
  {"titre":"AlcoolÃ©mie (0,2 g/L - Permis Provisoire)","degre":"Alcool (Novice)","amende":"Retrait immÃ©diat","desc":"TolÃ©rance quasi-nulle pour les jeunes conducteurs ou titulaires d'un permis provisoire."},
  {"titre":"AlcoolÃ©mie (0,5 g/L Ã  0,8 g/L)","degre":"Alcool","amende":"179 â‚¬ + Retrait 3h","desc":"Taux prohibÃ© lÃ©ger. Retrait immÃ©diat du permis pour 3 heures minimum."},
  {"titre":"AlcoolÃ©mie (SupÃ©rieure Ã  0,8 g/L)","degre":"Alcool / Tribunal","amende":"De 420 â‚¬ Ã  1200 â‚¬","desc":"Retrait immÃ©diat de permis (15 jours) et convocation obligatoire au tribunal de police."}
];

const RULES = [
  {"titre":"La PrioritÃ© Ã  Droite (RÃ¨gle gÃ©nÃ©rale)","desc":"Ã€ toute intersection, vous devez cÃ©der le passage Ã  tout conducteur venant de droite, sauf si un signal (panneau, feu, agent) ou une rÃ¨gle spÃ©cifique (carrossable vs chemin de terre) en dispose autrement."},
  {"titre":"Les Ronds-Points et Giratoires","desc":"Sauf signalisation contraire (panneau B1 'CÃ©dez le passage' ou B5 'Stop' Ã  l'entrÃ©e), la rÃ¨gle de la prioritÃ© Ã  droite s'applique DANS le rond-point. Cependant, dans 99% des giratoires modernes en Belgique, le panneau 'CÃ©dez le passage' est placÃ© pour ceux qui s'engagent."},
  {"titre":"La PrioritÃ© des Trams","desc":"Le tram a TOUJOURS la prioritÃ©, mÃªme venant de gauche, sauf s'il sort d'un dÃ©pÃ´t ou si des feux tricolores rÃ©glant la circulation s'opposent Ã  son passage. Ne coupez jamais la trajectoire d'un tram."},
  {"titre":"Vitesses Maximales en Belgique (RÃ©gionalisÃ©es)","desc":"â€¢ AgglomÃ©ration : 50 km/h (sauf Bruxelles oÃ¹ la rÃ¨gle gÃ©nÃ©rale est 30 km/h).<br>â€¢ Hors agglomÃ©ration : 90 km/h en Wallonie, 70 km/h en Flandre.<br>â€¢ Autoroutes : 120 km/h (min. 70 km/h)."},
  {"titre":"ArrÃªt vs Stationnement","desc":"â€¢ **L'arrÃªt** : Immobilisation de courte durÃ©e pour embarquer/dÃ©barquer des personnes ou charger/dÃ©charger des marchandises (le conducteur reste Ã  bord ou Ã  proximitÃ©).<br>â€¢ **Le stationnement** : Immobilisation qui dÃ©passe le temps nÃ©cessaire Ã  l'arrÃªt."},
  {"titre":"Le couloir de secours (Corridor d'urgence)","desc":"En cas d'embouteillage sur autoroute ou route Ã  2 bandes ou plus, les vÃ©hicules doivent obligatoirement se serrer : ceux de gauche vers la gauche, ceux de droite vers la droite, pour laisser un passage central libre aux services de secours."}
];

const MATIERE_AUTO = [
  {"id":"auto_1","titre":"Niveau d'huile moteur","cat":"Technique","desc":"Le contrÃ´le s'effectue <b>moteur froid et sur un plan horizontal</b>. Le niveau doit se situer entre MIN et MAX. Un manque provoque un serrage moteur."},
  {"id":"auto_2","titre":"Liquide de refroidissement","cat":"Technique","desc":"VÃ©rification via le vase d'expansion. <b>Avertissement :</b> ne jamais ouvrir le bouchon Ã  chaud sous peine de brÃ»lures graves."},
  {"id":"auto_3","titre":"Liquide de frein","cat":"Technique","desc":"Une baisse anormale indique soit l'usure prononcÃ©e des plaquettes/disques, soit une fuite dans le circuit hydraulique."},
  {"id":"auto_4","titre":"Liquide de lave-glace et balais","cat":"Technique","desc":"Le rÃ©servoir doit Ãªtre plein. Les fissures majeures dans le champ de vision du pare-brise constituent une infraction."},
  {"id":"auto_5","titre":"Pression et profondeur des pneus","cat":"Technique","desc":"VÃ©rification Ã  froid. La profondeur minimale lÃ©gale des rainures principales est de <b>1,6 mm</b> en Europe."},
  {"id":"auto_6","titre":"Masse Maximale AutorisÃ©e (MMA / PTAC)","cat":"LÃ©gal & Charges","desc":"Poids total maximal autorisÃ© (vÃ©hicule vide + passagers + bagages). IndiquÃ© sur la carte grise (rubrique F.2). Interdiction de surcharge."},
  {"id":"auto_7","titre":"Masse remorquable (Permis B)","cat":"LÃ©gal & Charges","desc":"Remorque max 750 kg sans condition, ou plus lourde si la somme des MMA (voiture + remorque) ne dÃ©passe pas 3 500 kg."},
  {"id":"auto_8","titre":"Documents obligatoires Ã  bord","cat":"Administratif","desc":"1. Permis de conduire valide.<br>2. Certificat d'immatriculation (carte grise).<br>3. Attestation d'assurance.<br>4. Certificat de contrÃ´le technique."},
  {"id":"auto_9","titre":"Ã‰quipements de sÃ©curitÃ© obligatoires","cat":"SÃ©curitÃ©","desc":"Triangle de signalisation, gilet haute visibilitÃ© par occupant, trousse de premiers secours et extincteur portatif homologuÃ©."},
  {"id":"auto_10","titre":"RÃ¨glementation stricte dans les Tunnels","cat":"SÃ©curitÃ© & Tunnels","desc":"1. Allumage obligatoire des <b>feux de croisement</b> mÃªme si le tunnel est Ã©clairÃ©.<br>2. Interdiction absolue de faire demi-tour ou de reculer.<br>3. En cas d'embouteillage : couper le moteur, garder ses distances et allumer les feux de dÃ©tresse.<br>4. Distance de sÃ©curitÃ© minimale de <b>50 mÃ¨tres</b> avec le vÃ©hicule prÃ©cÃ©dent."},
  {"id":"auto_11","titre":"Ã‰co-conduite (Notions d'examen)","cat":"Ã‰co-conduite","desc":"Passer les rapports de vitesse rapidement (entre 2000 et 2500 tr/min), couper le moteur lors d'un arrÃªt prolongÃ© (> 1 minute), maintenir des pneumatiques correctement gonflÃ©s pour rÃ©duire la consommation de carburant."},
  {"id":"auto_12","titre":"Premiers Secours en cas d'accident","cat":"Secours","desc":"SÃ©quence d'urgence absolue : <b>1. ProtÃ©ger</b> (baliser et enfiler son gilet avant de sortir) ; <b>2. Alerter</b> (appeler le 112 en prÃ©cisant le lieu exact et l'Ã©tat des victimes) ; <b>3. Secourir</b> (ne jamais retirer le casque d'un motard conscient sauf risque d'asphyxie)."}
];

const PIEGES_ROUTES = [
  {"id":"piege_1","titre":"La prioritÃ© Ã  droite absolue par dÃ©faut","cat":"PiÃ¨ges & PrioritÃ©s","desc":"<b>Le piÃ¨ge :</b> Penser que la route la plus large est prioritaire. <b>La rÃ¨gle :</b> Sans signalisation (panneau ou feu), la prioritÃ© Ã  droite s'applique toujours aveuglÃ©ment."},
  {"id":"piege_2","titre":"Le stationnement interdit implicite (Les 5 mÃ¨tres)","cat":"PiÃ¨ges & PrioritÃ©s","desc":"<b>Le piÃ¨ge :</b> Se garer juste avant un passage piÃ©ton en pensant qu'il n'y a pas de panneau E1/E3. <b>La rÃ¨gle :</b> Il est strictement interdit de stationner Ã  moins de <b>5 mÃ¨tres en amont</b> d'un passage pour piÃ©tons ou pour cyclistes."},
  {"id":"piege_3","titre":"Sortie d'un chemin de terre","cat":"PiÃ¨ges & PrioritÃ©s","desc":"<b>Le piÃ¨ge :</b> CÃ©der le passage Ã  quelqu'un qui sort d'un chemin de terre sous prÃ©texte qu'il est Ã  droite. <b>La rÃ¨gle :</b> Quiconque sort d'un chemin de terre, d'un sentier ou d'une propriÃ©tÃ© privÃ©e doit <b>toujours cÃ©der le passage</b> sur la voie publique."},
  {"id":"piege_4","titre":"Le dÃ©passement des cyclistes (Distances)","cat":"PiÃ¨ges & PrioritÃ©s","desc":"<b>Le piÃ¨ge :</b> FrÃ´ler un cycliste en ville. <b>La rÃ¨gle :</b> Marge latÃ©rale obligatoire de <b>1,0 m en agglomÃ©ration</b> et de <b>1,5 m hors agglomÃ©ration</b> franchissement de ligne continue autorisÃ© si la visibilitÃ© le permet."},
  {"id":"piege_5","titre":"Le piÃ¨ge du rond-point classique vs giratoire","cat":"PiÃ¨ges & PrioritÃ©s","desc":"<b>Le piÃ¨ge :</b> Croire que l'on est prioritaire dans tous les ronds-points. <b>La rÃ¨gle :</b> Un rond-point n'est un giratoire prioritaire que si les panneaux 'CÃ©dez le passage' (B1) et 'Sens giratoire' (D10) sont placÃ©s. Sinon, c'est la prioritÃ© Ã  droite classique pour entrer !"},
  {"id":"piege_6","titre":"L'illusion du feu orange fixe","cat":"PiÃ¨ges & PrioritÃ©s","desc":"<b>Le piÃ¨ge :</b> AccÃ©lÃ©rer au feu orange. <b>La rÃ¨gle :</b> Le feu orange oblige Ã  l'arrÃªt, SAUF si vous Ãªtes si prÃ¨s du carrefour que vous ne pouvez plus vous arrÃªter en sÃ©curitÃ© sans provoquer de collision."},
  {"id":"piege_7","titre":"Le feu vert n'annule pas la prioritÃ© des piÃ©tons","cat":"PiÃ¨ges & PrioritÃ©s (Rare)","desc":"<b>Le piÃ¨ge vicieux :</b> Tourner Ã  droite ou Ã  gauche Ã  un feu vert en pensant avoir le champ libre. <b>La rÃ¨gle :</b> Si vous coupez un passage pour piÃ©tons ou une piste cyclable, <b>vous devez cÃ©der le passage aux usagers qui traversent</b>, mÃªme si votre feu tricolore est au vert."},
  {"id":"piege_8","titre":"La bande d'arrÃªt d'urgence sur autoroute","cat":"PiÃ¨ges & PrioritÃ©s (Rare)","desc":"<b>Le piÃ¨ge :</b> S'y arrÃªter pour passer un appel d'urgence ou rÃ©gler son GPS. <b>La rÃ¨gle :</b> C'est strictement interdit, sauf cas de force majeure absolue (panne mÃ©canique ou malaise). S'y garer par confort est une infraction grave."},
  {"id":"piege_9","titre":"Le sens de stationnement et le disque bleu","cat":"PiÃ¨ges & PrioritÃ©s (Rare)","desc":"<b>Le piÃ¨ge :</b> Se garer Ã  contresens ou rÃ©gler mal son disque. <b>La rÃ¨gle :</b> Vous devez obligatoirement vous garer dans le sens de la marche du cÃ´tÃ© droit. Sur disque de stationnement, celui-ci doit Ãªtre rÃ©glÃ© sur <b>l'heure de l'arrivÃ©e (l'heure entamÃ©e ou la demi-heure suivante)</b>."},
  {"id":"piege_10","titre":"Le dÃ©passement par la droite sur autoroute","cat":"PiÃ¨ges & PrioritÃ©s (Rare)","desc":"<b>Le piÃ¨ge :</b> Penser que doubler par la droite est toujours interdit. <b>La rÃ¨gle :</b> C'est interdit, <i>sauf</i> en cas de <b>files ininterrompues</b> de vÃ©hicules sur les autres bandes lorsque la circulation est dense et roule au pas."}
];

const USAGERS_MANOEUVRES = [
  {"id":"usager_1","titre":"Les rues cyclables (Fietsstraten)","cat":"Usagers VulnÃ©rables","desc":"Dans une rue cyclable, les cyclistes occupent toute la largeur de leur bande (ou la moitiÃ© de la voirie). <b>Il est strictement interdit aux automobilistes de dÃ©passer les cyclistes</b> dans ces rues, et la vitesse maximale y est limitÃ©e Ã  30 km/h."},
  {"id":"usager_2","titre":"Les sas Ã  vÃ©los aux feux","cat":"Usagers VulnÃ©rables","desc":"Espace peint en avant de la ligne d'arrÃªt des voitures aux feux tricolores. Il est rÃ©servÃ© exclusivement aux vÃ©los et cyclomoteurs pour leur permettre de se placer en sÃ©curitÃ© devant les vÃ©hicules lors du passage au vert."},
  {"id":"usager_3","titre":"Qu'est-ce qu'une manÅ“uvre en droit belge ?","cat":"ManÅ“uvres","desc":"Constituent des manÅ“uvres : quitter un stationnement, faire demi-tour, reculer, sortir d'un garage ou s'insÃ©rer dans la circulation. <b>La rÃ¨gle absolue :</b> Celui qui effectue une manÅ“uvre doit cÃ©der le passage Ã  <b>tous</b> les autres usagers."},
  {"id":"usager_4","titre":"Croisement sur routes de montagne / fortes pentes","cat":"Intersections","desc":"Sur les pentes raides (panneaux A3/A5), le vÃ©hicule qui <b>descend</b> doit s'arrÃªter ou reculer pour laisser passer celui qui monte, <i>sauf</i> si le vÃ©hicule qui monte trouve un refuge (une halte) plus prÃ¨s de lui."},
  {"id":"usager_5","titre":"Restrictions du Permis Provisoire 36 mois","cat":"Permis & LÃ©gal","desc":"Si tu conduis avec un permis provisoire accompagnÃ© d'un guide, il est strictement interdit de circuler les <b>vendredis, samedis, dimanches et veilles de jours fÃ©riÃ©s entre 22h et 6h du matin</b>."},
  {"id":"usager_6","titre":"Le chargement et les dÃ©passements Ã  l'arriÃ¨re","cat":"Chargement","desc":"Un chargement ne peut jamais masquer les plaques ou les feux. S'il dÃ©passe de plus d'<b>un mÃ¨tre</b> Ã  l'arriÃ¨re du vÃ©hicule, il doit obligatoirement Ãªtre signalÃ© par un panneau carrÃ© Ã  rayures rouges et blanches."}
];

const CATEGORIES = {
  A:{label:"Danger",color:"var(--red)"},
  B:{label:"PrioritÃ©",color:"var(--amber)"},
  C:{label:"Interdiction",color:"var(--red)"},
  D:{label:"Obligation",color:"var(--blue)"},
  E:{label:"Stationnement",color:"var(--blue)"},
  F:{label:"Indication",color:"var(--teal)"},
  X:{label:"Panonceaux",color:"var(--purple)"}
};

/* =========================================================
   STOCKAGE & ETAT DE L'APPLICATION
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
    if(window.storage && typeof window.storage.get === "function"){
      const result = await window.storage.get("app-state", false);
      if(result && typeof result.value==="string"){
        const parsed = JSON.parse(result.value);
        appData = {
          ...DEFAULT_APP_DATA,
          ...parsed,
          stats:{...DEFAULT_APP_DATA.stats, ...(parsed.stats||{})}
        };
      }
    }
  }catch(e){}
}

async function saveAppData(){
  try{
    if(window.storage && typeof window.storage.set === "function"){
      await window.storage.set("app-state", JSON.stringify(appData), false);
    }
  }catch(e){
    console.error("Ã‰chec de la sauvegarde :", e);
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
  seconds:15,
  isOfficialExam:false
};

function $(id){ return document.getElementById(id); }

function escapeHTML(value){
  return String(value ?? "").replace(
    /[&<>"']/g,
    char=>({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "\"":"&quot;", "'":"&#39;" }[char])
  );
}

function animateCount(element,from,to,suffix,duration=550){
  if(!element) return;
  if(from===to){ element.textContent=to+suffix; return; }
  const start=performance.now();
  function tick(now){
    const progress=Math.min(1,(now-start)/duration);
    const eased=1-Math.pow(1-progress,3);
    const value=Math.round(from+(to-from)*eased);
    element.textContent=value+suffix;
    if(progress<1){ requestAnimationFrame(tick); }
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

  const prevSessions=Number($("statSessions")?.textContent)||0;
  const prevQuestions=Number($("statQuestions")?.textContent)||0;
  const prevFavs=Number($("statFavs")?.textContent)||0;
  const prevSuccess=Number(($("statSuccess")?.textContent||"0").replace("%",""))||0;

  if($("statSessions")) animateCount($("statSessions"),prevSessions,stats().sessions,"");
  if($("statSuccess")) animateCount($("statSuccess"),prevSuccess,percentage,"%");
  if($("statFavs")) animateCount($("statFavs"),prevFavs,favorites().length,"");
  if($("statQuestions")) animateCount($("statQuestions"),prevQuestions,total,"");

  if($("progressPercent")) $("progressPercent").textContent=percentage+"%";
  if($("progressBar")) $("progressBar").style.width=percentage+"%";

  if($("progressText")){
    $("progressText").textContent = total>0 ? `${correct} bonne${correct>1?"s":""} rÃ©ponse${correct>1?"s":""} sur ${total}` : "Aucune session pour le moment";
  }
  if($("reviewCount")){
    $("reviewCount").textContent = new Set([...favorites(), ...Object.keys(mistakes())]).size;
  }
  if($("streak")) $("streak").textContent=appData.streak;
}

async function toggleTheme(){
  document.body.classList.toggle("dark");
  appData.theme=document.body.classList.contains("dark")?"dark":"light";
  if($("themeButton")) $("themeButton").textContent=appData.theme==="dark"?"ðŸŒ™":"â˜€ï¸";
  await saveAppData();
}

function applyTheme(){
  if(appData.theme==="dark"){
    document.body.classList.add("dark");
    if($("themeButton")) $("themeButton").textContent="ðŸŒ™";
  }
}

function hideViews(){
  ["home","quiz","repo","infractions","rules","matiereAuto","piegesRoutes","usagersManoeuvres"].forEach(id=>{
    if($(id)) $(id).classList.add("hidden");
  });
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

/* =========================================================
   MODE EXAMEN BLANC OFFICIEL (50 QUESTIONS)
========================================================= */

function startOfficialExam(){
  clearInterval(state.timerId);
  hideViews();
  state.isOfficialExam = true;
  state.timer = true; 
  
  let allPool = [...PANNEAUX];
  while(allPool.length < 50) {
    allPool = allPool.concat(PANNEAUX);
  }
  state.questions = shuffle(allPool).slice(0, 50);
  
  if($("quiz")) $("quiz").classList.remove("hidden");
  if($("homeButton")) $("homeButton").style.display="block";
  
  $("quizConfig").classList.add("hidden");
  $("quizSummary").classList.add("hidden");
  $("quizRunning").classList.remove("hidden");
  
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

function renderCategorySelector(){
  const grid=$("categoryGrid");
  if(!grid) return;
  grid.innerHTML="";

  Object.keys(CATEGORIES).filter(key=>key!=="X").forEach(key=>{
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
  const pool=PANNEAUX.filter(p=>state.categories.includes(p.cat));
  if(pool.length<2) return;
  state.timer=$("timerEnabled") ? $("timerEnabled").checked : false;
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
  if(!list.length){ showQuiz(); return; }
  state.questions=list;
  state.timer=false;
  state.isOfficialExam = false;
  beginSession(true);
}

function reviewErrors(){
  state.questions=state.errors.map(error=>error.panel);
  state.timer=false;
  state.isOfficialExam = false;
  beginSession(true);
}

/* =========================================================
   PANNEAUX SVG ENGINE
========================================================= */

function dangerTriangle(inner){
  return `<polygon points="90,12 168,154 12,154" fill="#fff" stroke="#c81e2c" stroke-width="12" stroke-linejoin="round"/>${inner}`;
}
function prohibCircle(inner){
  return `<circle cx="90" cy="90" r="76" fill="#fff" stroke="#c81e2c" stroke-width="14"/>${inner}`;
}
function obligCircle(inner){
  return `<circle cx="90" cy="90" r="76" fill="#1c5fa8"/>${inner}`;
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
  if(!$("progressDots")) return;
  $("progressDots").innerHTML = state.questions.map((_,index)=>`<i class="${index<state.index?"done":""}"></i>`).join("");
}

function renderQuestion(){
  clearInterval(state.timerId);
  if(state.index>=state.questions.length){ showSummary(); return; }
  renderProgressDots();

  const panel=state.questions[state.index];
  const totalQ = state.questions.length;

  if($("quizProgress")){
    $("quizProgress").textContent = `${state.isOfficialExam ? "Examen Officiel" : (state.review?"RÃ©vision":"Question")} ${state.index+1} / ${totalQ}`;
  }
  if($("quizScore")) $("quizScore").textContent="Score : "+state.score;
  if($("favoriteButton")){
    $("favoriteButton").textContent = favorites().includes(panel.code) ? "â­" : "â˜†";
  }
  if($("signStage")) $("signStage").innerHTML=makeSignSVG(panel,false);
  if($("signCaption")){
    $("signCaption").textContent = `${panel.code} â€” ${CATEGORIES[panel.cat]?.label||"Panonceau"}`;
  }

  const distractors=shuffle(PANNEAUX.filter(p=>p.code!==panel.code)).slice(0,3);
  state.options=shuffle([panel,...distractors]);
  state.answered=false;

  if($("optionList")){
    $("optionList").innerHTML=state.options.map((option,index)=>`
      <button class="option" onclick="answerQuestion(${index})">${escapeHTML(option.nom)}</button>
    `).join("");
  }

  if($("feedbackZone")) $("feedbackZone").innerHTML="";
  if($("nextButtonZone")) $("nextButtonZone").innerHTML="";

  if(state.timer && $("timerDisplay")){
    state.seconds=15;
    $("timerDisplay").classList.remove("hidden");
    $("timerDisplay").classList.remove("low");
    $("timerDisplay").textContent="â³ 15s";

    state.timerId=setInterval(()=>{
      state.seconds--;
      $("timerDisplay").textContent="â³ "+state.seconds+"s";
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
  const panel=state.questions[state.index];
  const selected=selectedIndex>=0?state.options[selectedIndex]:null;
  const correct=selected && selected.code===panel.code;

  const categoryState=state.categoryStats[panel.cat]||{correct:0,total:0};
  categoryState.total++;

  if(correct){
    state.score++;
    categoryState.correct++;
  }else{
    state.errors.push({ panel, answer:selected?selected.nom:"Temps Ã©coulÃ©" });
    appData.mistakes[panel.code]=(appData.mistakes[panel.code]||0)+1;
    await saveAppData();
  }
  state.categoryStats[panel.cat]=categoryState;

  document.querySelectorAll("#optionList .option").forEach((element,index)=>{
    element.classList.add("locked");
    if(state.options[index].code===panel.code){
      element.classList.add("correct");
    }else if(index===selectedIndex){
      element.classList.add("wrong");
    }
  });

  if($("feedbackZone")){
    $("feedbackZone").innerHTML=`
      <div class="feedback ${correct?"":"bad"}">
        <b>${correct ? "Bonne rÃ©ponse" : selectedIndex<0 ? "Temps Ã©coulÃ© â€” câ€™Ã©tait : "+escapeHTML(panel.nom) : "Erreur â€” câ€™Ã©tait : "+escapeHTML(panel.nom)}</b>
        ${escapeHTML(panel.desc)}
      </div>
    `;
  }

  if($("nextButtonZone")){
    $("nextButtonZone").innerHTML=`
      <button class="primary" style="width:100%" onclick="nextQuestion()">
        ${state.index+1>=state.questions.length?"Voir le rÃ©sumÃ© officiel":"Question suivante"}
      </button>
    `;
  }
  if($("quizScore")) $("quizScore").textContent="Score : "+state.score;
}

function nextQuestion(){
  state.index++;
  renderQuestion();
}

async function toggleFavorite(){
  const panel=state.questions[state.index];
  const index=appData.favorites.indexOf(panel.code);
  if(index>=0){ appData.favorites.splice(index,1); }
  else{ appData.favorites.push(panel.code); }

  const button=$("favoriteButton");
  if(button){
    button.textContent=favorites().includes(panel.code)?"â­":"â˜†";
    button.classList.remove("pop");
    void button.offsetWidth;
    button.classList.add("pop");
  }
  await saveAppData();
  updateHomeStats();
}

async function showSummary(){
  clearInterval(state.timerId);
  const total=state.questions.length;
  const score=state.score;
  const percentage=total?Math.round(100*score/total):0;

  if(!state.review){
    appData.stats.sessions++;
    appData.stats.correct+=score;
    appData.stats.total+=total;
    await saveAppData();
  }

  if($("quizRunning")) $("quizRunning").classList.add("hidden");
  if($("quizSummary")) $("quizSummary").classList.remove("hidden");

  let passed = true;
  if(state.isOfficialExam){
    passed = score >= 41;
    $("summaryTitle").textContent = passed ? "ðŸŽ‰ EXAMEN RÃ‰USSI (Officiel)" : "âŒ EXAMEN Ã‰CHOUÃ‰ (Officiel)";
  } else {
    $("summaryTitle").textContent = state.review ? "RÃ©vision terminÃ©e" : "Session terminÃ©e";
  }

  if($("summaryPercent")){
    $("summaryPercent").textContent="0%";
    animateCount($("summaryPercent"),0,percentage,"%",700);
  }
  if($("summaryFraction")) $("summaryFraction").textContent=`${score} / ${total}`;

  if($("summaryMessage")){
    if(state.isOfficialExam){
      $("summaryMessage").textContent = passed 
        ? `FÃ©licitations ! Avec ${score}/50, tu obtiens ton permis thÃ©orique (Seuil requis : 41/50).`
        : `Tu as obtenu ${score}/50. Le seuil de rÃ©ussite est fixÃ© Ã  41/50. Il te manque quelques points, continue Ã  bosser !`;
    } else {
      $("summaryMessage").textContent = percentage>=90 ? "Excellent niveau, continue ainsi." : percentage>=70 ? "Bon score, rÃ©vise les points manquÃ©s." : "EntraÃ®nement requis.";
    }
  }

  if($("categoryResults")){
    $("categoryResults").innerHTML=Object.entries(state.categoryStats).map(([category,result])=>{
      const percent=Math.round(100*result.correct/result.total);
      return `
        <div class="category-result">
          <div class="category-result-top">
            <span>${CATEGORIES[category]?.label || category}</span>
            <span>${result.correct}/${result.total}</span>
          </div>
          <div class="category-track">
            <span data-target="${percent}" style="background:${CATEGORIES[category]?.color || 'var(--blue)'};"></span>
          </div>
        </div>
      `;
    }).join("");
  }

  requestAnimationFrame(()=>{
    document.querySelectorAll("#categoryResults .category-track span").forEach(element=>{
      element.style.width=element.dataset.target+"%";
    });
  });

  if(state.errors.length){
    if($("errorResults")){
      $("errorResults").innerHTML=`
        <details class="errors">
          <summary>Revoir les ${state.errors.length} erreur(s)</summary>
          ${state.errors.map(error=>`
            <div class="error">
              <b>[${escapeHTML(error.panel.code)}] ${escapeHTML(error.panel.nom)}</b>
              <div class="your-answer">Ta rÃ©ponse : ${escapeHTML(error.answer)}</div>
              <div>${escapeHTML(error.panel.desc)}</div>
            </div>
          `).join("")}
        </details>
      `;
    }
    if($("reviewErrorsZone")){
      $("reviewErrorsZone").innerHTML=`<button class="danger" style="width:100%" onclick="reviewErrors()">Refaire mes erreurs (${state.errors.length})</button>`;
    }
  }else{
    if($("errorResults")) $("errorResults").innerHTML="";
    if($("reviewErrorsZone")) $("reviewErrorsZone").innerHTML="";
  }
  updateHomeStats();
}

function replayQuiz(){ beginSession(state.review); }

function renderRepository(){
  const query=$("repoSearch") ? $("repoSearch").value.trim().toLowerCase() : "";
  const results=PANNEAUX.filter(panel=>{
    if(!query) return true;
    return [panel.code,panel.nom,panel.desc,CATEGORIES[panel.cat]?.label].join(" ").toLowerCase().includes(query);
  });
  if($("repoCount")) $("repoCount").textContent=`${results.length} panneau(x) â€” base de ${PANNEAUX.length}`;

  const list=$("repoList");
  if(!list) return;
  list.innerHTML="";
  list.classList.remove("fade-list");
  void list.offsetWidth;
  list.classList.add("fade-list");

  Object.keys(CATEGORIES).forEach(category=>{
    const group=results.filter(panel=>panel.cat===category);
    if(!group.length) return;
    list.insertAdjacentHTML("beforeend", `<div class="repo-head"><span class="dot" style="background:${CATEGORIES[category].color}"></span>${CATEGORIES[category].label}</div>`);
    group.forEach(panel=>{
      list.insertAdjacentHTML("beforeend", `
        <div class="repo-item">
          <div class="repo-thumb">${makeSignSVG(panel,true)}</div>
          <div>
            <div class="repo-code">${escapeHTML(panel.code)}</div>
            <div class="repo-name">${escapeHTML(panel.nom)}</div>
            <div class="repo-desc">${escapeHTML(panel.desc)}</div>
          </div>
        </div>
      `);
    });
  });
  if(!results.length){ list.innerHTML=`<div class="empty">Aucun panneau ne correspond Ã  cette recherche.</div>`; }
}

function renderInfractions(){
  const query=$("infractionSearch") ? $("infractionSearch").value.trim().toLowerCase() : "";
  const results=INFRACTIONS.filter(item=>{
    if(!query) return true;
    return [item.titre,item.degre,item.amende,item.desc].join(" ").toLowerCase().includes(query);
  });
  const list=$("infractionList");
  if(!list) return;
  list.classList.remove("fade-list");
  void list.offsetWidth;
  list.classList.add("fade-list");

  list.innerHTML=results.length ? results.map(item=>{
    let badgeClass="";
    if(item.degre.includes("2Ã¨me")){ badgeClass="badge-2"; }
    else if(item.degre.includes("3Ã¨me")){ badgeClass="badge-3"; }
    else if(item.degre.includes("4Ã¨me")||item.degre.includes("Tribunal")||item.degre.includes("DÃ©lit")){ badgeClass="badge-4"; }
    else if(item.degre.includes("Vitesse")){ badgeClass="badge-vitesse"; }
    else if(item.degre.includes("Alcool")){ badgeClass="badge-alcool"; }

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
  }).join("") : `<div class="empty">Aucune infraction ne correspond.</div>`;
}

function renderRules(){
  const query=$("ruleSearch") ? $("ruleSearch").value.trim().toLowerCase() : "";
  const results=RULES.filter(rule=>{
    if(!query) return true;
    return [rule.titre,rule.desc].join(" ").toLowerCase().includes(query);
  });
  const list=$("ruleList");
  if(!list) return;
  list.classList.remove("fade-list");
  void list.offsetWidth;
  list.classList.add("fade-list");

  list.innerHTML=results.length ? results.map(rule=>`
    <div class="rule-card">
      <b>${escapeHTML(rule.titre)}</b>
      <p>${rule.desc}</p>
    </div>
  `).join("") : `<div class="empty">Aucune rÃ¨gle ne correspond.</div>`;
}

function renderMatiereAuto(){
  const query=$("autoSearch") ? $("autoSearch").value.trim().toLowerCase() : "";
  const results=MATIERE_AUTO.filter(item=>{
    if(!query) return true;
    return [item.titre,item.cat,item.desc].join(" ").toLowerCase().includes(query);
  });
  const list=$("autoList");
  if(!list) return;
  list.classList.remove("fade-list");
  void list.offsetWidth;
  list.classList.add("fade-list");

  list.innerHTML=results.length ? results.map(item=>`
    <div class="rule-card">
      <div class="info-header"><span class="badge" style="background:var(--blue)">${escapeHTML(item.cat)}</span></div>
      <b>${escapeHTML(item.titre)}</b>
      <p>${item.desc}</p>
    </div>
  `).join("") : `<div class="empty">Aucune notion ne correspond Ã  cette recherche.</div>`;
}

function renderPiegesRoutes(){
  const query=$("piegeSearch") ? $("piegeSearch").value.trim().toLowerCase() : "";
  const results=PIEGES_ROUTES.filter(item=>{
    if(!query) return true;
    return [item.titre,item.cat,item.desc].join(" ").toLowerCase().includes(query);
  });
  const list=$("piegeList");
  if(!list) return;
  list.classList.remove("fade-list");
  void list.offsetWidth;
  list.classList.add("fade-list");

  list.innerHTML=results.length ? results.map(item=>`
    <div class="rule-card">
      <div class="info-header"><span class="badge" style="background:var(--red)">${escapeHTML(item.cat)}</span></div>
      <b>${escapeHTML(item.titre)}</b>
      <p>${item.desc}</p>
    </div>
  `).join("") : `<div class="empty">Aucun piÃ¨ge ne correspond Ã  cette recherche.</div>`;
}

function renderUsagersManoeuvres(){
  const query=$("usagerSearch") ? $("usagerSearch").value.trim().toLowerCase() : "";
  const results=USAGERS_MANOEUVRES.filter(item=>{
    if(!query) return true;
    return [item.titre,item.cat,item.desc].join(" ").toLowerCase().includes(query);
  });
  const list=$("usagerList");
  if(!list) return;
  list.classList.remove("fade-list");
  void list.offsetWidth;
  list.classList.add("fade-list");

  list.innerHTML=results.length ? results.map(item=>`
    <div class="rule-card">
      <div class="info-header"><span class="badge" style="background:var(--teal)">${escapeHTML(item.cat)}</span></div>
      <b>${escapeHTML(item.titre)}</b>
      <p>${item.desc}</p>
    </div>
  `).join("") : `<div class="empty">Aucun Ã©lÃ©ment ne correspond Ã  cette recherche.</div>`;
}

document.addEventListener("keydown",event=>{
  if($("quizRunning") && $("quizRunning").classList.contains("hidden")) return;
  if(event.key>="1" && event.key<="4" && !state.answered){ answerQuestion(Number(event.key)-1); }
  if(event.key==="Enter" && state.answered){ nextQuestion(); }
  if(event.key.toLowerCase()==="f"){ toggleFavorite(); }
  if(event.key==="Escape"){ goHome(); }
});

if($("questionCount")){
  $("questionCount").addEventListener("input",event=>{
    state.questionCount=Number(event.target.value);
    if($("questionCountValue")) $("questionCountValue").textContent=state.questionCount;
  });
}

Object.assign(window, {
  goHome,
  showQuiz,
  startOfficialExam,
  showRepo,
  showInfractions,
  showRules,
  showMatiereAuto,
  showPiegesRoutes,
  showUsagersManoeuvres,
  renderMatiereAuto,
  renderPiegesRoutes,
  renderUsagersManoeuvres,
  toggleTheme,
  startReview,
  startQuiz,
  configureQuiz,
  replayQuiz,
  reviewErrors,
  toggleFavorite,
  answerQuestion,
  nextQuestion,
  renderRepository,
  renderInfractions,
  renderRules
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
