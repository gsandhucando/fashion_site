import React from "react";

const HomePage = () => {
  return (
    <div style={{ display: "flex", paddingTop: 20, overflow: "none", minWidth: '600px'}}>
      <img
        style={{ height: "100vh", width: "45vw" }}
        src="./images/casual-fashion-fine-looking-594610.jpg"
        alt=""
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

        }}
      >
        <div style={{
          marginBottom: 150
        }}>
        <h2 style={{fontWeight: '64'}}>RAW Clothing</h2>
        <p style={{fontSize: '34'}}>Revolutionary Artistic Wear</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              height: 2,
              width: "100%",
              background: "black",
              alignSelf: "center",
              margin: "20px"
            }}
          />
          <p
            style={{
              height: 84,
              width: 400,
              background: "#424242",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: '34'
            }}
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
      <img
        style={{ height: "100vh", width: "45vw" }}
        src="./images/attractive-beautiful-chair-1070030.jpg"
        alt=""
      />
    </div>
  );
};

export default HomePage;
