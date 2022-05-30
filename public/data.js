// Variables Element
var CRYO = "Cryo";
var PYRO = "Pyro";
var ELECTRO = "Electro";
var ANEMO = "Anemo";
var HYDRO = "Hydro";
var GEO = "Geo";
var PHYSIC = "Physique";
var SOIN = "Soin";
// Weapon Type
var Sword = "Sword";
var Claymore = "Claymore";
var Polearms = "Polearms";
var Catalyst = "Catalyst";
var Bow = "Bow";

window.Association = {
    "PV": "PV",
    "PV Max": "PV",
    "PV %": "PV",
    "Attaque" : "ATK",
    "ATK": "ATK",
    "ATK %": "ATK",
    "Défense" : "DEF",
    "DEF": "DEF",
    "DEF %": "DEF",
    "Maitrise Elémentaire" : "EM",
    "Maitrise": "EM",
    "Recharge d'énergie" : "RE",
    "Recharge": "RE",
    "Taux CRIT" : "TC",
    "Taux Crit":"TC",
    "Dégat Crit":"DC",
    "Dégat CRIT" : "DC",
    "Bonus Soin" : "SOIN",
    "Soin" : "SOIN",
    "Bonus" : "BONUS",
    "Cryo":"BONUS",
    "Hydro":"BONUS",
    "Electro":"BONUS",
    "Anemo":"BONUS",
    "Pyro":"BONUS",
    "Geo":"BONUS",
    "Physic":"BONUS"
}

