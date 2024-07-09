import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <section className="home bg-pattern home-header-2" id="home"  >
                <div className="bg-overlay">
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"> 
                            <div className="home-wrapper text-center row">
                                <div className="offset-sm-2 col-md-8">
                                    <h1>About us</h1>
                                    <h4>TaxOnTrack LLC (TOT) is a virtual tax firm USA that specializes in tax planning, preparation, and 
                                        resolution services for individuals, businesses, and expatriates. Additionally, we offer business operational 
                                        services such as bookkeeping, 
                                        yearly reconciliation, sales tax, payroll services, and LLC and corporation formation.  </h4>
                                    <Link className="btn btn-custom mr-1" to="./Pages/About">Learn more</Link>     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
