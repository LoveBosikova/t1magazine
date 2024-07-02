export interface IFeature {
    id: number | string | undefined,
    title: string | undefined,
    owner: string | undefined,
    image: string | undefined,
    price: number | string | undefined,
}

function FeatureCard ( props : IFeature) {
    console.log(props);
    return (
        <>
        </>
    )
}

export default FeatureCard;