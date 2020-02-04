import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'

const Error = () => {
    return (
       <Hero>
           <Banner title="Error 404" subtitle="Page not found">
            <Link to="/" className="btn-primary">
                    Return Home
            </Link>
           </Banner>
       </Hero>
    )
}

export default Error
