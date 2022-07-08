let triggerMargin = 500;

var mainBlocks = window.document.getElementsByClassName("main-block");
var fadeIn = function() {
    for (var block of mainBlocks) {
        if (block.getBoundingClientRect().top < triggerMargin) {
            block.classList.add('show');
        }
    }
};

window.addEventListener('load', fadeIn);
window.addEventListener('scroll', fadeIn);