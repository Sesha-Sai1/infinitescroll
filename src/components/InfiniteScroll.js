// import React, { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

// const InfiniteScrollData = () => {
//   // const [data, setData] = useState(Array.from({ length: 8 }));
//   const [data, setData] = useState([]);
//   const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     fetchMoreData();
//   }, []);

//   // useEffect(() => {
//   //   fetch("https://dummyjson.com/products?skip=30&limit=40")
//   //     .then((res) => {
//   //       return res.json();
//   //     })
//   //     .then((data) => {
//   //       console.log(data.products);
//   //       setData(data.products);
//   //     })
//   //     .catch((err) => {
//   //       console.log("Error while fetching", err);
//   //     });
//   // }, []);
//   const fetchMoreData = () => {
//     if (data.length < 40) {
//       // setTimeout(() => {
//       //   setData(data.concat(Array.from({ length: 8 })));
//       // }, 2000);
//       fetch("https://dummyjson.com/products?skip=30&limit=40")
//         .then((res) => res.json())
//         .then((responseData) => {
//           const newData = responseData.products;
//           setData((prevData) => [...prevData, ...newData]); // Merge new data with existing data
//           // if (newData.length < 40) {
//           //   setHasMore(false); // If fetched data length is less than 40, there is no more data to fetch
//           // }
//         })
//         .catch((err) => {
//           console.log("Error while fetching", err);
//         });
//     } else {
//       setHasMore(false);
//     }
//   };
//   return (
//     <div>
//       <InfiniteScroll
//         dataLength={data.length}
//         next={fetchMoreData}
//         hasMore={hasMore}
//         loader={<p>Loading....</p>}
//         endMessage={<p>You are All set</p>}
//       >
//         <div className="container my-3">
//           <div className="row">
//             {data ? (
//               data.map((product, index) => {
//                 return (
//                   <div className="col-lg-3 col-md-4 prod mb-2" key={index}>
//                     <div className="card">
//                       <div className="img">
//                         <img
//                           src={product?.images[0]}
//                           className="card-img-top image-fluid"
//                           alt="No Image"
//                         />
//                       </div>
//                       <div className="card-body text-center">
//                         <h5 className="card-title">
//                           {product?.title?.slice(0, 25)}
//                         </h5>
//                         <p className="card-text">
//                           {product?.description?.slice(0, 30)}
//                         </p>
//                         <p>Price : ${product?.price}</p>
//                         <p>Rating : {product?.rating}</p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })
//             ) : (
//               <h1>Loading</h1>
//             )}
//           </div>
//         </div>
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default InfiniteScrollData;
