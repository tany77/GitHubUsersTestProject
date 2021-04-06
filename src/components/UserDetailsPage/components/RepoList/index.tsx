import React from "react";
import { RepoItem } from "../../../../models/RepoItem";
import RepoShortInfo from "../RepoShortInfo";

const RepoList: React.FC<{ repos: Array<RepoItem> }> = ({ repos }) => {
  return (
    <>
      {repos?.length > 0 ? (
        repos.map((repo: RepoItem) => (
          <RepoShortInfo item={repo} key={repo.id} />
        ))
      ) : (
        <div>No repositories</div>
      )}
    </>
  );
};

export default RepoList;
