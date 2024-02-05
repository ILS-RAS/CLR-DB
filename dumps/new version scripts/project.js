use corpus;
try {
   db.projectmodel.updateMany(
      {  },
      { $set: {projectType: "text"} }
   );
} catch (e) {
   print(e);
}
