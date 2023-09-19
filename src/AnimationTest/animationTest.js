const testAnimation = () => {
    const bars = document.querySelectorAll(
        `.data-bars`
    );
    bars.forEach((bar, index2) => {
        setTimeout(() => {
            if (index2 === (bars.length - 1)) {
                bar.style.background = "green";
                return;
            }
            if (bar.clientHeight <= bars[index2 + 1].clientHeight) {
                bar.style.background = "green";
            }
            if (bar.clientHeight > bars[index2 + 1].clientHeight) {
                bar.style.background = "red";
            }
        }, 10 * index2)
    })
}

export default testAnimation;
