document.addEventListener('DOMContentLoaded', () => {
	const elems = document.querySelectorAll('.sidenav');
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Sidenav.init(elems,{
        edge: 'right',
        draggable: true,
        inDuration: 250,
        outDuration: 200
        });
	
	M.Materialbox.init(imgLightBox, {
		inDuration: 500,
		outDuration: 500
	});
});

