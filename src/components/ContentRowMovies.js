import React from 'react';
import SmallCard from './SmallCard';

/* Cada set de datos en un objeto literal */
/* <!-- Movies in Data Base --> */
let moviesInDB = {
    title: 'Movies in Data Base',
    color: 'primary',
    quantity: 21,
    icon : 'fa-clipboard-list'
}
/* <!-- Total awards --> */
let totalAwards = {
    title: 'Total awards',
    color: 'success',
    quantity: 79,
    icon : 'fa-award'
}
/* <!-- Actors quantity --> */
let actorsQuantity = {
    title: 'Actors quantity',
    color: 'warning',
    quantity: '49',
    icon : 'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(Props){
    return (
        <React.Fragment>
            {/* <!-- Content Row Movies--> */}
					<div className="row">
                        {cartProps.map( (movie, i) => {

                            return <SmallCard {...movie} key={i}/>

                        })}
                    </div>
                    {/* <!-- End movies in Data Base --> */}
		</React.Fragment>
    );
}

export default ContentRowMovies;