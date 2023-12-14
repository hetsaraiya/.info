import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import './Footer.css'
function Footer(props) {
	return (
			<div className="flex justify-between flex-col lg:flex-row w-full p-10 lg:px-14 px-10 dark:bg-black bg-white">
				<a href="/" >
				<div className="flex flex-row justify-center items-center">
					<div className="w-32 lg:pb-2">
					<img src="/img/Pruthateknew.png" alt="" />
					</div>
					<div>
						<p className="lg:pb-1  lg:pt-0 md:pt-2 pt-1 capitalize dark:text-white text-[22px] font-Poppins ">.Info</p>
					</div>
					</div>
					{/* <div className="flex flex-row justify-center items-center">
					<div className="w-44 lg:pb-1">
					<img src="/img/Pruthateknew.png" alt="" />
					</div>
					<div>
						<p className="pt-4 text-[12px]">.info</p>
					</div>
					</div> */}
				</a>
				<div className="my-5 lg:my-0">
					<h2 className="lg:text-[1vw]">ABOUT</h2>
					<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">About Company</a>
					<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Newsletter</a>
					<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Sitemap</a>
					<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Carrers</a>
					<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Help Center</a>
					<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Licensing</a>
				</div>
				<div className="mb-5 lg:mb-0">
					<h2 className="lg:text-[1vw]">POLICIES</h2>
					<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Privacy Policy</a>
					<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Term of Use</a>
					<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Cookie Settings</a>
					<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Do Not Sell My Information</a>
				</div>
				<div className="lg:w-[16vw]">
					<h2 className="lg:text-[1vw]">FOLLOW</h2>
					<div className="flex justify-between flex-row lg:text-[1.7vw] mt-[2vw]">
						<FaFacebookF className="hover:cursor-pointer hover:translate-y-[-5px] hover:text-[rgb(0,38,255)] transition-transform duration-[600ms]" title="visit our Facebook Page" />
						<FaInstagram className="hover:cursor-pointer hover:translate-y-[-5px] hover:text-[rgb(255,0,200)] transition-transform duration-[600ms]" title="visit our Instagram Page" />
						<FaLinkedin className="hover:cursor-pointer hover:translate-y-[-5px] hover:text-[rgb(0,38,255)] transition-transform duration-[600ms]" title="visit our LinkedIn Page" />
						<FaTwitter className="hover:cursor-pointer hover:translate-y-[-5px] hover:text-[rgb(0,38,255)] transition-transform duration-[600ms]" title="visit our Twitter Page" />
						<FaYoutube className="hover:cursor-pointer hover:translate-y-[-5px] hover:text-red-500 transition-transform duration-[600ms]" title="visit our Youtube Page" />
					</div>
					<p className="lg:text-[1.1vw] mt-[3vw]">&copy; 2022 PruthaTek . All rights reserved .</p>
				</div>
			</div>
	);
}

export default Footer;