import React from 'react';
import p08 from '../Asstes/08.jpg'
import p09 from '../Asstes/09.jpg'
import p07 from '../Asstes/07.jpg';
// import image4 from '../Asstes/image4.jpg' 
// import Collapse from './Collapse';
// import styled from 'styled-components'; 
const NewCardsStyle = styled.div`
// html
// {
// 	padding: 0 1em; 
// } 
.middle{
    padding: 0 1em;
    margin: auto;
	max-width: 50em;
}
// body
// {
// 	margin: auto;
// 	max-width: 42em;
// } 
img
{
	max-width: 100%;
}

.image-left, .image-right
{
	margin: 1em 0;
}

@media (min-width: 20em)
{
	.image-left, .image-right
	{
		display: flex;
		align-items: center;
	}

	.image-left img
	{
		margin-right: 1em;
		float: left; /* fallback */
	}

	.image-right img
	{
		order: 1;
		margin-left: 1em;
		float: right; /* fallback */
	}
	
	/* clearfix for fallback */
	.image-left::after,
	.image-right::after
	{
		content: "";
  	display: block;
		clear: both;
	}
}

@media (min-width: 30em)
{
	.image-left img, .image-right img
	{
		flex-shrink: 0;
	}
}

`;

export default function NewCards() {
    return ( 
        <NewCardsStyle>
            <div className='container middle'>
            <div className="container image-left">
                <img className='col-5' src={p07} alt="Human Rights Logo" />
                <div className='col-7'>
                    <h1> Who are we</h1>
                    <p>TaxOnTrack LLC (TOT) is a virtual tax firm USA that specializes in tax planning, 
                        preparation, and resolution services for individuals, businesses, and expatriates.</p> 
                </div>
            </div>
            <div className="container image-right">
                <img className='col-5' src={p08} alt="Human Rights Logo" />
                <div className='col-7'>
                    <h1>Our Mission</h1>
                    <p className=' '>Our mission is to assist our valued clients and people in achieving 
                    success and desired results through timely, relevant advice and services based on contemporary knowledge</p> 
                </div>
            </div> 
            <div className="container image-left">
                <img className='col-5' src={p09} alt="Human Rights Logo" />
                <div className='col-7'>
                     <h1>What we do</h1>
                    <p className=' '>We work closely with clients throughout the year & ensure that they 
                    are in compliance with tax planning and regulations that are constantly evolving at tax level.</p>
                </div>
            </div>
            </div>
            {/* <div className="container d-flex p-4">
                <div className="row">
                    <div className="col-sm-4 container d-flex p-4">
                        <img src={image4} className="img-fluid" alt="img" />
                    </div>
                    <div className="col-sm-7 container p-4 mt-4 justify-content-center">
                        <h1>Tax Planning services</h1>
                        <Collapse />
                    </div>

                </div>
            </div> */}
        </NewCardsStyle> 
    );
}
