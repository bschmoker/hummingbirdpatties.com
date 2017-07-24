// -- a promise is a try-catch wrapper function around code that will finish at an unpredictable time

// -- promise states
// fulfilled = succeeded
// rejected = failed
// pending = still waiting
// settled = done but not sure if succeeded or failed

// -- promises are attached and listen while running on the main thread
// (should be used when kicking off asynchronous thread or worker, rather than doing work in main thread)

// --set two function pointers and an event listener to handle a function returns with a particular response
// in this case, the image loading is success and image failing to load is an error
// .then is called on success  (if onload is called)
// .catch is called on error (if onerror is called)


var work = new Promise (function (resolve, reject) 
{
    var img = document.createElement('img');
    img.src = 'http://res.cloudinary.com/ravenflight/image/upload/c_scale,w_600/v1499840968/yunxi-shi-172762_sktfz1.jpg';
    img.onload = resolve;
    img.onerror = reject;
    document.body.appendChild(img);
})
