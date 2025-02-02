"use client"

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, Hammer, Brush, Grid, Phone, Mail, Clock, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

// Navigation Links
const NavLink = ({ href, children }) => (
    <a href={href} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        {children}
    </a>
);

const MobileNavLink = ({ href, children, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
        {children}
    </a>
);

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const handleToggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={handleToggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
    );
};

const ServiceCard = ({ title, description, icon: Icon }) => (
    <Card className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <CardContent>
            <div className="flex items-center mb-4">
                <Icon className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </CardContent>
    </Card>
);

const PriceCard = ({ service, price, unit, features }) => (
    <Card className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <CardContent>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{service}</h3>
            <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{price}</span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">{unit}</span>
            </div>
            <ul className="space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                    </li>
                ))}
            </ul>
            <a
                href="https://tidycal.com/zane-lewis/on-site-project-consultation"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
                >
                    Book Now
                </Button>
            </a>
        </CardContent>
    </Card>
);

const ContactCard = ({ icon: Icon, title, content }) => (
    <Card className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <CardContent>
            <div className="flex items-center mb-4">
                <Icon className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{content}</p>
        </CardContent>
    </Card>
);

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // Prevent hydration issues by ensuring window object is available in the client side
        if (typeof window !== "undefined") {
            setMenuOpen(false); // Initialize menu state properly
        }
    }, []);

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Navbar */}
            <nav className="fixed w-full z-50 flex justify-between items-center p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-sm">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">NEXEM</div>
                <div className="hidden md:flex items-center space-x-6">
                    <NavLink href="#services">Services</NavLink>
                    <NavLink href="#pricing">Pricing</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                    <ThemeToggle />
                    <a
                        href="https://tidycal.com/zane-lewis/on-site-project-consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                            Book Now
                        </Button>
                    </a>
                </div>
                <div className="md:hidden flex items-center space-x-4">
                    <ThemeToggle />
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 dark:text-gray-300">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed top-16 w-full z-40 md:hidden bg-white dark:bg-gray-800 p-4 shadow-md">
                    <MobileNavLink href="#services" onClick={() => setMenuOpen(false)}>
                        Services
                    </MobileNavLink>
                    <MobileNavLink href="#pricing" onClick={() => setMenuOpen(false)}>
                        Pricing
                    </MobileNavLink>
                    <MobileNavLink href="#contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </MobileNavLink>
                    <a
                        href="https://tidycal.com/zane-lewis/on-site-project-consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                            Book Now
                        </Button>
                    </a>
                </div>
            )}

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white max-w-4xl mx-auto">
                    Expert Construction Services in Coventry
                </h1>
                <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                    Professional plastering, painting, and tiling services with exceptional quality and modern solutions
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-lg">
                        Get Started
                    </Button>
                    <Button variant="outline" className="text-lg text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800">
                        View Services
                    </Button>
                </div>
            </header>

            {/* Services Section */}
            <section id="services" className="py-20 px-6 bg-white dark:bg-gray-800">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ServiceCard
                        title="Plastering"
                        description="Professional plastering services with smooth finish and expert application."
                        icon={Hammer}
                    />
                    <ServiceCard
                        title="Painting"
                        description="Interior and exterior painting services with premium materials."
                        icon={Brush}
                    />
                    <ServiceCard
                        title="Tiling"
                        description="Expert tiling solutions for floors, walls, and custom designs."
                        icon={Grid}
                    />
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Pricing</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <PriceCard
                        service="Basic Service"
                        price="£200"
                        unit="per room"
                        features={[
                            "Plastering",
                            "Basic Painting",
                            "Tile Installation",
                        ]}
                    />
                    <PriceCard
                        service="Premium Service"
                        price="£500"
                        unit="per room"
                        features={[
                            "Premium Plastering",
                            "Custom Painting",
                            "Custom Tile Design",
                        ]}
                    />
                    <PriceCard
                        service="Ultimate Service"
                        price="£1000"
                        unit="per project"
                        features={[
                            "Full Renovation",
                            "Expert Finish",
                            "High-End Materials",
                        ]}
                    />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-800">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Contact Us</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ContactCard
                        title="Phone"
                        content="123-456-7890"
                        icon={Phone}
                    />
                    <ContactCard
                        title="Email"
                        content="info@construction.com"
                        icon={Mail}
                    />
                    <ContactCard
                        title="Working Hours"
                        content="Mon - Fri: 9:00 AM - 5:00 PM"
                        icon={Clock}
                    />
                </div>
            </section>
        </div>
    );
}
