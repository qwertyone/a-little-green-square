// Drop down menu for feedforward policy visualizations from requestor to worker
(function(){
	
	var app = angular.module('dropdown',[]);
	
	//controller to handle var
	app.controller('dropdownController', function(){
		//this.options = responseTimeFramesPay
		alert('success');
	});
	/*
	//controller to handle and update state number for worker icon visualization -- sends to database
	app.controller('updateController', function (){
		
		this.update = {};
		
		this.updateStatus = function(option){
			option.update.push(this.update);
			this.update = {};
		};
	});
	
	//controller to default infinity option state 5
	app.controller('optionController', function(){
		this.State = 5; //state five default reference
		
		this.isSet = function(checkState){
			return this.State == checkState;
		};
		
		this.setState = function(setState){
			this.State = setState;
		};
	});
		
	var responseTimeFramesPay = [
	{
		timeframe:'Minutes',
		state:1,
		hex: "#00FF00",
		description: 'The requestor can respond in a couple of Minutes',
		canDisplay: true,
	},
	{
		timeframe:'Hours',
		state:2,
	  hex: "#32fF32",
		description: 'The requestor can respond in a few hours',
		canDisplay: true,
	},
		{
		timeframe:'Days',
		state:3,	
		hex: "#66FF66",
		description: 'The requestor can respond in a couple of days',
		canDisplay: true,
	},
		{
		timeframe:'Month',
		state:4,
		hex: "#99FF99",
		description: 'The requestor can respond in a month.',
		canDisplay: true,
	},
			{
		timeframe:'Infinity',
		state:5,
		hex: "#e5FFe5",
		description: 'The requestor is unresponsive.',
		canDisplay: true,
	}
	];
*/	
})();