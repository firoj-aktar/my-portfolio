function Gallery({ gallery, onImageOpen }) {
  return (
    <section id="gallery" className="section">
      <p className="section-label">Gallery</p>
      <h2>Portfolio Gallery</h2>
      <div className="gallery-grid">
        {gallery.map((image) => (
          <button key={image} type="button" onClick={() => onImageOpen(image)}>
            <img src={image} alt="Portfolio gallery" />
          </button>
        ))}
      </div>
    </section>
  )
}

export default Gallery
