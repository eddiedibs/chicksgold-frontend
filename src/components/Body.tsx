
import BackgroundImage from '../assets/fantasy1.jpeg'
import Filters from "./Filters"

const Body = () => {

  return (
    <section>
        <div>
            <div className='bg-img-front'></div>
            <img className='bg-img' src={BackgroundImage} alt="" />
            <div className='main-container'>
                <div className='title-container'>
                    <h1 className='title'>Condimentum Consecteur</h1>
                </div>
                <Filters/>
                <div className='table-container'></div>
            </div>

        </div>
    </section>
  );
};

export default Body;