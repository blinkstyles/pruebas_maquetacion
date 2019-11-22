(function (blink) {
	'use strict';

	var PruebasMaquetacionStyle = function () {
		blink.theme.styles.basic.apply(this, arguments);
	};

	var containers = {
		title: null,
		description : null,
		units:null,
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

				PruebasMaquetacionStyle.prototype.assignContainers();
				PruebasMaquetacionStyle.prototype.showDomElements(data);
			});
		},

		assignContainers: function () {
			$('#slider-item-0 #transp0').html('').append('<div id="course_title">').append('<div id="course_description">').append('<div id="course_units">');
			containers.title = $('#course_title');
			containers.description = $('#course_description');
			containers.units = $('#course_units');
	    },

		showDomElements: function  (data){
			$(containers.title).html(data.title);
			$(containers.description).html(data.description);
			$(containers.units).html(data.units);
		},
	};

	PruebasMaquetacionStyle.prototype = _.extend({}, new blink.theme.styles.basic(), PruebasMaquetacionStyle.prototype);

	blink.theme.styles['pruebas_maquetacion'] = PruebasMaquetacionStyle;
})( blink );
