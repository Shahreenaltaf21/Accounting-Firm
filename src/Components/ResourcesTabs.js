import React from 'react';
// import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import { TaxPreprationStyle } from '../Pages/TaxPrepration'
const NewRSCardsStyle = styled.div`
.card-body{
    width: 100;
} 
.sidebar {
    background-color: white;
    width: 50%;
    margin-left: 10rem;
    min-height: 600px;
    border: 0px solid black;
    padding: 0px 8px 0px 8px; 
}  
.sidebar-title {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
} 
.area {
    margin-bottom: 42px;
} 
.area ul {
    padding: 0;
} 
.area ul li {
    list-style: none;
} 
.area ul li a {
    text-decoration: none;
    color: #898787;
    display: block;
} 
.sidebar-list li {
    margin-bottom: 6px;
    font-size: 0.8rem;
} 
.sidebar-list li a span {
    float: right;
} 
.sidebar-featured-product p {
    font-size: .9rem; 
}
.row {
    --bs-gutter-x: 0; 
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-.5 * var(--bs-gutter-x));
    margin-left: calc(-.5 * var(--bs-gutter-x));
}
.sec-title .text {
    position: relative;
    font-size: 14px;
    line-height: 29px;
    color: #848484;
    font-weight: 400;
    margin-top: 10px;
}
.sec-title {
    position: relative;
    z-index: 1;
    margin-bottom: 20px;
}
.sec-title ul a{
    color: #198754;
} 
a:hover {
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
    color: #9A9A9A;
} 
body { 
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
.nav-tabs {
    border: 0;
    padding: 0px 0.7rem;
} 
.nav-tabs:not(.nav-tabs-neutral)>.nav-item>.nav-link.active {
    box-shadow: 0px 5px 35px 0px rgba(0, 0, 0, 0.3);
}  
.nav-tabs>.nav-item>.nav-link {
    color: #888888;
    margin: 0;
    margin-right: 5px;
    background-color: transparent;
    border: 1px solid transparent; 
    font-size: 14px;
    padding: 11px 23px;
    line-height: 1.5;
} 
.nav-tabs>.nav-item>.nav-link:hover {
    background-color: transparent;
} 
.nav-tabs>.nav-item>.nav-link.active {
    background-color: #444; 
    color: #FFFFFF;
} 
.nav-tabs>.nav-item>.nav-link i.now-ui-icons {
    font-size: 14px;
    position: relative;
    top: 1px;
    margin-right: 3px;
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
    display: inline-block;
    position: relative;
    width: 100%; 
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
} 
.card .card-header {
    background-color: transparent;
    border-bottom: 0;
    background-color: transparent; 
    padding: 0;
}  
.card[data-background-color="green"] {
    background-color: #15b60d;
} 
[data-background-color="orange"] {
    background-color: #198754;
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
.list{
    width: 80%;
      margin: 1em auto; 
  } 
  .list ul {
    list-style-type: none;
  }
  .list ul li { 
    list-style: disc;
    padding-left: 4px;
  }  
  .list li {
    margin-bottom: 0.2em;
  } 
 .olu{
    padding: 0px 28px;
    margin: 0;
 }
`;
export default function ResourcesTabs() { 
    return (
        <NewRSCardsStyle>
            <div>
                <div className="row">
                    <div className="card">
                        <div className="card-header">
                            <ul className="nav nav-tabs nav-tabs-neutral justify-content-center" role="tablist" data-background-color="orange">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#profile1" role="tab">Individuals Credits & Deductions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#profile2" role="tab">Business  Credits & Deductions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#profile3" role="tab">Tax Preparation Checklist</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#profile4" role="tab">Tax Withholding Estimator</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#profile5" role="tab">Check Tax Return Status</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="tab-content ">
                                <div className="tab-pane active" id="profile1" role="tabpanel">
                                    <div className='d-flex'>
                                        <div className='container' style={{ width: "30%" }}>
                                            <div className="container my-5">
                                                <div className="sidebar">
                                                    <div className="sidebar-categories area">
                                                        <a href="#profile1" className="sidebar-title nav-links" data-bs-toggle="collapse">Individuals</a>
                                                        <hr />
                                                        <div id="sidebar-categories" className="collapse show">
                                                            <ul className="sidebar-list">
                                                                <li><a className='nav-links' href="#credits" >Credits</a></li>
                                                                <li><a className='nav-links' href="#Deductions" >Deductions</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="sidebar-sort area">
                                                        <ul className="sidebar-list">
                                                            <li>
                                                                <a className="sidebar-title nav-links" href="https://www.irs.gov/credits-deductions/businesses" data-bs-toggle="collapse">Business</a>
                                                            </li>
                                                        </ul>
                                                        <hr />
                                                        <div id="sidebar-sort" className="collapse show"> 
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner-column" style={{ width: "70%", marginTop: "4rem" }}>
                                            <div className="sec-title" id='credits' >
                                                <h5>What is Tax Credits?</h5>
                                                <p className="text">
                                                    The term tax credit refers to an amount of money that taxpayers
                                                    can subtract directly from the taxes they owe. Unlike deductions, which lower the amount of
                                                    taxable income, tax credits reduce the actual amount of tax owed. The value of a tax credit
                                                    depends on the nature of the credit; certain types of tax credits
                                                    are granted to individuals or businesses in specific locations, classifications, or industries.
                                                </p>
                                                <h5>KEY TAKEWAYS</h5>
                                                <p className="text list">
                                                    <ul>
                                                        <li>
                                                            Income tax credits are amounts a taxpayer can deduct from their taxable income, dollar for dollar.
                                                        </li>
                                                        <li>
                                                            The tax credit is more advantageous than the tax deduction because it lowers both the tax balance and the tax due rather than just the amount of taxable income.
                                                        </li>
                                                        <li>
                                                            There are three basic types of tax credits: nonrefundable, refundable, and partially refundable.

                                                        </li>
                                                        <li>
                                                            Refundable credits are very beneficial to taxpayers as they are paid out in full.

                                                        </li>
                                                        <li>
                                                            A nonrefundable tax credit can reduce the tax you owe to zero, but it can't provide you with a tax refund.

                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className="sec-title" style={{ marginTop: "3rem" }}>
                                                <h4>Credits for Individuals</h4>
                                                <span className="title">(You may not qualify for all Credits and Deductions)</span>
                                            </div>
                                            <div className='container' name="credits">
                                                <TaxPreprationStyle>
                                                    <Accordion defaultActiveKey="0" flush>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Child Tax Credit</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="list">
                                                                    <ul className='m-4 text'>
                                                                        <li>
                                                                            <a className="text-success" href="https://www.irs.gov/credits-deductions/advance-child-tax-credit-payments-in-2021"  >
                                                                                Advance payments of the Child Tax Credit
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="text-success" href="https://www.irs.gov/credits-deductions/2021-child-tax-credit-and-advance-child-tax-credit-payments-topic-h-reconciling-your-advance-child-tax-credit-payments-on-your-2021-tax-return" >
                                                                                Reconcile advance payments of the Child Tax Credit on your 2021 tax return
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="text-success" href="#https://www.irs.gov/help/ita/does-my-childdependent-qualify-for-the-child-tax-credit-or-the-credit-for-other-dependents"  >
                                                                                Does my child/dependent qualify for the Child Tax Credit or the Credit for Other Dependents?
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="text-success" href="https://www.irs.gov/credits-deductions/individuals/child-tax-credit"  >
                                                                                Child Tax Credit and Credit for Other Dependents
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="text-success" href="https://www.irs.gov/forms-pubs/about-schedule-8812-form-1040"  >
                                                                                Publication 8812, Credits for Qualifying Children and Other Dependents
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header>Dependent Care Credit</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="list">
                                                                    <ul className='m-4 text'>
                                                                        <li>
                                                                            <a className="text-success" href="https://www.irs.gov/newsroom/child-and-dependent-care-credit-faqs"  >
                                                                                Child and Dependent Care Credit
                                                                            </a>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="2">
                                                            <Accordion.Header>Tax Credit with Dependents </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="list">
                                                                    <ul className='m-4 text'>
                                                                        <li>
                                                                            <a className="text-success" href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit-eitc"  >
                                                                                Earned Income Tax Credit
                                                                            </a>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="3">
                                                            <Accordion.Header>Other Child Credit  </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="list">
                                                                    <ul className='m-4 text'>
                                                                        <li>
                                                                            <a className="text-success" href="https://www.irs.gov/help/ita/am-i-eligible-to-claim-a-credit-for-adopting-a-child-or-to-exclude-employer-provided-adoption-benefits-from-my-employer"  >
                                                                                Adoption Credit
                                                                            </a>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="4">
                                                            <Accordion.Header>2021 Recovery Rebate Credit</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="list">
                                                                    <ul className='m-4 text'>
                                                                        <li>
                                                                            <a className="text-success" href="https://www.irs.gov/newsroom/recovery-rebate-credit"  >
                                                                                Recovery Rebate Credit
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="5">
                                                            <Accordion.Header>Income and Savings Credits </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="list">
                                                                    <ul className='m-4 text'>
                                                                        <li>
                                                                            <a className="text-success" href="https://www.irs.gov/taxtopics/tc610"  >
                                                                                Saver's Credit (Retirement Savings Contributions Credit)
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="text-success" href="https://www.irs.gov/individuals/international-taxpayers/foreign-tax-credit"  >
                                                                                Foreign Tax Credit
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="text-success" href="https://www.irs.gov/taxtopics/tc608"  >
                                                                                Excess Social Security and RRTA tax withheld

                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="text-success" href="https://www.irs.gov/forms-pubs/about-form-2439"  >
                                                                                Credit for Tax on Undistributed Capital Gain

                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="text-success" href="https://www.irs.gov/forms-pubs/about-form-8801"  >
                                                                                Credit for Prior Year Minimum Tax
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="6">
                                                            <Accordion.Header>Homeowner Credits </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="list">
                                                                    <ul className='m-4 text'>
                                                                        <li>
                                                                            <a className="text-success" href="https://www.irs.gov/forms-pubs/about-form-5695"  >
                                                                                Residential Energy Efficient Property Credit
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="text-success" href="https://www.irs.gov/credits-deductions/individuals/plug-in-electric-drive-vehicle-credit-section-30d"  >
                                                                                Plug-in Electric Drive Vehicle Credit

                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </TaxPreprationStyle> 
                                            </div>
                                            <div className="sec-title" style={{ marginTop: "3rem" }} id='Deductions' >
                                                <h5>What Is a Tax Deduction?</h5>
                                                <p className="text">
                                                    A tax deduction is a provision that reduces taxable income. A standard deduction is a
                                                    single deduction at a fixed amount. Itemized deductions are popular among higher-income
                                                    taxpayers who often have significant deductible expenses, such as state/local taxes paid,
                                                    mortgage interest, and charitable contributions.
                                                </p>
                                            </div>
                                            <div className='container'>
                                                <Accordion defaultActiveKey="0" flush>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Work Related Deductions</Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="list">
                                                                <ul className='m-4 text'>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/businesses/small-businesses-self-employed/deducting-business-expenses"  >
                                                                            Business expenses
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/taxtopics/tc510" >
                                                                            Business use of car
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/taxtopics/tc509"  >
                                                                            Business use of home
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/forms-pubs/about-form-2106"  >
                                                                            Form 2106, Employee Business Expenses
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/help/ita/are-my-work-related-education-expenses-deductible"  >
                                                                            Are my work-related education expenses deductible?
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1">
                                                        <Accordion.Header>Itemized Deductions </Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="list">
                                                                <ul className='m-4 text'>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/taxtopics/tc551"  >
                                                                            Standard deduction
                                                                        </a> and
                                                                        <a className="text-success" href="https://www.irs.gov/taxtopics/tc501"  >
                                                                            itemized deductions
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/newsroom/tax-reform-brought-significant-changes-to-itemized-deductions" >
                                                                            Deductible taxes

                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/taxtopics/tc503"  >
                                                                            State and local tax deduction limit
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/instructions/i1040sca"  >
                                                                            Property tax

                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/forms-pubs/about-publication-530"  >
                                                                            Real estate tax
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/instructions/i1040sca"  >
                                                                            Sales tax
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/forms-pubs/about-publication-526"  >
                                                                            Charitable contributions
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/help/ita/how-do-i-claim-my-gambling-winnings-andor-losses"  >
                                                                            Gambling loss
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/help/ita/can-i-claim-my-expenses-as-miscellaneous-itemized-deductions-on-schedule-a"  >
                                                                            Miscellaneous expenses
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/taxtopics/tc505"  >
                                                                            Interest expense
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/help/ita/can-i-deduct-my-mortgage-related-expenses"  >
                                                                            Home mortgage interest
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/help/ita/can-i-deduct-my-moving-expenses"  >
                                                                            Moving expenses
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="2">
                                                        <Accordion.Header>Education Deductions</Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="list">
                                                                <ul className='m-4 text'>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/help/ita/can-i-claim-a-deduction-for-student-loan-interest"  >
                                                                            Student loan interest
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/taxtopics/tc513"  >
                                                                            Work-related educational expenses
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/individuals/deducting-teachers-educational-expenses"  >
                                                                            Teacher educational expenses
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="3">
                                                        <Accordion.Header>Health Care Deductions </Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="list">
                                                                <ul className='m-4 text'>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/taxtopics/tc502"  >
                                                                            Medical and dental expenses
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/forms-pubs/about-publication-969"  >
                                                                            Health Savings Account (HSA)
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="4">
                                                        <Accordion.Header>Investment Related Deductions </Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="list">
                                                                <ul className='m-4 text'>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/forms-pubs/about-publication-523"  >
                                                                            Sale of home
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/taxtopics/tc451"  >
                                                                            Individual retirement arrangements (IRAs)
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/taxtopics/tc409"  >
                                                                            Capital losses
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/taxtopics/tc453"  >
                                                                            Bad debt
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/credits-deductions/businesses/opportunity-zones"  >
                                                                            Opportunity zones
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="text-success" href="https://www.irs.gov/help/ita/how-do-i-report-the-debt-forgiven-on-my-residence-due-to-foreclosure-repossession-abandonment-or-because-of-a-loan-modification-or-short-sale"  >
                                                                            Debt forgiven on my residence due to foreclosure, repossession, abandonment or because of a loan modification or short sale
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="profile2" role="tabpanel">
                                    <div className='d-flex'>
                                        <div className='container row' style={{ width: "30%" }}>
                                            <div className="container my-5">
                                            <div className="sidebar">
                                                    <div className="sidebar-categories area">
                                                        <a href="#profile1" className="sidebar-title nav-links" data-bs-toggle="collapse">Individuals</a>
                                                        <hr />
                                                        <div id="sidebar-categories" className="collapse show">
                                                            <ul className="sidebar-list">
                                                                <li><a className='nav-links' href="#credits" >Credits</a></li>
                                                                <li><a className='nav-links' href="#Deductions" >Deductions</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="sidebar-sort area">
                                                        <ul className="sidebar-list">
                                                            <li>
                                                                <a className="sidebar-title nav-links" href="https://www.irs.gov/credits-deductions/businesses" data-bs-toggle="collapse">Business</a>
                                                            </li>
                                                        </ul>
                                                        <hr />
                                                        <div id="sidebar-sort" className="collapse show">
                                                            {/* <ul className="sidebar-list">
                                                                <li><a href="/">Child Credits</a></li> 
                                                            </ul> */}
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className='inner-column row' style={{ width: "70%", marginTop: "4rem" }}>
                                            <div className="sec-title">
                                                <h5>
                                                    <a className=" text-success" href="https://www.irs.gov/credits-deductions/businesses/opportunity-zones"  >
                                                        Opportunity Zones
                                                    </a>
                                                </h5>
                                                <p className='text'>
                                                    Opportunity Zones are an economic development tool that supports investment and
                                                    growth in distressed areas of the United States. Invest in Opportunity Zones and defer tax on eligible gains.
                                                </p>
                                            </div>
                                            <div className="sec-title">
                                                <h5>
                                                    <a className=" text-success" href="https://www.irs.gov/businesses/plug-in-electric-vehicle-credit-irc-30-and-irc-30d"  >
                                                        Plug-In Electric Drive Vehicle Credit (IRC 30D)
                                                    </a>
                                                </h5>
                                                <p className='text'>
                                                    Plug-In Electric Drive Vehicle Credit (IRC 30D) - Internal Revenue Code Section 30D provides a
                                                    credit for Qualified Plug-in Electric Drive Motor Vehicles including passenger vehicles and light trucks.

                                                </p>
                                            </div>
                                            <div className="sec-title">
                                                <h5>
                                                    <a className=" text-success" href="https://www.irs.gov/businesses/research-credit"  >
                                                        Research Credit
                                                    </a>
                                                </h5>
                                                <p className='text'>
                                                    Guidelines and audit technique guide are provided for field examiners on the examination of Research Credit cases.


                                                </p>
                                            </div>
                                            <div className="sec-title">
                                                <h5>
                                                    <a className=" text-success" href="https://www.irs.gov/publications/p535"  >
                                                        Deducting Business Expenses
                                                    </a>
                                                </h5>
                                                <p className='text'>
                                                    Understand the different types of business expenses, what is deductible and the general rules for deducting expenses.
                                                </p>
                                            </div>
                                            <div className="sec-title">
                                                <h5>
                                                    <a className=" text-success" href="https://www.irs.gov/businesses/corporations/abusive-tax-shelters-and-transactions"  >
                                                        Abusive Tax Shelters and Transactions
                                                    </a>
                                                </h5>
                                                <p className='text'>
                                                    The Internal Revenue Service has a comprehensive strategy in place to combat abusive tax shelters and transactions. This strategy includes guidance on abusive transactions, regulations governing tax shelters, a hotline for taxpayers to use to report abusive technical transactions, and enforcement activity against abusive tax shelter promoters and investors.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="profile3" role="tabpanel">
                                    <div className='d-flex'> 
                                        <div className='container' style={{ width: "70%", marginTop: "4rem" }}>
                                            <div className="sec-title list" >
                                                <h5>Personal Information</h5>
                                                <p className="text">
                                                    <ul>
                                                        <li>
                                                            Your social security number or tax ID number
                                                        </li>
                                                        <li>
                                                            Your spouse’s full name, social security number or tax ID number, and date of birth

                                                        </li>
                                                        <li>Information about your stimulus payment — also known as an economic impact payment (EIP) — if applicable — you may have IRS Notice 1444 or other records showing your EIP amount
                                                            Your social security number or tax ID number
                                                        </li>
                                                        <li>
                                                            Identity Protection PIN, if one has been issued to you, your spouse, or your dependent by the IRS

                                                        </li>
                                                        <li>
                                                            IRS Letter 6475 – your 2021 Economic Impact Payment, to determine eligibility to claim the Recovery Rebate Credit
                                                        </li>
                                                        <li>
                                                            Routing and account numbers to receive your refund by direct deposit or pay your balance due if you choose
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className="sec-title list">
                                                <h5>Dependent(s) Information </h5>
                                                <p className="text">
                                                    <ul>
                                                        <li>
                                                            Dates of birth and social security numbers or tax ID numbers
                                                        </li>
                                                        <li>
                                                            Childcare records (including the provider’s tax ID number) if applicable Income of dependents and of other adults in your home
                                                        </li>
                                                        <li>
                                                            Form 8332 showing that the child’s custodial parent is releasing their right to claim a child to you, the noncustodial parent (if applicable)
                                                        </li>
                                                        <li>
                                                            IRS Letter 6419 – official documentation that has the details you need to report your advance Child Tax Credit (CTC) payments

                                                        </li>
                                                        <li>
                                                            IRS Letter 6475 – your 2021 Economic Impact Payment, to determine eligibility to claim the Recovery Rebate Credit
                                                        </li>
                                                        <li>
                                                            Routing and account numbers to receive your refund by direct deposit or pay your balance due if you choose
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className="sec-title list">
                                                <h5>Employed </h5>
                                                <p className="text">
                                                    <ul>
                                                        <li>
                                                            Forms W-2
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className="sec-title list">
                                                <h5>Unemployed </h5>
                                                <p className="text">
                                                    <ul>
                                                        <li>
                                                            Unemployment (1099-G)
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className="sec-title list">
                                                <h5>Self-employed </h5>
                                                <p className="text">
                                                    <ul>
                                                        <li>
                                                            Forms 1099, Schedules K-1, income records to verify amounts not reported on 1099-MISC or new 1099-NEC
                                                        </li>
                                                        <li>
                                                            Records of all expenses — check registers or credit card statements, and receipts
                                                        </li>
                                                        <li>
                                                            Business-use asset information (cost, date placed in service, etc.) for depreciation Office in home information, if applicable
                                                        </li>
                                                        <li>
                                                            Record of estimated tax payments made (Form 1040–ES)
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className="sec-title list">
                                                <h5>Rental Income </h5>
                                                <p className="text">
                                                    <ul>
                                                        <li>
                                                            Records of income and expenses
                                                        </li>
                                                        <li>
                                                            Rental asset information (cost, date placed in service, etc.) for depreciation Record of estimated tax payments made (Form 1040–ES)
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className="sec-title list">
                                                <h5>Retirement Income </h5>
                                                <p className="text">
                                                    <ul>
                                                        <li>
                                                            Pension/IRA/annuity income (1099-R)
                                                        </li>
                                                        <li>
                                                            Traditional IRA basis (i.e., amounts you contributed to the IRA that were already taxed)
                                                        </li>
                                                        <li>Social security/RRB income (SSA-1099, RRB-1099) </li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className="sec-title list">
                                                <h5>Savings & Investments or Dividends </h5>
                                                <p className="text">
                                                    <ul>
                                                        <li>
                                                            Interest, dividend income (1099-INT, 1099-OID, 1099-DIV) Income from sales of stock or other property (1099-B, 1099-S)

                                                        </li>
                                                        <li>
                                                            Dates of acquisition and records of your cost or other basis in property you sold (if basis is not reported on 1099-B)

                                                        </li>
                                                        <li>Health Savings Account and long-term care reimbursements (1099-SA or 1099-LTC) Expenses related to your investments
                                                        </li>
                                                        <li>
                                                            Record of estimated tax payments made (Form 1040–ES) Transactions involving cryptocurrency (Virtual currency)

                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className="sec-title list">
                                                <h5>Other income & Losses </h5>
                                                <p className="text">
                                                    <ul>
                                                        <li>
                                                            Gambling income (W-2G or records showing income, as well as expense records) Jury duty records
                                                        </li>
                                                        <li>
                                                            Hobby income and expenses Prizes and awards
                                                        </li>
                                                        <li>
                                                            Trust income
                                                        </li>
                                                        <li>
                                                            Royalty income 1099-MISC Any other 1099s received
                                                        </li>
                                                        <li>Record of alimony paid/received with ex-spouse’s name and SSN </li>
                                                        <li>State tax refund</li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className="sec-title list">
                                                <h5>Home Ownership </h5>
                                                <p className="text">
                                                    <ul>
                                                        <li>
                                                            Forms 1098 or other mortgage interest statements Real estate and personal property tax records
                                                        </li>
                                                        <li>
                                                            Receipts for energy-saving home improvements (e.g., solar panels, solar water heater)
                                                        </li>
                                                        <li>
                                                            All other 1098 series forms
                                                        </li>
                                                        <li>
                                                            Charitable Donations
                                                        </li>
                                                        <li>Cash amounts donated to houses of worship, schools, other charitable organizations Records of non-cash charitable donations </li>
                                                        <li>Amounts of miles driven for charitable or medical purposes </li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className="sec-title list">
                                                <h5>Medical Expenses</h5>
                                                <p className="text">
                                                    <ul>
                                                        <li>
                                                            Amounts paid for healthcare, insurance, and to doctors, dentists, and hospitals

                                                        </li>
                                                        <li>
                                                            Health Insurance

                                                        </li>
                                                        <li>
                                                            Form 1095-A if you enrolled in an insurance plan through the Marketplace (Exchange)

                                                        </li>
                                                        <li>
                                                            Childcare expenses

                                                        </li>
                                                        <li>Fees paid to a licensed day care center or family day care for care of an infant or preschooler</li>
                                                        <li>Amounts paid to a baby-sitter or provider care of your child under age 13 while you work </li>
                                                        <li>Expenses paid through a dependent care flexible spending account at work </li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div className="sec-title list">
                                                <h5>Educational Expenses </h5>
                                                <p className="text">
                                                    <ul>
                                                        <li>
                                                            Forms 1098-T from educational institutions
                                                        </li>
                                                        <li>
                                                            Receipts that itemize qualified educational expenses Records of any scholarships or fellowships you received Form 1098-E if you paid student loan interest
                                                        </li>
                                                        <li>
                                                            K-12 Educator expenses
                                                        </li>
                                                        <li>
                                                            Receipts for classroom expenses (for educators in grades K-12)
                                                        </li>

                                                    </ul>
                                                </p>
                                            </div>
                                            <div className="sec-title list">
                                                <h5>State and Local Taxes </h5>
                                                <p className="text">
                                                    <ul>
                                                        <li> Amount of state and local income or sales tax paid (other than wage withholding) </li>
                                                        <li> Invoice showing amount of vehicle sales tax paid and / or personal property tax on vehicles </li>
                                                        <li> Retirement & Other Savings </li>
                                                        <li> Form 5498-SA showing HSA contributions Form 5498 showing IRA contributions </li>
                                                        <li>All other 5498 series forms (5498-QA, 5498-ESA) </li>
                                                        <li>Federally Declared Disaster </li>
                                                        <li>City/county you lived/worked/had property in </li>
                                                        <li>Records to support property losses (appraisal, clean-up costs, etc.) Records of rebuilding/repair costs </li>
                                                        <li>Insurance reimbursements/claims to be paid FEMA assistance information </li>
                                                        <li>Check the FEMA website (www.fema.gov) to see if your county has been declared a federal disaster area </li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="profile4" role="tabpanel">
                                    <div className='d-flex'> 
                                        <div className='container' style={{ width: "70%", marginTop: "4rem" }}>
                                            <h3>Tax Withholding Estimator</h3>
                                            <div className="sec-title">
                                                <p className="text">
                                                    Use this tool to estimate the federal income tax you want your employer to
                                                    withhold from your paycheck. This is<a className="text-success" href='https://www.irs.gov/payments/tax-withholding'> tax withholding. </a><br />
                                                    See how your withholding affects your refund, take-home pay or tax due.
                                                </p>
                                            </div>
                                            <div className='d-flex'>
                                                <div className="sec-title list" style={{ border: "1px solid black", width: "40%" }}>
                                                    <h5 style={{ padding: "32px 0px 0px 30px" }}>How It Works </h5>
                                                    <span className="title" style={{ padding: "32px 0px 0px 30px" }}>Use this tool to: </span>
                                                    <p className="text ">
                                                        <ul className='olu'>
                                                            <li>
                                                                Estimate your federal income tax withholding
                                                            </li>
                                                            <li>
                                                                See how your refund, take-home pay or tax due are affected by withholding amount
                                                            </li>
                                                            <li>
                                                                Choose an estimated withholding amount that works for you
                                                            </li>
                                                        </ul>
                                                    </p>
                                                </div>
                                                <div className="sec-title list" style={{ border: "1px solid black", width: "40%" }}>
                                                    <h5 style={{ padding: "32px 0px 0px 30px" }}>What You Need </h5>
                                                    <span className="title" style={{ padding: "32px 0px 0px 30px" }}>Have this ready: </span>
                                                    <p className="text">
                                                        <ul className='olu'>
                                                            <li>
                                                                Paystubs for all jobs (spouse too)
                                                            </li>
                                                            <li>
                                                                Other income info (side jobs, self-employment, investments, etc.)
                                                            </li>
                                                            <li>
                                                                Most recent tax return
                                                            </li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="profile5" role="tabpanel">
                                    <div className='d-flex'> 
                                        <div id='returnStatus' className="sec-title list" style={{ width: "70%", marginTop: "4rem" }}>
                                            <h5>
                                                <a className=" text-success" href="https://www.irs.gov/credits-deductions/businesses/opportunity-zones"  >
                                                    <h5>
                                                        <a className=" text-success" href="https://www.irs.gov/refunds"  >
                                                            Tax return status – IRS
                                                        </a>
                                                    </h5>
                                                </a>
                                            </h5>
                                            <div style={{ margin: "5rem" }}>
                                                <h5>What You Need </h5>
                                                <span className="title">Have this ready: </span>
                                                <p className="text">
                                                    <ul className='olu'>
                                                        <li>
                                                            Your Social Security number or ITIN
                                                        </li>
                                                        <li>
                                                            Your filing status
                                                        </li>
                                                        <li>
                                                            Your exact refund amount
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
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
