import React, { useState } from 'react'

const AddPatient = (props) => {
    const [credential, setCredential] = useState({ name: "", birthday: 0, gender: "", phone: "", email: "", occupation: "", proofId: "", patientNumber: 0 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, birthday, gender, phone, email, occupation, proofId, patientNumber } = credential;
        const response = await fetch("/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, birthday, gender, phone, email, occupation, proofId, patientNumber })
        });
        console.log(response);
        const json = await response.json();
        console.log(json);

    }

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="ms-5">
                <h1 className=" container ms-4 m-2">Patient Information</h1>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>

                    <div className="mb-3" style={{ width: "80%" }}>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={onChange} required />
                    </div>

                    <div className="mb-3" style={{ width: "80%" }}>
                        <label htmlFor="date" className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" id="date" name="date" onChange={onChange} required />
                    </div>

                    <div className="mb-3" style={{ width: "80%" }}>
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <input type="text" className="form-control" id="gender" name="gender" onChange={onChange} required />
                    </div>

                    <div className="mb-3" style={{ width: "80%" }}>
                        <label htmlFor="phone" className="form-label">Phone no.</label>
                        <input type="text" className="form-control" id="phone" name="phone" onChange={onChange} minLength={5} required />
                    </div>

                    <div className="mb-3" style={{ width: "80%" }}>
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3" style={{ width: "80%" }}>
                        <label htmlFor="occupation" className="form-label">Occupation</label>
                        <input type="text" className="form-control" id="occupation" name="occupation" onChange={onChange} required />
                    </div>


                    <div className="mb-3" style={{ width: "80%" }}>
                        <label htmlFor="proofId" className="form-label">Proof Id</label>
                        <input type="text" className="form-control" id="proofId" name="proofId" onChange={onChange} />
                    </div>

                    <div className="mb-3" style={{ width: "80%" }}>
                        <label htmlFor="patientNumber" className="form-label">Patient Id</label>
                        <input type="password" className="form-control" id="patientNumber" name="patientNumber" onChange={onChange} required />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </>
    )
}

export default AddPatient
