import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EdituserInfo.css'

function EditUserInfo() {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        education: '',
        sex: '',
        bios: '',
        contactNumber: '',
        email: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        profilePicture: ''
    });

    const [selectedFile, setSelectedFile] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setUserInfo({ ...userInfo, profilePicture: event.target.files[0].name });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('profilePicture', selectedFile);
        formData.append('userInfo', JSON.stringify(userInfo));
        console.log(formData);
    };

    return (
        <div className='editUserInfo'>
            <span>Back</span>
            <h2>User Info</h2>
            <form onSubmit={handleSubmit} >
                <label>
                    Profile Picture:
                    <input
                        type="file"
                        name="profilePicture"
                        onChange={handleFileChange}
                    />
                </label>
                <br />
                <label>
                    Bios:
                    <textarea
                        name="otherDetails"
                        value={userInfo.otherDetails}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={userInfo.firstName}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={userInfo.lastName}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Date of Birth:
                    <input
                        type="date"
                        name="dob"
                        value={userInfo.dob}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Education:
                    <select
                        name="education"
                        value={userInfo.education}
                        onChange={handleInputChange}
                    >
                        <option value="">Select</option>
                        <option value="High School">High School</option>
                        <option value="College">College</option>
                        <option value="University">University</option>
                    </select>
                </label>
                <br />
                <label>
                    Sex:
                    <br />
                    <select
                        name="sex"
                        value={userInfo.sex}
                        onChange={handleInputChange}
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <br />
                <label>
                    Contact Number:
                    <input
                        type="number"
                        name="contactNumber"
                        value={userInfo.contactNumber}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={userInfo.address}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={userInfo.city}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    State:
                    <input
                        type="text"
                        name="state"
                        value={userInfo.state}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Country:
                    <input
                        type="text"
                        name="country"
                        value={userInfo.country}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Pincode:
                    <input
                        type="number"
                        name="pincode"
                        value={userInfo.pincode}
                        onChange={handleInputChange}
                    />
                </label>
                <br />


                <button type="submit" className='submitBtn'>Submit</button>
            </form>
        </div>
    );
}

export default EditUserInfo;
