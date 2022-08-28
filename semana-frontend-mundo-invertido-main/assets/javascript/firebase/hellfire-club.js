
import app from'./app.js'
import{ getFirestore,collection, addDoc, getdocs} from'https://www.gstatic.com/firebasejs/9.9.2/firebase-SERVICE.js'


export async function subscribeToHellfireClub(subscription){
debugger
const db = getFirestore (app)
const hellfireClubCollection = (db, 'hellfire-club')
const docRef= await addDoc(hellfireClubCollection, subscription)
return docRef.id
}

export async function getHellFireClubSubscriptions() {
    const db = getFireStore(app)
    const hellfireClubCollection = collection(db, 'hellfire-clube')
    const getHellFireClubSnapShot = await getdocs(hellfireClubCollection);
    const subscription = hellfireClubCollection.docs.map(doc => doc.data());
    return subscription;
}

