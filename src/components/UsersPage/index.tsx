import React, { useEffect, useState } from "react";
import UsersList from "./components/UsersList";
import Title from "../UI/title";
import useFetch from "../../hooks/useFetch";
import GetNodes from "../../hooks/useQuery";
import { GitHubUser } from "../../models/GitHubUser";
import "./styles.css";

const UsersPage: React.FC<any> = () => {
  const [search, setSearch] = useState("");
  const [isLoadingNodes, setIsLoadingNodes] = useState(false);
  const apiUrl = `/search/users?q=${search}>type:user`;
  const [
    { isLoading, response: fetchUsersResponse, error },
    doFetch,
  ] = useFetch(apiUrl);
  const [usersWithRepos, setUsersWithRepos] = useState([] as Array<GitHubUser>);

  const handleSearchInputChange = (event: any) => {
    setSearch(event.target.value);
  };

  const getNodesAndAddToUsers = (arr: Array<GitHubUser>): void => {
    let ids = arr.map((item) => item.node_id);
    setIsLoadingNodes(true);

    GetNodes(ids).then((result) => {
      setIsLoadingNodes(false);
      let usersWithRepoCount = fetchUsersResponse.items.map(
        (item: GitHubUser) => {
          let repo = ((result.data as any).nodes as Array<any>).find(
            (x) => x.id === item.node_id
          );
          return { ...item, repo_count: repo.repositories.totalCount };
        }
      );

      setUsersWithRepos(usersWithRepoCount);
    });
  };

  useEffect(() => {
    doFetch();
  }, [doFetch, search]);

  useEffect(() => {
    if (!fetchUsersResponse) {
      return;
    }

    getNodesAndAddToUsers(fetchUsersResponse.items);
  }, [fetchUsersResponse]);

  return (
    <div className="container block-first-screen">
      <Title title={"GitHubSearcher"} />
      <form className="form-search">
        <input
          onChange={handleSearchInputChange}
          className="form-control"
          placeholder="search user..."
        />
      </form>
      {(isLoading || isLoadingNodes) && <div>Loading... </div>}
      {error && <div>Some error happened</div>}
      {!isLoading && !isLoadingNodes && usersWithRepos && (
        <UsersList users={usersWithRepos} />
      )}
    </div>
  );
};
export default UsersPage;
