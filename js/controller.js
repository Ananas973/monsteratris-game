document.body.onkeydown = function( e ) {
    var keys = {
        37: 'left', // gauche
        39: 'right', // droite
        40: 'down', // en bas
        38: 'rotate', // rotation
        32: 'drop' // descendre
    };
    if ( typeof keys[ e.keyCode ] != 'undefined' ) {
        keyPress( keys[ e.keyCode ] );
        render();
    }
};
