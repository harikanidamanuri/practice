import { Link, useNavigate, useNavigation } from "react-router-dom"

function Navbar()  {
    const navigate = useNavigate()
    return(<>
        <nav className="bg-white shadow-md p-4 flex justify -between items-center">
            <div className="hidden md:flex space-x-6">
                <button type="button" className="hover:underline"onClick={()=> navigate("/men")}>Men123</button>
                <button type="button"className="hover:underline">Women</button>
            </div>
        </nav>
    </>)
}
export default Navbar