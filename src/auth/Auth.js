export const setAuthToken = (user) =>{

    const currentUser = {
        email:user.email
      }

     // get jwt token
     fetch('https://genius-car-server-three-mu.vercel.app/jwt', {
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        // local storage is the easiyest but not the best place to store the jwt token
        localStorage.setItem('token', data.token);
        //  navigate(from, {replace:true});
      })
}