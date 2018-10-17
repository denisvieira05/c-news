import ApiDataSource from "../ApiDataSource";
import firebase from "firebase/app";
import "firebase/database";

class InterestsApiDataSource extends ApiDataSource {
  getMyInterests() {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref("users/" + this.USER_ID + "/interests")
        .once("value")
        .then(snapshot => {
          let interests = [];
          if (snapshot.val()) {
            interests = Object.values(snapshot.val());
          }
          resolve(interests);
        });
    });
  }

  saveMyInterests(myInterests) {
    return new Promise((resolve, reject) => {
      var saveMyInterestsAction = {};
      saveMyInterestsAction[
        "users/" + this.USER_ID + "/interests/"
      ] = myInterests;

      firebase
        .database()
        .ref()
        .update(saveMyInterestsAction)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default InterestsApiDataSource;
