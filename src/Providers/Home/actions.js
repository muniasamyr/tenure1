import database from '@react-native-firebase/database';

// firebase.initializeApp(config);
export async function getHomeData(type){
   try{
    const reference = await database()
    .ref(type)
    .once('value')
    .then(snapshot => {
        return snapshot.val()
    });
    
       console.log('User data: ',reference)
   return reference
   }catch(e){
      console.log(e)
      return e
   }

}

export async function getHomeList(){
   try{
    const reference = await database()
    .ref('/home')
    .once('value')
    .then(snapshot => {
        return snapshot.val()
    });
    
       console.log('User data: ',reference)
   return reference
   }catch(e){
      console.log(e)
      return e
   }

}

export async function getReviewData(){
   try{
    const reference = await database()
    .ref('/review')
    .once('value')
    .then(snapshot => {
        return snapshot.val()
    });
    
       console.log('User data: ',reference)
   return reference
   }catch(e){
      console.log(e)
      return e
   }

}


  export async function CreateData1(data){
   try{

   let res=await getDatabymail(data)
  
   let isValue=false
   if(res!==null&& res!==Object(res)){
  res.forEach(ele=>{
     if(ele.email===data.email){
        isValue=true
     }
  })
}else{
   if(res===Object(res)&&res.email===data.email){
     isValue=true
     res=data
   }else if(res===null){

   res=data
   }else
   res=[res,data]
   
}
  if(isValue===true){
     return true
  }else{
   // res.push(data)
    const reference = await database()
    .ref('/users')
    .set(res)
    .then((es) => console.log('Data set.',es));
    
       console.log('User data: ',reference)
   return true
  }
   }catch(e){
      console.log(e)
      // alert(e)
      return e
   }

}





  export async function getDatabymail(data){
   try{
   
     
   const newReference =await  database().ref('/users')
   .once('value').
   then(snapshot => {  
      return snapshot.val()
  });
return newReference

   }catch(e){
      console.log(e)
      return e
   }

}




export  const doLogInData= async(data)=>{
   try{
   
      // const newReference = database().ref('/users').push();
   const newReference =await  database().ref('/users').orderByChild('email').equalTo(data.email)
   .once('value').
   then(snapshot => {
      console.log('Auto generated key: ', JSON.stringify(snapshot));
   
      
       
   return snapshot
  });

return JSON.stringify(newReference)

   }catch(e){
      console.log(e)
      return e
   }

}