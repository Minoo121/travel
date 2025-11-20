function descbutton(name) {
    const desc = document.getElementById(name + '_desc');
    const img = document.getElementById(name + '_descbutton_img');
    if (!desc) return;

    const isHidden = desc.classList.contains('hidden');

    if (isHidden) {
        // ---- 開く（するっと） ----
        desc.classList.remove('hidden');
        desc.classList.add('opening');

        desc.style.height = 'auto';
        const fullHeight = desc.scrollHeight + 'px';

        desc.style.height = '0px';
        desc.offsetHeight;  // reflow
        desc.style.height = fullHeight;

        setTimeout(() => {
            desc.classList.remove('opening');
            desc.classList.add('open');
            desc.style.height = 'auto';
        }, 350);

        if (img) img.src = './img/apper.png';

    } else {
        // ---- 閉じる（スッと） ----
        desc.classList.remove('open');

        const currentHeight = desc.scrollHeight + 'px';
        desc.style.height = currentHeight;

        desc.offsetHeight; // reflow
        desc.style.height = '0px';

        setTimeout(() => {
            desc.classList.add('hidden');
        }, 350);

        if (img) img.src = './img/ander.png';
    }
}
