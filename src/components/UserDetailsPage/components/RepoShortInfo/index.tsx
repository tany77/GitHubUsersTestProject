import React from "react";
import { RepoItem } from "../../../../models/RepoItem";
import "./styles.css";

const RepoShortInfo: React.FC<{ item: RepoItem }> = ({ item }) => {
  return (
    <a href={item.clone_url} target={"_blank"} rel="noreferrer">
      <div className="repo-short-info">
        <div className="">{item.name}</div>
        <div className="repo-stars">
          <div className="">{item.forks} Forks</div>
          <div className="">{item.stargazers_count} Stars</div>
        </div>
      </div>
    </a>
  );
};
export default RepoShortInfo;
