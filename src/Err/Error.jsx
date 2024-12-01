import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="bg-error bg-white w-full min-h-screen">
            <Link className="m-20 text-2xl text-blue-400 underline" to='/'>Back to Home</Link>
        </div>
    );
};

export default Error;