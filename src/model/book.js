export default {
  create: async function(title){
      return new Promise(function(resolve,reject){
        window.setTimeout(function(){
          resolve(title+" created")
        },1000)
      })
  }
}
