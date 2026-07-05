function cariBarang(barcode){

fetch(scriptURL + "?barcode=" + barcode)
.then(r=>r.json())
.then(data=>{

    if(data.status=="not found"){

        alert("Barang tidak ditemukan");
        return;

    }

    document.getElementById("stockBarcode").innerText=data.barcode;
    document.getElementById("stockItem").innerText=data.item;
    document.getElementById("stockDesc").innerText=data.description;
    document.getElementById("stockQty").innerText=data.qty;
    document.getElementById("stockLast").innerText=data.last;

});

}
