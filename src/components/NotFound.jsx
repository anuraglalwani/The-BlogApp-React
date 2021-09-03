import { Link } from "react-router-dom"

const NotFound = () => {
    return ( <div>
        <p>Page Not Found</p>
        <Link to="/">Click here to go to homePage</Link>
    </div> );
}
 
export default NotFound;