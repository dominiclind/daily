const ROOT = 'src';

module.exports = function(plop) {

  // create util function
  plop.setGenerator('util', {
    description : 'Create Utility function',
    prompts : [
      {
        type : 'input',
        name : 'name',
        message : 'name: ',
        validate : function (value) {
            if ((/.+/).test(value)) { return true; }
            return 'name is required';
        }
      }
    ],
    actions : [
      {
        type: 'add',
        path : ROOT + '/utils/{{ camelCase name }}.js',
        templateFile : './plop-templates/util.txt'
      }
    ]
  });

	// create container
	plop.setGenerator('container', {
		description : 'Create Container Component',
		prompts : [
			{
				type : 'input',
				name : 'name',
				message : 'name: ',
				validate : function (value) {
						if ((/.+/).test(value)) { return true; }
						return 'name is required';
				}
			}
		],
		actions : [
			{
				type: 'add',
				path : ROOT + '/containers/{{ properCase name }}.js',
				templateFile : './plop-templates/container.txt'
			}
		]
	});
	// -- end container

	// create component
	plop.setGenerator('component', {
		description : 'Create Component',
		prompts : [
			{
				type : 'input',
				name : 'name',
				message : 'name: ',
				validate : function (value) {
						if ((/.+/).test(value)) { return true; }
						return 'name is required';
				}
			}
		],
		actions : [
			{
				type: 'add',
				path : ROOT + '/components/{{ properCase name }}.js',
				templateFile : './plop-templates/component.txt'
			}
		]
	});
	// -- end component





}
