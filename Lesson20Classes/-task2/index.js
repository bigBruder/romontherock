/* eslint-disable max-classes-per-file */
class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    Object.freeze(users);
    this._users = users;
  }

  get users() {
    return this._user;
  }

  getUserNames() {
    return this.users.map((el) => el.name);
  }

  getUserIds() {
    return this.users.map((el) => el.id);
  getUserNameById(id) {
    return this.users.filter((el) => el.id === id)[0].name;
  }
}
}
// --- test Data
// const user1 = new User(433, "Andrew", "session-id");
// console.log(user1);
