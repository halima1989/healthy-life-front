// Footer.js
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h2 className="text-lg font-semibold mb-2">Healthy Life</h2>
                    <p>Des produits sains pour une vie saine.</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-2">Liens rapides</h2>
                    <ul className="space-y-1">
                        <li><Link href="/products">Produits</Link></li>
                        <li><Link href="/terms">Conditions générales</Link></li>
                        <li><Link href="/privacy">Politique de confidentialité</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-2">Newsletter</h2>
                    <p>Inscrivez-vous pour recevoir nos dernières offres.</p>
                    <input type="email" placeholder="Votre email" className="w-full mt-2 px-3 py-2 rounded-md bg-gray-700 text-gray-300" />
                    <button className="mt-2 w-full px-3 py-2 bg-green-500 text-white rounded-md">S'inscrire</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
