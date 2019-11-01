import createStore from 'storeon';


let init = store => {
    store.on('@init', () => ({ photos: [], page: 0 }));
    store.on('updatePhotos', (state, photoArray) => { 
        let galleryPhotos = [];
        for (let photo of photoArray) {
            galleryPhotos.push({
                width: 4,
                height: 3,
                src: photo.url,
                title: photo.title,
                key: ''+ [...state.photos, ...galleryPhotos].length+1
            })
        }

        return {...state, photos: galleryPhotos};
    });

    store.on('addPhotos', (state, photoArray) => {
        let galleryPhotos = [];
        for (let photo of photoArray) {
            galleryPhotos.push({
                width: 4,
                height: 3,
                src: photo.url,
                title: photo.title,
                key: ''+ [...state.photos, ...galleryPhotos].length+1
            })
        }
      
        return {...state, photos: [...state.photos, ...galleryPhotos]};
    });

}

const store = createStore(
    [
        process.env.NODE_ENV !== 'production' && require('storeon/devtools'),
        init
    ]);

export default store;