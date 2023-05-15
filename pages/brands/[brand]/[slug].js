import { useRouter } from 'next/router'

export async function getStaticPaths() {
    return {
        paths: [{ params: { slug: 'toyota-innova' } }, { params: { slug: 'toyota-corolla' } }],
        fallback: false,
    };
}

export async function getStaticProps() {

    const response = await fetch('http://localhost:3001/brands');
    const brands = await response.json();

    return {
        props: {
            brands: brands,
        }
    };
}

const VehicleDetails = () => {

    const router = useRouter()
    console.log(router.query, "hahaha")

    return (
        <p>Showing Vehicle details of {`${router.query.slug}`}</p>
        // <div>{`Showing details of brand  ${router.query.brandSlug} and vehicle ${router.query.vehicleSlug}`}</div>
    )
}

export default VehicleDetails