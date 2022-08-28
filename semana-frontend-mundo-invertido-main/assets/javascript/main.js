
import app from "./firebase/app.js"
import{getHellFireClubSubscriptions, subscribeToHellfireClub} from './firebase/hellfire-club.js'

const txtName= document.getElementById('txtName')
const txtEmail= document.getElementById('txtEmail')
const txtLevel= document.getElementById('txtLevel')
const txtCharacter= document.getElementById('txtCharacter')

const btnSubscribe= document.getElementById('txtSubscribe')

btnSubscribe.addEventListener('click', async () =>{
    const subscription = {
        name: txtName.Value,
        email: txtEmail.Value,
        level:txtLevel.value,
        character:txtCharacter.value
    }
     
    const subscrptionId = await subscribeToHellfireClub(subscription)
    console.log('Inscrito com sucesso: $(subscriptionId)')

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter = ''
})

function loadData(){
    const subscriptions = await getHellFireClubSubscriptions() 
    
    subscriptionList.InnerHTML= subscriptions.map(sub => '<li>  ${sub.name} </li>').join('')
      
    console.log(subscriptions)
}


