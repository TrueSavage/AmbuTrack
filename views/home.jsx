const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const Login = require('./components/login.jsx')

const Home = props => {
    return (
        <Html>
            <div className='b-login'>
                <Login />
                <script src="./scripts/login.js"></script>
            </div>
        </Html>
    )
}

module.exports = Home
