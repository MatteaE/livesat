var imgTag = document.querySelector("img")

var imgTitle = document.getElementById("img_title")

var geotiff16 = document.getElementById("geotiff16_dl")
var geotiff8 = document.getElementById("geotiff8_dl")

var btn_next = document.getElementById("btn_next")
var btn_prev = document.getElementById("btn_prev")

var count = img_names.length - 1

var img_v = "v3"

var geotiff16_names = img_names.map(x => x.replace("jpg", "tif"))
var geotiff8_names = img_names.map(x => x.replace(".jpg", "_pan.tif"))

var geotiff16_set = geotiff16_names.map(x => img_basedir + "/v1/" + x)
var geotiff8_set = geotiff8_names.map(x => img_basedir + "/v2/" + x)

function next() {
    img_set = img_names.map(x => img_basedir + "/" + img_v + "/" + x)

    count++
    if (count < img_set.length) {
		imgTag.src = img_set[count]
		imgTitle.innerHTML = img_titles[count]
		geotiff16.action = geotiff16_set[count]
		geotiff8.action = geotiff8_set[count]
		if (count == img_set.length - 1) {
			btn_next.disabled = true
		}
		// Re-enable prev button if we are moving away from first image.
		if (count == 1) {
			btn_prev.disabled = false
		}

	// This else should happen only if something has gone very wrong
	// (because the button should be disabled before count can reach
	// img_set.length). We put it anyway (defensive programming).
    } else {
		count = img_set.length - 1
	}

}

function prev() {
    img_set = img_names.map(x => img_basedir + "/" + img_v + "/" + x)

    count--
    if (count >= 0) {
		imgTag.src = img_set[count]
		imgTitle.innerHTML = img_titles[count]
		geotiff16.action = geotiff16_set[count]
		geotiff8.action = geotiff8_set[count]
		if (count == 0) {
			btn_prev.disabled = true
		}
		// Re-enable next button if we are moving away from last image.
		if (count == img_set.length - 2) {
			btn_next.disabled = false
		}
	// This else should happen only if something has gone very wrong
	// (because the button should be disabled before count can reach
	// the negatives). We put it anyway (defensive programming).
    } else {
		count = 0
    }
}


function toggle_contours() {
    if (img_v == "v3") {
        img_v = "v4"
    } else {
        img_v = "v3"
    }

    img_set = img_names.map(x => img_basedir + "/" + img_v + "/" + x)
    imgTag.src = img_set[count]

}
