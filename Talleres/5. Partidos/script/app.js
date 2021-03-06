
// Variable Global
var app = angular.module("aplicacion", []);

app.controller("ejemploCtrl", function($scope) {
    var data = [{
    "venue": "Kazan",
    "location": "Kazan Arena",
    "status": "completed",
    "time": "full-time",
    "fifa_id": "300331532",
    "weather": {
        "humidity": "40",
        "temp_celsius": "28",
        "temp_farenheit": "60",
        "wind_speed": "18",
        "description": "Sunny"
    },
    "attendance": "41835",
    "officials": ["Mark GEIGER", "Joe FLETCHER", "Frank ANDERSON", "Julio BASCUNAN", "Danny MAKKELIE", "Corey ROCKWELL", "Tiago MARTINS", "Artur DIAS", "Christian SCHIEMANN"],
    "stage_name": "First stage",
    "home_team_country": "Korea Republic",
    "away_team_country": "Germany",
    "datetime": "2018-06-27T14:00:00Z",
    "winner": "Korea Republic",
    "winner_code": "KOR",
    "home_team": {
        "country": "Korea Republic",
        "code": "KR",
        "goals": 2,
        "penalties": 0
    },
    "away_team": {
        "country": "Germany",
        "code": "DE",
        "goals": 0,
        "penalties": 0
    },
    "home_team_events": [{
        "id": 739,
        "type_of_event": "yellow-card",
        "player": "JUNG Wooyoung",
        "time": "9'"
    }, {
        "id": 740,
        "type_of_event": "yellow-card",
        "player": "LEE Jaesung",
        "time": "23'"
    }, {
        "id": 742,
        "type_of_event": "yellow-card",
        "player": "MOON Seonmin",
        "time": "48'"
    }, {
        "id": 744,
        "type_of_event": "substitution-out",
        "player": "KOO Jacheol",
        "time": "56'"
    }, {
        "id": 745,
        "type_of_event": "substitution-in",
        "player": "HWANG Heechan",
        "time": "56'"
    }, {
        "id": 756,
        "type_of_event": "yellow-card",
        "player": "SON Heungmin",
        "time": "65'"
    }, {
        "id": 759,
        "type_of_event": "substitution-out",
        "player": "MOON Seonmin",
        "time": "69'"
    }, {
        "id": 760,
        "type_of_event": "substitution-in",
        "player": "JU Sejong",
        "time": "69'"
    }, {
        "id": 766,
        "type_of_event": "substitution-out",
        "player": "HWANG Heechan",
        "time": "79'"
    }, {
        "id": 767,
        "type_of_event": "substitution-in",
        "player": "GO Yohan",
        "time": "79'"
    }, {
        "id": 774,
        "type_of_event": "goal",
        "player": "KIM Younggwon",
        "time": "90'+3'"
    }, {
        "id": 775,
        "type_of_event": "goal",
        "player": "SON Heungmin",
        "time": "90'+6'"
    }],
    "away_team_events": [{
        "id": 748,
        "type_of_event": "substitution-out",
        "player": "Sami KHEDIRA",
        "time": "58'"
    }, {
        "id": 749,
        "type_of_event": "substitution-in",
        "player": "Mario GOMEZ",
        "time": "58'"
    }, {
        "id": 752,
        "type_of_event": "substitution-out",
        "player": "Leon GORETZKA",
        "time": "63'"
    }, {
        "id": 753,
        "type_of_event": "substitution-in",
        "player": "Thomas MUELLER",
        "time": "63'"
    }, {
        "id": 764,
        "type_of_event": "substitution-out",
        "player": "Jonas HECTOR",
        "time": "78'"
    }, {
        "id": 765,
        "type_of_event": "substitution-in",
        "player": "Julian BRANDT",
        "time": "78'"
    }],
    "home_team_statistics": {
        "country": "Korea Republic",
        "attempts_on_goal": 11,
        "on_target": 5,
        "off_target": 5,
        "blocked": 1,
        "woodwork": 0,
        "corners": 3,
        "offsides": 0,
        "ball_possession": 32,
        "pass_accuracy": 71,
        "num_passes": 252,
        "passes_completed": 180,
        "distance_covered": 117,
        "balls_recovered": 40,
        "tackles": 10,
        "clearances": 39,
        "yellow_cards": 4,
        "red_cards": 0,
        "fouls_committed": 16,
        "tactics": "4-4-2",
        "starting_eleven": [{
            "name": "JO Hyeonwoo",
            "captain": false,
            "shirt_number": 23,
            "position": "Goalie"
        }, {
            "name": "LEE Yong",
            "captain": false,
            "shirt_number": 2,
            "position": "Defender"
        }, {
            "name": "YUN Youngsun",
            "captain": false,
            "shirt_number": 5,
            "position": "Defender"
        }, {
            "name": "SON Heungmin",
            "captain": true,
            "shirt_number": 7,
            "position": "Forward"
        }, {
            "name": "KOO Jacheol",
            "captain": false,
            "shirt_number": 13,
            "position": "Midfield"
        }, {
            "name": "HONG Chul",
            "captain": false,
            "shirt_number": 14,
            "position": "Defender"
        }, {
            "name": "JUNG Wooyoung",
            "captain": false,
            "shirt_number": 15,
            "position": "Midfield"
        }, {
            "name": "LEE Jaesung",
            "captain": false,
            "shirt_number": 17,
            "position": "Midfield"
        }, {
            "name": "MOON Seonmin",
            "captain": false,
            "shirt_number": 18,
            "position": "Midfield"
        }, {
            "name": "KIM Younggwon",
            "captain": false,
            "shirt_number": 19,
            "position": "Defender"
        }, {
            "name": "JANG Hyunsoo",
            "captain": false,
            "shirt_number": 20,
            "position": "Defender"
        }],
        "substitutes": [{
            "name": "KIM Seunggyu",
            "captain": false,
            "shirt_number": 1,
            "position": "Goalie"
        }, {
            "name": "JUNG Seunghyun",
            "captain": false,
            "shirt_number": 3,
            "position": "Defender"
        }, {
            "name": "OH Bansuk",
            "captain": false,
            "shirt_number": 4,
            "position": "Defender"
        }, {
            "name": "PARK Jooho",
            "captain": false,
            "shirt_number": 6,
            "position": "Defender"
        }, {
            "name": "JU Sejong",
            "captain": false,
            "shirt_number": 8,
            "position": "Midfield"
        }, {
            "name": "KIM Shinwook",
            "captain": false,
            "shirt_number": 9,
            "position": "Forward"
        }, {
            "name": "LEE Seungwoo",
            "captain": false,
            "shirt_number": 10,
            "position": "Midfield"
        }, {
            "name": "HWANG Heechan",
            "captain": false,
            "shirt_number": 11,
            "position": "Forward"
        }, {
            "name": "KIM Minwoo",
            "captain": false,
            "shirt_number": 12,
            "position": "Defender"
        }, {
            "name": "KI Sungyueng",
            "captain": false,
            "shirt_number": 16,
            "position": "Midfield"
        }, {
            "name": "KIM Jinhyeon",
            "captain": false,
            "shirt_number": 21,
            "position": "Goalie"
        }, {
            "name": "GO Yohan",
            "captain": false,
            "shirt_number": 22,
            "position": "Defender"
        }]
    },
    "away_team_statistics": {
        "country": "Germany",
        "attempts_on_goal": 26,
        "on_target": 6,
        "off_target": 11,
        "blocked": 9,
        "woodwork": 0,
        "corners": 8,
        "offsides": 1,
        "ball_possession": 68,
        "pass_accuracy": 87,
        "num_passes": 715,
        "passes_completed": 622,
        "distance_covered": 114,
        "balls_recovered": 38,
        "tackles": 9,
        "clearances": 10,
        "yellow_cards": 0,
        "red_cards": 0,
        "fouls_committed": 7,
        "tactics": "4-2-3-1",
        "starting_eleven": [{
            "name": "Manuel NEUER",
            "captain": true,
            "shirt_number": 1,
            "position": "Goalie"
        }, {
            "name": "Jonas HECTOR",
            "captain": false,
            "shirt_number": 3,
            "position": "Defender"
        }, {
            "name": "Mats HUMMELS",
            "captain": false,
            "shirt_number": 5,
            "position": "Defender"
        }, {
            "name": "Sami KHEDIRA",
            "captain": false,
            "shirt_number": 6,
            "position": "Midfield"
        }, {
            "name": "Toni KROOS",
            "captain": false,
            "shirt_number": 8,
            "position": "Midfield"
        }, {
            "name": "Timo WERNER",
            "captain": false,
            "shirt_number": 9,
            "position": "Forward"
        }, {
            "name": "Mesut OEZIL",
            "captain": false,
            "shirt_number": 10,
            "position": "Midfield"
        }, {
            "name": "Marco REUS",
            "captain": false,
            "shirt_number": 11,
            "position": "Forward"
        }, {
            "name": "Leon GORETZKA",
            "captain": false,
            "shirt_number": 14,
            "position": "Midfield"
        }, {
            "name": "Niklas SUELE",
            "captain": false,
            "shirt_number": 15,
            "position": "Defender"
        }, {
            "name": "Joshua KIMMICH",
            "captain": false,
            "shirt_number": 18,
            "position": "Defender"
        }],
        "substitutes": [{
            "name": "Marvin PLATTENHARDT",
            "captain": false,
            "shirt_number": 2,
            "position": "Defender"
        }, {
            "name": "Matthias GINTER",
            "captain": false,
            "shirt_number": 4,
            "position": "Defender"
        }, {
            "name": "Julian DRAXLER",
            "captain": false,
            "shirt_number": 7,
            "position": "Midfield"
        }, {
            "name": "Kevin TRAPP",
            "captain": false,
            "shirt_number": 12,
            "position": "Goalie"
        }, {
            "name": "Thomas MUELLER",
            "captain": false,
            "shirt_number": 13,
            "position": "Midfield"
        }, {
            "name": "Antonio RUEDIGER",
            "captain": false,
            "shirt_number": 16,
            "position": "Defender"
        }, {
            "name": "Sebastian RUDY",
            "captain": false,
            "shirt_number": 19,
            "position": "Midfield"
        }, {
            "name": "Julian BRANDT",
            "captain": false,
            "shirt_number": 20,
            "position": "Midfield"
        }, {
            "name": "Ilkay GUENDOGAN",
            "captain": false,
            "shirt_number": 21,
            "position": "Midfield"
        }, {
            "name": "Marc-Andre TER STEGEN",
            "captain": false,
            "shirt_number": 22,
            "position": "Goalie"
        }, {
            "name": "Mario GOMEZ",
            "captain": false,
            "shirt_number": 23,
            "position": "Forward"
        }, {
            "name": "Jerome BOATENG",
            "captain": false,
            "shirt_number": 17,
            "position": "Defender"
        }]
    },
    "last_event_update_at": "2018-06-27T15:58:47Z",
    "last_score_update_at": "2018-06-27T15:58:47Z"
}, {
    "venue": "Ekaterinburg",
    "location": "Ekaterinburg Arena",
    "status": "completed",
    "time": "full-time",
    "fifa_id": "300331548",
    "weather": {
        "humidity": "42",
        "temp_celsius": "27",
        "temp_farenheit": "59",
        "wind_speed": "18",
        "description": "Sunny"
    },
    "attendance": "33061",
    "officials": ["Nestor PITANA", "Hernan MAIDANA", "Juan Pablo BELATTI", "Andres CUNHA", "Mauro VIGLIANO", "Carlos ASTROZA", "Gery VARGAS", "Wilton SAMPAIO", "Mauricio ESPINOSA"],
    "stage_name": "First stage",
    "home_team_country": "Mexico",
    "away_team_country": "Sweden",
    "datetime": "2018-06-27T14:00:00Z",
    "winner": "Sweden",
    "winner_code": "SWE",
    "home_team": {
        "country": "Mexico",
        "code": "MX",
        "goals": 0,
        "penalties": 0
    },
    "away_team": {
        "country": "Sweden",
        "code": "SE",
        "goals": 3,
        "penalties": 0
    },
    "home_team_events": [{
        "id": 738,
        "type_of_event": "yellow-card",
        "player": "Jesus GALLARDO",
        "time": "1'"
    }, {
        "id": 750,
        "type_of_event": "yellow-card",
        "player": "Hector MORENO",
        "time": "61'"
    }, {
        "id": 754,
        "type_of_event": "substitution-out",
        "player": "Jesus GALLARDO",
        "time": "65'"
    }, {
        "id": 755,
        "type_of_event": "substitution-in",
        "player": "Marco FABIAN",
        "time": "65'"
    }, {
        "id": 761,
        "type_of_event": "goal-own",
        "player": "Edson ALVAREZ",
        "time": "74'"
    }, {
        "id": 762,
        "type_of_event": "substitution-out",
        "player": "Andres GUARDADO",
        "time": "75'"
    }, {
        "id": 763,
        "type_of_event": "substitution-in",
        "player": "Jesus CORONA",
        "time": "75'"
    }, {
        "id": 770,
        "type_of_event": "yellow-card",
        "player": "Miguel LAYUN",
        "time": "86'"
    }, {
        "id": 772,
        "type_of_event": "substitution-out",
        "player": "Miguel LAYUN",
        "time": "89'"
    }, {
        "id": 773,
        "type_of_event": "substitution-in",
        "player": "Oribe PERALTA",
        "time": "89'"
    }],
    "away_team_events": [{
        "id": 741,
        "type_of_event": "yellow-card",
        "player": "Sebastian LARSSON",
        "time": "26'"
    }, {
        "id": 743,
        "type_of_event": "goal",
        "player": "Ludwig AUGUSTINSSON",
        "time": "50'"
    }, {
        "id": 746,
        "type_of_event": "substitution-out",
        "player": "Sebastian LARSSON",
        "time": "57'"
    }, {
        "id": 747,
        "type_of_event": "substitution-in",
        "player": "Gustav SVENSSON",
        "time": "57'"
    }, {
        "id": 751,
        "type_of_event": "goal-penalty",
        "player": "Andreas GRANQVIST",
        "time": "62'"
    }, {
        "id": 757,
        "type_of_event": "substitution-out",
        "player": "Marcus BERG",
        "time": "68'"
    }, {
        "id": 758,
        "type_of_event": "substitution-in",
        "player": "Isaac Kiese THELIN",
        "time": "68'"
    }, {
        "id": 768,
        "type_of_event": "substitution-out",
        "player": "Albin EKDAL",
        "time": "80'"
    }, {
        "id": 769,
        "type_of_event": "substitution-in",
        "player": "Oscar HILJEMARK",
        "time": "80'"
    }, {
        "id": 771,
        "type_of_event": "yellow-card",
        "player": "Mikael LUSTIG",
        "time": "88'"
    }],
    "home_team_statistics": {
        "country": "Mexico",
        "attempts_on_goal": 19,
        "on_target": 3,
        "off_target": 8,
        "blocked": 8,
        "woodwork": 0,
        "corners": 7,
        "offsides": 2,
        "ball_possession": 66,
        "pass_accuracy": 82,
        "num_passes": 471,
        "passes_completed": 384,
        "distance_covered": 93,
        "balls_recovered": 33,
        "tackles": 7,
        "clearances": 12,
        "yellow_cards": 3,
        "red_cards": 0,
        "fouls_committed": 14,
        "tactics": "4-2-3-1",
        "starting_eleven": [{
            "name": "Guillermo OCHOA",
            "captain": false,
            "shirt_number": 13,
            "position": "Goalie"
        }, {
            "name": "Carlos SALCEDO",
            "captain": false,
            "shirt_number": 3,
            "position": "Defender"
        }, {
            "name": "Miguel LAYUN",
            "captain": false,
            "shirt_number": 7,
            "position": "Midfield"
        }, {
            "name": "Carlos VELA",
            "captain": false,
            "shirt_number": 11,
            "position": "Forward"
        }, {
            "name": "Javier HERNANDEZ",
            "captain": false,
            "shirt_number": 14,
            "position": "Forward"
        }, {
            "name": "Hector MORENO",
            "captain": false,
            "shirt_number": 15,
            "position": "Defender"
        }, {
            "name": "Hector HERRERA",
            "captain": false,
            "shirt_number": 16,
            "position": "Defender"
        }, {
            "name": "Andres GUARDADO",
            "captain": true,
            "shirt_number": 18,
            "position": "Midfield"
        }, {
            "name": "Edson ALVAREZ",
            "captain": false,
            "shirt_number": 21,
            "position": "Defender"
        }, {
            "name": "Hirving  LOZANO",
            "captain": false,
            "shirt_number": 22,
            "position": "Forward"
        }, {
            "name": "Jesus GALLARDO",
            "captain": false,
            "shirt_number": 23,
            "position": "Midfield"
        }],
        "substitutes": [{
            "name": "Jose CORONA",
            "captain": false,
            "shirt_number": 1,
            "position": "Goalie"
        }, {
            "name": "Hugo AYALA",
            "captain": false,
            "shirt_number": 2,
            "position": "Defender"
        }, {
            "name": "Rafael MARQUEZ",
            "captain": false,
            "shirt_number": 4,
            "position": "Defender"
        }, {
            "name": "Erick GUTIERREZ",
            "captain": false,
            "shirt_number": 5,
            "position": "Midfield"
        }, {
            "name": "Jonathan DOS SANTOS",
            "captain": false,
            "shirt_number": 6,
            "position": "Midfield"
        }, {
            "name": "Marco FABIAN",
            "captain": false,
            "shirt_number": 8,
            "position": "Forward"
        }, {
            "name": "Raul JIMENEZ",
            "captain": false,
            "shirt_number": 9,
            "position": "Forward"
        }, {
            "name": "Giovani DOS SANTOS",
            "captain": false,
            "shirt_number": 10,
            "position": "Midfield"
        }, {
            "name": "Alfredo TALAVERA",
            "captain": false,
            "shirt_number": 12,
            "position": "Goalie"
        }, {
            "name": "Jesus CORONA",
            "captain": false,
            "shirt_number": 17,
            "position": "Midfield"
        }, {
            "name": "Oribe PERALTA",
            "captain": false,
            "shirt_number": 19,
            "position": "Forward"
        }, {
            "name": "Javier AQUINO",
            "captain": false,
            "shirt_number": 20,
            "position": "Midfield"
        }]
    },
    "away_team_statistics": {
        "country": "Sweden",
        "attempts_on_goal": 13,
        "on_target": 5,
        "off_target": 7,
        "blocked": 1,
        "woodwork": 0,
        "corners": 3,
        "offsides": 0,
        "ball_possession": 34,
        "pass_accuracy": 66,
        "num_passes": 221,
        "passes_completed": 145,
        "distance_covered": 100,
        "balls_recovered": 45,
        "tackles": 8,
        "clearances": 29,
        "yellow_cards": 2,
        "red_cards": 0,
        "fouls_committed": 11,
        "tactics": "4-4-2",
        "starting_eleven": [{
            "name": "Robin OLSEN",
            "captain": false,
            "shirt_number": 1,
            "position": "Goalie"
        }, {
            "name": "Mikael LUSTIG",
            "captain": false,
            "shirt_number": 2,
            "position": "Defender"
        }, {
            "name": "Victor LINDELOF",
            "captain": false,
            "shirt_number": 3,
            "position": "Defender"
        }, {
            "name": "Andreas GRANQVIST",
            "captain": true,
            "shirt_number": 4,
            "position": "Defender"
        }, {
            "name": "Ludwig AUGUSTINSSON",
            "captain": false,
            "shirt_number": 6,
            "position": "Defender"
        }, {
            "name": "Sebastian LARSSON",
            "captain": false,
            "shirt_number": 7,
            "position": "Midfield"
        }, {
            "name": "Albin EKDAL",
            "captain": false,
            "shirt_number": 8,
            "position": "Midfield"
        }, {
            "name": "Marcus BERG",
            "captain": false,
            "shirt_number": 9,
            "position": "Forward"
        }, {
            "name": "Emil FORSBERG",
            "captain": false,
            "shirt_number": 10,
            "position": "Midfield"
        }, {
            "name": "Viktor CLAESSON",
            "captain": false,
            "shirt_number": 17,
            "position": "Midfield"
        }, {
            "name": "Ola TOIVONEN",
            "captain": false,
            "shirt_number": 20,
            "position": "Forward"
        }],
        "substitutes": [{
            "name": "Martin OLSSON",
            "captain": false,
            "shirt_number": 5,
            "position": "Defender"
        }, {
            "name": "John GUIDETTI",
            "captain": false,
            "shirt_number": 11,
            "position": "Forward"
        }, {
            "name": "Karl-Johan JOHNSSON",
            "captain": false,
            "shirt_number": 12,
            "position": "Goalie"
        }, {
            "name": "Gustav SVENSSON",
            "captain": false,
            "shirt_number": 13,
            "position": "Midfield"
        }, {
            "name": "Filip HELANDER",
            "captain": false,
            "shirt_number": 14,
            "position": "Defender"
        }, {
            "name": "Oscar HILJEMARK",
            "captain": false,
            "shirt_number": 15,
            "position": "Midfield"
        }, {
            "name": "Emil KRAFTH",
            "captain": false,
            "shirt_number": 16,
            "position": "Defender"
        }, {
            "name": "Pontus JANSSON",
            "captain": false,
            "shirt_number": 18,
            "position": "Defender"
        }, {
            "name": "Marcus ROHDEN",
            "captain": false,
            "shirt_number": 19,
            "position": "Midfield"
        }, {
            "name": "Jimmy DURMAZ",
            "captain": false,
            "shirt_number": 21,
            "position": "Midfield"
        }, {
            "name": "Isaac Kiese THELIN",
            "captain": false,
            "shirt_number": 22,
            "position": "Forward"
        }, {
            "name": "Kristoffer NORDFELDT",
            "captain": false,
            "shirt_number": 23,
            "position": "Goalie"
        }]
    },
    "last_event_update_at": "2018-06-27T15:53:43Z",
    "last_score_update_at": "2018-06-27T15:53:43Z"
}, {
    "venue": "Moscow",
    "location": "Spartak Stadium",
    "status": "completed",
    "time": "full-time",
    "fifa_id": "300331521",
    "weather": {
        "humidity": "42",
        "temp_celsius": "24",
        "temp_farenheit": "56",
        "wind_speed": "12",
        "description": "Partly Cloudy"
    },
    "attendance": "44190",
    "officials": ["Alireza FAGHANI", "Reza SOKHANDAN", "Mohammadreza MANSOURI", "Jair MARRUFO", "Massimiliano IRRATI", "Pawel SOKOLNICKI", "Pawel GIL", "Paolo VALERI", "Anouar HMILA"],
    "stage_name": "First stage",
    "home_team_country": "Serbia",
    "away_team_country": "Brazil",
    "datetime": "2018-06-27T18:00:00Z",
    "winner": "Brazil",
    "winner_code": "BRA",
    "home_team": {
        "country": "Serbia",
        "code": "RS",
        "goals": 0,
        "penalties": 0
    },
    "away_team": {
        "country": "Brazil",
        "code": "BR",
        "goals": 2,
        "penalties": 0
    },
    "home_team_events": [{
        "id": 781,
        "type_of_event": "yellow-card",
        "player": "Adem LJAJIC",
        "time": "33'"
    }, {
        "id": 784,
        "type_of_event": "yellow-card",
        "player": "Nemanja MATIC",
        "time": "48'"
    }, {
        "id": 793,
        "type_of_event": "yellow-card",
        "player": "Aleksandar MITROVIC",
        "time": "70'"
    }, {
        "id": 795,
        "type_of_event": "substitution-out",
        "player": "Adem LJAJIC",
        "time": "75'"
    }, {
        "id": 796,
        "type_of_event": "substitution-in",
        "player": "Andrija ZIVKOVIC",
        "time": "75'"
    }, {
        "id": 804,
        "type_of_event": "substitution-out",
        "player": "Filip KOSTIC",
        "time": "82'"
    }, {
        "id": 805,
        "type_of_event": "substitution-in",
        "player": "Nemanja RADONJIC",
        "time": "82'"
    }, {
        "id": 807,
        "type_of_event": "substitution-out",
        "player": "Aleksandar MITROVIC",
        "time": "89'"
    }, {
        "id": 808,
        "type_of_event": "substitution-in",
        "player": "Luka JOVIC",
        "time": "89'"
    }],
    "away_team_events": [{
        "id": 776,
        "type_of_event": "substitution-out",
        "player": "MARCELO",
        "time": "10'"
    }, {
        "id": 777,
        "type_of_event": "substitution-in",
        "player": "FILIPE LUIS",
        "time": "10'"
    }, {
        "id": 782,
        "type_of_event": "goal",
        "player": "PAULINHO",
        "time": "36'"
    }, {
        "id": 788,
        "type_of_event": "substitution-out",
        "player": "PAULINHO",
        "time": "66'"
    }, {
        "id": 789,
        "type_of_event": "substitution-in",
        "player": "FERNANDINHO",
        "time": "66'"
    }, {
        "id": 790,
        "type_of_event": "goal",
        "player": "THIAGO SILVA",
        "time": "68'"
    }, {
        "id": 797,
        "type_of_event": "substitution-out",
        "player": "PHILIPPE COUTINHO",
        "time": "80'"
    }, {
        "id": 798,
        "type_of_event": "substitution-in",
        "player": "RENATO AUGUSTO",
        "time": "80'"
    }],
    "home_team_statistics": {
        "country": "Serbia",
        "attempts_on_goal": 10,
        "on_target": 1,
        "off_target": 5,
        "blocked": 4,
        "woodwork": 0,
        "corners": 5,
        "offsides": 2,
        "ball_possession": 44,
        "pass_accuracy": 77,
        "num_passes": 457,
        "passes_completed": 352,
        "distance_covered": 113,
        "balls_recovered": 55,
        "tackles": 11,
        "clearances": 14,
        "yellow_cards": 3,
        "red_cards": 0,
        "fouls_committed": 13,
        "tactics": "4-2-3-1",
        "starting_eleven": [{
            "name": "Vladimir STOJKOVIC",
            "captain": false,
            "shirt_number": 1,
            "position": "Goalie"
        }, {
            "name": "Antonio RUKAVINA",
            "captain": false,
            "shirt_number": 2,
            "position": "Defender"
        }, {
            "name": "Aleksandar MITROVIC",
            "captain": false,
            "shirt_number": 9,
            "position": "Forward"
        }, {
            "name": "Dusan TADIC",
            "captain": false,
            "shirt_number": 10,
            "position": "Midfield"
        }, {
            "name": "Aleksandar KOLAROV",
            "captain": true,
            "shirt_number": 11,
            "position": "Defender"
        }, {
            "name": "Milos VELJKOVIC",
            "captain": false,
            "shirt_number": 13,
            "position": "Defender"
        }, {
            "name": "Nikola MILENKOVIC",
            "captain": false,
            "shirt_number": 15,
            "position": "Defender"
        }, {
            "name": "Filip KOSTIC",
            "captain": false,
            "shirt_number": 17,
            "position": "Midfield"
        }, {
            "name": "Sergej MILINKOVIC-SAVIC",
            "captain": false,
            "shirt_number": 20,
            "position": "Midfield"
        }, {
            "name": "Nemanja MATIC",
            "captain": false,
            "shirt_number": 21,
            "position": "Midfield"
        }, {
            "name": "Adem LJAJIC",
            "captain": false,
            "shirt_number": 22,
            "position": "Midfield"
        }],
        "substitutes": [{
            "name": "Dusko TOSIC",
            "captain": false,
            "shirt_number": 3,
            "position": "Defender"
        }, {
            "name": "Luka MILIVOJEVIC",
            "captain": false,
            "shirt_number": 4,
            "position": "Midfield"
        }, {
            "name": "Uros SPAJIC",
            "captain": false,
            "shirt_number": 5,
            "position": "Defender"
        }, {
            "name": "Branislav IVANOVIC",
            "captain": false,
            "shirt_number": 6,
            "position": "Defender"
        }, {
            "name": "Andrija ZIVKOVIC",
            "captain": false,
            "shirt_number": 7,
            "position": "Midfield"
        }, {
            "name": "Aleksandar PRIJOVIC",
            "captain": false,
            "shirt_number": 8,
            "position": "Forward"
        }, {
            "name": "Predrag RAJKOVIC",
            "captain": false,
            "shirt_number": 12,
            "position": "Goalie"
        }, {
            "name": "Milan RODIC",
            "captain": false,
            "shirt_number": 14,
            "position": "Defender"
        }, {
            "name": "Marko GRUJIC",
            "captain": false,
            "shirt_number": 16,
            "position": "Midfield"
        }, {
            "name": "Nemanja RADONJIC",
            "captain": false,
            "shirt_number": 18,
            "position": "Forward"
        }, {
            "name": "Luka JOVIC",
            "captain": false,
            "shirt_number": 19,
            "position": "Forward"
        }, {
            "name": "Marko DMITROVIC",
            "captain": false,
            "shirt_number": 23,
            "position": "Goalie"
        }]
    },
    "away_team_statistics": {
        "country": "Brazil",
        "attempts_on_goal": 13,
        "on_target": 6,
        "off_target": 3,
        "blocked": 4,
        "woodwork": 0,
        "corners": 8,
        "offsides": 4,
        "ball_possession": 56,
        "pass_accuracy": 86,
        "num_passes": 614,
        "passes_completed": 528,
        "distance_covered": 104,
        "balls_recovered": 50,
        "tackles": 9,
        "clearances": 37,
        "yellow_cards": 0,
        "red_cards": 0,
        "fouls_committed": 7,
        "tactics": "4-2-3-1",
        "starting_eleven": [{
            "name": "ALISSON",
            "captain": false,
            "shirt_number": 1,
            "position": "Goalie"
        }, {
            "name": "THIAGO SILVA",
            "captain": false,
            "shirt_number": 2,
            "position": "Defender"
        }, {
            "name": "MIRANDA",
            "captain": true,
            "shirt_number": 3,
            "position": "Defender"
        }, {
            "name": "CASEMIRO",
            "captain": false,
            "shirt_number": 5,
            "position": "Midfield"
        }, {
            "name": "GABRIEL JESUS",
            "captain": false,
            "shirt_number": 9,
            "position": "Forward"
        }, {
            "name": "NEYMAR",
            "captain": false,
            "shirt_number": 10,
            "position": "Forward"
        }, {
            "name": "PHILIPPE COUTINHO",
            "captain": false,
            "shirt_number": 11,
            "position": "Midfield"
        }, {
            "name": "MARCELO",
            "captain": false,
            "shirt_number": 12,
            "position": "Defender"
        }, {
            "name": "PAULINHO",
            "captain": false,
            "shirt_number": 15,
            "position": "Midfield"
        }, {
            "name": "WILLIAN",
            "captain": false,
            "shirt_number": 19,
            "position": "Midfield"
        }, {
            "name": "FAGNER",
            "captain": false,
            "shirt_number": 22,
            "position": "Defender"
        }],
        "substitutes": [{
            "name": "PEDRO GEROMEL",
            "captain": false,
            "shirt_number": 4,
            "position": "Defender"
        }, {
            "name": "FILIPE LUIS",
            "captain": false,
            "shirt_number": 6,
            "position": "Defender"
        }, {
            "name": "RENATO AUGUSTO",
            "captain": false,
            "shirt_number": 8,
            "position": "Midfield"
        }, {
            "name": "MARQUINHOS",
            "captain": false,
            "shirt_number": 13,
            "position": "Defender"
        }, {
            "name": "CASSIO",
            "captain": false,
            "shirt_number": 16,
            "position": "Goalie"
        }, {
            "name": "FERNANDINHO",
            "captain": false,
            "shirt_number": 17,
            "position": "Midfield"
        }, {
            "name": "FRED",
            "captain": false,
            "shirt_number": 18,
            "position": "Midfield"
        }, {
            "name": "ROBERTO FIRMINO",
            "captain": false,
            "shirt_number": 20,
            "position": "Forward"
        }, {
            "name": "TAISON",
            "captain": false,
            "shirt_number": 21,
            "position": "Forward"
        }, {
            "name": "EDERSON",
            "captain": false,
            "shirt_number": 23,
            "position": "Goalie"
        }, {
            "name": "DOUGLAS COSTA",
            "captain": false,
            "shirt_number": 7,
            "position": "Forward"
        }, {
            "name": "DANILO",
            "captain": false,
            "shirt_number": 14,
            "position": "Defender"
        }]
    },
    "last_event_update_at": "2018-06-27T19:51:48Z",
    "last_score_update_at": "2018-06-27T19:51:47Z"
}, {
    "venue": "Nizhny Novgorod",
    "location": "Nizhny Novgorod Stadium",
    "status": "completed",
    "time": "full-time",
    "fifa_id": "300331534",
    "weather": {
        "humidity": "43",
        "temp_celsius": "20",
        "temp_farenheit": "52",
        "wind_speed": "13",
        "description": "Clear Night"
    },
    "attendance": "43319",
    "officials": ["Clement TURPIN", "Nicolas DANOS", "Cyril GRINGORE", "Norbert HAUATA", "Felix ZWAYER", "Mark BORSCH", "Bastian DANKERT", "Szymon MARCINIAK", "Bertrand BRIAL"],
    "stage_name": "First stage",
    "home_team_country": "Switzerland",
    "away_team_country": "Costa Rica",
    "datetime": "2018-06-27T18:00:00Z",
    "winner": "Draw",
    "winner_code": "Draw",
    "home_team": {
        "country": "Switzerland",
        "code": "CH",
        "goals": 2,
        "penalties": 0
    },
    "away_team": {
        "country": "Costa Rica",
        "code": "CR",
        "goals": 2,
        "penalties": 0
    },
    "home_team_events": [{
        "id": 780,
        "type_of_event": "goal",
        "player": "Blerim DZEMAILI",
        "time": "31'"
    }, {
        "id": 783,
        "type_of_event": "yellow-card",
        "player": "Stephan LICHTSTEINER",
        "time": "37'"
    }, {
        "id": 786,
        "type_of_event": "substitution-out",
        "player": "Valon BEHRAMI",
        "time": "60'"
    }, {
        "id": 787,
        "type_of_event": "substitution-in",
        "player": "Denis ZAKARIA",
        "time": "60'"
    }, {
        "id": 791,
        "type_of_event": "substitution-out",
        "player": "Mario GAVRANOVIC",
        "time": "69'"
    }, {
        "id": 792,
        "type_of_event": "substitution-in",
        "player": "Josip DRMIC",
        "time": "69'"
    }, {
        "id": 794,
        "type_of_event": "yellow-card",
        "player": "Denis ZAKARIA",
        "time": "75'"
    }, {
        "id": 799,
        "type_of_event": "substitution-out",
        "player": "Xherdan SHAQIRI",
        "time": "81'"
    }, {
        "id": 800,
        "type_of_event": "substitution-in",
        "player": "Michael LANG",
        "time": "81'"
    }, {
        "id": 803,
        "type_of_event": "yellow-card",
        "player": "Fabian SCHAER",
        "time": "83'"
    }, {
        "id": 806,
        "type_of_event": "goal",
        "player": "Josip DRMIC",
        "time": "88'"
    }],
    "away_team_events": [{
        "id": 778,
        "type_of_event": "yellow-card",
        "player": "Cristian GAMBOA",
        "time": "11'"
    }, {
        "id": 779,
        "type_of_event": "yellow-card",
        "player": "Joel CAMPBELL",
        "time": "29'"
    }, {
        "id": 785,
        "type_of_event": "goal",
        "player": "Kendall WASTON",
        "time": "56'"
    }, {
        "id": 801,
        "type_of_event": "substitution-out",
        "player": "Daniel COLINDRES",
        "time": "81'"
    }, {
        "id": 802,
        "type_of_event": "substitution-in",
        "player": "Rodney WALLACE",
        "time": "81'"
    }, {
        "id": 809,
        "type_of_event": "yellow-card",
        "player": "Kendall WASTON",
        "time": "89'"
    }, {
        "id": 810,
        "type_of_event": "substitution-out",
        "player": "David GUZMAN",
        "time": "90'+1'"
    }, {
        "id": 811,
        "type_of_event": "substitution-in",
        "player": "Randall AZOFEIFA",
        "time": "90'+1'"
    }, {
        "id": 812,
        "type_of_event": "substitution-out",
        "player": "Cristian GAMBOA",
        "time": "90'+3'"
    }, {
        "id": 813,
        "type_of_event": "substitution-in",
        "player": "Ian SMITH",
        "time": "90'+3'"
    }, {
        "id": 814,
        "type_of_event": "goal-penalty",
        "player": "Bryan RUIZ",
        "time": "90'+3'"
    }],
    "home_team_statistics": {
        "country": "Switzerland",
        "attempts_on_goal": 12,
        "on_target": 3,
        "off_target": 5,
        "blocked": 4,
        "woodwork": 1,
        "corners": 6,
        "offsides": 1,
        "ball_possession": 60,
        "pass_accuracy": 86,
        "num_passes": 592,
        "passes_completed": 510,
        "distance_covered": 102,
        "balls_recovered": 28,
        "tackles": 6,
        "clearances": 13,
        "yellow_cards": 3,
        "red_cards": 0,
        "fouls_committed": 9,
        "tactics": "4-2-3-1",
        "starting_eleven": [{
            "name": "Yann SOMMER",
            "captain": false,
            "shirt_number": 1,
            "position": "Goalie"
        }, {
            "name": "Stephan LICHTSTEINER",
            "captain": true,
            "shirt_number": 2,
            "position": "Defender"
        }, {
            "name": "Manuel AKANJI",
            "captain": false,
            "shirt_number": 5,
            "position": "Defender"
        }, {
            "name": "Breel EMBOLO",
            "captain": false,
            "shirt_number": 7,
            "position": "Forward"
        }, {
            "name": "Granit XHAKA",
            "captain": false,
            "shirt_number": 10,
            "position": "Midfield"
        }, {
            "name": "Valon BEHRAMI",
            "captain": false,
            "shirt_number": 11,
            "position": "Midfield"
        }, {
            "name": "Ricardo RODRIGUEZ",
            "captain": false,
            "shirt_number": 13,
            "position": "Defender"
        }, {
            "name": "Blerim DZEMAILI",
            "captain": false,
            "shirt_number": 15,
            "position": "Midfield"
        }, {
            "name": "Mario GAVRANOVIC",
            "captain": false,
            "shirt_number": 18,
            "position": "Forward"
        }, {
            "name": "Fabian SCHAER",
            "captain": false,
            "shirt_number": 22,
            "position": "Defender"
        }, {
            "name": "Xherdan SHAQIRI",
            "captain": false,
            "shirt_number": 23,
            "position": "Midfield"
        }],
        "substitutes": [{
            "name": "Francois MOUBANDJE",
            "captain": false,
            "shirt_number": 3,
            "position": "Defender"
        }, {
            "name": "Nico ELVEDI",
            "captain": false,
            "shirt_number": 4,
            "position": "Defender"
        }, {
            "name": "Michael LANG",
            "captain": false,
            "shirt_number": 6,
            "position": "Defender"
        }, {
            "name": "Remo FREULER",
            "captain": false,
            "shirt_number": 8,
            "position": "Midfield"
        }, {
            "name": "Haris SEFEROVIC",
            "captain": false,
            "shirt_number": 9,
            "position": "Forward"
        }, {
            "name": "Yvon MVOGO",
            "captain": false,
            "shirt_number": 12,
            "position": "Goalie"
        }, {
            "name": "Gelson FERNANDES",
            "captain": false,
            "shirt_number": 16,
            "position": "Midfield"
        }, {
            "name": "Denis ZAKARIA",
            "captain": false,
            "shirt_number": 17,
            "position": "Midfield"
        }, {
            "name": "Josip DRMIC",
            "captain": false,
            "shirt_number": 19,
            "position": "Forward"
        }, {
            "name": "Johan DJOUROU",
            "captain": false,
            "shirt_number": 20,
            "position": "Defender"
        }, {
            "name": "Roman BUERKI",
            "captain": false,
            "shirt_number": 21,
            "position": "Goalie"
        }, {
            "name": "Steven ZUBER",
            "captain": false,
            "shirt_number": 14,
            "position": "Midfield"
        }]
    },
    "away_team_statistics": {
        "country": "Costa Rica",
        "attempts_on_goal": 13,
        "on_target": 6,
        "off_target": 5,
        "blocked": 2,
        "woodwork": 2,
        "corners": 5,
        "offsides": 1,
        "ball_possession": 40,
        "pass_accuracy": 79,
        "num_passes": 338,
        "passes_completed": 268,
        "distance_covered": 102,
        "balls_recovered": 41,
        "tackles": 8,
        "clearances": 27,
        "yellow_cards": 3,
        "red_cards": 0,
        "fouls_committed": 14,
        "tactics": "5-4-1",
        "starting_eleven": [{
            "name": "Keylor NAVAS",
            "captain": false,
            "shirt_number": 1,
            "position": "Goalie"
        }, {
            "name": "Johnny ACOSTA",
            "captain": false,
            "shirt_number": 2,
            "position": "Defender"
        }, {
            "name": "Giancarlo GONZALEZ",
            "captain": false,
            "shirt_number": 3,
            "position": "Defender"
        }, {
            "name": "Celso BORGES",
            "captain": false,
            "shirt_number": 5,
            "position": "Midfield"
        }, {
            "name": "Bryan OVIEDO",
            "captain": false,
            "shirt_number": 8,
            "position": "Defender"
        }, {
            "name": "Daniel COLINDRES",
            "captain": false,
            "shirt_number": 9,
            "position": "Midfield"
        }, {
            "name": "Bryan RUIZ",
            "captain": true,
            "shirt_number": 10,
            "position": "Midfield"
        }, {
            "name": "Joel CAMPBELL",
            "captain": false,
            "shirt_number": 12,
            "position": "Forward"
        }, {
            "name": "Cristian GAMBOA",
            "captain": false,
            "shirt_number": 16,
            "position": "Defender"
        }, {
            "name": "Kendall WASTON",
            "captain": false,
            "shirt_number": 19,
            "position": "Defender"
        }, {
            "name": "David GUZMAN",
            "captain": false,
            "shirt_number": 20,
            "position": "Midfield"
        }],
        "substitutes": [{
            "name": "Ian SMITH",
            "captain": false,
            "shirt_number": 4,
            "position": "Defender"
        }, {
            "name": "Oscar DUARTE",
            "captain": false,
            "shirt_number": 6,
            "position": "Defender"
        }, {
            "name": "Christian BOLANOS",
            "captain": false,
            "shirt_number": 7,
            "position": "Midfield"
        }, {
            "name": "Johan VENEGAS",
            "captain": false,
            "shirt_number": 11,
            "position": "Forward"
        }, {
            "name": "Rodney WALLACE",
            "captain": false,
            "shirt_number": 13,
            "position": "Midfield"
        }, {
            "name": "Randall AZOFEIFA",
            "captain": false,
            "shirt_number": 14,
            "position": "Midfield"
        }, {
            "name": "Francisco CALVO",
            "captain": false,
            "shirt_number": 15,
            "position": "Defender"
        }, {
            "name": "Yeltsin TEJEDA",
            "captain": false,
            "shirt_number": 17,
            "position": "Midfield"
        }, {
            "name": "Patrick PEMBERTON",
            "captain": false,
            "shirt_number": 18,
            "position": "Goalie"
        }, {
            "name": "Marcos URENA",
            "captain": false,
            "shirt_number": 21,
            "position": "Forward"
        }, {
            "name": "Kenner GUTIERREZ",
            "captain": false,
            "shirt_number": 22,
            "position": "Defender"
        }, {
            "name": "Leonel MOREIRA",
            "captain": false,
            "shirt_number": 23,
            "position": "Goalie"
        }]
    },
    "last_event_update_at": "2018-06-27T19:53:42Z",
    "last_score_update_at": "2018-06-27T19:54:11Z"
}];
    $scope.ejemplo = "Hola Mundo";
    $scope.teams = [];
    for(i=0; i<data.length; i++) {
        $scope.teams.push(data[i].home_team);
        $scope.teams.push(data[i].away_team);
    }
})