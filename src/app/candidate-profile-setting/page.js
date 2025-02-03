import React from "react";

import NavbarDark from "../componants/navbarDark";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";
import Profile from "../componants/profile";

export default function CandidateProfileSetting(){
    return(
        <>
        <NavbarDark/>
        <section className="section">
            <div className="container">
                <div className="row">
                    <Profile/>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="rounded shadow p-4">
                            <form>
                                <h5>Personal Detail :</h5>
                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">First Name:<span className="text-danger">*</span></label>
                                            <input name="name" id="firstname" type="text" className="form-control" placeholder="First Name :"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Last Name:<span className="text-danger">*</span></label>
                                            <input name="name" id="lastname" type="text" className="form-control" placeholder="Last Name :"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Your Email:<span className="text-danger">*</span></label>
                                            <input name="email" id="email2" type="email" className="form-control" placeholder="Your email :"/>
                                        </div> 
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Occupation:</label>
                                            <select className="form-control form-select" id="Type">
                                                <option value="WD">Web Designer</option>
                                                <option value="WD">Web Developer</option>
                                                <option value="UI">UI / UX Desinger</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Location:</label>
                                            <select className="form-control form-select" id="Country">
                                                <option value="USA">USA</option>
                                                <option value="CAD">Canada</option>
                                                <option value="CHINA">China</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="formFile" className="form-label fw-semibold">Upload Your Cv / Resume :</label>
                                            <input className="form-control" type="file" id="formFile"/>
                                        </div>                                                                               
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Introduction :</label>
                                            <textarea name="comments" id="comments2" rows="4" className="form-control" placeholder="Introduction :"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <input type="submit" id="submit2" name="send" className="submitBnt btn btn-primary" value="Save Changes"/>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="rounded shadow p-4 mt-4">
                            
                                <div className="row">
                                    <div className="col-md-6 mt-4 pt-2">
                                        <h5>Contact Info :</h5>

                                        <form>
                                            <div className="row mt-4">
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label className="form-label fw-semibold">Phone No. :</label>
                                                        <input name="number" id="number" type="number" className="form-control" placeholder="Phone :"/>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label className="form-label fw-semibold">Website :</label>
                                                        <input name="url" id="url" type="url" className="form-control" placeholder="Url :"/>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12 mt-2 mb-0">
                                                    <button className="btn btn-primary">Add</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    
                                    <div className="col-md-6 mt-4 pt-2"> 
                                        <h5>Change password :</h5>
                                        <form>
                                            <div className="row mt-4">
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label className="form-label fw-semibold">Old password :</label>
                                                        <input type="password" className="form-control" placeholder="Old password" required=""/>
                                                    </div>
                                                </div>
            
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label className="form-label fw-semibold">New password :</label>
                                                        <input type="password" className="form-control" placeholder="New password" required=""/>
                                                    </div>
                                                </div>
            
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label className="form-label fw-semibold">Re-type New password :</label>
                                                        <input type="password" className="form-control" placeholder="Re-type New password" required=""/>
                                                    </div>
                                                </div>
            
                                                <div className="col-lg-12 mt-2 mb-0">
                                                    <button className="btn btn-primary">Save password</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                        </div>

                        <div className="rounded shadow p-4 mt-4">
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5>Account Notifications :</h5>

                                        <div className="d-flex justify-content-between mt-4">
                                            <h6 className="mb-0">When someone mentions me</h6>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="noti1"/>
                                                <label className="form-check-label" htmlFor="noti1"></label>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-4">
                                            <h6 className="mb-0">When someone follows me</h6>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" defaultChecked id="noti2"/>
                                                <label className="form-check-label" htmlFor="noti2"></label>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-4">
                                            <h6 className="mb-0">When shares my activity</h6>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="noti3"/>
                                                <label className="form-check-label" htmlFor="noti3"></label>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-4">
                                            <h6 className="mb-0">When someone messages me</h6>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="noti4"/>
                                                <label className="form-check-label" htmlFor="noti4"></label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <h5>Marketing Notifications :</h5>

                                        <div className="d-flex justify-content-between mt-4">
                                            <h6 className="mb-0">There is a sale or promotion</h6>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="noti5"/>
                                                <label className="form-check-label" htmlFor="noti5"></label>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-4">
                                            <h6 className="mb-0">Company news</h6>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="noti6"/>
                                                <label className="form-check-label" htmlFor="noti6"></label>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-4">
                                            <h6 className="mb-0">Weekly jobs</h6>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" defaultChecked id="noti7"/>
                                                <label className="form-check-label" htmlFor="noti7"></label>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-4">
                                            <h6 className="mb-0">Unsubscribe News</h6>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" defaultChecked id="noti8"/>
                                                <label className="form-check-label" htmlFor="noti8"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="rounded shadow p-4 mt-4">
                            <form>
                                <h5 className="text-danger">Delete Account :</h5>
                                <div className="row mt-4">
                                    <h6 className="mb-0">Do you want to delete the account? Please press below Delete button</h6>
                                    <div className="mt-4">
                                        <button className="btn btn-danger">Delete Account</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer top={true}/>
        <ScrollTop/>
        </>
    )
}