import pic1 from "../../components/Assest/img/wishlist.png"
import { Link } from "react-router-dom";


const wishlist1 = () => {
    return (
        <>
        <div className="cart-container">
        <div className="cart-content">
          <div className="image-placeholder">
            {/* Image/illustration placeholder */}
            <img src={pic1} alt="Coffee Illustration" />
          </div>
          <div>
            <div>
              <h1 className="h1">Your wishlist is empty</h1>
            </div>
            <div>
              <p className="p">
                <Link to="/shop">Shop today’s deals</Link>
              </p>
            </div>
            <div className="buttons">
              <Link to="/signup" className="sign-in">Sign in to your account</Link>
              <Link to="/signup" className="sign-up">Sign up now</Link>
            </div>
          </div>
        </div>
        </div>
        </>
    );
}

export default wishlist1;