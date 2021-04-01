  export default function (context) {
 // console.log(context.route.path)
   if (context.store.state.users.token === '') {
     if (context.route.path != '/'){
    
    return context.redirect('/')
  }  
    
   }
  }
