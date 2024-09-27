function tryCatch(val) {
    try {
        if (isNaN(val)) {
            throw "Not a number";
        } else {
            console.log("Got number");
        }
    } catch (e) {
        console.error("Catch error", e);
        
    } finally {
        console.log("Done finally, val:", val);
    }
}

tryCatch("a");
tryCatch(100);
   