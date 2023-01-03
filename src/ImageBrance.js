export class ImageBrance {

    getImages() {
        return fetch('data/photos.json').then(res => res.json())
                .then(d => d.data);
    }
}
