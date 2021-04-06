import React from "react";
import { GitHubUser } from "../../../../models/GitHubUser";
import { Link } from "react-router-dom";
import "./styles.css";

const UserShortInfo: React.FC<{ user: GitHubUser }> = ({ user }) => {
  return (
    <Link to={`/user-details/${user.login}`}>
      <div className="user-block">
        <div className="user-avatar">
          <img src={user.avatar_url} alt="avatar" width="40" height="40" />
        </div>
        <div className="user-login">{user.login}</div>
        <div className="user-repo-count">Repos: {user.repo_count}</div>
      </div>
    </Link>
  );
};

export default UserShortInfo;
