import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Searchpage from './Searchpage';

const Header = ({setCategory, dummy}) => {
    const navigate = useNavigate();
    const [selectedCate, setSelectedCate] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const clickBtn = (cateName) => {
        setSelectedCate(cateName);
        setCategory(cateName);
        setSearchResults([]);
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
    }

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            return;
        }
        const results = dummy.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
        const searchPath = `/search?query=${encodeURIComponent(searchTerm)}`;
        navigate(searchPath);
    }

    const handleGoBack = () => {
        setSearchTerm('');
        setSearchResults([]);
        navigate('/');
    }

    const handleClearInput = () => {
        setSearchTerm('');
        setSearchResults([]);
        navigate('/');
    }

    return(
        <div className="Header">
            <h2 onClick={handleGoBack}>📚 만화 리스트</h2>
            <div className='scc'>
                <input 
                    type="text"
                    placeholder="책 제목을 입력해주세요!"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button className='de' onClick={handleClearInput}>삭제</button>
                <button className='sc' onClick={handleSearch}>검색</button>
            </div>
            <div className='category'>
                <button
                    onClick={() => clickBtn('all')}
                    className={selectedCate==='all' ? 'active' : ''}
                >전체</button>
                <button
                    onClick={() => clickBtn('순정만화')}
                    className={selectedCate==='순정만화' ? 'active' : ''}
                >순정만화</button>
                <button
                    onClick={() => clickBtn('소년만화')}
                    className={selectedCate==='소년만화' ? 'active' : ''}
                >소년만화</button>
                <button
                    onClick={() => clickBtn('학원')}
                    className={selectedCate==='학원' ? 'active' : ''}
                >학원/판타지</button>
            </div>
            <div>
                {searchResults.length > 0 && (
                <div>
                    {searchResults.map(item => (
                        <Searchpage key={item.id} {...item} />
                    ))}
                </div>
                )}
            </div>
        </div>
    )
}

export default Header;