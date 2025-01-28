
import Filters from "./Filters"
import Table from "./Table"
;

interface BodyProps {
  mainContainerRef: React.RefObject<HTMLDivElement>; // Type for the ref
}

const Body: React.FC<BodyProps> = ({ mainContainerRef }) => {
  return (
    <section className="main-container" ref={mainContainerRef}>
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