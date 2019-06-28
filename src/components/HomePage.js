import React from "react";

const HomePage = () => {
  return (
    <div
      className="homePagecontainer"
      style={{ display: "flex", paddingTop: 20, flexWrap: "wrap" }}
    >
      <div
        className="homePageBackgroundImg"
        style={{
          height: "100vh",
          background: "url(./images/casual-fashion-fine-looking-594610.jpg)",
          width: "40vw",
          backgroundSize: "cover"
        }}
        alt=""
      />
      <div
        className='homePageCenterDiv'
      >
        <div
          className="homepagetext"
          style={{
            marginBottom: 150
          }}
        >
          <h2 style={{ fontWeight: "64" }}>RAW Clothing</h2>
          <p style={{ fontSize: "34" }}>Revolutionary Artistic Wear</p>
        </div>
        <div className='estLine' style={{ display: "flex", flexDirection: "row" }}>
          <div
            className='estContainer'
          />
          <p
          className='estText'
          >
            EST. 2019
          </p>
          <div
            style={{
              height: 2,
              width: "100%",
              background: "black",
              alignSelf: "center",
              margin: "20px"
            }}
          />
        </div>
      </div>
      <div
        className="homePageBackgroundImg"
        style={{
          height: "100vh",
          background: "url(./images/attractive-beautiful-chair-1070030.jpg)",
          width: "40vw",
          backgroundSize: "cover"
        }}
        alt=""
      />
    </div>
  );
};

export default HomePage;
