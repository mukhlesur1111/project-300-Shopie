import React from 'react';
import './Login.css'
const Register = () => {
    return (
        <div class="container">
         <form class="form-section">
          <div class="form-div">
              <h1> Please Create Account</h1>
               <div class="row mb-3 input-div">
                  <label for="inputEmail3" class="col-sm-2 col-form-label text-large">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputEmail3"/>
                    </div>
              </div>
               <div class="row mb-3 input-div">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                 <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3"/>
                 </div>
              </div>
                 <button type="submit" class="btn btn-primary">Register</button>
                 <p>Already have a account please? <a href='login.html'>Login</a></p>
           </div>
         </form>
        </div>
    );
};

export default Register;