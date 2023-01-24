
const Contacts = () => {
    return ( 
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Kremenchuk, Poltava region, Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Viber / WhatsApp</h2>
                        <p><a href="tel:+380679166323">+38 (067) 916-63-23</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:dim84848484@gmail.com">dim84848484@gmail.com</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Language</h2>
                        <p>English: pre-intermediate level</p>
                        <p>Ukrainian, russian: native</p>
                    </li>
                </ul>
            </div>
        </main>
    );
}
 
export default Contacts;