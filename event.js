function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#mymarker");
        const aEntity = document.querySelector("#mymodel");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            console.log('click')
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const color = aEntity.getAttribute('color');
                aEntity.setAttribute('color', getRandomColor());
            }
        });
}});




