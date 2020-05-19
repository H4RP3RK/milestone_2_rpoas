const photos = [
    {
        title: "Biggar Gala Day (1975)",
        src: "/assets/images/gallery/biggar-galaday-1975-min.jpg",
        location: "Biggar",
        caption: "",
        year: 1975
    },
    {
        title: "Bikes (1974)",
        src: "/assets/images/gallery/bikes-1974-min.jpg",
        location: "",
        caption: "",
        year: 1974
    },
    {
        title: "Bishopbriggs (1971)",
        src: "/assets/images/gallery/bishopbriggs-1971-min.jpg",
        location: "Bishopbriggs",
        caption: "",
        year: 1971
    },
    {
        title: "Cambuslang (1964)",
        src: "/assets/images/gallery/cambuslang-1964-min.jpg",
        location: "Cambuslang",
        caption: "",
        year: 1964
    },
    {
        title: "Caterpillar Workers Strike (1987)",
        src: "/assets/images/gallery/caterpillarworkerstrike-oldeclub-1987-min.jpg",
        location: "Uddingston",
        caption: "",
        year: 1987
    },
];

function search(input) {
    const searchResults = document.querySelector(".search-results-container");
    const photo = photos.find(function(objectPhoto) {
        return objectPhoto.location.toLowerCase() === input.toLowerCase();
    });
    searchResults.innerHTML = `<img class="gallery-photo" src="${photo.src}" alt="${photo.title}" data-caption="${photo.caption}" data-toggle="modal" data-target="#galleryModal" tabindex="0">`;
    return photo;
};

console.log(search("Uddingston"));









