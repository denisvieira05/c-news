import { API_ENVIROMENTS, BASE_URLS } from './CONSTANTS'
import * as firebase from "firebase";

export const UID_LOCALSTORAGE_KEY = 'uid'
export const REFRESH_TOKEN_LOCALSTORAGE_KEY = 'refresh_token'

var firebaseConfig = {
  apiKey: "AIzaSyC_F0FZAzLbKaFN_p_IvBtkkswnxafl86s",
  authDomain: "c-news-fb.firebaseapp.com",
  databaseURL: "https://c-news-fb.firebaseio.com",
  projectId: "c-news-fb",
  storageBucket: "c-news-fb.appspot.com",
  messagingSenderId: "339673497743"
};

class ApiDataSource {

  constructor(apiEnviroment) {
    this.USER_ID = localStorage.getItem(UID_LOCALSTORAGE_KEY)
    this.API_ENVIROMENT = apiEnviroment
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
  }

  getBaseUrl() {
    const { LOCAL, STAGE, PROD } = API_ENVIROMENTS

    const action = {
      LOCAL: () => BASE_URLS.LOCAL,
      STAGE: () => BASE_URLS.STAGE,
      PROD: () => BASE_URLS.PROD,
    }

    return action[this.API_ENVIROMENT]();
  }
}

export default ApiDataSource