export interface IBannerProps {
    src: string;
}

const Banner = (props: IBannerProps) => {
    return (
        <div className="banner_container">
            <img src={props.src} className="banner" alt="banner"></img>
        </div>

    )
}

export default Banner;
