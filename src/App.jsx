//        1. api call inside useeffect
// Advantages:
// -call only single api
// -easy understand
// Dis:
// -manually do try catch for error handling
// -getting error for depedancie if not defined properly
// -no cach

// import { useEffect, useState } from "react";

// export default function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/posts")
//       .then(res => res.json())
//       .then(result => setData(result.posts));
//   }, []);

//   return (
//     <div>
//       {data.map(post => (
//         <h3 key={post.id}>{post.title}</h3>
//       ))}
//     </div>
//   );
// }



//             2. API call using React Router loader
// Advantages:
// -Data loads before page renders
// -Built-in error handling
// Dis.
// - Only works with React Router
// -Not good for real-time updates


// import { useLoaderData } from "react-router-dom";

// export default function App() {
//   const data = useLoaderData();

//   return <h3>{data.title}</h3>;
// }

//      5.API call using Axios
// Advantages:
// -easy syntax
// - req,res handler
// - error handling easy
// -automatic json parseing
// Dis.
// - no cache

// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get("https://dummyjson.com/posts/1")
//       .then(res => setData(res.data));
//   }, []);

//   return (
//     <div>
//       <h3>{data.title}</h3>
//     </div>
//   );
// }

//              6.API call using TanStack Query (React Query)
// Advantages:
// -automatic caching
// background refetch
// lt-in
// best performance

// Dis.oading & error buil


// import { useQuery } from "@tanstack/react-query";

// export default function App() {
//   const { data } = useQuery({
//     queryKey: ["posts"],
//     queryFn: async() =>
//     {
//       const res= await fetch("https://dummyjson.com/posts")
//       return res.json()
//     }
//   });

//  return (
//     <div>
//       {data?.posts.map(post => (
//         <h3 key={post.id}>{post.title}</h3>
//       ))}
//     </div>
//   );
// }


//         3.Next.js server-side API
// Advantages:
// -runs on server
// secure
// Dis.
// -not use browser APIs
//Server load increas

// export default async function Page() {
//   const res = await fetch(
//     "https://dummyjson.com/posts/1"
//   );
//   const data = await res.json();

//   return <h3>{data.title}</h3>;
// }
