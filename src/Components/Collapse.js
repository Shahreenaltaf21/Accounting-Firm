import React from 'react';
import styled from 'styled-components';
const CollapseStyle = styled.div`
.btn-link {
  color: black;
  text-decoration: none;
  font-size: 20px;
}
`;
function Collapse() {
    return (
        <CollapseStyle>
            <div id="accordion">
                <div className="card">
                    <div className="card-header " id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is Tax Planning?
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                        Tax planning is when you consult with a tax professional to devise plans for managing your
                         money with respect to tax obligations. These plans are often short-term, 
                        for immediate usage or a year-long strategy to incorporate over the ensuing tax year. 
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Inheritance Tax Planning
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                        Inheritance tax planning helps the beneficiary navigate the tax laws surrounding inheritances, including 
                        what is allocated to the beneficiaries versus the decedent’s estate, to avoid costly mistakes at tax-filing time
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Retirement Tax Planning
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                        Retirement tax planning strategies maximizing tax savings for your current financial situation and 
                        what you reasonably expect your retirement years to look like, based on projected income in retirement and where you would live
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingFour">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                            Business Tax Planning
                            </button>
                        </h5>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body">
                        Business Tax PlanningBusiness tax planning focuses on strategizing the most advantageous paths for the owner at various stages of the company’s 
                        growth, such as buying equipment and hiring employees or selling the business to an interested party
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingFive">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                            Capital Gains Tax Planning
                            </button>
                        </h5>
                    </div>
                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                        <div className="card-body">
                        When an asset like a stock is sold for more money than what was initially paid, it results in capital gain income. A novice investor who does not have much money in the market or is tied up in other assets like real estate and valuable collectibles,
                         may not think about capital gains too much and simply pay the tax as it’s due.
                        </div>
                    </div>
                </div>
            </div>
        </CollapseStyle>
    );
}

export default Collapse;
