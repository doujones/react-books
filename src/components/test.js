import firebase from "firebase/app"
import "firebase/firestore"

const firestore = firebase.firestore();

firestore.collection("users").doc("AU2fS2W7xRcJ1jqyYUiU").collection("basket").doc("KK07GBq9MG1JOLuYjtz5")
firestore.doc("/users/AU2fS2W7xRcJ1jqyYUiU/basket/KK07GBq9MG1JOLuYjtz5");
firestore.collection("/users/AU2fS2W7xRcJ1jqyYUiU/basket");