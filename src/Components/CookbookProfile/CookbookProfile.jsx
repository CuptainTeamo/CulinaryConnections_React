import React from "react";
import "./CookbookProfile.css";


function CookbookProfile(props) {
    // Hardcoded member requests for demonstration
    
    const username = props.user ? props.user.username : 'Admin Username';
    const cookbookName = props.user ? props.user.cookbook : 'Cookbook Name';
    const cookbookDescription = props.user ? props.user.cookbook.description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias repellat, deleniti eligendi voluptates quia neque? Harum quos quisquam, ipsa consequatur nihil voluptate ducimus, mollitia ipsam quis incidunt voluptates ipsum?';
    const cookbookMemberNum = props.user ? props.user.cookbook.numOfMembers : '8';
    const cookbookRegistrationCode = props.user ? props.user.cookbook.registrationCode: 'l8skng89ddfkj0-dfl';
    const memberRequests = props.user ? props.user.cookbook.memberRequests :  [
            { username: "chefJohnDoe", email: "john.doe@example.com" },
            { username: "bakerJane", email: "jane.baker@example.net" },
            { username: "cookMike92", email: "mike92@example.org" },
        ];
    

    return (
        <div className="form-container">
            <h1>{cookbookName} Profile Page</h1>
            <form>
                <div className="inputs-wrapper">
                    <div className="input-section">
                        <div className="innerWrap">
                            <label>Recipe Book Summary</label>
                            <textarea>{cookbookDescription}</textarea>

                            <p>Number of Members: {cookbookMemberNum}</p>

                            <p>
                                Cookbook Registration Code: {cookbookRegistrationCode}
                                <button>Invite Members</button>
                            </p>

                            <label>Member Requests</label>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {memberRequests.map((request, index) => (
                                        <tr key={index}>
                                            <td>{request.username}</td>
                                            <td>{request.email}</td>
                                            <td>
                                                <button>Approve</button>
                                            </td>
                                            <td>
                                                <button>Deny</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="form-actions">
                    <button type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    );
}

export default CookbookProfile;
