function ChangeCertificate() {
	var img = document.getElementById("certificate");
	var a = img.src.split("/");

	var httpurl = a.shift();
	a.shift();

	a[a.length - 1] = certificate();

	var str = http(httpurl);
	for (i = 0; i < a.length; i++) {
		str += a[i] + "/";
	}

	str = str.slice(0, -1);

	img.src = str;

	console.log(a);
	console.log(str);
}

function certificate() {
	return "certificate__0" + Math.floor(Math.random() * 3 + 1) + ".jpg";
}

function http(httpurl) {
	console.log(httpurl);
	return httpurl + "//";
}

ChangeCertificate();

// http://localhost:3000/courses/unity/data/certificate__01.jpg

// https://localhost:3000/courses/unity/data/certificate__02.jpg
