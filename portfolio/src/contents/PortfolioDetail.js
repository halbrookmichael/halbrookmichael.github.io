import React, { useState } from 'react';

const PortfolioDetail = (props) => {
    const { data } = props.location;
    const portfolioItem = useState(data);

    console.log(portfolioItem)
    return (
        <div>
            <img src={portfolioItem[0].img} alt=""/>
            <p>{portfolioItem[0].title}</p>
        </div>
    );
}

export default PortfolioDetail;