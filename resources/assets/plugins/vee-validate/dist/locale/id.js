!function(a,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(a.__locale__id=a.__locale__id||{},a.__locale__id.js=n())}(this,function(){"use strict";var a={after:function(a,n){return a+" harus sebelum "+n[0]+"."},alpha_dash:function(a){return a+" boleh mengandung karakter alfanumerik, tanda hubung, dan garis bawah."},alpha_num:function(a){return a+" hanya boleh mengandung karakter alfanumerik."},alpha:function(a){return a+" hanya boleh mengandung karakter alfabet."},before:function(a,n){return a+" harus setelah "+n[0]+"."},between:function(a,n){return a+" harus di antara "+n[0]+" dan "+n[1]+"."},confirmed:function(a,n){return a+" tidak cocok dengan "+n[0]+"."},date_between:function(a,n){return a+" harus di antara "+n[0]+" dan "+n[1]+"."},date_format:function(a,n){return a+" harus dalam format "+n[0]+"."},decimal:function(a,n){void 0===n&&(n=["*"]);var e=n[0];return a+" harus berupa angka dan boleh mengandung "+("*"===e?"":e)+" titik desimal."},digits:function(a,n){return a+" harus berupa "+n[0]+" digit angka."},dimensions:function(a,n){return a+" harus berdimensi lebar "+n[0]+" pixel dan tinggi "+n[1]+" pixel."},email:function(a){return a+" harus berupa alamat surel yang benar."},ext:function(a){return a+" harus berupa berkas yang benar."},image:function(a){return a+" harus berupa gambar."},in:function(a){return a+" harus berupa nilai yang sah."},ip:function(a){return a+" harus berupa alamat ip yang sah."},max:function(a,n){return a+" tidak boleh lebih dari "+n[0]+" karakter."},mimes:function(a){return"Tipe berkas "+a+" harus benar."},min:function(a,n){return a+" minimal mengandung "+n[0]+" karakter."},not_in:function(a){return a+" harus berupa nilai yang sah."},numeric:function(a){return a+" harus berupa angka."},regex:function(a){return"Format "+a+" salah."},required:function(a){return a+" harus diisi."},size:function(a,n){return a+" harus lebih kecil dari "+n[0]+" KB."},url:function(a){return a+" harus berupa tautan yang benar."}},n={name:"id",messages:a,attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate&&(VeeValidate.Validator,!0)&&VeeValidate.Validator.addLocale(n),n});