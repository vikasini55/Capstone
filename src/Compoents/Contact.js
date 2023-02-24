import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import './Styles/Contact.css';

const Contact = () => {
    
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [message, messagechange] = useState("");

    const handlesubmit=(e)=> {
        e.preventDefault();
        let gtobj={name,email,phone,message};
        //let cdetails={phone,email,address};
        console.log(gtobj);

        fetch(" http://localhost:8000/GetInTouch",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(gtobj)
        }).then((res)=>{
            toast.success('Submitted.')
        }).catch((err)=>{
            toast.error('Failed ;'+err.message);
        });

       /* fetch(" http://localhost:8000/contactData",{
            method:"GET",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(cdetails)
        })*/
    }

    return (
        <div className="bg">
            <div className="d-flex justify-content-between">
            <div className="offset col-lg-5">
                <form className="container1" onSubmit={handlesubmit} >
                    <div className="card">
                        <div className="card-header">
                            <h2>GET IN TOUCH</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name <span className="errmsg">*</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="form-control" required></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control" required></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg">*</span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control" required></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Message <span className="errmsg">*</span></label>
                                        <textarea value={message} onChange={e => messagechange(e.target.value)} className="form-control" required></textarea>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary" id="sub-btn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer/>
            <div className="contact-details">
                <h2>Contact US</h2>
                <div>Address :123 Park Avenue C, AK Marg, Delhi, India </div>
                <div>Phone: 987 654 3210, 
                            987 654 3211                    
                </div>
                <div>email: contact@topjobs.com </div>
            </div>
        </div>
        </div>


    );
}

export default Contact;