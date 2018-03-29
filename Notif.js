function spawnNotification(options) {
	if (!("Notification" in window)) {
		console.error("This browser does not support desktop notification");
	}
	else
	{
		Notification.requestPermission().then(function(result) {
			if(result == "granted")
			{
				var n = new Notification(options.title, options);

				if (options.onclick) n.onclick	= function(e){options.onclick(e, n)};
				if (options.onclose) n.onclose	= function(e){options.onclose(e, n)};
				if (options.onerror) n.onerror	= function(e){options.onerror(e, n)};
				if (options.onshow) n.onshow	= function(e){options.onshow(e, n)};
				if (options.closeTimeout > 0) {
					setTimeout(n.close.bind(n), options.closeTimeout);
				}
			} else {
				console.error("Access denied for notification")
			}
		});
	}
}