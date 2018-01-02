const mergedArray = [{
    "id": 1,
    "attributes": {
      "peak_name": "Mt. Elbert",
      "range": "Sawatch Range",
      "rank": "1st",
      "elevation": "14,433",
      "towns": "Leadville, Twin Lakes, Aspen",
      "latitude": "39.117777777777775",
      "longitude": "-106.44472222222223"
    },
    "new_attributes": {
      "peak_name": "Mt. Elbert",
      "class": 1,
      "standard_route": "Northeast Ridge",
      "roundtrip_distance": 10,
      "difficulty": "easier",
      "lengthOfHike": "medium",
      "distance": "close",
      "distance2": "far",
      "link": "https://www.14ers.com/route.php?route=elbe2&peak=Mt.+Elbert"
    }
  },
  {
    "id": 2,
    "attributes": {
      "peak_name": "Mt. Massive",
      "range": "Sawatch Range",
      "rank": "2nd",
      "elevation": "14,421",
      "towns": "Leadville, Aspen",
      "latitude": "39.18722222222222",
      "longitude": "-106.47472222222223"
    },
    "new_attributes": {
      "peak_name": "Mt. Massive",
      "class": 2,
      "standard_route": "East Slopes",
      "roundtrip_distance": 15,
      "difficulty": "moderate",
      "lengthOfHike": "longer",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=mass1&peak=Mt.+Massive"
    }
  },
  {
    "id": 3,
    "attributes": {
      "peak_name": "Mt. Harvard",
      "range": "Sawatch Range",
      "rank": "3rd",
      "elevation": "14,420",
      "towns": "Granite, Buena Vista, Leadville",
      "latitude": "38.92444444444444",
      "longitude": "-106.32"
    },
    "new_attributes": {
      "peak_name": "Mt. Harvard",
      "class": 2,
      "standard_route": "South Slopes",
      "roundtrip_distance": 14,
      "difficulty": "moderate",
      "lengthOfHike": "medium",
      "lengthOfHike2": "longer",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=harv1&peak=Mt.+Harvard+and+Mt.+Columbia"
    }
  },
  {
    "id": 4,
    "attributes": {
      "peak_name": "Blanca Peak",
      "range": "Sangre de Cristo",
      "rank": "4th",
      "elevation": "14,345",
      "towns": "Fort Garland, Blanca, Alamosa",
      "latitude": "37.577222222222225",
      "longitude": "-105.48527777777778"
    },
    "new_attributes": {
      "peak_name": "Blanca Peak",
      "class": 2,
      "standard_route": "Northwest Ridge",
      "roundtrip_distance": 17,
      "difficulty": "moderate",
      "lengthOfHike": "longer",
      "distance": "close",
      "distance2": "Far",
      "link": "https://www.14ers.com/route.php?route=blan1&peak=Blanca%20Peak"
    }
  },
  {
    "id": 5,
    "attributes": {
      "peak_name": "La Plata Peak",
      "range": "Sawatch Range",
      "rank": "5th",
      "elevation": "14,336",
      "towns": "Twin Lakes, Leadville, Buena Vista, Aspen",
      "latitude": "39.029444444444444",
      "longitude": "-106.4725"
    },
    "new_attributes": {
      "peak_name": "La Plata Peak",
      "class": 2,
      "standard_route": "Northwest Ridge",
      "roundtrip_distance": 9,
      "difficulty": "moderate",
      "lengthOfHike": "medium",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=lapl1&peak=La+Plata+Peak"
    }
  },
  {
    "id": 6,
    "attributes": {
      "peak_name": "Uncompahgre Peak",
      "range": "San Juan Mountains",
      "rank": "6th",
      "elevation": "14,309",
      "towns": "Lake City, Ouray",
      "latitude": "38.07166666666667",
      "longitude": "-107.46138888888889"
    },
    "new_attributes": {
      "peak_name": "Uncompahgre Peak",
      "class": 2,
      "standard_route": "South Ridge",
      "roundtrip_distance": 8,
      "difficulty": "moderate",
      "lengthOfHike": "shorter",
      "lengthOfHike2": "medium",
      "distance": "far",
      "link": "https://www.14ers.com/route.php?route=unco1&peak=Uncompahgre+Peak"
    }
  },
  {
    "id": 7,
    "attributes": {
      "peak_name": "Crestone Peak",
      "range": "Sangre de Cristo",
      "rank": "7th",
      "elevation": "14,294",
      "towns": "Crestone, Moffat, Hooper, Alamosa",
      "latitude": "37.96666666666667",
      "longitude": "-105.58472222222221"
    },
    "new_attributes": {
      "peak_name": "Crestone Peak",
      "class": 3,
      "standard_route": "South Face",
      "roundtrip_distance": 14,
      "difficulty": "hard",
      "lengthOfHike": "longer",
      "distance": "close",
      "distance2": "far",
      "link": "https://www.14ers.com/route.php?route=cpea2&peak=Crestone%20Peak"
    }
  },
  {
    "id": 8,
    "attributes": {
      "peak_name": "Mt. Lincoln",
      "range": "Mosquito Range",
      "rank": "8th",
      "elevation": "14,286",
      "towns": "Alma, Fairplay, Breckenridge",
      "latitude": "39.35138888888889",
      "longitude": "-106.11083333333333"
    },
    "new_attributes": {
      "peak_name": "Mt. Lincoln",
      "class": 2,
      "standard_route": "West Ridge",
      "roundtrip_distance": 6,
      "difficulty": "easier",
      "lengthOfHike": "shorter",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=linc1&peak=Mt.+Lincoln"
    }
  },
  {
    "id": 9,
    "attributes": {
      "peak_name": "Grays Peak",
      "range": "Front Range",
      "rank": "9th",
      "elevation": "14,270",
      "towns": "Bakerville, Montezuma, Keystone",
      "latitude": "39.63388888888889",
      "longitude": "-105.81694444444445"
    },
    "new_attributes": {
      "peak_name": "Grays Peak",
      "class": 1,
      "standard_route": "East Slopes",
      "roundtrip_distance": 8,
      "difficulty": "easier",
      "lengthOfHike": "shorter",
      "lengthOfHike2": "medium",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=gray1&peak=Grays+Peak"
    }
  },
  {
    "id": 10,
    "attributes": {
      "peak_name": "Mt. Antero",
      "range": "Sawatch Range",
      "rank": "10th",
      "elevation": "14,269",
      "towns": "Leadville, Buena Vista, Salida",
      "latitude": "38.67388888888889",
      "longitude": "-106.2461111111111"
    },
    "new_attributes": {
      "peak_name": "Mt. Antero",
      "class": 2,
      "standard_route": "West Slopes",
      "roundtrip_distance": 16,
      "difficulty": "moderate",
      "lengthOfHike": "longer",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=ante1&peak=Mt.+Antero"
    }
  },
  {
    "id": 11,
    "attributes": {
      "peak_name": "Torreys Peak",
      "range": "Front Range",
      "rank": "11th",
      "elevation": "14,267",
      "towns": "Bakerville, Montezuma, Keystone",
      "latitude": "39.64277777777778",
      "longitude": "-105.82083333333333"
    },
    "new_attributes": {
      "peak_name": "Torreys Peak",
      "class": 2,
      "standard_route": "South Slopes",
      "roundtrip_distance": 8,
      "difficulty": "easier",
      "lengthOfHike": "shorter",
      "lengthOfHike2": "medium",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=torr2&peak=Torreys+Peak"
    }
  },
  {
    "id": 12,
    "attributes": {
      "peak_name": "Castle Peak",
      "range": "Elk Mountains",
      "rank": "12th",
      "elevation": "14,265",
      "towns": "Ashcroft, Crested Butte, Aspen",
      "latitude": "39.00972222222222",
      "longitude": "-106.86138888888888"
    },
    "new_attributes": {
      "peak_name": "Castle Peak",
      "class": 2,
      "standard_route": "Northeast Ridge",
      "roundtrip_distance": 14,
      "difficulty": "moderate",
      "lengthOfHike": "longer",
      "distance": "far",
      "distance2": "close",
      "link": "https://www.14ers.com/route.php?route=cast1&peak=Castle%20Peak"
    }
  },
  {
    "id": 13,
    "attributes": {
      "peak_name": "Quandary Peak",
      "range": "Tenmile Range",
      "rank": "13th",
      "elevation": "14,265",
      "towns": "Breckenridge, Alma, Fairplay, Leadville",
      "latitude": "39.39722222222222",
      "longitude": "-106.10583333333332"
    },
    "new_attributes": {
      "peak_name": "Quandary Peak",
      "class": 1,
      "standard_route": "East Ridge",
      "roundtrip_distance": 7,
      "difficulty": "easier",
      "lengthOfHike": "shorter",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=quan1&peak=Quandary+Peak"
    }
  },
  {
    "id": 14,
    "attributes": {
      "peak_name": "Mt. Evans",
      "range": "Front Range",
      "rank": "14th",
      "elevation": "14,264",
      "towns": "Denver, Idaho Springs, Georgetown, Evergreen",
      "latitude": "39.58861111111111",
      "longitude": "-105.64277777777778"
    },
    "new_attributes": {
      "peak_name": "Mt. Evans",
      "class": 2,
      "standard_route": "West Ridge Via Mt. Spalding",
      "roundtrip_distance": 5,
      "difficulty": "easier",
      "lengthOfHike": "shorter",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=evan2&peak=Mt.+Evans"
    }
  },
  {
    "id": 15,
    "attributes": {
      "peak_name": "Longs Peak",
      "range": "Front Range",
      "rank": "15th",
      "elevation": "14,255",
      "towns": "Estes Park, Meeker Park",
      "latitude": "40.25472222222222",
      "longitude": "-105.61527777777778"
    },
    "new_attributes": {
      "peak_name": "Longs Peak",
      "class": 3,
      "standard_route": "Keyhole Route",
      "roundtrip_distance": 15,
      "difficulty": "hard",
      "lengthOfHike": "longer",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=long1&peak=Longs+Peak"
    }
  },
  {
    "id": 16,
    "attributes": {
      "peak_name": "Mt. Wilson",
      "range": "San Juan Mountains",
      "rank": "16th",
      "elevation": "14,246",
      "towns": "Ouray, Telluride, Rico",
      "latitude": "37.83916666666667",
      "longitude": "-107.99083333333333"
    },
    "new_attributes": {
      "peak_name": "Mt. Wilson",
      "class": 4,
      "standard_route": "North Slopes",
      "roundtrip_distance": 16,
      "difficulty": "hard",
      "lengthOfHike": "longer",
      "distance": "far",
      "link": "https://www.14ers.com/route.php?route=mwil2&peak=Mt.+Wilson%2C+Wilson+Peak%2C+and+El+Diente+Peak"
    }
  },
  {
    "id": 17,
    "attributes": {
      "peak_name": "Mt. Cameron",
      "range": "Mosquito Range",
      "rank": "16th (although it is not officially ranked)",
      "elevation": "14,238",
      "towns": "Alma, Fairplay, Breckenridge",
      "latitude": "39.346944444444446",
      "longitude": "-106.11861111111111"
    },
    "new_attributes": {
      "peak_name": "Mt. Cameron",
      "class": 2,
      "standard_route": "Combo: Democrat, Cameron, Lincoln, Bross",
      "roundtrip_distance": 7,
      "difficulty": "easier",
      "lengthOfHike": "shorter",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=bros6"
    }
  },
  {
    "id": 18,
    "attributes": {
      "peak_name": "Mt. Shavano",
      "range": "Sawatch Range",
      "rank": "17th",
      "elevation": "14,229",
      "towns": "Salida, Poncha Springs, Buena Vista",
      "latitude": "38.619166666666665",
      "longitude": "-106.23944444444444"
    },
    "new_attributes": {
      "peak_name": "Mt. Shavano",
      "class": 9,
      "standard_route": "East Slopes",
      "roundtrip_distance": 9,
      "difficulty": "moderate",
      "lengthOfHike": "medium",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=shav1&peak=Mt.+Shavano+and+Tabeguache+Peak"
    }
  },
  {
    "id": 19,
    "attributes": {
      "peak_name": "Mt. Belford",
      "range": "Sawatch Range",
      "rank": "18th",
      "elevation": "14,197",
      "towns": "Granite, Buena Vista, Leadville",
      "latitude": "38.96083333333333",
      "longitude": "-106.36055555555555"
    },
    "new_attributes": {
      "peak_name": "Mt. Belford",
      "class": 2,
      "standard_route": "Northwest Ridge",
      "roundtrip_distance": 8,
      "difficulty": "moderate",
      "lengthOfHike": "shorter",
      "lengthOfHike2": "medium",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=belf1&peak=Mt.+Belford+and+Mt.+Oxford"
    }
  },
  {
    "id": 20,
    "attributes": {
      "peak_name": "Crestone Needle",
      "range": "Sangre de Cristo",
      "rank": "19th",
      "elevation": "14,197",
      "towns": "Crestone, Moffat, Hooper, Alamosa",
      "latitude": "37.96472222222223",
      "longitude": "-105.5761111111111"
    },
    "new_attributes": {
      "peak_name": "Crestone Needle",
      "class": 3,
      "standard_route": "South Face",
      "roundtrip_distance": 12,
      "difficulty": "hard",
      "lengthOfHike": "longer",
      "lengthOfHike2": "medium",
      "distance": "close",
      "distance2": "far",
      "link": "https://www.14ers.com/route.php?route=cnee1&peak=Crestone+Peak+and+Crestone+Needle"
    }
  },
  {
    "id": 21,
    "attributes": {
      "peak_name": "Mt. Princeton",
      "range": "Sawatch Range",
      "rank": "20th",
      "elevation": "14,197",
      "towns": "Buena Vista, Salida, Leadville",
      "latitude": "38.74944444444444",
      "longitude": "-106.24194444444444"
    },
    "new_attributes": {
      "peak_name": "Mt. Princeton",
      "class": 2,
      "standard_route": "East Slopes",
      "roundtrip_distance": 6,
      "difficulty": "moderate",
      "lengthOfHike": "shorter",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=prin1&peak=Mt.+Princeton"
    }
  },
  {
    "id": 22,
    "attributes": {
      "peak_name": "Mt. Yale",
      "range": "Sawatch Range",
      "rank": "21st",
      "elevation": "14,196",
      "towns": "Buena Vista, Leadville, Salida",
      "latitude": "38.844166666666666",
      "longitude": "-106.31333333333333"
    },
    "new_attributes": {
      "peak_name": "Mt. Yale",
      "class": 2,
      "standard_route": "Southwest Slopes",
      "roundtrip_distance": 9,
      "difficulty": "moderate",
      "lengthOfHike": "medium",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=yale1&peak=Mt.+Yale"
    }
  },
  {
    "id": 23,
    "attributes": {
      "peak_name": "Mt. Bross",
      "range": "Mosquito Range",
      "rank": "22nd",
      "elevation": "14,172",
      "towns": "Breckenridge, Alma, Leadville",
      "latitude": "39.33527777777778",
      "longitude": "-106.10694444444444"
    },
    "new_attributes": {
      "peak_name": "Mt. Bross",
      "class": 2,
      "standard_route": "Combo: Democrat, Cameron, Lincoln, Bross",
      "roundtrip_distance": 7,
      "difficulty": "easier",
      "lengthOfHike": "shorter",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=bros1&peak=Mt.+Bross"
    }
  },
  {
    "id": 24,
    "attributes": {
      "peak_name": "Kit Carson Peak",
      "range": "Sangre de Cristo",
      "rank": "23rd",
      "elevation": "14,165",
      "towns": "Crestone, Moffat, Hooper, Alamosa",
      "latitude": "37.97972222222222",
      "longitude": "-105.60194444444444"
    },
    "new_attributes": {
      "peak_name": "Kit Carson Peak",
      "class": 3,
      "standard_route": "From Challenger Point",
      "roundtrip_distance": 14,
      "difficulty": "hard",
      "lengthOfHike": "longer",
      "lengthOfHike2": "medium",
      "distance": "far",
      "link": "https://www.14ers.com/route.php?route=kitc2&peak=Kit+Carson+Peak+and+Challenger+Point"
    }
  },
  {
    "id": 25,
    "attributes": {
      "peak_name": "El Diente Peak",
      "range": "San Juan Mountains",
      "rank": "23rd (although it is not officially ranked)",
      "elevation": "14,159",
      "towns": "Ouray, Telluride, Rico",
      "latitude": "37.839444444444446",
      "longitude": "-108.00527777777778"
    },
    "new_attributes": {
      "peak_name": "El Diente Peak",
      "class": 3,
      "standard_route": "North Slopes",
      "roundtrip_distance": 15,
      "difficulty": "hard",
      "lengthOfHike": "longer",
      "distance": "far",
      "link": "https://www.14ers.com/route.php?route=eldi3&peak=El+Diente+Peak"
    }
  },
  {
    "id": 26,
    "attributes": {
      "peak_name": "Maroon Peak",
      "range": "Elk Mountains",
      "rank": "24th",
      "elevation": "14,156",
      "towns": "Aspen, Snowmass",
      "latitude": "39.07083333333334",
      "longitude": "-106.98861111111111"
    },
    "new_attributes": {
      "peak_name": "Maroon Peak",
      "class": 3,
      "standard_route": "South Ridge",
      "roundtrip_distance": 11,
      "difficulty": "hard",
      "lengthOfHike": "longer",
      "distance2": "close",
      "link": "https://www.14ers.com/route.php?route=maro1&peak=The+Maroon+Bells"
    }
  },
  {
    "id": 27,
    "attributes": {
      "peak_name": "Tabeguache Peak",
      "range": "Sawatch Range",
      "rank": "25th",
      "elevation": "14,155",
      "towns": "Salida, Poncha Springs, Buena Vista",
      "latitude": "38.62555555555556",
      "longitude": "-106.25055555555555"
    },
    "new_attributes": {
      "peak_name": "Tabeguache Peak",
      "class": 2,
      "standard_route": "Via Shavano",
      "roundtrip_distance": 11,
      "difficulty": "moderate",
      "lengthOfHike": "medium",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=tabe2&peak=Mt.+Shavano+and+Tabeguache+Peak"
    }
  },
  {
    "id": 28,
    "attributes": {
      "peak_name": "Mt. Oxford",
      "range": "Sawatch Range",
      "rank": "26th",
      "elevation": "14,153",
      "towns": "Granite, Buena Vista, Leadville",
      "latitude": "38.96472222222223",
      "longitude": "-106.33833333333332"
    },
    "new_attributes": {
      "peak_name": "Mt. Oxford",
      "class": 2,
      "standard_route": "Via Mt. Belford",
      "roundtrip_distance": 11,
      "difficulty": "moderate",
      "lengthOfHike": "medium",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=oxfo2&peak=Mt.+Oxford"
    }
  },
  {
    "id": 29,
    "attributes": {
      "peak_name": "Mt. Sneffels",
      "range": "San Juan Mountains",
      "rank": "27th",
      "elevation": "14,150",
      "towns": "Ridgway, Ouray, Telluride",
      "latitude": "38.00333333333333",
      "longitude": "-107.79166666666667"
    },
    "new_attributes": {
      "peak_name": "Mt. Sneffels",
      "class": 3,
      "standard_route": "From Yankee Boy Basin",
      "roundtrip_distance": 6,
      "difficulty": "moderate",
      "lengthOfHike": "shorter",
      "distance": "far",
      "link": "https://www.14ers.com/route.php?route=snef1&peak=Mt.+Sneffels"
    }
  },
  {
    "id": 30,
    "attributes": {
      "peak_name": "Mt. Democrat",
      "range": "Mosquito Range",
      "rank": "28th",
      "elevation": "14,148",
      "towns": "Fairplay, Alma, Leadville",
      "latitude": "39.33972222222222",
      "longitude": "-106.13944444444445"
    },
    "new_attributes": {
      "peak_name": "Mt. Democrat",
      "class": 2,
      "standard_route": "Combo: Democrat, Cameron, Lincoln, Bross",
      "roundtrip_distance": 7,
      "difficulty": "easier",
      "lengthOfHike": "shorter",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=demo1&peak=Mt.+Democrat"
    }
  },
  {
    "id": 31,
    "attributes": {
      "peak_name": "Capitol Peak",
      "range": "Elk Mountains",
      "rank": "29th",
      "elevation": "14,130",
      "towns": "Aspen, Snowmass, Carbondale",
      "latitude": "39.150277777777774",
      "longitude": "-107.0825"
    },
    "new_attributes": {
      "peak_name": "Capitol Peak",
      "class": 4,
      "standard_route": "Northeast Ridge",
      "roundtrip_distance": 17,
      "difficulty": "hard",
      "lengthOfHike": "longer",
      "distance": "far",
      "distance2": "close",
      "link": "https://www.14ers.com/route.php?route=capi1&peak=Capitol+Peak"
    }
  },
  {
    "id": 32,
    "attributes": {
      "peak_name": "Pikes Peak",
      "range": "Front Range",
      "rank": "30th",
      "elevation": "14,110",
      "towns": "Manitou Springs, Colorado Springs",
      "latitude": "38.84055555555556",
      "longitude": "-105.04388888888889"
    },
    "new_attributes": {
      "peak_name": "Pikes Peak",
      "class": 2,
      "standard_route": "Northwest Slopes",
      "roundtrip_distance": 14,
      "difficulty": "easier",
      "lengthOfHike": "longer",
      "lengthOfHike2": "medium",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=pike1&peak=Pikes+Peak"
    }
  },
  {
    "id": 33,
    "attributes": {
      "peak_name": "Snowmass Mountain",
      "range": "Elk Mountains",
      "rank": "31st",
      "elevation": "14,092",
      "towns": "Aspen, Snowmass, Carbondale",
      "latitude": "39.11888888888889",
      "longitude": "-107.06583333333333"
    },
    "new_attributes": {
      "peak_name": "Snowmass Mountain",
      "class": 3,
      "standard_route": "East Slopes",
      "roundtrip_distance": 22,
      "difficulty": "hard",
      "lengthOfHike": "longer",
      "distance": "far",
      "distance2": "close",
      "link": "https://www.14ers.com/route.php?route=snow1&peak=Snowmass+Mountain"
    }
  },
  {
    "id": 34,
    "attributes": {
      "peak_name": "Mt. Eolus",
      "range": "San Juan Mountains",
      "rank": "32nd",
      "elevation": "14,083",
      "towns": "Silverton, Ouray",
      "latitude": "37.62277777777778",
      "longitude": "-107.62083333333332"
    },
    "new_attributes": {
      "peak_name": "Mt. Eolus",
      "class": 3,
      "standard_route": "Northeast Ridge",
      "roundtrip_distance": 17,
      "difficulty": "hard",
      "lengthOfHike": "longer",
      "distance": "far",
      "link": "https://www.14ers.com/route.php?route=eolu3&peak=Mt.+Eolus%2C+Windom+Peak%2C+and+Sunlight+Peak"
    }
  },
  {
    "id": 35,
    "attributes": {
      "peak_name": "Windom Peak",
      "range": "San Juan Mountains",
      "rank": "33rd",
      "elevation": "14,082",
      "towns": "Silverton, Ouray",
      "latitude": "37.62138888888889",
      "longitude": "-107.59138888888889"
    },
    "new_attributes": {
      "peak_name": "Windom Peak",
      "class": 2,
      "standard_route": "West Ridge",
      "roundtrip_distance": 17,
      "difficulty": "moderate",
      "lengthOfHike": "longer",
      "distance": "far",
      "link": "https://www.14ers.com/route.php?route=wind1&peak=Windom%20Peak"
    }
  },
  {
    "id": 36,
    "attributes": {
      "peak_name": "Challenger Point",
      "range": "Sangre de Cristo",
      "rank": "34th",
      "elevation": "14,081",
      "towns": "Crestone, Moffat, Hooper, Alamosa",
      "latitude": "37.98027777777778",
      "longitude": "-105.6061111111111"
    },
    "new_attributes": {
      "peak_name": "Challenger Point",
      "class": 2,
      "standard_route": "North Slopes",
      "roundtrip_distance": 12.5,
      "difficulty": "moderate",
      "lengthOfHike": "medium",
      "distance": "far",
      "link": "https://www.14ers.com/route.php?route=chal1&peak=Kit+Carson+Peak+and+Challenger+Point"
    }
  },
  {
    "id": 37,
    "attributes": {
      "peak_name": "Mt. Columbia",
      "range": "Sawatch Range",
      "rank": "35th",
      "elevation": "14,073",
      "towns": "Buena Vista, Leadville, Salida",
      "latitude": "38.903888888888886",
      "longitude": "-106.29694444444445"
    },
    "new_attributes": {
      "peak_name": "Mt. Columbia",
      "class": 2,
      "standard_route": "West Slopes",
      "roundtrip_distance": 11.5,
      "difficulty": "moderate",
      "lengthOfHike": "medium",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=colu2&peak=Mt.+Harvard+and+Mt.+Columbia"
    }
  },
  {
    "id": 38,
    "attributes": {
      "peak_name": "Missouri Mountain",
      "range": "Sawatch Range",
      "rank": "36th",
      "elevation": "14,067",
      "towns": "Granite, Buena Vista, Leadville",
      "latitude": "38.947222222222216",
      "longitude": "-106.37777777777777"
    },
    "new_attributes": {
      "peak_name": "Missouri Mountain",
      "class": 2,
      "standard_route": "Northwest Ridge",
      "roundtrip_distance": 10,
      "difficulty": "moderate",
      "lengthOfHike": "medium",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=miss1&peak=Missouri+Mountain"
    }
  },
  {
    "id": 39,
    "attributes": {
      "peak_name": "Humboldt Peak",
      "range": "Sangre de Cristo",
      "rank": "37th",
      "elevation": "14,064",
      "towns": "Silver Cliff, Westcliffe, Bradford, Crestone",
      "latitude": "37.976111111111116",
      "longitude": "-105.55472222222222"
    },
    "new_attributes": {
      "peak_name": "Humboldt Peak",
      "class": 2,
      "standard_route": "West Ridge",
      "roundtrip_distance": 11,
      "difficulty": "moderate",
      "lengthOfHike": "medium",
      "distance": "close",
      "link": "https://www.14ers.com/photos/peakmain.php?peak=Humboldt+Peak"
    }
  },
  {
    "id": 40,
    "attributes": {
      "peak_name": "Mt. Bierstadt",
      "range": "Front Range",
      "rank": "38th",
      "elevation": "14,060",
      "towns": "Georgetown, Idaho Springs, Grant",
      "latitude": "39.58277777777778",
      "longitude": "-105.66805555555555"
    },
    "new_attributes": {
      "peak_name": "Mt. Bierstadt",
      "class": 2,
      "standard_route": "West Slopes",
      "roundtrip_distance": 7,
      "difficulty": "easier",
      "lengthOfHike": "shorter",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=bier1&peak=Mt.+Bierstadt"
    }
  },
  {
    "id": 41,
    "attributes": {
      "peak_name": "Conundrum Peak",
      "range": "Elk Mountains",
      "rank": "38th (although it is not officially ranked)",
      "elevation": "14,060",
      "towns": "Ashcroft, Crested Butte, Aspen",
      "latitude": "39.01444444444444",
      "longitude": "-106.86388888888888"
    },
    "new_attributes": {
      "peak_name": "Conundrum Peak",
      "class": 2,
      "standard_route": "Via Castle",
      "roundtrip_distance": 14.5,
      "difficulty": "moderate",
      "lengthOfHike": "longer",
      "distance": "far",
      "distance2": "close",
      "link": "https://www.14ers.com/route.php?route=cast4&peak=Castle+Peak+and+Conundrum+Peak"
    }
  },
  {
    "id": 42,
    "attributes": {
      "peak_name": "Sunlight Peak",
      "range": "San Juan Mountains",
      "rank": "39th",
      "elevation": "14,059",
      "towns": "Silverton, Ouray",
      "latitude": "37.62722222222222",
      "longitude": "-107.59527777777777"
    },
    "new_attributes": {
      "peak_name": "Sunlight Peak",
      "class": 4,
      "standard_route": "South Face",
      "roundtrip_distance": 17,
      "difficulty": "hard",
      "lengthOfHike": "longer",
      "distance": "far",
      "link": "https://www.14ers.com/route.php?route=sunl2&peak=Sunlight%20Peak"
    }
  },
  {
    "id": 43,
    "attributes": {
      "peak_name": "Handie Peak",
      "range": "San Juan Mountains",
      "rank": "40th",
      "elevation": "14,048",
      "towns": "Ouray, Lake City, Silverton, Telluride",
      "latitude": "37.91305555555555",
      "longitude": "-107.5038888888889"
    },
    "new_attributes": {
      "peak_name": "Handie Peak",
      "class": 1,
      "standard_route": "Southwest Slopes",
      "roundtrip_distance": 6,
      "difficulty": "easier",
      "lengthOfHike": "shorter",
      "distance": "far",
      "link": "https://www.14ers.com/route.php?route=hand1&peak=Handies+Peak"
    }
  },
  {
    "id": 44,
    "attributes": {
      "peak_name": "Culebra Peak",
      "range": "Sangre de Cristo",
      "rank": "41st",
      "elevation": "14,047",
      "towns": "San Luis, Fort Garland, Alamosa, Trinidad",
      "latitude": "37.12222222222222",
      "longitude": "-105.185"
    },
    "new_attributes": {
      "peak_name": "Culebra Peak",
      "class": 2,
      "standard_route": "Northwest Ridge",
      "roundtrip_distance": 5,
      "difficulty": "easier",
      "lengthOfHike": "shorter",
      "distance": "far",
      "link": "https://www.14ers.com/route.php?route=cule1&peak=Culebra+Peak"
    }
  },
  {
    "id": 45,
    "attributes": {
      "peak_name": "Ellingwood Point",
      "range": "Sangre de Cristo",
      "rank": "42nd",
      "elevation": "14,042",
      "towns": "Fort Garland, Blanca, Alamosa",
      "latitude": "37.5825",
      "longitude": "-105.49194444444444"
    },
    "new_attributes": {
      "peak_name": "Ellingwood Point",
      "class": 2,
      "standard_route": "South Face",
      "roundtrip_distance": 17,
      "difficulty": "moderate",
      "lengthOfHike": "longer",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=elli2&peak=Ellingwood+Point"
    }
  },
  {
    "id": 46,
    "attributes": {
      "peak_name": "Mt. Lindsey",
      "range": "Sangre de Cristo",
      "rank": "43rd",
      "elevation": "14,042",
      "towns": "Fort Garland, Blanca, Alamosa",
      "latitude": "37.584722222222226",
      "longitude": "-105.44027777777778"
    },
    "new_attributes": {
      "peak_name": "Mt. Lindsey",
      "class": 3,
      "standard_route": "North Face",
      "roundtrip_distance": 8,
      "difficulty": "hard",
      "lengthOfHike": "shorter",
      "lengthOfHike2": "medium",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=lind1&peak=Mt.+Lindsey"
    }
  },
  {
    "id": 47,
    "attributes": {
      "peak_name": "North Eolus",
      "range": "San Juan Mountains",
      "rank": "43rd (although it is not officially ranked)",
      "elevation": "14,039",
      "towns": "Silverton, Ouray",
      "latitude": "37.625277777777775",
      "longitude": "-107.6211111111111"
    },
    "new_attributes": {
      "peak_name": "North Eolus",
      "class": 3,
      "standard_route": "Northeast Ridge",
      "roundtrip_distance": 17,
      "difficulty": "hard",
      "lengthOfHike": "longer",
      "distance": "far",
      "link": "https://14ers.com/route.php?route=eolu3&peak=North%2520Eolus"
    }
  },
  {
    "id": 48,
    "attributes": {
      "peak_name": "Little Bear Peak",
      "range": "Sangre de Cristo",
      "rank": "44th",
      "elevation": "14,037",
      "towns": "Fort Garland, Blanca, Alamosa",
      "latitude": "37.56666666666667",
      "longitude": "-105.49666666666667"
    },
    "new_attributes": {
      "peak_name": "Little Bear Peak",
      "class": 4,
      "standard_route": "West Ridge",
      "roundtrip_distance": 14,
      "difficulty": "hard",
      "lengthOfHike": "longer",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=litt6&peak=Little%20Bear%20Peak"
    }
  },
  {
    "id": 49,
    "attributes": {
      "peak_name": "Mt. Sherman",
      "range": "Mosquito Range",
      "rank": "45th",
      "elevation": "14,036",
      "towns": "Fairplay, Alma, Leadville",
      "latitude": "39.225",
      "longitude": "-106.16916666666667"
    },
    "new_attributes": {
      "peak_name": "Mt. Sherman",
      "class": 2,
      "standard_route": "Southwest Ridge",
      "roundtrip_distance": 5,
      "difficulty": "easier",
      "lengthOfHike": "shorter",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=sher1&peak=Mt.+Sherman"
    }
  },
  {
    "id": 50,
    "attributes": {
      "peak_name": "Redcloud Peak",
      "range": "San Juan Mountains",
      "rank": "46th",
      "elevation": "14,034",
      "towns": "Ouray, Lake City, Silverton, Telluride",
      "latitude": "37.94083333333333",
      "longitude": "-107.4213888888889"
    },
    "new_attributes": {
      "peak_name": "Redcloud Peak",
      "class": 2,
      "standard_route": "Northeast Ridge",
      "roundtrip_distance": 5,
      "difficulty": "moderate",
      "lengthOfHike": "shorter",
      "distance": "far",
      "link": "https://www.14ers.com/route.php?route=redc1&peak=Redcloud+Peak+and+Sunshine+Peak"
    }
  },
  {
    "id": 51,
    "attributes": {
      "peak_name": "Pyramid Peak",
      "range": "Elk Mountains",
      "rank": "47th",
      "elevation": "14,018",
      "towns": "Aspen, Snowmass",
      "latitude": "39.07138888888889",
      "longitude": "-106.94972222222222"
    },
    "new_attributes": {
      "peak_name": "Pyramid Peak",
      "class": 4,
      "standard_route": "Northeast Ridge",
      "roundtrip_distance": 8,
      "difficulty": "hard",
      "lengthOfHike": "medium",
      "lengthOfHik2": "shorter",
      "distance": "far",
      "distance2": "close",
      "link": "https://www.14ers.com/route.php?route=pyra1&peak=Pyramid+Peak"
    }
  },
  {
    "id": 52,
    "attributes": {
      "peak_name": "Wilson Peak",
      "range": "San Juan Mountains",
      "rank": "48th",
      "elevation": "14,017",
      "towns": "Ouray, Telluride, Rico",
      "latitude": "37.86027777777778",
      "longitude": "-107.98416666666667"
    },
    "new_attributes": {
      "peak_name": "Wilson Peak",
      "class": 4,
      "standard_route": "North Slopes",
      "roundtrip_distance": 16,
      "difficulty": "hard",
      "lengthOfHike": "longer",
      "distance": "far",
      "link": "https://www.14ers.com/route.php?route=mwil2&peak=Mt.+Wilson%2C+Wilson+Peak%2C+and+El+Diente+Peak"
    }
  },
  {
    "id": 53,
    "attributes": {
      "peak_name": "Wetterhorn Peak",
      "range": "San Juan Mountains",
      "rank": "49th",
      "elevation": "14,015",
      "towns": "Lake City, Ouray",
      "latitude": "38.06055555555555",
      "longitude": "-107.51027777777777"
    },
    "new_attributes": {
      "peak_name": "Wetterhorn Peak",
      "class": 3,
      "standard_route": "Southwest Ridge",
      "roundtrip_distance": 7,
      "difficulty": "hard",
      "lengthOfHike": "shorter",
      "distance": "far",
      "link": "https://www.14ers.com/route.php?route=wett1&peak=Wetterhorn+Peak"
    }
  },
  {
    "id": 54,
    "attributes": {
      "peak_name": "San Luis Peak",
      "range": "San Juan Mountains",
      "rank": "50th",
      "elevation": "14,014",
      "towns": "Creede, Lake City, Gunnison",
      "latitude": "37.98694444444445",
      "longitude": "-106.93083333333334"
    },
    "new_attributes": {
      "peak_name": "San Luis Peak",
      "class": 1,
      "standard_route": "Northeast Ridge",
      "roundtrip_distance": 13.5,
      "difficulty": "easier",
      "lengthOfHike": "longer",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=sanl1&peak=San+Luis+Peak"
    }
  },
  {
    "id": 55,
    "attributes": {
      "peak_name": "North Maroon Peak",
      "range": "Elk Mountains",
      "rank": "50th (although it is not officially ranked)",
      "elevation": "14,014",
      "towns": "Aspen, Snowmass",
      "latitude": "39.07611111111112",
      "longitude": "-106.98722222222223"
    },
    "new_attributes": {
      "peak_name": "North Maroon Peak",
      "class": 4,
      "standard_route": "Northeast Ridge",
      "roundtrip_distance": 9,
      "difficulty": "hard",
      "lengthOfHike": "shorter",
      "lengthOfHike2": "medium",
      "distance": "far",
      "distance2": "close",
      "link": "https://www.14ers.com/route.php?route=nmar2&peak=North%20Maroon%20Peak"
    }
  },
  {
    "id": 56,
    "attributes": {
      "peak_name": "Mt. of the Holy Cross",
      "range": "Sawatch Mountains",
      "rank": "51st",
      "elevation": "14,005",
      "towns": "Red Cliff, Minturn, Vail",
      "latitude": "39.46805555555556",
      "longitude": "-106.47916666666667"
    },
    "new_attributes": {
      "peak_name": "Mt. of the Holy Cross",
      "class": 2,
      "standard_route": "North Ridge",
      "roundtrip_distance": 12,
      "difficulty": "moderate",
      "lengthOfHike": "longer",
      "lengthOfHike2": "medium",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=holy1&peak=Mt.+of+the+Holy+Cross"
    }
  },
  {
    "id": 57,
    "attributes": {
      "peak_name": "Huron Peak",
      "range": "Sawatch Mountains",
      "rank": "52nd",
      "elevation": "14,003",
      "towns": "Granite, Buena Vista, Leadville",
      "latitude": "38.945277777777775",
      "longitude": "-106.4375"
    },
    "new_attributes": {
      "peak_name": "Huron Peak",
      "class": 2,
      "standard_route": "Northwest Slopes",
      "roundtrip_distance": 6,
      "difficulty": "easier",
      "lengthOfHike": "shorter",
      "distance": "close",
      "link": "https://www.14ers.com/route.php?route=huro1&peak=Huron+Peak"
    }
  },
  {
    "id": 58,
    "attributes": {
      "peak_name": "Sunshine Peak",
      "range": "San Juan Mountains",
      "rank": "53rd",
      "elevation": "14,001",
      "towns": "Ouray, Lake City, Silverton, Telluride",
      "latitude": "37.922777777777775",
      "longitude": "-107.42500000000001"
    },
    "new_attributes": {
      "peak_name": "Sunshine Peak",
      "class": 2,
      "standard_route": "From Redcloud",
      "roundtrip_distance": 12,
      "difficulty": "moderate",
      "lengthOfHike": "longer",
      "lengthOfHike2": "medium",
      "distance": "far",
      "link": "https://www.14ers.com/route.php?route=suns2&peak=Sunshine%20Peak"
    }
  }
]