// List Character (Type and Weapon)
window.CharaList = {
    "Aether" : {
        Type : ANEMO,
        Arme : Sword
    },
    "Albedo" : {
        Type : GEO,
        Arme : Sword
    },
    "Aloy" : {
        Type : CRYO,
        Arme : Bow
    },
    "Amber" : {
        Type : PYRO,
        Arme : Bow
    },
    "Arataki Itto" : {
        Type : GEO,
        Arme : Claymore
    },
    "Ayaka" : {
        Type : CRYO,
        Arme : Sword
    },
    "Ayato" : {
        Type : HYDRO,
        Arme : Sword
    },
    "Barbara" : {
        Type : HYDRO,
        Arme : Catalyst
    },
    "Beidou" : {
        Type : ELECTRO,
        Arme : Claymore
    },
    "Bennett" : {
        Type : PYRO,
        Arme : Sword
    },
    "Chongyun" : {
        Type : CRYO,
        Arme : Claymore
    },
    "Diluc" : {
        Type : PYRO,
        Arme : Claymore
    },
    "Diona" : {
        Type : CRYO,
        Arme : Bow
    },
    "Eula" : {
        Type : CRYO,
        Arme : Claymore
    },
    "Fischl" : {
        Type : ELECTRO,
        Arme : Bow
    },
    "Ganyu" : {
        Type : CRYO,
        Arme : Bow
    },
    "Gorou" : {
        Type : GEO,
        Arme : Bow
    },
    "Hu Tao" : {
        Type : PYRO,
        Arme : Polearms
    },
    "Jean" : {
        Type : ANEMO,
        Arme : Sword
    },
    "Kaeya" : {
        Type : CRYO,
        Arme : Sword
    },
    "Kazuha" : {
        Type : ANEMO,
        Arme : Sword
    },
    "Keqing" : {
        Type : ELECTRO,
        Arme : Sword
    },
    "Klee" : {
        Type : PYRO,
        Arme : Catalyst
    },
    "Kokomi" : {
        Type : HYDRO,
        Arme : Catalyst
    },
    "Lisa" : {
        Type : ELECTRO,
        Arme : Catalyst
    },
    "Lumine" : {
        Type : ANEMO,
        Arme : Sword
    },
    "Mona" : {
        Type : HYDRO,
        Arme : Catalyst
    },
    "Ningguang" : {
        Type : GEO,
        Arme : Catalyst
    },
    "Noelle" : {
        Type : GEO,
        Arme : Claymore
    },
    "Qiqi" : {
        Type : CRYO,
        Arme : Sword
    },
    "Raiden" : {
        Type : ELECTRO,
        Arme : Polearms
    },
    "Razor" : {
        Type : ELECTRO,
        Arme : Claymore
    },
    "Rosalia" : {
        Type : CRYO,
        Arme : Polearms
    },
    "Sara" : {
        Type : ELECTRO,
        Arme : Bow
    },
    "Sayu" : {
        Type : ANEMO,
        Arme : Claymore
    },
    "Shenhe" : {
        Type : CRYO,
        Arme : Polearms
    },
    "Sucrose" : {
        Type : ANEMO,
        Arme : Catalyst
    },
    "Tartaglia" : {
        Type : HYDRO,
        Arme : Bow
    },
    "Thoma" : {
        Type : PYRO,
        Arme : Polearms
    },
    "Venti" : {
        Type : ANEMO,
        Arme : Bow
    },
    "Xiangling" : {
        Type : PYRO,
        Arme : Polearms
    },
    "Xiao" : {
        Type : ANEMO,
        Arme : Polearms
    },
    "Xingqiu" : {
        Type : HYDRO,
        Arme : Sword
    },
    "Xinyan" : {
        Type : PYRO,
        Arme : Claymore
    },
    "Yae Miko" : {
        Type : ELECTRO,
        Arme : Catalyst
    },
    "Yanfei" : {
        Type : PYRO,
        Arme : Catalyst
    },
    "Yoimiya" : {
        Type : PYRO,
        Arme : Bow
    },
    "Yun Jin" : {
        Type : GEO,
        Arme : Polearms
    },
    "Zhongli" : {
        Type : GEO,
        Arme : Polearms
    }
}
// Liste des Artefacts + Effets
window.ArteList = {
    "Au-delà cinabrin" : {
        2 : "+18% ATK",
        4 : "+48% ATK"
    },
    "Échos d'une offrande" : {
        2 : "+18% ATK",
        4 : "+70% ATK Normale"
    },
    "Coquille des rêves opulents" : {
        2 : "+30% DEF",
        4 : "+24% DEF et GEO"
    },
    "Palourde aux teintes océaniques" : {
        2 : "+15% SOIN",
        4 : "ATK de 90% des soins effectués"
    },
    "Emblème du destin brisé" : {
        2 : "+20% ER",
        4 : "Déchainement augmenté de 25% de ER"
    },
    "Réminiscence nostalgique" : {
        2 : "+18% ATK",
        4 : "+50% ATK Plongeante et chargée"
    },
    "Ténacité du Millelithe" : {
        2 : "+20% PV",
        4 : "+20% ATK et +30% Bouclier"
    },
    "Flamme Blême" : {
        2 : "+25% Physique",
        4 : "+18% ATK et +100% Physique"
    },
    "Briseur de glace" : {
        2 : "+15% Cryo",
        4 : "+20/40% TC"
    },
    "Ame des profondeurs" : {
        2 : "+15% Hydro",
        4 : "+30% ATK Normale et chargée"
    },
    "Météore inversé" : {
        2 : "+35% Bouclier",
        4 : "+40% ATK sous Bouclier"
    },
    "Roche ancienne" : {
        2 : "+15% Geo",
        4 : "+35% Degat élementaire"
    },
    "Ancien rituel royal" : {
        2 : "+20% Déchainement",
        4 : "+20% ATK"
    },
    "Chevalerie ensanglantée" : {
        2 : "+25% Physique",
        4 : "+50% Dégats"
    },
    "Sage de la traverse de feu" : {
        2 : "+40% RES Pyro",
        4 : "+35% ATK sur Pyro/Brulure"
    },
    "Sorcière des flammes ardentes" : {
        2 : "+15% Pyro",
        4 : "+40% Surcharge/Brulure et 15% Fonte/Evap"
    },
    "Dompteur de foudre" : {
        2 : "+40% RES Electro",
        4 : "+35% Degat sur Electro"
    },
    "Colère de tonnerre" : {
        2 : "+15% Electro",
        4 : "+40% Surcharge/Électrocution/Supraconduction "
    },
    "Ombre de la Verte Chasseuse" : {
        2 : "+15% Anemo",
        4 : "+60% Disperssion et -40% RES Elem énemies"
    },
    "Amour chéri" : {
        2 : "+15% Soin",
        4 : "+20% Soin"
    },
    "Bande Vagabonde" : {
        2 : "+80pts EM",
        4 : "+35% ATK Chargées Arc"
    },
    "Rideau du gladiateur" : {
        2 : "+18% ATK",
        4 : "+35% ATK Normales Épée et lance."
    },
}
// Liste Main stats Artefacts
window.MainStatList = {
    DC :  "DGT CRIT",
    TC :  "Taux CRIT",
    ATK :  "ATK %",
    ATKF :  "ATK",
    PV :  "PV %",
    PVF :  "PV",
    EM :  "Maitrise Elementaire",
    ER :  "Recharge Énergie",
    DEF :  "Défense %",
    DEFF :  "Défense",
    CRYO :  "Cryo",
    PYRO :  "Pyro",
    ELECTRO :  "Electro",
    ANEMO :  "Anemo",
    HYDRO :  "Hydro",
    GEO :  "Geo",
    PHYSIC :  "Physique",
    SOIN :  "Soin",
}
// Liste SubStats
window.SubStatList = {
    DC :  "DC",
    TC :  "TC",
    ATK : "ATK",
    PV :  "PV",
    EM :  "EM",
    ER :  "RE",
    DEF : "DEF",
}
// Constellation List
window.ConstallationList = {
    0 : "C0",
    1 : "C1",
    2 : "C2",
    3 : "C3",
    4 : "C4",
    5 : "C5",
    6 : "C6",
}
// Refine List
window.RefineList = {
    1 : "R1",
    2 : "R2",
    3 : "R3",
    4 : "R4",
    5 : "R5",
}
// Star List
window.StarList = {
    // 1 : "★",
    // 2 : "★★",
    3 : "★★★",
    4 : "★★★★",
    5 : "★★★★★",
}
// Aptitude List
window.AptitudeList = [...Array(13+1).keys()].slice(1);
// Plume List
window.PlumeStats = {
    ATK :  "ATK",
}
// Fleur Liste
window.FleurStats = {
    PV :  "PV",
}
// Sablier Liste
window.SablierStats = {
    ATK :"ATK %",
    PV :"PV %",
    DEF :"DEF %",
    EM :"Maitrise",
    ER : "Recharge"
}   
// Coupe Liste
window.CoupeStats = {
    ATK :"ATK %",
    PV :"PV %",
    DEF :"DEF %",
    Cryo :"Cryo",
    Electro :"Electro",
    Anemo :"Anemo",
    Pyro :"Pyro",
    Geo :"Geo",
    Hydro :"Hydro",
    Physic : "Physic",
    EM :"Maitrise",
}
// Casque Liste
window.CasqueStats = {
    ATK :"ATK %",
    PV :"PV %",
    DEF :"DEF %",
    Soin : "Soin",
    Crit : "Taux Crit",
    Degat : "Dégat Crit"
}

