import { Link } from "react-router-dom"

const Button = () => {
	return (<>
		
		<div className="absolute bottom-4 left-0 w-full flex flex-col items-center space-y-2 
            md:flex-row md:justify-center md:space-y-0 md:space-x-4 
            opacity-100 visible 
            md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible 
            transition-opacity duration-300">
			<Link to="/Shopmen">
					<button className="px-6 py-2 border border-black text-black bg-white uppercase text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white">shop men
					</button>
			</Link>
			<Link to='Shopwomen'>
					<button className="px-6 py-2 border border-black text-black bg-white uppercase text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white">shop women
					</button>
			</Link>
				
		</div>
	</>)
}
export default Button
