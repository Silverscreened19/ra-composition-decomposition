interface IAdProps {
    img: string;
    children: React.ReactNode;
}

const Ad = ({ img, children }: IAdProps) => {
    return (
      <div className="ad" >
        {img ? <img src={img} className="ad-img-top" alt="img" /> : ""}
        <div className="ad-body">{children}</div>
      </div>
    );
  };

  export default Ad;
