db.taxonomymodel.updateOne({ "code": "adj" }, { $set: { "desc": "adiectivum" } });
db.taxonomymodel.updateOne({ "code": "noun" }, { $set: { "desc": "substantivum" } });
db.taxonomymodel.updateOne({ "code": "numeral" }, { $set: { "desc": "numerale" } });