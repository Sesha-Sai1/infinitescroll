import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrollDataSource = () => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = () => {
    fetch("https://dummyjson.com/products?skip=30&limit=8")
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData.products);
      })
      .catch((err) => {
        console.log("Error while fetching initial data", err);
      });
  };

  const fetchMoreData = () => {
    if (data.length <= 50) {
      setTimeout(() => {
        fetch("https://dummyjson.com/products?skip=" + data.length + "&limit=8")
          .then((res) => res.json())
          .then((responseData) => {
            const newData = responseData.products;
            setData((prevData) => [...prevData, ...newData]);
          })
          .catch((err) => {
            console.log("Error while fetching more data", err);
          });
      }, 1000);
    } else {
      setHasMore(false);
    }
  };

  return (
    <div>
      <center>
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p>Loading....</p>}
          endMessage={<p>You are All set</p>}
        >
          <div className="container my-3">
            <div className="row">
              {data.map((product, index) => (
                <div className="col-lg-3 col-md-4 prod mb-2" key={index}>
                  <div className="card">
                    <div className="img">
                      <img
                        src={product?.images[0]}
                        className="card-img-top image-fluid"
                        alt="No Image"
                      />
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title">
                        {product?.title?.slice(0, 25)}
                      </h5>
                      <p className="card-text">
                        {product?.description?.slice(0, 30)}
                      </p>
                      <p>Price : ${product?.price}</p>
                      <p>Rating : {product?.rating}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </center>
    </div>
  );
};

export default InfiniteScrollDataSource;
