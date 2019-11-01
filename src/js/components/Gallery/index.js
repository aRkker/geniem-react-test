
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import InfiniteScroll from 'react-infinite-scroller';

import useStoreon from 'storeon/react';

const PhotoGallery = () => {

    function loadItems(page) {
        axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20`).then(data => data.data)
        .then(data => {
          dispatch('addPhotos', data);

          //jsonplaceholder limit is 5000 per resource
          if (photos.length + data.length >= 5000) {
            setHasMoreItems(false);
          }
        })
    }

    const { dispatch, photos, page } = useStoreon('photos', 'page')
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [hasMoreItems, setHasMoreItems] = useState(true);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
      }, []);
    
    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const scrollLoader = <div className='loader'>Loading ... </div >; 

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20`).then(data => data.data)
        .then(data => dispatch('updatePhotos', data))
    }, []);

    return (
    <div>
      <InfiniteScroll
              pageStart={page}
              loadMore={loadItems}
              hasMore={hasMoreItems}
              loader={scrollLoader}
              threshold={250}
              useCapture={true}
              initialLoad={false} >  
                
                   
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox} closeOnBackdropClick={true}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </InfiniteScroll>
    </div>
    );
}

export default PhotoGallery;