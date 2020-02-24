import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { Link } from 'react-router';

class Profile extends React.Component {
    render() {
        return (
            <div className="flex-wrapper">
                <div className="Top-page">
                    <Header headertitle={"Welcome to Basic React By Romncn"} />
                    <Content contenttitle="Profile" />
                    <Link to="/" >
                        <h1>Home</h1>
                    </Link>
                </div>
                <div className="Bottom-page">
                    <Footer />
                </div>

            </div>
        );
    }
}
export default Profile;