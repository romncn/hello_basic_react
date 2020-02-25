import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { Link } from 'react-router';
import swal from 'sweetalert2';


class Profile extends React.Component {
    MailAlert() {
        swal.fire(

            'rom.ncn@gmail.com'

        )
    }

    render() {
        return (
            <div className="flex-wrapper">
                <div className="Top-page">
                    <Header headertitle={"Welcome to Basic React By Romncn"} />
                    <Content contenttitle="Profile" />



                    <div className="row">
                        <div className="col-5">
                            <div class="d-flex justify-content-center h-100">
                                <div class="image_outer_container">
                                    <div class="green_icon"></div>
                                    <div class="image_inner_container">
                                        <img src="../img/rom-profile.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="container">
                                <h4 className="alert bg-info text-white">Name : Natchanon Niwedtongrirk</h4>
                                <h4 className="alert bg-warning text-white">Age : 21 years old</h4>
                                <h4 className="alert bg-info  text-white">Birthdate : 01/06/41</h4>
                                <h4 className="alert bg-warning text-white">University : KMUTT</h4>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row text-center">
                            <div className="col">
                                <a href="https://www.facebook.com/natchanon.niwedtongrirk" class="scl-btn scl-crcl shadow fab fa-facebook-f"></a>
                            </div><div className="col">
                                <div class="scl-btn scl-crcl shadow fab fa-google " onClick={this.MailAlert} />
                            </div><div className="col">
                                <a href="https://www.instagram.com/romncn/" class="scl-btn scl-crcl shadow fab fa-instagram"></a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="Bottom-page">
                    <Footer />
                </div>

            </div >
        );
    }
}
export default Profile;