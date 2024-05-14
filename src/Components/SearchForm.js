import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export function SearchForm ({onSubmit}){
 const [newSearchTerms, setNewSearchTerms] = useState({ 
    query: '',
    cuisine: ''
});
const [selectedItem, setSelectedItem] = useState();

 const handleChange = (e) => {
    const {name, value} = e.target;
    setNewSearchTerms((prev) => {
      return {...prev, [name]:value}
    });
  }
  const handleSelect = (e) => {
    
    const {name, value} = e.target;
    setSelectedItem(e.target.value);
    setNewSearchTerms((prev) => {
      return {...prev, [name]:value}
    });
  }
const element = <FontAwesomeIcon icon= {faSearch} />
 

  function handleSubmit(e){
    e.preventDefault();
    onSubmit(newSearchTerms);  
    }
    return (
    <form onSubmit={handleSubmit} className="new-item-form">
        
      <div className="form-row">
        <label htmlFor="item">Search {element} </label>
        <label style={{border:"2px"}}></label>
        <input type="text" name="query" placeholder="Search"  onChange={handleChange}></input>
        <select type="text" name="cuisine" placeholder="Search" value={selectedItem}  onChange={handleSelect}>
          <option value="" >Choose a Cuisine</option>
          <option value="African">African</option>
          <option value="Asian">Asian</option>
          <option value="American">American</option>
          <option value="Mexican">Mexican</option>
        </select>
      </div>
      <button>Add</button>
    </form>
    )
    
}





