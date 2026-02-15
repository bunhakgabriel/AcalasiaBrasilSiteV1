import { useEffect, useState, type JSX } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

export default function Menu(): JSX.Element {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    const path = useLocation().pathname;
    const navigate = useNavigate();

    function navigateTo(path: string, mobile?: boolean): void {
        navigate(path);

        if(mobile){
            setMobileOpen(false);
        }
    }

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
                        <MenuItem onClick={() => navigateTo("/")} active={path == "/"}>HOME</MenuItem>
                        <MenuItem onClick={() => navigateTo("/quem_somos")} active={path == "/quem_somos"}>O GRUPO</MenuItem>
                        <MenuItem onClick={() => navigateTo("/equipe")} active={path == "/equipe"}>EQUIPE</MenuItem>
                        <MenuItem onClick={() => navigateTo("/portifolio")} active={path == "/portifolio"}>GALERIA</MenuItem>
                        <MenuItem onClick={() => navigateTo("/contato")} active={path == "/contato"}>CONTATO</MenuItem>
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
                    <MobileMenuItem active={path == "/"} onClick={() => navigateTo("/", true)}>
                        HOME
                    </MobileMenuItem>
                    <MobileMenuItem active={path == "/quem_somos"} onClick={() => navigateTo("/quem_somos", true)}>
                        O GRUPO
                    </MobileMenuItem>
                    <MobileMenuItem active={path == "/equipe"} onClick={() => navigateTo("/equipe", true)}>
                        EQUIPE
                    </MobileMenuItem>
                    <MobileMenuItem active={path == "/portifolio"} onClick={() => navigateTo("/portifolio", true)}>
                        GALERIA
                    </MobileMenuItem>
                    <MobileMenuItem active={path == "/contato"} onClick={() => navigateTo("/contato", true)}>
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
    onClick?: () => void;
}

function MenuItem({ children, active = false, onClick }: MenuItemProps): JSX.Element {
    return (
        <a
            onClick={onClick}
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
