export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  node_id: string;
  repo_count: number;
  email?: string;
  location?: string;
  followers: number;
  following: number;
  name: string;
}
