use corpus;
try {
   db.projectmodel.updateMany(
      { status: "deleted" },
      { $set: {projectType: "dict"} }
   );
} catch (e) {
   print(e);
}
