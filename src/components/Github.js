import React, { useState, useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Sarvesh325")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="container-fluid mt-2p-3 bg-dark text-light p-5 ">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className=" img w-[90%]">
                <img src={data.avatar_url} alt="Git Profile" />
              </div>
            </div>
            <div className="col-3  rounded-lg text-center p-5">
              <span>Name: {data.name}.</span>
              <hr />
              <span>User-Name: {data.login}</span>
              <hr />
              <span>User-Id: {data.id}</span>
              <hr />
              <span>Location: {data.location}</span>
              <hr />
              <span>Following: {data.following}</span>

              {/* <hr /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Github;
// "https://api.github.com/users/Sarvesh325"

export const gitInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Sarvesh325");
  return response.json();
};
