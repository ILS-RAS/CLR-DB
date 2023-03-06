use 'corpus';
db.createUser({ user: '', pwd: '', roles: [{ role: 'readWrite', db: 'corpus' }] });