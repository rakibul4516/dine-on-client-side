import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import loadingdata from '../../public/loadingdata.json'
import Lottie from 'lottie-react';
const ProtectedRoute = ({children}) => {
    const { users, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Lottie className="h-80vh h-[80vh] w-10/12 mx-auto" animationData={loadingdata} loop={true} />
    }
    if (users) {
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to='/signin'></Navigate>
        </div>
    )
};

ProtectedRoute.propTypes = {
    children: PropTypes.node,
};

export default ProtectedRoute;