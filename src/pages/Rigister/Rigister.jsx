import React from "react";
import "./Rigister.scss";

const Rigister = () => {
  return (
    <div>
      <form>
        <div className="form-holder">
          <div className="inputs-holder">
            <div>
              <input placeholder="fullnames..." />
            </div>
            <div>
              <input placeholder="Email..." />
            </div>
            <div>
              <input placeholder="Password.." />
            </div>
            <div>
              <input placeholder="Confirm password..." />
            </div>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            Remember me?
          </div>

          <div className="btn">
            <button>Rigister</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Rigister;
