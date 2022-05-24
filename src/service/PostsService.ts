import Axios from 'axios';
import Post from "./Post";

export async function getPosts(): Promise<Post[]> {

  return Axios.get<Post[]>("https://my-json-server.typicode.com/typicode/demo/posts")
      .then((response) => {
        return Promise.resolve(response.data);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
}
