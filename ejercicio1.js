dineroCarlo = prompt("Cuanto dinero tenes?");
dineroCarlo = parseInt(dineroCarlo);


if (dineroCarlo >= 0.6 && dineroCarlo < 1){
	alert("te alcanza para el helado de agua")
	alert("te sobran " + (dineroCarlo - 0.6));
}
else if (dineroCarlo >= 1 && dineroCarlo < 1.6){
	alert("te alcanza para el helado de crema")
	alert("te sobran " + (dineroCarlo - 1));
}
else if (dineroCarlo >= 1.6 && dineroCarlo < 1.7){
	alert("te alcanza para el heladovich")
	alert("te sobran " + (dineroCarlo - 1.6));
}
else if (dineroCarlo >= 1.7 && dineroCarlo< 1.8){
	alert("te alcanza para el heladrdo")
	alert("te sobran " + (dineroCarlo - 1.7));
}
else if (dineroCarlo>=1.8 && dineroCarlo< 2.9){
	alert("te alcanza para el heladix")
	alert("te sobran " + (dineroCarlo - 1.8));
}
else if(dineroCarlo >= 2.9){
	alert("te alcanza para el 1/4 o el helado con confites")
	alert("te sobran " + (dineroCarlo - 2.9));
}
else {
	alert("no te alcanza para nada")
}