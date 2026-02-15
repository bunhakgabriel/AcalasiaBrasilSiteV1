import { useEffect, useState, type JSX } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Menu(): JSX.Element {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    useEffect((): (() => void) => {
        const onScroll = (): void => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            {/* Top bar (desktop only) */}
            <div
                className={`hidden md:block overflow-hidden transition-all duration-300 ease-in-out bg-[#03ABB6] text-white ${scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
                    }`}
            >
                <div className="max-w-7xl mx-auto pl-20 pr-6 py-2 flex items-center justify-between text-md">
                    <div className="flex gap-6">
                        <div className="flex items-center gap-1"><FaPhoneAlt /> (83) 98888-2363 <FaWhatsapp /></div>
                        <div className="flex items-center gap-1"><FaPhoneAlt /> (81) 99247-9363 <FaWhatsapp /></div>
                        <div className="flex items-center gap-1"><MdOutlineMail /> acalasiabrasil@acalasia.com.br</div>
                    </div>
                </div>
            </div>

            {/* Main menu */}
            <div
                className={`bg-white transition-all duration-300 ease-in-out shadow-sm ${scrolled ? "py-4" : "py-2"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <img
                        src="/imagens/logo.png"
                        alt="Acalasia e Megaesôfago Brasil"
                        className={`transition-all duration-300 ${scrolled ? "h-14" : "h-32"
                            }`}
                    />

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
                        <MenuItem active>HOME</MenuItem>
                        <MenuItem>O GRUPO</MenuItem>
                        <MenuItem>EQUIPE</MenuItem>
                        <MenuItem>GALERIA</MenuItem>
                        <MenuItem>CONTATO</MenuItem>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        aria-label="Abrir menu"
                        className="md:hidden w-10 h-10 border border-gray-300 rounded-md flex flex-col items-center justify-center gap-1"
                        onClick={() => setMobileOpen((prev) => !prev)}
                    >
                        <span className="w-5 h-0.5 bg-gray-600" />
                        <span className="w-5 h-0.5 bg-gray-600" />
                        <span className="w-5 h-0.5 bg-gray-600" />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${mobileOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col px-6 py-4 gap-2">
                    <MobileMenuItem active onClick={() => setMobileOpen(false)}>
                        HOME
                    </MobileMenuItem>
                    <MobileMenuItem onClick={() => setMobileOpen(false)}>
                        O GRUPO
                    </MobileMenuItem>
                    <MobileMenuItem onClick={() => setMobileOpen(false)}>
                        EQUIPE
                    </MobileMenuItem>
                    <MobileMenuItem onClick={() => setMobileOpen(false)}>
                        GALERIA
                    </MobileMenuItem>
                    <MobileMenuItem onClick={() => setMobileOpen(false)}>
                        CONTATO
                    </MobileMenuItem>
                </div>
            </div>
        </header>
    );
}

/* ===========================
   Desktop MenuItem
=========================== */

interface MenuItemProps {
    children: React.ReactNode;
    active?: boolean;
}

function MenuItem({ children, active = false }: MenuItemProps): JSX.Element {
    return (
        <a
            href="#"
            className={`px-4 py-2 rounded-full transition-all duration-300 ${active ? "bg-[#03ABB6] text-white" : "hover:text-[#03ABB6]"
                }`}
        >
            {children}
        </a>
    );
}

/* ===========================
   Mobile MenuItem
=========================== */

interface MobileMenuItemProps {
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
}

function MobileMenuItem({
    children,
    active = false,
    onClick,
}: MobileMenuItemProps): JSX.Element {
    return (
        <button
            onClick={onClick}
            className={`text-left px-4 py-3 rounded-full text-sm transition-all ${active
                    ? "bg-[#03ABB6] text-white"
                    : "text-gray-600 hover:text-[#03ABB6]"
                }`}
        >
            {children}
        </button>
    );
}
