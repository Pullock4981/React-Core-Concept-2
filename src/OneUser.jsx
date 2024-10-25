

const OneUser = ({user}) => {
    // console.log(user)
    return (
        <div className="add-reduce">
            <h4>Name: {user.name}</h4>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default OneUser;