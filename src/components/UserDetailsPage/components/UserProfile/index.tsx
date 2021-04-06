import React from "react";
import { GitHubUser } from "../../../../models/GitHubUser";
import "./styles.css";

const UserProfile: React.FC<{ user: GitHubUser }> = ({ user }) => {
  return (
    <div className="profile">
      <div className="row">
        <div className="col-lg-4">
          <div className="img-avatar">
            <img src={user.avatar_url} width="120" height="120" alt="" />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-3">
              <ul className="user-data-label">
                <li> login: </li>
                <li> email: </li>
                <li> location: </li>
                <li> name: </li>
                <li> followers: </li>
                <li> following: </li>
              </ul>
            </div>
            <div className="col-lg-9 pl-0">
              <ul className="user-data">
                <li> {user.login}</li>
                <li> {user.email ? user?.email : "-"}</li>
                <li> {user.location ? user.location : "-"} </li>
                <li> {user.name ? user.name : "-"}</li>
                <li> {user.followers} </li>
                <li> {user.following} </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default UserProfile;
