export default function PosPoemVideos() {
  const videos = [
    "/videos/pós-poem-1.mp4",
    "/videos/pós-poem-2.mp4",
    "/videos/pós-poem-3.mp4",
    "/videos/pós-poem-4.mp4",
    "/videos/pós-poem-5.mp4",
    "/videos/cirurgia-19-02.mp4",
  ];

  return (
    <section className="bg-gray-100 py-10 px-10">
      <h1 className="text-center font-semibold text-2xl md:text-4xl pt-0 pb-8 text-[#03ABB6]">Vídeos</h1>
      <div className="max-w-7xl mx-auto">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {videos.map((src, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                overflow-hidden
                shadow-sm
                bg-black
              "
            >
              <video
                src={src}
                controls
                preload="metadata"
                className="
                  w-full
                  h-64
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
