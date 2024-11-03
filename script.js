const progressBar = () => {

    setInterval(() => {
        const progress_bar = document.getElementById('progress-bar').style.width;
        const progress = progress_bar == '' ? 0 : progress_bar;

        let value = parseInt(progress);

        if (value < 100) {
            value += 5;

            document.getElementById('progress').innerText = value + '%';
            document.getElementById('progress-bar').style.width = value + '%';
        }
    }, 2000);
}

progressBar();