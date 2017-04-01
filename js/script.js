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
	var watson = $('#watson').val();
	var lahir = document.getElementById("emma_watson").value;
	var alasan = $('#alasan').val();

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
	} else if (watson == '') {
		alert("Riwayat pendidikan tidak boleh kosong")
	} else if (lahir == '') {
		alert("Tanggal lahir tidak boleh kosong")
	} else if (alasan == '') {
		alert("Mohon sebutkan kenapa kamu mau menjadi murid di Coding Smart School.")
	} else {
		firebase.database().ref(emma).set({
		    nama: nama,
		    no_hp: hp,
		    alamat: alamat,
		    email: email,
		    riwayat_pendidikan: watson,
		    tanggal_lahir: lahir,
		    alasan: alasan
		 });
		 
		 window.location.href = 'thankyou.html';
	}

}