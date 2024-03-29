
const Contacts = () => {
    return ( 
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>
                            <a href="https://www.google.com/maps/@59.270540,11.095557,13z"
                                rel="noopener noreferrer" target="_blank">
                                    Sarpsborg, Viken, Norway
                                {/* Kremenchuk, Poltava region, Ukraine */}
                            </a>
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Viber / WhatsApp</h2>
                        <p> <a href="tel:+380990547260">+38 (099) 054-72-60</a> </p>
                        <p>
                            <a href="tel:+4747766239">+47 477-66-239</a>
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p>
                            <a href="mailto:dim84848484@gmail.com">dim84848484@gmail.com</a>
                        </p>
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