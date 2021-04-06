import './App.css';
import img1 from '../src/img/image-anne.jpg';
import img2 from '../src/img/image-colton.jpg';
import img3 from '../src/img/image-irene.jpg';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='container-wrapper'>
          <div>
            <header>
                <h1>
                100,000+ of our users love our products.
                </h1>
                 <div>
                   <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
                   </div>
              </header> 
          </div>
        </div>

        
    <div class="l-cards l-flex-col-sm-row-lg l-space-between">
      <div class="card__1">
        <div class="card__header l-flex-row">
          <img class="card__portrait" src={img1} alt="" />
          <div class="card__person">
            <div class="card__name">Colton Smith</div>
            <div class="card__role">Verified Buyer</div>
          </div>
        </div>
        <backquote class="card__testimonial">
          " We needed the same printed design as the one we had ordered a week prior.
          Not only did they find the original order, but we also received it in time.
          Excellent!"
        </backquote>
      </div>

            
      <div class="card__2">
        <div class="card__header l-flex-row">
          <img class="card__portrait" src={img2} alt="" />
          <div class="card__person">
            <div class="card__name">Irene Roberts</div>
            <div class="card__role">Verified Buyer</div>
          </div>
        </div>
        <backquote class="card__testimonial">
          " Customer service is always excellent and very quick turn around. Completely
          delighted with the simplicity of the purchase and the speed of delivery."
        </backquote>
      </div>

      <div class="card__3">
        <div class="card__header l-flex-row">
          <img class="card__portrait" src={img3} alt="" />
          <div class="card__person">
            <div class="card__name">Anne Wallace</div>
            <div class="card__role">Verified Buyer</div>
          </div>
        </div>
        <backquote class="card__testimonial">
          " Put an order with this company and can only praise them for the very high
          standard. Will definitely use them again and recommend them to everyone!"
        </backquote>
      </div>


      </div>


      </div>
    
     
    </div>
  );
}

export default App;
