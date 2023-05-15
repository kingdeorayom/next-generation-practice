import { useRouter } from 'next/router'

export async function getStaticPaths() {
    return {
        paths: [{ params: { brand: 'toyota' } }, { params: { brand: 'mitsubishi' } }],
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

const Brand = () => {

    const router = useRouter()

    return (
        <div>
            <p>Showing all vehicles of {router.query.brand}</p>
        </div>
    )
}

export default Brand