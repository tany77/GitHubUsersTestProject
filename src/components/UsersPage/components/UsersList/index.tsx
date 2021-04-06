import React from "react";
import { GitHubUser } from "../../../../models/GitHubUser";
import UserShortInfo from "../UserShortInfo";

const UsersList: React.FC<UserListProps> = ({ users }) => {
  return (
    <>
      {users.map((user: GitHubUser) => {
        return <UserShortInfo user={user} key={user.id} />;
      })}
    </>
  );
};

interface UserListProps {
  users: Array<GitHubUser>;
}

export default UsersList;
