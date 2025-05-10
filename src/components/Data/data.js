 const countries = [ 
  {
    "code": "AF",
    "name": "Afghanistan",
    "timezone": "Asia/Kabul"
  },
  {
    "code": "AL",
    "name": "Albania",
    "timezone": "Europe/Tirane"
  },
  {
    "code": "DZ",
    "name": "Algeria",
    "timezone": "Africa/Algiers"
  },
  {
    "code": "AS",
    "name": "American Samoa",
    "timezone": "Pacific/Pago_Pago"
  },
  {
    "code": "AD",
    "name": "Andorra",
    "timezone": "Europe/Andorra"
  },
  {
    "code": "AO",
    "name": "Angola",
    "timezone": "Africa/Luanda"
  },
  {
    "code": "AI",
    "name": "Anguilla",
    "timezone": "America/Anguilla"
  },
  {
    "code": "AQ",
    "name": "Antarctica",
    "timezone": "Antarctica/McMurdo"
  },
  {
    "code": "AG",
    "name": "Antigua and Barbuda",
    "timezone": "America/Antigua"
  },
  {
    "code": "AR",
    "name": "Argentina",
    "timezone": "America/Argentina/Buenos_Aires"
  },
  {
    "code": "AM",
    "name": "Armenia",
    "timezone": "Asia/Yerevan"
  },
  {
    "code": "AW",
    "name": "Aruba",
    "timezone": "America/Aruba"
  },
  {
    "code": "AU",
    "name": "Australia",
    "timezone": "Australia/Sydney"
  },
  {
    "code": "AT",
    "name": "Austria",
    "timezone": "Europe/Vienna"
  },
  {
    "code": "AZ",
    "name": "Azerbaijan",
    "timezone": "Asia/Baku"
  },
  {
    "code": "BS",
    "name": "Bahamas",
    "timezone": "America/Nassau"
  },
  {
    "code": "BH",
    "name": "Bahrain",
    "timezone": "Asia/Bahrain"
  },
  {
    "code": "BD",
    "name": "Bangladesh",
    "timezone": "Asia/Dhaka"
  },
  {
    "code": "BB",
    "name": "Barbados",
    "timezone": "America/Barbados"
  },
  {
    "code": "BY",
    "name": "Belarus",
    "timezone": "Europe/Minsk"
  },
  {
    "code": "BE",
    "name": "Belgium",
    "timezone": "Europe/Brussels"
  },
  {
    "code": "BZ",
    "name": "Belize",
    "timezone": "America/Belize"
  },
  {
    "code": "BJ",
    "name": "Benin",
    "timezone": "Africa/Porto-Novo"
  },
  {
    "code": "BM",
    "name": "Bermuda",
    "timezone": "Atlantic/Bermuda"
  },
  {
    "code": "BT",
    "name": "Bhutan",
    "timezone": "Asia/Thimphu"
  },
  {
    "code": "BO",
    "name": "Bolivia",
    "timezone": "America/La_Paz"
  },
  {
    "code": "BA",
    "name": "Bosnia and Herzegovina",
    "timezone": "Europe/Sarajevo"
  },
  {
    "code": "BW",
    "name": "Botswana",
    "timezone": "Africa/Gaborone"
  },
  {
    "code": "BR",
    "name": "Brazil",
    "timezone": "America/Sao_Paulo"
  },
  {
    "code": "IO",
    "name": "British Indian Ocean Territory",
    "timezone": "Indian/Chagos"
  },
  {
    "code": "BN",
    "name": "Brunei Darussalam",
    "timezone": "Asia/Brunei"
  },
  {
    "code": "BG",
    "name": "Bulgaria",
    "timezone": "Europe/Sofia"
  },
  {
    "code": "BF",
    "name": "Burkina Faso",
    "timezone": "Africa/Ouagadougou"
  },
  {
    "code": "BI",
    "name": "Burundi",
    "timezone": "Africa/Bujumbura"
  },
  {
    "code": "KH",
    "name": "Cambodia",
    "timezone": "Asia/Phnom_Penh"
  },
  {
    "code": "CM",
    "name": "Cameroon",
    "timezone": "Africa/Douala"
  },
  {
    "code": "CA",
    "name": "Canada",
    "timezone": "America/Toronto"
  },
  {
    "code": "CV",
    "name": "Cape Verde",
    "timezone": "Atlantic/Cape_Verde"
  },
  {
    "code": "KY",
    "name": "Cayman Islands",
    "timezone": "America/Cayman"
  },
  {
    "code": "CF",
    "name": "Central African Republic",
    "timezone": "Africa/Bangui"
  },
  {
    "code": "TD",
    "name": "Chad",
    "timezone": "Africa/N'Djamena"
  },
  {
    "code": "CL",
    "name": "Chile",
    "timezone": "America/Santiago"
  },
  {
    "code": "CN",
    "name": "China",
    "timezone": "Asia/Shanghai"
  },
  {
    "code": "CX",
    "name": "Christmas Island",
    "timezone": "Indian/Christmas"
  },
  {
    "code": "CC",
    "name": "Cocos (Keeling) Islands",
    "timezone": "Indian/Cocos"
  },
  {
    "code": "CO",
    "name": "Colombia",
    "timezone": "America/Bogota"
  },
  {
    "code": "KM",
    "name": "Comoros",
    "timezone": "Indian/Comoro"
  },
  {
    "code": "CG",
    "name": "Congo",
    "timezone": "Africa/Brazzaville"
  },
  {
    "code": "CD",
    "name": "Congo, The Democratic Republic of the",
    "timezone": "Africa/Kinshasa"
  },
  {
    "code": "CK",
    "name": "Cook Islands",
    "timezone": "Pacific/Rarotonga"
  },
  {
    "code": "CR",
    "name": "Costa Rica",
    "timezone": "America/Costa_Rica"
  },
  {
    "code": "CI",
    "name": "Cote D'Ivoire",
    "timezone": "Africa/Abidjan"
  },
  {
    "code": "HR",
    "name": "Croatia",
    "timezone": "Europe/Zagreb"
  },
  {
    "code": "CU",
    "name": "Cuba",
    "timezone": "America/Havana"
  },
  {
    "code": "CW",
    "name": "Curacao",
    "timezone": "America/Curacao"
  },
  {
    "code": "CY",
    "name": "Cyprus",
    "timezone": "Asia/Nicosia"
  },
  {
    "code": "CZ",
    "name": "Czech Republic",
    "timezone": "Europe/Prague"
  },
  {
    "code": "DK",
    "name": "Denmark",
    "timezone": "Europe/Copenhagen"
  },
  {
    "code": "DJ",
    "name": "Djibouti",
    "timezone": "Africa/Djibouti"
  },
  {
    "code": "DM",
    "name": "Dominica",
    "timezone": "America/Dominica"
  },
  {
    "code": "DO",
    "name": "Dominican Republic",
    "timezone": "America/Santo_Domingo"
  },
  {
    "code": "TL",
    "name": "East Timor",
    "timezone": "Asia/Dili"
  },
  {
    "code": "EC",
    "name": "Ecuador",
    "timezone": "America/Guayaquil"
  },
  {
    "code": "EG",
    "name": "Egypt",
    "timezone": "Africa/Cairo"
  },
  {
    "code": "SV",
    "name": "El Salvador",
    "timezone": "America/El_Salvador"
  },
  {
    "code": "GQ",
    "name": "Equatorial Guinea",
    "timezone": "Africa/Malabo"
  },
  {
    "code": "ER",
    "name": "Eritrea",
    "timezone": "Africa/Asmara"
  },
  {
    "code": "EE",
    "name": "Estonia",
    "timezone": "Europe/Tallinn"
  },
  {
    "code": "ET",
    "name": "Ethiopia",
    "timezone": "Africa/Addis_Ababa"
  },
  {
    "code": "FK",
    "name": "Falkland Islands (Malvinas)",
    "timezone": "Atlantic/Stanley"
  },
  {
    "code": "FO",
    "name": "Faroe Islands",
    "timezone": "Atlantic/Faroe"
  },
  {
    "code": "FJ",
    "name": "Fiji",
    "timezone": "Pacific/Fiji"
  },
  {
    "code": "FI",
    "name": "Finland",
    "timezone": "Europe/Helsinki"
  },
  {
    "code": "FR",
    "name": "France",
    "timezone": "Europe/Paris"
  },
  {
    "code": "GF",
    "name": "French Guiana",
    "timezone": "America/Cayenne"
  },
  {
    "code": "PF",
    "name": "French Polynesia",
    "timezone": "Pacific/Tahiti"
  },
  {
    "code": "TF",
    "name": "French Southern Territories",
    "timezone": "Indian/Kerguelen"
  },
  {
    "code": "GA",
    "name": "Gabon",
    "timezone": "Africa/Libreville"
  },
  {
    "code": "GM",
    "name": "Gambia",
    "timezone": "Africa/Banjul"
  },
  {
    "code": "GE",
    "name": "Georgia",
    "timezone": "Asia/Tbilisi"
  },
  {
    "code": "DE",
    "name": "Germany",
    "timezone": "Europe/Berlin"
  },
  {
    "code": "GH",
    "name": "Ghana",
    "timezone": "Africa/Accra"
  },
  {
    "code": "GI",
    "name": "Gibraltar",
    "timezone": "Europe/Gibraltar"
  },
  {
    "code": "GR",
    "name": "Greece",
    "timezone": "Europe/Athens"
  },
  {
    "code": "GL",
    "name": "Greenland",
    "timezone": "America/Godthab"
  },
  {
    "code": "GD",
    "name": "Grenada",
    "timezone": "America/Grenada"
  },
  {
    "code": "GP",
    "name": "Guadeloupe",
    "timezone": "America/Guadeloupe"
  },
  {
    "code": "GU",
    "name": "Guam",
    "timezone": "Pacific/Guam"
  },
  {
    "code": "GT",
    "name": "Guatemala",
    "timezone": "America/Guatemala"
  },
  {
    "code": "GG",
    "name": "Guernsey",
    "timezone": "Europe/Guernsey"
  },
  {
    "code": "GN",
    "name": "Guinea",
    "timezone": "Africa/Conakry"
  },
  {
    "code": "GW",
    "name": "Guinea-Bissau",
    "timezone": "Africa/Bissau"
  },
  {
    "code": "GY",
    "name": "Guyana",
    "timezone": "America/Guyana"
  },
  {
    "code": "HT",
    "name": "Haiti",
    "timezone": "America/Port-au-Prince"
  },
  {
    "code": "HM",
    "name": "Heard Island and McDonald Islands",
    "timezone": "Antarctica/Macquarie"
  },
  {
    "code": "VA",
    "name": "Holy See (Vatican City State)",
    "timezone": "Europe/Vatican"
  },
  {
    "code": "HN",
    "name": "Honduras",
    "timezone": "America/Tegucigalpa"
  },
  {
    "code": "HK",
    "name": "Hong Kong",
    "timezone": "Asia/Hong_Kong"
  },
  {
    "code": "HU",
    "name": "Hungary",
    "timezone": "Europe/Budapest"
  },
  {
    "code": "IS",
    "name": "Iceland",
    "timezone": "Atlantic/Reykjavik"
  },
  {
    "code": "IN",
    "name": "India",
    "timezone": "Asia/Kolkata"
  },
  {
    "code": "ID",
    "name": "Indonesia",
    "timezone": "Asia/Jakarta"
  },
  {
    "code": "IR",
    "name": "Iran, Islamic Republic of",
    "timezone": "Asia/Tehran"
  },
  {
    "code": "IQ",
    "name": "Iraq",
    "timezone": "Asia/Baghdad"
  },
  {
    "code": "IE",
    "name": "Ireland",
    "timezone": "Europe/Dublin"
  },
  {
    "code": "IM",
    "name": "Isle of Man",
    "timezone": "Europe/Isle_of_Man"
  },
  {
    "code": "IT",
    "name": "Italy",
    "timezone": "Europe/Rome"
  },
  {
    "code": "JM",
    "name": "Jamaica",
    "timezone": "America/Jamaica"
  },
  {
    "code": "JP",
    "name": "Japan",
    "timezone": "Asia/Tokyo"
  },
  {
    "code": "JE",
    "name": "Jersey",
    "timezone": "Europe/Jersey"
  },
  {
    "code": "JO",
    "name": "Jordan",
    "timezone": "Asia/Amman"
  },
  {
    "code": "KZ",
    "name": "Kazakhstan",
    "timezone": "Asia/Almaty"
  },
  {
    "code": "KE",
    "name": "Kenya",
    "timezone": "Africa/Nairobi"
  },
  {
    "code": "KI",
    "name": "Kiribati",
    "timezone": "Pacific/Tarawa"
  },
  {
    "code": "KP",
    "name": "Korea, Democratic People's Republic of",
    "timezone": "Asia/Pyongyang"
  },
  {
    "code": "KR",
    "name": "Korea, Republic of",
    "timezone": "Asia/Seoul"
  },
  {
    "code": "KW",
    "name": "Kuwait",
    "timezone": "Asia/Kuwait"
  },
  {
    "code": "KG",
    "name": "Kyrgyzstan",
    "timezone": "Asia/Bishkek"
  },
  {
    "code": "LA",
    "name": "Lao People's Democratic Republic",
    "timezone": "Asia/Vientiane"
  },
  {
    "code": "LV",
    "name": "Latvia",
    "timezone": "Europe/Riga"
  },
  {
    "code": "LB",
    "name": "Lebanon",
    "timezone": "Asia/Beirut"
  },
  {
    "code": "LS",
    "name": "Lesotho",
    "timezone": "Africa/Maseru"
  },
  {
    "code": "LR",
    "name": "Liberia",
    "timezone": "Africa/Monrovia"
  },
  {
    "code": "LY",
    "name": "Libya",
    "timezone": "Africa/Tripoli"
  },
  {
    "code": "LI",
    "name": "Liechtenstein",
    "timezone": "Europe/Vaduz"
  },
  {
    "code": "LT",
    "name": "Lithuania",
    "timezone": "Europe/Vilnius"
  },
  {
    "code": "LU",
    "name": "Luxembourg",
    "timezone": "Europe/Luxembourg"
  },
  {
    "code": "MO",
    "name": "Macao",
    "timezone": "Asia/Macau"
  },
  {
    "code": "MK",
    "name": "North Macedonia (formerly Macedonia)",
    "timezone": "Europe/Skopje"
  },
  {
    "code": "MG",
    "name": "Madagascar",
    "timezone": "Indian/Antananarivo"
  },
  {
    "code": "MW",
    "name": "Malawi",
    "timezone": "Africa/Blantyre"
  },
  {
    "code": "MY",
    "name": "Malaysia",
    "timezone": "Asia/Kuala_Lumpur"
  },
  {
    "code": "MV",
    "name": "Maldives",
    "timezone": "Indian/Maldives"
  },
  {
    "code": "ML",
    "name": "Mali",
    "timezone": "Africa/Timbuktu"
  },
  {
    "code": "MT",
    "name": "Malta",
    "timezone": "Europe/Malta"
  },
  {
    "code": "MH",
    "name": "Marshall Islands",
    "timezone": "Pacific/Majuro"
  },
  {
    "code": "MQ",
    "name": "Martinique",
    "timezone": "America/Martinique"
  },
  {
    "code": "MR",
    "name": "Mauritania",
    "timezone": "Africa/Nouakchott"
  },
  {
    "code": "MU",
    "name": "Mauritius",
    "timezone": "Indian/Mauritius"
  },
  {
    "code": "YT",
    "name": "Mayotte",
    "timezone": "Indian/Mayotte"
  },
  {
    "code": "MX",
    "name": "Mexico",
    "timezone": "America/Mexico_City"
  },
  {
    "code": "FM",
    "name": "Micronesia, Federated States of",
    "timezone": "Pacific/Chuuk"
  },
  {
    "code": "MD",
    "name": "Moldova, Republic of",
    "timezone": "Europe/Chisinau"
  },
  {
    "code": "MC",
    "name": "Monaco",
    "timezone": "Europe/Monaco"
  },
  {
    "code": "MN",
    "name": "Mongolia",
    "timezone": "Asia/Ulaanbaatar"
  },
  {
    "code": "ME",
    "name": "Montenegro",
    "timezone": "Europe/Podgorica"
  },
  {
    "code": "MS",
    "name": "Montserrat",
    "timezone": "America/Montserrat"
  },
  {
    "code": "MA",
    "name": "Morocco",
    "timezone": "Africa/Casablanca"
  },
  {
    "code": "MZ",
    "name": "Mozambique",
    "timezone": "Africa/Maputo"
  },
  {
    "code": "MM",
    "name": "Myanmar",
    "timezone": "Asia/Rangoon"
  },
  {
    "code": "NA",
    "name": "Namibia",
    "timezone": "Africa/Windhoek"
  },
  {
    "code": "NR",
    "name": "Nauru",
    "timezone": "Pacific/Nauru"
  },
  {
    "code": "NP",
    "name": "Nepal",
    "timezone": "Asia/Kathmandu"
  },
  {
    "code": "NL",
    "name": "Netherlands",
    "timezone": "Europe/Amsterdam"
  },
  {
    "code": "NC",
    "name": "New Caledonia",
    "timezone": "Pacific/Noumea"
  },
  {
    "code": "NZ",
    "name": "New Zealand",
    "timezone": "Pacific/Auckland"
  },
  {
    "code": "NI",
    "name": "Nicaragua",
    "timezone": "America/Managua"
  },
  {
    "code": "NE",
    "name": "Niger",
    "timezone": "Africa/Niamey"
  },
  {
    "code": "NG",
    "name": "Nigeria",
    "timezone": "Africa/Lagos"
  },
  {
    "code": "NU",
    "name": "Niue",
    "timezone": "Pacific/Niue"
  },
  {
    "code": "NF",
    "name": "Norfolk Island",
    "timezone": "Pacific/Norfolk"
  },
  {
    "code": "MP",
    "name": "Northern Mariana Islands",
    "timezone": "Pacific/Saipan"
  },
  {
    "code": "NO",
    "name": "Norway",
    "timezone": "Europe/Oslo"
  },
  {
    "code": "OM",
    "name": "Oman",
    "timezone": "Asia/Muscat"
  },
  {
    "code": "PK",
    "name": "Pakistan",
    "timezone": "Asia/Karachi"
  },
  {
    "code": "PW",
    "name": "Palau",
    "timezone": "Pacific/Palau"
  },
  {
    "code": "PS",
    "name": "Palestinian Territory, Occupied",
    "timezone": "Asia/Gaza"
  },
  {
    "code": "PA",
    "name": "Panama",
    "timezone": "America/Panama"
  },
  {
    "code": "PG",
    "name": "Papua New Guinea",
    "timezone": "Pacific/Port_Moresby"
  },
  {
    "code": "PY",
    "name": "Paraguay",
    "timezone": "America/Asuncion"
  },
  {
    "code": "PE",
    "name": "Peru",
    "timezone": "America/Lima"
  },
  {
    "code": "PH",
    "name": "Philippines",
    "timezone": "Asia/Manila"
  },
  {
    "code": "PN",
    "name": "Pitcairn",
    "timezone": "Pacific/Pitcairn"
  },
  {
    "code": "PL",
    "name": "Poland",
    "timezone": "Europe/Warsaw"
  },
  {
    "code": "PT",
    "name": "Portugal",
    "timezone": "Europe/Lisbon"
  },
  {
    "code": "PR",
    "name": "Puerto Rico",
    "timezone": "America/Puerto_Rico"
  },
  {
    "code": "QA",
    "name": "Qatar",
    "timezone": "Asia/Qatar"
  },
  {
    "code": "RE",
    "name": "Reunion",
    "timezone": "Indian/Reunion"
  },
  {
    "code": "RO",
    "name": "Romania",
    "timezone": "Europe/Bucharest"
  },
  {
    "code": "RU",
    "name": "Russian Federation",
    "timezone": "Europe/Moscow"
  },
  {
    "code": "RW",
    "name": "Rwanda",
    "timezone": "Africa/Kigali"
  },
  {
    "code": "BL",
    "name": "Saint Barthelemy",
    "timezone": "America/St_Barthelemy"
  },
  {
    "code": "SH",
    "name": "Saint Helena",
    "timezone": "Atlantic/St_Helena"
  },
  {
    "code": "KN",
    "name": "Saint Kitts and Nevis",
    "timezone": "America/St_Kitts"
  },
  {
    "code": "LC",
    "name": "Saint Lucia",
    "timezone": "America/St_Lucia"
  },
  {
    "code": "MF",
    "name": "Saint Martin (French part)",
    "timezone": "America/Marigot"
  },
  {
    "code": "PM",
    "name": "Saint Pierre and Miquelon",
    "timezone": "America/St_Pierre"
  },
  {
    "code": "VC",
    "name": "Saint Vincent and the Grenadines",
    "timezone": "America/St_Vincent"
  },
  {
    "code": "WS",
    "name": "Samoa",
    "timezone": "Pacific/Apia"
  },
  {
    "code": "SM",
    "name": "San Marino",
    "timezone": "Europe/San_Marino"
  },
  {
    "code": "ST",
    "name": "Sao Tome and Principe",
    "timezone": "Africa/Sao_Tome"
  },
  {
    "code": "SA",
    "name": "Saudi Arabia",
    "timezone": "Asia/Riyadh"
  },
  {
    "code": "SN",
    "name": "Senegal",
    "timezone": "Africa/Dakar"
  },
  {
    "code": "RS",
    "name": "Serbia",
    "timezone": "Europe/Belgrade"
  },
  {
    "code": "SC",
    "name": "Seychelles",
    "timezone": "Indian/Mahe"
  },
  {
    "code": "SL",
    "name": "Sierra Leone",
    "timezone": "Africa/Freetown"
  },
  {
    "code": "SG",
    "name": "Singapore",
    "timezone": "Asia/Singapore"
  },
  {
    "code": "SX",
    "name": "Sint Maarten (Dutch part)",
    "timezone": "America/Lower_Princes"
  },
  {
    "code": "SK",
    "name": "Slovakia",
    "timezone": "Europe/Bratislava"
  },
  {
    "code": "SI",
    "name": "Slovenia",
    "timezone": "Europe/Ljubljana"
  },
  {
    "code": "SB",
    "name": "Solomon Islands",
    "timezone": "Pacific/Guadalcanal"
  },
  {
    "code": "SO",
    "name": "Somalia",
    "timezone": "Africa/Mogadishu"
  },
  {
    "code": "ZA",
    "name": "South Africa",
    "timezone": "Africa/Johannesburg"
  },
  {
    "code": "GS",
    "name": "South Georgia and the South Sandwich Islands",
    "timezone": "Atlantic/South_Georgia"
  },
  {
    "code": "SS",
    "name": "South Sudan",
    "timezone": "Africa/Juba"
  },
  {
    "code": "ES",
    "name": "Spain",
    "timezone": "Europe/Madrid"
  },
  {
    "code": "LK",
    "name": "Sri Lanka",
    "timezone": "Asia/Colombo"
  },
  {
    "code": "SD",
    "name": "Sudan",
    "timezone": "Africa/Khartoum"
  },
  {
    "code": "SR",
    "name": "Suriname",
    "timezone": "America/Paramaribo"
  },
  {
    "code": "SJ",
    "name": "Svalbard and Jan Mayen",
    "timezone": "Arctic/Longyearbyen"
  },
  {
    "code": "SZ",
    "name": "Swaziland",
    "timezone": "Africa/Mbabane"
  },
  {
    "code": "SE",
    "name": "Sweden",
    "timezone": "Europe/Stockholm"
  },
  {
    "code": "CH",
    "name": "Switzerland",
    "timezone": "Europe/Zurich"
  },
  {
    "code": "SY",
    "name": "Syrian Arab Republic",
    "timezone": "Asia/Damascus"
  },
  {
    "code": "TW",
    "name": "Taiwan, Province of China",
    "timezone": "Asia/Taipei"
  },
  {
    "code": "TJ",
    "name": "Tajikistan",
    "timezone": "Asia/Dushanbe"
  },
  {
    "code": "TZ",
    "name": "Tanzania, United Republic of",
    "timezone": "Africa/Dar_es_Salaam"
  },
  {
    "code": "TH",
    "name": "Thailand",
    "timezone": "Asia/Bangkok"
  },
  {
    "code": "TG",
    "name": "Togo",
    "timezone": "Africa/Lome"
  },
  {
    "code": "TK",
    "name": "Tokelau",
    "timezone": "Pacific/Fakaofo"
  },
  {
    "code": "TO",
    "name": "Tonga",
    "timezone": "Pacific/Tongatapu"
  },
  {
    "code": "TT",
    "name": "Trinidad and Tobago",
    "timezone": "America/Port_of_Spain"
  },
  {
    "code": "TN",
    "name": "Tunisia",
    "timezone": "Africa/Tunis"
  },
  {
    "code": "TR",
    "name": "Turkey",
    "timezone": "Europe/Istanbul"
  },
  {
    "code": "TM",
    "name": "Turkmenistan",
    "timezone": "Asia/Ashgabat"
  },
  {
    "code": "TC",
    "name": "Turks and Caicos Islands",
    "timezone": "America/Grand_Turk"
  },
  {
    "code": "TV",
    "name": "Tuvalu",
    "timezone": "Pacific/Tuvalu"
  },
  {
    "code": "UG",
    "name": "Uganda",
    "timezone": "Africa/Kampala"
  },
  {
    "code": "UA",
    "name": "Ukraine",
    "timezone": "Europe/Kiev"
  },
  {
    "code": "AE",
    "name": "United Arab Emirates",
    "timezone": "Asia/Dubai"
  },
  {
    "code": "GB",
    "name": "United Kingdom",
    "timezone": "Europe/London"
  },
  {
    "code": "US",
    "name": "United States",
    "timezone": "America/New_York"
  },
  {
    "code": "UM",
    "name": "United States Minor Outlying Islands",
    "timezone": "Pacific/Wake"
  },
  {
    "code": "UY",
    "name": "Uruguay",
    "timezone": "America/Montevideo"
  },
  {
    "code": "UZ",
    "name": "Uzbekistan",
    "timezone": "Asia/Samarkand"
  },
  {
    "code": "VU",
    "name": "Vanuatu",
    "timezone": "Pacific/Efate"
  },
  {
    "code": "VE",
    "name": "Venezuela",
    "timezone": "America/Caracas"
  },
  {
    "code": "VN",
    "name": "Viet Nam",
    "timezone": "Asia/Ho_Chi_Minh"
  },
  {
    "code": "VG",
    "name": "Virgin Islands, British",
    "timezone": "America/Tortola"
  },
  {
    "code": "VI",
    "name": "Virgin Islands, U.S.",
    "timezone": "America/St_Thomas"
  },
  {
    "code": "WF",
    "name": "Wallis and Futuna",
    "timezone": "Pacific/Wallis"
  },
  {
    "code": "EH",
    "name": "Western Sahara",
    "timezone": "Africa/El_Aaiun"
  },
  {
    "code": "YE",
    "name": "Yemen",
    "timezone": "Asia/Aden"
  },
  {
    "code": "ZM",
    "name": "Zambia",
    "timezone": "Africa/Lusaka"
  },
  {
    "code": "ZW",
    "name": "Zimbabwe",
    "timezone": "Africa/Harare"
  }
]

  export default countries;
