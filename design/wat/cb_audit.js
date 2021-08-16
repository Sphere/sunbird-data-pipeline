// FRAC

let frac_event = {
  "actor": {
    "id": "59c3c2b7-b32b-4d9a-9d02-220e73004d66",  // MDO ADMIN id
    "type": "User"
  },
  "eid": "CB_AUDIT",
  "edata": {
    "state": "Draft",  // Draft/Published etc.
    "props": ["WAT/FRAC"],
    "cb_object": {
      "id": "9a99e795-c652-4c0d-9f9f-960c737e15f3",  // COMPETENCY/ACTIVITY/ROLE id
      "type": "",  // type=COMPETENCY/ACTIVITY/ROLE
      "name": "",  // COMPETENCY/ACTIVITY/ROLE name
      "org": "",  // eg. ISTM
      "sub_type": ""  // only present for competency, e.g Functional, empty string for others
    }
  },
  "ver": "3.0",
  "ets": 1628845042921,
  "context": {
    "channel": "",  // channel id if present, else null
    "pdata": {
      "id": "dev.FRac.portal",
      "pid": "FRac",
      "ver": "1.0"
    },
    "env": "WAT"
  },
  "mid": "CB.d0152fb1-cd84-4309-882a-88b1df0e1648",  // mid="CB.<uuid>"
  "object": {
    "id": "9a99e795-c652-4c0d-9f9f-960c737e15f3",  // COMPETENCY/ACTIVITY/ROLE id
    "type": ""  // COMPETENCY/ACTIVITY/ROLE
  }
}

// WAT

let wat_event = {
  "actor": {
    "id": "59c3c2b7-b32b-4d9a-9d02-220e73004d66",  // User creating this event
    "type": "User"
  },
  "eid": "CB_AUDIT",
  "edata": {
    "state": "Draft",  // Draft/Published etc.
    "props": ["WAT"],
    "cb_object": {
      "id": "643cb47c-3e8a-4d5e-9fd4-45302a9ae09a",  // work order id
      "type": "WorkOrder",  // WorkOrder
      "name": "Work order - Finance wing",
      "org": "New NHTest"
    },
    "cb_data": { // SAME AS IN RESPONSE FROM UI
      "id": "643cb47c-3e8a-4d5e-9fd4-45302a9ae09a",
      "name": "Work order - Finance wing",
      "deptId": "013260789496258560586",
      "deptName": "New NHTest",
      "status": "Draft",
      "userIds": [
        "3f90ed64-2cba-4e14-8844-1ec53da454f8"
      ],
      "createdBy": "075e3a3f-1a56-4ea3-9042-c66e2288e60c",
      "createdAt": 1628844512397,
      "updatedBy": "075e3a3f-1a56-4ea3-9042-c66e2288e60c",
      "updatedAt": 1628845042921,
      "progress": 91,
      "errorCount": 0,
      "rolesCount": 1,
      "activitiesCount": 1,
      "competenciesCount": 1,
      "publishedPdfLink": null,
      "signedPdfLink": null,
      "users": [
        {
          "id": "3f90ed64-2cba-4e14-8844-1ec53da454f8",
          "userId": "535c8d83-e5ed-4b91-82eb-89031702dcc9",
          "roleCompetencyList": [
            {
              "roleDetails": {
                "type": "ROLE",
                "id": "id01",
                "name": "Management role",
                "description": "",
                "status": null,
                "source": null,
                "childNodes": [
                  {
                    "type": "ACTIVITY",
                    "id": "id01",
                    "name": "",
                    "description": "Manager role",
                    "status": null,
                    "source": null,
                    "parentRole": null,
                    "submittedFromId": null,
                    "submittedToId": "",
                    "level": null
                  }
                ],
                "addedAt": 0,
                "updatedAt": 0,
                "updatedBy": null,
                "archivedAt": 0,
                "archived": false
              },
              "competencyDetails": [
                {
                  "type": "COMPETENCY",
                  "id": "id01",
                  "name": "behavioural competency profiling",
                  "description": "behavioural competency profiling desc",
                  "source": null,
                  "status": null,
                  "level": "Level 1",
                  "additionalProperties": {
                    "competencyArea": "Area",
                    "competencyType": "Behavioural"
                  },
                  "children": null
                }
              ]
            }
          ],
          "unmappedActivities": [],
          "unmappedCompetencies": [],
          "userPosition": "Team management",
          "positionId": "id01",
          "positionDescription": "manage-teams",
          "workOrderId": "9a99e795-c652-4c0d-9f9f-960c737e15f3",
          "updatedAt": 1628845041770,
          "updatedBy": "075e3a3f-1a56-4ea3-9042-c66e2288e60c",
          "errorCount": 0,
          "progress": 91,
          "createdAt": 1628845041770,
          "createdBy": "075e3a3f-1a56-4ea3-9042-c66e2288e60c"
        }
      ],
      "mdo_name": "New NHTest"
    }
  },
  "ver": "3.0",
  "ets": 1628845042921,
  "context": {
    "channel": "013260789496258560586",
    "pdata": {
      "id": "<env>.mdo.portal",
      "pid": "mdo",
      "ver": "1.0"
    },
    "env": "WAT"
  },
  "mid": "CB.b4b1a956-d8d5-48e4-8cee-0dc616823402",
  "object": {
    "id": "643cb47c-3e8a-4d5e-9fd4-45302a9ae09a",
    "type": "WorkOrder"
  }
}