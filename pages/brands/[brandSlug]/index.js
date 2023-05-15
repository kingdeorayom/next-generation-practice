import { useRouter } from 'next/router'

export async function getStaticPaths() {
    return {
        paths: [
            { params: { brandSlug: 'toyota' } },
            { params: { brandSlug: 'mitsubishi' } },
            { params: { brandSlug: 'suzuki' } }
        ],
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

const Brand = ({ brands }) => {

    const router = useRouter()
    console.log(brands)

    return (
        <div>
            <p>Showing all vehicles of {router.query.brandSlug}</p>
        </div>
    )
}

export default Brand