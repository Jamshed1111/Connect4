import React, { Component } from 'react'
import PropTypes from 'prop-types'
import{
    Link
  } from "react-router-dom";

  export default function Navbar(){

        return(

            <>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/nameColor">Player Name</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutUs">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/rules">Rules</Link>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-outline-danger login" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                        <button type="button" className="btn btn-outline-danger">Audio</button>
                    </div>
                </div>
            </nav>

            {/* login modal */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-body">

                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">I am not Robot</label>
                            </div>
                        </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createAccModal">Create new Account</button>    
                            <Link to="/aboutUs"><button type="button" className="btn btn-primary" data-bs-dismiss="modal">Login</button></Link>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                
                            {/* <!-- <button type="button" className="btn btn-primary">Save changes</button> --> */}
                        </div>
                    </div>
                </div>
            </div>


            {/* create account modal */}

            <div className="modal fade" id="createAccModal" tabIndex="-1" aria-labelledby="createAccModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content ">
                <div className="modal-header">
                    <h5 className="modal-title" id="createAccModalLabel">Create New Account</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    

                <form>

                    <div className="input-group my-3">
                        <span className="input-group-text">First and last name</span>
                        <input type="text" aria-label="First name" className="form-control"/>
                        {/* <!-- <input type="text" aria-label="middle name" className="form-control"> --> */}
                        <input type="text" aria-label="Last name" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="userName"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cexampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="cexampleInputPassword1"/>
                    </div>
                    
                    {/* <button type="submit" className="btn btn-primary my-3">Submit</button> */}
                    </form>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Create</button>
                </div>
                </div>
            </div>
            </div>

            </>

        )
    
}