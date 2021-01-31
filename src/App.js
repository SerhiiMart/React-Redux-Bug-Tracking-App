import React from 'react';
import {useSelector} from 'react-redux';
import Login from './Views/Pages/Login/login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './Views/Components/Sidebar/sidebar';
import ViewBugPage from './Views/Pages/viewbugs';
import CreateBug from './Views/Components/Bug-create/bugForm'


function App() {
  const {auth} = useSelector(state => state)
  return (
    <Router>
      { !auth.LoggedIn ? <Login /> :
       <>
       <Sidebar />
       <Switch>
         <Route path="/view-bugs"> <ViewBugPage /></Route>
         <Router path="/create"><div className="page-container"><CreateBug title="Create Bug" /></div></Router>
       </Switch>
       </>
       }
    </Router>
  )
}

export default App;
