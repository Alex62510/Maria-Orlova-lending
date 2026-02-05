export default function Footer() {
    return (
        <footer className="footer">
            <p>
                Business Website:
                Official company information and contact details for Homeforia LLC.
            </p>

            © {new Date().getFullYear()} Homeforia LLC. All rights reserved.
        </footer>
    );
}