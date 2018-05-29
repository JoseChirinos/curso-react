import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...options})=>{
  /*
  if(!options.isAuth){
    if(options.path !== "/login"){
      localStorage.setItem('path', options.path);
    }
  }else{
    if(typeof(localStorage.getItem('path')) === 'string'){
      var path = localStorage.removeItem('path');
      console.log(path);
    }
    else{
      var path = null;
    }
  }
  */
  return(
  <Route { ...options } render={ (props)=>(
      options.isAuth === true
      ? <Component {...props}/>
      : <Redirect to='/login'/>
    )}
  />
)
}

export default PrivateRoute;