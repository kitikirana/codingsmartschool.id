// Initialize Firebase
var config = {
    apiKey: "AIzaSyDsYITS1cnCPu2_gLOyyzoS43zm1riPs0g",
    authDomain: "coss-4903f.firebaseapp.com",
    databaseURL: "https://coss-4903f.firebaseio.com",
    storageBucket: "coss-4903f.appspot.com",
	messagingSenderId: "415167229768"
};
firebase.initializeApp(config);

var mom = firebase.database().ref();

function daftar() {
	'use strict'
	// Inputs
	var nama = $('#name').val();
	var hp = $('#hp').val();
	var alamat = $('#alamat').val();
	var email = $('#email').val();
	var sma = $('#sma').val();
	var lahir = document.getElementById("tanggal_lahir").value;
	var sma = $('#sma').val();
	var minat = $('#minat').val();
	var convert = nama.toLowerCase().replace(/\s/g,'');
	var date = new Date(),
	    year = date.getFullYear(),
	    month = date.getMonth() + 1,
	    day = date.getDate(),
	    right_now = year + '-' + month + '-' + day;

	if (nama == '') {
		alert("Nama tidak boleh kosong");
	} else if (hp == '') {
		alert("Nomor HP tidak boleh kosong")
	} else if (alamat == '') {
		alert("Alamat tidak boleh kosong")
	} else if (email == '') {
		alert("Email tidak boleh kosong")
	} else if (smp == '') {
		alert("Mohon sebutkan asal SMP mu")
	} else if (lahir == '') {
		alert("Tanggal lahir tidak boleh kosong")
	} else if (sma == '') {
		alert("Mohon sebutkan SMA daftaranmu")
	} else {
		firebase.database().ref('data_pendaftar/gelombang_2/' + convert).set({
		    nama: nama,
		    no_hp: hp,
		    alamat: alamat,
		    email: email,
		    smp: smp,
		    tanggal_lahir: lahir,
		    sma: sma,
		    minat: minat,
		    tanggal_daftar: right_now
		 });
		 
		 window.location.href = 'thankyou.html';
	}

}
