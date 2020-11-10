var DATA = [
  {
    "fieldName": "Database Identifiers",
    "children": [
      {
        "fieldName": "specimen collector sample ID",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The user-defined name for the sample.",
        "guidance": "Store the collector sample ID. If this number is considered identifiable information, provide an alternative ID. Be sure to store the key that maps between the original and alternative IDs for traceability and follow up if necessary. Every collector sample ID from a single submitter must be unique. It can have any format, but we suggest that you make it concise, unique and consistent within your lab.",
        "examples": "prov_rona_99",
        "exportField": {
          "GISAID": [
            {
              "field": "Sample ID given by the sample provider"
            }
          ],
          "CNPHI": [
            {
              "field": "Primary Specimen ID"
            }
          ]
        }
      },
      {
        "fieldName": "NML submitted specimen primary ID",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The primary ID of the specimen submitted thorough LaSER.",
        "guidance": "Store the identifier for the specimen submitted through the NML LaSER system.",
        "examples": "SR20-12345"
      },
      {
        "fieldName": "NML related specimen primary ID",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The primary ID of the related specimen previously submitted thorough LaSER",
        "guidance": "Store the primary ID of the related specimen previously submitted thorough LaSER",
        "examples": "SR20-12345",
        "exportField": {
          "CNPHI": [
            {
              "field": "Related Specimen ID|Related Specimen Relationship Type"
            }
          ]
        }
      },
      {
        "fieldName": "IRIDA sample name",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The identifier assigned to a sequenced isolate in IRIDA.",
        "guidance": "Store the IRIDA sample name. The IRIDA sample name will be created by the individual entering data into the IRIDA platform. IRIDA samples may be linked to metadata and sequence data, or just metadata alone. It is recommended that the IRIDA sample name be the same as, or contain, the specimen collector sample ID for better traceability. It is also recommended that the IRIDA sample name mirror the GISAID accession. IRIDA sample names cannot contain slashes. Slashes should be replaced by underscores. See IRIDA documentation for more information regarding special characters (https://irida.corefacility.ca/documentation/user/user/samples/#adding-a-new-sample). ",
        "examples": "prov_rona_99"
      },
      {
        "fieldName": "umbrella bioproject accession",
        "capitalize": "UPPER",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The INSDC accession number assigned to the umbrella BioProject for the Canadian SARS-CoV-2 sequencing effort.",
        "guidance": "Store the umbrella BioProject accession by selecting it from the picklist in the template. The umbrella BioProject accession will be identical for all CanCOGen submitters. Different provinces will have their own BioProjects, however these BioProjects will be linked under one umbrella BioProject.",
        "examples": "PRJNA623807",
        "vocabulary": {
          "PRJNA623807": {}
        }
      },
      {
        "fieldName": "bioproject accession",
        "capitalize": "UPPER",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The INSDC accession number of the BioProject(s) to which the BioSample belongs.",
        "guidance": "Store the BioProject accession number. BioProjects are an organizing tool that links together raw sequence data, assemblies, and their associated metadata. Each province will be assigned a different bioproject accession number by the National Microbiology Lab. A valid NCBI BioProject accession has prefix PRJN e.g., PRJNA12345, and is created once at the beginning of a new sequencing project. ",
        "examples": "PRJNA608651",
        "exportField": {
          "CNPHI": [
            {
              "field": "BioProject Accession"
            }
          ]
        }
      },
      {
        "fieldName": "biosample accession",
        "capitalize": "UPPER",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The identifier assigned to a BioSample in INSDC archives.",
        "guidance": "Store the accession returned from the BioSample submission. NCBI BioSamples will have the prefix SAMN.",
        "examples": "SAMN14180202",
        "exportField": {
          "CNPHI": [
            {
              "field": "BioSample Accession"
            }
          ]
        }
      },
      {
        "fieldName": "SRA accession",
        "capitalize": "UPPER",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The Sequence Read Archive (SRA) identifier linking raw read data, methodological metadata and quality control metrics submitted to the INSDC.",
        "guidance": "Store the accession assigned to the submitted \"run\". NCBI-SRA accessions start with SRR.",
        "examples": "SRR11177792",
        "exportField": {
          "CNPHI": [
            {
              "field": "SRA Accession"
            }
          ]
        }
      },
      {
        "fieldName": "GenBank accession",
        "capitalize": "UPPER",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The GenBank identifier assigned to the sequence in the INSDC archives.",
        "guidance": "Store the accession returned from a GenBank submission (viral genome assembly).",
        "examples": "MN908947.3"
      },
      {
        "fieldName": "GISAID accession",
        "capitalize": "UPPER",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The GISAID accession number assigned to the sequence.",
        "guidance": "Store the accession returned from the GISAID submission.",
        "examples": "EPI_ISL_436489"
      }
    ]
  },
  {
    "fieldName": "Sample collection and processing",
    "children": [
      {
        "fieldName": "sample collected by",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The name of the agency that collected the original sample.",
        "guidance": "The name of the sample collector should be written out in full, (with minor exceptions) and be consistent across multple submissions e.g. Public Health Agency of Canada, Public Health Ontario, BC Centre for Disease Control. The sample collector specified is at the discretion of the data provider (i.e. may be hospital, provincial public health lab, or other).",
        "examples": "BC Centre for Disease Control",
        "exportField": {
          "GISAID": [
            {
              "field": "Originating lab"
            }
          ]
        }
      },
      {
        "fieldName": "sample collector contact email",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The email address of the contact responsible for follow-up regarding the sample.",
        "guidance": "The email address can represent a specific individual or lab e.g. johnnyblogs@lab.ca, or RespLab@lab.ca",
        "examples": "RespLab@lab.ca"
      },
      {
        "fieldName": "sample collector contact address",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The mailing address of the agency submitting the sample.",
        "guidance": "The mailing address should be in the format: Street number and name, City, Province/Territory, Postal Code, Country",
        "examples": "655 Lab St, Vancouver, British Columbia, V5N 2A2, Canada",
        "exportField": {
          "GISAID": [
            {
              "field": "Address"
            }
          ]
        }
      },
      {
        "fieldName": "sequence submitted by",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The name of the agency that generated the sequence.",
        "guidance": "The name of the agency should be written out in full, (with minor exceptions) and be consistent across multple submissions. If submitting specimens rather than sequencing data, please put the \"National Microbiology Laboratory (NML)\".",
        "examples": "Public Health Ontario (PHO)",
        "exportField": {
          "GISAID": [
            {
              "field": "Submitting lab"
            }
          ],
          "CNPHI": [
            {
              "field": "Sequencing Centre"
            }
          ]
        },
        "vocabulary": {
          "National Microbiology Laboratory (NML)": {},
          "BC Centre for Disease Control (BCCDC)": {},
          "Alberta Precision Labs (APL)": {
            "Alberta ProvLab North (APLN)": {},
            "Alberta ProvLab South (APLS)": {}
          },
          "Public Health Ontario (PHO)": {},
          "Laboratoire de sant\u00e9 publique du Qu\u00e9bec (LSPQ)": {},
          "Saskatchewan - Roy Romanow Provincial Laboratory (RRPL)": {},
          "Manitoba Cadham Provincial Laboratory": {},
          "Nova Scotia Health Authority": {},
          "New Brunswick - Vitalit\u00e9 Health Network": {},
          "Newfoundland and Labrador - Eastern Health": {},
          "Prince Edward Island - Health PEI": {},
          "Ontario Institute for Cancer Research (OICR)": {},
          "McMaster University": {},
          "McGill University": {},
          "The Centre for Applied Genomics (TCAG)": {},
          "Sunnybrook Health Sciences Centre": {},
          "Thunder Bay Regional Health Sciences Centre": {},
          "Canadore College": {},
          "Queen\u2019s University / Kingston Health Sciences Centre": {}
        }
      },
      {
        "fieldName": "sequence submitter contact email",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The email address of the contact responsible for follow-up regarding the sequence.",
        "guidance": "The email address can represent a specific individual or lab e.g. johnnyblogs@lab.ca, or RespLab@lab.ca",
        "examples": ""
      },
      {
        "fieldName": "sequence submitter contact address",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The mailing address of the agency submitting the sequence.",
        "guidance": "The mailing address should be in the format: Street number and name, City, Province/Territory, Postal Code, Country",
        "examples": "123 Sunnybrooke St, Toronto, Ontario, M4P 1L6, Canada",
        "exportField": {
          "GISAID": [
            {
              "field": "Address"
            }
          ]
        }
      },
      {
        "fieldName": "sample collection date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The date on which the sample was collected.",
        "guidance": "Sample collection date is critical for surveillance and many types of analyses. Required granularity includes year, month and day. If this date is considered identifiable information, it is acceptable to add \"jitter\" by adding or subtracting a calendar day (acceptable by GISAID). Alternatively, \u201dreceived date\u201d may be used as a substitute. The date should be provided in ISO 8601 standard format \"YYYY-MM-DD\".",
        "examples": "2020-03-16",
        "exportField": {
          "GISAID": [
            {
              "field": "Collection date"
            }
          ],
          "CNPHI": [
            {
              "field": "Patient Sample Collected Date"
            }
          ]
        }
      },
      {
        "fieldName": "sample received date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The date on which the sample was received.",
        "guidance": "ISO 8601 standard \"YYYY-MM-DD\".",
        "examples": "2020-03-20"
      },
      {
        "fieldName": "geo_loc_name (country)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The country where the sample was collected.",
        "guidance": "Provide the country name from the controlled vocabulary provided.",
        "examples": "Canada",
        "exportField": {
          "GISAID": [
            {
              "field": "Location"
            }
          ],
          "CNPHI": [
            {
              "field": "Patient Country"
            }
          ]
        },
        "vocabulary": {
          "Afghanistan": {},
          "Albania": {},
          "Algeria": {},
          "American Samoa": {},
          "Andorra": {},
          "Angola": {},
          "Anguilla": {},
          "Antarctica": {},
          "Antigua and Barbuda": {},
          "Argentina": {},
          "Armenia": {},
          "Aruba": {},
          "Ashmore and Cartier Islands": {},
          "Australia": {},
          "Austria": {},
          "Azerbaijan": {},
          "Bahamas": {},
          "Bahrain": {},
          "Baker Island": {},
          "Bangladesh": {},
          "Barbados": {},
          "Bassas da India": {},
          "Belarus": {},
          "Belgium": {},
          "Belize": {},
          "Benin": {},
          "Bermuda": {},
          "Bhutan": {},
          "Bolivia": {},
          "Borneo": {},
          "Bosnia and Herzegovina": {},
          "Botswana": {},
          "Bouvet Island": {},
          "Brazil": {},
          "British Virgin Islands": {},
          "Brunei": {},
          "Bulgaria": {},
          "Burkina Faso": {},
          "Burundi": {},
          "Cambodia": {},
          "Cameroon": {},
          "Canada": {},
          "Cape Verde": {},
          "Cayman Islands": {},
          "Central African Republic": {},
          "Chad": {},
          "Chile": {},
          "China": {},
          "Christmas Island": {},
          "Clipperton Island": {},
          "Cocos Islands": {},
          "Colombia": {},
          "Comoros": {},
          "Cook Islands": {},
          "Coral Sea Islands": {},
          "Costa Rica": {},
          "Cote d'Ivoire": {},
          "Croatia": {},
          "Cuba": {},
          "Curacao": {},
          "Cyprus": {},
          "Czech Republic": {},
          "Democratic Republic of the Congo": {},
          "Denmark": {},
          "Djibouti": {},
          "Dominica": {},
          "Dominican Republic": {},
          "Ecuador": {},
          "Egypt": {},
          "El Salvador": {},
          "Equatorial Guinea": {},
          "Eritrea": {},
          "Estonia": {},
          "Eswatini": {},
          "Ethiopia": {},
          "Europa Island": {},
          "Falkland Islands (Islas Malvinas)": {},
          "Faroe Islands": {},
          "Fiji": {},
          "Finland": {},
          "France": {},
          "French Guiana": {},
          "French Polynesia": {},
          "French Southern and Antarctic Lands": {},
          "Gabon": {},
          "Gambia": {},
          "Gaza Strip": {},
          "Georgia": {},
          "Germany": {},
          "Ghana": {},
          "Gibraltar": {},
          "Glorioso Islands": {},
          "Greece": {},
          "Greenland": {},
          "Grenada": {},
          "Guadeloupe": {},
          "Guam": {},
          "Guatemala": {},
          "Guernsey": {},
          "Guinea": {},
          "Guinea-Bissau": {},
          "Guyana": {},
          "Haiti": {},
          "Heard Island and McDonald Islands": {},
          "Honduras": {},
          "Hong Kong": {},
          "Howland Island": {},
          "Hungary": {},
          "Iceland": {},
          "India": {},
          "Indonesia": {},
          "Iran": {},
          "Iraq": {},
          "Ireland": {},
          "Isle of Man": {},
          "Israel": {},
          "Italy": {},
          "Jamaica": {},
          "Jan Mayen": {},
          "Japan": {},
          "Jarvis Island": {},
          "Jersey": {},
          "Johnston Atoll": {},
          "Jordan": {},
          "Juan de Nova Island": {},
          "Kazakhstan": {},
          "Kenya": {},
          "Kerguelen Archipelago": {},
          "Kingman Reef": {},
          "Kiribati": {},
          "Kosovo": {},
          "Kuwait": {},
          "Kyrgyzstan": {},
          "Laos": {},
          "Latvia": {},
          "Lebanon": {},
          "Lesotho": {},
          "Liberia": {},
          "Libya": {},
          "Liechtenstein": {},
          "Line Islands": {},
          "Lithuania": {},
          "Luxembourg": {},
          "Macau": {},
          "Madagascar": {},
          "Malawi": {},
          "Malaysia": {},
          "Maldives": {},
          "Mali": {},
          "Malta": {},
          "Marshall Islands": {},
          "Martinique": {},
          "Mauritania": {},
          "Mauritius": {},
          "Mayotte": {},
          "Mexico": {},
          "Micronesia": {},
          "Midway Islands": {},
          "Moldova": {},
          "Monaco": {},
          "Mongolia": {},
          "Montenegro": {},
          "Montserrat": {},
          "Morocco": {},
          "Mozambique": {},
          "Myanmar": {},
          "Namibia": {},
          "Nauru": {},
          "Navassa Island": {},
          "Nepal": {},
          "Netherlands": {},
          "New Caledonia": {},
          "New Zealand": {},
          "Nicaragua": {},
          "Niger": {},
          "Nigeria": {},
          "Niue": {},
          "Norfolk Island": {},
          "North Korea": {},
          "North Macedonia": {},
          "North Sea": {},
          "Northern Mariana Islands": {},
          "Norway": {},
          "Oman": {},
          "Pakistan": {},
          "Palau": {},
          "Panama": {},
          "Papua New Guinea": {},
          "Paracel Islands": {},
          "Paraguay": {},
          "Peru": {},
          "Philippines": {},
          "Pitcairn Islands": {},
          "Poland": {},
          "Portugal": {},
          "Puerto Rico": {},
          "Qatar": {},
          "Republic of the Congo": {},
          "Reunion": {},
          "Romania": {},
          "Ross Sea": {},
          "Russia": {},
          "Rwanda": {},
          "Saint Helena": {},
          "Saint Kitts and Nevis": {},
          "Saint Lucia": {},
          "Saint Pierre and Miquelon": {},
          "Saint Martin": {},
          "Saint Vincent and the Grenadines": {},
          "Samoa": {},
          "San Marino": {},
          "Sao Tome and Principe": {},
          "Saudi Arabia": {},
          "Senegal": {},
          "Serbia": {},
          "Seychelles": {},
          "Sierra Leone": {},
          "Singapore": {},
          "Sint Maarten": {},
          "Slovakia": {},
          "Slovenia": {},
          "Solomon Islands": {},
          "Somalia": {},
          "South Africa": {},
          "South Georgia and the South Sandwich Islands": {},
          "South Korea": {},
          "South Sudan": {},
          "Spain": {},
          "Spratly Islands": {},
          "Sri Lanka": {},
          "State of Palestine": {},
          "Sudan": {},
          "Suriname": {},
          "Svalbard": {},
          "Swaziland": {},
          "Sweden": {},
          "Switzerland": {},
          "Syria": {},
          "Taiwan": {},
          "Tajikistan": {},
          "Tanzania": {},
          "Thailand": {},
          "Timor-Leste": {},
          "Togo": {},
          "Tokelau": {},
          "Tonga": {},
          "Trinidad and Tobago": {},
          "Tromelin Island": {},
          "Tunisia": {},
          "Turkey": {},
          "Turkmenistan": {},
          "Turks and Caicos Islands": {},
          "Tuvalu": {},
          "United States of America": {},
          "Uganda": {},
          "Ukraine": {},
          "United Arab Emirates": {},
          "United Kingdom": {},
          "Uruguay": {},
          "Uzbekistan": {},
          "Vanuatu": {},
          "Venezuela": {},
          "Viet Nam": {},
          "Virgin Islands": {},
          "Wake Island": {},
          "Wallis and Futuna": {},
          "West Bank": {},
          "Western Sahara": {},
          "Yemen": {},
          "Zambia": {},
          "Zimbabwe": {}
        }
      },
      {
        "fieldName": "geo_loc_name (province/territory)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The province/territory where the sample was collected.",
        "guidance": "Provide the province/territory name from the controlled vocabulary provided.",
        "examples": "Saskatchewan",
        "exportField": {
          "CNPHI": [
            {
              "field": "Patient Province"
            }
          ]
        },
        "vocabulary": {
          "Alberta": {},
          "British Columbia": {},
          "Manitoba": {},
          "New Brunswick": {},
          "Newfoundland and Labrador": {},
          "Northwest Territories": {},
          "Nova Scotia": {},
          "Nunavut": {},
          "Ontario": {},
          "Prince Edward Island": {},
          "Quebec": {},
          "Saskatchewan": {},
          "Yukon Territory": {}
        }
      },
      {
        "fieldName": "geo_loc_name (city)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The city where the sample was collected.",
        "guidance": "Provide the city name. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz",
        "examples": "Medicine Hat"
      },
      {
        "fieldName": "organism",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "Taxonomic name of the organism.",
        "guidance": "Use \"Severe acute respiratory syndrome coronavirus 2\". This value is provided in the template.",
        "examples": "Severe acute respiratory syndrome coronavirus 2",
        "vocabulary": {
          "Severe acute respiratory syndrome coronavirus 2": {},
          "RaTG13": {},
          "RmYN02": {}
        }
      },
      {
        "fieldName": "isolate",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "Identifier of the specific isolate.",
        "guidance": "Provide the GISAID virus name, which should be written in the format \u201chCov-19/CANADA/xxxxx/2020\u201d.",
        "examples": "hCov-19/CANADA/prov_rona_99/2020",
        "exportField": {
          "GISAID": [
            {
              "field": "Virus name"
            }
          ],
          "CNPHI": [
            {
              "field": "GISAID Virus Name"
            }
          ]
        }
      },
      {
        "fieldName": "purpose of sampling",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The reason that the sample was collected.",
        "guidance": "The reason a sample was collected may provide information about potential biases in sampling strategy. Provide the purpose of sampling from the picklist in the template. Most likely, the sample was collected for Diagnostic testing. The reason why a sample was originally collected may differ from the reason why it was selected for sequencing, which should be indicated in the \"purpose of sequencing\" field. ",
        "examples": "Diagnostic testing",
        "exportField": {
          "CNPHI": [
            {
              "field": "Reason for Sampling"
            }
          ]
        },
        "vocabulary": {
          "Cluster investigation": {},
          "Diagnostic testing": {},
          "Research": {},
          "Surveillance testing": {},
          "Viral passage experiment": {}
        }
      },
      {
        "fieldName": "NML submitted specimen type",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The type of specimen submitted to the NML for testing.",
        "guidance": "Select the specimen type from the pick list provided.",
        "examples": "swab",
        "exportField": {
          "CNPHI": [
            {
              "field": "Specimen Type"
            }
          ]
        },
        "vocabulary": {
          "Swab": {},
          "RNA": {},
          "mRNA (cDNA)": {},
          "Nucleic acid": {}
        }
      },
      {
        "fieldName": "NML related specimen relationship type",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The relationship of the related specimen to the previous submission.",
        "guidance": "Provide the specimen type of the original sample submitted from the pick list provided, so that additional specimen testing can be tracked in the system.",
        "examples": "swab",
        "exportField": {
          "CNPHI": [
            {
              "field": "Related Specimen ID|Related Specimen Relationship Type"
            }
          ]
        },
        "vocabulary": {
          "Acute": {},
          "Convalescent": {},
          "Familial": {},
          "Follow-up": {},
          "Previously Submitted": {}
        }
      },
      {
        "fieldName": "anatomical material",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "A substance obtained from an anatomical part of an organism e.g. tissue, blood.",
        "guidance": "Provide a descriptor if an anatomical material was sampled. Use the picklist provided in the template. If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Blood",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "CNPHI": [
            {
              "field": "Anatomical Material"
            }
          ]
        },
        "vocabulary": {
          "Blood": {},
          "Fluid": {
            "Saliva": {},
            "Fluid (cerebrospinal (CSF))": {},
            "Fluid (pericardial)": {},
            "Fluid (pleural)": {},
            "Fluid (vaginal)": {},
            "Fluid (amniotic)": {}
          },
          "Tissue": {}
        }
      },
      {
        "fieldName": "anatomical part",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "An anatomical part of an organism e.g. oropharynx.",
        "guidance": "Provide a descriptor if an anatomical part was sampled. Use the picklist provided in the template. If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Nasopharynx (NP)",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "CNPHI": [
            {
              "field": "Anatomical Site"
            }
          ]
        },
        "vocabulary": {
          "Anus": {},
          "Buccal mucosa": {},
          "Duodenum": {},
          "Eye": {},
          "Intestine": {},
          "Rectum": {},
          "Skin": {},
          "Stomach": {},
          "Upper respiratory tract": {
            "Anterior Nares": {},
            "Esophagus": {},
            "Ethmoid sinus": {},
            "Nasal Cavity": {
              "Middle Nasal Turbinate": {},
              "Inferior Nasal Turbinate": {}
            },
            "Nasopharynx (NP)": {},
            "Oropharynx (OP)": {}
          },
          "Lower respiratory tract": {
            "Bronchus": {},
            "Lung": {
              "Bronchiole": {},
              "Alveolar sac": {}
            },
            "Pleural sac": {
              "Pleural cavity": {}
            },
            "Trachea": {}
          }
        }
      },
      {
        "fieldName": "body product",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "A substance excreted/secreted from an organism e.g. feces, urine, sweat.",
        "guidance": "Provide a descriptor if a body product was sampled. Use the picklist provided in the template.  If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Feces",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "CNPHI": [
            {
              "field": "Body Product"
            }
          ]
        },
        "vocabulary": {
          "Feces": {},
          "Urine": {},
          "Sweat": {},
          "Mucus": {
            "Sputum": {}
          },
          "Tear": {},
          "Fluid (seminal)": {},
          "Breast Milk": {}
        }
      },
      {
        "fieldName": "environmental material",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "A substance obtained from the natural or man-made environment e.g. soil, water, sewage.",
        "guidance": "Provide a descriptor if an environmental material was sampled. Use the picklist provided in the template.  If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Face mask",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "CNPHI": [
            {
              "field": "Environmental Material"
            }
          ]
        },
        "vocabulary": {
          "Air vent": {},
          "Banknote": {},
          "Bed rail": {},
          "Building floor": {},
          "Cloth": {},
          "Control panel": {},
          "Door": {},
          "Door handle": {},
          "Face mask": {},
          "Face shield": {},
          "Food": {},
          "Food packaging": {},
          "Glass": {},
          "Handrail": {},
          "Hospital gown": {},
          "Light switch": {},
          "Locker": {},
          "N95 mask": {},
          "Nurse call button": {},
          "Paper": {},
          "Plastic": {},
          "PPE gown": {},
          "Sewage": {},
          "Sink": {},
          "Soil": {},
          "Stainless steel": {},
          "Tissue paper": {},
          "Toilet bowl": {},
          "Water": {},
          "Window": {},
          "Wood": {}
        }
      },
      {
        "fieldName": "environmental site",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "An environmental location may describe a site in the natural or built environment e.g. contact surface, metal can, hospital, wet market, bat cave.",
        "guidance": "Provide a descriptor if an environmental site was sampled. Use the picklist provided in the template.  If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Building floor",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "CNPHI": [
            {
              "field": "Environmental Site"
            }
          ]
        },
        "vocabulary": {
          "Acute care facility": {},
          "Animal house": {},
          "Bathroom": {},
          "Clinical assessment centre": {},
          "Conference venue": {},
          "Corridor": {},
          "Daycare": {},
          "Emergency room (ER)": {},
          "Family practice clinic": {},
          "Group home": {},
          "Homeless shelter": {},
          "Hospital": {
            "Emergency Department": {},
            "ICU": {},
            "Ward": {}
          },
          "Intensive Care Unit (ICU)": {},
          "Long Term Care Facility": {},
          "Patient room": {},
          "Prison": {},
          "Production Facility": {},
          "School": {},
          "Sewage Plant": {},
          "Subway train": {},
          "Wet market": {}
        }
      },
      {
        "fieldName": "collection device",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The instrument or container used to collect the sample e.g. swab.",
        "guidance": "Provide a descriptor if a device was used for sampling. Use the picklist provided in the template. If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Swab",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "CNPHI": [
            {
              "field": "Specimen Collection Matrix"
            }
          ]
        },
        "vocabulary": {
          "Air filter": {},
          "Blood Collection Tube": {},
          "Bronchoscope": {},
          "Collection Container": {},
          "Collection Cup": {},
          "Fibrobronchoscope Brush": {},
          "Filter": {},
          "Fine Needle": {},
          "Microcapillary tube": {},
          "Micropipette": {},
          "Needle": {},
          "Serum Collection Tube": {},
          "Sputum Collection Tube": {},
          "Suction Catheter": {},
          "Swab": {},
          "Urine Collection Tube": {},
          "Virus Transport Medium": {}
        }
      },
      {
        "fieldName": "collection method",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The process used to collect the sample e.g. phlebotamy, necropsy.",
        "guidance": "Provide a descriptor if a collection method was used for sampling. Use the picklist provided in the template.  If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Bronchoalveolar lavage (BAL)",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "CNPHI": [
            {
              "field": "Collection Method"
            }
          ]
        },
        "vocabulary": {
          "Amniocentesis": {},
          "Aspiration": {
            "Suprapubic Aspiration": {},
            "Tracheal aspiration": {},
            "Vacuum Aspiration": {}
          },
          "Biopsy": {
            "Needle Biopsy": {}
          },
          "Filtration": {
            "Air filtration": {}
          },
          "Lavage": {
            "Bronchoalveolar lavage (BAL)": {},
            "Gastric Lavage": {}
          },
          "Lumbar Puncture": {},
          "Necropsy": {},
          "Phlebotomy": {},
          "Rinsing": {},
          "Scraping": {},
          "Swabbing": {
            "Finger Prick": {}
          },
          "Wash": {},
          "Washout Tear Collection": {}
        }
      },
      {
        "fieldName": "collection protocol",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name and version of a particular protocol used for sampling.",
        "guidance": "Free text.",
        "examples": "BCRonaSamplingProtocol v. 1.2"
      },
      {
        "fieldName": "specimen processing",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "multiple",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "Any processing applied to the sample during or after receiving the sample.",
        "guidance": "Critical for interpreting data. Select all the applicable processes from the pick list. If virus was passaged, include information in \"lab host\", \"passage number\", and \"passage method\" fields. If none of the processes in the pick list apply, put \"not applicable\".",
        "examples": "Virus passage",
        "exportField": {
          "GISAID": [
            {
              "field": "Passage details/history"
            }
          ]
        },
        "vocabulary": {
          "Virus passage": {},
          "RNA re-extraction (post RT-PCR)": {},
          "Specimens pooled": {}
        }
      },
      {
        "fieldName": "lab host",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "Name and description of the laboratory host used to propagate the source organism or material from which the sample was obtained.",
        "guidance": "Type of cell line used for propagation. Provide the name of the cell line using the picklist in the template. If not passaged, put \"not applicable\".",
        "examples": "Vero E6 cell line",
        "exportField": {
          "GISAID": [
            {
              "field": "Passage details/history"
            }
          ]
        },
        "vocabulary": {
          "293/ACE2 cell line": {},
          "Caco2 cell line": {},
          "Calu3 cell line": {},
          "EFK3B cell line": {},
          "HEK293T cell line": {},
          "HRCE cell line": {},
          "Huh7 cell line": {},
          "LLCMk2 cell line": {},
          "MDBK cell line": {},
          "Mv1Lu cell line": {},
          "NHBE cell line": {},
          "PK-15 cell line": {},
          "RK-13 cell line": {},
          "U251 cell line": {},
          "Vero cell line": {},
          "Vero E6 cell line": {},
          "VeroE6/TMPRSS2 cell line": {}
        }
      },
      {
        "fieldName": "passage number",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:nonNegativeInteger",
        "source": "",
        "dataStatus": [
          "Not Applicable"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "Number of passages.",
        "guidance": "Provide number of known passages. If not passaged, put \"not applicable\"",
        "examples": "3",
        "exportField": {
          "GISAID": [
            {
              "field": "Passage details/history"
            }
          ]
        }
      },
      {
        "fieldName": "passage method",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": [
          "Not Applicable"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "Description of how organism was passaged.",
        "guidance": "Free text. Provide a very short description (<10 words). If not passaged, put \"not applicable\".",
        "examples": "",
        "exportField": {
          "GISAID": [
            {
              "field": "Passage details/history"
            }
          ]
        }
      },
      {
        "fieldName": "biomaterial extracted",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The biomaterial extracted from samples for the purpose of sequencing.",
        "guidance": "Provide the biomaterial extracted from the picklist in the template.",
        "examples": "RNA (total)",
        "vocabulary": {
          "RNA (total)": {},
          "RNA (poly-A)": {},
          "RNA (ribo-depleted)": {},
          "mRNA (cDNA)": {}
        }
      }
    ]
  },
  {
    "fieldName": "Host Information",
    "children": [
      {
        "fieldName": "host (common name)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The commonly used name of the host.",
        "guidance": "Common name or scientific name are required if there was a host. Both can be provided, if known. Use terms from the pick lists in the template. Common name e.g. human, bat. If the sample was environmental, put \"not applicable.",
        "examples": "Human",
        "exportField": {
          "CNPHI": [
            {
              "field": "Animal Type"
            }
          ]
        },
        "vocabulary": {
          "Human": {},
          "Bat": {},
          "Cat": {},
          "Chicken": {},
          "Civets": {},
          "Cow": {},
          "Dog": {},
          "Lion": {},
          "Pangolin": {},
          "Pig": {},
          "Pigeon": {},
          "Tiger": {}
        }
      },
      {
        "fieldName": "host (scientific name)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The taxonomic, or scientific name of the host.",
        "guidance": "Common name or scientific name are required if there was a host. Both can be provided, if known. Use terms from the pick lists in the template. Scientific name e.g. Homo sapiens, If the sample was environmental, put \"not applicable",
        "examples": "Homo sapiens",
        "exportField": {
          "GISAID": [
            {
              "field": "Host"
            }
          ]
        },
        "vocabulary": {
          "Homo sapiens": {},
          "Bos taurus": {},
          "Canis lupus familiaris": {},
          "Chiroptera": {},
          "Columbidae": {},
          "Felis catus": {},
          "Gallus gallus": {},
          "Manis": {},
          "Manis javanica": {},
          "Panthera leo": {},
          "Panthera tigris": {},
          "Rhinolophidae": {},
          "Rhinolophus affinis": {},
          "Sus scrofa domesticus": {},
          "Viverridae": {}
        }
      },
      {
        "fieldName": "host health state",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Health status of the host at the time of sample collection.",
        "guidance": "If known, select a descriptor from the pick list provided in the template.",
        "examples": "Symptomatic",
        "exportField": {
          "GISAID": [
            {
              "field": "Patient status"
            }
          ],
          "CNPHI": [
            {
              "field": "Host Health State"
            }
          ]
        },
        "vocabulary": {
          "Asymptomatic": {},
          "Deceased": {},
          "Healthy": {},
          "Recovered": {},
          "Symptomatic": {}
        }
      },
      {
        "fieldName": "host health status details",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Further details pertaining to the health or disease status of the host at time of collection.",
        "guidance": "If known, select a descriptor from the pick list provided in the template.",
        "examples": "Hospitalized (ICU)",
        "exportField": {
          "CNPHI": [
            {
              "field": "Host Health State Details"
            }
          ]
        },
        "vocabulary": {
          "Hospitalized": {
            "Hospitalized (Non-ICU)": {},
            "Hospitalized (ICU)": {}
          },
          "Mechanical Ventilation": {},
          "Medically Isolated": {
            "Medically Isolated (Negative Pressure)": {}
          },
          "Self-quarantining": {}
        }
      },
      {
        "fieldName": "host health outcome",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Disease outcome in the host.",
        "guidance": "If known, select a descriptor from the pick list provided in the template.",
        "examples": "Recovered",
        "vocabulary": {
          "Deceased": {},
          "Deteriorating": {},
          "Recovered": {},
          "Stable": {}
        }
      },
      {
        "fieldName": "host disease",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The name of the disease experienced by the host.",
        "guidance": "Select \"COVID-19\" from the pick list provided in the template.",
        "examples": "COVID-19",
        "exportField": {
          "CNPHI": [
            {
              "field": "Host Disease"
            }
          ]
        },
        "vocabulary": {
          "COVID-19": {}
        }
      },
      {
        "fieldName": "host age",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:decimal",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "0",
        "xs:maxInclusive": "130",
        "requirement": "required",
        "description": "Age of host at the time of sampling.",
        "guidance": "Enter the age of the host in years. If not available, provide a null value. If there is not host, put \"Not Applicable\".",
        "examples": "79",
        "exportField": {
          "GISAID": [
            {
              "field": "Patient age"
            }
          ],
          "CNPHI": [
            {
              "field": "Patient Age"
            }
          ]
        }
      },
      {
        "fieldName": "host age unit",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The unit used to measure the host age, in either months or years.",
        "guidance": "Indicate whether the host age is in months or years. Age indicated in months will be binned to the 0 - 9 year age bin. ",
        "examples": "",
        "vocabulary": {
          "month": {},
          "year": {}
        }
      },
      {
        "fieldName": "host age bin",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "Age of host at the time of sampling, expressed as an age group.",
        "guidance": "Select the corresponding host age bin from the pick list provided in the template. If not available, provide a null value.",
        "examples": "60 - 69",
        "exportField": {
          "CNPHI": [
            {
              "field": "Host Age Category"
            }
          ]
        },
        "vocabulary": {
          "0 - 9": {},
          "10 - 19": {},
          "20 - 29": {},
          "30 - 39": {},
          "40 - 49": {},
          "50 - 59": {},
          "60 - 69": {},
          "70 - 79": {},
          "80 - 89": {},
          "90 - 99": {},
          "100+": {}
        }
      },
      {
        "fieldName": "host gender",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The gender of the host at the time of sample collection.",
        "guidance": "Select the corresponding host gender from the pick list provided in the template. If not available, provide a null value. If there is no host, put \"Not Applicable\".",
        "examples": "male",
        "exportField": {
          "GISAID": [
            {
              "field": "Gender"
            }
          ],
          "CNPHI": [
            {
              "field": "Patient Sex"
            }
          ]
        },
        "vocabulary": {
          "Female": {},
          "Male": {},
          "Non-binary gender": {},
          "Transgender": {},
          "Undeclared": {}
        }
      },
      {
        "fieldName": "host origin geo_loc name (country)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "geo_loc_name (country)",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The country of residence of the host.",
        "guidance": "Select the country name from pick list provided in the template.",
        "examples": "United Kingdom",
        "vocabulary": {}
      },
      {
        "fieldName": "host subject ID",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "A unique identifier by which each host can be referred to e.g. #131",
        "guidance": "Provide the host identifier. Should be a unique, user-defined identifier.",
        "examples": "BCxy123"
      },
      {
        "fieldName": "symptom onset date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The date on which the symptoms began or were first noted.",
        "guidance": "ISO 8601 standard \"YYYY-MM-DD\".",
        "examples": "2020-03-16",
        "exportField": {
          "CNPHI": [
            {
              "field": "Symptoms Onset Date"
            }
          ]
        }
      },
      {
        "fieldName": "signs and symptoms",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "multiple",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "A perceived change in function or sensation, (loss, disturbance or appearance) indicative of a disease, reported by a patient or clinician.",
        "guidance": "Select all of the symptoms experienced by the host from the pick list.",
        "examples": "Cough; Fever; Chills",
        "exportField": {
          "CNPHI": [
            {
              "field": "Symptoms"
            }
          ]
        },
        "vocabulary": {
          "Abnormal lung ausculation": {},
          "Abnormality of taste sensation": {
            "Ageusia (complete loss of taste)": {},
            "Parageusia (distorted sense of taste)": {},
            "Hypogeusia (reduced sense of taste)": {}
          },
          "Abnormality of the sense of smell": {
            "Anosmia (lost sense of smell)": {},
            "Hyposmia (reduced sense of smell)": {}
          },
          "Acute Respiratory Distress Syndrome": {},
          "Altered mental status": {
            "Cognitive impairment": {},
            "Coma": {},
            "Confusion": {
              "Delirium (sudden severe confusion)": {}
            },
            "Inability to arouse (inability to stay awake)": {},
            "Irritability": {},
            "Loss of speech": {}
          },
          "Arrhythmia": {},
          "Asthenia (general weakness)": {},
          "Chest tightness or pressure": {
            "Rigors (fever shakes)": {}
          },
          "Chills (sudden cold sensation)": {},
          "Conjunctival injection": {},
          "Conjunctivitis (pink eye)": {},
          "Coryza": {},
          "Cough": {
            "Nonproductive cough (dry cough)": {},
            "Productive cough (wet cough)": {}
          },
          "Cyanosis": {
            "Acrocyanosis": {
              "Circumoral cyanosis (bluish around mouth)": {},
              "Cyanotic face (bluish face)": {}
            },
            "Central Cyanosis": {
              "Cyanotic lips (bluish lips)": {}
            },
            "Peripheral Cyanosis": {}
          },
          "Dyspnea (breathing difficulty)": {},
          "Diarrhea (watery stool)": {},
          "Dry gangrene": {},
          "Encephalitis (brain inflammation)": {},
          "Encephalopathy": {},
          "Fatigue (tiredness)": {},
          "Fever": {
            "Fever (>=38\u00b0C)": {}
          },
          "Glossitis (inflammation of the tongue)": {},
          "Ground Glass Opacities (GGO)": {},
          "Headache": {},
          "Hemoptysis (coughing up blood)": {},
          "Hypocapnia": {},
          "Hypotension (low blood pressure)": {},
          "Hypoxemia (low blood oxygen)": {},
          "Silent hypoxemia": {},
          "Internal hemorrhage (internal bleeding)": {},
          "Loss of Fine Movements": {},
          "Low appetite": {},
          "Malaise (general discomfort/unease)": {},
          "Meningismus/nuchal rigidity": {},
          "Muscle weakness": {},
          "Nasal obstruction (stuffy nose)": {},
          "Nausea": {},
          "nose bleed": {},
          "otitis": {},
          "Pain": {
            "Abdominal pain": {},
            "Arthralgia (painful joints)": {},
            "Chest pain": {
              "Pleuritic chest pain": {}
            },
            "Myalgia (muscle pain)": {}
          },
          "Pharyngitis (sore throat)": {},
          "Pharyngeal exudate": {},
          "Pleural effusion": {},
          "Pneumonia": {},
          "Prostration": {},
          "Pseudo-chilblains": {
            "Pseudo-chilblains on fingers (covid fingers)": {},
            "Pseudo-chilblains on toes (covid toes)": {}
          },
          "Rash": {},
          "Rhinorrhea (runny nose)": {},
          "Seizure": {
            "Motor seizure": {}
          },
          "Shivering (involuntary muscle twitching)": {},
          "Slurred speech": {},
          "Sneezing": {},
          "Sputum Production": {},
          "Stroke": {},
          "Swollen Lymph Nodes": {},
          "Tachypnea (accelerated respiratory rate)": {},
          "Vertigo (dizziness)": {},
          "Vomiting (throwing up)": {}
        }
      },
      {
        "fieldName": "pre-existing conditions and risk factors",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "multiple",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Patient pre-existing conditions and risk factors.\nPre-existing condition: A medical condition that existed prior to the current infection.\nRisk Factor: A variable associated with an increased risk of disease or infection.",
        "guidance": "Select all of the pre-existing conditions and risk factors experienced by the host from the pick list. If the desired term is missing, contact the curation team.",
        "examples": "Asthma; Pregnancy; Smoker",
        "vocabulary": {
          "Age 60+": {},
          "Anemia": {},
          "Anorexia": {},
          "Birthing labor": {},
          "Bone marrow failure": {},
          "Cancer": {
            "Breast cancer": {},
            "Colorectal cancer": {},
            "Hematologic malignancy": {},
            "Lung cancer": {},
            "Metastatic disease": {}
          },
          "Cancer treatment": {
            "Cancer surgery": {},
            "Chemotherapy": {
              "Adjuvant chemotherapy": {}
            }
          },
          "Cardiac disorder": {
            "Arrhythmia": {},
            "Cardiac disease": {},
            "Cardiomyopathy": {},
            "Cardiac injury": {},
            "Hypertension (high blood pressure)": {},
            "Hypotension (low blood pressure)": {}
          },
          "Cesarean section": {},
          "Chronic cough": {},
          "Chronic gastrointestinal disease": {},
          "Chronic lung disease": {},
          "Corticosteroids": {},
          "Diabetes mellitus (diabetes)": {
            "Type I diabetes mellitus (T1D)": {},
            "Type II diabetes mellitus (T2D)": {}
          },
          "Eczema": {},
          "Electrolyte disturbance": {
            "Hypocalcemia": {},
            "Hypokalemia": {},
            "Hypomagnesemia": {}
          },
          "Encephalitis (brain inflammation)": {},
          "Epilepsy": {},
          "Hemodialysis": {},
          "Hemoglobinopathy": {},
          "Human immunodeficiency virus (HIV)": {
            "Acquired immunodeficiency syndrome (AIDS)": {},
            "HIV and antiretroviral therapy (ART)": {}
          },
          "Immunocompromised": {
            "Lupus": {}
          },
          "Inflammatory bowel disease (IBD)": {
            "Colitis": {
              "Ulcerative colitis": {}
            },
            "Crohn's disease": {}
          },
          "Renal disorder": {
            "Renal disease": {},
            "Chronic renal disease": {},
            "Renal failure": {}
          },
          "Liver disease": {
            "Chronic liver disease": {
              "Fatty liver disease (FLD)": {}
            }
          },
          "Myalgia (muscle pain)": {},
          "Myalgic encephalomyelitis (ME)": {},
          "Neurological disorder": {
            "Neuromuscular disorder": {}
          },
          "Obesity": {
            "Severe obesity": {}
          },
          "Respiratory disorder": {
            "Asthma": {},
            "Chronic bronchitis": {},
            "Chronic pulmonary disease": {
              "Chronic obstructive pulmonary disease": {}
            },
            "Emphysema": {},
            "Lung disease": {
              "Chronic lung disease": {},
              "Pulmonary fibrosis": {}
            },
            "Pneumonia": {},
            "Respiratory failure": {
              "Adult respiratory distress syndrome": {},
              "Newborn respiratory distress syndrome": {}
            },
            "Tuberculosis": {}
          },
          "Postpartum (\u22646 weeks)": {},
          "Pregnancy": {},
          "Rheumatic disease": {},
          "Sickle cell disease": {},
          "Substance use": {
            "Alcohol abuse": {},
            "Drug abuse": {
              "Injection drug abuse": {}
            },
            "Smoking": {},
            "Vaping": {}
          },
          "Tachypnea (accelerated respiratory rate)": {},
          "Transplant": {
            "Bone marrow transplant": {},
            "Cardiac transplant": {},
            "Hematopoietic stem cell transplant (HSCT)": {},
            "Kidney transplant": {},
            "Liver transplant": {}
          }
        }
      },
      {
        "fieldName": "complications",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "multiple",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Patient medical complications that are believed to have occurred as a result of host disease.",
        "guidance": "Select all of the complications experienced by the host from the pick list. If the desired term is missing, contact the curation team.",
        "examples": "Acute Respiratory Failure; Coma; Septicemia",
        "vocabulary": {
          "Abnormal blood oxygen level": {},
          "Acute respiratory failure": {},
          "Arrhythmia (complication)": {
            "Tachycardia": {
              "Polymorphic ventricular tachycardia (VT)": {},
              "Tachyarrhythmia": {}
            }
          },
          "Noncardiogenic pulmonary edema": {
            "Acute respiratory distress syndrome (ARDS)": {
              "COVID-19 associated ARDS (CARDS)": {},
              "Neurogenic pulmonary edema (NPE)": {}
            }
          },
          "Cardiac injury": {},
          "Cardiac arrest": {},
          "Cardiogenic shock": {},
          "Blood clot": {
            "Arterial clot": {},
            "Deep vein thrombosis (DVT)": {},
            "Pulmonary embolism (PE)": {}
          },
          "Cardiomyopathy": {},
          "Central nervous system invasion": {},
          "Stroke (complication)": {
            "Central Nervous System Vasculitis": {},
            "Ischemic stroke": {
              "Acute ischemic stroke": {}
            }
          },
          "Coma": {},
          "Convulsions": {},
          "COVID-19 associated coagulopathy (CAC)": {},
          "Cystic fibrosis": {},
          "Cytokine release syndrome": {},
          "Disseminated intravascular coagulation (DIC)": {},
          "Encephalopathy": {},
          "Fulminant myocarditis": {},
          "Guillain-Barr\u00e9 syndrome": {},
          "Internal hemorrhage (complication; internal bleeding)": {
            "Intracerebral haemorrhage": {}
          },
          "Kawasaki disease": {
            "Typical Kawasaki disease": {},
            "Incomplete Kawasaki disease": {}
          },
          "Kidney injury": {
            "Acute kidney injury": {}
          },
          "Liver dysfunction": {},
          "Liver injury": {
            "Acute liver injury": {}
          },
          "Lung injury": {
            "Acute lung injury": {}
          },
          "Meningitis": {},
          "Migraine": {},
          "Miscarriage": {},
          "Multisystem inflammatory syndrome in children (MIS-C)": {},
          "Muscle injury": {},
          "Myalgic encephalomyelitis (ME)": {},
          "Myocardial infarction (heart attack)": {
            "Acute myocardial infarction": {},
            "Elevation myocardial infarction": {},
            "ST-segment elevation myocardial infarction": {}
          },
          "Myocardial injury": {},
          "Neonatal complications": {},
          "Organ failure": {
            "Heart failure": {},
            "Liver failure": {}
          },
          "Paralysis": {},
          "Pneumothorax (collapsed lung)": {
            "Spontaneous pneumothorax": {},
            "Spontaneous tension pneymothorax": {}
          },
          "Pneumonia (complication)": {
            "COVID-19 pneumonia": {}
          },
          "Pregancy complications": {},
          "Rhabdomyolysis": {},
          "Secondary infection": {
            "Secondary staph infection": {},
            "Secondary strep infection": {}
          },
          "Seizure (complication)": {
            "Motor seizure": {}
          },
          "Sepsis": {},
          "Septicemia": {},
          "Shock": {
            "Hyperinflammatory shock": {},
            "Refractory cardiogenic shock": {},
            "Refractory cardiogenic plus vasoplegic shock": {},
            "Septic shock": {}
          },
          "Vasculitis": {},
          "Ventilation induced lung injury (VILI)": {}
        }
      }
    ]
  },
  {
    "fieldName": "Host exposure information",
    "children": [
      {
        "fieldName": "location of exposure geo_loc name (country)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "geo_loc_name (country)",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The country where the host was likely exposed to the causative agent of the illness.",
        "guidance": "Select the country name from pick list provided in the template.",
        "examples": "Canada",
        "vocabulary": {}
      },
      {
        "fieldName": "destination of most recent travel (city)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the city that was the destination of most recent travel.",
        "guidance": "Provide the name of the city that the host travelled to. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz",
        "examples": "New York City",
        "exportField": {
          "CNPHI": [
            {
              "field": "Country of Travel|Province of Travel|City of Travel|Travel start date|Travel End Date"
            }
          ]
        }
      },
      {
        "fieldName": "destination of most recent travel (state/province/territory)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the province that was the destination of most recent travel.",
        "guidance": "Provide the name of the state/province/territory that the host travelled to. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz",
        "examples": "California",
        "exportField": {
          "CNPHI": [
            {
              "field": "Country of Travel|Province of Travel|City of Travel|Travel start date|Travel End Date"
            }
          ]
        }
      },
      {
        "fieldName": "destination of most recent travel (country)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "geo_loc_name (country)",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the country that was the destination of most recent travel.",
        "guidance": "Provide the name of the country that the host travelled to. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz",
        "examples": "United Kingdom",
        "exportField": {
          "CNPHI": [
            {
              "field": "Country of Travel|Province of Travel|City of Travel|Travel start date|Travel End Date"
            }
          ]
        },
        "vocabulary": {}
      },
      {
        "fieldName": "most recent travel departure date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The date of a person's most recent departure from their primary residence (at that time) on a journey to one or more other locations.",
        "guidance": "Provide the travel departure date.",
        "examples": "2020-03-16",
        "exportField": {
          "CNPHI": [
            {
              "field": "Country of Travel|Province of Travel|City of Travel|Travel start date|Travel End Date"
            }
          ]
        }
      },
      {
        "fieldName": "most recent travel return date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The date of a person's most recent return to some residence from a journey originating at that residence.",
        "guidance": "Provide the travel return date.",
        "examples": "2020-04-26",
        "exportField": {
          "CNPHI": [
            {
              "field": "Country of Travel|Province of Travel|City of Travel|Travel start date|Travel End Date"
            }
          ]
        }
      },
      {
        "fieldName": "travel history",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Travel outside the country in last six months.",
        "guidance": "Specify the countries (and more granular locations if known, separated by a comma) travelled in the last six months; can include multiple travels. Separate multiple travel events with a semi-colon. List most recent travel first.",
        "examples": "Canada, Vancouver; USA, Seattle; Italy, Milan"
      },
      {
        "fieldName": "exposure event",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Event leading to exposure.",
        "guidance": "Select an exposure event from the pick list provided in the template. If the desired term is missing, contact the curation team.",
        "examples": "Mass gathering (convention)",
        "exportField": {
          "GISAID": [
            {
              "field": "Additional location information"
            }
          ],
          "CNPHI": [
            {
              "field": "Exposure Event"
            }
          ]
        },
        "vocabulary": {
          "Mass Gathering": {
            "Convention": {},
            "Convocation": {},
            "Agricultural Event": {}
          },
          "Religious Gathering": {
            "Mass": {}
          },
          "Social Gathering": {
            "Baby Shower": {},
            "Community Event": {},
            "Family Gathering": {
              "Family Reunion": {}
            },
            "Funeral": {},
            "Party": {},
            "Potluck": {},
            "Wedding": {}
          },
          "Other": {}
        }
      },
      {
        "fieldName": "direct/indirect exposure",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The exposure transmission contact type.",
        "guidance": "Select direct or indirect exposure from the pick-list.",
        "examples": "Direct",
        "vocabulary": {
          "Direct": {},
          "Indirect": {},
          "Unknown": {}
        }
      },
      {
        "fieldName": "host role",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "multiple",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The role of the host in relation to the exposure setting.",
        "guidance": "Select the host's personal role(s) from the pick list provided in the template. If the desired term is missing, contact the curation team.",
        "examples": "Patient",
        "vocabulary": {
          "Attendee": {
            "Student": {}
          },
          "Patient": {
            "Inpatient": {},
            "Outpatient": {}
          },
          "Passenger": {},
          "Resident": {},
          "Visitor": {},
          "Volunteer": {},
          "Work": {
            "Administrator": {},
            "First Responder": {
              "Firefighter": {},
              "Paramedic": {},
              "Police Officer": {}
            },
            "Housekeeper": {},
            "Kitchen Worker": {},
            "Laboratory Worker": {},
            "Nurse": {},
            "Personal Care Aid": {},
            "Pharmacist": {},
            "Physician": {},
            "Vet": {}
          },
          "Social role": {
            "Acquaintance": {},
            "Child": {},
            "Parent": {
              "Father": {},
              "Mother": {}
            },
            "Spouse": {}
          },
          "Other": {}
        }
      },
      {
        "fieldName": "exposure setting",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "multiple",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The setting leading to exposure.",
        "guidance": "Select the host exposure setting(s) from the pick list provided in the template. If a desired term is missing, contact the curation team.",
        "examples": "Healthcare Setting",
        "vocabulary": {
          "Human Exposure": {
            "Known COVID-19 Case": {},
            "Patient Contact": {},
            "Probable COVID-19 Case": {},
            "Person with Acute Respiratory Illness": {},
            "Person with Fever and/or Cough": {},
            "Person who Recently Travelled": {}
          },
          "Occupational or Residency Exposure": {
            "Abbatoir": {},
            "Animal Rescue": {},
            "Childcare": {
              "Daycare": {}
            },
            "Place of Worship": {
              "Church": {},
              "Mosque": {},
              "Temple": {}
            },
            "Nursery": {},
            "Household": {},
            "Community Service Centre": {},
            "Correctional Facility": {},
            "Dormitory": {},
            "Farm": {},
            "First Nations Reserve": {},
            "Group Home": {},
            "Healthcare Setting": {
              "Ambulance": {},
              "Acute Care Facility": {},
              "Clinic": {},
              "Community Health Centre": {},
              "Hospital": {},
              "Laboratory": {},
              "Long-Term Care Facility": {},
              "Pharmacy": {},
              "Physician's Office": {}
            },
            "Insecure Housing (Homeless)": {},
            "Office": {},
            "Outdoors": {
              "Camp/camping": {},
              "Hiking": {},
              "Hunting": {}
            },
            "Petting zoo": {},
            "Restaurant": {},
            "Retail Store": {},
            "School": {},
            "Temporary Residence": {
              "Homeless Shelter": {},
              "Hotel": {}
            },
            "Vet": {}
          },
          "Travel Exposure": {
            "Travelled": {},
            "Travelled on a Cruise Ship": {},
            "Travelled on a Plane": {},
            "Travelled on Ground Transport": {},
            "Travelled outside Province/Territory": {},
            "Travelled outside Canada": {}
          },
          "Other": {}
        }
      },
      {
        "fieldName": "exposure details",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Additional host exposure information.",
        "guidance": "Free text description of the exposure.",
        "examples": "Host role - Other: Bus Driver"
      }
    ]
  },
  {
    "fieldName": "Sequencing",
    "children": [
      {
        "fieldName": "purpose of sequencing",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The reason that the isolate was sequenced.",
        "guidance": "The reason an isolate was sequenced may provide information about potential biases in sequencing strategy. Provide the purpose of sequencing from the picklist in the template. Most likely, the sample was collected for Surveillance or Research. The reason why a sample was originally collected may differ from the reason why it was selected for sequencing. The reason for sample collection should be indicated in the \"purpose of sampling\" field. ",
        "examples": "Diagnostic testing",
        "vocabulary": {
          "Cluster investigation": {},
          "Diagnostic testing": {},
          "Research": {},
          "Surveillance testing": {},
          "Viral passage experiment": {}
        }
      },
      {
        "fieldName": "library ID",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "The user-specified identifier for the library prepared for sequencing.",
        "guidance": "The library name should be unique, and can be an autogenerated ID from your LIMS, or modification of the isolate ID.",
        "examples": "XYZ_123345"
      },
      {
        "fieldName": "library insert size",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The insert size of the library being sequenced (i.e. the length of the DNA inserted between the adaptors).",
        "guidance": "Provide the insert size in base pairs.",
        "examples": "300"
      },
      {
        "fieldName": "library preparation method",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the DNA library preparation kit used to generate the library being sequenced.",
        "guidance": "Provide the name of the library preparation kit used.",
        "examples": "Nextera XT"
      },
      {
        "fieldName": "MinIon barcode",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The barcode of the MinIon unit used for sequencing.",
        "guidance": "Provide the barcode of the MinIon used for sequencing the sample.",
        "examples": "FAB06069"
      },
      {
        "fieldName": "sequencing instrument",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "multiple",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The model of the sequencing instrument used.",
        "guidance": "Select a sequencing instrument from the picklist provided in the template.",
        "examples": "MinIon",
        "exportField": {
          "GISAID": [
            {
              "field": "Sequencing technology"
            }
          ]
        },
        "vocabulary": {
          "ILLUMINA": {
            "HiSeq X": {
              "HiSeq X Five": {},
              "HiSeq X Ten": {}
            },
            "Illumina Genome Analyzer": {
              "Illumina Genome Analyzer II": {},
              "Illumina Genome Analyzer IIx": {}
            },
            "Illumina HiScanSQ": {},
            "Illumina HiSeq 1000": {},
            "Illumina HiSeq 1500": {},
            "Illumina HiSeq 2000": {},
            "Illumina HiSeq 2500": {},
            "Illumina HiSeq 3000": {},
            "Illumina HiSeq 4000": {},
            "Illumina iSeq 100": {},
            "Illumina NovaSeq 6000": {},
            "Illumina MiniSeq": {},
            "Illumina MiSeq": {},
            "NextSeq 500": {},
            "NextSeq 550": {}
          },
          "Pacific Biosciences": {
            "PacBio RS": {},
            "PacBio RS II": {},
            "PacBio Sequel": {},
            "PacBio Sequel II": {}
          },
          "Ion Torrent": {
            "Ion Torrent PGM": {},
            "Ion Torrent Proton": {},
            "Ion Torrent S5 XL": {},
            "Ion Torrent S5": {}
          },
          "Oxford Nanopore": {
            "GridION": {},
            "MinION": {},
            "PromethION": {}
          },
          "BGI Genomics": {
            "BGISEQ-500": {}
          },
          "MGI": {
            "DNBSEQ-T7": {},
            "DNBSEQ-G400": {},
            "DNBSEQ-G400 FAST": {},
            "DNBSEQ-G50": {}
          }
        }
      },
      {
        "fieldName": "sequencing protocol name",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "The name and version number of the sequencing protocol used.",
        "guidance": "Provide the name and version of the sequencing protocol e.g. 1D_DNA_MinION",
        "examples": "1D_DNA_MinION, ARTIC Network Protocol v. 3",
        "exportField": {
          "CNPHI": [
            {
              "field": "Sequencing protocol name"
            }
          ]
        }
      },
      {
        "fieldName": "sequencing protocol source",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the organization/authors of the protocol.",
        "guidance": "Provide the name of the source of the protocol e.g. ARTIC Network.",
        "examples": "ARTIC Network"
      },
      {
        "fieldName": "sequencing kit number",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The manufacturer's kit number.",
        "guidance": "Alphanumeric value.",
        "examples": "AB456XYZ789"
      },
      {
        "fieldName": "amplicon pcr primers filename",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The filename of the file containing amplicon PCR primer names and sequences.",
        "guidance": "Important for documenting methods and should be considered for submission, particularly if primers were designed in-house and not by a public consortium/network.",
        "examples": "Rona_primers_2020.txt"
      },
      {
        "fieldName": "sample sequenced date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The date the sample was sequenced.",
        "guidance": "ISO 8601 standard \"YYYY-MM-DD\".",
        "examples": "2020-06-22"
      }
    ]
  },
  {
    "fieldName": "Bioinformatics and QC metrics",
    "children": [
      {
        "fieldName": "raw sequence data processing",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "The names of the software and version number used for raw data processing such as removing barcodes, adapter trimming, filtering etc.",
        "guidance": "Provide the software name followed by the version e.g. Trimmomatic v. 0.38, Porechop v. 0.2.3",
        "examples": "Porechop v. 0.2.3"
      },
      {
        "fieldName": "sequencing depth (average)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The total number of sequenced base pairs divided by the expected number of base pairs in the genome.",
        "guidance": "Provide the value as a fold of coverage.",
        "examples": "80x"
      },
      {
        "fieldName": "assembly name",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Name/version of the assembly provided by the submitter.",
        "guidance": "Provide the assembly name.",
        "examples": "rona123assembly.fasta"
      },
      {
        "fieldName": "assembly method",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name and version number of the assembly method used.",
        "guidance": "Provide the software name followed by the version e.g. Canu 2.0",
        "examples": "Canu 2.0"
      },
      {
        "fieldName": "assembly coverage breadth",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The percentage of the assembled genome that was sequenced to a prescribed depth of coverage.",
        "guidance": "Provide value as a percent e.g. 95%.",
        "examples": "95%"
      },
      {
        "fieldName": "assembly coverage depth",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The average number of reads representing a given nucleotide in the assembled sequence.",
        "guidance": "Provide value as a fold of coverage e.g. 80x.",
        "examples": "400x",
        "exportField": {
          "GISAID": [
            {
              "field": "Coverage"
            }
          ]
        }
      },
      {
        "fieldName": "r1 fastq filename",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "The user-specified filename of the r1 FASTQ file.",
        "guidance": "Provide the r1 FASTQ filename.",
        "examples": "ABC123_S1_L001_R1_001.fastq.gz"
      },
      {
        "fieldName": "r2 fastq filename",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "The user-specified filename of the r2 FASTQ file.",
        "guidance": "Provide the r2 FASTQ filename.",
        "examples": "ABC123_S1_L001_R2_001.fastq.gz"
      },
      {
        "fieldName": "r1 fastq filepath",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The location of the r1 FASTQ file within a user's file system.",
        "guidance": "Provide the filepath for the r1 FASTQ file. This information aids in data management. ",
        "examples": "/User/Documents/RespLab/Data"
      },
      {
        "fieldName": "r2 fastq filepath",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The location of the r2 FASTQ file within a user's file system.",
        "guidance": "Provide the filepath for the r2 FASTQ file. This information aids in data management. ",
        "examples": "/User/Documents/RespLab/Data"
      },
      {
        "fieldName": "fast5 filename",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The user-specified filename of the FAST5 file.",
        "guidance": "Provide the FAST5 filename.",
        "examples": "rona123assembly.fast5"
      },
      {
        "fieldName": "fast5 filepath",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The location of the FAST5 file within a user's file system.",
        "guidance": "Provide the filepath for the FAST5 file. This information aids in data management. ",
        "examples": "/User/Documents/RespLab/Data"
      },
      {
        "fieldName": "fasta filename",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The user-specified filename of the FASTA file.",
        "guidance": "Provide the FASTA filename.",
        "examples": "batch1a_sequences.fasta",
        "exportField": {
          "GISAID": [
            {
              "field": "FASTA filename"
            }
          ]
        }
      },
      {
        "fieldName": "fasta filepath",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The location of the FASTA file within a user's file system.",
        "guidance": "Provide the filepath for the FASTA file. This information aids in data management. ",
        "examples": "/User/Documents/RespLab/Data"
      },
      {
        "fieldName": "number base pairs",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:nonNegativeInteger",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The number of total base pairs generated by the sequencing process.",
        "guidance": "Provide a numerical value (no need to include units).",
        "examples": "387566"
      },
      {
        "fieldName": "consensus genome length",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:nonNegativeInteger",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Size of the reconstructed genome described as the number of base pairs.",
        "guidance": "Provide a numerical value (no need to include units).",
        "examples": "38677"
      },
      {
        "fieldName": "mean contig length",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:nonNegativeInteger",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The mean contig length is the count of base pairs in the average size contig of the sequence assembly.",
        "guidance": "Provide a numerical value (no need to include units).",
        "examples": "12689"
      },
      {
        "fieldName": "N50",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:nonNegativeInteger",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The minimum contig length needed to cover 50% of the genome.",
        "guidance": "Provide a numerical value (no need to include units).",
        "examples": "10500"
      },
      {
        "fieldName": "Ns per 100 kbp",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:decimal",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "0",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The number of N symbols present in the consensus fasta sequence, per 100kbp of sequence.",
        "guidance": "Provide a numerical value (no need to include units).",
        "examples": "330"
      },
      {
        "fieldName": "reference genome accession",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "A persistent, unique identifier of a genome database entry.",
        "guidance": "Provide the accession number of the reference genome.",
        "examples": "NC_045512.2"
      },
      {
        "fieldName": "consensus sequence ID",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The identifer used to specify the consensus sequence.",
        "guidance": "Provide the consensus sequence identifier.",
        "examples": "ProvConsensusSeq",
        "exportField": {
          "GISAID": [
            {
              "field": "Sample ID given by the submitting laboratory"
            }
          ]
        }
      },
      {
        "fieldName": "consensus sequence method",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The name and version number of the software used to produce the consensus sequence.",
        "guidance": "Provide the software name followed by the version e.g. iVar 1.2",
        "examples": "iVar 1.2",
        "exportField": {
          "GISAID": [
            {
              "field": "Assembly method"
            }
          ]
        }
      },
      {
        "fieldName": "consensus sequence filename",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The user-specified filename for the consensus sequence.",
        "guidance": "Provide the filename for the consensus sequence. ",
        "examples": "ProvConsensusSeq.fasta"
      },
      {
        "fieldName": "consensus sequence filepath",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The location of the consensus sequence in the user's file system.",
        "guidance": "Provide the filepath for the consensus sequence file. This information facilitates data management.",
        "examples": "/User/Documents/RespLab/Data"
      },
      {
        "fieldName": "annotation feature table filename",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The filename of the file containing genome features such as gene names and corresponding CDS.",
        "guidance": "Provide the filename of the annotation feature table.",
        "examples": "BCRonaAnnotationFeatures"
      },
      {
        "fieldName": "bioinformatics protocol",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name and version number of the bioinformatics protocol used.",
        "guidance": "Further details regarding the methods used to process raw data, and/or generate assemblies, and/or generate consensus sequences can be provided in an SOP or protocol. Provide the name and version number of the protocol.",
        "examples": "https://www.protocols.io/groups/cphln-sarscov2-sequencing-consortium/members"
      }
    ]
  },
  {
    "fieldName": "Pathogen diagnostic testing",
    "children": [
      {
        "fieldName": "gene name 1",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the gene used in the diagnostic RT-PCR test.",
        "guidance": "Provide the full name of the gene used in the test. The gene symbol (short form of gene name) can also be provided. Standardized gene names and symbols can be found in the Gene Ontology using this look-up service: https://bit.ly/2Sq1LbI",
        "examples": "E (orf4)",
        "exportField": {
          "CNPHI": [
            {
              "field": "Gene Target #1"
            }
          ]
        },
        "vocabulary": {
          "E (orf4)": {},
          "M (orf5)": {},
          "N (orf9)": {},
          "Spike (orf2)": {},
          "ORF1ab (rep)": {
            "ORF1a (pp1a)": {
              "nsp11": {}
            },
            "nsp1": {},
            "nsp2": {},
            "nsp3": {},
            "nsp4": {},
            "nsp5": {},
            "nsp6": {},
            "nsp7": {},
            "nsp8": {},
            "nsp9": {},
            "nsp10": {},
            "nsp12 (RdRp)": {},
            "nsp13 (Hel)": {},
            "nsp14 (ExoN)": {},
            "nsp15": {},
            "nsp16": {}
          },
          "ORF3a": {},
          "ORF3b": {},
          "ORF6 (ns6)": {},
          "ORF7a": {},
          "ORF7b (ns7b)": {},
          "ORF8 (ns8)": {},
          "ORF9b": {},
          "ORF9c": {},
          "ORF10": {},
          "ORF14": {}
        }
      },
      {
        "fieldName": "diagnostic pcr protocol 1",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name and version number of the protocol used for diagnostic marker amplification.",
        "guidance": "The name and version number of the protocol used for carrying out a diagnostic PCR test. This information can be compared to sequence data for evaluation of performance and quality control.",
        "examples": "EGenePCRTest 2"
      },
      {
        "fieldName": "diagnostic pcr Ct value 1",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The Ct value result from a diagnostic SARS-CoV-2 RT-PCR test.",
        "guidance": "Provide the CT value of the sample from the diagnostic RT-PCR test.",
        "examples": "21",
        "exportField": {
          "CNPHI": [
            {
              "field": "Gene Target #1 CT Value"
            }
          ]
        }
      },
      {
        "fieldName": "gene name 2",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "gene name 1",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the gene used in the diagnostic RT-PCR test.",
        "guidance": "Provide the full name of another gene used in an RT-PCR test. The gene symbol (short form of gene name) can also be provided. Standardized gene names and symbols can be found in the Gene Ontology using this look-up service: https://bit.ly/2Sq1LbI",
        "examples": "nsp12 (RdRp)",
        "exportField": {
          "CNPHI": [
            {
              "field": "Gene Target #2"
            }
          ]
        },
        "vocabulary": {}
      },
      {
        "fieldName": "diagnostic pcr protocol 2",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name and version number of the protocol used for diagnostic marker amplification.",
        "guidance": "The name and version number of the protocol used for carrying out a second diagnostic PCR test. This information can be compared to sequence data for evaluation of performance and quality control.",
        "examples": "RdRpGenePCRTest 3"
      },
      {
        "fieldName": "diagnostic pcr Ct value 2",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The Ct value result from a diagnostic SARS-CoV-2 RT-PCR test.",
        "guidance": "Provide the CT value of the sample from the second diagnostic RT-PCR test.",
        "examples": "36",
        "exportField": {
          "CNPHI": [
            {
              "field": "Gene Target #2 CT Value"
            }
          ]
        }
      }
    ]
  },
  {
    "fieldName": "Contributor acknowledgement",
    "children": [
      {
        "fieldName": "authors",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "Names of individuals contributing to the processes of sample collection, sequence generation, analysis, and data submission.",
        "guidance": "Include the first and last names of all individuals that should be attributed, separated by a comma.",
        "examples": "Tejinder Singh, Fei Hu, Joe Blogs",
        "exportField": {
          "GISAID": [
            {
              "field": "Authors"
            }
          ]
        }
      },
      {
        "fieldName": "DataHarmonizer provenance",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "provenance",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "",
        "guidance": "",
        "examples": "",
        "exportField": {
          "GISAID": [
            {
              "field": "DataHarmonizer provenance"
            }
          ]
        }
      }
    ]
  }
]