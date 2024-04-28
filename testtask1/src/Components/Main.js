import React from "react";
const Main=()=>{
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                      //  value={search} onChange={e=>setSearch(e.target.value)}
                       // onKeyPress={searchBook}
                        />
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            
        </>
    ) 
}
export default Main;