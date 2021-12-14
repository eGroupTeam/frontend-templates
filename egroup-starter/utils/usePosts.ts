import makeGetHook from "@eGroupTeam/hooks/makeGetHook";
import { Post } from "interfaces";

import { fetcher } from "@eGroupTeam/hooks/fetchers";

const usePosts = makeGetHook<Post[]>("https://jsonplaceholder.typicode.com/posts", fetcher);
export default usePosts;