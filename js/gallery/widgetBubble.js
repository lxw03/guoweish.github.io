// global setting=================================
	var svgWidth = 600,
		svgHeight = 600;

	var svg = d3.select('body')
			.select('#galleryContainer')
			.append('svg')
			.attr('width', svgWidth)
			.attr('height', svgHeight);

	//no.11 ==========================================
	// 彩色圆形堆叠
	//================================================
	var no_11 = svg.append('g')
			.attr('id', 'no_11');

	var num_circle_11 = 10;

	var data_no_11 = d3.range(10).map(function(i) {
		return Math.random() * 150;
	});

	var fillColorScale_no_11 = d3.scale.linear()
			.domain([0, (num_circle_11 - 1)])
			.range(['#27AFB0', '#0B3366'])
			.interpolate(d3.interpolateHsl);

	var fillColorScale_no_11_2 = d3.scale.linear()
			.domain([0, (num_circle_11 - 1)])
			.range(['#A12A7C', '#0B3366'])
			.interpolate(d3.interpolateHsl);

	function randomSeed() {
		return Math.random() - 0.5;
	}

	no_11.selectAll('circle.no_11')
		.data(data_no_11)
		.enter()
		.append('circle')
		.attr('class', 'no_11')
		.attr('cx', function() {
			return 300 + randomSeed() * 300;
		})
		.attr('cy', function() {
			return 300 + randomSeed() * 300;
		})
		.attr('r', 0)
		.attr('fill', '#fff')
		.transition()
		.delay(function(d, i) {
			return i * 100;
		})
		.duration(1000)
		.attr('r', function(d) {
			return d;
		})
		// .style('fill', '#C4D6DC')
		.style('fill', function(d, i) {
			return fillColorScale_no_11(i);
		})
		.style('fill-opacity', .3);

	no_11.selectAll('circle.no_11_2')
		.data(data_no_11)
		.enter()
		.append('circle')
		.attr('class', 'no_11_2')
		.attr('cx', function() {
			return 300 + randomSeed() * 200;
		})
		.attr('cy', function() {
			return 300 + randomSeed() * 200;
		})
		.attr('r', 0)
		.attr('fill', '#fff')
		.transition()
		.delay(function(d, i) {
			return i * 100;
		})
		.duration(1000)
		.attr('r', function(d) {
			return d;
		})
		// .attr('fill', '#EACFDE')
		.style('fill', function(d, i) {
			return fillColorScale_no_11_2(i);
		})
		.style('fill-opacity', .3);