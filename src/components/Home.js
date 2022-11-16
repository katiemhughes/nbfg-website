import React, { useEffect, useState } from 'react';
import '../App.css';
import { request } from 'graphql-request';

export const Home = () => {
    // const [posts, setPosts] = useState(null);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         const { posts } = await request('https://api-eu-west-2.hygraph.com/v2/claisgcj527gf01tcgg6pcine/master', 
    //         `{
    //           posts {
    //             id,
    //             datePublished,
    //             slug,
    //             content {
    //                 html
    //             }
    //             author {
    //                 name,
    //                 avatar {
    //                     url
    //                 }
    //             }
    //             coverPhoto {
    //                 publishedAt {
    //                     createdBy {
    //                         id
    //                     }
    //                     url
    //                 }
    //             }
    //           }  
    //         }`
    //         );

    //         setPosts(posts);
    //     };

    //     fetchPosts();
    // }, []);

    return (
        <div>Home</div>
    )
}

export default Home;