use corpus;
try {
   db.usermodel.updateMany(
      { email:'agricola.piger@yandex.ru'  },
      { $set: {name: "Егоров И. М.", role: 0 } }
   );
} catch (e) {
   print(e);
}

try {
   db.usermodel.updateMany(
      { email:'kisimac@gmail.com'  },
      { $set: {name: "Кисилиер М. Л.", role: 1 } }
   );
} catch (e) {
   print(e);
}

try {
   db.usermodel.updateMany(
      { email:'nickazansky@gmail.com'  },
      { $set: {name: "Казанский Н. Н.", role: 1 } }
   );
} catch (e) {
   print(e);
}

try {
   db.usermodel.updateMany(
      { email:'demophobos@gmail.com'  },
      { $set: {name: "Егоров И. М.", role: 1 } }
   );
} catch (e) {
   print(e);
}

try {
   db.usermodel.updateMany(
      { email:'rev.hilarion@yandex.ru'  },
      { $set: {name: "Резниченко", role: 1 } }
   );
} catch (e) {
   print(e);
}

try {
   db.usermodel.updateMany(
      { email:'pan_liwerij@mail.ru'  },
      { $set: {name: "Соколов Е. Г.", role: 1 } }
   );
} catch (e) {
   print(e);
}

try {
   db.usermodel.updateMany(
      { email:'st085755@student.spbu.ru'  },
      { $set: {name: "Ботвиньева Е. А.", role: 0 } }
   );
} catch (e) {
   print(e);
}

try {
   db.usermodel.updateMany(
      { email:'batrachos@yandex.ru'  },
      { $set: {name: "Смирнова А. С.", role: 1 } }
   );
} catch (e) {
   print(e);
}

try {
   db.usermodel.updateMany(
      { email:'georgiymolkov@gmail.com'  },
      { $set: {name: "Мольков Г. А.", role: 1 } }
   );
} catch (e) {
   print(e);
}
