var imgTag = document.querySelector("img")
var imgTitle = document.getElementById("img_title")
var geotiff16 = document.getElementById("geotiff16_dl")
var geotiff8 = document.getElementById("geotiff8_dl")

var count = img_names.length - 1

var img_v = "v3"

var geotiff16_names = img_names.map(x => x.replace("jpg", "tif"))
var geotiff8_names = img_names.map(x => x.replace(".jpg", "_pan.tif"))

var geotiff16_set = geotiff16_names.map(x => img_basedir + "/v1/" + x)
var geotiff8_set = geotiff8_names.map(x => img_basedir + "/v2/" + x)

function next() {
    img_set = img_names.map(x => img_basedir + "/" + img_v + "/" + x)

    count++
    if (count >= img_set.length) {
        count = 0
    }
    imgTag.src = img_set[count]
    imgTitle.innerHTML = img_titles[count]
    geotiff16.action = geotiff16_set[count]
    geotiff8.action = geotiff8_set[count]
}

function prev() {
    img_set = img_names.map(x => img_basedir + "/" + img_v + "/" + x)

    count--
    if (count < 0) {
        count = img_set.length - 1
    }
    imgTag.src = img_set[count]
    imgTitle.innerHTML = img_titles[count]
    geotiff16.action = geotiff16_set[count]
    geotiff8.action = geotiff8_set[count]
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
