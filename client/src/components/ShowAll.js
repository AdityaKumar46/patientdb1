/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react'

function ShowAll(props) {

    useEffect(() => {
        getPatient();
    }, [])

    const [patient, setPatient] = useState([]);

    const getPatient = async () => {
        const response = await fetch(`http://localhost:5000/api/auth/patient`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json()
        console.log(json);
        setPatient(json);
    }

    return (

        <>
            <div className="container">
                <div className="row my-3">
                    {patient.map((p) => {
                        return <div className="col-lg-3 col-md-3">
                            <div className="card my-3">
                                <div className="card text-dark bg-light">
                                    <h5 className="card-title m-2"><h6>Patient Name:</h6> {p.name}</h5>
                                    <p className="card-text m-2"><h6>Patient id: </h6>{p._id}</p>
                                    <p className="card-text m-2"><h6>Patient DOB: </h6>{new Date(p.birthday).toGMTString()}</p>
                                    <p className="card-text m-2"><h6>Patient Gender: </h6>{p.gender}</p>
                                    <p className="card-text m-2"><h6>Patient phone no.: </h6>{p.phone}</p>
                                    <p className="card-text m-2"><h6>Patient emailId: </h6>{p.email}</p>
                                    <p className="card-text m-2"><h6>Patient PAN/ADHAAR: </h6>{p.proofId}</p>
                                    <p className="card-text m-2"><h6>Patient Id : </h6>{p.patientNumber}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>

    )
}

export default ShowAll
