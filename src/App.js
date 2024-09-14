
import { useState } from 'react';
import './App.css';
import Landing from './Landing';
import Signinpopup from './Signinpopup';
import Loginpopup from './Loginpopup';
import { Toaster } from 'react-hot-toast';
function App() {

  const [showlogin,setshowlogin] = useState(false);
  const [showSignin,setSignin] = useState(false);

  return (
   
   <>
   {showlogin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}
   {showSignin?<Signinpopup setSignin={setSignin}/>:<></>}
   <Landing setshowlogin={setshowlogin} setSignin={setSignin}/>
   <Toaster/>
   </>
  );
}

export default App;
