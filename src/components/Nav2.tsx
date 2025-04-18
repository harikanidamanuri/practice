import { Link } from "react-router-dom";

const Nav2 = () => {
    return (
        <div className="max-w-7xl mx-auto flex justify-center space-x-10 py-4">
            <Link to="/shopmen">
                <button className="hover:underline text-lg font-medium">
                    Men's shoes
                </button>
            </Link>
            <Link to="/shopwomen">
                <button className="hover:underline text-lg font-medium">
                    Women's shoes
                </button>
            </Link>
            <Link to="/sale">
                <button className="hover:underline text-lg font-medium">
                    New Arrivals
                </button>
            </Link>
        </div>
    );
};

export default Nav2;
