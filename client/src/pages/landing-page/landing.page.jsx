import React, { useEffect, useState } from 'react'
import {Redirect} from 'react-router-dom';

// style
import "./landing.style.scss";

// components
import Category from '../../components/category/category.component';
import CategoryCreator from '../../components/category-creator/category.creator.component';

//redux
import { connect } from "react-redux";
import { fetchCategoriesX } from '../../redux/actions/index';

//service 
import { logOut } from '../../service/userService';


function Landing({ fetchCategoriesX, currentUser}){
    const [categList , setCategList] = useState();
    const [isActive, setActive] = useState(false);
    const [isLoggedOut, setLoggedOut] = useState(false);

    useEffect(() => {
        if(currentUser.email !== ""){
            sessionStorage.setItem("email", currentUser.email)
        } 
        fetchCategoriesX().then(res => setCategList(res));
    }, [isActive, currentUser.email, fetchCategoriesX])

    let logoutUser = () => {
        logOut(currentUser.email !== "" ? currentUser.email : sessionStorage.getItem("email"), sessionStorage.getItem("token"));
        sessionStorage.removeItem("token")
        setLoggedOut(true)
    }

    if (isLoggedOut) {
        return <Redirect to={{
            pathname: '/'
        }}
        />
    }
    return(
        <div className="landing-container">
            <div id="landing-letterhead">
                <div className="new-category-container" >
                    <button className="create-category-button" onClick={() => setActive(!isActive)}><p>Create new category</p><span className="material-icons">add</span></button>
                    {
                        isActive &&
                        <CategoryCreator email={currentUser.email !== "" ? currentUser.email : sessionStorage.getItem("email")}/>
                    }
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="material-icons">account_circle</span><p>{currentUser.email === "" ? sessionStorage.getItem("email") : currentUser.email}</p></button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="dropdown-item" onClick={logoutUser}>Logout</button>
                        <button class="dropdown-item">Delete account</button>
                    </div>
                </div>
            </div>
            <div className="category-layer">
                <h2>Categories</h2>
                <div className="content-wrapper">
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

function mapStateToProps(store) {
    return {
        currentUser: store.default
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Landing);