
import BackgroundImage from '../assets/fantasy1.jpeg'
import Filters from "./Filters"
import Table from "./Table"

const Body = () => {

  return (
    <section className='main-container'>
        <div className='bg-img-front'></div>
        <img className='bg-img'/>
        <div className='main-inner-container'>
          <div className='main-content-container'>
              <div className='title-container'>
                  <h1 className='title'>Condimentum Consecteur</h1>
              </div>
              <Filters/>
              <Table/>
          </div>
        </div>
        
    </section>
  );
};

export default Body;