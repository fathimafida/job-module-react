import propTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({
    element
}) => {
    const authState = useSelector(state => state.auth)
    return authState.user? element :<Navigate to="/"/>
}

ProtectedRoute.propTypes = {
    element :propTypes.element
}

export default ProtectedRoute