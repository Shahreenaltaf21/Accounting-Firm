import React from 'react'; 
 import { Link } from 'react-router-dom';

export default function PricingChart() {
    return ( 
            <section className="sectionPricing">
        <div className="container">
            <h1 className='text-center'>Tax Pricing Plan</h1>
            <div className="row">
                <div className="col-md-4 p-md-0">
                    <div className="table-default table1 grad1">
                        <div>
                            <h2 className="table_header_title">Tax with holding <br/>analysis</h2>
                            <p className="table_header_price">
                                <span> </span>$50
                            </p>
                        </div>
                        <div className="table_content">
                            <ul className="table_content_list">
                                <li>Free with tax prep</li>
                                <li>$50 if purchased separately</li>
                                {/* <li>250,000 crawled Page</li> */}
                                {/* <li className="muted">Unlimited Updates</li> */}
                                {/* <li className="muted">Free Website Design</li> */}
                            </ul>
                        </div>
                        <div className="table_footer">
                            <Link to="/" className="buttonPriicng">Get Started</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-md-0">
                    <div className="table-default table1 grad1 recommeded">
                        <div>
                            <h2 className="table_header_title">Yearly tax <br/>planning</h2>
                            <p  className="table_header_price">
                                <span> </span>$100
                            </p>
                        </div>
                        <div className="table_content">
                            <ul className="table_content_list">
                                <li>$50 with tax prep</li>
                                <li>$100 if purchased separately</li>
                                {/* <li>250,000 crawled Page</li> */}
                                {/* <li>Unlimited Updates</li> */}
                                {/* <li className="muted">Free Website Design</li> */}
                            </ul>
                        </div>
                        <div className="table_footer">
                            <Link to="/" className="buttonPriicng">Get Started</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-md-0">
                    <div className="table-default table1 grad1">
                        <div>
                            <h2 className="table_header_title">Estimated tax <br/>payment vouchers</h2>
                            <p  className="table_header_price">
                                <span> </span>$50 
                            </p>
                        </div>
                        <div className="table_content">
                            <ul className="table_content_list">
                                <li>if purchased separately</li>
                                <li>Free with tax prep</li>
                                {/* <li>250,000 crawled Page</li>
                                <li>Unlimited Updates</li>
                                <li>Free Website Design</li> */}
                            </ul>
                        </div>
                        <div className="table_footer">
                            <Link to="/" className="buttonPriicng">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    );
}
