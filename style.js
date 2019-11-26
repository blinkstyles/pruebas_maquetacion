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

			    //Set description value
			    data.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

				PruebasMaquetacionStyle.prototype.assignContainers();
				PruebasMaquetacionStyle.prototype.showDomElements(data);
			});
		},

		assignContainers: function () {
            $('#slider-item-0 #transp0')
                .html('')
                .append('<div class="left_column"><div id="course_title"></div><div id="course_description"></div></div>')
                .append('<div class="right_column"><div id="course_units"></div></div>');
            containers.title = $('#course_title');
			containers.description = $('#course_description');
			containers.units = $('#course_units');
	    },

		showDomElements: function  (data){
			if (data.title.length != 0 ) {
				$(containers.title).html(data.title);
			}

			if (data.description.length != 0 ) {
				$(containers.description).html(data.description);
			}

			if (data.units.length != 0 ) {
				var unit_list = $(containers.units).append('<ul>').find('ul');
				$.each(data.units, function (key, unit) {
                   $(unit_list).append('<li id="' + unit.id + '" class="dropdown"><span>' + unit.title +'</span></li>');
				});
			}
		},
	};

	PruebasMaquetacionStyle.prototype = _.extend({}, new blink.theme.styles.basic(), PruebasMaquetacionStyle.prototype);

	blink.theme.styles['pruebas_maquetacion'] = PruebasMaquetacionStyle;
})( blink );
