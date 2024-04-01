import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="flex justify-center items-center mb-4 space-x-4">
                <a href="#" className="text-xl"><FaFacebook /></a>
                <a href="#" className="text-xl"><FaInstagram /></a>
                <a href="#" className="text-xl"><FaTwitter /></a>
                <a href="#" className="text-xl"><FaLinkedin /></a>
            </div>
            <div className="text-center">
                <p className="text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
