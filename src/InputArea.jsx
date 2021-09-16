import React from "react";

const InputArea = () => {
  return (
    <div className="container py-5">
      <h5 className="text-white font-weight-bold">入力エリア</h5>

      <div className="mb-3 row">
        <label for="inputName" className="col-sm-1 col-form-label text-white">
          Name
        </label>
        <div className="col-sm-3">
          <input type="text" className="form-control" id="inputName" />
        </div>
      </div>

      <div className="mb-3 row">
        <label for="inputName" className="col-sm-1 col-form-label text-white">
          Gender
        </label>
        <div className="col-sm-3 mt-2">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label className="form-check-label text-white" for="inlineRadio1">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label className="form-check-label text-white" for="inlineRadio2">
              Female
            </label>
          </div>
        </div>
      </div>

      <div className="mb-3 row">
        <label for="inputName" className="col-sm-1 col-form-label text-white">
          Class
        </label>
        <div className="col-sm-3">
          <select className="form-select" aria-label="Default select example">
            <option value="1">Hero</option>
            <option value="2">Warrior</option>
            <option value="3">Mage</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <label for="inputName" className="col-sm-1 col-form-label text-white">
          Traits
        </label>
        <div className="col-sm-3">
          <select className="form-select" aria-label="Default select example">
            <option value="1">Everyman</option>
            <option value="2">Bat out of hell</option>
            <option value="3">Brave</option>
            <option value="3">Lucky devil</option>
            <option value="3">Tomboy</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputArea;
