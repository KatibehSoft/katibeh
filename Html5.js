let html5QrcodeScanner;
function htmlScanner(dotnetHelper) {
         html5QrcodeScanner = new Html5QrcodeScanner(
            "reader",
            {
                fps: 10,
                qrbox: { width: 200, height: 100 },
                useBarCodeDetectorIfSupported: true,
                rememberLastUsedCamera: true,
                aspectRatio: 3 / 4,
                supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
                showTorchButtonIfSupported: true,
                showZoomSliderIfSupported: true,
                defaultZoomValueIfSupported: 250
            });
    html5QrcodeScanner.render(onScanSuccess);
        function onScanSuccess(decodedText, decodedResult) {
            dotnetHelper.invokeMethodAsync("OnDetected", decodedText);
            //StopBarcodeScanner();
        }

    function onScanFailure(error) {
        dotnetHelper.invokeMethodAsync("OnErrorCamera",error);
    }
}
function StopBarcodeScanner() {
    if (html5QrcodeScanner) {
        html5QrcodeScanner.clear();
    }

}


