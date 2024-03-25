// import React, { useState, useEffect } from "react";

// const InfiniteScrollComponent = () => {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         `https://dummyjson.com/products?skip=30&limit=40&page=${page}`
//       );
//       const data = await response.json();
//       console.log(data.products);
//       if (data.products.length > 0 && data.products.length <= 40) {
//         setItems((prevItems) => [...prevItems, ...data.products]);
//         setPage((prevPage) => prevPage + 1);
//       } else {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop ===
//       document.documentElement.offsetHeight
//     ) {
//       fetchData();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       {items.map((item, index) => (
//         <div key={index}>
//           <p>{item.title}</p>
//         </div>
//       ))}
//       {hasMore && <p>Loading more data...</p>}
//     </div>
//   );
// };

// export default InfiniteScrollComponent;
