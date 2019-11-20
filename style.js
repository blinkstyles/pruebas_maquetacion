(function (blink) {
	'use strict';

	var PruebasMaquetacionStyle = function () {
		blink.theme.styles.basic.apply(this, arguments);
	};

	PruebasMaquetacionStyle.prototype = {
		bodyClassName: 'content_type_clase_pruebas_maquetacion',
		ckEditorStyles: {
			name: 'pruebas_maquetacion',
			styles: []
		},
		slidesTitle: {},

		init: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.init.call(this);
			blink.getCourse(idcurso).done(function(data) {
			    console.log('Curso JSON', data);
			    showDomElements();
			});
			
			function showDomElements() {
			   console.log('hola');
			}
		}
	};

	PruebasMaquetacionStyle.prototype = _.extend({}, new blink.theme.styles.basic(), PruebasMaquetacionStyle.prototype);

	blink.theme.styles['pruebas_maquetacion'] = PruebasMaquetacionStyle;
})( blink );
