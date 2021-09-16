import React from "react";

const DisplayArea = () => {
  return (
    <div className="container pt-5">
      <h5 className="text-white font-weight-bold">表示エリア</h5>

      <div className="card mb-3 rounded-3" style={{ backgroundColor: "#313031" }}>
        <div className="row g-0 px-2">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <div className="col-12 border border-white border-5 rounded-3 img-fit">
              <img src="/img/dashboard/lessons/quickstart/male-mage.png" className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
          <div className="col-md-9 text-white">
            <div className="card-body px-2">
              <div className="border border-white border-4 rounded-3 px-3 py-1">
                <h5 className="card-title">Name : Kiefer</h5>
                <h5 className="card-title">Class : Hero</h5>
                <h5 className="card-title">Gender : Male</h5>
                <h5 className="card-title m-0">Traits : Brave</h5>
              </div>

              <div className="mt-2 border border-white border-4 rounded-3 px-3 py-1">
                <h5 className="card-title">Strength : 10</h5>
                <h5 className="card-title">Agility : 10</h5>
                <h5 className="card-title">Resilience : 10</h5>
                <h5 className="card-title">Wisdom : 10</h5>
                <h5 className="card-title m-0">Luck : 10</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayArea;
