db.getCollection("chunkmodel").aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$lookup: { 
			    "localField" : "indexId", 
			    "foreignField" : "_id", 
			    "as" : "index", 
			    "from" : "indexview"
			}
		},

		// Stage 2
		{
			$project: { 
			    "projectDesc" : { 
			        "$reduce" : { 
			            "in" : { 
			                "$concat" : [
			                    "$$this"
			                ]
			            }, 
			            "input" : "$index.projectDesc", 
			            "initialValue" : ""
			        }
			    }, 
			    "valueObj" : "$valueObj", 
			    "headerId" : "$headerId",
			    "updated" : "$updated",
			    "created" : "$created", 
			    "parentId" : { 
			        "$reduce" : { 
			            "in" : { 
			                "$concat" : [
			                    { 
			                        "$toString" : "$$this"
			                    }
			                ]
			            }, 
			            "input" : "$index.parentId", 
			            "initialValue" : ""
			        }
			    }, 
			    "headerCode" : { 
			        "$reduce" : { 
			            "input" : "$index.headerCode", 
			            "initialValue" : "", 
			            "in" : { 
			                "$concat" : [
			                    "$$this"
			                ]
			            }
			        }
			    }, 
			    "indexId" : "$indexId", 
			    "indexName" : { 
			        "$reduce" : { 
			            "initialValue" : "", 
			            "in" : { 
			                "$concat" : [
			                    "$$this"
			                ]
			            }, 
			            "input" : "$index.name"
			        }
			    }, 
			    "_id" : "$_id", 
			    "status" : "$status", 
			    "headerLang" : { 
			        "$reduce" : { 
			            "initialValue" : "", 
			            "in" : { 
			                "$concat" : [
			                    "$$this"
			                ]
			            }, 
			            "input" : "$index.headerLang"
			        }
			    }, 
			    "headerEditionType" : { 
			        "$reduce" : { 
			            "in" : { 
			                "$concat" : [
			                    "$$this"
			                ]
			            }, 
			            "input" : "$index.headerEditionType", 
			            "initialValue" : ""
			        }
			    }, 
			    "headerDesc" : { 
			        "$reduce" : { 
			            "in" : { 
			                "$concat" : [
			                    "$$this"
			                ]
			            }, 
			            "input" : "$index.headerDesc", 
			            "initialValue" : ""
			        }
			    }, 
			    "projectCode" : { 
			        "$reduce" : { 
			            "initialValue" : "", 
			            "in" : { 
			                "$concat" : [
			                    "$$this"
			                ]
			            }, 
			            "input" : "$index.projectCode"
			        }
			    }, 
			    "indexOrder" : { 
			        "$reduce" : { 
			            "in" : { 
			                "$concat" : [
			                    { 
			                        "$toString" : "$$this"
			                    }
			                ]
			            }, 
			            "input" : "$index.order", 
			            "initialValue" : ""
			        }
			    }, 
			    "projectId" : { 
			        "$reduce" : { 
			            "in" : { 
			                "$concat" : [
			                    "$$this"
			                ]
			            }, 
			            "input" : "$index.projectId", 
			            "initialValue" : ""
			        }
			    }, 
			    "value" : "$value"
			}
		},

	]

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
