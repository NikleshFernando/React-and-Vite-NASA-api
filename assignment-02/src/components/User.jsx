import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import FooterMain from "./FooterMain";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();
  function logout() {
    sessionStorage.removeItem("user");
    if (sessionStorage != null) {
      navigate("/");
    }
  }
  const [user, setUser] = useState(null);

  useEffect(() => {
    function getUser() {
      const userData = sessionStorage.getItem("user");
      console.log("Session Details:", userData);
      if (userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } else {
        console.log("User data not found in session storage");
      }
    }
    getUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <Navbar />
        <div className="userProfile">
          <div className="user-det-picture">
            <div className="card-profile">
              <div className="card-body text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="rounded-circle"
                />
                <h5 className="card-title mt-3">{user.fullname}</h5>
                <p className="text-muted mb-2">@{user.userName}</p>
              </div>
              <button className="btn btn-secondary" onClick={() => logout()}>
                Logout
              </button>
            </div>
          </div>
          <div className="userInformation">
            <div className="card-userInfo">
              <div className="card-body">
                <h3 className="card-userInfo-h5">User Information</h3>
                <hr />
                <div className="column-details">
                  <div className="col-md-6">
                    <p className="user-details-p">
                      <strong>Username:</strong> {user.userName}
                    </p>
                    <p className="user-details-p">
                      <strong>Fullname:</strong> {user.fullname}
                    </p>
                    <p className="user-details-p">
                      <strong>Email:</strong> {user.email}
                    </p>
                    <p className="user-details-p">
                      <strong>Address:</strong> {user.address}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="user-details-p">
                      <strong>Contact:</strong> {user.contact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterMain />
    </>
  );
}

export default UserProfile;
