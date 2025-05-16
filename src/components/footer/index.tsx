import React from 'react';
import { cva } from 'class-variance-authority';
import Link from 'next/link';

const footerStyles = cva([
    'w-full',
    'bg-[#001f65]',
    'text-gray-300',
    'py-16'
]);

const Footer: React.FC = () => {
    return (
        <footer className={footerStyles()}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ml-11">
                    {/* Brand Section */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-white text-xl font-bold">Adopty</h2>
                        </div>
                        <p className="text-sm mb-4">
                            #1Content Rewrite, Stay Original – Instantly Paraphrase and Check for Plagiarism in One Powerful Tool.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-white">Humanize</Link></li>
                            <li><Link href="/ai-detector" className="hover:text-white">AI Detector</Link></li>
                            <li><Link href="/ai-detector-remover" className="hover:text-white">Plagiarism Checker</Link></li>
                            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                            <li><Link href="/login" className="hover:text-white">Login</Link></li>
                            <li><Link href="/signup" className="hover:text-white">Sign Up</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-white">About</Link></li>
                            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Partnership Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Partnership</h3>
                        <ul className="space-y-2">
                            <li><Link href="/affiliate" className="hover:text-white">Affiliate Program</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-600 mt-8 ml-11 mr-11"></div>

                {/* Copyright */}
                <div className="mt-16 text-sm">
                    {/* <div className="flex items-center gap-2 mb-4 ml-11">
                        <img src="/logo.svg" alt="Adopty Logo" className="" />

                         <p>© {new Date().getFullYear()} All rights reserved.</p>
                    </div> */}
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;

