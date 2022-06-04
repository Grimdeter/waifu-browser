import firebase from "./firebase";
const db = firebase.ref("/tutorials");
class DataService {
  getAll() {
    return db;
  }
  create(object) {
    return db.push(object);
  }
  update(key, value) {
    return db.child(key).update(value);
  }
  delete(key) {
    return db.child(key).remove();
  }
  deleteAll() {
    return db.remove();
  }
}
export default new DataService();