// Liste Build Type
window.BuildList = {
    CRYO :  "Cryo",
    PYRO :  "Pyro",
    ELECTRO :  "Electro",
    ANEMO :  "Anemo",
    HYDRO :  "Hydro",
    GEO :  "Geo",
    PHYSIC :  "Physique",
}

// List of Elevation Step
window.ElevationList = [20,40,50,60,70,80]

// List of level Character/Weapon ( tableau de 1 à 90)
window.LevelList = [...Array(90+1).keys()].slice(1); //[...Array(90).keys()].map(x => ++x)

// List of level Artefacts (Tableau de 1 à 20)
window.LevelArteList = [...Array(20+1).keys()].slice(1); //[...Array(90).keys()].map(x => ++x)

// Armes Liste et Catégorie par Rareté
window.WeaponListBis = {
    Sword : {
        // 5 Stars
        "★★★★★" :{
            "Lune ondulante de Futsu" : "TC",
            "Épée du faucon" : "Physique",
            "Lame de la Voûte d'Azur" : "ER",
            "Tranche-Sommets" : "ATK",
            "Coupeur de jade primordial" : "TC",
            "Reflet de tranche-brume" : "DC",
            "Serment de la liberté" : "EM",
        },
        "★★★★":{
            "Piqûre de fer": "EM",
            "Rugissement du lion": "ATK",
            "Épée rituelle": "ER",
            "Épée longue royale": "ATK",
            "Épée longue de Rochenoire": "DC",
            "Épée de Favonius": "ER",
            "Épée noire": "TC",
            "La flûte": "ATK",
            "Epée de la descente": "ATK",
            "Croc Suppurant": "ER",
            "Eclair des impasses": "EM",
            "Lame kageuchi d'Amenoma": "ATK",
            "Tailleur de pierre": "Physique",
            "Fuseau de cinabre": "DEF",
        },
        "★★★":{
            "Épée Céleste" : "ER",
            "Épée en fer noir" : "EM",
            "Messager de l'Aube" : "DC",
            "Lame froide" : "ATK",
            "Épée du voyageur" : "DEF",
            "Couteau à filets" : "ATK",
        }
       
    },    
    Bow : {
        "★★★★★" :{
            "Arc d'Amos" : "ATK",
            "Ailes de la Voûte d'Azur" : "TC",
            "Ultime soupir" : "ER",
            "Pulsation du tonnerre" : "DC",
            "Étoile polaire" : "TC",
        },
        "★★★★":{
            "Arc de chasse de Favonius" : "ER",
            "Lune paisible" : "ATK",
            "Arc à poulies" : "Physique",
            "Arc rituel" : "ER",
            "Arc rouillé" : "ATK",
            "Arc de guerre de Rochenoire" : "DC",
            "Arc royal" : "ATK",
            "Arc de chasse verdoyant" : "TC",
            "Dernière corde" : "EM",
            "Ode aux alizées" : "EM",
            "Traqueur des impasses" : "ATK",
            "Arc d'exorcisme" : "ATK",
            "Valse nocturne" : "Physique",
            "Lune de Mouun" : "ATK",
            "Predator" : "ATK",
        },
        "★★★":{
            "Messager" : "DC",
            "Lance-pierres" : "TC",
            "Arc courbé" : "PV",
            "Serment de l'archer" : "DC",
            "Arc du corbeau" : "EM",
        }       
    },    
    Claymore : {
        "★★★★★" :{
            "Brise-pierre de corne rouge" : "DC",
            "Fierté de la Voûte d'Azur" : "ER",
            "Mort-du-loup" : "ATK",
            "Lame brute" : "ATK",
            "Ode au chant du vent" : "Physique",
        },
        "★★★★":{
            "Espadon" : "ATK", 
            "Espadon de Favonius" : "ER",
            "Ossature du dragon" : "TC",
            "Fluorescence" : "EM", 
            "Trancheuse de Rochenoire" : "DC",
            "Épée-horloge" : "PV", 
            "Espadon royal" : "ATK",
            "Ombre immaculée" : "DEF",
            "Espadon rituel" : "ER", 
            "Tombe-neige en argétoile" : "Physique",
            "Épée antique des Millelithes" : "ATK", 
            "Espadon de Nagamasa" : "ER",
            "Akuoumaru" : "ATK",
            "Illustre seigneur des mers" : "ATK", 
        },
        "★★★":{
            "Grande épée en fer blanc" : "DEF",
            "Épée de la raison" : "ATK",
            "Épée sanglante" : "EM",
            "Grande épée céleste" : "Physique",
            "Ombre ferreuse" : "PV",
        }       
    },    
    Polearms : {
        "★★★★★" :{
            "Perceur Prismatique": "ATK",
            "Lance de jade ailée": "TC",
            "Berge de la Voûte d'Azur": "ER",
            "Bâton de Homa": "DC",
            "Lumière du faucheur": "ER",
            "Étouffeur de calamités": "ATK", 
        },
        "★★★★":{
            "Fléau du dragon" : "EM",
            "Lance de Rochenoire" : "DC",
            "Pique du croissant de lune" : "Physique",
            "Scion de la victoire" : "TC",
            "Guisarme stellaire" : "ER",
            "Lance des millelithes" : "ATK",
            "Lance de Favonius" : "ER",
            "Aileron de brise-vagues" : "ATK",
            "Lance Dosdragon" : "Physique",
            "Lance de chasse royale" : "ATK",
            "Lance en croix de Kitain" : "EM",
            "La prise" : "ER",
        },
        "★★★":{
            "Pampille noire": "PV",
            "Hallebarde": "ATK",
            "Pampille blanche": "TC",
        }       
    },    
    Catalyst : {
        "★★★★★" : {
            "L'origine des Quatre Vents" : "TC",
            "Atlas de la Voûte d'Azur" : "ATK",
            "Chaînes mortelles" : "ATK",
            "Lueur de la lune éternelle" : "PV",
            "Vérité de Kagura" : "DC",
        },
        "★★★★":{
            "Amulette de Rochenoire" : "DC",
            "Atlas des terres et des mers" : "EM",
            "Mémoires de rituels" : "EM",
            "Grimoire royal" : "ATK",
            "Malice" : "PV",
            "Codex de Favonius" : "ER",
            "Perle solaire" : "TC",
            "Mouvement vagabond" : "DC",
            "Oeil de la perception" : "ATK",
            "Fruit du permafrost" : "ATK",
            "Vins et chants" : "ER",
            "Anneau des Hakushin" : "ER",
            "Contes de Dodoco" : "ATK",
            "Oeil d'assermentation" : "ATK",
        },
        "★★★":{
            "Néphrite jumelle": "TC",
            "Orbe Jadien": "EM",
            "Conte d'un autre monde": "ER",
            "Histoire des chasseurs de dragon": "PV",
            "Guide de magie": "EM",
        }
    },
}

