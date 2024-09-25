
import { useState } from 'react';
import './App.css';
import Landing from './Landing';
import Admin from './admin';
import Signinpopup from './Signinpopup';
import Loginpopup from './Loginpopup';
import { Toaster } from 'react-hot-toast';
function App() {

  const [showlogin,setshowlogin] = useState(false);
  const [Signadmin,setSignadmin] = useState(false);
  const [showSignin,setSignin] = useState(false);
  const [Showname, setShowname] = useState(false);
  const [username, setUserName] = useState("")


  return (
   
   <>
   {showlogin?<Loginpopup setshowlogin={setshowlogin} setShowname={setShowname} setUserName={setUserName}/>:<></>}
   {showSignin?<Signinpopup setSignin={setSignin}/>:<></>}
   {Signadmin?<Admin setSignadmin={setSignadmin}/>:<></>}
   <Landing setshowlogin={setshowlogin} setSignin={setSignin} Showname={Showname} username={username} setSignadmin={setSignadmin} />
   <Toaster/>
   </>
  );
}

export default App;
