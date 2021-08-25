import React from 'react'
import './Planform.css';
import {useGlobalContext} from '../Context';
import {useHistory} from 'react-router-dom';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import TabletMacOutlinedIcon from '@material-ui/icons/TabletMacOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import Header from '../Header';

function Planform() {
    const {user} = useGlobalContext();
    const history = useHistory();


    return (
        <div className="planform">
            
            <Header></Header>

            <div className="planform_container">
                <div className="planform_profile_avatar">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
                </div>
                <div>
                <div className="planform_userName">
                    <p>Hey  {user?.email}</p>
                </div>
                <div className="planform_details">
                    <h2>Choose the plan that’s right for you</h2>
                    <div className="planform_point">
                        <CheckOutlinedIcon className="planform_point_icon"></CheckOutlinedIcon>
                        <h3>Watch all you want. Ad-free.</h3>
                    </div>

                    <div className="planform_point">
                        <CheckOutlinedIcon className="planform_point_icon"></CheckOutlinedIcon>
                        <h3>Recommendations just for you.</h3>
                    </div>

                    <div className="planform_point">
                        <CheckOutlinedIcon className="planform_point_icon"></CheckOutlinedIcon>
                        <h3>Change or cancel your plan anytime.</h3>
                    </div>
                </div>

                <div className="planform_plans">
                    <div className="planform_singlePlan">
                        <div className="planform_planType">Mobile</div>
                        <p>$ 199</p>
                        <p>480p</p>
                        <div className="planform_devices_accessible">
                            <div className="planform_single_device">
                                <PhoneIphoneOutlinedIcon></PhoneIphoneOutlinedIcon>
                                <p>Phone</p>
                            </div>

                            <div className="planform_single_device">
                                <TabletMacOutlinedIcon></TabletMacOutlinedIcon>
                                <p>Tablet</p>
                            </div>
                        </div>
                        <button onClick={() => history.push('/homescreen')} className="planform_subscribeBtn">Subscribe</button>
                    </div>

                    <div className="planform_singlePlan">
                        <div className="planform_planType">Basic</div>
                        <p>$ 499</p>
                        <p>480p</p>
                        <div className="planform_devices_accessible">
                            <div className="planform_single_device">
                                <PhoneIphoneOutlinedIcon></PhoneIphoneOutlinedIcon>
                                <p>Phone</p>
                            </div>

                            <div className="planform_single_device">
                                <TabletMacOutlinedIcon></TabletMacOutlinedIcon>
                                <p>Tablet</p>
                            </div>

                            <div className="planform_single_device">
                                <ComputerOutlinedIcon></ComputerOutlinedIcon>
                                <p>Computer</p>
                            </div>

                            <div className="planform_single_device">
                                <TvOutlinedIcon></TvOutlinedIcon>
                                <p>TV</p>
                            </div>
                        </div>
                        <button onClick={() => history.push('/homescreen')} className="planform_subscribeBtn">Subscribe</button>
                    </div>

                    <div className="planform_singlePlan">
                        <div className="planform_planType">Standard</div>
                        <p>$ 639</p>
                        <p>1080p</p>
                        <div className="planform_devices_accessible">
                            <div className="planform_single_device">
                                <PhoneIphoneOutlinedIcon></PhoneIphoneOutlinedIcon>
                                <p>Phone</p>
                            </div>

                            <div className="planform_single_device">
                                <TabletMacOutlinedIcon></TabletMacOutlinedIcon>
                                <p>Tablet</p>
                            </div>

                            <div className="planform_single_device">
                                <ComputerOutlinedIcon></ComputerOutlinedIcon>
                                <p>Computer</p>
                            </div>

                            <div className="planform_single_device">
                                <TvOutlinedIcon></TvOutlinedIcon>
                                <p>TV</p>
                            </div>
                        </div>
                        <button onClick={() => history.push('/homescreen')} className="planform_subscribeBtn">Subscribe</button>
                    </div>

                    <div className="planform_singlePlan">
                        <div className="planform_planType">Premium</div>
                        <p>$ 799</p>
                        <p>4K+HDR</p>
                        <div className="planform_devices_accessible">
                            <div className="planform_single_device">
                                <PhoneIphoneOutlinedIcon></PhoneIphoneOutlinedIcon>
                                <p>Phone</p>
                            </div>

                            <div className="planform_single_device">
                                <TabletMacOutlinedIcon></TabletMacOutlinedIcon>
                                <p>Tablet</p>
                            </div>

                            <div className="planform_single_device">
                                <ComputerOutlinedIcon></ComputerOutlinedIcon>
                                <p>Computer</p>
                            </div>

                            <div className="planform_single_device">
                                <TvOutlinedIcon></TvOutlinedIcon>
                                <p>TV</p>
                            </div>
                        </div>
                        <button onClick={() => history.push('/homescreen')} className="planform_subscribeBtn">Subscribe</button>
                    </div>
                </div>
                <div className="planform_footer">
                    <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. <br />
                         Not all content is available in all resolutions. See our <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a> for more details.</p>
                    <p>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium,<br />
                         2 with Standard, and 1 with Basic and Mobile.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Planform
