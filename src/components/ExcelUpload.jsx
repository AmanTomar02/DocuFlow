import './ExcelUpload.css'
import UploadCard from './UploadCard'
import { FileSpreadsheet } from 'lucide-react'

function ExcelUpload() {
  const excelCards = [
    {
      id: 1,
      title: 'Sales Data Excel',
      icon: FileSpreadsheet,
      iconColor: '#22C55E',
      iconBg: '#F0FDF4',
      buttonColor: '#22C55E'
    },
    {
      id: 2,
      title: 'Insurance Data Excel',
      icon: FileSpreadsheet,
      iconColor: '#F97316',
      iconBg: '#FFF7ED',
      buttonColor: '#F97316'
    }
  ]

  return (
    <section className="upload-section excel-section">
      <div className="section-header">
        <h2 className="section-title">Excel Upload</h2>
        <p className="section-description">Upload Excel files containing sales and insurance data</p>
      </div>
      <div className="excel-cards-grid">
        {excelCards.map(card => (
          <UploadCard 
            key={card.id}
            title={card.title}
            icon={card.icon}
            iconColor={card.iconColor}
            iconBg={card.iconBg}
            buttonColor={card.buttonColor}
            type="excel"
          />
        ))}
      </div>
    </section>
  )
}

export default ExcelUpload

