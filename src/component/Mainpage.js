import BookItem from './BookItem';
import '../App.css';

const Mainpage = ({dummy, category}) => {
    const filterDummy = 
    category === 'all'
    ? dummy
    : dummy.filter((it) => (it.genre === category));

    return(
        <div className="Mainpage">
            {filterDummy.map((it)=>(
                <BookItem key={it.id} {...it} />
            ))}
        </div>
    )
}

export default Mainpage;