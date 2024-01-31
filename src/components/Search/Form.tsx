const Form = () => {
    return (
        <form className="search_form">
            <input className="search_input" type="text"></input>
            <button className="btn">Найти</button>
            <div>Найдется все. Например,
                <a href="#" className="search_example">фаза луны сегодня</a>
            </div>
        </form>
    )
}

export default Form;
