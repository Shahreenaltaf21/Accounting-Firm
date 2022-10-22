import React from 'react';
import styled from 'styled-components';
import { FaPaperPlane, FaFighterJet } from 'react-icons/fa'
const NewRSCardsStyle = styled.div`
button, 
a {
    color: #198754;
}

a:hover,
a:focus {
    color: #198754;
}

p {
    line-height: 1.61em;
    font-weight: 300;
    font-size: 1.2em;
}

.category {
    text-transform: capitalize;
    font-weight: 700;
    // color: #9A9A9A;
}

body {
    color: #2c2c2c;
    font-size: 14px; 
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

.nav-item .nav-link,
.nav-tabs .nav-link {
    -webkit-transition: all 300ms ease 0s;
    -moz-transition: all 300ms ease 0s;
    -o-transition: all 300ms ease 0s;
    -ms-transition: all 300ms ease 0s;
    transition: all 300ms ease 0s;
}

.card a {
    -webkit-transition: all 150ms ease 0s;
    -moz-transition: all 150ms ease 0s;
    -o-transition: all 150ms ease 0s;
    -ms-transition: all 150ms ease 0s;
    transition: all 150ms ease 0s;
}

[data-toggle="collapse"][data-parent="#accordion"] i {
    -webkit-transition: transform 150ms ease 0s;
    -moz-transition: transform 150ms ease 0s;
    -o-transition: transform 150ms ease 0s;
    -ms-transition: all 150ms ease 0s;
    transition: transform 150ms ease 0s;
}

[data-toggle="collapse"][data-parent="#accordion"][aria-expanded="true"] i {
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
}


.now-ui-icons {
    display: inline-block;
    font: normal normal normal 14px/1 'Nucleo Outline';
    font-size: inherit;
    speak: none;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

@-webkit-keyframes nc-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@-moz-keyframes nc-icon-spin {
    0% {
        -moz-transform: rotate(0deg);
    }

    100% {
        -moz-transform: rotate(360deg);
    }
}

@keyframes nc-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

.now-ui-icons.objects_umbrella-13:before {
    content: "\ea5f";
}

.now-ui-icons.shopping_cart-simple:before {
    content: "\ea1d";
}

.now-ui-icons.shopping_shop:before {
    content: "\ea50";
}

.now-ui-icons.ui-2_settings-90:before {
    content: "\ea4b";
}

.nav-tabs {
    border: 0;
    padding: 15px 0.7rem;
}

.nav-tabs:not(.nav-tabs-neutral)>.nav-item>.nav-link.active {
    box-shadow: 0px 5px 35px 0px rgba(0, 0, 0, 0.3);
}

.card .nav-tabs {
    border-top-right-radius: 0.1875rem;
    border-top-left-radius: 0.1875rem;
}

.nav-tabs>.nav-item>.nav-link {
    color: #888888;
    margin: 0;
    margin-right: 5px;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 30px;
    font-size: 14px;
    padding: 11px 23px;
    line-height: 1.5;
}

.nav-tabs>.nav-item>.nav-link:hover {
    background-color: #198754;
    color: black;
}

.nav-tabs>.nav-item>.nav-link.active {
    background-color: #198754;
    border-radius: 30px;
    color: #FFFFFF;
}

.nav-tabs>.nav-item>.nav-link i.now-ui-icons {
    font-size: 15px;
    position: relative;
    top: 1px;
    margin-right: 4px;
}

.nav-tabs.nav-tabs-neutral>.nav-item>.nav-link {
    color: #FFFFFF;
}

.nav-tabs.nav-tabs-neutral>.nav-item>.nav-link.active {
    background-color: rgba(255, 255, 255, 0.2);
    color: #FFFFFF;
}

.card {
    border: 0;
    // border-radius: 0.1875rem;
    border-radius: 40px;
    display: inline-block;
    position: relative;
    width: 100%;
    margin-bottom: 30px;
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
}

.card .card-header {
    background-color: transparent;
    border-bottom: 0;
    background-color: transparent;
    border-radius: 0;
    padding: 0;
}

.card[data-background-color="orange"] {
    background-color: #f96332;
}

.card[data-background-color="red"] {
    background-color: #FF3636;
}

.card[data-background-color="yellow"] {
    background-color: #FFB236;
}

.card[data-background-color="blue"] {
    background-color: #2CA8FF;
}

.card[data-background-color="green"] {
    background-color: #15b60d;
}

[data-background-color="orange"] {
    background-color: #e95e38;
}

[data-background-color="black"] {
    background-color: #2c2c2c;
}

[data-background-color]:not([data-background-color="gray"]) {
    color: #FFFFFF;
}

[data-background-color]:not([data-background-color="gray"]) p {
    color: #FFFFFF;
}

[data-background-color]:not([data-background-color="gray"]) a:not(.btn):not(.dropdown-item) {
    color: #FFFFFF;
}

[data-background-color]:not([data-background-color="gray"]) .nav-tabs>.nav-item>.nav-link i.now-ui-icons {
    color: #FFFFFF;
}
 

.now-ui-icons {
  display: inline-block;
  font: normal normal normal 14px/1 'Nucleo Outline';
  font-size: inherit;
  speak: none;
  text-transform: none;
  /* Better Font Rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


footer{
    margin-top:50px;
    color: #555;
    background: #fff;
    padding: 25px;
    font-weight: 300;
    background: #f7f7f7;
    
}
.footer p{
    margin-bottom: 0;
}
footer p a{
    color: #555;
    font-weight: 400;
}

footer p a:hover{
    color: #e86c42;
}

@media screen and (max-width: 768px) {

    .nav-tabs {
        display: inline-block;
        width: 100%;
        padding-left: 100px;
        padding-right: 100px;
        text-align: center;
    }

    .nav-tabs .nav-item>.nav-link {
        margin-bottom: 5px;
    }

} 
.s1{list-style-type: square;}
.lii{
    color: #2c3e50;
    font-size: 18px;
    line-height: 30px;
    text-align: justify;
    letter-spacing: 1px;
    font-family: 'Raleway', serif;
  } 
`;
export default function NewRSCards() {
    return (
        <NewRSCardsStyle>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10 ml-auto col-xl-12 mr-auto">
                        <p className="text-center category">How Credits and Deductions Work</p>
                        <div className="card">
                            <div className="card-header">
                                <ul className="nav nav-tabs justify-content-center" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#home" role="tab">
                                            <FaPaperPlane />Credits for Individuals
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#profile" role="tab">
                                            <FaFighterJet />Deductions for Individuals
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab3" role="tab">
                                            <FaFighterJet />Homeowner Credits
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab3" role="tab">
                                            <FaFighterJet />Income and Savings Credits
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content text-center">
                                    <div className="tab-pane active" id="home" role="tabpanel">
                                        <p>
                                            When you claim federal tax credits and deductions on your tax return, you can change
                                            the amount of tax you owe.<br />
                                            <span>●</span>	Deductions can reduce the amount of your income before you calculate the tax you owe.<br />
                                            <span>●</span>	Credits can reduce the amount of tax you owe or increase your tax refund, and some credits may give you a refund even if you don't owe any tax.


                                        </p>
                                    </div>
                                    <div className="tab-pane" id="profile" role="tabpanel">
                                        <p> I will be the leader of a company that ends up being worth billions of dollars,
                                            because I got the answers. I understand culture. I am the nucleus. I think
                                            that’s a responsibility that I have, to push possibilities, to show people, this
                                            is the level that things could be at. I think that’s a responsibility that I have,
                                            to push possibilities, to show people, this is the level that things could be at. </p>
                                    </div>
                                    <div className="tab-pane" id="tab3" role="tabpanel">
                                        <p> I will be the leader of a company that ends up being worth billions of dollars,
                                            because I got the answers. I understand culture. I am the nucleus. I think that’s a
                                            responsibility that I have, to push possibilities, to show people, this is the level
                                            that things could be at. I think that’s a responsibility that I have, to push possibilities,
                                            to show people, this is the level that things could be at. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 ml-auto col-xl-12 mr-auto">
                        <p className="text-center category">Tax prep checklists </p>
                        <div className="card">
                            <div className="card-header">
                                <ul className="nav nav-tabs justify-content-center" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#profile1" role="tab">
                                            <FaPaperPlane />Basic Information
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#profile2" role="tab">
                                            <FaFighterJet />Shareholders Information
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#profile3" role="tab">
                                            <FaFighterJet />Business and Financial Records
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#profile4" role="tab">
                                            <FaFighterJet />Asset Records
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="profile1" role="tabpanel">
                                        <p class="text-center d-flex">
                                             <ul className='flex-start'>
                                                <li>●	Determine business return type for filing as registered with the IRS (Form 1065, 1120, or 1120S). If unsure, contact the IRS Business help line at 1-800-829-4933</li>
                                                <li>●	Employer Identification Number (EIN) as registered with the IRS. If you don’t have an EIN, apply online at IRS.gov</li>
                                                <li>●	List of states and state ID numbers in which your business has nexus or a presence that requires reporting</li>
                                                <li>●	Copy of articles of incorporation or bylaws including any amendments</li>
                                                <li>●	Last year’s federal, state, and local tax returns</li>
                                             </ul>
                                        </p>

                                    </div>
                                    <div className="tab-pane" id="profile2" role="tabpanel">
                                         
                                    </div>
                                    <div className="tab-pane" id="profile3" role="tabpanel">
                                         
                                    </div>
                                    <div className="tab-pane" id="profile4" role="tabpanel">
                                         
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NewRSCardsStyle>
    );
}
