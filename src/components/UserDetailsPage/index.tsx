import React, { useEffect, useState } from "react";
import Title from "../UI/title";
import RepoList from "./components/RepoList";
import UserProfile from "./components/UserProfile";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { ArrowLeft } from "react-bootstrap-icons";
import { RepoItem } from "../../models/RepoItem";
import "./styles.css";

const UserDetailsPage: React.FC<any> = (props) => {
  const [search, setSearch] = useState("");
  const apiUrlUser = `/users/${props.match.params.username}`;
  const apiUrlRepos = `/users/${props.match.params.username}/repos`;
  const [
    { isLoading: isLoadUser, response: fetchUserResponse, error: userError },
    doFetchUser,
  ] = useFetch(apiUrlUser);
  const [
    { isLoading: isLoadRepos, response: fetchReposResponse, error: reposError },
    doFetchRepos,
  ] = useFetch(apiUrlRepos);
  const [filteredRepos, setFilteredRepos] = useState([] as Array<RepoItem>);

  const handleSearchInputChange = (event: any) => {
    setSearch(event.target.value);
  };

  const filterReposBySearch = (
    repos: Array<RepoItem>,
    search: string = ""
  ): void => {
    let result = repos;

    if (search) {
      result = repos.filter((repo: RepoItem) => {
        let searchValue = repo.name.toLowerCase();
        return searchValue.indexOf(search.toLowerCase()) !== -1;
      });
    }
    setFilteredRepos(result);
  };

  useEffect(() => {
    doFetchUser();
  }, [doFetchUser]);

  useEffect(() => {
    doFetchRepos();
  }, [doFetchRepos]);

  useEffect(() => {
    if (fetchReposResponse) {
      filterReposBySearch(fetchReposResponse, search);
    }
  }, [search, fetchReposResponse]);

  return (
    <div className="container">
      <div className="block-second-screen">
        <Link to={"/"}>
          <ArrowLeft size={20} /> return to list
        </Link>
        <Title title="GitHub Searcher User" />
        {isLoadUser && <div>Loading...</div>}
        {userError && <div>Some error happened</div>}
        {!isLoadUser && fetchUserResponse && (
          <UserProfile user={fetchUserResponse} />
        )}

        <form className="form-search">
          <input
            onChange={handleSearchInputChange}
            className="form-control"
            placeholder="search repo..."
          />
        </form>
        {isLoadRepos && <div>Loading...</div>}
        {reposError && <div>Some error happened</div>}
        {!isLoadRepos && fetchReposResponse && filteredRepos && (
          <RepoList repos={filteredRepos} />
        )}
      </div>
    </div>
  );
};

export default UserDetailsPage;
