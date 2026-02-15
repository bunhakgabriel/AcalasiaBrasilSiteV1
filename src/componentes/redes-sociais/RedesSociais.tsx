export function RedesSociais({ titulo = "" }: { titulo?: string }) {
    return (
        <section className="py-14 px-4 text-center">
            <p className="text-[#03ABB6] font-semibold mx-auto mb-6 text-xl">
                {titulo}
            </p>

            <div className="flex justify-center items-center flex-wrap">
                <div className="w-96 flex justify-center">
                    <a href="#" aria-label="Facebook">
                        <img
                            src="/imagens/icone-facebook.png"
                            alt="Facebook"
                            className="w-20 h-20 transition-transform hover:scale-110"
                        />
                    </a>
                </div>

                <div className="w-96 flex justify-center">
                    <a href="#" aria-label="Instagram">
                        <img
                            src="/imagens/icone-instagram.png"
                            alt="Instagram"
                            className="w-20 h-20 transition-transform hover:scale-110"
                        />
                    </a>
                </div>

                <div className="w-96 flex justify-center">
                    <a href="#" aria-label="TikTok">
                        <img
                            src="/imagens/icone-tiktok.png"
                            alt="TikTok"
                            className="w-20 h-20 transition-transform hover:scale-110"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
