use corpus;
try {
   db.projectmodel.update({ "_id" : ObjectId("601060b6db14f8437020442e") },{ $set: {"creatorId" : ObjectId("66b6060a8b5766f835597a1e")} });
} catch (e) {
   print(e);
}
