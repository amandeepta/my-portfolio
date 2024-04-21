import Data from './ProjectData';
import PCards from './PCards';
function Projects() {
    return (
        <div className='grid grid-cols-2 max-md:flex max-md:flex-col '>

            {
                Data.map((dataItem) => {
                   return <PCards key={dataItem.id} {...dataItem} />;
                })
            }
            </div>
    )
}

export default Projects;