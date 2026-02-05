export default function Person() {
    return (
        <section className="section">
            <h3>Contact Person</h3>

            <div className="contact-person">
                <img className="person-photo" src={'assets/photo_ava.jpg'} alt="Maryia Arlova" />

                <div className="person-info">
                    <p><strong>Name:</strong> Maryia Arlova</p>
                    <p><strong>Position:</strong> Supply Chain and Logistics Management</p>

                    <p><strong>Phone:</strong> +375 29 317 36 73</p>
                    <p><strong>Email:</strong> maria@ecomproject.com</p>
                    <p>
                        <strong>Primary Contact Address:</strong><br />
                        Kopische st Aviachyonnaja 13-127<br />
                        220081, Belarus
                    </p>

                    <h4>Responsibilities:</h4>
                    <ul>
                        <li>Supplier Management</li>
                        <li>Inventory Management</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
