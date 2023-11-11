data =
{
    "meta" : {
      "view" : {
        "id" : "stmn-fdnc",
        "name" : "Greenhouse Gas Emissions",
        "assetType" : "dataset",
        "attribution" : "Montgomery County, MD",
        "averageRating" : 0,
        "category" : "Environment",
        "createdAt" : 1588715555,
        "description" : "The monthly Greenhouse Gas (GHG) emission data represents Montgomery County Facilities and Fleet by month beginning July 2019.  \nFacilities: The Facilities GHG data represents physical structures used by County residents and County staff who provide services for County residents. Examples include recreation, libraries, theater and arts, health and human services, liquor retail, courthouses, general services, maintenance facilities, correctional facilities, police stations, fire stations, volunteer fire stations, garages, parking lots, bus shelters and park & ride locations. Facilities use the following fuel sources: grid electricity, natural gas, propane and diesel fuel. \nFacilities GHG data DOES NOT include Montgomery County Public Schools, Montgomery College and Montgomery Parks Maryland-National Capital Park and Planning Commission (M-NCPPC). \nFleet: The Fleet GHG data represents Montgomery County vehicles used by County staff who provide services for County residents. Examples include mass transit buses, snowplows, liquor trucks, light duty trucks, police cars, fire engines and fire service equipment, etc. Each County  vehicle use different fuel sources (i.e. diesel, mobil diesel, compressed natural gas, unleaded and E-85).  \nFleet GHG data DOES NOT include Montgomery County Public School buses, Montgomery College and Montgomery Parks Maryland-National Capital Park and Planning Commission (M-NCPPC) vehicles. \nGHG Calculation Method: Facilities and Fleet fuel sources are converted into one common unit of energy- 1 Million British thermal units (MMBtu) which are then used with emissions factors and 100-year global warming potential (GWP) to calculate GHG emissions into one common unit of measure- Metric Tons of CO2 Equivalent (MTCO2e). \nFor more information go to: \n•\tHow to Calculate GHG emissions at https://www.youtube.com/watch?v=zq5wTjvLqnY&t=186s\n•\tEmissions & Generation Resource Integrated Database (eGRID) at https://www.epa.gov/energy/emissions-generation-resource-integrated-database-egrid\n•\tEmission Factors for GHG Inventories at https://www.epa.gov/sites/production/files/2018-03/documents/emission-factors_mar_2018_0.pdf\nUpdate Frequency : Monthly",
        "displayType" : "table",
        "downloadCount" : 3429,
        "hideFromCatalog" : false,
        "hideFromDataJson" : false,
        "licenseId" : "PUBLIC_DOMAIN",
        "newBackend" : true,
        "numberOfComments" : 0,
        "oid" : 34072774,
        "provenance" : "official",
        "publicationAppendEnabled" : false,
        "publicationDate" : 1588715602,
        "publicationGroup" : 17094154,
        "publicationStage" : "published",
        "rowsUpdatedAt" : 1697457709,
        "rowsUpdatedBy" : "uruq-macm",
        "tableId" : 17094154,
        "totalTimesRated" : 0,
        "viewCount" : 907,
        "viewLastModified" : 1680566304,
        "viewType" : "tabular",
        "approvals" : [ {
          "reviewedAt" : 1593090011,
          "reviewedAutomatically" : true,
          "state" : "approved",
          "submissionId" : 2361235,
          "submissionObject" : "public_audience_request",
          "submissionOutcome" : "change_audience",
          "submittedAt" : 1593090011,
          "targetAudience" : "public",
          "workflowId" : 2274,
          "submissionDetails" : {
            "permissionType" : "READ"
          },
          "submissionOutcomeApplication" : {
            "endedAt" : 1593090011,
            "failureCount" : 0,
            "startedAt" : 1593090011,
            "status" : "success"
          },
          "submitter" : {
            "id" : "qzhb-tftn",
            "displayName" : "Kathy Luh"
          }
        } ],
        "clientContext" : {
          "clientContextVariables" : [ ],
          "inheritedVariables" : { }
        },
        "columns" : [ {
          "id" : -1,
          "name" : "sid",
          "dataTypeName" : "meta_data",
          "fieldName" : ":sid",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : -1,
          "name" : "id",
          "dataTypeName" : "meta_data",
          "fieldName" : ":id",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : -1,
          "name" : "position",
          "dataTypeName" : "meta_data",
          "fieldName" : ":position",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : -1,
          "name" : "created_at",
          "dataTypeName" : "meta_data",
          "fieldName" : ":created_at",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : -1,
          "name" : "created_meta",
          "dataTypeName" : "meta_data",
          "fieldName" : ":created_meta",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : -1,
          "name" : "updated_at",
          "dataTypeName" : "meta_data",
          "fieldName" : ":updated_at",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : -1,
          "name" : "updated_meta",
          "dataTypeName" : "meta_data",
          "fieldName" : ":updated_meta",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : -1,
          "name" : "meta",
          "dataTypeName" : "meta_data",
          "fieldName" : ":meta",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : 465889898,
          "name" : "Month/Year",
          "dataTypeName" : "calendar_date",
          "description" : "Month and Year",
          "fieldName" : "month_year",
          "position" : 1,
          "renderTypeName" : "calendar_date",
          "tableColumnId" : 100727073,
          "cachedContents" : {
            "non_null" : "47",
            "largest" : "2023-07-01T00:00:00.000",
            "null" : "0",
            "top" : [ {
              "item" : "2020-04-01T00:00:00.000",
              "count" : "2"
            }, {
              "item" : "2023-07-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2021-06-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2020-05-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2023-04-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2023-02-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2023-05-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2020-07-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2019-11-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2022-03-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2020-11-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2020-10-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2022-06-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2020-08-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2022-05-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2022-01-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2023-03-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2021-12-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2022-07-01T00:00:00.000",
              "count" : "1"
            }, {
              "item" : "2021-09-01T00:00:00.000",
              "count" : "1"
            } ],
            "smallest" : "2019-07-01T00:00:00.000",
            "count" : "47",
            "cardinality" : "46"
          },
          "format" : {
            "view" : "date_shortmonthy"
          }
        }, {
          "id" : 465889899,
          "name" : "Facilities",
          "dataTypeName" : "number",
          "description" : "Facilities GHG emissions",
          "fieldName" : "facilities",
          "position" : 2,
          "renderTypeName" : "number",
          "tableColumnId" : 100727074,
          "cachedContents" : {
            "non_null" : "47",
            "largest" : "6284",
            "null" : "0",
            "top" : [ {
              "item" : "3990",
              "count" : "2"
            }, {
              "item" : "5160",
              "count" : "2"
            }, {
              "item" : "5736",
              "count" : "1"
            }, {
              "item" : "5665",
              "count" : "1"
            }, {
              "item" : "4031",
              "count" : "1"
            }, {
              "item" : "4152",
              "count" : "1"
            }, {
              "item" : "4820",
              "count" : "1"
            }, {
              "item" : "4617",
              "count" : "1"
            }, {
              "item" : "4851",
              "count" : "1"
            }, {
              "item" : "4160",
              "count" : "1"
            }, {
              "item" : "6238",
              "count" : "1"
            }, {
              "item" : "5614",
              "count" : "1"
            }, {
              "item" : "4273",
              "count" : "1"
            }, {
              "item" : "4159",
              "count" : "1"
            }, {
              "item" : "3856",
              "count" : "1"
            }, {
              "item" : "4586",
              "count" : "1"
            }, {
              "item" : "4768",
              "count" : "1"
            }, {
              "item" : "3945",
              "count" : "1"
            }, {
              "item" : "4312",
              "count" : "1"
            }, {
              "item" : "4337",
              "count" : "1"
            } ],
            "smallest" : "3486",
            "count" : "47",
            "cardinality" : "45"
          },
          "format" : {
            "noCommas" : "true"
          }
        }, {
          "id" : 465889900,
          "name" : "Fleet",
          "dataTypeName" : "number",
          "description" : "Fleet GHG emissions and Total GHG emissions",
          "fieldName" : "fleet",
          "position" : 3,
          "renderTypeName" : "number",
          "tableColumnId" : 100727075,
          "cachedContents" : {
            "non_null" : "47",
            "largest" : "6891",
            "null" : "0",
            "top" : [ {
              "item" : "4223",
              "count" : "1"
            }, {
              "item" : "5196",
              "count" : "1"
            }, {
              "item" : "3899",
              "count" : "1"
            }, {
              "item" : "4983",
              "count" : "1"
            }, {
              "item" : "4838",
              "count" : "1"
            }, {
              "item" : "4584",
              "count" : "1"
            }, {
              "item" : "4106",
              "count" : "1"
            }, {
              "item" : "4528",
              "count" : "1"
            }, {
              "item" : "4423",
              "count" : "1"
            }, {
              "item" : "2410",
              "count" : "1"
            }, {
              "item" : "4319",
              "count" : "1"
            }, {
              "item" : "4246",
              "count" : "1"
            }, {
              "item" : "4174",
              "count" : "1"
            }, {
              "item" : "4370",
              "count" : "1"
            }, {
              "item" : "4884",
              "count" : "1"
            }, {
              "item" : "4154",
              "count" : "1"
            }, {
              "item" : "4658",
              "count" : "1"
            }, {
              "item" : "2433",
              "count" : "1"
            }, {
              "item" : "4183",
              "count" : "1"
            }, {
              "item" : "4596",
              "count" : "1"
            } ],
            "smallest" : "2410",
            "count" : "47",
            "cardinality" : "47"
          },
          "format" : {
            "noCommas" : "true"
          }
        }, {
          "id" : 465889901,
          "name" : "Total",
          "dataTypeName" : "number",
          "description" : "GHG emissions are represented in Metric Tons of CO2 Equivalent (MTCO2e)",
          "fieldName" : "total",
          "position" : 4,
          "renderTypeName" : "number",
          "tableColumnId" : 100727076,
          "cachedContents" : {
            "non_null" : "47",
            "largest" : "11267",
            "null" : "0",
            "top" : [ {
              "item" : "11214",
              "count" : "1"
            }, {
              "item" : "7905",
              "count" : "1"
            }, {
              "item" : "9339",
              "count" : "1"
            }, {
              "item" : "10203",
              "count" : "1"
            }, {
              "item" : "9406",
              "count" : "1"
            }, {
              "item" : "10514",
              "count" : "1"
            }, {
              "item" : "8563",
              "count" : "1"
            }, {
              "item" : "10345",
              "count" : "1"
            }, {
              "item" : "6833",
              "count" : "1"
            }, {
              "item" : "9435",
              "count" : "1"
            }, {
              "item" : "9244",
              "count" : "1"
            }, {
              "item" : "8040",
              "count" : "1"
            }, {
              "item" : "10397",
              "count" : "1"
            }, {
              "item" : "8686",
              "count" : "1"
            }, {
              "item" : "9870",
              "count" : "1"
            }, {
              "item" : "8007",
              "count" : "1"
            }, {
              "item" : "9423",
              "count" : "1"
            }, {
              "item" : "8204",
              "count" : "1"
            }, {
              "item" : "9968",
              "count" : "1"
            }, {
              "item" : "8251",
              "count" : "1"
            } ],
            "smallest" : "6400",
            "count" : "47",
            "cardinality" : "47"
          },
          "format" : {
            "noCommas" : "true"
          }
        } ],
        "grants" : [ {
          "inherited" : false,
          "type" : "viewer",
          "flags" : [ "public" ]
        } ],
        "license" : {
          "name" : "Public Domain"
        },
        "metadata" : {
          "jsonQuery" : {
            "order" : [ {
              "columnFieldName" : "month_year",
              "ascending" : false
            } ]
          },
          "custom_fields" : {
            "Dataset Information" : {
              "Departments" : "General Services, Department of",
              "Update Frequency" : "Monthly"
            }
          },
          "availableDisplayTypes" : [ "table", "fatrow", "page" ],
          "renderTypeConfig" : {
            "visible" : {
              "table" : true
            }
          }
        },
        "owner" : {
          "id" : "uruq-macm",
          "displayName" : "svc dmesb",
          "screenName" : "svc dmesb",
          "type" : "interactive",
          "flags" : [ "acceptedEula", "mayBeStoriesCoOwner" ]
        },
        "query" : {
          "orderBys" : [ {
            "ascending" : false,
            "expression" : {
              "columnId" : 465889898,
              "type" : "column"
            }
          } ]
        },
        "rights" : [ "read" ],
        "tableAuthor" : {
          "id" : "uruq-macm",
          "displayName" : "svc dmesb",
          "screenName" : "svc dmesb",
          "type" : "interactive",
          "flags" : [ "acceptedEula", "mayBeStoriesCoOwner" ]
        },
        "tags" : [ "estimated", "greenhouse", "gas", "emissions", "climate", "carbondioxide" ],
        "flags" : [ "default", "ownerMayBeContacted", "restorable", "restorePossibleForType" ]
      }
    },
    "data" : [ [ "row-x77k-c866_xg6t", "00000000-0000-0000-1C22-501011EF8C2E", 0, 1605531715, null, 1605531715, null, "{ }", "2020-08-01T00:00:00", "4617", "3946", "8563" ]
  , [ "row-7ddd_7zs4.4s3r", "00000000-0000-0000-2A59-CD2A025BF8CC", 0, 1610802113, null, 1610802113, null, "{ }", "2020-10-01T00:00:00", "4337", "4140", "8477" ]
  , [ "row-xp95~hjy9~ph3h", "00000000-0000-0000-C3EF-B5B360893C14", 0, 1613480513, null, 1613480513, null, "{ }", "2020-11-01T00:00:00", "4681", "4017", "8686" ]
  , [ "row-946a_ci7h-sr48", "00000000-0000-0000-4427-1D4420BEFBEB", 0, 1615896112, null, 1615896112, null, "{ }", "2020-12-01T00:00:00", "6195", "4319", "10514" ]
  , [ "row-z7rf~h49n_hhxv", "00000000-0000-0000-9662-69ED7128397A", 0, 1618574512, null, 1618574512, null, "{ }", "2021-01-01T00:00:00", "6011", "4192", "10203" ]
  , [ "row-s65f~5ait-757d", "00000000-0000-0000-8395-D6D5B0D9A795", 0, 1621166513, null, 1621166513, null, "{ }", "2021-02-01T00:00:00", "5736", "4170", "9906" ]
  , [ "row-yctn_3tt7~66e4", "00000000-0000-0000-67F1-16553458AD70", 0, 1623844914, null, 1623844914, null, "{ }", "2021-03-01T00:00:00", "4774", "4106", "8880" ]
  , [ "row-tkap~4atm-sbt4", "00000000-0000-0000-7B25-5E81801B5DB0", 0, 1627646663, null, 1627646663, null, "{ }", "2021-04-01T00:00:00", "4273", "3978", "8251" ]
  , [ "row-mwua_h7zw.thyv", "00000000-0000-0000-6535-2B36E074529D", 0, 1629211062, null, 1629211062, null, "{ }", "2021-05-01T00:00:00", "3856", "4049", "7905" ]
  , [ "row-dxxk.pxu6-qyma", "00000000-0000-0000-7A42-9DB02F748475", 0, 1631793714, null, 1631793714, null, "{ }", "2021-06-01T00:00:00", "4392", "4146", "8538" ]
  , [ "row-z868.v949~2t5j", "00000000-0000-0000-EC3D-64650605165C", 0, 1634385715, null, 1634385715, null, "{ }", "2021-07-01T00:00:00", "4258", "4069", "8327" ]
  , [ "row-xnmx.xtbr-3a2n", "00000000-0000-0000-CAC2-95516E9969AF", 0, 1639659862, null, 1639659862, null, "{ }", "2021-09-01T00:00:00", "4152", "4223", "8375" ]
  , [ "row-pesz-zzwz.bbqx", "00000000-0000-0000-9DAB-5FC293BD4824", 0, 1642338113, null, 1642338113, null, "{ }", "2021-10-01T00:00:00", "3945", "4221", "8007" ]
  , [ "row-p4rw_aifa-hy7t", "00000000-0000-0000-6A5B-3243886ABCD8", 0, 1645016514, null, 1645016514, null, "{ }", "2021-11-01T00:00:00", "4851", "4584", "9435" ]
  , [ "row-yyqv~u4i3~svk4", "00000000-0000-0000-BCE1-A4879BD8808C", 0, 1647432116, null, 1647432116, null, "{ }", "2021-12-01T00:00:00", "5614", "4354", "9968" ]
  , [ "row-p7ub~9bgz-96kr", "00000000-0000-0000-D4C9-8EF14878387F", 0, 1650110515, null, 1650110515, null, "{ }", "2022-01-01T00:00:00", "6028", "4596", "10624" ]
  , [ "row-hjvw.xxrs~5muj", "00000000-0000-0000-44FB-4E0935C216BE", 0, 1655380912, null, 1655380912, null, "{ }", "2022-03-01T00:00:00", "4684", "5196", "9880" ]
  , [ "row-pnym-iru6_84xa", "00000000-0000-0000-3656-1206210D1C1F", 0, 1657972914, null, 1657972914, null, "{ }", "2022-04-01T00:00:00", "4031", "4004", "8035" ]
  , [ "row-fbax_p5pt-fhyh", "00000000-0000-0000-DA9D-E747E74283B3", 0, 1660651315, null, 1660651315, null, "{ }", "2022-05-01T00:00:00", "4005", "4727", "8732" ]
  , [ "row-y3st-6eh4.ykm6", "00000000-0000-0000-E8C1-2D34D7DA3699", 0, 1598975407, null, 1598975407, null, "{ }", "2019-10-01T00:00:00", "4820", "4183", "9003" ]
  , [ "row-sqpf.vzss-j8t8", "00000000-0000-0000-13E0-10DBC5595AAC", 0, 1598975407, null, 1598975407, null, "{ }", "2019-12-01T00:00:00", "6238", "4976", "11214" ]
  , [ "row-bdtc_cjqg~2qgd", "00000000-0000-0000-F82B-ED74A690F994", 0, 1598975407, null, 1598975407, null, "{ }", "2019-07-01T00:00:00", "5166", "5133", "10299" ]
  , [ "row-w6d6.7ga4_6swa", "00000000-0000-0000-399D-67B645766365", 0, 1598975407, null, 1598975407, null, "{ }", "2019-11-01T00:00:00", "5507", "4838", "10345" ]
  , [ "row-qccc_ztbn~2j8q", "00000000-0000-0000-D0A7-6096E4D8F90C", 0, 1598975407, null, 1598975407, null, "{ }", "2019-08-01T00:00:00", "5160", "5237", "10397" ]
  , [ "row-ywpy.nie3~2yrb", "00000000-0000-0000-A264-83A69FD85895", 0, 1598975407, null, 1598975407, null, "{ }", "2019-09-01T00:00:00", "4597", "4742", "9339" ]
  , [ "row-6jvi-cyrj~xk9p", "00000000-0000-0000-49F8-57FC536A011F", 0, 1598975407, null, 1598975407, null, "{ }", "2020-01-01T00:00:00", "6284", "4983", "11267" ]
  , [ "row-n7dc~vvpa-46by", "00000000-0000-0000-9084-A89B52BDD73F", 0, 1598975407, null, 1598975407, null, "{ }", "2020-03-01T00:00:00", "4050", "4154", "8204" ]
  , [ "row-vw4w~9gei~8sxs", "00000000-0000-0000-6C9C-B713A7487BDD", 0, 1598975407, null, 1598975407, null, "{ }", "2020-02-01T00:00:00", "5384", "4486", "9870" ]
  , [ "row-9ats.akzz.u8m8", "00000000-0000-0000-A60D-43AA2F0DE9F4", 0, 1598975407, null, 1598975407, null, "{ }", "2020-04-01T00:00:00", "3990", "2410", "6400" ]
  , [ "row-9ks9_r8di~8saw", "00000000-0000-0000-7DBA-6D4BD989CE25", 0, 1598975407, null, 1598975407, null, "{ }", "2020-04-01T00:00:00", "3990", "2433", "6423" ]
  , [ "row-f2qd_u84a-5v4f", "00000000-0000-0000-E963-9B7361585CB3", 0, 1599001580, null, 1599001580, null, "{ }", "2020-05-01T00:00:00", "3486", "3347", "6833" ]
  , [ "row-r27k~a5xf_4fs4", "00000000-0000-0000-50C5-8325E30BAD09", 0, 1600257713, null, 1600257713, null, "{ }", "2020-06-01T00:00:00", "4160", "3437", "7597" ]
  , [ "row-xxk9_4n9v-ctff", "00000000-0000-0000-753B-A00441D0BCDA", 0, 1602849713, null, 1602849713, null, "{ }", "2020-07-01T00:00:00", "4768", "3624", "8393" ]
  , [ "row-3kyw_ajme_sx64", "00000000-0000-0000-3716-AD44B1C96D95", 0, 1663329716, null, 1663329716, null, "{ }", "2022-06-01T00:00:00", "4222", "6891", "11113" ]
  , [ "row-3qki.2ter~t3px", "00000000-0000-0000-869E-685713B3FD4A", 0, 1665921708, null, 1665921708, null, "{ }", "2022-07-01T00:00:00", "4159", "4505", "8664" ]
  , [ "row-snqc~s4is~qrjh", "00000000-0000-0000-2CB1-49E0FA34DC45", 0, 1668603709, null, 1668603709, null, "{ }", "2022-08-01T00:00:00", "4312", "4884", "9196" ]
  , [ "row-btej_zwv8~bjej", "00000000-0000-0000-E3BF-F3BB484B2E8F", 0, 1671195710, null, 1671195710, null, "{ }", "2022-09-01T00:00:00", "4188", "4330", "8518" ]
  , [ "row-pvrs~528b_8ut8", "00000000-0000-0000-5D49-043E326CE23D", 0, 1673874109, null, 1673874109, null, "{ }", "2022-10-01T00:00:00", "3866", "4174", "8040" ]
  , [ "row-7mrh_v43g~6mww", "00000000-0000-0000-B087-4F9FAD14C541", 0, 1676552509, null, 1676552509, null, "{ }", "2022-11-01T00:00:00", "4586", "4658", "9244" ]
  , [ "row-fybt_mbeh~dm3j", "00000000-0000-0000-811F-422C255D385F", 0, 1678968109, null, 1678968109, null, "{ }", "2022-12-01T00:00:00", "5665", "4423", "10088" ]
  , [ "row-9gsn-rver~ihqu", "00000000-0000-0000-7B66-DF19615113BC", 0, 1681646509, null, 1681646509, null, "{ }", "2023-01-01T00:00:00", "5160", "4246", "9406" ]
  , [ "row-k95j-845e~5kni", "00000000-0000-0000-727D-93A92526D463", 0, 1684238515, null, 1684238515, null, "{ }", "2023-02-01T00:00:00", "5011", "4370", "9381" ]
  , [ "row-gds6_ekgu_dgnk", "00000000-0000-0000-D187-C52AB27C2C9E", 0, 1686916909, null, 1686916909, null, "{ }", "2023-03-01T00:00:00", "4790", "4633", "9423" ]
  , [ "row-zyfj_u99s-hn9q", "00000000-0000-0000-7FB5-D749475FFE77", 0, 1689508910, null, 1689508910, null, "{ }", "2023-04-01T00:00:00", "3843", "3899", "7742" ]
  , [ "row-3327~im46_54d6", "00000000-0000-0000-3718-47DA43EC9A0D", 0, 1692187309, null, 1692187309, null, "{ }", "2023-05-01T00:00:00", "4013", "3976", "7989" ]
  , [ "row-my45~ifnw.52w9", "00000000-0000-0000-5551-115C7346C627", 0, 1694865709, null, 1694865709, null, "{ }", "2023-06-01T00:00:00", "3882", "4528", "8410" ]
  , [ "row-gbf5-vib9~bgvx", "00000000-0000-0000-A5D5-CAE8A50039EE", 0, 1697457709, null, 1697457709, null, "{ }", "2023-07-01T00:00:00", "4427", "4465", "8892" ]
   ]
  }