import React from 'react';
import styled from 'styled-components';
const CheckStyle2 = styled.div`
 
.X{
    margin: auto;
    padding: 1% 2%;
    max-width: 1440px;
    border-radius: 5px;
    background: #ecf0f1;
    box-shadow: 0 2px 6px 0 rgba(0,0,0, .3);
  }
  h1,h2,h3{
    text-align: center;
    font-family: 'Baloo Tamma', cursive;
  }
  li{
    color: #2c3e50;
    font-size: 18px;
    line-height: 30px;
    text-align: justify;
    letter-spacing: 1px;
    font-family: 'Raleway', serif;
  }
  /*SG = style grid*/
  .SG{
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .SG .sgLi{
    min-width: 24%;
    margin: 2% .35%;
    display: inline-flex;
    box-shadow: 0 2px 4px rgba(0,0,0, .2);
  }
  .SG .sgLi:hover{
    box-shadow:0 5px 10px rgba(0,0,0,.15);}
  .SG .box{
    width: 100%;
    height: 100vh;
    padding: 1% 2%;
    background: #fff;
    min-height: 200px;
    max-height: 220px;
    box-sizing: border-box;
  }
  /*Styles */
  .df{list-style-type: disc;}
  .s1{list-style-type: square;}
  .s2{list-style-type: circle;}
  .s3{list-style-type: decimal;}
  .s4{list-style-type: decimal-leading-zero;}
  .s5{list-style-type: lower-alpha;}
  .s6{list-style-type: upper-alpha;}
  .s7{list-style-type: lower-roman;}
  .s8{list-style-type: upper-roman;}
  .s9{list-style-type: lower-greek;}
  .s10{list-style-type: georgian;}
  .s11{list-style-type: hebrew;}
  .s12{list-style-type: hiragana;}
  .s13{list-style-type: hiragana-iroha;}
  .s14{list-style-type: katakana;}
  .s15{list-style-type: katakana-iroha;}
  .s16{list-style-type: cjk-ideographic;}
  .s17{list-style-image: url(//goo.gl/L3tqpe);}
  .s18{list-style: none;}
  .s18 li:before{
    content: '';
    width: 20px;
    height: 20px;
    margin-right: 15px;
    display: inline-block;
    background: url(//goo.gl/lcPSVD);
    background-position: 50%;
  }
  .s19{list-style: none;}
  .s19 li:before{
    content: '\f0a9';
    margin-right: 15px;
    font-family: FontAwesome;
  }
  
  /* responsive grid*/
  @media (max-width: 970px){
    .SG .sgLi{width: 180px;}}
  @media (max-width: 425px){
    .SG .sgLi{width: 100%;}
  }
`;
export default function Check2() {
  return (
    <CheckStyle2>
      <div class="X">
<h1>one more style</h1>

<ul class="SG">
  <li class="sgLi">
    <div class="box">
    <h3>Box 1</h3>
    <ul class="df">
    <li>Something</li>
    <li>Something</li>
    <li>Something</li>
    <li>Something</li>
    </ul> 
  </div>
 </li> 
  <li class="sgLi">
    <div class="box">
   <h3>Box 2</h3>
   <ul class="s1">
    <li>Something</li>
    <li>Something</li>
    <li>Something</li>
    <li>Something</li>
   </ul>
  </div>
 </li>
  <li class="sgLi">
    <div class="box">
   <h3>Box 3</h3>
   <ul class="s2">
    <li>Something</li>
    <li>Something</li>
    <li>Something</li>
    <li>Something</li>
   </ul>
  </div>
 </li>
  <li class="sgLi">
    <div class="box">
   <h3>Box 4</h3>
   <ol class="s3">
    <li>Something</li>
    <li>Something</li>
    <li>Something</li>
    <li>Something</li>
   </ol>
  </div>
 </li> 
  {/* <li class="sgLi">
    <div class="box">
   <h3>Style decimal zero</h3>
   <ol class="s4">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li>
   </ol>
  </div>
 </li>
  <li class="sgLi">
    <div class="box">
   <h3>Style lower-alpha</h3>
   <ol class="s5">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li>
   </ol>
  </div>
 </li> */}
  {/* <li class="sgLi">
    <div class="box">
   <h3>Style upper-alpha</h3>
   <ol class="s6">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li>
   </ol>
  </div>
 </li>
  <li class="sgLi">
    <div class="box">
   <h3>Style lower-roman</h3>
   <ol class="s7">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li>
   </ol>
  </div>
 </li>  
  <li class="sgLi">
    <div class="box">
   <h3>Style lower-roman</h3>
   <ol class="s8">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li>
   </ol>
  </div>
 </li>  
  <li class="sgLi">
    <div class="box">
   <h3>Style lower-greek</h3>
   <ol class="s9">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li>
   </ol>
  </div>
 </li>  
  <li class="sgLi">
    <div class="box">
   <h3>Style georgian</h3>
   <ol class="s10">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li>
   </ol>
  </div>
 </li>  
  <li class="sgLi">
    <div class="box">
   <h3>Style hebrew</h3>
   <ol class="s11">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li>
   </ol>
  </div>
 </li>  
  <li class="sgLi">
    <div class="box">
   <h3>Style hiragana</h3>
   <ol class="s12">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li>
   </ol>
  </div>
 </li>  
  <li class="sgLi">
    <div class="box">
   <h3>Style hiragana-iroh</h3>
   <ol class="s13">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li>
   </ol>
  </div>
 </li> 
  <li class="sgLi">
    <div class="box">
   <h3>Style katakana</h3>
   <ol class="s14">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li>
   </ol>
  </div>
 </li> 
  <li class="sgLi">
    <div class="box">
   <h3>Style katakana-iroha</h3>
   <ol class="s15">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li>
   </ol>
  </div>
 </li> 
  <li class="sgLi">
    <div class="box">
   <h3>Style cjk-ideographic</h3>
   <ol class="s16">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li>
   </ol>
  </div>
 </li> 
  <li class="sgLi">
    <div class="box">
   <h3>Style image</h3>
   <ol class="s17">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li>
   </ol>
  </div>
 </li> 
  <li class="sgLi">
    <div class="box">
   <h3>Style image one</h3>
   <ol class="s18">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li>
   </ol>
  </div>
 </li> 
  <li class="sgLi">
    <div class="box">
   <h3>Style icon</h3>
   <ol class="s19">
    <li>Friday</li>
    <li>Monday</li>
    <li>Saturday</li>
    <li>Wednesday</li> */}
   {/* </ol>
  </div> */}
 {/* </li>  */}
</ul> 
</div>
    </CheckStyle2>
  );
}
