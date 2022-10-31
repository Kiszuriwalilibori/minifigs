export const Details = () => {
    return (
        <div className="details">
            {/* <h2 className="fromLeft">Shipping details</h2> */}
            <div className="form-item">
                <label>Name</label>
                <input type="text" />
            </div>
            <div className="form-item">
                <label>Surname</label>
                <input type="text" />
            </div>
            <div className="form-item full-width">
                <label>Phone Number</label>
                <input type="text" />
            </div>
            <div className="form-item full-width">
                <label>Email</label>
                <input type="text" />
            </div>
            <div className="form-item full-width">
                <label>Date of Birth</label>
                <input type="text" />
            </div>
            <div className="form-item full-width">
                <label>Address</label>
                <input type="text" />
            </div>
            <div className="form-item full-width">
                <label>City</label>
                <input type="text" />
            </div>
            <div className="form-item">
                <label>State</label>
                <input type="text" />
            </div>
            <div className="form-item">
                <label>Zip Code</label>
                <input type="text" />
            </div>
        </div>
    );
};
