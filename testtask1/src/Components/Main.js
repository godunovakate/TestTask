import React from "react";
const Main=()=>{
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Книга - это мечта,<br/> которую вы держите в руках.</h1>
                </div>
                <div className="row2">
                    <h2>Найди свою книгу</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        />
                       <button><i className="fas fa-search"></i></button>

                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            
        </>
    ) 
}
export default Main;