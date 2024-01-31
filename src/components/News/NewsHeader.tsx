import { v4 } from "uuid";


interface INewsHeadersProps {
    headers: string[];
}

export const NewsHeaders = ({headers}: INewsHeadersProps) => {
    const date = new Date().toLocaleString()
    return (
        <div className="news_header">
            {headers.map(header =>
                <a href="#" key={v4()} className="news_section">{header}</a>)}
            <div className="news_date">{date}</div>
        </div>
    )
}

export default NewsHeaders;
