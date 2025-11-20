function ImageCard({ src, alt, caption }) {
  return (
    <figure className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <img src={src} alt={alt} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
      {caption && (
        <figcaption className="p-4 text-sm text-blue-100/90 bg-white/5 border-t border-white/10">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default ImageCard
