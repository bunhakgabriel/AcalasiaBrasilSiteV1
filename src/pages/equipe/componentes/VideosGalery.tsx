export default function VideoGallery() {
  const videos = [
    "/videos/dr-edigar.mp4",
    "/videos/miriam.mp4",
    "/videos/larissa.mp4",
  ];

  return (
    <section className="bg-gray-100 py-10 px-4">
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
                  h-72
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
