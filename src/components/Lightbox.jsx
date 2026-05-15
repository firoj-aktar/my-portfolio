function Lightbox({ image, onClose }) {
  if (!image) {
    return null
  }

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button type="button" onClick={onClose}>
        Close
      </button>
      <img src={image} alt="Expanded portfolio gallery" />
    </div>
  )
}

export default Lightbox
