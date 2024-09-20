
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import './Gallery.css'; // Custom styles for gallery
import { FaPlay } from 'react-icons/fa'; // Play icon for video

// Import all images and video thumbnails
const imageContext = require.context('../assets/images', false, /\.(jpg|jpeg|png)$/);
const videoContext = require.context('../assets/videos', false, /\.(mp4|webm|ogg)$/);

const photos = imageContext.keys().map(imageContext);
const videos = videoContext.keys().map(video => ({
  thumbnail: `/path/to/thumbnail/${video.split('/').pop().replace(/\.(mp4|webm|ogg)$/, '.jpg')}`, // Update this line with the actual path to the thumbnail
  url: videoContext(video) // Use the video imported by context
}));

// Function to get a random photo
const getRandomPhoto = () => {
  if (photos.length === 0) return '/path/to/default-thumbnail.jpg'; // Fallback if no photos are available
  const randomIndex = Math.floor(Math.random() * photos.length);
  return photos[randomIndex];
};

// Specific YouTube video slots using random photo for thumbnail
const specificVideos = [
  {
    thumbnail: getRandomPhoto(), // Random thumbnail
    url: 'https://www.youtube.com/embed/03IxNvbVsyc'
  },
  {
    thumbnail: getRandomPhoto(), // Random thumbnail
    url: 'https://www.youtube.com/embed/V02erN1_O9s'
  },
  {
    thumbnail: getRandomPhoto(), // Random thumbnail
    url: 'https://www.youtube.com/embed/mRWHmBIOiMk'
  }
];

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ type: '', src: '' });

  const handleClose = () => setShow(false);
  const handleShow = (content) => {
    setModalContent(content);
    setShow(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const galleryItems = document.querySelectorAll('.gallery-item');
      galleryItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isInViewport) {
          item.classList.add('in-view');
        } else {
          item.classList.remove('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container className="gallery-page py-5">
      <h2 className="text-center mb-4">Gallery</h2>
      <p className="text-center">Browse through images of school events, facilities, and activities.</p>

      {/* Photo Gallery */}
      <h3 className="text-center mt-5">Photo Gallery</h3>
      <Row className="gallery-grid">
        {photos.length > 0 ? photos.map((photo, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card onClick={() => handleShow({ type: 'image', src: photo })} className="gallery-item">
              <Card.Img variant="top" src={photo} className="gallery-photo" />
              <div className="overlay">
                <div className="overlay-content">View Image</div>
              </div>
            </Card>
          </Col>
        )) : (
          <Col className="text-center">
            <p>No photos available</p>
          </Col>
        )}
      </Row>

      {/* Video Gallery */}
      <h3 className="text-center mt-5">Video Gallery</h3>
      <Row className="gallery-grid">
        {videos.length > 0 ? videos.map((video, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card onClick={() => handleShow({ type: 'video', src: video.url })} className="gallery-item">
              <Card.Img variant="top" src={video.thumbnail} className="gallery-photo" />
              <div className="play-icon">
                <FaPlay size={30} />
              </div>
              <div className="overlay">
                <div className="overlay-content">Watch Video</div>
              </div>
            </Card>
          </Col>
        )) : (
          <Col className="text-center">
            <p>No videos available</p>
          </Col>
        )}
        {/* Specific YouTube Video Slots */}
        {specificVideos.map((video, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card onClick={() => handleShow({ type: 'video', src: video.url })} className="gallery-item">
              <Card.Img variant="top" src={video.thumbnail} className="gallery-photo" />
              <div className="play-icon">
                <FaPlay size={30} />
              </div>
              <div className="overlay">
                <div className="overlay-content">Watch Video</div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for viewing images/videos */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="text-center">
          {modalContent.type === 'image' ? (
            <img src={modalContent.src} alt="Gallery item" className="img-fluid modal-image" />
          ) : (
            <iframe
              width="100%"
              height="400"
              src={modalContent.src}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video"
            ></iframe>
          )}
        </Modal.Body>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal>
    </Container>
  );
};

export default Gallery;



