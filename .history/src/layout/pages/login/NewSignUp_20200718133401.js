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
      <h1 className="about">Sign Up</h1>
      <div className="container the_container">
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input id="first_name" type="text" class="validate" />
                <label for="first_name">First Name</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div class="row move_this_row">
              <div class="input-field col s12 gender_colour">
                {" "}
                <select>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                </select>
                <label>Select your gender</label>
              </div>
            </div>

            <label for="birthday" className="left">
              Birthday
            </label>
            <input id="birthday" type="text" class="datepicker" />

            <div class="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" />
              <label for="password">Password</label>
            </div>
            <div class="row">
              <div class="col s12">
                This is an inline input field:
                <div class="input-field inline">
                  <span
                    class="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    Helper text
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewSignUp;
