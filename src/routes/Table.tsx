import React, { useState, useEffect } from 'react';
import { getPosts } from "../service/PostsService";
import Post from "../service/Post";

export default function Table() {

  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getPosts()
      .then((posts: Post[]) => {
        setPosts(posts);
      })
      .catch((error: any) => {
        console.log(error);
      });

  }, []);

  return (
    <div>
      <h3>Tabla</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tittle</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => (
            <tr key={(item.id)}>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
