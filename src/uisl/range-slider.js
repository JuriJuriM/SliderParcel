const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [0, 200],
        connect: true,
        step: 1,
        range: {
            'min': [0],
            'max': [200]
        }
    });
}
