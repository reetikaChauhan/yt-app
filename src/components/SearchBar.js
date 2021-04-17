import React,{useState} from 'react';


const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) =>{
        event.preventDefault();
        //console.log(this.state.term);
        onFormSubmit(term);
    };

   
    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text"
                      value={term}
                      onChange={(e) => setTerm(e.target.value)}
                    >
                    </input>

                </div>
            </form>
        </div>  
      );
    
};


export default SearchBar;