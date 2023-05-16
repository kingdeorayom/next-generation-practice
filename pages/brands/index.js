import Link from 'next/link';
import React from 'react'

export async function getStaticProps() {

    const response = await fetch('http://localhost:3001/brands');
    const brands = await response.json();

    return {
        props: {
            brands: brands,
        }
    };
}

const Brands = ({ brands }) => {
    return (
        <div>
            <h1>Showing All Brands</h1>
            <div className='brands'>
                {
                    brands.map(brand => {
                        return (
                            <Link
                                key={brand._id}
                                href={`brands/${brand.slug}`}
                                className='brand'
                            >
                                {brand.name}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Brands