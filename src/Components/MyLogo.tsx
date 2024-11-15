// MyLogo.js
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/1000_F_158877761_vSJ4nKTUvQG8OYgsIJUTpeBwiqm6cynN-removebg-preview.png';

const MyLogo = () => {
    return (
        <Link href="/myApp" className="flex items-center space-x-3 text-2xl font-bold hover:scale-105 transition duration-200">
            <Image src={logo} alt="Logo Healthy Life" width={60} height={60} />
            <span className="text-lg">Healthy Life</span>
        </Link>
    );
};

export default MyLogo;
