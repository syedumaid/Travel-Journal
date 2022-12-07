import React from 'react'

export default function Travel(props){
    return (
        <div>
            <section className='section1'>
                <img className='zoom' src={props.img} alt={props.title} />
                    <div className="card--element">
                        <div className="card--location">
                            <i className="fas fa-map-marker-alt"></i>
                            <h4>{props.location}</h4>
                            <a href={props.map} className="card--map" target="_blank">
                                View on Google Map
                            </a>
                        </div>
                        <h2 className="card--title">{props.title}</h2>
                        <p className="card--date">{props.startDate} - {props.endDate}</p>
                        <p className="card--description">{props.description}</p>
                    </div>
            </section>
            {/* <section className='section2'>
                <p>sidebar</p>
            </section> */}
        </div>
        
    )
}