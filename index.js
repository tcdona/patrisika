var util = require('util');
var Scope = require('patrisika-scopes').Scope;
var deo = require('./passes/latter/cps-deo').pass;
var cdg = require('./passes/latter/codegen').pass;

exports.generate = function(ast, externs){
	var globals = new Scope(externs);
	var r = deo(ast, globals);
	util.inspect(r, {depth: null})
	return cdg(r, globals)
}
exports.DefaultExterns = function(){
	var externs = new Scope();
	externs.castName = function(name){ return name };

	externs.declare('Object')
	externs.declare('Number')
	externs.declare('Boolean')
	externs.declare('String')
	externs.declare('RegExp')
	externs.declare('Function')
	externs.declare('alert')
	externs.declare('console')
	externs.declare('setInterval')

	return externs;
};

exports.Scope = Scope;