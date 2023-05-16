import { useRouter } from 'next/router'

export async function getStaticPaths() {
    return {
        paths: [
            { params: { brandSlug: 'toyota', vehicleSlug: 'toyota-innova' } },
            { params: { brandSlug: 'toyota', vehicleSlug: 'toyota-corolla' } },
            { params: { brandSlug: 'mitsubishi', vehicleSlug: 'mitsubishi-mirage-g4' } },
            { params: { brandSlug: 'suzuki', vehicleSlug: 'suzuki-swift' } },
            { params: { brandSlug: 'geely', vehicleSlug: 'geely-coolray' } },
        ],
        fallback: false,
    };
}

export async function getStaticProps() {

    // const response = await fetch('api here');
    // const vehicle = await response.json();

    // gonna fetch vehicle details here, made empty for now

    return {
        props: {
            vehicle: [],
        }
    };
}

const VehicleDetails = () => {

    const router = useRouter()

    return (
        <p>Showing Vehicle details of {`${router.query.vehicleSlug}`}</p>
    )
}

export default VehicleDetails