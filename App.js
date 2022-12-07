import React from 'react';
import Travel from './Travel';
import Header from './Header'
import data from './data'

export default function App(){
    const cardElement = data.map((item) => {
    return (
      <Travel
        key={item.id}
        title={item.title}
        location={item.location}
        map={item.map}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        img={item.img}
      />
    );
  });
    return (
        <div>
           <Header />
            {cardElement}  
        </div>
                
    )
}