// Positions des éléments sur la bannière
window.Positions = {
    "Arme - Personnage - Stats" : [1,2,3],
    "Arme - Stats - Personnage" : [1,3,2],
    "Personnage - Arme - Stats" : [2,1,3],
    "Personnage - Stats - Arme" : [3,1,2],
    "Stats - Personnage - Arme" : [3,2,1],
    "Stats - Arme - Personnage" : [2,3,1],
}

// Personnage par défaut
window.Chara = {
	"Nom": "Keqing",
    "CustomImage" : "",
    "Position" : [1,2,3],
    "Message" : "",
	"Niveau": "90",
	"Affinite": "8",
	"Constellation": "C1",
    "Build" : "Electro",
	"Arme": {
		// "Type": "Sword",
		"Star": "★★★★",
		"Modele": "Épée noire",
		"BaseAtk": "510",
		"Niveau": "90",
		"Rafinement": "R5",
		"SubStat": "27.6",
	},
	"Statistique": {
		"PV Max": "19002",
		"Attaque": "1910",
		"Défense": "1035",
		"Maitrise Elémentaire": "42",
		"Recharge d'énergie": "110.4",
		"Taux CRIT": "42.3",
		"Dégat CRIT": "228.3",
		"Bonus Soin": "0.0",
		"Bonus": "61.6"
	},
	"Aptitude": {
		"NORMAL": "10",
		"SKILL": "10",
		"BURST": "10"
	},
	"Arte": {
		"Fleur": {
			"Set": "Au-delà cinabrin",
			"Level": "20",
			"Star": "★★★★★",
			"Main": ["PV", "4780"],
			"Sub": {
				"1": ["ATK", "31"],
				"2": ["DC", "14.8"],
				"3": ["TC", "6.2"],
				"4": ["ATK", "9.9"]
			}
		},
		"Plume": {
			"Set": "Colère de tonnerre",
			"Level": "20",
			"Star": "★★★★★",
			"Main": ["ATK", "311"],
			"Sub": {
				"1": ["DC", "17.9"],
				"2": ["TC", "3.5"],
				"3": ["DEF", "35"],
				"4": ["PV", "508"]
			}
		},
		"Sablier": {
			"Set": "Dompteur de foudre",
			"Level": "20",
			"Star": "★★★★★",
			"Main": ["ATK %", "46.6"],
			"Sub": {
				"1": ["EM", "42"],
				"2": ["DEF", "42"],
				"3": ["DC", "25.6"],
				"4": ["PV", "4.7"]
			}
		},
		"Coupe": {
			"Set": "Colère de tonnerre",
			"Level": "20",
			"Star": "★★★★★",
			"Main": ["Electro", "46.6"],
			"Sub": {
				"1": ["DC", "19.9"],
				"2": ["RE", "4.5"],
				"3": ["ATK", "43"],
				"4": ["ATK", "4.1"]
			}
		},
		"Casque": {
			"Set": "Au-delà cinabrin",
			"Level": "20",
			"Star": "★★★★★",
			"Main": ["Dégat Crit", "62.2"],
			"Sub": {
				"1": ["RE", "5.8"],
				"2": ["DEF", "72"],
				"3": ["ATK", "4.7"],
				"4": ["DEF", "10.9"]
			}
		}
	}
}