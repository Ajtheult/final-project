import React from "react";
import M from "materialize-css";
import background4 from "../imagesofinstruments/background4.jpg";
const NewSignUp = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".datepicker");
    //eslint-disable-next-line
    var instances = M.Datepicker.init(elems, {});
  });
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    //eslint-disable-next-line
    var instances = M.FormSelect.init(elems, {});
  });
  return (
    <div>
      <div className="bg-color">
        <img src={background4} className="bg" alt="bg" />
      </div>
      <h1 className="sign_up_head">Sign Up</h1>
      <div className="container the_container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row move_this_row">
              <div className="input-field col s12 gender">
                <input id="gender" type="text" className="validate" />

                <label>Select your gender</label>
              </div>
              <label htmlFor="birthday" className="left">
                Birthday
              </label>
              <input id="birthday" type="text" className="datepicker" />
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input id="password" type="password" className="validate " />
                <label htmlFor="password">Password</label>
              </div>
              <button
                className="btn waves-effect waves-light black"
                type="submit"
                name="action"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewSignUp;
