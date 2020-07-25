import React from "react";
import background4 from "../imagesofinstruments/background4.jpg";
const NewSignUp = () => {
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
              <div className="input-field col s12">
                <input
                  id="fullname"
                  type="text"
                  className="validate"
                  required
                />
                <label htmlFor="fullname">FullName</label>
              </div>
            </div>
            <div className="row move_this_row">
              <div className="input-field col s12 gender">
                <input id="gender" type="text" className="validate" required />

                <label htmlFor="gender">Gender</label>
              </div>
              <div className="input-field col s12 gender">
                <input
                  id="birthday"
                  type="text"
                  className="validate"
                  required
                />

                <label htmlFor="birthday">Birthday</label>
              </div>
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  required
                />
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
