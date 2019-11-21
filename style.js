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
                        var containers = {
		          title: null,
		          description : null,
		          courses:null,
		        };

			parent.init.call(this);
			blink.getCourse(idcurso).done(function(data) {
			    console.log('Curso JSON', data);
		            assignContainers();		
			    showDomElements(data);
			});

	                function assignContainers() {
			   $('#slider-item-0 #transp0')
			     .html('')
			     .append('<div id="course_title">')
			     .append('<div id="course_description">')
			     .append('<div id="course_themes"');

			   containers.title = $('#course_title');
		    	   containers.description = $('#course_description');
			   containers.courses = $('#course_themes');
		        };
		        
			function showDomElements (data){
		           $(containers.title).html(data.title);		    
		           $(containers.description).html(data.title);		    
		           $(containers.courses).html(data.title);		    
		        }
		},
	};

	PruebasMaquetacionStyle.prototype = _.extend({}, new blink.theme.styles.basic(), PruebasMaquetacionStyle.prototype);

	blink.theme.styles['pruebas_maquetacion'] = PruebasMaquetacionStyle;
})( blink );
