function numAleatorio() {
    const aleatorio = Math.floor(Math.random() * 10) + 1;
    return aleatorio;
};

module.exports = {
    numAleatorio
}