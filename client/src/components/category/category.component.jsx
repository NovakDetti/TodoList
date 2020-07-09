import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// service
import { deleteCategory } from '../../service/dataservice';

//style
import './category.style.scss';

class Category extends Component {
    constructor(props) {
        super(props);
        this.deleteCateg = React.createRef();
    }

    deleteChoosenCategory = () => {
        this.deleteCateg.current.style.display = "none";
        deleteCategory(this.props.category.name)
    }
    

    render(){
        return (
        <div className="category-container" ref={this.deleteCateg}>
            <div id="category-menu">
                <h5>{this.props.category.name}</h5>
                <div>
                    <Link to={`/view/${this.props.category.name}`}>
                    <span className="material-icons" >launch</span>
                    </Link>
                    <span className="material-icons delete" onClick={this.deleteChoosenCategory}>delete</span>
                </div>
            </div>
        </div>
        )
    }
    
}



export default Category;