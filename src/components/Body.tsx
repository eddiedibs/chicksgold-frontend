
import Filters from "./Filters"
import Table from "./Table"
import Footer from './Footer';



const Body = () => {
  return (
    <section className="main-container">
        <div className='bg-img-front'></div>
        <img className='bg-img'/>
        <div className="body-main">
          <div className='main-inner-container'>
            <div className='main-content-container'>
                <div className='title-container'>
                    <h1 className='title'>Condimentum Consecteur</h1>
                </div>
                <Filters/>
                <Table/>
            </div>
          </div>
          <div className="footer-parent">
            <Footer />
          </div>
        </div>
        
    </section>
  );
};

export default Body;