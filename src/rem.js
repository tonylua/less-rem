(function (root, factory) {
    if (typeof exports === 'object') {     
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {     
        define([], factory);
    } else {     
        root['less-rem'] = factory();
    }
})(this, function () {

	var 
		_fac = 100,
		_resizeEvt = 'onorientationchange' in window 
			? 'orientationchange' 
			: 'resize';

    function calc_rem(e) {
		var meta = document.querySelector('head meta[name=viewport]');
		if (!meta) {
			meta = document.createElement('meta');
			meta.setAttribute('name', 'viewport');
			document.getElementsByTagName('head')[0].appendChild(meta);
		}
		var
			dpr = window.devicePixelRatio || 1,
			scale = parseFloat(1 / dpr).toFixed(2),
			w = dpr * screen.width,
			rem = parseFloat(w / fac).toFixed(1),
			metaCont = [
				'width=', w,
				', initial-scale=', scale,
				', maximum-scale=', scale,
				', user-scalable=0'
				].join(''),
			$style = document.createElement('style');
		meta.setAttribute('content', metaCont);
		document.documentElement.firstElementChild.appendChild($style);
		$style.innerHTML = 'html {font-size:'+rem + 'px !important}';
		$style = null;
	}
	
	return function(fac) {
		if (typeof fac === 'undefined') fac = 100;
		_fac = fac;
		window.addEventListener(_resizeEvt, calc_rem);
		calc_rem();		
	};
});