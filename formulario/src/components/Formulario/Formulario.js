import React, { Component } from 'react';

class Formulario extends Component {
  state = {
    id: "",
    firstName : "",
    lastName :  "",
    userName : "",
    password : "",
    passwordConfirmitaion : "",
    email : "",
    address :"",
    codigoPostal : "",
    telefono : "",
    gender : "",
    birthDate : "",
    country : "",
    city : "",
    avatar:"",
  }
  
  render() {
    return (
      <div>
        <form action="">
          <div className="">
            <label >First Name</label>
            <input 
              type="text"
              required = "true"
              name="firstname"
              className="form-control"
              placeholder="Daniel"
              // value={}
              // onChange={}
            />
          </div>
          
          <div className="">
            <label >Last Name</label>
            <input 
              type="text"
              required = "true"
              name="lastname"
              className="control"
              placeholder="Heidari"
              // value={}
              // onChange={}
            />
          </div>

          <div className="">
            <label htmlFor="">UserName</label>
            <input 
              type="text"
              required = "true"
              name="username"
              className=""
              // value={}
              // onChange={}
            />
          </div>

          <div className="">
            <label htmlFor="">Password</label>
            <input 
              type="password"
              required = "true"
              name="passwrod"
              className=""
              // value={}
              // onChange={}
            />
          </div>

          <div className="">
            <label htmlFor="">Confirm Password</label>
            <input 
              type="password"
              required = "true"
              name="passwrodconfirm"
              className=""
              // value={}
              // onChange={}
            />
          </div>

          <div className="">
            <label htmlFor="">Email</label>
            <input 
              type="email"
              required = "true"
              name="email"
              className=""
              // value={}
              // onChange={}
            />
          </div>

          <div className="">
            <label htmlFor="">Address</label>
            <input 
              type="text"
              required = "true"
              name="address"
              className=""
              // value={}
              // onChange={}
            />
          </div>

          <div className="">
            <label htmlFor="">Codigo Postal</label>
            <input 
              type="text"
              required = "true"
              name="codigopostal"
              className=""
              // value={}
              // onChange={}
            />
          </div>
          <div className="">
            <label htmlFor="">Telefono</label>
            <input 
              type="text"
              required = "true"
              name="telefono"
              className=""
              // value={}
              // onChange={}
            />
          </div>

          <div className="">
            <label htmlFor="">Gender</label>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
            <input type="radio" value="Other" name="gender" /> Other
          
          </div>

          <div className="">
            <label htmlFor="">BirsthDay</label>
            <input 
              type="Date"
              required = "true"
              name=""
              className="birthday"
              // value={}
              // onChange={}
            />
          </div>

          <div className="">
            <label htmlFor="">Country</label>
            <input 
              type="text"
              required = "true"
              name="country"
              className=""
              // value={}
              // onChange={}
            />
          </div>

          <div className="">
            <label htmlFor="">City</label>
            <input 
              type="text"
              required = "true"
              name="city"
              className=""
              // value={}
              // onChange={}
            />
          </div>


          <div>
            <button
            className=""
            
            >Submit</button>
          </div>

        </form>
      </div>
    );
  }
}

export default Formulario;