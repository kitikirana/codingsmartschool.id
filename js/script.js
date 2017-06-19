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
	var sma = $('#sma').val();emma
	var lahir = document.getElementById("tanggal_lahir").value;
	var sma = $('#sma').val();
	var minat = $('#minat').val();

	var lowercase = nama.toLowerCase();
	var emma = lowercase.replace(/\s/g,'');

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
		firebase.database().ref('gelombang_2/' + emma).set({
		    nama: nama,
		    no_hp: hp,
		    alamat: alamat,
		    email: email,
		    smp: smp,
		    tanggal_lahir: lahir,
		    sma: sma,
		    minat: minat
		 });
		 
		 window.location.href = 'thankyou.html';
	}

}