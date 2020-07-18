import React from "react";
import M from "materialize-css";

const NewSignUp = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".datepicker");
    //eslint-disable-next-line
    var instances = M.Datepicker.init(elems, {});
  });
  return (
    <div>
      <h1>Sign Up</h1>
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
              <div class="input-field col s12">
                {" "}
                <div class="input-field col s12">
                  <select>
                    <option value="" selected>
                      Choose your option
                    </option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                  <label>Materialize Select</label>
                </div>
              </div>
            </div>
            {/* Gender */}

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
