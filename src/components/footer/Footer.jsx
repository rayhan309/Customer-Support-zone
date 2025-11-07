import ticket from '../../assets/Group.png';
import lending from '../../assets/lenkend.png';
import facebook from '../../assets/facebook.png';
import gmail from '../../assets/gmail.png';

const footer = () => {
    return (
        <>
        <footer className="bg-neutral">
            <div className="footer sm:footer-horizontal  text-neutral-content p-10 mt-18 md:mt-24 container mx-auto">
                <nav>
                    <h6 className="footer-title">CS — Ticket System</h6>
                    <a className=" text-xs font-normal text-gray-400">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorembr <br /> Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and <br /> scrambled it to make a type specimen book.</a>
                    
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover text-gray-400">About Us</a>
                    <a className="link link-hover text-gray-400">Our Mission</a>
                    <a className="link link-hover text-gray-400">Marketing</a>
                    <a className="link link-hover text-gray-400">Contact Saled</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="text-gray-400">Products & Services</a>
                    <a className="text-gray-400">Customer Stories</a>
                    <a className="text-gray-400">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="text-gray-400">Privacy Policy</a>
                    <a className="text-gray-400">Terms & Conditions</a>
                    <a className="text-gray-400">Join Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title"> Social Links</h6>
                    <a className="text-gray-400 flex gap-3"><img src={ticket} alt="" /> @CS — Ticket System</a>
                    <a className="text-gray-400 flex gap-3 mt-2"><img src={lending} alt="" /> @CS — Ticket System</a>
                    <a className="text-gray-400 flex gap-3 mt-2"><img src={facebook} alt="" />@CS — Ticket System</a>
                    <a className="text-gray-400 flex gap-3 mt-2"><img src={gmail} alt="" />support@cst.com</a>
                </nav>
            </div>
        </footer>

        <div className="bg-neutral">
           <div className="container mx-auto border-t-2 border-gray-700 py-7">
             <h3 className="text-gray-500 font-normal text-center">© 2025 CS — Ticket System. All rights reserved.</h3>
           </div>
        </div>
        </>
    );
};

export default footer;