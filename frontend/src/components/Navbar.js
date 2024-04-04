import React from 'react';
import { Link } from 'react-router-dom';


// function Navbar() {
//   return (
//     <nav className="navbar bg-dark p-2" data-bs-theme="dark">
//       <div id='content' className='container-fluid justify-content-start gap-5'>
//         <h3 className='text-light'>
//           <Link to="/">Leaderboard</Link>
//         </h3>
//         <h3 className='text-light'>
//           <Link to="/activities">Activities</Link>
//         </h3>
//         <div className="user-profile d-flex align-items-center ms-auto">
//         <div className="profile-image">
//           <i className="fa-light fa-user"></i>        
//           </div>
//         <div className="user-name ms-2">
//           <Link to="/dashboard" className="text-light">user 1</Link>
//         </div>
//       </div>

//       </div>
//     </nav> 
//   );
// }

function Navbar({ userData }) {

  return (
    <nav className="navbar bg-dark p-2" data-bs-theme="dark">
      <div className='container-fluid justify-content-start gap-5'>
        <h3 className='text-light'>
          <Link to="/">Leaderboard</Link>
        </h3>
        <h3 className='text-light'>
          <Link to="/activities">Activities</Link>
        </h3>
        <div className="user-profile d-flex align-items-center ms-auto">
          <div className="profile-image">
            <i className="fa-light fa-user"></i>
          </div>
          <div className="user-name ms-2">
            <Link to={`/dashboard/${userData.user_id}`} className="text-light">{userData.username}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}  

export default Navbar;
