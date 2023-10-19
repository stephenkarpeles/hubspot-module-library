// NEW STUFF BELOW
var $grid = $('.blogs-list__list .row').isotope({
  itemSelector: '.blog-post-item',
  masonry: {
    columnWidth: '.blog__grid-sizer',
    gutter: '.blog__gutter-sizer'
  },
  percentPosition: true
});

// store filter for each group
var filters = {};

$('.filters').on( 'change', function( event ) {
  var $select = $( event.target );
  // get group key
  var filterGroup = $select.attr('value-group');
  // set filter for group
  filters[ filterGroup ] = event.target.value;
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

// Lazyload
$(document).ready(function() {
  $("img.lazyload").lazyload();
});

