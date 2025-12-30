import './ImageUpload.css'
import UploadCard from './UploadCard'
import { Monitor, FileText, Receipt } from 'lucide-react'

function ImageUpload() {
  const imageCards = [
    {
      id: 1,
      title: 'Car Image',
      icon: Monitor,
      iconColor: '#3B82F6',
      iconBg: '#EFF6FF',
      buttonColor: '#3B82F6'
    },
    {
      id: 2,
      title: 'Sales / Insurance Image',
      icon: FileText,
      iconColor: '#F97316',
      iconBg: '#FFF7ED',
      buttonColor: '#F97316'
    },
    {
      id: 3,
      title: 'Purchase Invoice Image',
      icon: Receipt,
      iconColor: '#F97316',
      iconBg: '#FFF7ED',
      buttonColor: '#F97316'
    }
  ]

  return (
    <section className="upload-section">
      <div className="section-header">
        <h2 className="section-title">Image Upload</h2>
        <p className="section-description">Upload required images from your device or Google Drive</p>
      </div>
      <div className="cards-grid">
        {imageCards.map(card => (
          <UploadCard 
            key={card.id}
            title={card.title}
            icon={card.icon}
            iconColor={card.iconColor}
            iconBg={card.iconBg}
            buttonColor={card.buttonColor}
            type="image"
          />
        ))}
      </div>
    </section>
  )
}

export default ImageUpload

