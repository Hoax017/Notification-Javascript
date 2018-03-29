# Notification-Javascript

## Utilisation:
```javascript
	spawnNotification({
		title:		'Message entrant',
		body:		"Vous avez un nouveau message",
		icon:		"https://www.aymericdev.fr/img/assets/favicon.png",
		data:		{
			text: "Lorem"
		},
		dir:		"auto",
		closeTimeout: 0, // 0 = navigator default
		onclick:	function (e, notif){
			e.preventDefault(); // ne retourne pas sur l'onglet
			alert(notif.data.text);
		},
		onclose:	function (e, notif){
			e.preventDefault(); // ne retourne pas sur l'onglet
			alert("Close");
		},
		onerror:	function (e, notif){
			e.preventDefault(); // ne retourne pas sur l'onglet
			alert("Error");
		},
		onshow:	function (e, notif){
			e.preventDefault(); // ne retourne pas sur l'onglet
			alert("Show");
		}
	});
```
