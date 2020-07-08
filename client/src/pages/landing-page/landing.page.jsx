import React, { useEffect, useState } from 'react'

// style
import "./landing.style.scss";

// components
import Category from '../../components/category/category.component';

//redux
import { connect } from "react-redux";
import { fetchCategoriesX } from '../../redux/actions/index';

//service 
import { createCategory, fetchCategories} from '../../service/dataservice';

// pop up message
import Swal from 'sweetalert2'



function Landing({ fetchCategoriesX }){
    const [categList , setCategList] = useState();
    const [isActive, setActive] = useState(false);
    const [name, setName] = useState(false);

    useEffect(() => {
        fetchCategoriesX().then(res => setCategList(res));
    }, [isActive])
    
    let addNewCategory = () => {
        if(name){
            createCategory(name)
            setActive(false);
        } else {
            Swal.fire("Type a name")
        }
    }
    
        return(
            <div className="landing-container">
                <div className="category-layer">
                    <h2>Categories</h2>
                    <div className="content-wrapper">
                        <div className="new-category-container" >
                            <button className="create-category-button" onClick={() => setActive(!isActive)}><h5>Create new category</h5><span className="material-icons">add</span></button>
                            {
                                isActive &&
                                <div className="create-category-form">
                                    <p>Add a category name:</p>
                                    <input type="text" placeholder="type here..." onChange={(e) => setName(e.target.value)}></input>
                                    <button onClick={addNewCategory}>Create</button>
                                </div>
                            }
                        </div>
                        {
                            categList  &&  categList.map( category => <Category key={Math.random()} category={category} />)
                        }
                    </div>
                </div>
                <div id="vector-sample"></div>
            </div>
        )
    }

const mapDispatchToProps = dispatch  => {
    return{
        fetchCategoriesX: () => dispatch(fetchCategoriesX()),
    }
}


export default connect(null, mapDispatchToProps )(Landing);