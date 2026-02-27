export function RedesSociais({ titulo = "" }: { titulo?: string }) {
    return (
        <section className="py-14 px-4 text-center">
            <p className="text-[#03ABB6] font-semibold mx-auto mb-6 text-xl">
                {titulo}
            </p>

            <div className="flex justify-center items-center flex-wrap">
                <div className="w-64 flex justify-center">
                    <a target="_blank" href="https://www.facebook.com/groups/186091785171184" aria-label="Facebook">
                        <img
                            src="/redes-sociais/icone-facebook.png"
                            alt="Facebook"
                            className="w-20 h-20 transition-transform hover:scale-110"
                        />
                    </a>
                </div>

                <div className="w-72 flex justify-center">
                    <a target="_blank" href="https://www.instagram.com/acalasiabrasil/" aria-label="Instagram">
                        <img
                            src="/redes-sociais/icone-instagram.png"
                            alt="Instagram"
                            className="w-20 h-20 transition-transform hover:scale-110"
                        />
                    </a>
                </div>

                <div className="w-64 flex justify-center">
                    <a target="_blank" href="https://www.youtube.com/@acalasiabrasil" aria-label="YouTube">
                        <img
                            src="/redes-sociais/icone-youtube.png"
                            alt="YouTube"
                            className="w-20 h-20 transition-transform hover:scale-110"
                        />
                    </a>
                </div>

                <div className="w-64 flex justify-center">
                    <a target="_blank" href="https://www.tiktok.com/@acalasiamegaesofago?_t=ZM-8yeoqV0kjVW&_r=1" aria-label="TikTok">
                        <img
                            src="/redes-sociais/icone-tiktok.png"
                            alt="TikTok"
                            className="w-20 h-20 transition-transform hover:scale-110"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
