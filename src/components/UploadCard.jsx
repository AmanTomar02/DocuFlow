import { useRef, useState } from 'react'
import './UploadCard.css'
import { Upload, Cloud, X, FileText, Image, CheckCircle } from 'lucide-react'

function UploadCard({ title, icon: Icon, iconColor, iconBg, buttonColor, type }) {
  const isImage = type === 'image'
  const fileInputRef = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [showDriveModal, setShowDriveModal] = useState(false)

  const acceptedFormats = isImage 
    ? 'image/jpeg,image/png,image/gif,image/webp' 
    : '.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleLocalUpload = () => {
    fileInputRef.current?.click()
  }

  const handleGoogleDrive = () => {
    setShowDriveModal(true)
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) {
      // Validate file type
      if (isImage && !file.type.startsWith('image/')) {
        alert('Please upload an image file')
        return
      }
      if (!isImage && !file.name.match(/\.(xls|xlsx)$/i)) {
        alert('Please upload an Excel file (.xls or .xlsx)')
        return
      }
      setSelectedFile(file)
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="upload-card">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept={acceptedFormats}
        style={{ display: 'none' }}
      />
      
      <div className="card-header">
        <div className="card-icon" style={{ backgroundColor: iconBg }}>
          <Icon size={18} color={iconColor} />
        </div>
        <h3 className="card-title">{title}</h3>
        {selectedFile && (
          <div className="file-status">
            <CheckCircle size={16} color="#22C55E" />
          </div>
        )}
      </div>
      
      <div className="card-body">
        {selectedFile ? (
          <div className="file-preview">
            <div className="file-info">
              <div className="file-icon-wrapper" style={{ backgroundColor: iconBg }}>
                {isImage ? (
                  <Image size={24} color={iconColor} />
                ) : (
                  <FileText size={24} color={iconColor} />
                )}
              </div>
              <div className="file-details">
                <p className="file-name">{selectedFile.name}</p>
                <p className="file-size">{formatFileSize(selectedFile.size)}</p>
              </div>
              <button className="remove-file-btn" onClick={handleRemoveFile}>
                <X size={18} />
              </button>
            </div>
            {isImage && selectedFile.type.startsWith('image/') && (
              <div className="image-preview">
                <img 
                  src={URL.createObjectURL(selectedFile)} 
                  alt="Preview" 
                />
              </div>
            )}
          </div>
        ) : (
          <div 
            className={`upload-area ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleLocalUpload}
          >
            <div className="upload-icon">
              {isImage ? (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="10" width="32" height="28" rx="3" stroke="#CBD5E1" strokeWidth="2"/>
                  <circle cx="17" cy="20" r="3" stroke="#CBD5E1" strokeWidth="2"/>
                  <path d="M8 32L16 24L22 30L32 20L40 28" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <ExcelIcon color={buttonColor} />
              )}
            </div>
            <p className="upload-text">
              {isDragging ? 'Drop file here' : (isImage ? 'Click to upload' : 'Click to upload Excel file')}
            </p>
            <p className="upload-subtext">
              {isImage ? 'or select from Google Drive' : 'Supported formats: .xls, .xlsx'}
            </p>
          </div>
        )}
        
        <div className="card-actions">
          {isImage ? (
            <>
              <button 
                className="btn btn-primary"
                style={{ backgroundColor: buttonColor }}
                onClick={handleLocalUpload}
              >
                <Upload size={14} />
                {selectedFile ? 'Change File' : 'Local Upload'}
              </button>
              <button className="btn btn-secondary" onClick={handleGoogleDrive}>
                <Cloud size={14} />
                Google Drive
              </button>
            </>
          ) : (
            <button 
              className="btn btn-primary btn-full"
              style={{ backgroundColor: buttonColor }}
              onClick={handleLocalUpload}
            >
              <Upload size={14} />
              {selectedFile ? 'Change File' : 'Choose File'}
            </button>
          )}
        </div>
      </div>

      {/* Google Drive Modal */}
      {showDriveModal && (
        <div className="modal-overlay" onClick={() => setShowDriveModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <Cloud size={24} color="#4285F4" />
              <h3>Google Drive</h3>
              <button className="modal-close" onClick={() => setShowDriveModal(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <p>Google Drive integration requires API setup.</p>
              <p className="modal-subtext">To enable this feature, you'll need to configure Google Drive API credentials.</p>
            </div>
            <div className="modal-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowDriveModal(false)}
              >
                Close
              </button>
              <button 
                className="btn btn-primary"
                style={{ backgroundColor: '#4285F4' }}
                onClick={() => window.open('https://console.cloud.google.com/', '_blank')}
              >
                Setup API
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ExcelIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="6" width="32" height="36" rx="2" fill={color}/>
      <rect x="12" y="10" width="24" height="28" rx="1" fill="white"/>
      <text x="24" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill={color}>X</text>
    </svg>
  )
}

export default UploadCard

