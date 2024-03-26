import React from "react";

function CreateCookbookCard(props) {

    const username = props.user ? props.user.username : 'Admin Username';
    const cookbookName = props.user ? props.user.cookbook : '';
    const cookbookDescription = props.user ? props.user.cookbook.description : '';

    return (
        <div className="form-container">
            <h1>Create Your Private Cookbook</h1>
            <form>
                <div className="inputs-wrapper">
                    <div className="input-section">
                        <div className="innerWrap">
                            <label>Username</label>
                            <label>{username}</label>

                            <label>Cookbook Name:</label>
                            <input 
                                type="text"
                                value={cookbookName}
                                placeholder="Enter the name of your cookbook"
                            />
                            <label>Cookbook Summary</label>
                            <textarea
                                type="text"
                                value={cookbookDescription}
                                placeholder="Description of cookbook"
                            />
                        </div>
                    </div>
                </div>
                <div className="form-actions">
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    );
}

export default CreateCookbookCard;
